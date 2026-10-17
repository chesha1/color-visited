// 运行时测试碰实现的唯一一层：启动、本标签页保存设置、弹过的通知、链接有没有标记、标记用的颜色。
// 场景文件只经过这里碰实现：运行时的实现换了，主要改这个文件，场景不动。
// 准备记录、模拟其他标签页、检查存储，直接用 ../fakes/gm；页面和用户的操作见 ./dom。
// vi.mock 只对之后才加载的模块生效：场景文件要先引入这个文件，再引入别的会加载 src 模块的文件

import { vi } from 'vitest'
import { eventBus } from '@/core/eventBus'
import { startColorVisitedScript } from '@/core/script'
import type { BatchKeySettings, GeneralSettings, SyncSettings } from '@/types'

export interface Notice {
  message: string
  type?: string
  /** 通知上"撤销"按钮的回调 */
  undo?: () => void
}

// 弹过的通知，按先后顺序
const notices = vi.hoisted((): Notice[] => [])
export { notices }

// 通知和染色样式现在都在 core/ui.ts 里：只换掉通知，样式用真的。
// ui.ts 引入了 Element Plus 通知组件的样式，那是 .css 文件，Node 加载不了，换成空模块
vi.mock('element-plus/es/components/message/style/css', () => ({}))
vi.mock('@/core/ui', async (importOriginal) => ({
  ...await importOriginal<typeof import('@/core/ui')>(),
  showNotification(message: string, type?: string, action?: { onClick: () => void }) {
    notices.push({ message, type, undo: action?.onClick })
  },
}))

// 启动脚本。现在的运行时没有完整的释放（监听器挂在 document 上，observer 是模块级的单例），
// 所以一个测试文件只启动一次，文件里的测试按顺序接着前一个的状态跑
export function start(): void {
  vi.spyOn(console, 'log').mockImplementation(() => {}) // 现在启动、同步时无条件打日志，测试里不看
  startColorVisitedScript()
}

// 设置对话框保存时交出的改动：只有改过的字段，快捷键改了就整个交出
export interface SettingsPatch {
  general?: Partial<GeneralSettings>
  preset?: Record<string, boolean>
  batch?: BatchKeySettings
  sync?: Partial<SyncSettings>
}

// 在本标签页保存设置，和在设置对话框里点保存一样
export function saveSettings(patch: SettingsPatch): void {
  if (patch.general) eventBus.emit('settings:save', { type: 'general', settings: patch.general })
  if (patch.preset) eventBus.emit('settings:save', { type: 'preset', states: patch.preset })
  if (patch.batch) eventBus.emit('settings:save', { type: 'batch-key', settings: patch.batch })
  if (patch.sync) eventBus.emit('settings:save', { type: 'sync', settings: patch.sync })
}

export function isMarked(link: Element): boolean {
  return link.classList.contains('visited-link')
}

// 标记过的链接染成什么颜色：脚本写进页面的染色样式里的颜色，没有染色样式时是 undefined。
// 只看样式里写的值；样式在页面上能不能赢过网站自己的样式，jsdom 判断不了，要在浏览器里看
export function markColor(): string | undefined {
  const css = document.getElementById('color-visited-style')?.textContent
  return css?.match(/color:\s*(.+?)\s*!important/)?.[1]
}
