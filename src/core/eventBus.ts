// ================== 事件总线模块 ==================

import mitt, { type Emitter } from 'mitt';
import type { Events } from '@/types';

// 创建类型安全的 mitt 实例
const emitter: Emitter<Events> = mitt<Events>();

// 导出事件总线
export const eventBus = emitter;