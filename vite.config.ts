import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { PRESET_RULES } from './src/core/config';
import monkey from 'vite-plugin-monkey';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'

const includeArray = Object.values(PRESET_RULES).flatMap(rule => rule.pages);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(__dirname, 'src', 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(__dirname, 'src', 'components.d.ts'),
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'color-visited 对已访问过的链接染色',
        version: '2.16.1',
        description: '把访问过的链接染色成灰色',
        author: 'chesha1',
        license: 'GPL-3.0-only',
        include: includeArray,
        "run-at": 'document-idle',
        noframes: true,
        homepage: 'https://github.com/chesha1/color-visited',
        supportURL: 'https://github.com/chesha1/color-visited/issues',
      },
    }),
  ],
});
