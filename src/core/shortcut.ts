// 快捷键 = 修饰键 + 物理键位，直接取事件上的同名字段，不做任何转换。
// 用 code 而不是 key：key 会随大小写、Shift（1 → !）、Mac 的 Option（V → √）、输入法（Process）变化
export interface Shortcut {
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
  metaKey: boolean
  /** KeyboardEvent.code，如 KeyV、ArrowUp */
  code: string
}

// Chromium 有 userAgentData，其他浏览器看 userAgent
const isMac = (() => {
  const { userAgentData, userAgent } = navigator as Navigator & { userAgentData?: { platform: string } }
  return userAgentData ? userAgentData.platform === 'macOS' : /Mac|iPod|iPhone|iPad/.test(userAgent)
})()

// Windows、Linux 上是 Ctrl+Shift+V，macOS 上是 Command+Shift+V
export const DEFAULT_SHORTCUT: Readonly<Shortcut> = { ctrlKey: !isMac, shiftKey: true, altKey: false, metaKey: isMac, code: 'KeyV' }

export function toShortcut({ ctrlKey, shiftKey, altKey, metaKey, code }: KeyboardEvent): Shortcut {
  return { ctrlKey, shiftKey, altKey, metaKey, code }
}

// 录快捷键时跳过这些键：单独按下的修饰键要等组合里的其他键，Tab、CapsLock 这类不适合当快捷键，code 为空表示浏览器认不出是哪个键
const SKIPPED_CODES = /^((Control|Shift|Alt|Meta)(Left|Right)|Tab|CapsLock|NumLock|ScrollLock|Insert|PrintScreen|Pause)?$/

export function isRecordable(event: KeyboardEvent): boolean {
  return !SKIPPED_CODES.test(event.code)
}

// 匹配和录入共用 toShortcut：按下的键录下来和设置相同，就算匹配
export function matchesShortcut(event: KeyboardEvent, shortcut: Shortcut): boolean {
  const pressed = toShortcut(event)
  return (Object.keys(pressed) as (keyof Shortcut)[]).every((k) => pressed[k] === shortcut[k])
}

const KEY_SYMBOLS: Record<string, string> = {
  ArrowUp: '↑',
  ArrowDown: '↓',
  ArrowLeft: '←',
  ArrowRight: '→',
  Enter: '⏎',
  Backspace: '⌫',
  Delete: '⌦',
  Escape: 'Esc',
}

// 修饰键按各个系统自己的叫法；键位名去掉 Key、Digit 前缀即可显示（KeyV → V），少数键换成符号
export function formatShortcut(shortcut: Shortcut): string[] {
  const parts: string[] = []
  if (shortcut.metaKey) parts.push(isMac ? '⌘ Command' : 'Win')
  if (shortcut.ctrlKey) parts.push(isMac ? '⌃ Control' : 'Ctrl')
  if (shortcut.altKey) parts.push(isMac ? '⌥ Option' : 'Alt')
  if (shortcut.shiftKey) parts.push(isMac ? '⇧ Shift' : 'Shift')
  parts.push(KEY_SYMBOLS[shortcut.code] || shortcut.code.replace(/^(Key|Digit)/, ''))
  return parts
}

// 用户正在输入时不响应快捷键，否则会抢掉输入框里的同名操作（比如默认的 Ctrl+Shift+V 是浏览器的“粘贴为纯文本”）
export function isTyping(event: KeyboardEvent): boolean {
  if (event.isComposing) return true
  // 监听器挂在 document 上，shadow DOM 里的输入框会被重定向成宿主元素，所以要从 composedPath 取实际的目标。
  // 在脚本自己的界面里打字时，按键传不到 document（见 ui/root.ts）；取色面板在 document.body 里，按输入框判断
  const target = event.composedPath()[0]
  return target instanceof HTMLElement
    && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
}
