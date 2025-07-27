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

// ================== UI 类型 ==================

export interface SettingsDialogPayload {
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  generalSettings: GeneralSettings
  defaultGeneralSettings: GeneralSettings
  currentPresetSettings: Record<string, boolean>
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

// ================== 同步相关类型 ==================

// GitHub Gist API 响应类型
export interface GitHubGistFile {
  filename: string
  type: string
  language?: string
  raw_url: string
  size: number
  truncated: boolean
  content: string
}

export interface GitHubGist {
  id: string
  description: string
  public: boolean
  files: Record<string, GitHubGistFile>
  created_at: string
  updated_at: string
}

// 访问链接数据类型
export type VisitedLinksData = Record<string, number>

// 同步数据类型
export interface SyncData {
  visitedLinks: VisitedLinksData
  lastSyncTime: number
  syncVersion?: string // 避免与其他 version 字段冲突
}

// 数据比较结果类型
export interface DataComparison {
  hasChanged: boolean
  differences?: string[]
}

// 错误处理类型
export interface SyncError extends Error {
  code?: string
  statusCode?: number
}