import type { BatchKeySettings } from '@/types';

// 快捷键 = 修饰键 + 物理键位，直接取事件上的同名字段，不做任何转换。
// 用 code 而不是 key：key 会随大小写、Shift（1 → !）、Mac 的 Option（V → √）、输入法（Process）变化
export function toShortcut({ ctrlKey, shiftKey, altKey, metaKey, code }: KeyboardEvent): BatchKeySettings {
  return { ctrlKey, shiftKey, altKey, metaKey, code };
}

// 匹配和录入共用 toShortcut：按下的键录下来和设置相同，就算匹配
export function matchesShortcut(event: KeyboardEvent, shortcut: BatchKeySettings): boolean {
  const pressed = toShortcut(event);
  return (Object.keys(pressed) as (keyof BatchKeySettings)[]).every(k => pressed[k] === shortcut[k]);
}
