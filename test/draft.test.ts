import { describe, expect, it, vi } from 'vitest'
import { createDefaultSettings, type Settings } from '@/core/settings'
import { fromDays, resetGroup, toDays } from '@/ui/draft'
import { DAY, YEAR } from './time'

vi.mock('vite-plugin-monkey/dist/client', () => import('./fakes/gm'))

const DEFAULTS = createDefaultSettings()

// 对话框编辑的副本：每个分组都和默认值不同
const SETTINGS: Settings = {
  general: { color: 'gray', expirationTime: 30 * DAY, debug: true },
  preset: { ...DEFAULTS.preset, v2ex: false },
  batch: { ctrlKey: false, shiftKey: false, altKey: true, metaKey: false, code: 'KeyB' },
  sync: { enabled: true, githubToken: 'token', gistId: 'gist' },
}

describe('resetGroup："恢复本页默认值"只重置一个分组', () => {
  it.each(['general', 'preset', 'batch', 'sync'] as const)('%s：换成默认值，其他分组不动', (group) => {
    const draft = structuredClone(SETTINGS)
    const others = Object.entries(SETTINGS).filter(([key]) => key !== group)
    resetGroup(draft, group)
    expect(draft[group]).toEqual(DEFAULTS[group])
    expect(Object.entries(draft).filter(([key]) => key !== group)).toEqual(others)
  })

  it('重置后的分组和别的对象不共用：再改它不会改到默认值', () => {
    const draft = structuredClone(SETTINGS)
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
