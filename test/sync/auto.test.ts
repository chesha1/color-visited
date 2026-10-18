import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { encode } from './helpers'
import { saveSettings } from '@/core/settings'
import { getLastSyncTime, setLastSyncTime } from '@/core/storage'
import { autoSync } from '@/core/sync'
import { notify } from '@/ui/notify'
import { fakeGitHub, FILE, GIST_ID, TOKEN, type FakeGitHub } from '../fakes/github'
import { resetGM } from '../fakes/gm'
import { NOW } from '../time'

// 加载页面时，启用了同步、而且距上次同步成功满 10 分钟，才在后台同步一次

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))
vi.mock('@/ui/notify', () => ({ notify: vi.fn() }))

const MINUTE = 60 * 1000

let github: FakeGitHub

beforeEach(async () => {
  resetGM()
  github = fakeGitHub()
  github.files[FILE] = await encode({})
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  saveSettings({ sync: { enabled: true, githubToken: TOKEN, gistId: GIST_ID } })
})

afterEach(() => {
  vi.useRealTimers()
  vi.clearAllMocks()
})

// 不同步时没有什么可等的，等一轮事件循环：要是同步了，读 Gist 的请求早就发出去了
const settle = () => new Promise((resolve) => setTimeout(resolve))

it.each([
  ['从没同步过', 0],
  ['上次同步正好是 10 分钟前', NOW - 10 * MINUTE],
])('%s：同步，成功了不弹通知', async (_, lastSyncTime) => {
  setLastSyncTime(lastSyncTime)
  autoSync()
  // 等到记下这次同步的时间。用了假的 Date 时，vi.waitFor 每查一次都把时间往前拨一个间隔，所以不一定正好是 NOW
  await vi.waitFor(() => expect(getLastSyncTime()).toBeGreaterThanOrEqual(NOW))
  expect(github.requests).toEqual(['GET gist'])
  expect(notify).not.toHaveBeenCalled()
})

it('上次同步还不到 10 分钟：不同步', async () => {
  setLastSyncTime(NOW - 10 * MINUTE + 1)
  autoSync()
  await settle()
  expect(github.requests).toEqual([])
})

it('没启用同步：不同步', async () => {
  saveSettings({ sync: { enabled: false } })
  autoSync()
  await settle()
  expect(github.requests).toEqual([])
})
