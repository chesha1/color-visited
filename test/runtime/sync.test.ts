// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://www.v2ex.com/"}
// 同步合并进来的记录染上色
import { beforeAll, expect, it, vi } from 'vitest'
import { isMarked, start } from './helpers'
import { addLink } from './dom'
import { fakeGitHub, FILE } from '../fakes/github'
import { encode, sync } from '../sync/helpers'
import { DAY, NOW } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const FROM_CLOUD = 'https://www.v2ex.com/t/1'
const UNVISITED = 'https://www.v2ex.com/t/2'

const fromCloud = addLink(FROM_CLOUD)
const unvisited = addLink(UNVISITED)

beforeAll(async () => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  const github = fakeGitHub()
  github.files[FILE] = await encode({ [FROM_CLOUD]: NOW - DAY })
  start()
})

it('同步之前不标记', () => {
  expect(isMarked(fromCloud)).toBe(false)
})

it('同步把云端的记录合并进来之后：标记', async () => {
  await sync()
  expect(isMarked(fromCloud)).toBe(true)
  expect(isMarked(unvisited)).toBe(false)
})
