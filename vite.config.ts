import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { SITES } from './src/shared/sites.ts'
import monkey from 'vite-plugin-monkey'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'

// 注入范围：写了 match 的站点（SPA）生成 @match，其余站点按 pages 生成 @include
const include = SITES.filter((site) => !site.match).flatMap((site) => site.pages)
const match = SITES.flatMap((site) => site.match ?? [])

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(import.meta.dirname, 'src', 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(import.meta.dirname, 'src', 'components.d.ts'),
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'color-visited 对已访问过的链接染色',
        version: '2.23.2',
        description: '把访问过的链接染色成灰色',
        author: 'chesha1',
        license: 'GPL-3.0-only',
        include,
        match,
        'run-at': 'document-idle',
        noframes: true,
        homepage: 'https://github.com/chesha1/color-visited',
        supportURL: 'https://github.com/chesha1/color-visited/issues',
        connect: ['gist.githubusercontent.com'],
      },
    }),
  ],
})
