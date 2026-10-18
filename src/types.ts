// 同步模块用到的类型

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
  owner?: { login: string }
  files: Record<string, GitHubGistFile>
  created_at: string
  updated_at: string
}

export interface GitHubUser {
  login: string
}

// 访问链接数据类型
export type VisitedLinksData = Record<string, number>

// 云端读取结果：needsInitialization 表示云端内容不是同步数据，本次同步需要强制写入一次
export interface CloudSnapshot {
  visitedLinks: VisitedLinksData
  needsInitialization: boolean
  /** 判为空的原因，用于日志和测试连接提示 */
  emptyReason?: string
}

// 测试连接结果：level 决定提示样式
export interface SyncConnectionTestResult {
  level: 'success' | 'warning' | 'error'
  message: string
}

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
