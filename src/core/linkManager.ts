// ================== 链接管理模块 ==================

import { shouldColorLink } from '@/core/pageDetector';
import { showNotification, removeCustomStyles } from '@/core/ui';
import { getBaseUrl, logStorageInfo } from '@/core/utils';
import { clearLinkContext } from '@/core/domObserver';
import { deleteExpiredLinks, deleteLinksIfUnchanged, isVisited, loadLinks, mergeLinks } from '@/core/storage';
import type { ScriptState, VisitedLinks } from '@/types';

// 批量染色当前页面上的所有符合规则的链接（仅供快捷键调用）
export function batchAddLinks(state: ScriptState): void {
  const startTime = performance.now();
  const now = Date.now();
  const newLinks: VisitedLinks = {};

  const links = document.querySelectorAll('a[href]:not(.visited-link)');
  links.forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) return; // SVG 里的 <a> 也会被选中，它的 href 不是字符串
    const url = getBaseUrl(link);
    if (!shouldColorLink(url, state)) return;
    // 已有记录的不改时间戳：链接只是显示在页面上，不算访问
    if (!Object.hasOwn(newLinks, url) && !isVisited(url)) newLinks[url] = now;
    link.classList.add('visited-link');
  });

  const addedCount = Object.keys(newLinks).length;
  if (state.generalSettings.debug) {
    console.log(`[batchAddLinks] 处理 ${links.length} 个链接，新增 ${addedCount} 条记录，耗时 ${(performance.now() - startTime).toFixed(2)}ms`);
  }

  if (addedCount === 0) {
    showNotification('没有找到新的符合规则的链接可添加');
    return;
  }

  mergeLinks(newLinks);
  // 快捷键可能是误按的，通知上给一个撤销的机会
  showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`, 'success', {
    text: '撤销',
    onClick: () => undoBatchAdd(newLinks),
  });
}

// 撤销一次批量标记：删掉这次新增、之后没再点开过的记录，并去掉对应链接的颜色
function undoBatchAdd(newLinks: VisitedLinks): void {
  const deletedUrls = new Set(deleteLinksIfUnchanged(newLinks));

  // updateAllLinksStatus 只加颜色不去颜色，这里单独去掉。同一个 URL 在页面上可能有好几个链接
  document.querySelectorAll('a.visited-link').forEach((link) => {
    if (link instanceof HTMLAnchorElement && deletedUrls.has(getBaseUrl(link))) {
      link.classList.remove('visited-link');
    }
  });

  const keptCount = Object.keys(newLinks).length - deletedUrls.size;
  showNotification(`已撤销 ${deletedUrls.size} 个链接` + (keptCount > 0 ? `，${keptCount} 个点开过的保留` : ''));
}

// ================== 链接状态管理 ==================

// 更新单个链接的状态
export function updateLinkStatus(link: Element, state: ScriptState): void {
  // a[href] 也会选中 SVG 里的 <a>，它的 href 是 SVGAnimatedString 对象而不是字符串，直接跳过
  if (!(link instanceof HTMLAnchorElement)) return;

  // 如果链接已经有 visited-link 类，跳过处理以提高性能
  // 这个检查避免了重复的DOM操作和URL处理
  if (link.classList.contains('visited-link')) return;

  const originalHref = link.href;
  const inputUrl = getBaseUrl(link);
  const shouldColor = shouldColorLink(inputUrl, state);

  if (state.generalSettings.debug) {
    console.log(`[updateLinkStatus] 原始href: ${originalHref}`);
    console.log(`[updateLinkStatus] 处理后URL: ${inputUrl}`);
    console.log(`[updateLinkStatus] shouldColorLink结果: ${shouldColor}`);
  }

  if (!shouldColor) return;

  // 添加 visited-link 类名
  const visited = isVisited(inputUrl);
  if (state.generalSettings.debug) {
    console.log(`[updateLinkStatus] 是否已访问: ${visited}`);
  }

  if (visited) {
    link.classList.add('visited-link');
    if (state.generalSettings.debug) console.log(`[updateLinkStatus] ${inputUrl} class added`);
  }
}

// 批量更新页面中所有链接的状态
export function updateAllLinksStatus(state: ScriptState): void {
  // 只查找还没有 visited-link 类的链接，避免重复处理，提高性能
  // 在大量链接的页面上，这个优化可以减少90%以上的不必要DOM操作
  document.querySelectorAll('a[href]:not(.visited-link)').forEach((link) => {
    updateLinkStatus(link, state);
  });
}

// ================== 脚本清理 ==================

// 移除脚本效果
export function removeScript(state: ScriptState): void {
  // 移除样式
  removeCustomStyles();

  // 移除链接上的类名
  document.querySelectorAll('a.visited-link').forEach((link) => {
    link.classList.remove('visited-link');
  });

  // 移除快捷键监听器
  if (state.batchKeyHandler) {
    document.removeEventListener('keydown', state.batchKeyHandler);
    state.batchKeyHandler = null;
  }

  // 清空链接处理上下文，但保留全局 DOM 观察器继续监听 SPA URL 变化
  clearLinkContext();

  // 移除全局链接点击 / 中键点击事件监听器
  if (state.linkClickHandler) {
    document.removeEventListener('click', state.linkClickHandler, true);
    document.removeEventListener('auxclick', state.linkClickHandler, true);
    state.linkClickHandler = null;
  }
}

// ================== 核心链接功能 ==================

// 激活链接功能 - 启动存储管理、状态更新、DOM监听、事件处理
export function activateLinkFeatures(
  state: ScriptState,
  setupDOMObserver: (state: ScriptState) => MutationObserver,
  setupLinkEventListeners: (state: ScriptState) => ((event: Event) => void)
): void {
  deleteExpiredLinks(state.generalSettings.expirationTime); // 删除过期的链接
  logStorageInfo(loadLinks()); // 显示存储信息
  updateAllLinksStatus(state); // 更新链接状态

  // 设置全局 DOM 观察器（仅首次创建）
  setupDOMObserver(state);

  // 设置点击事件监听器并保存引用，便于后续清理
  state.linkClickHandler = setupLinkEventListeners(state);
}
