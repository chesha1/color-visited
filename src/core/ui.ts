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
  const linkColor = color || 'rgba(0,0,0,0)';

  // 检查是否已存在样式元素
  let existingStyle = document.querySelector('#color-visited-style') as HTMLStyleElement;

  if (existingStyle) {
    // 如果已存在，更新其内容而不是直接返回
    existingStyle.innerHTML = generateStyleContent(linkColor);
    return;
  }

  // 如果不存在，创建新的样式元素
  const style = document.createElement('style');
  style.id = 'color-visited-style';
  style.innerHTML = generateStyleContent(linkColor);
  document.head.appendChild(style);
}

// 生成样式内容：使用更高的特异性和多种选择器来确保样式优先级
function generateStyleContent(linkColor: string): string {
  return `
    /* 基础选择器 */
    a.visited-link,
    a.visited-link *,
    a.visited-link *::before,
    a.visited-link *::after {
      color: ${linkColor} !important;
    }
    
    /* 高特异性选择器，覆盖可能的网站样式 */
    html a.visited-link,
    body a.visited-link,
    html body a.visited-link,
    html body div a.visited-link,
    html body a.visited-link span,
    html body a.visited-link div {
      color: ${linkColor} !important;
    }
    
    /* 处理常见的论坛结构 */
    .topic-list a.visited-link,
    .post-list a.visited-link,
    .content a.visited-link,
    .main a.visited-link,
    #main a.visited-link,
    .container a.visited-link {
      color: ${linkColor} !important;
    }

    /* 处理子元素的背景图 */
    a.visited-link [style*="background-image"],
    a.visited-link [style*="background:"] {
      filter: opacity(0.1) !important;
    }
  `;
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
  };
  generalSettings: {
    current: GeneralSettings;
  };
  presetSettings: {
    current: Record<string, boolean>;
  };
  syncSettings: {
    current: SyncSettings;
  };
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
      currentGeneralSettings: config.generalSettings.current,
      currentPresetSettings: config.presetSettings.current,
      currentSyncSettings: config.syncSettings.current,
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

