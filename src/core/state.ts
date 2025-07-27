// ================== 状态管理模块 ==================

import { DEFAULT_SETTINGS, getDefaultPresetStates } from '@/core/config';
import { getSyncSettings } from '@/core/sync';
import type { BatchKeySettings, GeneralSettings, SyncSettings } from '@/types';
import { GM_getValue } from 'vite-plugin-monkey/dist/client';

export interface ScriptState {
  batchKeySettings: BatchKeySettings;
  presetSettings: Record<string, boolean>;
  generalSettings: GeneralSettings;
  syncSettings: SyncSettings;
  batchKeyHandler: ((event: KeyboardEvent) => void) | null;
  /** DOM 变化观察器 */
  domObserver: MutationObserver | null;
  /** 全局链接点击/中键点击事件处理器 */
  linkClickHandler: ((event: Event) => void) | null;
}

// ================== 辅助函数 ==================

// 获取当前启用的预设列表
export function getActivePresets(state: ScriptState): string[] {
  return Object.keys(state.presetSettings).filter(preset => state.presetSettings[preset]);
}

// 初始化全局状态
export function initializeScriptState(): ScriptState {
  // 从存储中读取快捷键设置，如果没有则使用默认设置
  const batchKeySettings: BatchKeySettings = GM_getValue('batch_shortcut_settings', DEFAULT_SETTINGS.getBatchKey());

  // 从存储中读取预设状态，如果没有则默认全部启用
  const presetSettings: Record<string, boolean> = GM_getValue('preset_settings', getDefaultPresetStates());

  // 从配置中获取常规设置
  const generalSettings: GeneralSettings = {
    color: GM_getValue('color_setting', DEFAULT_SETTINGS.general.color),
    expirationTime: GM_getValue('expiration_time_setting', DEFAULT_SETTINGS.general.expirationTime),
    debug: GM_getValue('debug_setting', DEFAULT_SETTINGS.general.debug)
  };
  const syncSettings = getSyncSettings();

  return {
    batchKeySettings,
    presetSettings,
    generalSettings,
    syncSettings,
    batchKeyHandler: null,
    domObserver: null,
    linkClickHandler: null
  };
}

// 获取默认常规设置
export const getDefaultGeneralSettings = (): GeneralSettings => ({
  color: DEFAULT_SETTINGS.general.color,
  expirationTime: DEFAULT_SETTINGS.general.expirationTime,
  debug: DEFAULT_SETTINGS.general.debug
});