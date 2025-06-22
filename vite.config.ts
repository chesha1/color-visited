import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { PRESET_RULES } from './src/core/config';
import monkey from 'vite-plugin-monkey';
import path from 'path';

const includeArray = Object.keys(PRESET_RULES).map(key => PRESET_RULES[key].pages).flat();

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'color-visited 对已访问过的链接染色',
        version: '2.0.2',
        description: '把访问过的链接染色成灰色',
        author: 'chesha1',
        license: 'GPL-3.0-only',
        include: includeArray,
        "run-at": 'document-end',
        noframes: true,
        homepage: 'https://github.com/chesha1/color-visited',
        supportURL: 'https://github.com/chesha1/color-visited/issues',
      },
    }),
  ],
});
