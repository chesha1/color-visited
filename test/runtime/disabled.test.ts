// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 站点在设置里被关掉：激活页上也不标记，点击也不记录
import { beforeAll, expect, it, vi } from 'vitest'
import { isMarked, start } from './helpers'
import { addLink, click, middleClick } from './dom'
import { store } from '../fakes/gm'
import { DAY, NOW, YEAR } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const VISITED = 'https://www.v2ex.com/t/1'
const UNVISITED = 'https://www.v2ex.com/t/2'

const visited = addLink(VISITED)
const unvisited = addLink(UNVISITED)

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  store.set('userSettings', {
    general: { color: 'gray', expirationTime: YEAR, debug: false },
    preset: { v2ex: false },
    batch: { ctrlKey: true, shiftKey: true, altKey: false, metaKey: false, code: 'KeyV' },
    sync: { enabled: false, githubToken: '', gistId: '' },
  })
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
