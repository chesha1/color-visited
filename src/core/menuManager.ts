// ================== 菜单管理模块 ==================

import { PRESET_RULES, DEFAULT_SETTINGS } from '@/core/config';
import { saveSyncSettings } from '@/core/sync';
import { showSettingsDialog } from '@/core/ui';
import { isMac } from '@/core/utils';
import type { BatchKeySettings, GeneralSettings, ScriptState, SyncSettings } from '@/types';
import { GM_setValue, GM_registerMenuCommand } from 'vite-plugin-monkey/dist/client';

// 菜单管理器类 - 管理油猴脚本右键菜单和设置对话框
class MenuManager {
  private state: ScriptState;
  private reinitializeScript?: (state: ScriptState) => void;

  constructor(state: ScriptState) {
    this.state = state;
  }

  // 设置脚本重新初始化回调函数（用于设置变更后立即生效）
  setCallbacks(reinitializeScript: (state: ScriptState) => void): void {
    this.reinitializeScript = reinitializeScript;
  }

  // 创建设置保存/重置回调函数集合
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
        // 重新初始化脚本以应用新设置
        this.reinitializeScript?.(this.state);
      },
      onGeneralReset: () => {
        this.state.generalSettings = { ...defaultGeneralSettings };
        GM_setValue('color_setting', defaultGeneralSettings.color);
        GM_setValue('expiration_time_setting', defaultGeneralSettings.expirationTime);
        GM_setValue('debug_setting', defaultGeneralSettings.debug);
        // 重新初始化脚本以应用新设置
        this.reinitializeScript?.(this.state);
      },
      onPresetSave: (newPresetSettings: Record<string, boolean>) => {
        this.state.presetSettings = newPresetSettings;
        GM_setValue('preset_settings', this.state.presetSettings);
        // 重新初始化脚本以应用新设置
        this.reinitializeScript?.(this.state);
      },
      onPresetReset: () => {
        // 重置预设状态为默认值（全部启用）
        const defaultStates: Record<string, boolean> = {};
        Object.keys(PRESET_RULES).forEach(key => {
          defaultStates[key] = true;
        });
        this.state.presetSettings = defaultStates;
        GM_setValue('preset_settings', this.state.presetSettings);
        // 重新初始化脚本以应用新设置
        this.reinitializeScript?.(this.state);
      },
      onSyncSave: (newSyncSettings: SyncSettings) => {
        // 保存同步设置
        this.state.syncSettings = newSyncSettings;
        saveSyncSettings(this.state.syncSettings);
        // 重新注册菜单以更新状态
        this.registerMenuCommand();
      },
      onSyncReset: () => {
        // 重置同步设置为默认值
        this.state.syncSettings = { ...DEFAULT_SETTINGS.sync };
        saveSyncSettings(this.state.syncSettings);
        // 重新注册菜单以更新状态
        this.registerMenuCommand();
      }
    };
  }

  // 注册油猴脚本右键菜单项
  registerMenuCommand(): void {
    const callbacks = this.createSettingsCallbacks();

    GM_registerMenuCommand('设置', () => {
      showSettingsDialog({
        batchKeySettings: {
          current: this.state.batchKeySettings
        },
        generalSettings: {
          current: this.state.generalSettings
        },
        presetSettings: {
          current: this.state.presetSettings
        },
        syncSettings: {
          current: this.state.syncSettings
        },
        isMac,
        callbacks
      });
    });
  }
}

// 导出菜单管理器实例
export function createMenuManager(state: ScriptState): MenuManager {
  return new MenuManager(state);
}