import { existsSync, readFileSync } from 'node:fs'
import { gzipSync } from 'node:zlib'
import { vi } from 'vitest'
import type { VisitedLinks } from '@/core/storage'
import { syncWithCloud } from '@/core/sync'
import * as codec from '@/core/sync/codec'
import { GIST_ID, TOKEN } from '../fakes/github'
import { YEAR } from '../time'

// 同步模块的 runSync 要弹通知：ui/notify.ts 引入了 Element Plus 通知组件的样式，那是 .css 文件，Node 加载不了，换成空模块。
// vi.mock 只对之后才加载的模块生效：测试文件要先引入这个文件，再引入 @/core/sync
vi.mock('element-plus/es/components/message/style/css', () => ({}))

export function encode(links: VisitedLinks): Promise<string> {
  return codec.encode(links)
}

// 只取解码出来的记录
export async function decode(content: string): Promise<VisitedLinks> {
  return (await codec.decode(content)).links
}

// 用假 GitHub 上的那个 Gist 同步一次。expirationTime 是本机设置的过期时间
export function sync(expirationTime = YEAR): Promise<{ initialized: boolean }> {
  return syncWithCloud({ enabled: true, githubToken: TOKEN, gistId: GIST_ID }, expirationTime)
}

export function gzipBase64(text: string): string {
  return gzipSync(text).toString('base64')
}

// 拼一个同步包，没传的字段用占位值。外层只写读取时用到的三个字段，encode 写出来的另外还有 4 个
export function envelope(fields: Record<string, unknown>): string {
  return JSON.stringify({
    syncVersion: 'v3',
    encoding: 'gzip-base64-json',
    payload: gzipBase64('{}'),
    ...fields,
  })
}

// v2、v3 同步包，参数是解压之后的 payload
export const v2 = (payload: unknown) => envelope({ syncVersion: 'v2', payload: gzipBase64(JSON.stringify(payload)) })
export const v3 = (payload: unknown) => envelope({ syncVersion: 'v3', payload: gzipBase64(JSON.stringify(payload)) })

// test/fixtures/local/ 里的真实同步数据，不入库，CI 和新 clone 里都没有。用到它的测试在文件不存在时跳过
const FIXTURES = new URL('../fixtures/local/', import.meta.url)

export function hasFixture(name: string): boolean {
  return existsSync(new URL(name, FIXTURES))
}

export function readFixture(name: string): string {
  return readFileSync(new URL(name, FIXTURES), 'utf8')
}

// 两份记录的差别，最多列 10 条。样本有十几万条，直接 toEqual 的话，不一致时打出的 diff 太长，看不出是哪几条
export function diffLinks(actual: VisitedLinks, expected: VisitedLinks): string[] {
  const diffs: string[] = []
  for (const url in expected) {
    if (!Object.hasOwn(actual, url)) diffs.push(`少了 ${url}`)
    else if (actual[url] !== expected[url]) diffs.push(`${url}：${actual[url]}，应为 ${expected[url]}`)
  }
  for (const url in actual) {
    if (!Object.hasOwn(expected, url)) diffs.push(`多了 ${url}`)
  }
  return diffs.slice(0, 10)
}
