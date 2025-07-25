// ================== 链接管理模块 ==================

import { config } from '@/core/config';
import { shouldColorLink } from '@/core/pageDetector';
import { showNotification, removeCustomStyles } from '@/core/ui';
import { getBaseUrl, logStorageInfo } from '@/core/utils';
import type { ScriptState } from '@/core/state';
import type { VisitedLinks } from '@/types';
import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

// ================== 链接存储管理 ==================

// 删除过期链接
export function deleteExpiredLinks(): void {
  const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
  const now = new Date().getTime();
  Object.keys(visitedLinks).forEach((url) => {
    if (now - visitedLinks[url] > config.expirationTime) {
      delete visitedLinks[url];
    }
  });
  GM_setValue('visitedLinks', visitedLinks);
}

// 批量染色当前页面上的所有符合规则的链接（仅供快捷键调用）
export function batchAddLinks(state: ScriptState): void {
  const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
  const now = new Date().getTime();
  let addedCount = 0;

  // 查找所有未标记的链接（排除已有 visited-link 类的链接）
  // 使用 :not(.visited-link) 选择器可以显著提升性能，避免处理已标记的链接
  document.querySelectorAll('a[href]:not(.visited-link)').forEach((link) => {
    const inputUrl = getBaseUrl((link as HTMLAnchorElement).href);

    // 检查链接是否符合规则且尚未被标记为已访问
    if (shouldColorLink(inputUrl, state) && !Object.hasOwn(visitedLinks, inputUrl)) {
      visitedLinks[inputUrl] = now;
      link.classList.add('visited-link');
      addedCount++;
    }
  });

  // 保存更新后的访问链接记录
  if (addedCount > 0) {
    GM_setValue('visitedLinks', visitedLinks);
    showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
  }
  else {
    showNotification('没有找到新的符合规则的链接可添加');
  }
}

// ================== 链接状态管理 ==================

// 更新单个链接的状态
export function updateLinkStatus(link: Element, visitedLinks: VisitedLinks, state: ScriptState): void {
  // 如果链接已经有 visited-link 类，跳过处理以提高性能
  // 这个检查避免了重复的DOM操作和URL处理
  if (link.classList.contains('visited-link')) return;
  
  const inputUrl = getBaseUrl((link as HTMLAnchorElement).href);
  if (!shouldColorLink(inputUrl, state)) return;

  // 添加 visited-link 类名
  if (Object.hasOwn(visitedLinks, inputUrl)) {
    link.classList.add('visited-link');
    if (config.debug) console.log(`${inputUrl} class added`);
  }
}

// 批量更新页面中所有链接的状态
export function updateAllLinksStatus(visitedLinks: VisitedLinks, state: ScriptState): void {
  // 只查找还没有 visited-link 类的链接，避免重复处理，提高性能
  // 在大量链接的页面上，这个优化可以减少90%以上的不必要DOM操作
  document.querySelectorAll('a[href]:not(.visited-link)').forEach((link) => {
    updateLinkStatus(link, visitedLinks, state);
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
}

// ================== 核心链接功能 ==================

// 激活链接功能 - 启动存储管理、状态更新、DOM监听、事件处理
export function activateLinkFeatures(
  state: ScriptState,
  setupDOMObserver: (visitedLinks: VisitedLinks, state: ScriptState) => MutationObserver,
  setupLinkEventListeners: (visitedLinks: VisitedLinks, state: ScriptState) => ((event: Event) => void)
): void {
  deleteExpiredLinks(); // 删除过期的链接

  const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});

  logStorageInfo(visitedLinks); // 显示存储信息
  updateAllLinksStatus(visitedLinks, state); // 更新链接状态
  setupDOMObserver(visitedLinks, state); // 设置DOM监听
  setupLinkEventListeners(visitedLinks, state); // 设置事件监听
}