// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 点开链接时记下访问
import { beforeAll, expect, it, vi } from 'vitest'
import { isMarked, start } from './helpers'
import { addLink, click, middleClick, rightClick } from './dom'
import { store } from '../fakes/gm'
import { DAY, NOW } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const A = 'https://www.v2ex.com/t/1'
const B = 'https://www.v2ex.com/t/2'
const C = 'https://www.v2ex.com/t/3'
const OTHER_PAGE = 'https://www.v2ex.com/member/livid' // 不符合规则

const aReply = addLink(`${A}?p=2#reply3`)
const aReplyTitle = aReply.appendChild(document.createElement('span')) // 链接里的文字
const a = addLink(A) // 同一个帖子的另一个链接
const b = addLink(B)
const c = addLink(C)
const otherPage = addLink(OTHER_PAGE)

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  start()
})

it('左键：记下归一化之后的 URL，页面上同一个 URL 的链接都标记', () => {
  click(aReplyTitle)
  expect(store.get(A)).toBe(NOW)
  expect(store.has(`${A}?p=2#reply3`)).toBe(false)
  expect(isMarked(aReply)).toBe(true)
  expect(isMarked(a)).toBe(true)
  expect(isMarked(b)).toBe(false)
})

it('中键：同样记下', () => {
  middleClick(b)
  expect(store.get(B)).toBe(NOW)
  expect(isMarked(b)).toBe(true)
})

it('不符合规则的链接：不记录', () => {
  click(otherPage)
  middleClick(otherPage)
  expect(store.has(OTHER_PAGE)).toBe(false)
  expect(isMarked(otherPage)).toBe(false)
})

it('再点一次已经标记的链接：时间戳刷新成这次点击的时间', () => {
  vi.setSystemTime(NOW + DAY)
  click(a)
  expect(store.get(A)).toBe(NOW + DAY)
})

// B22：auxclick 没看 button，右键也被当成点开了链接。修好之后改成 it
it.fails('右键：不记录', () => {
  rightClick(c)
  expect(store.has(C)).toBe(false)
  expect(isMarked(c)).toBe(false)
})
