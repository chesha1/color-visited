// ================== 存储模块 ==================

// 每条访问记录单独存成一个 GM 值：键是归一化后的 URL，值是最近一次访问的时间戳，过期从这个时间算起。
// 所有写入都经过 mergeLinks，只会把时间戳改大，所以各台设备不管按什么顺序同步，最后都是同一个值。
// 记录之间互不相关，扩展后台按键应用各个标签页的写入，所以一次写入只改动自己那几条，
// 多个标签页同时记录访问也不会互相覆盖。读取一律直接查存储，页面里不再保留一份会过时的副本。

import type { VisitedLinks } from '@/types'
import {
  GM_addValueChangeListener,
  GM_deleteValue,
  GM_deleteValues,
  GM_getValue,
  GM_listValues,
  GM_removeValueChangeListener,
  GM_setValue,
  GM_setValues,
} from 'vite-plugin-monkey/dist/client'

// 旧版本把全部记录存成这一个对象，启动时会迁移成逐条存储
const LEGACY_LINKS_KEY = 'visitedLinks'

// 记录的键是绝对 URL，一定带协议头的冒号；userSettings 这类设置键是普通标识符，不能含冒号
function isLinkKey(key: string): boolean {
  return key.includes(':')
}

// 批量接口需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，更早的版本退回逐条写
function setLinks(links: VisitedLinks): void {
  if (GM_setValues) GM_setValues(links)
  else for (const url in links) GM_setValue(url, links[url])
}

function deleteLinks(urls: string[]): void {
  if (GM_deleteValues) GM_deleteValues(urls)
  else for (const url of urls) GM_deleteValue(url)
}

// 有没有还没过期的记录。过期的记录读的时候就当作没有，不等清理删掉：
// 清理一天最多一次，改短过期时间后也要马上不再染色
export function isVisited(url: string, expirationTime: number): boolean {
  const time = GM_getValue<number | undefined>(url)
  return time !== undefined && Date.now() - time <= expirationTime
}

// 记录一次访问，已有记录时把时间戳刷新为这次访问的时间。
// 和同步合并走同一条规则：存储里的时间比现在还晚（其他设备的时钟偏快）时，不会被改小
export function recordVisit(url: string): void {
  mergeLinks({ [url]: Date.now() })
}

// 读出全部记录，供同步和过期清理使用
export function loadLinks(): VisitedLinks {
  const links: VisitedLinks = {}
  for (const key of GM_listValues()) {
    if (isLinkKey(key)) links[key] = GM_getValue(key)
  }
  return links
}

// 把一批记录合并进存储：每条 URL 取较大的时间戳，只写入本地没有或比本地新的条目，返回写入的条数。
// 比较的是存储里的当前值，所以不会冲掉其他标签页或同步期间新增的记录
export function mergeLinks(links: VisitedLinks): number {
  const updates: VisitedLinks = {}
  for (const [url, time] of Object.entries(links)) {
    if (!isLinkKey(url) || !Number.isFinite(time)) continue
    const current = GM_getValue<number | undefined>(url)
    if (current === undefined || current < time) updates[url] = time
  }
  const count = Object.keys(updates).length
  if (count > 0) setLinks(updates)
  return count
}

// 上次清理过期记录的时间（ms）。清理要把全部记录读一遍，十几万条时要几十毫秒；
// 而过期的记录 isVisited 已经当作没有了，晚点删不影响染色，只是多占些存储，所以所有标签页合起来一天最多清理一次
const LAST_CLEANUP_TIME_KEY = 'lastCleanupTime'
const CLEANUP_INTERVAL = 1000 * 60 * 60 * 24

export function deleteExpiredLinks(expirationTime: number): void {
  const now = Date.now()
  if (now - GM_getValue(LAST_CLEANUP_TIME_KEY, 0) < CLEANUP_INTERVAL) return
  GM_setValue(LAST_CLEANUP_TIME_KEY, now)

  const links = loadLinks()
  const expiredUrls = Object.keys(links).filter((url) => now - links[url] > expirationTime)
  if (expiredUrls.length > 0) deleteLinks(expiredUrls)
}

// 撤销一批新增的记录：只删值还等于当时写入的时间戳的，返回实际删掉的 URL。
// 之后又点开过的链接，时间戳已经刷新成点击的时间，会保留下来
export function deleteLinksIfUnchanged(links: VisitedLinks): string[] {
  const unchangedUrls = Object.keys(links).filter((url) => GM_getValue(url) === links[url])
  if (unchangedUrls.length > 0) deleteLinks(unchangedUrls)
  return unchangedUrls
}

// 把旧版本的整块记录迁移成逐条存储。可以重复执行：中途关掉页面，
// 或者还没刷新的旧版本标签页又写回了旧格式，下次启动都会再合并一遍
export function migrateLegacyLinks(): void {
  const legacyLinks = GM_getValue<VisitedLinks | undefined>(LEGACY_LINKS_KEY)
  if (!legacyLinks) return

  const mergedCount = mergeLinks(legacyLinks)
  GM_deleteValue(LEGACY_LINKS_KEY)
  console.log(`已把 ${mergedCount} 条访问记录迁移为逐条存储`)
}

// ================== 同步状态 ==================

// 上次同步成功的时间（ms），0 表示从未同步。它是同步写下的状态，不是用户设置：放在 userSettings 里的话，
// 保存设置时会连同页面里那份旧值整块写回去。所以单独存一个键，只有同步会写它
const LAST_SYNC_TIME_KEY = 'lastSyncTime'

export function getLastSyncTime(): number {
  return GM_getValue(LAST_SYNC_TIME_KEY, 0)
}

export function setLastSyncTime(time: number): void {
  GM_setValue(LAST_SYNC_TIME_KEY, time)
}

// 本标签页或其他标签页同步完成后，用新的时间回调；返回取消监听的函数
export function onLastSyncTimeChange(listener: (time: number) => void): () => void {
  const id = GM_addValueChangeListener<number>(LAST_SYNC_TIME_KEY, (_key, _oldTime, time) => listener(time ?? 0))
  return () => GM_removeValueChangeListener(id)
}
