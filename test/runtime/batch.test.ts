// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 按快捷键批量标记，以及撤销
import { beforeAll, expect, it, vi } from 'vitest'
import { isMarked, notices, start } from './helpers'
import { addLink, addSvgLink, click, press } from './dom'
import { store } from '../fakes/gm'
import { DAY, NOW, YEAR } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const SHORTCUT = { ctrlKey: true, shiftKey: true, altKey: false, metaKey: false, code: 'KeyV' }

const VISITED = 'https://www.v2ex.com/t/1'
const EXPIRED = 'https://www.v2ex.com/t/2'
const NEW_1 = 'https://www.v2ex.com/t/3'
const NEW_2 = 'https://www.v2ex.com/t/4'
const OTHER_PAGE = 'https://www.v2ex.com/member/livid' // 不符合规则

addSvgLink(NEW_1)
addLink('http://')
const visited = addLink(VISITED)
const expired = addLink(EXPIRED)
const new1 = addLink(NEW_1)
const new2 = addLink(NEW_2)
const new2Reply = addLink(`${NEW_2}#reply1`) // 同一个帖子的另一个链接
const otherPage = addLink(OTHER_PAGE)
const input = document.body.appendChild(document.createElement('input'))

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  store.set('userSettings', {
    general: { color: 'gray', expirationTime: YEAR, debug: false },
    preset: {},
    batch: SHORTCUT,
    sync: { enabled: false, githubToken: '', gistId: '' },
  })
  store.set(VISITED, NOW - DAY)
  store.set(EXPIRED, NOW - YEAR - 1)
  store.set('lastCleanupTime', NOW) // 今天已经清理过，过期的记录留在存储里
  start()
})

// 焦点在输入框里时，快捷键可能是输入框自己的操作，比如 Ctrl+Shift+V 是浏览器的"粘贴为纯文本"
it('焦点在输入框里时不触发', () => {
  press(SHORTCUT, input)
  expect(store.has(NEW_1)).toBe(false)
  expect(notices).toEqual([])
})

it('输入法正在组字时不触发', () => {
  press({ ...SHORTCUT, isComposing: true })
  expect(store.has(NEW_1)).toBe(false)
  expect(notices).toEqual([])
})

it('页面上符合规则、还没访问过的链接记成同一个时间戳，已有的记录不改，通知上带撤销', () => {
  press(SHORTCUT)
  expect(store.get(NEW_1)).toBe(NOW)
  expect(store.get(NEW_2)).toBe(NOW)
  expect(store.get(EXPIRED)).toBe(NOW) // 过期的记录也算没访问过
  expect(store.get(VISITED)).toBe(NOW - DAY)
  expect(store.has(OTHER_PAGE)).toBe(false)
  for (const link of [visited, expired, new1, new2, new2Reply]) expect(isMarked(link)).toBe(true)
  expect(isMarked(otherPage)).toBe(false)
  expect(notices).toEqual([{ message: '已批量添加 3 个链接到已访问记录', type: 'success', undo: expect.any(Function) }])
})

it('没有新的链接时只提示', () => {
  press(SHORTCUT)
  expect(notices.at(-1)?.message).toBe('没有找到新的符合规则的链接可添加')
})

it('撤销：只删之后没再点开过的记录，并去掉对应的标记', () => {
  vi.setSystemTime(NOW + 1000)
  click(new1) // 标记之后又点开了它，时间戳刷新了
  notices[0].undo?.()
  expect(store.get(NEW_1)).toBe(NOW + 1000)
  expect(store.has(NEW_2)).toBe(false)
  expect(store.has(EXPIRED)).toBe(false)
  expect(store.get(VISITED)).toBe(NOW - DAY)
  for (const link of [visited, new1]) expect(isMarked(link)).toBe(true)
  for (const link of [expired, new2, new2Reply]) expect(isMarked(link)).toBe(false)
  expect(notices.at(-1)?.message).toBe('已撤销 2 个链接，1 个点开过的保留')
})
