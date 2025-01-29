import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylistic.configs.customize({
        semi: true,
      }).rules,
    },
  },
  {
    rules: {
      'no-undef': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
    },
  },
];
