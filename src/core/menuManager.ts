// ================== 菜单管理模块 ==================

import { config, PRESET_RULES } from '@/core/config';
import { saveSyncSettings, defaultSyncSettings } from '@/core/sync';
import { showSettingsDialog } from '@/core/ui';
import { isMac, defaultBatchKeySettings } from '@/core/utils';
import { getDefaultGeneralSettings, type ScriptState } from '@/core/state';
import type { BatchKeySettings, GeneralSettings, SyncSettings } from '@/types';
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
    const defaultGeneralSettings = getDefaultGeneralSettings();
    
    return {
      onBatchKeySave: (newSettings: BatchKeySettings) => {
        this.state.batchKeySettings = newSettings;
        GM_setValue('batch_shortcut_settings', this.state.batchKeySettings);
      },
      onBatchKeyReset: () => {
        this.state.batchKeySettings = { ...defaultBatchKeySettings };
        GM_setValue('batch_shortcut_settings', defaultBatchKeySettings);
      },
      onGeneralSave: (newGeneralSettings: GeneralSettings) => {
        this.state.currentGeneralSettings = newGeneralSettings;
        GM_setValue('color_setting', newGeneralSettings.color);
        GM_setValue('expiration_time_setting', newGeneralSettings.expirationTime);
        GM_setValue('debug_setting', newGeneralSettings.debug);
        // 更新config对象以便立即生效
        config.color = newGeneralSettings.color;
        config.expirationTime = newGeneralSettings.expirationTime;
        config.debug = newGeneralSettings.debug;
        // 重新设置页面以应用新设置
        this.setupPageCallback?.(this.state);
      },
      onGeneralReset: () => {
        this.state.currentGeneralSettings = { ...defaultGeneralSettings };
        GM_setValue('color_setting', defaultGeneralSettings.color);
        GM_setValue('expiration_time_setting', defaultGeneralSettings.expirationTime);
        GM_setValue('debug_setting', defaultGeneralSettings.debug);
        // 更新config对象以便立即生效
        config.color = defaultGeneralSettings.color;
        config.expirationTime = defaultGeneralSettings.expirationTime;
        config.debug = defaultGeneralSettings.debug;
        // 重新设置页面以应用新设置
        this.setupPageCallback?.(this.state);
      },
      onPresetSave: (newPresetStates: Record<string, boolean>) => {
        this.state.presetStates = newPresetStates;
        GM_setValue('preset_states', this.state.presetStates);
        // 重新设置页面以应用新设置
        this.setupPageCallback?.(this.state);
      },
      onPresetReset: () => {
        // 重置预设状态为默认值（全部启用）
        const defaultStates: Record<string, boolean> = {};
        Object.keys(PRESET_RULES).forEach(key => {
          defaultStates[key] = true;
        });
        this.state.presetStates = defaultStates;
        GM_setValue('preset_states', this.state.presetStates);
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
        this.state.syncSettings = { ...defaultSyncSettings };
        saveSyncSettings(this.state.syncSettings);
        this.updateMenu();
      }
    };
  }

  updateMenu(): void {
    const callbacks = this.createSettingsCallbacks();
    const defaultGeneralSettings = getDefaultGeneralSettings();
    
    GM_registerMenuCommand('设置', () => {
      showSettingsDialog(
        this.state.batchKeySettings,
        defaultBatchKeySettings,
        this.state.currentGeneralSettings,
        defaultGeneralSettings,
        this.state.presetStates,
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