// 都是纯函数：不知道网络，也不知道文件有没有被截断

import { isLinkEntry, type VisitedLinks } from '@/core/storage'

export interface Decoded {
  links: VisitedLinks
  /** 丢掉了几条：键不含冒号，或者值不是有限数字 */
  dropped: number
  /** 内容不是同步数据时，为什么认不出来；这时 links 是空的 */
  notSyncData?: string
}

const ENCODING = 'gzip-base64-json'
// v3 里放不进 origin 分组的 URL 都放在这一组，存整条 URL
const RAW_GROUP = '@raw'

// 外层包的 7 个字段都要写：旧版本的脚本读取时会校验全部字段
export async function encode(links: VisitedLinks): Promise<string> {
  const json = JSON.stringify(group(links))
  const compressed = await gzip(json)
  return JSON.stringify({
    syncVersion: 'v3',
    encoding: ENCODING,
    payload: toBase64(compressed),
    itemCount: Object.keys(links).length,
    updatedAt: Date.now(),
    originalBytes: new TextEncoder().encode(json).length,
    compressedBytes: compressed.length,
  })
}

// 认得出来的格式读坏了就抛错：不能当作空，否则调用方紧接着会用本地数据覆盖云端。
// 认不出来的内容不是同步数据（新建 Gist 时内容可以随便填），返回 notSyncData
export async function decode(text: string): Promise<Decoded> {
  let data: unknown
  try {
    data = JSON.parse(text)
  } catch {
    return notSyncData('不是 JSON')
  }
  if (!isRecord(data)) return notSyncData('不是 JSON 对象')

  // 有 syncVersion 的是压缩包。版本不认识（多半来自更新版本的脚本）也要抛错
  if ('syncVersion' in data) return pickLinks(await unpack(data))
  // 旧的明文：带 visitedLinks 字段的，或者直接就是「URL → 时间戳」
  if ('visitedLinks' in data) return pickLinks(data.visitedLinks)
  if (Object.entries(data).some(([key, value]) => isLinkEntry(key, value))) return pickLinks(data)
  return notSyncData('没有访问记录')
}

// 解开 v2、v3 压缩包：payload 是 gzip 之后再 base64 的 JSON，v2 里是平铺的记录，v3 里按 origin 分组。
// 外层只校验解码要用的 encoding、payload，其余字段用不到
async function unpack({ syncVersion, encoding, payload }: Record<string, unknown>): Promise<unknown> {
  if (syncVersion !== 'v2' && syncVersion !== 'v3') {
    throw new Error(`云端数据来自更新版本的脚本（syncVersion=${String(syncVersion)}），请升级脚本后再同步`)
  }
  if (encoding !== ENCODING) throw invalid(`encoding 不是 ${ENCODING}`)
  if (typeof payload !== 'string') throw invalid('payload 不是字符串')

  let json: unknown
  try {
    json = JSON.parse(await gunzip(fromBase64(payload)))
  } catch (error) {
    throw invalid('payload 不是 gzip 之后再 base64 的 JSON', error)
  }
  return syncVersion === 'v3' ? ungroup(json) : json
}

// 只留下能当作访问记录的条目，和写入存储前是同一条规则。旧版本的脚本曾把同步包的字段混进记录里，
// 这样的条目丢掉，记下条数；原来有条目，却一条都留不下，就不是这种格式
function pickLinks(entries: unknown): Decoded {
  if (!isRecord(entries)) throw invalid('记录不是对象')
  const all = Object.entries(entries)
  const links: VisitedLinks = {}
  let dropped = 0
  for (const [key, value] of all) {
    if (isLinkEntry(key, value)) links[key] = value
    else dropped++
  }
  if (all.length > 0 && dropped === all.length) throw invalid(`${dropped} 条记录都不是「URL → 时间戳」`)
  return { links, dropped }
}

// 分组键：https 的只写 host，其他协议的带上协议头，比如 a.com、http://a.com
function originOf(key: string): string {
  return key.includes('://') ? key : `https://${key}`
}

// 拆成分组键和组内的文本。文本是从原字符串上截掉 origin 剩下的部分，解码时拼回去，逐字不差：
// 不要改用 pathname + search + hash，末尾空的 ? 或 # 会丢掉，还原出的键对不上，之后每次同步都要整份上传。
// 不以「origin + /」开头的（mailto: 这类没有 host 的、解析后和原字符串对不上的、解析不了的）整条放进 @raw，
// 否则解码时路径不以 / 开头，整批同步都会失败
function splitUrl(url: string): [key: string, text: string] {
  try {
    const { protocol, host } = new URL(url)
    const key = protocol === 'https:' ? host : `${protocol}//${host}`
    const origin = originOf(key)
    if (url.startsWith(`${origin}/`)) return [key, url.slice(origin.length)]
  } catch {
    // 解析不了，放进 @raw
  }
  return [RAW_GROUP, url]
}

// v3 的 payload：{ 分组键: [[和上一条相同的前缀长度, 剩下的文本, 时间戳], …] }。
// 整条 URL 排一次序，组内的文本也就排好了序（同一组的 URL 都是同一个 origin 接上文本，@raw 组的文本就是 URL 本身），相邻两条的前缀多半相同。
// 分组键是 host，可能是 __proto__：先放在 Map 里，最后用 Object.fromEntries 建成自有属性
function group(links: VisitedLinks): Record<string, [number, string, number][]> {
  const groups = new Map<string, [number, string, number][]>()
  const previous = new Map<string, string>()
  for (const url of Object.keys(links).sort()) {
    const [key, text] = splitUrl(url)
    const last = previous.get(key) ?? ''
    let prefix = 0
    while (prefix < text.length && text[prefix] === last[prefix]) prefix++
    previous.set(key, text)
    const records = groups.get(key) ?? []
    records.push([prefix, text.slice(prefix), links[url]])
    groups.set(key, records)
  }
  return Object.fromEntries(groups)
}

// 把 v3 的 payload 还原成平铺的「URL → 时间戳」，时间戳和别的格式一样留到 pickLinks 过滤
function ungroup(payload: unknown): Record<string, unknown> {
  if (!isRecord(payload)) throw invalid('payload 不是对象')
  const entries: Record<string, unknown> = {}
  for (const [key, records] of Object.entries(payload)) {
    if (!Array.isArray(records)) throw invalid(`分组 ${key} 不是数组`)
    let text = ''
    for (const [index, record] of records.entries()) {
      if (!isV3Record(record, text)) throw invalid(`分组 ${key} 的第 ${index + 1} 条记录无效`)
      text = text.slice(0, record[0]) + record[1]
      if (key === RAW_GROUP) entries[text] = record[2]
      else if (text.startsWith('/')) entries[originOf(key) + text] = record[2]
      else throw invalid(`分组 ${key} 的第 ${index + 1} 条记录还原出的路径不以 / 开头`)
    }
  }
  return entries
}

// 前缀不能比上一条的文本还长
function isV3Record(record: unknown, previous: string): record is [number, string, unknown] {
  return Array.isArray(record) && record.length === 3
    && Number.isInteger(record[0]) && record[0] >= 0 && record[0] <= previous.length
    && typeof record[1] === 'string'
}

// 压缩、解压都经 Response 读写流
async function gzip(text: string): Promise<Uint8Array> {
  const stream = new Response(text).body!.pipeThrough(new CompressionStream('gzip'))
  return new Uint8Array(await new Response(stream).arrayBuffer())
}

function gunzip(bytes: Uint8Array<ArrayBuffer>): Promise<string> {
  return new Response(new Response(bytes).body!.pipeThrough(new DecompressionStream('gzip'))).text()
}

// Gist 的文件内容只能是文本，压缩后的字节转成 base64。分段转换：一次展开几十万个参数会超出调用栈
function toBase64(bytes: Uint8Array): string {
  let binary = ''
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
  return btoa(binary)
}

function fromBase64(base64: string): Uint8Array<ArrayBuffer> {
  return Uint8Array.from(atob(base64), (char) => char.charCodeAt(0))
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function notSyncData(reason: string): Decoded {
  return { links: {}, dropped: 0, notSyncData: reason }
}

// 格式认得出来，内容却不对
function invalid(reason: string, cause?: unknown): Error {
  return new Error(`云端数据格式不对：${reason}`, { cause })
}
