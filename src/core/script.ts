// ================== 导入配置 ==================
import { syncOnStartup } from '@/core/sync';
import { showNotification, injectCustomStyles } from '@/core/ui';
import { initializeScriptState } from '@/core/state';
import type { ScriptState } from '@/types';
import { isPageActive, onUrlChange } from '@/core/pageDetector';
import { registerMenuCommand } from '@/core/menuManager';
import { activateLinkFeatures, removeScript, updateAllLinksStatus } from '@/core/linkManager';
import { setupBatchKeyListener, setupDOMObserver, setupLinkEventListeners } from '@/core/eventManager';
import { saveUserSettings } from '@/core/state';
import { migrateLegacyLinks } from '@/core/storage';
import { eventBus } from '@/core/eventBus';

// ================== 核心启动函数 ==================

// 初始化同步功能
function initializeSync(state: ScriptState): void {
  // 如果启用同步，在后台进行启动同步（不阻塞主流程）
  if (state.syncSettings.enabled) {
    syncOnStartup(state.syncSettings)
      .then(({ initialized }) => {
        if (initialized) {
          showNotification('已初始化云端同步数据', 'success');
        }
      })
      .catch((error) => {
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
      // 增量染色即可，不调用 setupPage 避免 removeScript 清除染色
      updateAllLinksStatus(state);
    }
  });

  // 设置对话框保存后写回存储，并按新设置重新初始化页面。
  // 只在启动时订阅这一次：放在打开对话框的地方会每打开一次多一个监听，保存一次就执行好几遍
  eventBus.on('settings:save', (event) => {
    if (event.type === 'general') state.generalSettings = event.settings;
    else if (event.type === 'preset') state.presetSettings = event.states;
    else if (event.type === 'batch-key') state.batchKeySettings = event.settings;
    else state.syncSettings = event.settings;
    saveUserSettings(state);
    setupPage(state);
  });
}

// 页面级别的设置和初始化
function setupPage(state: ScriptState): void {
  // 出错也不能往外抛：启动时异常会冒到 main.ts 顶层，设置界面就挂载不上了
  try {
    removeScript(state); // 清除之前的脚本效果

    if (isPageActive(state)) {
      injectCustomStyles(state.generalSettings.color);
      activateLinkFeatures(state, setupDOMObserver, setupLinkEventListeners);
      setupBatchKeyListener(state); // 设置批量染色快捷键监听
    }
  } catch (error) {
    console.error('[setupPage] 页面初始化失败:', error);
  }
}

// 脚本启动和全局初始化
function startScript(state: ScriptState): void {
  registerMenuCommand(state);
  initializeSync(state);
  setupGlobalEventListeners(state);

  // 初始运行
  setupPage(state);
}

export function startColorVisitedScript(): void {
  'use strict';

  console.log('Color Visited Script has started!');

  // 读取访问记录之前，先把旧版本的整块记录迁移成逐条存储
  migrateLegacyLinks();

  // 初始化脚本状态
  const state = initializeScriptState();

  // 执行脚本启动流程
  startScript(state);
}
