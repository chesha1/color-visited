import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { SITES } from './src/shared/sites.ts'
import monkey from 'vite-plugin-monkey'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'

// 注入范围：写了 match 的站点（SPA）生成 @match，其余站点按 pages 生成 @include
const include = SITES.filter((site) => !site.match).flatMap((site) => site.pages)
const match = SITES.flatMap((site) => site.match ?? [])

// 产物是一个 IIFE，界面的代码也在里面，到第一次用到时才执行：codeSplitting 为 false 时，
// Rolldown 把被动态 import 的模块包进用到时才执行的初始化函数，不拆块。
// 但 Rolldown 1.2 这时仍在入口的 chunk.dynamicImports 里列出入口自己，vite-plugin-monkey 看到它就改用 SystemJS 打包
// （头部多出 3 个 @require）。所以先清空它；Rolldown 不再这样列的话，删掉这个插件。
// 退回 SystemJS 时，test/bundle.test.ts 执行产物就会报 System is not defined
function singleFile(): Plugin {
  return {
    name: 'color-visited:single-file',
    apply: 'build',
    generateBundle: {
      order: 'pre',
      handler(_, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (chunk.type === 'chunk') chunk.dynamicImports = []
        }
      },
    },
  }
}

// 让 Tailwind 的输出在 shadow root 里照常生效。Tailwind 没有这些开关，只能替换文本：
// - 边框、阴影、渐变这些工具类，靠 @property 注册的变量初始值，而 @property 在 shadow root 里不生效。
//   Tailwind 另写了一份初始值，却包在一个只针对旧版 Safari、Firefox 的 @supports 里，所以把这层 @supports 换成 @media all。
//   升级后找不到要换的文本就让构建失败，免得这些样式悄悄消失。开发时 CSS 没压缩、构建时压缩过，空白不一样
// - 间距、字号、圆角都用 rem，rem 按宿主页面 <html> 的字号算（掘金是 12px，界面跟着缩到 3/4），所以都按 16px 换成 px
function tailwindInShadowRoot(): Plugin {
  return {
    name: 'color-visited:tailwind-in-shadow-root',
    transform: {
      filter: { id: /\/src\/ui\/style\.css(\?|$)/ },
      handler(code) {
        const replaced = code.replace(/(@layer properties\s*\{\s*)@supports[^{]*\{/, '$1@media all{')
        if (replaced === code) this.error('Tailwind 输出的 @layer properties 里没有找到 @supports，见 vite.config.ts 的 tailwindInShadowRoot')
        return replaced.replace(/(\d*\.?\d+)rem\b/g, (_, value: string) => `${Number(value) * 16}px`)
      },
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: false,
      },
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    tailwindInShadowRoot(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(import.meta.dirname, 'src', 'components.d.ts'),
    }),
    singleFile(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'color-visited 对已访问过的链接染色',
        version: '2.23.10',
        description: '把访问过的链接染色成灰色',
        author: 'chesha1',
        license: 'GPL-3.0-only',
        include,
        match,
        'run-at': 'document-idle',
        noframes: true,
        // 只要 DOM、不要页面的 JS 对象，放进隔离环境（见 AGENTS.md「运行平台」）。@sandbox 给 Tampermonkey，@inject-into 给 Violentmonkey。
        // 开发模式不写：vite-plugin-monkey 的加载器把 GM API 挂在 document 的一个属性上，交给它插进页面的源码，
        // 加载器进了隔离环境，页面环境里就读不到这个属性
        ...(command === 'build' && { sandbox: 'DOM', 'inject-into': 'content' }),
        homepage: 'https://github.com/chesha1/color-visited',
        supportURL: 'https://github.com/chesha1/color-visited/issues',
        // 同步的请求走 GM_xmlhttpRequest，见 src/core/sync/github.ts
        connect: ['api.github.com', 'gist.githubusercontent.com'],
      },
      build: {
        // 打包进来的 CSS（Element Plus 的组件样式）跟着各自的模块初始化进来，不写进页面，先收进这个数组，
        // 由 ui/root.ts 写进界面的 shadow root。这个函数会被转成字符串内联进产物，不能引用外面的变量
        cssSideEffects: (css) => {
          const scope = globalThis as unknown as Record<symbol, string[] | undefined>
          const collected = scope[Symbol.for('color-visited/css')] ??= []
          collected.push(css)
        },
      },
    }),
  ],
}))
