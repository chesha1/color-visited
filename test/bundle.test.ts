// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 构建出来的脚本：只有一个文件；加载页面时只执行内核，界面（Vue、Element Plus）到第一次通知、第一次打开设置时才执行；
// 界面的样式都写在它的 closed shadow root 里，宿主页面上只多一段染色样式，打开过设置之后再多一份给取色面板的样式。
// 先构建，再在 jsdom 里执行产物，GM API 换成内存版。样式在页面上的效果、对话框的外观，要在浏览器里看
import { execFile } from 'node:child_process'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'
import { beforeAll, expect, it, vi } from 'vitest'
import * as gm from './fakes/gm'
import { addLink } from './runtime/dom'
import { DAY } from './time'

const ROOT = path.resolve(import.meta.dirname, '..')

const VISITED = 'https://www.v2ex.com/t/1'
const NEW = 'https://www.v2ex.com/t/2'
const SHORTCUT = { ctrlKey: true, shiftKey: true, altKey: false, metaKey: false, code: 'KeyV' }

let script = ''
const visited = addLink(VISITED)
const unvisited = addLink(NEW)
// 脚本建的 shadow root。closed 的从外面拿不到，所以执行产物之前换掉 attachShadow，记下它返回的
const shadowRoots: ShadowRoot[] = []

// 和发版时一样，另起一个进程用命令行构建。不能在测试的进程里构建：这里的 Node 带着 development 条件解析依赖，
// Vue 的模板编译器是开发版，产物会多出模板里的注释。Vitest 设的 NODE_ENV 等环境变量也不传过去
async function buildScript(): Promise<string> {
  const outDir = await mkdtemp(path.join(tmpdir(), 'color-visited-'))
  const env = Object.fromEntries(Object.entries(process.env).filter(([name]) => !/^(NODE_ENV|TEST|VITEST.*)$/.test(name)))
  try {
    const vite = path.join(ROOT, 'node_modules/vite/bin/vite.js')
    await promisify(execFile)(process.execPath, [vite, 'build', '--outDir', outDir, '--logLevel', 'error'], { cwd: ROOT, env })
    return await readFile(path.join(outDir, 'color-visited.user.js'), 'utf8')
  } finally {
    await rm(outDir, { recursive: true, force: true })
  }
}

// 页面上的 <style>，不含 shadow root 里的
function pageStyles(): HTMLStyleElement[] {
  return [...document.querySelectorAll('style')]
}

function cssIn(root: ShadowRoot): string[] {
  return [...root.querySelectorAll('style')].map((style) => style.textContent)
}

beforeAll(async () => {
  script = await buildScript()

  gm.store.set('userSettings', { batch: SHORTCUT })
  gm.store.set(VISITED, Date.now() - DAY)
  const { attachShadow } = Element.prototype
  Element.prototype.attachShadow = function (init: ShadowRootInit) {
    const root = attachShadow.call(this, init)
    shadowRoots.push(root)
    return root
  }
  for (const [name, value] of Object.entries(gm)) {
    if (name.startsWith('GM_')) Object.assign(globalThis, { [name]: value })
  }
  // 间接调用 eval：在全局作用域里执行，和管理器把脚本注入页面一样
  ;(0, eval)(script)
}, 60_000)

it('只有一个文件：不 @require 别的脚本，不是 SystemJS 格式，样式不从 unpkg 加载，也不用 GM_addStyle 写进页面', () => {
  expect(script.slice(0, script.indexOf('==/UserScript=='))).not.toContain('@require')
  for (const text of ['System.register', 'unpkg.com', 'GM_addStyle']) expect(script).not.toContain(text)
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
