// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 激活页初次染色
import { beforeAll, expect, it, vi } from 'vitest'
import { isMarked, start } from './helpers'
import { addLink, addSvgLink, click } from './dom'
import { store } from '../fakes/gm'
import { DAY, NOW, YEAR } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const VISITED = 'https://www.v2ex.com/t/1'
const EXPIRED = 'https://www.v2ex.com/t/2'
const OTHER_PAGE = 'https://www.v2ex.com/member/livid' // 不符合 v2ex 的规则
const OTHER_SITE = 'https://linux.do/t/topic/1' // 符合 linux.do 的规则

// SVG 里的 <a>、href 解析不了的链接放在最前面：处理它们时出错的话，后面的链接都不会处理
const svgLink = addSvgLink(VISITED)
const badLink = addLink('http://')
const visited = addLink(`${VISITED}?p=2#reply3`)
const unvisited = addLink('https://www.v2ex.com/t/3')
const expired = addLink(EXPIRED)
const otherPage = addLink(OTHER_PAGE)
const otherSite = addLink(OTHER_SITE)

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  for (const url of [VISITED, OTHER_PAGE, OTHER_SITE]) store.set(url, NOW - DAY)
  store.set(EXPIRED, NOW - YEAR - 1)
  vi.spyOn(console, 'error')
  start()
})

it('访问过、没过期的链接：按归一化之后的 URL 查到记录，标记', () => {
  expect(isMarked(visited)).toBe(true)
})

it('记录过期了：不标记。记录还在存储里，不标记靠的是读的时候判断过期，不是清理', () => {
  expect(store.has(EXPIRED)).toBe(true)
  expect(isMarked(expired)).toBe(false)
})

it.each([
  ['没访问过', unvisited],
  ['访问过，但不符合这个站点的规则', otherPage],
  ['访问过，符合别的站点的规则', otherSite],
])('不标记：%s', (_, link) => {
  expect(isMarked(link)).toBe(false)
})

it('SVG 里的 <a>、href 解析不了的链接：不标记，点了也不记录，不报错', () => {
  expect(isMarked(svgLink)).toBe(false)
  expect(isMarked(badLink)).toBe(false)
  click(svgLink)
  click(badLink)
  expect(store.get(VISITED)).toBe(NOW - DAY)
  expect(store.has('http://')).toBe(false)
  expect(console.error).not.toHaveBeenCalled()
})
