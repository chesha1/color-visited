// ================== 事件总线模块 ==================

import mitt, { type Emitter } from 'mitt';

// 定义事件类型
export interface Events {
  'showBatchKeyDialog': {
    currentSettings: BatchKeySettings;
    defaultSettings: BatchKeySettings;
    isMac: boolean;
    onSave: (settings: BatchKeySettings) => void;
    onReset: () => void;
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