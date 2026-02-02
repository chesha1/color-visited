// ================== 事件管理模块 ==================

import { shouldColorLink } from '@/core/pageDetector';
import { batchAddLinks } from '@/core/linkManager';
import { provideLinkContext, ensureDOMObserver } from '@/core/domObserver';
import { getBaseUrl } from '@/core/utils';
import type { ScriptState, VisitedLinks } from '@/types';
import { GM_setValue } from 'vite-plugin-monkey/dist/client';

// ================== 快捷键管理 ==================

// 设置批量染色快捷键监听器
export function setupBatchKeyListener(state: ScriptState): void {
  // 移除之前的监听器
  if (state.batchKeyHandler) {
    document.removeEventListener('keydown', state.batchKeyHandler);
  }

  // 创建新的监听器
  state.batchKeyHandler = function (event: KeyboardEvent): void {
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
  // 注入上下文供全局 Observer 使用
  provideLinkContext(visitedLinks, state);
  // 确保全局 Observer 已创建
  return ensureDOMObserver();
}

// ================== 链接点击事件 ==================

// 处理链接点击事件
export function createLinkClickHandler(visitedLinks: VisitedLinks, state: ScriptState): (event: Event) => void {
  return function handleLinkClick(event: Event): void {
    // 使用 event.target.closest 来获取被点击的链接元素
    const target = event.target as Element | null;
    if (!target) return;

    const link = target.closest('a[href]') as HTMLAnchorElement | null;
    if (!link) return; // 如果点击的不是链接，直接返回

    const originalHref = link.href;
    const inputUrl = getBaseUrl(originalHref);
    const shouldColor = shouldColorLink(inputUrl, state);

    if (state.generalSettings.debug) {
      console.log(`[handleLinkClick] 原始href: ${originalHref}`);
      console.log(`[handleLinkClick] 处理后URL: ${inputUrl}`);
      console.log(`[handleLinkClick] shouldColorLink结果: ${shouldColor}`);
    }

    if (!shouldColor) return; // 如果链接不符合匹配规则，返回

    const alreadyVisited = Object.hasOwn(visitedLinks, inputUrl);
    if (state.generalSettings.debug) {
      console.log(`[handleLinkClick] 是否已记录: ${alreadyVisited}`);
    }

    if (!alreadyVisited) {
      // 如果是第一次点击该链接，记录到 visitedLinks 并更新存储
      visitedLinks[inputUrl] = Date.now();
      GM_setValue('visitedLinks', visitedLinks);
      if (state.generalSettings.debug) console.log(`[handleLinkClick] ${inputUrl} saved`);

      // 染色所有相同 href 的链接（包括当前点击的元素）
      document.querySelectorAll('a[href]:not(.visited-link)').forEach((el) => {
        const elUrl = getBaseUrl((el as HTMLAnchorElement).href);
        if (elUrl === inputUrl) {
          el.classList.add('visited-link');
        }
      });

      if (state.generalSettings.debug) console.log(`[handleLinkClick] ${inputUrl} class added to all matching links`);
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