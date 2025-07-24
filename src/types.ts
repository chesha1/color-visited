// ================== 核心类型定义 ==================

export interface GeneralSettings {
  color: string
  expirationTime: number
  debug: boolean
}

export interface BatchKeySettings {
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
  metaKey: boolean
  key: string
}

export interface SyncSettings {
  enabled: boolean
  githubToken: string
  gistId: string
  lastSyncTime: number
}

// ================== 配置类型 ==================

export interface PresetRule {
  pages: RegExp[]
  patterns: RegExp[]
  description?: string
}

export type PresetRules = Record<string, PresetRule>

export interface Config {
  color: string
  presets: 'all' | string[]
  debug: boolean
  expirationTime: number
}

// ================== UI 类型 ==================

export interface SettingsDialogPayload {
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  currentGeneralSettings: GeneralSettings
  defaultGeneralSettings: GeneralSettings
  currentPresetStates: Record<string, boolean>
  currentSyncSettings: SyncSettings
  isMac: boolean
}

export interface SyncDialogPayload {
  // 暂时为空，后续可扩展
}

export interface NotificationOptions {
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}

// ================== 存储类型 ==================

export type VisitedLinks = Record<string, number>

export interface SyncData {
  visitedLinks: Record<string, number>
  config: {
    presets: Record<string, boolean>
    generalSettings: GeneralSettings
    syncSettings: SyncSettings
    batchKeySettings: BatchKeySettings
  }
  lastModified: number
  version: string
}

// ================== 事件类型 ==================

export type Events = {
  'dialog:show-settings': {
    type: 'settings'
    payload: SettingsDialogPayload
  }
  'dialog:show-sync': {
    type: 'sync'
    payload: SyncDialogPayload
  }
  'settings:save': {
    type: 'batch-key' | 'general' | 'preset' | 'sync'
    settings?: BatchKeySettings | GeneralSettings | SyncSettings
    states?: Record<string, boolean>
  }
  'settings:reset': {
    type: 'batch-key' | 'general' | 'preset' | 'sync'
  }
  'menu:update': {
    // 菜单更新事件
  }
}