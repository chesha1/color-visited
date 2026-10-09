// ================== 访问记录存储模块 ==================

// 每条访问记录单独存成一个 GM 值：键是归一化后的 URL，值是首次访问的时间戳。
// 记录之间互不相关，扩展后台按键应用各个标签页的写入，所以一次写入只改动自己那几条，
// 多个标签页同时记录访问也不会互相覆盖。读取一律直接查存储，页面里不再保留一份会过时的副本。

import type { VisitedLinks } from '@/types';
import {
  GM_deleteValue,
  GM_deleteValues,
  GM_getValue,
  GM_listValues,
  GM_setValue,
  GM_setValues
} from 'vite-plugin-monkey/dist/client';

// 旧版本把全部记录存成这一个对象，启动时会迁移成逐条存储
const LEGACY_LINKS_KEY = 'visitedLinks';

// 记录的键是绝对 URL，一定带协议头的冒号；userSettings 这类设置键是普通标识符，不能含冒号
function isLinkKey(key: string): boolean {
  return key.includes(':');
}

// 批量接口需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，更早的版本退回逐条写
function setLinks(links: VisitedLinks): void {
  if (GM_setValues) GM_setValues(links);
  else for (const url in links) GM_setValue(url, links[url]);
}

function deleteLinks(urls: string[]): void {
  if (GM_deleteValues) GM_deleteValues(urls);
  else for (const url of urls) GM_deleteValue(url);
}

export function isVisited(url: string): boolean {
  return GM_getValue(url) !== undefined;
}

// 记录一次访问，返回是否为首次记录；已有记录时保留首次访问的时间
export function recordVisit(url: string): boolean {
  if (isVisited(url)) return false;
  GM_setValue(url, Date.now());
  return true;
}

// 读出全部记录，供同步和过期清理使用
export function loadLinks(): VisitedLinks {
  const links: VisitedLinks = {};
  for (const key of GM_listValues()) {
    if (isLinkKey(key)) links[key] = GM_getValue(key);
  }
  return links;
}

// 把一批记录合并进存储：每条 URL 取较大的时间戳，只写入本地没有或比本地新的条目，返回写入的条数。
// 比较的是存储里的当前值，所以不会冲掉其他标签页或同步期间新增的记录
export function mergeLinks(links: VisitedLinks): number {
  const updates: VisitedLinks = {};
  for (const [url, time] of Object.entries(links)) {
    if (!isLinkKey(url) || !Number.isFinite(time)) continue;
    const current = GM_getValue<number | undefined>(url);
    if (current === undefined || current < time) updates[url] = time;
  }
  const count = Object.keys(updates).length;
  if (count > 0) setLinks(updates);
  return count;
}

export function deleteExpiredLinks(expirationTime: number): void {
  const now = Date.now();
  const links = loadLinks();
  const expiredUrls = Object.keys(links).filter(url => now - links[url] > expirationTime);
  if (expiredUrls.length > 0) deleteLinks(expiredUrls);
}

// 把旧版本的整块记录迁移成逐条存储。可以重复执行：中途关掉页面，
// 或者还没刷新的旧版本标签页又写回了旧格式，下次启动都会再合并一遍
export function migrateLegacyLinks(): void {
  const legacyLinks = GM_getValue<VisitedLinks | undefined>(LEGACY_LINKS_KEY);
  if (!legacyLinks) return;

  const mergedCount = mergeLinks(legacyLinks);
  GM_deleteValue(LEGACY_LINKS_KEY);
  console.log(`已把 ${mergedCount} 条访问记录迁移为逐条存储`);
}
