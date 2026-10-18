import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/', 'src/components.d.ts', 'src/vite-env.d.ts'],
  },
  {
    files: ['src/**/*.js', 'src/**/*.ts', 'test/**/*.ts', '*.config.{ts,mjs}'],
    languageOptions: {
      globals: globals.browser,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-undef': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    // 每次加载页面都执行的模块。界面（Vue、Element Plus 和 ui/ 里的其他模块）到第一次用到时才执行，
    // 只从两个 import() 进来：main.ts 的设置菜单、ui/notify.ts。这条规则只管静态 import
    files: ['src/main.ts', 'src/core/**/*.ts', 'src/shared/**/*.ts', 'src/ui/notify.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['vue', 'element-plus', '@element-plus/*', '*.vue', '@/ui/*', '!@/ui/notify'],
          message: '每次加载页面都执行的模块不能静态 import 界面的代码，要用 import()（见 main.ts、ui/notify.ts）',
        }],
      }],
    },
  },
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      globals: globals.browser,
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescriptEslint,
    },
  },
  // 不写 files：作用于上面两段选中的全部文件，.vue 只管 <script>
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: false,
    braceStyle: '1tbs',
    arrowParens: true,
    quoteProps: 'as-needed',
  }),
]
