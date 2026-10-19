// 设置对话框的纯逻辑。对话框（SettingsDialog.vue 和各个 tab）只负责显示和绑定

import { createDefaultSettings, type Settings } from '@/core/settings'
import { isSiteEnabled, SITES } from '@/shared/sites'

const DAY = 1000 * 60 * 60 * 24

// 对话框编辑的副本。preset 按站点表给每个站点补上是否启用，开关和"已启用 x/y"直接看它；
// 不和 settings 共用对象，改副本不会改到打开时留下的快照
export function toDraft(settings: Settings): Settings {
  return {
    general: { ...settings.general },
    preset: Object.fromEntries(SITES.map(({ id }) => [id, isSiteEnabled(settings.preset, id)])),
    batch: { ...settings.batch },
    sync: { ...settings.sync },
  }
}

// "重置为默认"只重置当前 tab 编辑的那个分组，保存之前都只改副本
export function resetGroup<K extends keyof Settings>(draft: Settings, group: K): void {
  draft[group] = toDraft(createDefaultSettings())[group]
}

// 过期时间在输入框里按天显示。存储里可能有不是整天的值，显示成最接近的整数
export function toDays(expirationTime: number): number {
  return Math.round(expirationTime / DAY)
}

// 输入框里的天数换回过期时间，只认至少 1 天的整数：清空（null）、0、负数、小数都回到 fallback（保存着的过期时间）。
// el-input-number 每按一个键就更新一次 model，所以只看最后的值，不能沿用输入过程中的数：从 365 一路退格到空，中间会经过 3。
// 下限也不能交给组件的 min：它会把这些输入改成 1 天，保存后一天前的记录全被删掉。
// 小数不能存：输入框按四舍五入显示整数天，存 9.6 天会显示成 10 天
export function fromDays(days: number | null | undefined, fallback: number): number {
  return days == null || days < 1 || !Number.isInteger(days) ? fallback : days * DAY
}
