// 用户设置：存在存储的一个值里，字段名都已经持久化了，不能改。
// 只有一条更新路径：本标签页 saveSettings、其他标签页写入，都经 onSettingsChange 通知；读取一律直接查存储，不缓存

import { DEFAULT_SHORTCUT, type Shortcut } from '@/core/shortcut'
import { onRemoteSettingsWrite, readSettings, writeSettings } from '@/core/storage'
import { SITES } from '@/shared/sites'

export interface GeneralSettings {
  color: string
  /** 记录保留多久（ms），从最近一次访问算起 */
  expirationTime: number
  debug: boolean
}

export interface SyncSettings {
  enabled: boolean
  githubToken: string
  gistId: string
}

export interface Settings {
  general: GeneralSettings
  /** 站点 id → 是否启用，站点表里的每个站点都有 */
  preset: Record<string, boolean>
  /** 批量标记的快捷键 */
  batch: Shortcut
  sync: SyncSettings
}

// 保存时交出的改动：只有改过的字段。快捷键是一个整体，改了就整个交出
export interface SettingsPatch {
  general?: Partial<GeneralSettings>
  preset?: Partial<Record<string, boolean>>
  batch?: Shortcut
  sync?: Partial<SyncSettings>
}

export const DAY = 1000 * 60 * 60 * 24

export function createDefaultSettings(): Settings {
  return {
    general: {
      color: 'rgba(0,0,0,0)', // 透明，深色主题下也适用
      expirationTime: 365 * DAY,
      debug: false,
    },
    preset: Object.fromEntries(SITES.map(({ id }) => [id, true])), // 存储里没有的站点（比如新加的）默认启用
    batch: { ...DEFAULT_SHORTCUT },
    sync: { enabled: false, githubToken: '', gistId: '' },
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

// 以默认值为底，只取 raw 里默认值也有、类型也相同的字段
function pick<T extends object>(defaults: T, raw: unknown): T {
  const result = { ...defaults }
  if (!isRecord(raw)) return result
  for (const key of Object.keys(defaults) as (keyof T & string)[]) {
    if (typeof raw[key] === typeof defaults[key]) result[key] = raw[key] as T[typeof key]
  }
  return result
}

// 默认值里的字段 raw 都有，类型也都相同
function hasAllFields<T extends object>(defaults: T, raw: unknown): boolean {
  return isRecord(raw) && Object.keys(defaults).every((key) => typeof raw[key] === typeof defaults[key as keyof T])
}

// 把存储里读出来的值规范成完整的设置。老用户的存储里有缺字段、类型不对、早已不用的字段，都按默认值来
export function parseSettings(raw: unknown): Settings {
  const defaults = createDefaultSettings()
  const stored: Record<string, unknown> = isRecord(raw) ? raw : {}

  const general = pick(defaults.general, stored.general)
  // 不到 1 天（设置界面的下限）只可能是手改了存储或者数据损坏，比如 null、0、负数，或者把天数直接当成毫秒填了进去。
  // 按这样的值，所有记录都会被当作过期，清理时全部删掉
  if (!Number.isFinite(general.expirationTime) || general.expirationTime < DAY) {
    general.expirationTime = defaults.general.expirationTime
  }

  return {
    general,
    preset: pick(defaults.preset, stored.preset),
    // 快捷键是一个整体：缺了哪个字段（比如以前存的是 key，没有 code），按字段补上默认值会拼出一个谁都没设过的组合
    batch: hasAllFields(defaults.batch, stored.batch) ? pick(defaults.batch, stored.batch) : defaults.batch,
    sync: pick(defaults.sync, stored.sync),
  }
}

export function getSettings(): Settings {
  return parseSettings(readSettings())
}

const listeners = new Set<() => void>()

// 只把改过的字段合并到存储里的当前值上：对话框开着时其他标签页可能改了别的字段，拿打开时的副本整个写回会冲掉它们
export function saveSettings(patch: SettingsPatch): void {
  const current = getSettings()
  writeSettings({
    general: { ...current.general, ...patch.general },
    preset: { ...current.preset, ...patch.preset },
    batch: patch.batch ?? current.batch,
    sync: { ...current.sync, ...patch.sync },
  })
  for (const listener of listeners) listener()
}

// 本标签页保存之后、其他标签页写入之后，各回调一次，新的设置用 getSettings 读。返回取消订阅的函数
export function onSettingsChange(listener: () => void): () => void {
  listeners.add(listener)
  const unsubscribeRemote = onRemoteSettingsWrite(listener)
  return () => {
    listeners.delete(listener)
    unsubscribeRemote()
  }
}

// draft 里和 base 不一样的字段
function changedFields<T extends object>(base: T, draft: T): Partial<T> {
  const changes: Partial<T> = {}
  for (const key in draft) {
    if (draft[key] !== base[key]) changes[key] = draft[key]
  }
  return changes
}

// 对话框保存时交出的改动：表单是打开对话框时的副本，没改过的字段在对话框开着时可能已经被其他标签页改掉了，
// 拿副本里的旧值写回去会把那边的修改冲掉。没改的部分不出现在结果里
export function diffSettings(base: Settings, draft: Settings): SettingsPatch {
  const patch: SettingsPatch = {}
  const general = changedFields(base.general, draft.general)
  if (Object.keys(general).length > 0) patch.general = general
  const preset = changedFields(base.preset, draft.preset)
  if (Object.keys(preset).length > 0) patch.preset = preset
  if (Object.keys(changedFields(base.batch, draft.batch)).length > 0) patch.batch = { ...draft.batch }
  const sync = changedFields(base.sync, draft.sync)
  if (Object.keys(sync).length > 0) patch.sync = sync
  return patch
}
