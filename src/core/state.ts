import { DEFAULT_SETTINGS } from '@/core/config';
import type { BatchKeySettings, GeneralSettings, ScriptState, SyncSettings } from '@/types';
import { GM_getValue } from 'vite-plugin-monkey/dist/client';

// 获取当前启用的预设列表
export function getActivePresets(state: ScriptState): string[] {
  return Object.keys(state.presetSettings).filter(preset => state.presetSettings[preset]);
}

// 初始化全局状态
export function initializeScriptState(): ScriptState {
  // 从存储中读取常规设置，如果没有则使用默认设置
  const generalSettings: GeneralSettings = {
    color: GM_getValue('color_setting', DEFAULT_SETTINGS.general.color),
    expirationTime: GM_getValue('expiration_time_setting', DEFAULT_SETTINGS.general.expirationTime),
    debug: GM_getValue('debug_setting', DEFAULT_SETTINGS.general.debug)
  };

  // 从存储中读取预设状态，如果没有则默认全部启用
  const presetSettings: Record<string, boolean> = GM_getValue('preset_settings', DEFAULT_SETTINGS.presetStates);

  // 从存储中读取快捷键设置，如果没有则使用默认设置
  const batchKeySettings: BatchKeySettings = GM_getValue('batch_shortcut_settings', DEFAULT_SETTINGS.batchKey);

  // 从存储中读取同步设置，如果没有则使用默认设置
  const syncSettings: SyncSettings = {
    enabled: GM_getValue('sync_enabled', DEFAULT_SETTINGS.sync.enabled),
    githubToken: GM_getValue('sync_github_token', DEFAULT_SETTINGS.sync.githubToken),
    gistId: GM_getValue('sync_gist_id', DEFAULT_SETTINGS.sync.gistId),
    lastSyncTime: GM_getValue('sync_last_sync_time', DEFAULT_SETTINGS.sync.lastSyncTime)
  };

  return {
    generalSettings,
    presetSettings,
    batchKeySettings,
    syncSettings,
    batchKeyHandler: null,
    domObserver: null,
    linkClickHandler: null
  };
}

