// ================== UI 管理模块 ==================

import { eventBus } from '@/core/eventBus';
import { isMac } from '@/core/utils';
import type { ScriptState } from '@/types';
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

    /* 处理子元素的图片 */
    a.visited-link img {
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

// ================== 设置对话框 ==================

// 只负责打开对话框。对话框里的保存由 script.ts 在启动时统一订阅
export function showSettingsDialog(state: ScriptState): void {
  eventBus.emit('dialog:show-settings', {
    type: 'settings',
    payload: {
      currentBatchKeySettings: state.batchKeySettings,
      currentGeneralSettings: state.generalSettings,
      currentPresetSettings: state.presetSettings,
      currentSyncSettings: state.syncSettings,
      isMac
    }
  });
}
