// ================== 事件总线模块 ==================

export type EventCallback = (...args: any[]) => void;

// 定义事件类型
export interface Events {
  'showBatchKeyDialog': (
    currentSettings: BatchKeySettings,
    defaultSettings: BatchKeySettings,
    isMac: boolean,
    onSave: (settings: BatchKeySettings) => void,
    onReset: () => void
  ) => void;
  'showSyncDialog': (onMenuUpdate: () => void) => void;
}

export interface BatchKeySettings {
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  key: string;
}

/**
 * 简单的事件总线实现
 * 用于核心逻辑与 Vue 组件之间的解耦通信
 */
class EventBus {
  private listeners: Record<string, EventCallback[]> = {};

  /**
   * 注册事件监听器
   */
  on<K extends keyof Events>(event: K, callback: Events[K]): void;
  on(event: string, callback: EventCallback): void;
  on(event: string, callback: EventCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  /**
   * 移除事件监听器
   */
  off<K extends keyof Events>(event: K, callback: Events[K]): void;
  off(event: string, callback: EventCallback): void;
  off(event: string, callback: EventCallback): void {
    if (!this.listeners[event]) return;
    
    const index = this.listeners[event].indexOf(callback);
    if (index > -1) {
      this.listeners[event].splice(index, 1);
    }
  }

  /**
   * 触发事件
   */
  emit<K extends keyof Events>(event: K, ...args: Parameters<Events[K]>): void;
  emit(event: string, ...args: any[]): void;
  emit(event: string, ...args: any[]): void {
    const callbacks = this.listeners[event];
    if (!callbacks || callbacks.length === 0) {
      console.warn(`事件 "${event}" 没有监听器`);
      return;
    }

    callbacks.forEach(callback => {
      try {
        callback(...args);
      } catch (error) {
        console.error(`事件 "${event}" 的回调函数执行出错:`, error);
      }
    });
  }

  /**
   * 移除所有监听器
   */
  clear(): void {
    this.listeners = {};
  }

  /**
   * 检查是否有监听器
   */
  hasListeners(event: string): boolean {
    return !!(this.listeners[event] && this.listeners[event].length > 0);
  }
}

// 导出单例
export const eventBus = new EventBus();