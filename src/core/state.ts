// ================== 状态管理模块 ==================

import { config, PRESET_RULES } from '@/core/config';
import { getSyncSettings } from '@/core/sync';
import type { BatchKeySettings, GeneralSettings, SyncSettings } from '@/types';
import { defaultBatchKeySettings } from '@/core/utils';
import { GM_getValue } from 'vite-plugin-monkey/dist/client';

export interface ScriptState {
  batchKeySettings: BatchKeySettings;
  presetStates: Record<string, boolean>;
  currentGeneralSettings: GeneralSettings;
  syncSettings: SyncSettings;
  batchKeyHandler: ((event: KeyboardEvent) => void) | null;
  /** DOM 变化观察器 */
  domObserver: MutationObserver | null;
  /** 全局链接点击/中键点击事件处理器 */
  linkClickHandler: ((event: Event) => void) | null;
}

// 初始化全局状态
export function initializeScriptState(): ScriptState {
  // 从存储中读取快捷键设置，如果没有则使用默认设置
  const batchKeySettings: BatchKeySettings = GM_getValue('batch_shortcut_settings', defaultBatchKeySettings);

  // 从存储中读取预设状态，如果没有则默认全部启用
  const presetStates: Record<string, boolean> = (() => {
    const defaultStates: Record<string, boolean> = {};
    Object.keys(PRESET_RULES).forEach(siteName => {
      defaultStates[siteName] = true;
    });
    return GM_getValue('preset_states', defaultStates);
  })();

  // 从配置中获取常规设置
  const getGeneralSettings = (): GeneralSettings => ({
    color: GM_getValue('color_setting', config.color),
    expirationTime: GM_getValue('expiration_time_setting', config.expirationTime),
    debug: GM_getValue('debug_setting', config.debug)
  });

  const currentGeneralSettings = getGeneralSettings();
  const syncSettings = getSyncSettings();

  return {
    batchKeySettings,
    presetStates,
    currentGeneralSettings,
    syncSettings,
    batchKeyHandler: null,
    domObserver: null,
    linkClickHandler: null
  };
}

// 获取默认常规设置
export const getDefaultGeneralSettings = (): GeneralSettings => ({
  color: config.color,
  expirationTime: config.expirationTime,
  debug: config.debug
});

// 初始化配置设置
export function initializeConfig(state: ScriptState): void {
  // 从存储中恢复常规设置到config对象
  config.color = state.currentGeneralSettings.color;
  config.expirationTime = state.currentGeneralSettings.expirationTime;
  config.debug = state.currentGeneralSettings.debug;

  // 生成预设
  if (config.presets === 'all') {
    config.presets = Object.keys(PRESET_RULES);
  }
}