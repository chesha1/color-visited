import { describe, expect, it } from 'vitest'
import { formatShortcut, isRecordable, matchesShortcut, toShortcut, type Shortcut } from '@/core/shortcut'

// 按下的键。key 不参与匹配，写上是为了说明这时候 key 是什么
function press(fields: Partial<KeyboardEvent>): KeyboardEvent {
  return { ctrlKey: false, shiftKey: false, altKey: false, metaKey: false, code: '', key: '', ...fields } as KeyboardEvent
}

function shortcut(fields: Partial<Shortcut>): Shortcut {
  return { ctrlKey: false, shiftKey: false, altKey: false, metaKey: false, code: '', ...fields }
}

describe('formatShortcut：每个键单独显示，修饰键在前，物理键位转成键名或符号', () => {
  it.each([
    [shortcut({ ctrlKey: true, shiftKey: true, code: 'KeyV' }), ['Ctrl', 'Shift', 'V']],
    [shortcut({ ctrlKey: true, shiftKey: true, altKey: true, metaKey: true, code: 'Digit1' }), ['Win', 'Ctrl', 'Alt', 'Shift', '1']],
    [shortcut({ code: 'ArrowUp' }), ['↑']],
    [shortcut({ code: 'Escape' }), ['Esc']],
    [shortcut({ code: 'F2' }), ['F2']],
  ])('%j', (value, keys) => {
    expect(formatShortcut(value)).toEqual(keys)
  })
})

describe('matchesShortcut：修饰键和物理键位（code）都一样才算按下了快捷键', () => {
  const ctrlShiftV = shortcut({ ctrlKey: true, shiftKey: true, code: 'KeyV' })

  it.each([
    ['按下的键一模一样', press({ ctrlKey: true, shiftKey: true, code: 'KeyV', key: 'V' }), true],
    ['开着大写锁定，key 是小写', press({ ctrlKey: true, shiftKey: true, code: 'KeyV', key: 'v' }), true],
    ['开着输入法，key 是 Process', press({ ctrlKey: true, shiftKey: true, code: 'KeyV', key: 'Process' }), true],
    // 四个修饰键各有一行多按或少按，哪一个漏了比较都会被发现
    ['少按了 Ctrl', press({ shiftKey: true, code: 'KeyV', key: 'V' }), false],
    ['少按了 Shift', press({ ctrlKey: true, code: 'KeyV', key: 'v' }), false],
    ['多按了 Alt', press({ ctrlKey: true, shiftKey: true, altKey: true, code: 'KeyV', key: 'V' }), false],
    ['多按了 Command', press({ ctrlKey: true, shiftKey: true, metaKey: true, code: 'KeyV', key: 'v' }), false],
    ['键位不同', press({ ctrlKey: true, shiftKey: true, code: 'KeyC', key: 'C' }), false],
  ])('Ctrl+Shift+V：%s', (_, event, matched) => {
    expect(matchesShortcut(event, ctrlShiftV)).toBe(matched)
  })

  it.each([
    ['Shift 把 1 变成了 !', shortcut({ ctrlKey: true, shiftKey: true, code: 'Digit1' }), press({ ctrlKey: true, shiftKey: true, code: 'Digit1', key: '!' })],
    ['Mac 上 Option 把 V 变成了 √', shortcut({ altKey: true, code: 'KeyV' }), press({ altKey: true, code: 'KeyV', key: '√' })],
    ['方向键', shortcut({ ctrlKey: true, code: 'ArrowUp' }), press({ ctrlKey: true, code: 'ArrowUp', key: 'ArrowUp' })],
    ['功能键', shortcut({ code: 'F2' }), press({ code: 'F2', key: 'F2' })],
    ['空格', shortcut({ shiftKey: true, code: 'Space' }), press({ shiftKey: true, code: 'Space', key: ' ' })],
  ])('%s：照样匹配', (_, settings, event) => {
    expect(matchesShortcut(event, settings)).toBe(true)
  })
})

describe('toShortcut：录快捷键时只记修饰键和键位', () => {
  it('key、repeat 这些不记', () => {
    expect(toShortcut(press({ ctrlKey: true, shiftKey: true, code: 'KeyV', key: 'Process', repeat: true })))
      .toEqual({ ctrlKey: true, shiftKey: true, altKey: false, metaKey: false, code: 'KeyV' })
  })

  it('录下来的快捷键，再按一次同样的键就能匹配上', () => {
    const event = press({ altKey: true, metaKey: true, code: 'Semicolon', key: '…' })
    expect(matchesShortcut(event, toShortcut(event))).toBe(true)
  })
})

describe('isRecordable：录快捷键时哪些键录下来', () => {
  it.each([
    ['按住 Ctrl 时 Ctrl 自己的 keydown', press({ ctrlKey: true, code: 'ControlLeft', key: 'Control' })],
    ['右边的 Shift', press({ shiftKey: true, code: 'ShiftRight', key: 'Shift' })],
    ['Alt', press({ altKey: true, code: 'AltLeft', key: 'Alt' })],
    ['Command', press({ metaKey: true, code: 'MetaRight', key: 'Meta' })],
    ['Tab', press({ code: 'Tab', key: 'Tab' })],
    ['CapsLock', press({ code: 'CapsLock', key: 'CapsLock' })],
    ['浏览器认不出是哪个键', press({ code: '', key: 'Unidentified' })],
  ])('%s：跳过', (_, event) => {
    expect(isRecordable(event)).toBe(false)
  })

  it.each([
    ['Ctrl+Shift+V', press({ ctrlKey: true, shiftKey: true, code: 'KeyV', key: 'V' })],
    ['单独的字母', press({ code: 'KeyB', key: 'b' })],
    ['Esc', press({ code: 'Escape', key: 'Escape' })],
    ['功能键', press({ code: 'F2', key: 'F2' })],
    ['Shift+空格', press({ shiftKey: true, code: 'Space', key: ' ' })],
  ])('%s：录', (_, event) => {
    expect(isRecordable(event)).toBe(true)
  })
})
