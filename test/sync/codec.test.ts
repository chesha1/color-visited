import { gunzipSync } from 'node:zlib'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NOW } from '../time'
import { decode, diffLinks, encode, hasFixture, readFixture, v2 } from './helpers'

// sync.ts 和它引用的存储模块都用到 GM API
vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

beforeEach(() => {
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] })
})

afterEach(() => {
  vi.useRealTimers()
})

// 编码结果的 payload：base64 解码、gunzip 之后的 JSON
function payloadOf(content: string): unknown {
  return JSON.parse(gunzipSync(Buffer.from(JSON.parse(content).payload, 'base64')).toString())
}

describe('往返：编码再解码，每个键都和原来一字不差', () => {
  it.each([
    ['末尾是空的 #', 'https://linux.do/t/topic/647305/49#'],
    ['末尾是空的 ?', 'https://www.v2ex.com/t/1045327?'],
    ['末尾是空的 ?#', 'https://example.com/a?#'],
    ['没有路径', 'https://example.com'],
    ['http', 'http://example.com/a'],
    ['带端口', 'https://example.com:8443/a'],
    ['域名有大写字母', 'https://Example.com/a'],
    ['带用户名', 'https://user@example.com/a'],
    ['有中文', 'https://example.com/中文?q=测试'],
    ['mailto:', 'mailto:hn@ycombinator.com'],
    ['javascript:', 'javascript:void(0)'],
    ['解析不了', 'http://exa mple.com/a'],
  ])('%s：%s', async (_, url) => {
    // 和同一个 host 的普通链接放在一起，组内的排序和前缀差分也一起验证
    const links = { [url]: NOW - 1, 'https://example.com/a/b': NOW - 2, 'https://example.com/a/c': NOW - 3 }
    expect(await decode(await encode(links))).toEqual(links)
  })

  it.skipIf(!hasFixture('visited-links.v3.json'))('v3 样本', async () => {
    const content = readFixture('visited-links.v3.json')
    const links = await decode(content)
    expect(Object.keys(links).length).toBe(JSON.parse(content).itemCount)
    expect(diffLinks(await decode(await encode(links)), links)).toEqual([])
  })

  // v2 样本里有一条末尾是空 # 的记录，v2.23.0 及以前的编码会把这个 # 丢掉
  it.skipIf(!hasFixture('visited-links.v2.json'))('v2 样本', async () => {
    const content = readFixture('visited-links.v2.json')
    const links = await decode(content)
    expect(Object.keys(links).length).toBe(JSON.parse(content).itemCount)
    expect(links['https://linux.do/t/topic/647305/49#']).toBeTypeOf('number')
    expect(diffLinks(await decode(await encode(links)), links)).toEqual([])
  })
})

describe('读旧格式：其他设备上可能还是旧版本写的', () => {
  const links = { 'https://www.v2ex.com/t/1045327': NOW - 1, 'https://linux.do/t/topic/647305': NOW - 2 }

  it('v2 同步包：payload 是平铺的记录', async () => {
    expect(await decode(v2(links))).toEqual(links)
  })

  it('旧的明文：键是网址、值是时间戳', async () => {
    expect(await decode(JSON.stringify(links))).toEqual(links)
  })

  it('旧的明文：带 visitedLinks 字段', async () => {
    expect(await decode(JSON.stringify({ visitedLinks: links, lastSyncTime: NOW }))).toEqual(links)
  })
})

describe('写成 v3：其他设备上的旧版本也要读得了', () => {
  it('外层包的 7 个字段都写上，旧版本读取时会检查全部字段', async () => {
    const links = { 'https://a.com/1': NOW - 1, 'https://a.com/中文': NOW - 2, 'https://b.com/1': NOW - 3 }
    const content = JSON.parse(await encode(links))
    const compressed = Buffer.from(content.payload, 'base64')
    expect(content).toEqual({
      syncVersion: 'v3',
      encoding: 'gzip-base64-json',
      payload: expect.any(String),
      itemCount: 3,
      updatedAt: NOW,
      originalBytes: gunzipSync(compressed).length, // 字节数，不是字符数
      compressedBytes: compressed.length,
    })
  })

  it('payload 先按 host 分组，组内排好序，再和上一条做前缀差分', async () => {
    const content = await encode({
      'https://a.com/t/12': 3,
      'https://a.com/t/1': 2,
      'http://a.com/t/1': 4,
      'https://b.com/x': 5,
      'mailto:x@a.com': 6,
    })
    expect(payloadOf(content)).toEqual({
      // 记录是 [和上一条相同的前缀长度, 剩下的部分, 时间戳]
      'a.com': [[0, '/t/1', 2], [4, '2', 3]],
      // https 的分组键只有 host，其他协议带上协议头
      'http://a.com': [[0, '/t/1', 4]],
      'b.com': [[0, '/x', 5]],
      // 不以「origin + /」开头的整条放进 @raw
      '@raw': [[0, 'mailto:x@a.com', 6]],
    })
  })
})
