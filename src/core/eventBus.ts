// ================== 事件总线模块 ==================

import mitt, { type Emitter } from 'mitt';

// 定义常规设置接口
export interface GeneralSettings {
  color: string;
  expirationTime: number;
  debug: boolean;
}

// 定义设置对话框相关的数据接口
export interface SettingsDialogPayload {
  currentSettings: BatchKeySettings;
  defaultSettings: BatchKeySettings;
  currentGeneralSettings: GeneralSettings;
  defaultGeneralSettings: GeneralSettings;
  isMac: boolean;
}

// 定义同步对话框相关的数据接口
export interface SyncDialogPayload {
  // 同步对话框暂时不需要额外数据
}

// 定义简化后的事件类型
export type Events = {
  'dialog:show-settings': {
    type: 'settings';
    payload: SettingsDialogPayload;
  };
  'dialog:show-sync': {
    type: 'sync';
    payload: SyncDialogPayload;
  };
  'settings:save': {
    type: 'batch-key' | 'general';
    settings: BatchKeySettings | GeneralSettings;
  };
  'settings:reset': {
    type: 'batch-key' | 'general';
  };
  'menu:update': {
    // 菜单更新事件
  };
}

export interface BatchKeySettings {
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  key: string;
}

// 创建类型安全的 mitt 实例
const emitter: Emitter<Events> = mitt<Events>();

// 导出事件总线
export const eventBus = emitter;