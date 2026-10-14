export const DAY = 24 * 60 * 60 * 1000
export const YEAR = 365 * DAY

// 测试里的"现在"。测试用 vi.useFakeTimers({ now: NOW, toFake: ['Date'] }) 让 Date.now() 停在这里，
// 过期、时间戳这些才算得准。只换 Date：setTimeout 这些照常走，不用手动推进
export const NOW = Date.UTC(2026, 9, 14)
