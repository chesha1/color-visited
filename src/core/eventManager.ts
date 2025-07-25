// ================== 事件管理模块 ==================

import { config } from '@/core/config';
import { shouldColorLink } from '@/core/pageDetector';
import { batchAddLinks, updateLinkStatus } from '@/core/linkManager';
import { getBaseUrl } from '@/core/utils';
import type { ScriptState } from '@/core/state';
import type { VisitedLinks } from '@/types';
import { GM_setValue } from 'vite-plugin-monkey/dist/client';

// ================== 快捷键管理 ==================

// 设置批量染色快捷键监听器
export function setupBatchKeyListener(state: ScriptState): void {
  // 移除之前的监听器
  if (state.batchKeyHandler) {
    document.removeEventListener('keydown', state.batchKeyHandler);
  }

  // 创建新的监听器
  state.batchKeyHandler = function (event: KeyboardEvent) {
    // 检测是否按下设置的快捷键组合
    if (
      event.ctrlKey === state.batchKeySettings.ctrlKey
      && event.shiftKey === state.batchKeySettings.shiftKey
      && event.altKey === state.batchKeySettings.altKey
      && event.metaKey === state.batchKeySettings.metaKey
      && event.key.toUpperCase() === state.batchKeySettings.key
    ) {
      // 阻止浏览器默认行为
      event.preventDefault();

      // 执行批量染色功能
      batchAddLinks(state);
    }
  };

  // 添加新的监听器
  document.addEventListener('keydown', state.batchKeyHandler);
}

// ================== DOM观察器 ==================

// 设置DOM变化监听器
export function setupDOMObserver(visitedLinks: VisitedLinks, state: ScriptState): MutationObserver {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          (node as Element).querySelectorAll('a[href]').forEach((link) => {
            updateLinkStatus(link, visitedLinks, state);
          });
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
  return observer;
}

// ================== 链接点击事件 ==================

// 处理链接点击事件
export function createLinkClickHandler(visitedLinks: VisitedLinks, state: ScriptState) {
  return function handleLinkClick(event: Event) {
    // 使用 event.target.closest 来获取被点击的链接元素
    const link = (event.target as Element).closest('a[href]') as HTMLAnchorElement;
    if (!link) return; // 如果点击的不是链接，直接返回

    const inputUrl = getBaseUrl(link.href);
    if (!shouldColorLink(inputUrl, state)) return; // 如果链接不符合匹配规则，返回

    if (!Object.hasOwn(visitedLinks, inputUrl)) {
      // 如果是第一次点击该链接，记录到 visitedLinks 并更新存储
      visitedLinks[inputUrl] = new Date().getTime();
      GM_setValue('visitedLinks', visitedLinks);
      if (config.debug) console.log(`${inputUrl} saved`);
      link.classList.add('visited-link');
      if (config.debug) console.log(`${inputUrl} class added`);
    }
  };
}

// 设置链接点击事件监听器
export function setupLinkEventListeners(visitedLinks: VisitedLinks, state: ScriptState): ((event: Event) => void) {
  const handleLinkClick = createLinkClickHandler(visitedLinks, state);

  // 添加事件委托的点击事件监听器
  document.addEventListener('click', handleLinkClick, true);
  document.addEventListener('auxclick', handleLinkClick, true);

  return handleLinkClick;
}