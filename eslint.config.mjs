import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['src/auto-imports.d.ts', 'src/components.d.ts', 'src/vite-env.d.ts'],
  },
  {
    files: ['src/**/*.js', 'src/**/*.ts'],
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
      '@stylistic': stylistic,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-undef': 'off',
      'no-useless-escape': 'off', 
      'no-unused-vars': 'off',
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
      vue: vue,
      '@typescript-eslint': typescriptEslint,
      '@stylistic': stylistic,
    },
  },
];
