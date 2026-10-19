import { describe, expect, it, vi } from 'vitest'
import { createDefaultSettings, diffSettings, type Settings } from '@/core/settings'
import { SITES } from '@/shared/sites'
import { fromDays, resetGroup, toDays, toDraft } from '@/ui/draft'
import { DAY, YEAR } from './time'

vi.mock('vite-plugin-monkey/dist/client', () => import('./fakes/gm'))

// 存储里的设置：每个字段都和默认值不同，preset 里还留着一个已经删掉的站点
const SETTINGS: Settings = {
  general: { color: 'gray', expirationTime: 30 * DAY, debug: true },
  preset: { v2ex: false, linuxdo: true, removed: false },
  batch: { ctrlKey: false, shiftKey: false, altKey: true, metaKey: false, code: 'KeyB' },
  sync: { enabled: true, githubToken: 'token', gistId: 'gist' },
}

describe('toDraft：对话框编辑的副本', () => {
  it('preset 按站点表列出每个站点：存储里没有的算启用，已经删掉的站点不列', () => {
    const { preset } = toDraft(SETTINGS)
    expect(Object.keys(preset)).toEqual(SITES.map(({ id }) => id))
    expect(Object.entries(preset).filter(([, enabled]) => !enabled)).toEqual([['v2ex', false]])
  })

  it('其余分组照原样', () => {
    const { general, batch, sync } = toDraft(SETTINGS)
    expect({ general, batch, sync }).toEqual({ general: SETTINGS.general, batch: SETTINGS.batch, sync: SETTINGS.sync })
  })

  // 补上的站点都是按 isSiteEnabled 算的，和存储里的一样
  it('刚打开时没有改动', () => {
    expect(diffSettings(SETTINGS, toDraft(SETTINGS))).toEqual({})
  })

  it('改副本不会改到原来的设置', () => {
    const before = structuredClone(SETTINGS)
    const draft = toDraft(SETTINGS)
    draft.general.color = 'red'
    draft.preset.linuxdo = false
    draft.batch.code = 'KeyX'
    draft.sync.gistId = 'other'
    expect(SETTINGS).toEqual(before)
  })
})

describe('resetGroup："重置为默认"只重置一个分组', () => {
  const DEFAULTS = createDefaultSettings()
  const ALL_ENABLED = Object.fromEntries(SITES.map(({ id }) => [id, true]))

  it.each([
    ['general', DEFAULTS.general],
    ['preset', ALL_ENABLED],
    ['batch', DEFAULTS.batch],
    ['sync', DEFAULTS.sync],
  ] as const)('%s：换成默认值，其他分组不动', (group, defaults) => {
    const draft = toDraft(SETTINGS)
    const others = Object.entries(toDraft(SETTINGS)).filter(([key]) => key !== group)
    resetGroup(draft, group)
    expect(draft[group]).toEqual(defaults)
    expect(Object.entries(draft).filter(([key]) => key !== group)).toEqual(others)
  })

  it('重置后的分组和别的对象不共用：再改它不会改到默认值', () => {
    const draft = toDraft(SETTINGS)
    resetGroup(draft, 'batch')
    draft.batch.code = 'KeyX'
    resetGroup(draft, 'batch')
    expect(draft.batch).toEqual(DEFAULTS.batch)
  })
})

describe('过期时间按天编辑', () => {
  it.each([
    ['整天', 30 * DAY, 30],
    ['一年', YEAR, 365],
    ['不是整天（只可能是手改了存储）：显示最接近的整数', 9.6 * DAY, 10],
  ])('toDays：%s', (_, expirationTime, days) => {
    expect(toDays(expirationTime)).toBe(days)
  })

  it.each([1, 30, 3650])('fromDays：%s 天', (days) => {
    expect(fromDays(days, YEAR)).toBe(days * DAY)
  })

  // 从 365 退格到空，中间会经过 3：最后是空的话，要回到保存着的值，而不是 3 天
  it.each([
    ['清空', null],
    ['undefined', undefined],
    ['0', 0],
    ['负数', -1],
    ['小数', 9.6],
  ])('fromDays：%s 不合法，回到保存着的过期时间', (_, days) => {
    expect(fromDays(days, 30 * DAY)).toBe(30 * DAY)
  })
})
