// ================== 导入配置 ==================
import { AUTO_SYNC_INTERVAL, syncWithCloud } from '@/core/sync';
import { showNotification, injectCustomStyles } from '@/core/ui';
import { initializeScriptState } from '@/core/state';
import type { ScriptState } from '@/types';
import { isPageActive, onUrlChange } from '@/core/pageDetector';
import { registerMenuCommand } from '@/core/menuManager';
import { activateLinkFeatures, removeScript, updateAllLinksStatus } from '@/core/linkManager';
import { setupBatchKeyListener, setupDOMObserver, setupLinkEventListeners } from '@/core/eventManager';
import { followUserSettings, saveUserSettings } from '@/core/state';
import { deleteExpiredLinks, getLastSyncTime, migrateLegacyLinks } from '@/core/storage';
import { eventBus } from '@/core/eventBus';

// ================== 核心启动函数 ==================

// 按当前设置同步一次，结果用通知告诉用户。manual 表示是设置页的"立即同步"，用户在等结果，成功了也提示
function runSync(state: ScriptState, manual: boolean): Promise<void> {
  return syncWithCloud(state.syncSettings, state.generalSettings.expirationTime)
    .then(({ initialized }) => {
      if (initialized) {
        showNotification('已初始化云端同步数据', 'success');
      } else if (manual) {
        showNotification('同步完成', 'success');
      }
    })
    .catch((error) => {
      console.warn('同步失败:', error.message);
      showNotification(`同步失败: ${error.message}`);
    });
}

// 启用了同步时，在后台同步一次（不阻塞主流程）。距上次同步成功不到 AUTO_SYNC_INTERVAL 就跳过；
// 失败不会更新 lastSyncTime，下次加载页面会再试
function initializeSync(state: ScriptState): void {
  if (state.syncSettings.enabled && Date.now() - getLastSyncTime() >= AUTO_SYNC_INTERVAL) {
    runSync(state, false);
  }
}

// 设置全局事件监听器
function setupGlobalEventListeners(state: ScriptState): void {
  // 监听 URL 变化
  onUrlChange(() => {
    setupPage(state);
  });

  // 设置页的"立即同步"：不管上次同步是什么时候，马上同步一次。由这里执行，是因为只有 state 里的设置是最新的
  eventBus.on('sync:request', ({ onSettled }) => {
    runSync(state, true).finally(onSettled);
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
  // 对话框只交出改过的字段，合并到 state 的当前值上（state 跟着其他标签页的保存更新），没改过的字段保留当前值。
  // 快捷键是一个整体，整个替换：按字段合并的话，这边改了修饰键、那边改了按键，会拼出一个谁都没设过的快捷键
  eventBus.on('settings:save', (event) => {
    if (event.type === 'general') state.generalSettings = { ...state.generalSettings, ...event.settings };
    else if (event.type === 'preset') state.presetSettings = { ...state.presetSettings, ...event.states };
    else if (event.type === 'batch-key') state.batchKeySettings = event.settings;
    else state.syncSettings = { ...state.syncSettings, ...event.settings };
    saveUserSettings(state);
    setupPage(state);
  });

  // 其他标签页保存设置后，和本标签页保存时一样，按新设置重新初始化页面
  followUserSettings(state, () => setupPage(state));
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

  // 清理过期的记录，所有标签页合起来一天最多一次。染色不依赖它，所以不放在每次初始化页面时做
  deleteExpiredLinks(state.generalSettings.expirationTime);

  // 执行脚本启动流程
  startScript(state);
}
