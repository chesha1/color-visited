import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getLastSyncTime, loadLinks, mergeLinks, recordVisit } from '@/core/storage'
import { fakeGitHub, FILE, type FakeGitHub } from '../fakes/github'
import { resetGM, setValueFromOtherTab, store } from '../fakes/gm'
import { DAY, NOW, YEAR } from '../time'
import { decode, encode, envelope, gzipBase64, hasFixture, readFixture, sync, v2, v3 } from './helpers'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

const A = 'https://www.v2ex.com/t/1'
const B = 'https://www.v2ex.com/t/2'
const C = 'https://linux.do/t/topic/3'

let github: FakeGitHub

beforeEach(() => {
  resetGM()
  github = fakeGitHub()
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
  // 同步的每一步都会打日志，测试里不看
  vi.spyOn(console, 'log').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

const cloudLinks = () => decode(github.files[FILE])

// 在另一台设备上同步。fake GM 只有一份存储：同步前换成这台设备的数据，同步完再存回去
async function syncOn(device: Map<string, unknown>, expirationTime: number): Promise<void> {
  store.clear()
  device.forEach((value, key) => store.set(key, value))
  await sync(expirationTime)
  device.clear()
  store.forEach((value, key) => device.set(key, value))
}

describe('读不了云端时抛错，不覆盖云端', () => {
  // 本地和云端各有一条对方没有的记录：同步要是继续往下走，就会合并、上传
  beforeEach(async () => {
    mergeLinks({ [A]: NOW - DAY })
    github.files[FILE] = await encode({ [B]: NOW - DAY })
  })

  async function expectFailedWithoutChanges(): Promise<void> {
    const cloud = github.files[FILE]
    const local = loadLinks()
    await expect(sync()).rejects.toThrow()
    expect(github.requests).not.toContain('PATCH gist')
    expect(github.files[FILE]).toBe(cloud)
    expect(loadLinks()).toEqual(local)
    expect(getLastSyncTime()).toBe(0)
  }

  it.each([401, 403, 404, 500])('读 Gist 返回 %i', async (status) => {
    github.failures['GET gist'] = status
    await expectFailedWithoutChanges()
  })

  it('读 Gist 时网络出错', async () => {
    github.failures['GET gist'] = 'network'
    await expectFailedWithoutChanges()
  })

  it('syncVersion 不认识（来自更新版本的脚本）', async () => {
    github.files[FILE] = envelope({ syncVersion: 'v4' })
    await expectFailedWithoutChanges()
  })

  it.each([
    ['encoding 不认识', envelope({ encoding: 'brotli-base64-json' })],
    ['没有 payload', envelope({ payload: undefined })],
    ['payload 不是字符串', envelope({ payload: 123 })],
    ['payload 不是 base64', envelope({ payload: '%%%' })],
    ['payload 不是 gzip', envelope({ payload: btoa('not gzip') })],
    ['解压出来不是 JSON', envelope({ payload: gzipBase64('not json') })],
    ['v2 解压出来不是对象', v2([1, 2])],
    ['v3 解压出来不是对象', v3([1, 2])],
    ['v3 的分组不是数组', v3({ 'a.com': {} })],
    ['v3 的记录不是数组', v3({ 'a.com': ['/x'] })],
    ['v3 的记录不是 3 项', v3({ 'a.com': [[0, '/x']] })],
    ['v3 的前缀长度是负数', v3({ 'a.com': [[-1, '/x', NOW]] })],
    ['v3 的前缀比上一条还长', v3({ 'a.com': [[0, '/x', NOW], [5, 'y', NOW]] })],
    ['v3 的后缀不是字符串', v3({ 'a.com': [[0, 1, NOW]] })],
    ['v3 还原出的路径不以 / 开头', v3({ 'a.com': [[0, 'x', NOW]] })],
    // 自愈只丢掉混进来的条目，一条都留不下的就不是这种格式
    ['v2 的记录一条都不是「URL → 时间戳」', v2({ payload: 'H4sI', itemCount: 1 })],
    ['v3 的时间戳都不是数字', v3({ 'a.com': [[0, '/x', '2026-10-13']] })],
  ])('syncVersion 认识，但%s', async (_, content) => {
    github.files[FILE] = content
    await expectFailedWithoutChanges()
  })

  it('带 visitedLinks 字段的旧明文，记录一条都不是「URL → 时间戳」', async () => {
    github.files[FILE] = JSON.stringify({ visitedLinks: { syncVersion: 'v3', payload: 'H4sI' } })
    await expectFailedWithoutChanges()
  })

  // 截断文件的完整内容来自 raw_url，认不出来时不能当作空：多半是代理、限流换掉了内容，而不是云端真的没有数据
  it.each([
    ['代理、限流返回的 HTML 页面', '<!DOCTYPE html><html><body>Too Many Requests</body></html>'],
    ['空内容', ''],
    ['空对象', '{}'],
  ])('文件被截断，从 raw_url 取到的是%s', async (_, content) => {
    github.truncateAt = 10
    github.rawContent = content
    await expectFailedWithoutChanges()
  })

  it.each([502, 'network'] as const)('文件被截断，raw_url 请求失败：%s', async (failure) => {
    github.truncateAt = 10
    github.failures['GET raw'] = failure
    await expectFailedWithoutChanges()
  })
})

describe('云端不是同步数据时当作空，这次同步把它写成同步格式', () => {
  // 新建 Gist 时内容可以随便填
  it.each([
    ['空内容', ''],
    ['只有空白', ' \n'],
    ['不是 JSON', 'hello'],
    ['JSON 数组', '[1, 2]'],
    ['JSON 字符串', '"hello"'],
    ['null', 'null'],
    ['空对象', '{}'],
    ['没有同步数据特征的对象', '{"count": 5}'],
  ])('%s', async (_, content) => {
    github.files[FILE] = content
    mergeLinks({ [A]: NOW - DAY })
    expect(await sync()).toEqual({ initialized: true })
    expect(github.requests).toEqual(['GET gist', 'PATCH gist'])
    expect(await cloudLinks()).toEqual({ [A]: NOW - DAY })
  })

  it('本地没有记录时也写一份，下次同步就不再上传', async () => {
    github.files[FILE] = ''
    await sync()
    expect(JSON.parse(github.files[FILE]).syncVersion).toBe('v3')
    expect(await sync()).toEqual({ initialized: false })
    expect(github.requests).toEqual(['GET gist', 'PATCH gist', 'GET gist'])
  })
})

describe('自愈：丢掉混进来的同步包字段和不是数字的时间戳，打一行警告', () => {
  it.each([
    // 旧版本的脚本把同步包当成明文读进来，又整个写了回去，外层包的字段混进了记录里
    ['明文里混进了同步包的字段', JSON.stringify({
      visitedLinks: {
        [A]: NOW - DAY,
        syncVersion: 'v3',
        encoding: 'gzip-base64-json',
        payload: 'H4sI',
        itemCount: 1,
        updatedAt: NOW,
        originalBytes: 1,
        compressedBytes: 1,
      },
      lastSyncTime: NOW,
    })],
    ['明文里有时间戳不是数字的记录', JSON.stringify({ [A]: NOW - DAY, [B]: '2026-10-13' })],
    ['v2 包里混进了同步包的字段', v2({ [A]: NOW - DAY, payload: 'H4sI', itemCount: 1 })],
  ])('%s', async (_, content) => {
    github.files[FILE] = content
    await sync()
    expect(loadLinks()).toEqual({ [A]: NOW - DAY })
    expect(console.warn).toHaveBeenCalledTimes(1)
  })
})

describe('合并：每条记录取较大的时间戳，直接和存储里的当前值比', () => {
  it('两边都有的取较大的，只有一边有的都留下', async () => {
    mergeLinks({ [A]: NOW - 3 * DAY, [B]: NOW - DAY })
    github.files[FILE] = await encode({ [A]: NOW - 2 * DAY, [B]: NOW - 2 * DAY, [C]: NOW - DAY })
    await sync()
    const merged = { [A]: NOW - 2 * DAY, [B]: NOW - DAY, [C]: NOW - DAY }
    expect(loadLinks()).toEqual(merged)
    expect(await cloudLinks()).toEqual(merged)
  })

  it('等云端响应时，本标签页和其他标签页写下的记录不会被云端的旧值冲掉', async () => {
    github.files[FILE] = await encode({ [A]: NOW - 2 * DAY, [B]: NOW - 2 * DAY })
    github.onRequest = (endpoint) => {
      if (endpoint !== 'GET gist') return
      recordVisit(A) // 本标签页点开了 A
      setValueFromOtherTab(C, NOW - DAY) // 其他标签页记下了 C
    }
    await sync()
    const merged = { [A]: NOW, [B]: NOW - 2 * DAY, [C]: NOW - DAY }
    expect(loadLinks()).toEqual(merged)
    expect(await cloudLinks()).toEqual(merged)
  })

  it('上传时才写下的记录留在本地，下次同步再上传', async () => {
    mergeLinks({ [A]: NOW - DAY })
    github.files[FILE] = await encode({})
    github.onRequest = (endpoint) => {
      if (endpoint === 'PATCH gist') recordVisit(B)
    }
    await sync()
    expect(loadLinks()).toEqual({ [A]: NOW - DAY, [B]: NOW })
    expect(await cloudLinks()).toEqual({ [A]: NOW - DAY })

    github.onRequest = undefined
    await sync()
    expect(await cloudLinks()).toEqual({ [A]: NOW - DAY, [B]: NOW })
  })
})

describe('只有合并后的数据和云端不一致时才上传', () => {
  it('和云端一致：只有 1 个 GET', async () => {
    mergeLinks({ [A]: NOW - DAY })
    github.files[FILE] = await encode({ [A]: NOW - DAY })
    await sync()
    expect(github.requests).toEqual(['GET gist'])
  })

  it('只有云端有新记录：合并进本地，不上传', async () => {
    mergeLinks({ [A]: NOW - 2 * DAY })
    github.files[FILE] = await encode({ [A]: NOW - DAY, [B]: NOW - DAY })
    await sync()
    expect(loadLinks()).toEqual({ [A]: NOW - DAY, [B]: NOW - DAY })
    expect(github.requests).toEqual(['GET gist'])
  })

  it('本地有云端没有的记录：GET 之后 PATCH，传上去的是合并后的数据', async () => {
    mergeLinks({ [A]: NOW - DAY, [B]: NOW - DAY })
    github.files[FILE] = await encode({ [A]: NOW - DAY, [C]: NOW - DAY })
    await sync()
    expect(github.requests).toEqual(['GET gist', 'PATCH gist'])
    expect(await cloudLinks()).toEqual({ [A]: NOW - DAY, [B]: NOW - DAY, [C]: NOW - DAY })
  })

  it('PATCH 写回读到的那个文件，不另建文件', async () => {
    github.files = { 'my-links.json': await encode({ [A]: NOW - DAY }) }
    mergeLinks({ [B]: NOW - DAY })
    await sync()
    expect(Object.keys(github.files)).toEqual(['my-links.json'])
    expect(await decode(github.files['my-links.json'])).toEqual({ [A]: NOW - DAY, [B]: NOW - DAY })
  })

  it('云端只是有记录到期了：不上传', async () => {
    mergeLinks({ [A]: NOW - DAY })
    github.files[FILE] = await encode({ [A]: NOW - DAY, [B]: NOW - YEAR - DAY })
    await sync()
    expect(github.requests).toEqual(['GET gist'])
  })

  it('过期时间不同的两台设备不会来回上传', async () => {
    // 一台设备的过期时间是一年，另一台是 30 天。B 是 60 天前的记录：在前一台上没过期，在后一台上过期了
    const oneYear = new Map<string, unknown>([[A, NOW - DAY], [B, NOW - 60 * DAY]])
    const thirtyDays = new Map<string, unknown>([[A, NOW - DAY], [C, NOW]])
    github.files[FILE] = await encode({ [A]: NOW - DAY, [B]: NOW - 60 * DAY })

    await syncOn(thirtyDays, 30 * DAY) // 有新记录 C，上传；传上去的数据里没有 B
    await syncOn(oneYear, YEAR) // 云端少了 B，再传一次
    await syncOn(thirtyDays, 30 * DAY) // 之后两边都不再上传
    await syncOn(oneYear, YEAR)
    expect(github.requests).toEqual(['GET gist', 'PATCH gist', 'GET gist', 'PATCH gist', 'GET gist', 'GET gist'])
  })
})

describe('过期的记录两个方向都不同步', () => {
  it('云端过期的记录不合并进本地', async () => {
    github.files[FILE] = await encode({ [A]: NOW - DAY, [B]: NOW - YEAR - DAY })
    await sync()
    expect(loadLinks()).toEqual({ [A]: NOW - DAY })
  })

  it('本地过期、还没清理掉的记录不上传', async () => {
    mergeLinks({ [A]: NOW - DAY, [B]: NOW - YEAR - DAY })
    github.files[FILE] = await encode({})
    await sync()
    expect(await cloudLinks()).toEqual({ [A]: NOW - DAY })
  })

  it('两边用同一个截止时间：刚好到期的记录，云端的合并进来，本地的也传上去', async () => {
    mergeLinks({ [A]: NOW - YEAR })
    github.files[FILE] = await encode({ [B]: NOW - YEAR })
    await sync(YEAR)
    expect(loadLinks()).toEqual({ [A]: NOW - YEAR, [B]: NOW - YEAR })
    expect(await cloudLinks()).toEqual({ [A]: NOW - YEAR, [B]: NOW - YEAR })
  })
})

describe('文件超过 1 MB 被截断时，改用 raw_url 取完整内容', () => {
  it('多一个 raw_url 的 GET', async () => {
    github.files[FILE] = await encode({ [A]: NOW - DAY, [B]: NOW - DAY })
    github.truncateAt = 10
    await sync()
    expect(github.requests).toEqual(['GET gist', 'GET raw'])
    expect(loadLinks()).toEqual({ [A]: NOW - DAY, [B]: NOW - DAY })
  })

  it('要上传时：GET、raw_url 的 GET、PATCH', async () => {
    mergeLinks({ [C]: NOW - DAY })
    github.files[FILE] = await encode({ [A]: NOW - DAY, [B]: NOW - DAY })
    github.truncateAt = 10
    await sync()
    expect(github.requests).toEqual(['GET gist', 'GET raw', 'PATCH gist'])
    expect(await cloudLinks()).toEqual({ [A]: NOW - DAY, [B]: NOW - DAY, [C]: NOW - DAY })
  })

  it.skipIf(!hasFixture('visited-links.v3.json'))('真实样本超过 1 MB，同步进空的本地，不上传', async () => {
    const content = readFixture('visited-links.v3.json')
    github.files[FILE] = content
    await sync(100 * YEAR) // 样本里的记录跨了好几年，过期时间设得够长，一条都不过期
    expect(github.requests).toEqual(['GET gist', 'GET raw'])
    expect(Object.keys(loadLinks()).length).toBe(JSON.parse(content).itemCount)
  })
})

describe('lastSyncTime：只有同步成功时才更新', () => {
  it('成功后记下现在的时间', async () => {
    github.files[FILE] = await encode({})
    await sync()
    expect(getLastSyncTime()).toBe(NOW)
  })

  it('上传失败时抛错，不更新', async () => {
    mergeLinks({ [A]: NOW - DAY })
    github.files[FILE] = await encode({})
    github.failures['PATCH gist'] = 500
    await expect(sync()).rejects.toThrow()
    expect(getLastSyncTime()).toBe(0)
  })
})
