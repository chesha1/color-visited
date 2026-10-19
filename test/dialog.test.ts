// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 设置对话框：所有 tab 编辑同一份 draft，只有一个保存；只有关闭按钮会关，关掉就卸载。
// 在 jsdom 里执行构建出来的脚本（见 ./build），像用户那样点对话框里的元素。文件里的测试按顺序接着前一个的状态跑。
// 对话框和取色面板的外观、取色面板里的操作，要在浏览器里看
import { beforeAll, expect, it, vi } from 'vitest'
import { buildScript, pageStyles, runScript, shadowRoots } from './build'
import * as gm from './fakes/gm'
import { addLink, press } from './runtime/dom'
import { DAY, YEAR } from './time'

const SHORTCUT = { ctrlKey: true, shiftKey: true, altKey: false, metaKey: false, code: 'KeyV' }

const SETTINGS = {
  general: { color: 'gray', expirationTime: YEAR, debug: false },
  preset: {},
  batch: SHORTCUT,
  sync: { enabled: false, githubToken: '', gistId: '' },
}

// 对话框里的输入框。tab 的 name 是设置的分组名：general、preset、batch、sync，对应的面板是 #pane-分组名
const COLOR = '#pane-general input[placeholder="请输入颜色值"]'
const DAYS = '#pane-general .el-input-number input'
const SHORTCUT_INPUT = '#pane-batch input'
const GIST = '#pane-sync input[placeholder^="请输入 Gist ID"]'

beforeAll(async () => {
  const script = await buildScript()
  gm.store.set('userSettings', SETTINGS)
  runScript(script)
}, 60_000)

// 界面在 closed shadow root 里，从 runScript 记下的 shadow root 里找
function find(selector: string): HTMLElement | null {
  return shadowRoots[0]?.querySelector<HTMLElement>(selector) ?? null
}

function get(selector: string): HTMLElement {
  const element = find(selector)
  if (!element) throw new Error(`对话框里没有 ${selector}`)
  return element
}

function storedSettings(): typeof SETTINGS {
  return gm.store.get('userSettings') as typeof SETTINGS
}

async function showTab(name: string): Promise<void> {
  get(`#tab-${name}`).click()
  await vi.waitFor(() => expect(get(`#tab-${name}`).classList).toContain('is-active'))
}

function input(selector: string): HTMLInputElement {
  return get(selector) as HTMLInputElement
}

// 在输入框里填入一个值，和用户输入一样触发 input 事件
function fill(selector: string, value: string): void {
  const element = input(selector)
  element.value = value
  element.dispatchEvent(new Event('input', { bubbles: true }))
}

// 预设网站 tab 里某个站点的开关
function siteSwitch(name: string): HTMLElement {
  const card = [...shadowRoots[0].querySelectorAll('#pane-preset h4')].find((title) => title.textContent === name)
  const element = card?.closest('.rounded-xl')?.querySelector<HTMLElement>('.el-switch')
  if (!element) throw new Error(`预设网站里没有 ${name}`)
  return element
}

function button(text: string): HTMLButtonElement {
  const element = [...shadowRoots[0].querySelectorAll('button')].find((button) => button.textContent?.trim() === text)
  if (!element) throw new Error(`对话框里没有按钮 ${text}`)
  return element
}

function saveButton(): HTMLButtonElement {
  return get('.el-dialog__footer .el-button--primary') as HTMLButtonElement
}

async function save(): Promise<void> {
  await vi.waitFor(() => expect(saveButton().disabled).toBe(false))
  saveButton().click()
}

async function openSettings(): Promise<void> {
  gm.menuCommands.get('设置')!()
  await vi.waitFor(() => get('.el-dialog'))
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

it('点菜单打开；已经开着时再点，什么都不做', async () => {
  await openSettings()
  gm.menuCommands.get('设置')!()
  await wait(50)
  expect(shadowRoots[0].querySelectorAll('.el-dialog')).toHaveLength(1)
  expect(saveButton().disabled).toBe(true)
})

// B24：以前只保存当前 tab，切到另一个 tab 再点保存，前一个 tab 的修改悄悄丢掉
it('在两个 tab 里各改一项，点一次保存，两项都存下来', async () => {
  fill(COLOR, 'blue')
  await showTab('preset')
  siteSwitch('36氪').click()
  await save()
  expect(storedSettings()).toEqual({
    ...SETTINGS,
    general: { ...SETTINGS.general, color: 'blue' },
    preset: { '36kr': false },
  })
  await vi.waitFor(() => expect(saveButton().disabled).toBe(true))
})

it('对话框开着时其他标签页改了别的字段：这边保存之后那个字段保留，对话框显示存储里的最新值', async () => {
  siteSwitch('36氪').click()
  const settings = storedSettings()
  gm.setValueFromOtherTab('userSettings', { ...settings, general: { ...settings.general, expirationTime: 30 * DAY } })
  await save()
  expect(storedSettings()).toEqual({
    ...SETTINGS,
    general: { ...SETTINGS.general, color: 'blue', expirationTime: 30 * DAY },
    preset: { '36kr': true },
  })
  await showTab('general')
  expect(input(DAYS).value).toBe('30')
})

// el-input-number 每按一个键就更新一次 model：从 30 退格到空，中间会经过 3
it('过期时间输到一半清空：回到保存着的天数，不算改动', async () => {
  fill(DAYS, '3')
  fill(DAYS, '')
  input(DAYS).dispatchEvent(new Event('change', { bubbles: true }))
  await vi.waitFor(() => expect(input(DAYS).value).toBe('30'))
  expect(saveButton().disabled).toBe(true)
})

it('点背景、按 Esc 都不关', async () => {
  const overlay = get('.el-overlay-dialog')
  for (const type of ['mousedown', 'mouseup', 'click']) overlay.dispatchEvent(new MouseEvent(type, { bubbles: true }))
  press({ code: 'Escape', key: 'Escape' })
  await wait(200)
  expect(get('.el-overlay').style.display).not.toBe('none')
})

// 先加一个还没访问过的链接：批量标记触发了，就会把它记下
it('快捷键 tab：按下的键录成快捷键，Esc 也录得到；录的正好是现在的批量快捷键时，不触发批量标记', async () => {
  const url = 'https://www.v2ex.com/t/1'
  addLink(url)
  await showTab('batch')

  press(SHORTCUT)
  expect(gm.store.has(url)).toBe(false)
  await wait(50)
  expect(saveButton().disabled).toBe(true)

  press({ code: 'Escape', key: 'Escape' })
  await vi.waitFor(() => expect(input(SHORTCUT_INPUT).value).toBe('Esc'))
  expect(saveButton().disabled).toBe(false)
})

it('切到别的 tab 就不再录', async () => {
  await showTab('general')
  press({ code: 'KeyQ', key: 'q' })
  await wait(50)
  expect(input(SHORTCUT_INPUT).value).toBe('Esc')
})

it('同步 tab：Gist 网址失焦后变成纯 ID；同步设置有没保存的修改时不能立即同步', async () => {
  await showTab('sync')
  get('#pane-sync .el-switch').click()
  await vi.waitFor(() => expect(input(GIST).disabled).toBe(false))
  fill(GIST, 'https://gist.github.com/someone/abc123/')
  input(GIST).dispatchEvent(new FocusEvent('blur'))
  await vi.waitFor(() => expect(input(GIST).value).toBe('abc123'))
  expect(button('立即同步').disabled).toBe(true)
  expect(button('测试连接').disabled).toBe(true) // 还没填令牌
})

it('同步 tab：最后同步时间跟着存储刷新', async () => {
  expect(get('#pane-sync').textContent).toContain('从未同步')
  gm.setValueFromOtherTab('lastSyncTime', Date.now())
  await vi.waitFor(() => expect(get('#pane-sync').textContent).not.toContain('从未同步'))
})

it('关掉：卸载对话框，删掉挂载点；取色面板的样式从宿主页面上删掉，只剩染色样式；没保存的修改不存', async () => {
  expect(pageStyles()).toHaveLength(2)
  get('.el-dialog__headerbtn').click()
  await vi.waitFor(() => expect(find('.el-dialog')).toBeNull())
  expect(shadowRoots[0].querySelector('div')).toBeNull()
  expect(pageStyles().map((style) => style.id)).toEqual(['color-visited-style'])
  expect(storedSettings().batch).toEqual(SHORTCUT)
  expect(storedSettings().sync).toEqual(SETTINGS.sync)
})

it('再打开：按存储里的当前设置重新开始，回到第一个 tab', async () => {
  await openSettings()
  expect(get('#tab-general').classList).toContain('is-active')
  expect(input(SHORTCUT_INPUT).value).toBe('Ctrl + Shift + V')
  expect(input(COLOR).value).toBe('blue')
  expect(input(DAYS).value).toBe('30')
  expect(saveButton().disabled).toBe(true)
  expect(pageStyles()).toHaveLength(2)
})
