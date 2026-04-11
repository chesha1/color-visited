// ================== 核心类型定义 ==================

export interface ScriptState {
  generalSettings: GeneralSettings;
  presetSettings: Record<string, boolean>;
  batchKeySettings: BatchKeySettings;
  syncSettings: SyncSettings;
  batchKeyHandler: ((event: KeyboardEvent) => void) | null;
  /** 全局链接点击/中键点击事件处理器 */
  linkClickHandler: ((event: Event) => void) | null;
}

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

export type { PresetRule, PresetRules } from './shared/presetRules'

// ================== UI 类型 ==================

export interface SettingsDialogPayload {
  currentBatchKeySettings: BatchKeySettings
  currentGeneralSettings: GeneralSettings
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

export interface UserSettings {
  general: GeneralSettings           // 基础设置（颜色、过期时间、调试模式）
  preset: Record<string, boolean>    // 预设网站启用状态
  batch: BatchKeySettings           // 批量标记快捷键配置
  sync: SyncSettings               // GitHub同步配置
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
  'sync:completed': void
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

export type SyncStorageVersion = 'v2' | 'v3'

export type SyncStorageEncoding = 'gzip-base64-json' | 'zstd-base64-json'

export interface CompressedSyncEnvelopeBase {
  syncVersion: SyncStorageVersion
  encoding: SyncStorageEncoding
  payload: string
  itemCount: number
  updatedAt: number
  originalBytes: number
  compressedBytes: number
}

// v2 同步格式：payload 直接压缩 visitedLinks 平铺对象
export interface CompressedSyncEnvelopeV2 extends CompressedSyncEnvelopeBase {
  syncVersion: 'v2'
}

// v3 payload：按 host 分组后，对组内路径文本做前缀差分编码
export type V3PathRecord = [prefixLength: number, suffix: string, timestamp: number]

export type V3GroupedPayload = Record<string, V3PathRecord[]>

// v3 同步格式：payload 压缩 host 分组 + 前缀差分结构
export interface CompressedSyncEnvelopeV3 extends CompressedSyncEnvelopeBase {
  syncVersion: 'v3'
}

export type CompressedSyncEnvelope = CompressedSyncEnvelopeV2 | CompressedSyncEnvelopeV3

// visitedLinks 自愈清洗结果：
// 保存过滤后的有效记录，以及被移除条目的统计和诊断样例。
export interface VisitedLinksRepairResult {
  visitedLinks: VisitedLinksData
  removedCount: number
  removedSamples: string[]
  knownPollutionKeys: string[]
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
