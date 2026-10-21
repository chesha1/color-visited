import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default defineConfig(
  {
    ignores: ['dist/', 'src/components.d.ts'],
  },
  js.configs.recommended,
  // 要在 Vue 的配置前面：它给所有文件设了 TS 的解析器，.vue 要换回 vue-eslint-parser
  tseslint.configs.recommended,
  vue.configs['flat/recommended-error'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
    // .vue 里的 <script> 也是 TS：类型检查已经管了的规则（比如 no-undef），和 .ts 一样关掉
    rules: tseslint.configs.eslintRecommended.rules,
  },
  {
    rules: {
      // 用 { code: _, ...rest } 去掉一个字段。TypeScript 的 noUnusedLocals 也不管这种
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
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
  // .vue 只管 <script>，模板的格式由上面 Vue 的配置管
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: false,
    braceStyle: '1tbs',
    arrowParens: true,
    quoteProps: 'as-needed',
  }),
)
