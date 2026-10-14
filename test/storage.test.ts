import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  deleteExpiredLinks,
  deleteLinksIfUnchanged,
  getLastSyncTime,
  isVisited,
  mergeLinks,
  migrateLegacyLinks,
  onLastSyncTimeChange,
  recordVisit,
  setLastSyncTime
} from '@/core/storage';
import type { VisitedLinks } from '@/types';
import { removeBatchApi, resetGM, setValueFromOtherTab, store } from './fakes/gm';
import { DAY, NOW, YEAR } from './time';

vi.mock('vite-plugin-monkey/dist/client', () => import('./fakes/gm'));

const A = 'https://www.v2ex.com/t/1';
const B = 'https://www.v2ex.com/t/2';
const C = 'https://www.v2ex.com/t/3';

beforeEach(() => {
  resetGM();
  vi.useFakeTimers({ now: NOW, toFake: ['Date'] });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

// 存储里的全部内容。检查结果时直接看存储，不经过被测的读取函数
const stored = () => Object.fromEntries(store);

describe('mergeLinks：只把时间戳改大', () => {
  it('本地没有或者比本地新的才写入，返回写入的条数', () => {
    store.set(A, NOW - DAY);
    store.set(B, NOW - DAY);
    expect(mergeLinks({ [A]: NOW - 2 * DAY, [B]: NOW, [C]: NOW - DAY })).toBe(2);
    expect(stored()).toEqual({ [A]: NOW - DAY, [B]: NOW, [C]: NOW - DAY });
  });

  it('时间戳一样时不写', () => {
    store.set(A, NOW);
    expect(mergeLinks({ [A]: NOW })).toBe(0);
  });

  it.each([
    ['键不含冒号', 'userSettings', NOW],
    ['时间戳是 NaN', A, NaN],
    ['时间戳是 Infinity', A, Infinity],
    ['时间戳是字符串', A, String(NOW)],
    ['时间戳是 null', A, null],
  ])('丢掉不合法的条目：%s', (_, key, time) => {
    expect(mergeLinks({ [key]: time } as VisitedLinks)).toBe(0);
    expect(store.size).toBe(0);
  });
});

describe('recordVisit：记录一次访问', () => {
  it('写入现在的时间，已有的记录刷新成现在的时间，过期从这里重新算', () => {
    store.set(A, NOW - DAY);
    recordVisit(A);
    recordVisit(B);
    expect(stored()).toEqual({ [A]: NOW, [B]: NOW });
  });

  it('存储里的时间比现在还晚（其他设备的时钟偏快）时，不改小', () => {
    store.set(A, NOW + DAY);
    recordVisit(A);
    expect(store.get(A)).toBe(NOW + DAY);
  });
});

describe('isVisited：过期的记录读的时候就当作没有，不等清理', () => {
  it.each([
    ['没有记录', undefined, false],
    ['刚访问过', NOW, true],
    ['刚好到期', NOW - YEAR, true],
    ['过期 1 毫秒', NOW - YEAR - 1, false],
  ])('%s', (_, time, visited) => {
    if (time !== undefined) store.set(A, time);
    expect(isVisited(A, YEAR)).toBe(visited);
  });
});

describe('deleteLinksIfUnchanged：撤销批量标记', () => {
  it('只删时间戳还等于那次标记时间的记录，之后又点开过的留下', () => {
    const marked = { [A]: NOW, [B]: NOW };
    mergeLinks(marked);
    vi.setSystemTime(NOW + 1000);
    recordVisit(B); // 标记之后又点开了 B
    expect(deleteLinksIfUnchanged(marked)).toEqual([A]);
    expect(stored()).toEqual({ [B]: NOW + 1000 });
  });
});

describe('deleteExpiredLinks：过期清理', () => {
  it('删掉过期的记录，没过期的记录和设置都留下', () => {
    store.set('userSettings', { general: { debug: false } });
    store.set(A, NOW - DAY);
    store.set(B, NOW - YEAR); // 刚好到期，还不算过期
    store.set(C, NOW - YEAR - 1);
    deleteExpiredLinks(YEAR);
    expect(stored()).toEqual({
      userSettings: { general: { debug: false } },
      [A]: NOW - DAY,
      [B]: NOW - YEAR,
      lastCleanupTime: NOW,
    });
  });

  it('所有标签页合起来一天最多清理一次', () => {
    setValueFromOtherTab('lastCleanupTime', NOW - DAY + 1); // 其他标签页不到一天前刚清理过
    store.set(C, NOW - YEAR - 1);
    deleteExpiredLinks(YEAR);
    expect(store.has(C)).toBe(true);

    vi.setSystemTime(NOW + 1); // 距那次清理满一天了
    deleteExpiredLinks(YEAR);
    expect(store.has(C)).toBe(false);
  });
});

describe('migrateLegacyLinks：v2.21.0 及以前把全部记录存在 visitedLinks 一个键里', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('逐条合并进来，再删掉旧的键', () => {
    store.set('visitedLinks', { [A]: NOW - 2 * DAY, [B]: NOW - 2 * DAY });
    store.set(B, NOW - DAY); // 已经有更新的逐条记录
    migrateLegacyLinks();
    expect(stored()).toEqual({ [A]: NOW - 2 * DAY, [B]: NOW - DAY });
  });

  it('可以重复执行：还开着的旧版本标签页又写回了整块记录', () => {
    store.set('visitedLinks', { [A]: NOW - DAY });
    migrateLegacyLinks();
    store.set('visitedLinks', { [A]: NOW - 2 * DAY, [B]: NOW - 2 * DAY }); // 旧版本标签页里的那份旧数据
    migrateLegacyLinks();
    migrateLegacyLinks();
    expect(stored()).toEqual({ [A]: NOW - DAY, [B]: NOW - 2 * DAY });
  });

  it('丢掉不合法的条目', () => {
    store.set('visitedLinks', { [A]: NOW, syncVersion: 'v3', itemCount: 3, [B]: 'x' });
    migrateLegacyLinks();
    expect(stored()).toEqual({ [A]: NOW });
  });
});

describe('没有批量读写接口时（Tampermonkey 5.3、Violentmonkey 2.19.1 以前）逐条读写', () => {
  beforeEach(() => {
    removeBatchApi();
  });

  it('合并', () => {
    mergeLinks({ [A]: NOW, [B]: NOW });
    expect(stored()).toEqual({ [A]: NOW, [B]: NOW });
  });

  it('过期清理', () => {
    store.set(A, NOW - YEAR - 1);
    store.set(B, NOW - YEAR - 1);
    store.set(C, NOW);
    deleteExpiredLinks(YEAR);
    expect(stored()).toEqual({ [C]: NOW, lastCleanupTime: NOW });
  });

  it('撤销批量标记', () => {
    mergeLinks({ [A]: NOW, [B]: NOW });
    expect(deleteLinksIfUnchanged({ [A]: NOW, [B]: NOW })).toEqual([A, B]);
    expect(store.size).toBe(0);
  });
});

describe('lastSyncTime', () => {
  it('从没同步过时是 0', () => {
    expect(getLastSyncTime()).toBe(0);
  });

  it('本标签页、其他标签页同步完成后都会回调，取消之后不再回调', () => {
    const listener = vi.fn();
    const unsubscribe = onLastSyncTimeChange(listener);
    setLastSyncTime(NOW);
    setValueFromOtherTab('lastSyncTime', NOW + 1);
    unsubscribe();
    setLastSyncTime(NOW + 2);
    expect(listener.mock.calls).toEqual([[NOW], [NOW + 1]]);
  });
});
