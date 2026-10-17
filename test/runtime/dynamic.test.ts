// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 页面上新出现的链接、换了 href 的链接：不看原来有没有标记，都按当前的 href 重新判断
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { isMarked, start } from './helpers'
import { addLink, addSvgLink, flush } from './dom'
import { store } from '../fakes/gm'
import { DAY, NOW } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const VISITED = 'https://www.v2ex.com/t/1'
const UNVISITED = 'https://www.v2ex.com/t/2'
const OTHER_PAGE = 'https://www.v2ex.com/member/livid' // 访问过，但不符合规则

beforeAll(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  store.set(VISITED, NOW - DAY)
  store.set(OTHER_PAGE, NOW - DAY)
  start()
})

it('新插入的链接：插入的节点本身是链接，或者链接在插入的节点里面', async () => {
  const block = document.createElement('div')
  // SVG 里的 <a>、href 解析不了的链接放在最前面：处理它们时出错的话，后面的链接都不会处理
  const svgLink = addSvgLink(VISITED, block)
  addLink('http://', block)
  const visitedInBlock = addLink(`${VISITED}?p=2`, block)
  const unvisitedInBlock = addLink(UNVISITED, block)
  document.body.append(block)
  const visited = addLink(VISITED)
  await flush()
  expect(isMarked(visitedInBlock)).toBe(true)
  expect(isMarked(unvisitedInBlock)).toBe(false)
  expect(isMarked(visited)).toBe(true)
  expect(isMarked(svgLink)).toBe(false)
})

// 翻页、"换一批"、虚拟滚动这类列表会复用 <a>，只换 href
describe('换了 href', () => {
  const changes = [
    ['标记过的换成没访问过的', VISITED, UNVISITED, false],
    ['标记过的换成不符合规则的', VISITED, OTHER_PAGE, false],
    ['没标记的换成访问过的', UNVISITED, VISITED, true],
  ] as const

  it.each(changes)('在页面上%s', async (_, from, to, marked) => {
    const link = addLink(from)
    await flush()
    expect(isMarked(link)).toBe(!marked)
    link.setAttribute('href', to)
    await flush()
    expect(isMarked(link)).toBe(marked)
  })

  it('去掉了 href', async () => {
    const link = addLink(VISITED)
    await flush()
    link.removeAttribute('href')
    await flush()
    expect(isMarked(link)).toBe(false)
  })

  // 移出 DOM 之后再改的 href，observer 收不到，只能在插回来时重新判断。
  // 要等 observer 的回调跑过再改：刚移出、回调还没跑时改的，浏览器收得到、jsdom 收不到，先等一下就和真实页面一样只走插回来这条路
  it.each(changes)('移出 DOM，%s，再插回来', async (_, from, to, marked) => {
    const link = addLink(from)
    await flush()
    link.remove()
    await flush()
    link.setAttribute('href', to)
    document.body.append(link)
    await flush()
    expect(isMarked(link)).toBe(marked)
  })

  it('克隆出来的链接带着原来的标记，改了 href 再插入', async () => {
    const link = addLink(VISITED)
    await flush()
    const clone = link.cloneNode(true) as HTMLAnchorElement
    clone.setAttribute('href', UNVISITED)
    document.body.append(clone)
    await flush()
    expect(isMarked(clone)).toBe(false)
    expect(isMarked(link)).toBe(true)
  })
})
