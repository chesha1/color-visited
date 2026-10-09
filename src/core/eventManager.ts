// ================== 事件管理模块 ==================

import { shouldColorLink } from '@/core/pageDetector';
import { batchAddLinks, updateAllLinksStatus } from '@/core/linkManager';
import { provideLinkContext, ensureDOMObserver } from '@/core/domObserver';
import { recordVisit } from '@/core/storage';
import { getBaseUrl } from '@/core/utils';
import type { ScriptState } from '@/types';

// ================== 快捷键管理 ==================

// 用户正在输入时不响应快捷键，否则会抢掉输入框里的同名操作（比如默认的 Ctrl+Shift+V 是浏览器的“粘贴为纯文本”）
function isTyping(event: KeyboardEvent): boolean {
  if (event.isComposing) return true;
  // 监听器挂在 document 上，shadow DOM 里的输入框会被重定向成宿主元素，所以要从 composedPath 取实际的目标
  const target = event.composedPath()[0];
  return target instanceof HTMLElement
    && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
}

// 设置批量染色快捷键监听器
export function setupBatchKeyListener(state: ScriptState): void {
  // 移除之前的监听器
  if (state.batchKeyHandler) {
    document.removeEventListener('keydown', state.batchKeyHandler);
  }

  // 创建新的监听器
  state.batchKeyHandler = function (event: KeyboardEvent): void {
    if (isTyping(event)) return;

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
export function setupDOMObserver(state: ScriptState): MutationObserver {
  // 注入上下文供全局 Observer 使用
  provideLinkContext(state);
  // 确保全局 Observer 已创建
  return ensureDOMObserver();
}

// ================== 链接点击事件 ==================

// 处理链接点击事件
export function createLinkClickHandler(state: ScriptState): (event: Event) => void {
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

    const isFirstVisit = recordVisit(inputUrl);
    if (state.generalSettings.debug) {
      console.log(`[handleLinkClick] 是否首次记录: ${isFirstVisit}`);
    }

    // 已有的记录可能是其他标签页写入的，本页还没染色，所以不论是否首次记录都重新染色。
    // 这一步会染上所有相同 URL 的链接（包括当前点击的元素）
    updateAllLinksStatus(state);
  };
}

export function setupLinkEventListeners(state: ScriptState): ((event: Event) => void) {
  const handleLinkClick = createLinkClickHandler(state);

  // 添加事件委托的点击事件监听器
  document.addEventListener('click', handleLinkClick, true);
  document.addEventListener('auxclick', handleLinkClick, true);

  return handleLinkClick;
}
