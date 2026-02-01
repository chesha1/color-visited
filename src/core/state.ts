import { DEFAULT_SETTINGS, PRESET_RULES } from '@/core/config';
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

  // 数据迁移：确保所有 PRESET_RULES 中的键都存在于 presetSettings 中
  // 当新增预设网站时，老用户的存储数据不包含新键，需要补充默认值
  let needsSave = false;
  Object.keys(PRESET_RULES).forEach(key => {
    if (!(key in userSettings.preset)) {
      userSettings.preset[key] = true; // 新增预设默认启用
      needsSave = true;
    }
  });

  // 如果有新增预设，保存更新后的设置
  if (needsSave) {
    GM_setValue('userSettings', userSettings);
  }

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

