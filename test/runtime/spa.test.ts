// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://linux.do/latest"}
// SPA 站内跳转：激活页 → 非激活页 → 激活页
import { beforeAll, expect, it, vi } from 'vitest'
import { isMarked, markColor, start } from './helpers'
import { addLink, click, navigate } from './dom'
import { store } from '../fakes/gm'
import { DAY, NOW } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const VISITED = 'https://linux.do/t/topic/100'
const UNVISITED = 'https://linux.do/t/topic/200'

const nav = document.body.appendChild(document.createElement('nav')) // 跳转时不变的部分
const main = document.body.appendChild(document.createElement('main')) // 跳转时换掉的部分
const navLink = addLink(VISITED, nav)

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  store.set(VISITED, NOW - DAY)
  start()
})

it('激活页：标记', () => {
  expect(isMarked(navLink)).toBe(true)
})

it('跳到非激活页（帖子）：标记和染色样式都去掉，点击不再记录', async () => {
  const [unvisited] = await navigate('/t/topic/100', main, UNVISITED)
  expect(isMarked(navLink)).toBe(false)
  expect(markColor()).toBeUndefined()
  click(unvisited)
  expect(store.has(UNVISITED)).toBe(false)
})

it('再跳回激活页：重新标记，点击照常记录', async () => {
  const [visited, unvisited] = await navigate('/c/develop/4', main, `${VISITED}/12`, UNVISITED)
  expect(isMarked(navLink)).toBe(true)
  expect(isMarked(visited)).toBe(true)
  click(unvisited)
  expect(store.get(UNVISITED)).toBe(NOW)
  expect(isMarked(unvisited)).toBe(true)
})
