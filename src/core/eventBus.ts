// 旧的设置对话框（ui/App.vue、ui/components/）和它的桥接（ui/dialog.ts）之间的事件
import mitt, { type Emitter } from 'mitt'
import type { GeneralSettings, SyncSettings } from '@/core/settings'
import type { Shortcut } from '@/core/shortcut'

export interface SettingsDialogPayload {
  currentBatchKeySettings: Shortcut
  currentGeneralSettings: GeneralSettings
  currentPresetSettings: Record<string, boolean>
  currentSyncSettings: SyncSettings
  isMac: boolean
}

export type Events = {
  'dialog:show-settings': {
    type: 'settings'
    payload: SettingsDialogPayload
  }
  // 只带设置对话框里改过的字段（快捷键是一个整体，改了就整个带上）
  'settings:save':
    | { type: 'batch-key', settings: Shortcut }
    | { type: 'general', settings: Partial<GeneralSettings> }
    | { type: 'preset', states: Record<string, boolean> }
    | { type: 'sync', settings: Partial<SyncSettings> }
  // 设置页的"立即同步"；同步结束后（成功或失败）调用 onSettled
  'sync:request': { onSettled: () => void }
}

export const eventBus: Emitter<Events> = mitt<Events>()
