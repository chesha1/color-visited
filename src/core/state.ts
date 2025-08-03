import { DEFAULT_SETTINGS } from '@/core/config';
import type { ScriptState, UserSettings } from '@/types';
import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

// 获取当前启用的预设列表
export function getActivePresets(state: ScriptState): string[] {
  return Object.keys(state.presetSettings).filter(preset => state.presetSettings[preset]);
}

// 初始化全局状态
export function initializeScriptState(): ScriptState {
  const userSettings: UserSettings = GM_getValue('userSettings', {
    general: DEFAULT_SETTINGS.general,
    preset: DEFAULT_SETTINGS.presetStates,
    batch: DEFAULT_SETTINGS.batchKey,
    sync: DEFAULT_SETTINGS.sync
  });

  return {
    generalSettings: userSettings.general,
    presetSettings: userSettings.preset,
    batchKeySettings: userSettings.batch,
    syncSettings: userSettings.sync,
    batchKeyHandler: null,
    domObserver: null,
    linkClickHandler: null
  };
}

// 保存用户设置
export function saveUserSettings(state: ScriptState): void {
  const userSettings: UserSettings = {
    general: state.generalSettings,
    preset: state.presetSettings,
    batch: state.batchKeySettings,
    sync: state.syncSettings
  };
  GM_setValue('userSettings', userSettings);
}

