// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 本标签页、其他标签页改了设置：按新设置重新激活
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { isMarked, markColor, saveSettings, start } from './helpers'
import { addLink, click, press } from './dom'
import { setValueFromOtherTab, store } from '../fakes/gm'
import { DAY, NOW, YEAR } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const CTRL_SHIFT_V = { ctrlKey: true, shiftKey: true, altKey: false, metaKey: false, code: 'KeyV' }
const ALT_B = { ctrlKey: false, shiftKey: false, altKey: true, metaKey: false, code: 'KeyB' }
const SHIFT_X = { ctrlKey: false, shiftKey: true, altKey: false, metaKey: false, code: 'KeyX' }

const SETTINGS = {
  general: { color: 'gray', expirationTime: YEAR, debug: false },
  preset: { v2ex: true },
  batch: CTRL_SHIFT_V,
  sync: { enabled: false, githubToken: '', gistId: '' },
}

// 其他标签页保存设置：它读到的也是存储里的这一份，改完整个写回去
function saveInOtherTab(change: (settings: typeof SETTINGS) => void): void {
  const settings = structuredClone(store.get('userSettings')) as typeof SETTINGS
  change(settings)
  setValueFromOtherTab('userSettings', settings)
}

const VISITED = 'https://www.v2ex.com/t/1'
const UNVISITED = 'https://www.v2ex.com/t/2'

const visited = addLink(VISITED)
const unvisited = addLink(UNVISITED)

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  store.set('userSettings', SETTINGS)
  store.set(VISITED, NOW - DAY)
  start()
})

describe('颜色', () => {
  it('启动时用存储里的', () => {
    expect(markColor()).toBe('gray')
  })

  it('本标签页改了', () => {
    saveSettings({ general: { color: 'red' } })
    expect(markColor()).toBe('red')
    expect(isMarked(visited)).toBe(true)
  })

  it('其他标签页改了', () => {
    saveInOtherTab((settings) => {
      settings.general.color = 'blue'
    })
    expect(markColor()).toBe('blue')
    expect(isMarked(visited)).toBe(true)
  })
})

describe('站点开关', () => {
  it('本标签页关掉：标记和染色样式都去掉，点击不记录', () => {
    saveSettings({ preset: { v2ex: false } })
    expect(isMarked(visited)).toBe(false)
    expect(markColor()).toBeUndefined()
    click(unvisited)
    expect(store.has(UNVISITED)).toBe(false)
  })

  it('其他标签页打开：重新标记，点击照常记录', () => {
    saveInOtherTab((settings) => {
      settings.preset.v2ex = true
    })
    expect(isMarked(visited)).toBe(true)
    click(unvisited)
    expect(store.get(UNVISITED)).toBe(NOW)
  })
})

// 每次先加一个还没访问过的链接：快捷键触发了，就会把它记下
describe('批量标记的快捷键', () => {
  it('本标签页改了：旧的不再触发，新的触发', () => {
    const url = 'https://www.v2ex.com/t/3'
    addLink(url)
    saveSettings({ batch: ALT_B })
    press(CTRL_SHIFT_V)
    expect(store.has(url)).toBe(false)
    press(ALT_B)
    expect(store.get(url)).toBe(NOW)
  })

  it('其他标签页改了：旧的不再触发，新的触发', () => {
    const url = 'https://www.v2ex.com/t/4'
    addLink(url)
    saveInOtherTab((settings) => {
      settings.batch = SHIFT_X
    })
    press(ALT_B)
    expect(store.has(url)).toBe(false)
    press(SHIFT_X)
    expect(store.get(url)).toBe(NOW)
  })
})
