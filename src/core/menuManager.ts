// ================== 菜单管理模块 ==================

import { PRESET_RULES, DEFAULT_SETTINGS } from '@/core/config';
import { saveSyncSettings } from '@/core/sync';
import { showSettingsDialog } from '@/core/ui';
import { isMac } from '@/core/utils';
import type { BatchKeySettings, GeneralSettings, ScriptState, SyncSettings } from '@/types';
import { GM_setValue, GM_registerMenuCommand } from 'vite-plugin-monkey/dist/client';

// 菜单管理器类 - 解决循环依赖问题
class MenuManager {
  private state: ScriptState;
  private setupPageCallback?: (state: ScriptState) => void;

  constructor(state: ScriptState) {
    this.state = state;
  }

  setCallbacks(setupPageCallback: (state: ScriptState) => void): void {
    this.setupPageCallback = setupPageCallback;
  }

  // 创建设置回调函数
  private createSettingsCallbacks() {
    const defaultGeneralSettings = DEFAULT_SETTINGS.general;

    return {
      onBatchKeySave: (newSettings: BatchKeySettings) => {
        this.state.batchKeySettings = newSettings;
        GM_setValue('batch_shortcut_settings', this.state.batchKeySettings);
      },
      onBatchKeyReset: () => {
        const defaultBatchKey = DEFAULT_SETTINGS.batchKey;
        this.state.batchKeySettings = { ...defaultBatchKey };
        GM_setValue('batch_shortcut_settings', defaultBatchKey);
      },
      onGeneralSave: (newGeneralSettings: GeneralSettings) => {
        this.state.generalSettings = newGeneralSettings;
        GM_setValue('color_setting', newGeneralSettings.color);
        GM_setValue('expiration_time_setting', newGeneralSettings.expirationTime);
        GM_setValue('debug_setting', newGeneralSettings.debug);
        // 重新设置页面以应用新设置
        this.setupPageCallback?.(this.state);
      },
      onGeneralReset: () => {
        this.state.generalSettings = { ...defaultGeneralSettings };
        GM_setValue('color_setting', defaultGeneralSettings.color);
        GM_setValue('expiration_time_setting', defaultGeneralSettings.expirationTime);
        GM_setValue('debug_setting', defaultGeneralSettings.debug);
        // 重新设置页面以应用新设置
        this.setupPageCallback?.(this.state);
      },
      onPresetSave: (newPresetSettings: Record<string, boolean>) => {
        this.state.presetSettings = newPresetSettings;
        GM_setValue('preset_settings', this.state.presetSettings);
        // 重新设置页面以应用新设置
        this.setupPageCallback?.(this.state);
      },
      onPresetReset: () => {
        // 重置预设状态为默认值（全部启用）
        const defaultStates: Record<string, boolean> = {};
        Object.keys(PRESET_RULES).forEach(key => {
          defaultStates[key] = true;
        });
        this.state.presetSettings = defaultStates;
        GM_setValue('preset_settings', this.state.presetSettings);
        // 重新设置页面以应用新设置
        this.setupPageCallback?.(this.state);
      },
      onSyncSave: (newSyncSettings: SyncSettings) => {
        // 保存同步设置
        this.state.syncSettings = newSyncSettings;
        saveSyncSettings(this.state.syncSettings);
        this.updateMenu();
      },
      onSyncReset: () => {
        // 重置同步设置为默认值
        this.state.syncSettings = { ...DEFAULT_SETTINGS.sync };
        saveSyncSettings(this.state.syncSettings);
        this.updateMenu();
      }
    };
  }

  updateMenu(): void {
    const callbacks = this.createSettingsCallbacks();
    const defaultGeneralSettings = DEFAULT_SETTINGS.general;
    const defaultBatchKey = DEFAULT_SETTINGS.batchKey;

    GM_registerMenuCommand('设置', () => {
      showSettingsDialog(
        this.state.batchKeySettings,
        defaultBatchKey,
        this.state.generalSettings,
        defaultGeneralSettings,
        this.state.presetSettings,
        this.state.syncSettings,
        isMac,
        callbacks.onBatchKeySave,
        callbacks.onBatchKeyReset,
        callbacks.onGeneralSave,
        callbacks.onGeneralReset,
        callbacks.onPresetSave,
        callbacks.onPresetReset,
        callbacks.onSyncSave,
        callbacks.onSyncReset
      );
    });
  }
}

// 导出菜单管理器实例
export function createMenuManager(state: ScriptState): MenuManager {
  return new MenuManager(state);
}