// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 构建出来的脚本：只有一个文件，头部要求放进隔离环境；加载页面时只执行内核，界面（Vue、Element Plus）到第一次通知、第一次打开设置时才执行；
// 界面的样式都写在它的 closed shadow root 里、不用 rem，宿主页面上只多一段染色样式，设置对话框开着时再多一份给取色面板的样式；
// 通知和对话框用同一份 Element Plus 配置。
// 先构建，再在 jsdom 里执行产物（见 ./build），GM API 换成内存版。样式在页面上的效果、对话框的外观，要在浏览器里看
import { beforeAll, expect, it, vi } from 'vitest'
import { ELEMENT_PLUS_CONFIG } from '@/ui/root'
import { buildScript, pageStyles, runScript, shadowRoots } from './build'
import * as gm from './fakes/gm'
import { addLink } from './runtime/dom'
import { DAY } from './time'

const VISITED = 'https://www.v2ex.com/t/1'
const NEW = 'https://www.v2ex.com/t/2'
const SHORTCUT = { ctrlKey: true, shiftKey: true, altKey: false, metaKey: false, code: 'KeyV' }

let script = ''
const visited = addLink(VISITED)
const unvisited = addLink(NEW)

function cssIn(root: ShadowRoot): string[] {
  return [...root.querySelectorAll('style')].map((style) => style.textContent)
}

beforeAll(async () => {
  script = await buildScript()
  gm.store.set('userSettings', { batch: SHORTCUT })
  gm.store.set(VISITED, Date.now() - DAY)
  runScript(script)
}, 60_000)

it('只有一个文件：不 @require 别的脚本，不是 SystemJS 格式，样式不从 unpkg 加载，也不用 GM_addStyle 写进页面', () => {
  expect(script.slice(0, script.indexOf('==/UserScript=='))).not.toContain('@require')
  for (const text of ['System.register', 'unpkg.com', 'GM_addStyle']) expect(script).not.toContain(text)
})

// 两个管理器各认各的写法。开发模式的头部不写，见 vite.config.ts
it('头部要求放进隔离环境：Tampermonkey 认 @sandbox DOM，Violentmonkey 认 @inject-into content', () => {
  const header = script.slice(0, script.indexOf('==/UserScript=='))
  expect(header).toMatch(/^\/\/ @sandbox\s+DOM$/m)
  expect(header).toMatch(/^\/\/ @inject-into\s+content$/m)
})

it('加载页面时只执行内核：链接照常标记，菜单注册了；界面的代码没有执行，页面上没有宿主元素', () => {
  expect(visited.hasAttribute('data-color-visited')).toBe(true)
  expect(gm.menuCommands.has('设置')).toBe(true)
  expect(document.querySelector('color-visited-ui')).toBeNull()
  expect(Reflect.get(globalThis, '__VUE__')).toBeUndefined()
  // Element Plus 的组件样式跟着组件的模块初始化收集起来，一段都没有，说明这些模块都没执行
  expect(Reflect.get(globalThis, Symbol.for('color-visited/css'))).toBeUndefined()
  expect(pageStyles().map((style) => style.id)).toEqual(['color-visited-style'])
})

it('第一次通知时才建界面：通知在 closed shadow root 里，样式也都写在里面，宿主页面上还是只有染色样式', async () => {
  document.body.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, ...SHORTCUT }))
  await vi.waitFor(() => expect(shadowRoots[0]?.querySelector('.el-message')?.textContent).toContain('已批量添加 1 个链接到已访问记录'))
  expect(unvisited.hasAttribute('data-color-visited')).toBe(true)
  expect(document.querySelectorAll('color-visited-ui')).toHaveLength(1)
  expect(shadowRoots).toHaveLength(1)
  expect(shadowRoots[0].mode).toBe('closed')

  const [own, elementPlus] = cssIn(shadowRoots[0])
  // Tailwind 的变量初始值不再只给旧版 Safari、Firefox：@property 在 shadow root 里不生效，要靠它
  expect(own).toMatch(/@layer properties\s*\{/)
  expect(own).not.toMatch(/@layer properties\s*\{\s*@supports/)
  // Element Plus 的变量写在宿主元素上，组件样式排在 Tailwind 的 utilities 层前面
  expect(elementPlus).toMatch(/^@layer components\{/)
  expect(elementPlus).toContain(':host{--el-')
  expect(elementPlus).not.toContain(':root')
  expect(pageStyles()).toHaveLength(1)
})

// 通知不在对话框的应用里，Element Plus 的配置要另外交给它。宿主元素没有定位，通知和页面的元素在同一个层叠上下文里比 z-index，
// Element Plus 默认从 2000 起，会被页面的置顶元素盖住（比如虎扑的顶栏）
it('没打开过设置时，通知也从配置的 z-index 起往上叠', () => {
  const message = shadowRoots[0].querySelector<HTMLElement>('.el-message')
  expect(Number(message?.style.zIndex)).toBeGreaterThanOrEqual(ELEMENT_PLUS_CONFIG.zIndex)
})

it('打开设置：对话框挂在同一个 shadow root 里，它的样式补写进去；取色面板要的样式另写进宿主页面', async () => {
  gm.menuCommands.get('设置')!()
  await vi.waitFor(() => expect(shadowRoots[0].querySelector('.el-dialog')).not.toBeNull())
  expect(shadowRoots).toHaveLength(1)
  expect(cssIn(shadowRoots[0]).at(-1)).toMatch(/^@layer components\{.*\.el-dialog\{/s)

  const [linkStyle, panelStyle] = pageStyles()
  expect(linkStyle.id).toBe('color-visited-style')
  // 原样写进去：取色面板挂在 document.body 里，变量要写在 :root 上
  expect(panelStyle.textContent).toContain(':root{--el-')
  expect(panelStyle.textContent).toContain('.el-color-picker')
})

// rem 按宿主页面 <html> 的字号算，shadow root 隔不开：页面的根字号是 12px 时（比如掘金），界面跟着缩到 3/4
it('界面的样式里没有 rem：Tailwind 的 rem 按 16px 换成了 px', () => {
  const css = cssIn(shadowRoots[0])
  expect(css[0]).toContain('--spacing:4px')
  expect(css.join('')).not.toMatch(/\drem\b/)
})
