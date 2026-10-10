// ================== 菜单管理模块 ==================

import { showSettingsDialog } from '@/core/ui';
import type { ScriptState } from '@/types';
import { GM_registerMenuCommand } from 'vite-plugin-monkey/dist/client';

// 只在启动时注册一次：不带 id 重复注册时，Tampermonkey 会在菜单里再加一个同名项
export function registerMenuCommand(state: ScriptState): void {
  GM_registerMenuCommand('设置', () => showSettingsDialog(state));
}
