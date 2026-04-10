import type { BatchKeySettings, GeneralSettings, SyncSettings } from '@/types';
import { PRESET_RULES } from '@/shared/presetRules';
import { isMac } from './utils';

export const DEFAULT_SETTINGS = {
  general: {
    color: 'rgba(0,0,0,0)', // 链接颜色，默认为透明色以适配暗色模式
    expirationTime: 1000 * 60 * 60 * 24 * 365, // 链接染色的过期时间，毫秒为单位，默认为一年
    debug: false // 是否开启调试模式
  } as GeneralSettings,
  get batchKey(): BatchKeySettings {
    return {
      ctrlKey: !isMac, // macOS 下为 false，Windows 下为 true
      shiftKey: true,
      altKey: false,
      metaKey: isMac, // macOS 下为 true，Windows 下为 false
      key: 'V'
    };
  },
  get presetStates(): Record<string, boolean> {
    return Object.keys(PRESET_RULES).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
  },
  sync: {
    enabled: false,
    githubToken: '',
    gistId: '',
    lastSyncTime: 0
  } as SyncSettings
} as const;

export { PRESET_RULES };
