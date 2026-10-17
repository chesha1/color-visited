// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://linux.do/t/topic/1"}
// 非激活页：不标记，点击也不记录。之后站内跳到激活页，照常工作（比如从外部链接打开帖子，再点回首页）
import { beforeAll, expect, it, vi } from 'vitest'
import { isMarked, start } from './helpers'
import { addLink, click, middleClick, navigate } from './dom'
import { store } from '../fakes/gm'
import { DAY, NOW } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const VISITED = 'https://linux.do/t/topic/100'
const UNVISITED = 'https://linux.do/t/topic/200'

const main = document.body.appendChild(document.createElement('main'))
const visited = addLink(VISITED, main)
const unvisited = addLink(UNVISITED, main)

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  store.set(VISITED, NOW - DAY)
  start()
})

it('不标记', () => {
  expect(isMarked(visited)).toBe(false)
})

it('点击不记录', () => {
  click(unvisited)
  middleClick(unvisited)
  expect(store.has(UNVISITED)).toBe(false)
  expect(isMarked(unvisited)).toBe(false)
})

it('站内跳到激活页之后：标记，点击照常记录', async () => {
  const [visited, unvisited] = await navigate('/latest', main, VISITED, UNVISITED)
  expect(isMarked(visited)).toBe(true)
  click(unvisited)
  expect(store.get(UNVISITED)).toBe(NOW)
  expect(isMarked(unvisited)).toBe(true)
})
