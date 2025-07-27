// ================== UI 管理模块 ==================

import { eventBus } from '@/core/eventBus';
import type { BatchKeySettings, GeneralSettings, SyncSettings } from '@/types';
import { ElMessage } from 'element-plus';
import type { MessageProps } from 'element-plus';
import 'element-plus/es/components/message/style/css';

// ================== 通知组件 ==================

// 显示通知
export function showNotification(message: string, type?: MessageProps['type']): void {
  // 如果没有指定类型，根据消息内容简单判断类型
  const messageType = type || (/失败|错误|error/i.test(message) ? 'error' : 'success');

  // 尝试获取 Shadow DOM 根节点，若不存在则退回 document.body
  const container = document.querySelector('#color-visited-root') as HTMLElement | null;
  const appendTarget = (container && (container.shadowRoot as unknown as HTMLElement)) || document.body;

  ElMessage({
    message,
    type: messageType,
    duration: 2000,
    showClose: true,
    grouping: true,
    offset: 20,
    // 将 Message 组件挂载到 Shadow DOM 中
    appendTo: appendTarget as HTMLElement,
  });
}

// ================== 样式管理 ==================

// 在文档中注入一段自定义的 CSS 样式，针对这个类名的元素及其所有子元素，设置颜色样式，使用更高的选择器优先级和 !important
// 直接使用 link.style.color 会被后续的样式覆盖，所以这么做
export function injectCustomStyles(color?: string): void {
  if (document.querySelector('#color-visited-style')) return;

  const linkColor = color || 'rgba(0,0,0,0)';
  const style = document.createElement('style');
  style.id = 'color-visited-style';
  style.innerHTML = `
    a.visited-link,
    a.visited-link *,
    a.visited-link *::before,
    a.visited-link *::after {
      color: ${linkColor} !important;
    }
  `;
  document.head.appendChild(style);
}

// 移除注入的样式
export function removeCustomStyles(): void {
  const styleElement = document.querySelector('#color-visited-style');
  if (styleElement) {
    styleElement.remove();
  }
}

// ================== 快捷键设置对话框 ==================

// 设置对话框配置接口
interface SettingsDialogConfig {
  // 设置数据
  batchKeySettings: {
    current: BatchKeySettings;
    default: BatchKeySettings;
  };
  generalSettings: {
    current: GeneralSettings;
    default: GeneralSettings;
  };
  presetSettings: Record<string, boolean>;
  syncSettings: SyncSettings;
  // 系统信息
  isMac: boolean;
  // 回调函数
  callbacks: {
    onBatchKeySave: (settings: BatchKeySettings) => void;
    onBatchKeyReset: () => void;
    onGeneralSave: (settings: GeneralSettings) => void;
    onGeneralReset: () => void;
    onPresetSave: (states: Record<string, boolean>) => void;
    onPresetReset: () => void;
    onSyncSave: (settings: SyncSettings) => void;
    onSyncReset: () => void;
  };
}

// 显示设置弹窗（包含快捷键和常规设置）
export function showSettingsDialog(config: SettingsDialogConfig): () => void {
  // 通过事件总线发送显示对话框事件
  eventBus.emit('dialog:show-settings', {
    type: 'settings',
    payload: {
      currentBatchKeySettings: config.batchKeySettings.current,
      defaultBatchKeySettings: config.batchKeySettings.default,
      currentGeneralSettings: config.generalSettings.current,
      defaultGeneralSettings: config.generalSettings.default,
      currentPresetSettings: config.presetSettings,
      currentSyncSettings: config.syncSettings,
      isMac: config.isMac
    }
  });

  // 监听设置保存事件
  const handleSettingsSave = (event: { type: 'batch-key' | 'general' | 'preset' | 'sync'; settings?: BatchKeySettings | GeneralSettings | SyncSettings; states?: Record<string, boolean> }) => {
    if (event.type === 'batch-key' && event.settings) {
      config.callbacks.onBatchKeySave(event.settings as BatchKeySettings);
    } else if (event.type === 'general' && event.settings) {
      config.callbacks.onGeneralSave(event.settings as GeneralSettings);
    } else if (event.type === 'preset' && event.states) {
      config.callbacks.onPresetSave(event.states);
    } else if (event.type === 'sync' && event.settings) {
      config.callbacks.onSyncSave(event.settings as SyncSettings);
    }
  };

  const handleSettingsReset = (event: { type: 'batch-key' | 'general' | 'preset' | 'sync' }) => {
    if (event.type === 'batch-key') {
      config.callbacks.onBatchKeyReset();
    } else if (event.type === 'general') {
      config.callbacks.onGeneralReset();
    } else if (event.type === 'preset') {
      config.callbacks.onPresetReset();
    } else if (event.type === 'sync') {
      config.callbacks.onSyncReset();
    }
  };

  // 注册事件监听器
  eventBus.on('settings:save', handleSettingsSave);
  eventBus.on('settings:reset', handleSettingsReset);

  // 在对话框关闭时清理事件监听器
  // 这里可以通过一个一次性的事件来实现
  const cleanup = () => {
    eventBus.off('settings:save', handleSettingsSave);
    eventBus.off('settings:reset', handleSettingsReset);
  };

  // 返回清理函数供外部使用
  return cleanup;
}

