// ================== 导入配置 ==================
import { syncOnStartup } from '@/core/sync';
import { showNotification, injectCustomStyles } from '@/core/ui';
import { initializeScriptState } from '@/core/state';
import type { ScriptState, VisitedLinks } from '@/types';
import { isPageActive, onUrlChange } from '@/core/pageDetector';
import { createMenuManager } from '@/core/menuManager';
import { activateLinkFeatures, removeScript, updateAllLinksStatus } from '@/core/linkManager';
import { setupBatchKeyListener, setupDOMObserver, setupLinkEventListeners } from '@/core/eventManager';
import { saveUserSettings } from '@/core/state';
import { eventBus } from '@/core/eventBus';
import { GM_getValue } from 'vite-plugin-monkey/dist/client';

// ================== 核心启动函数 ==================

// 初始化同步功能
function initializeSync(state: ScriptState): void {
  // 如果启用同步，在后台进行启动同步（不阻塞主流程）
  if (state.syncSettings.enabled) {
    syncOnStartup().catch((error) => {
      console.warn('后台同步失败:', error.message);
      showNotification(`同步失败: ${error.message}`);
    });
  }
}

// 设置全局事件监听器
function setupGlobalEventListeners(state: ScriptState): void {
  // 监听预设状态更新事件
  window.addEventListener('preset-states-updated', (event: Event) => {
    const customEvent = event as CustomEvent<{ presetSettings: Record<string, boolean> }>;
    const { presetSettings: newPresetSettings } = customEvent.detail;
    state.presetSettings = newPresetSettings;
    saveUserSettings(state);

    // 重新设置页面以应用新的预设配置
    setupPage(state);
  });

  // 监听 URL 变化
  onUrlChange(() => {
    setupPage(state);
  });

  // 监听同步完成事件
  // 使用增量更新而非重置页面，避免清除同步期间用户点击产生的染色
  eventBus.on('sync:completed', () => {
    console.log('同步完成，增量更新链接状态...');
    if (isPageActive(state)) {
      // 直接获取最新的 visitedLinks 并增量更新，不调用 setupPage 避免 removeScript 清除染色
      const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
      updateAllLinksStatus(visitedLinks, state);
    }
  });
}

// 页面级别的设置和初始化
function setupPage(state: ScriptState): void {
  removeScript(state); // 清除之前的脚本效果

  if (isPageActive(state)) {
    injectCustomStyles(state.generalSettings.color);
    activateLinkFeatures(state, setupDOMObserver, setupLinkEventListeners);
    setupBatchKeyListener(state); // 设置批量染色快捷键监听
  }
}

// 脚本启动和全局初始化
function startScript(state: ScriptState): void {
  // 创建菜单管理器并设置脚本重初始化回调
  const menuManager = createMenuManager(state);
  menuManager.setCallbacks(setupPage);
  menuManager.registerMenuCommand();

  initializeSync(state);
  setupGlobalEventListeners(state);

  // 初始运行
  setupPage(state);
}

export function startColorVisitedScript(): void {
  'use strict';

  console.log('Color Visited Script has started!');

  // 初始化脚本状态
  const state = initializeScriptState();

  // 执行脚本启动流程
  startScript(state);
}

