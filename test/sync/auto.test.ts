import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { encode } from './helpers'
import { saveSettings } from '@/core/settings'
import { getLastSyncTime } from '@/core/storage'
import { autoSync, runSync } from '@/core/sync'
import { notify } from '@/ui/notify'
import { fakeGitHub, FILE, GIST_ID, TOKEN, type FakeGitHub } from '../fakes/github'
import { resetGM, setValueFromOtherTab } from '../fakes/gm'
import { NOW } from '../time'

// 加载页面时，启用了同步、而且距上次自动同步开始满 10 分钟，才在后台同步一次。
// 所有标签页合起来算，失败了也算一次；设置页的"立即同步"不受这个限制

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
  vi.restoreAllMocks()
})

// 不同步时没有什么可等的，等一轮事件循环：要是同步了，读 Gist 的请求早就发出去了
const settle = () => new Promise((resolve) => setTimeout(resolve))

// 等到同步成功、记下了时间。用了假的 Date 时，vi.waitFor 每查一次都把时间往前拨一个间隔，所以不一定正好是 NOW
const synced = () => vi.waitFor(() => expect(getLastSyncTime()).toBeGreaterThanOrEqual(NOW))

it('从没自动同步过：同步，成功了不弹通知', async () => {
  autoSync()
  await synced()
  expect(github.requests).toEqual(['GET gist'])
  expect(notify).not.toHaveBeenCalled()
})

it('其他标签页上次自动同步还不到 10 分钟：不同步', async () => {
  setValueFromOtherTab('lastAutoSyncTime', NOW - 10 * MINUTE + 1)
  autoSync()
  await settle()
  expect(github.requests).toEqual([])
})

it('其他标签页上次自动同步正好是 10 分钟前：同步', async () => {
  setValueFromOtherTab('lastAutoSyncTime', NOW - 10 * MINUTE)
  autoSync()
  await synced()
  expect(github.requests).toEqual(['GET gist'])
})

it('没启用同步：不同步，也不算一次，开启之后加载页面就同步', async () => {
  saveSettings({ sync: { enabled: false } })
  autoSync()
  await settle()
  expect(github.requests).toEqual([])

  saveSettings({ sync: { enabled: true } })
  autoSync()
  await synced()
  expect(github.requests).toEqual(['GET gist'])
})

// 令牌过期、被撤销，Gist 被删，这些失败不会自己好
describe('失败了也算一次', () => {
  beforeEach(async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {}) // 同步失败时打的警告，测试里不看
    github.failures['GET gist'] = 401
    autoSync()
    await vi.waitFor(() => expect(notify).toHaveBeenCalledWith('同步失败: 获取 Gist 失败: 401（令牌无效或已过期）', 'error'))
  })

  it('不到 10 分钟再加载页面：不请求、不弹通知', async () => {
    vi.setSystemTime(NOW + 10 * MINUTE - 1)
    autoSync()
    await settle()
    expect(github.requests).toEqual(['GET gist'])
    expect(notify).toHaveBeenCalledTimes(1)
  })

  it('满 10 分钟再试', async () => {
    vi.setSystemTime(NOW + 10 * MINUTE)
    autoSync()
    await vi.waitFor(() => expect(notify).toHaveBeenCalledTimes(2))
    expect(github.requests).toEqual(['GET gist', 'GET gist'])
  })

  it('"立即同步"不受限制：换了令牌，马上就能同步', async () => {
    delete github.failures['GET gist']
    await runSync({ manual: true })
    expect(github.requests).toEqual(['GET gist', 'GET gist'])
    expect(notify).toHaveBeenLastCalledWith('同步完成', 'success')
  })
})
