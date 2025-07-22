// ================== UI 组件模块 ==================

import { config } from '@/core/config';
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
    appendTo: appendTarget as any,
  });
}

// ================== 样式管理 ==================

// 在文档中注入一段自定义的 CSS 样式，针对这个类名的元素及其所有子元素，设置颜色样式，使用更高的选择器优先级和 !important
// 直接使用 link.style.color 会被后续的样式覆盖，所以这么做
export function injectCustomStyles(): void {
  if (document.querySelector('#color-visited-style')) return;

  const style = document.createElement('style');
  style.id = 'color-visited-style';
  style.innerHTML = `
    a.visited-link,
    a.visited-link *,
    a.visited-link *::before,
    a.visited-link *::after {
      color: ${config.color} !important;
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

// 显示设置弹窗（包含快捷键和常规设置）
export function showSettingsDialog(
  currentSettings: BatchKeySettings,
  defaultSettings: BatchKeySettings,
  currentGeneralSettings: GeneralSettings,
  defaultGeneralSettings: GeneralSettings,
  currentPresetStates: Record<string, boolean>,
  currentSyncSettings: SyncSettings,
  isMac: boolean,
  onSave: (settings: BatchKeySettings) => void,
  onReset: () => void,
  onGeneralSave: (settings: GeneralSettings) => void,
  onGeneralReset: () => void,
  onPresetSave: (states: Record<string, boolean>) => void,
  onPresetReset: () => void,
  onSyncSave: (settings: SyncSettings) => void,
  onSyncReset: () => void
): () => void {
  // 通过事件总线发送显示对话框事件
  eventBus.emit('dialog:show-settings', {
    type: 'settings',
    payload: {
      currentSettings,
      defaultSettings,
      currentGeneralSettings,
      defaultGeneralSettings,
      currentPresetStates,
      currentSyncSettings,
      isMac
    }
  });

  // 监听设置保存事件
  const handleSettingsSave = (event: { type: 'batch-key' | 'general' | 'preset' | 'sync'; settings?: BatchKeySettings | GeneralSettings | SyncSettings; states?: Record<string, boolean> }) => {
    if (event.type === 'batch-key' && event.settings) {
      onSave(event.settings as BatchKeySettings);
    } else if (event.type === 'general' && event.settings) {
      onGeneralSave(event.settings as GeneralSettings);
    } else if (event.type === 'preset' && event.states) {
      onPresetSave(event.states);
    } else if (event.type === 'sync' && event.settings) {
      onSyncSave(event.settings as SyncSettings);
    }
  };

  const handleSettingsReset = (event: { type: 'batch-key' | 'general' | 'preset' | 'sync' }) => {
    if (event.type === 'batch-key') {
      onReset();
    } else if (event.type === 'general') {
      onGeneralReset();
    } else if (event.type === 'preset') {
      onPresetReset();
    } else if (event.type === 'sync') {
      onSyncReset();
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

