import { defineConfig } from 'vitest/config'
import path from 'path'

// 不复用 vite.config.ts：测试只需要 @ 别名，用不到 monkey、Vue 这些插件
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
