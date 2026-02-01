// ================== 链接管理模块 ==================

import { shouldColorLink } from '@/core/pageDetector';
import { showNotification, removeCustomStyles } from '@/core/ui';
import { getBaseUrl, logStorageInfo } from '@/core/utils';
import { disconnectDOMObserver } from '@/core/domObserver';
import type { ScriptState, VisitedLinks } from '@/types';
import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

// ================== 链接存储管理 ==================

// 删除过期链接
export function deleteExpiredLinks(expirationTime: number): void {
  const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
  const now = Date.now();
  Object.keys(visitedLinks).forEach((url) => {
    if (now - visitedLinks[url] > expirationTime) {
      delete visitedLinks[url];
    }
  });
  GM_setValue('visitedLinks', visitedLinks);
}

// 批量染色当前页面上的所有符合规则的链接（仅供快捷键调用）
export function batchAddLinks(state: ScriptState): void {
  // 性能监控：记录开始时间
  const startTime = performance.now();

  const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
  const now = Date.now();
  let addedCount = 0;

  // 查找所有未标记的链接（排除已有 visited-link 类的链接）
  // 使用 :not(.visited-link) 选择器可以显著提升性能，避免处理已标记的链接
  const links = document.querySelectorAll('a[href]:not(.visited-link)');
  const linksToUpdate: Element[] = [];

  if (state.generalSettings.debug) {
    console.log(`[batchAddLinks] 开始批量处理，找到 ${links.length} 个未标记链接`);
  }

  // 第一遍：收集需要更新的链接，避免在DOM操作过程中修改数据
  links.forEach((link) => {
    const inputUrl = getBaseUrl((link as HTMLAnchorElement).href);

    // 检查链接是否符合规则且尚未被标记为已访问
    if (shouldColorLink(inputUrl, state) && !Object.hasOwn(visitedLinks, inputUrl)) {
      visitedLinks[inputUrl] = now;
      linksToUpdate.push(link);
      addedCount++;
    }
  });

  // 第二遍：批量更新DOM
  if (linksToUpdate.length > 0) {
    // 保存更新后的访问链接记录
    GM_setValue('visitedLinks', visitedLinks);

    // 对于大量链接，使用 DocumentFragment 或分时处理
    if (linksToUpdate.length > 1000) {
      // 分时处理：对于超大量链接，分批在不同时隙处理，避免长时间阻塞
      batchProcessWithTimeSlicing(linksToUpdate, () => {
        // 处理完成后重新应用所有链接状态，模拟页面刷新的效果
        const refreshedVisitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
        updateAllLinksStatus(refreshedVisitedLinks, state);

        // 处理完成后显示通知
        const endTime = performance.now();
        const processingTime = endTime - startTime;

        if (state.generalSettings.debug) {
          console.log(`[BatchAddLinks 性能] 处理 ${links.length} 个链接，添加 ${addedCount} 个，耗时 ${processingTime.toFixed(2)}ms`);
        }

        showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
      });
    } else {
      // 直接批量处理：现代浏览器对此已经有很好的优化
      linksToUpdate.forEach(link => {
        link.classList.add('visited-link');
      });

      // 批量添加完成后，重新应用所有链接状态，模拟页面刷新的效果
      const refreshedVisitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
      updateAllLinksStatus(refreshedVisitedLinks, state);

      // 性能监控：计算处理时间
      const endTime = performance.now();
      const processingTime = endTime - startTime;

      if (state.generalSettings.debug) {
        console.log(`[BatchAddLinks 性能] 处理 ${links.length} 个链接，添加 ${addedCount} 个，耗时 ${processingTime.toFixed(2)}ms`);
      }

      showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
    }
  }
  else {
    showNotification('没有找到新的符合规则的链接可添加');
  }
}

// 分时处理函数：仅在链接数量极大时使用
function batchProcessWithTimeSlicing(linksToUpdate: Element[], onComplete?: () => void): void {
  const BATCH_SIZE = 200; // 更大的批次，减少调度开销
  let currentIndex = 0;

  function processNextBatch(): void {
    const startTime = performance.now();
    const endIndex = Math.min(currentIndex + BATCH_SIZE, linksToUpdate.length);

    // 批量添加CSS类
    for (let i = currentIndex; i < endIndex; i++) {
      linksToUpdate[i].classList.add('visited-link');
    }

    currentIndex = endIndex;

    // 如果处理时间超过5ms 或还有更多链接，让出控制权
    const processingTime = performance.now() - startTime;
    if (currentIndex < linksToUpdate.length && processingTime > 5) {
      // 使用 setTimeout 而不是 requestAnimationFrame，减少不必要的延迟
      setTimeout(processNextBatch, 0);
    } else if (currentIndex < linksToUpdate.length) {
      // 如果处理很快，继续同步处理
      processNextBatch();
    } else {
      // 所有链接处理完成，执行完成回调
      if (onComplete) {
        onComplete();
      }
    }
  }

  processNextBatch();
}

// ================== 链接状态管理 ==================

// 更新单个链接的状态
export function updateLinkStatus(link: Element, visitedLinks: VisitedLinks, state: ScriptState): void {
  // 如果链接已经有 visited-link 类，跳过处理以提高性能
  // 这个检查避免了重复的DOM操作和URL处理
  if (link.classList.contains('visited-link')) return;

  const originalHref = (link as HTMLAnchorElement).href;
  const inputUrl = getBaseUrl(originalHref);
  const shouldColor = shouldColorLink(inputUrl, state);

  if (state.generalSettings.debug) {
    console.log(`[updateLinkStatus] 原始href: ${originalHref}`);
    console.log(`[updateLinkStatus] 处理后URL: ${inputUrl}`);
    console.log(`[updateLinkStatus] shouldColorLink结果: ${shouldColor}`);
  }

  if (!shouldColor) return;

  // 添加 visited-link 类名
  const isVisited = Object.hasOwn(visitedLinks, inputUrl);
  if (state.generalSettings.debug) {
    console.log(`[updateLinkStatus] 是否已访问: ${isVisited}`);
  }

  if (isVisited) {
    link.classList.add('visited-link');
    if (state.generalSettings.debug) console.log(`[updateLinkStatus] ${inputUrl} class added`);
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

  // 断开 DOM 观察器
  disconnectDOMObserver();

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
  setupDOMObserver: (visitedLinks: VisitedLinks, state: ScriptState) => MutationObserver,
  setupLinkEventListeners: (visitedLinks: VisitedLinks, state: ScriptState) => ((event: Event) => void)
): void {
  deleteExpiredLinks(state.generalSettings.expirationTime); // 删除过期的链接

  const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});

  logStorageInfo(visitedLinks); // 显示存储信息
  updateAllLinksStatus(visitedLinks, state); // 更新链接状态

  // 设置全局 DOM 观察器（仅首次创建）
  setupDOMObserver(visitedLinks, state);

  // 设置点击事件监听器并保存引用，便于后续清理
  state.linkClickHandler = setupLinkEventListeners(visitedLinks, state);
}