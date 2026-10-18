import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  createDefaultSettings,
  diffSettings,
  getSettings,
  onSettingsChange,
  parseSettings,
  saveSettings,
  type Settings,
} from '@/core/settings'
import { resetGM, setValueFromOtherTab, store } from './fakes/gm'
import { DAY, YEAR } from './time'

vi.mock('vite-plugin-monkey/dist/client', () => import('./fakes/gm'))

const DEFAULTS = createDefaultSettings()

// 存储里一份完整的设置，每个字段都和默认值不同
const STORED: Settings = {
  general: { color: 'gray', expirationTime: 30 * DAY, debug: true },
  preset: { v2ex: false, linuxdo: true },
  batch: { ctrlKey: false, shiftKey: false, altKey: true, metaKey: false, code: 'KeyB' },
  sync: { enabled: true, githubToken: 'token', gistId: 'gist' },
}

describe('parseSettings：以默认值为底，只认默认值里有、类型也相同的字段', () => {
  it.each([
    ['空存储', undefined],
    ['null', null],
    ['不是对象', 'userSettings'],
    ['数组', []],
  ])('%s：全部用默认值', (_, raw) => {
    expect(parseSettings(raw)).toEqual(DEFAULTS)
  })

  it('完整的设置：原样读出', () => {
    expect(parseSettings(STORED)).toEqual(STORED)
  })

  it('preset 是 null：当作空的，所有站点都算启用', () => {
    expect(parseSettings({ ...STORED, preset: null }).preset).toEqual({})
  })

  it('preset 里只留布尔值', () => {
    expect(parseSettings({ ...STORED, preset: { v2ex: false, linuxdo: 'yes', zhihu: null, hupu: true } }).preset)
      .toEqual({ v2ex: false, hupu: true })
  })

  it('缺字段：缺的用默认值，其余的照旧', () => {
    expect(parseSettings({ general: { color: 'gray' }, sync: { enabled: true } })).toEqual({
      ...DEFAULTS,
      general: { ...DEFAULTS.general, color: 'gray' },
      sync: { ...DEFAULTS.sync, enabled: true },
    })
  })

  it('类型不对的字段用默认值，其余的照旧', () => {
    const raw = {
      ...STORED,
      general: { ...STORED.general, color: 0, debug: 'true' },
      sync: { ...STORED.sync, githubToken: null },
    }
    expect(parseSettings(raw)).toEqual({
      ...STORED,
      general: { ...STORED.general, color: DEFAULTS.general.color, debug: DEFAULTS.general.debug },
      sync: { ...STORED.sync, githubToken: DEFAULTS.sync.githubToken },
    })
  })

  it('去掉默认值里没有的字段，比如 v2.21.0 及以前的 sync.lastSyncTime', () => {
    expect(parseSettings({ ...STORED, sync: { ...STORED.sync, lastSyncTime: 1 }, extra: 1 })).toEqual(STORED)
  })

  // 按字段补的话会拼出一个谁都没设过的组合，比如这里会变成 Alt+V
  it('快捷键缺 code（以前存的是 key）：整个换成默认的', () => {
    const { code: _, ...withoutCode } = STORED.batch
    expect(parseSettings({ ...STORED, batch: { ...withoutCode, key: 'b' } }).batch).toEqual(DEFAULTS.batch)
  })

  describe('过期时间', () => {
    it.each([
      ['null', null],
      ['0', 0],
      ['负数', -DAY],
      ['365（把天数当毫秒填）', 365],
      ['半天', DAY / 2],
      ['NaN', NaN],
    ])('%s：换成一年', (_, expirationTime) => {
      expect(parseSettings({ ...STORED, general: { ...STORED.general, expirationTime } }).general.expirationTime).toBe(YEAR)
    })

    it('缺字段：换成一年', () => {
      const { expirationTime: _, ...general } = STORED.general
      expect(parseSettings({ ...STORED, general }).general.expirationTime).toBe(YEAR)
    })

    it.each([
      ['1 天', DAY],
      ['9.6 天', 9.6 * DAY],
      ['3650 天', 3650 * DAY],
    ])('%s：原样保留', (_, expirationTime) => {
      expect(parseSettings({ ...STORED, general: { ...STORED.general, expirationTime } }).general.expirationTime).toBe(expirationTime)
    })
  })

  it('每次返回新的对象，改了不影响下一次', () => {
    parseSettings(undefined).batch.code = 'KeyX'
    parseSettings(undefined).preset.v2ex = false
    expect(parseSettings(undefined)).toEqual(DEFAULTS)
  })
})

describe('saveSettings：只把改过的字段合并到存储里的当前值上', () => {
  beforeEach(() => {
    resetGM()
    store.set('userSettings', STORED)
  })

  // 存储里的当前值可能是对话框打开之后其他标签页刚写的，没改过的字段要保留它
  it('改一个字段：其他字段保留存储里的当前值', () => {
    saveSettings({ general: { color: 'red' }, sync: { gistId: 'other' } })
    expect(store.get('userSettings')).toEqual({
      ...STORED,
      general: { ...STORED.general, color: 'red' },
      sync: { ...STORED.sync, gistId: 'other' },
    })
  })

  it('站点开关：只改交出来的站点', () => {
    saveSettings({ preset: { v2ex: true, zhihu: false } })
    expect(getSettings().preset).toEqual({ v2ex: true, linuxdo: true, zhihu: false })
  })

  it('快捷键：整个替换', () => {
    const shortcut = { ctrlKey: true, shiftKey: false, altKey: false, metaKey: false, code: 'KeyM' }
    saveSettings({ batch: shortcut })
    expect(getSettings().batch).toEqual(shortcut)
  })

  it('存储里的旧值先规范化再合并：残留的字段去掉，不合法的过期时间换成一年', () => {
    store.set('userSettings', { ...STORED, general: { ...STORED.general, expirationTime: 0 }, sync: { ...STORED.sync, lastSyncTime: 1 } })
    saveSettings({ general: { debug: false } })
    expect(store.get('userSettings')).toEqual({ ...STORED, general: { ...STORED.general, expirationTime: YEAR, debug: false } })
  })
})

describe('onSettingsChange', () => {
  beforeEach(() => {
    resetGM()
  })

  it('本标签页保存、其他标签页写入，各回调一次；取消订阅之后不再回调', () => {
    const listener = vi.fn(() => getSettings().general.color)
    const unsubscribe = onSettingsChange(listener)

    saveSettings({ general: { color: 'red' } })
    expect(listener).toHaveBeenCalledTimes(1)
    expect(listener).toHaveLastReturnedWith('red')

    setValueFromOtherTab('userSettings', { ...STORED, general: { ...STORED.general, color: 'blue' } })
    expect(listener).toHaveBeenCalledTimes(2)
    expect(listener).toHaveLastReturnedWith('blue')

    unsubscribe()
    saveSettings({ general: { color: 'green' } })
    setValueFromOtherTab('userSettings', STORED)
    expect(listener).toHaveBeenCalledTimes(2)
  })
})

describe('diffSettings：只交出改过的字段，没改的部分不出现', () => {
  const draftOf = (change: (draft: Settings) => void): Settings => {
    const draft = structuredClone(STORED)
    change(draft)
    return draft
  }

  it('什么都没改', () => {
    expect(diffSettings(STORED, structuredClone(STORED))).toEqual({})
  })

  it('改了几个字段：只交出这几个', () => {
    const draft = draftOf((draft) => {
      draft.general.color = 'red'
      draft.sync.enabled = false
      draft.sync.gistId = 'other'
    })
    expect(diffSettings(STORED, draft)).toEqual({ general: { color: 'red' }, sync: { enabled: false, gistId: 'other' } })
  })

  it('站点开关：只交出改了的站点', () => {
    const draft = draftOf((draft) => {
      draft.preset.v2ex = true
      draft.preset.linuxdo = true
    })
    expect(diffSettings(STORED, draft)).toEqual({ preset: { v2ex: true } })
  })

  it('站点开关：preset 里没有的站点算启用，打开它不算改动，关掉才算', () => {
    expect(diffSettings(STORED, draftOf((draft) => {
      draft.preset.zhihu = true
    }))).toEqual({})
    expect(diffSettings(STORED, draftOf((draft) => {
      draft.preset.zhihu = false
    }))).toEqual({ preset: { zhihu: false } })
  })

  it('快捷键改了任何一处：整个交出', () => {
    const draft = draftOf((draft) => {
      draft.batch.code = 'KeyC'
    })
    expect(diffSettings(STORED, draft)).toEqual({ batch: { ...STORED.batch, code: 'KeyC' } })
  })
})
