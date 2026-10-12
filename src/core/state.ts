import { DEFAULT_SETTINGS, PRESET_RULES } from '@/core/config';
import type { GeneralSettings, ScriptState, UserSettings } from '@/types';
import { GM_addValueChangeListener, GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

// 从存储读出的过期时间不到 1 天（设置界面的下限）时换成默认值。设置界面写不出这种值，只可能是手改了存储或者数据损坏，
// 比如 null、0、负数，或者把天数直接当成毫秒填了进去。按这样的值清理，每次加载页面都会把记录删光
function withValidExpirationTime(general: GeneralSettings): GeneralSettings {
  const { expirationTime } = general;
  if (Number.isFinite(expirationTime) && expirationTime >= 1000 * 60 * 60 * 24) return general;
  return { ...general, expirationTime: DEFAULT_SETTINGS.general.expirationTime };
}

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
    generalSettings: withValidExpirationTime(userSettings.general),
    presetSettings: userSettings.preset,
    batchKeySettings: userSettings.batch,
    syncSettings: userSettings.sync,
    batchKeyHandler: null,
    linkClickHandler: null,
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

// 其他标签页保存设置后，把新设置换进 state，再调用 onChange。
// 保存时四类设置整块写回，state 不跟着存储更新的话，本标签页之后保存任何一类，都会连同其他几类的旧值一起写回去，冲掉其他标签页的修改
export function followUserSettings(state: ScriptState, onChange: () => void): void {
  GM_addValueChangeListener<UserSettings>('userSettings', (_key, _oldSettings, userSettings, remote) => {
    // 本标签页自己保存时也会回调，那时 state 已经是新值了
    if (!remote || !userSettings) return;
    state.generalSettings = withValidExpirationTime(userSettings.general);
    state.presetSettings = userSettings.preset;
    state.batchKeySettings = userSettings.batch;
    state.syncSettings = userSettings.sync;
    onChange();
  });
}
