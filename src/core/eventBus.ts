// ================== 事件总线模块 ==================

import mitt, { type Emitter } from 'mitt';

// 定义常规设置接口
export interface GeneralSettings {
  color: string;
  expirationTime: number;
  debug: boolean;
}

// 定义事件类型
export type Events = {
  'showSettingsDialog': {
    currentSettings: BatchKeySettings;
    defaultSettings: BatchKeySettings;
    currentGeneralSettings: GeneralSettings;
    defaultGeneralSettings: GeneralSettings;
    isMac: boolean;
    onSave: (settings: BatchKeySettings) => void;
    onReset: () => void;
    onGeneralSave: (settings: GeneralSettings) => void;
    onGeneralReset: () => void;
  };
  'showSyncDialog': {
    onMenuUpdate: () => void;
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