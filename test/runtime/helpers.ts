// 运行时测试碰实现的唯一一层：启动、本标签页保存设置、弹过的通知、链接有没有标记、标记用的颜色。
// 场景文件只经过这里碰实现：运行时的实现换了，主要改这个文件，场景不动。
// 准备记录、模拟其他标签页、检查存储，直接用 ../fakes/gm；页面和用户的操作见 ./dom。
// vi.mock 只对之后才加载的模块生效：场景文件要先引入这个文件，再引入别的会加载 src 模块的文件

import { vi } from 'vitest'
import { startPage } from '@/core/page'
import { saveSettings as save, type SettingsPatch } from '@/core/settings'

export interface Notice {
  message: string
  type: string
  /** 通知上"撤销"按钮的回调 */
  undo?: () => void
}

// 弹过的通知，按先后顺序
const notices = vi.hoisted((): Notice[] => [])
export { notices }

// 通知只记下来，不真的弹：真的通知要用 Element Plus
vi.mock('@/ui/notify', () => ({
  notify(message: string, type: string, action?: { onClick: () => void }) {
    notices.push({ message, type, undo: action?.onClick })
  },
}))

// 启动页面这一层：按当前的 URL 和设置激活，之后跟着 URL、设置的变化重新激活。
// main.ts 里启动时的其他几步（注册菜单、迁移旧数据、清理过期记录、自动同步）不跑。
// 启动之后 URL 检测和设置订阅一直都在，没有停下来的办法，所以一个测试文件只启动一次，文件里的测试按顺序接着前一个的状态跑
export function start(): void {
  startPage()
}

// 在本标签页保存设置，和在设置对话框里点保存一样：只交出改过的字段，快捷键改了就整个交出
export function saveSettings(patch: SettingsPatch): void {
  save(patch)
}

export function isMarked(link: Element): boolean {
  return link.hasAttribute('data-color-visited')
}

// 标记过的链接染成什么颜色：脚本写进页面的染色样式里的颜色，没有染色样式时是 undefined。
// 只看样式里写的值；样式在页面上能不能赢过网站自己的样式，jsdom 判断不了，要在浏览器里看
export function markColor(): string | undefined {
  const css = document.getElementById('color-visited-style')?.textContent
  return css?.match(/color:\s*(.+?)\s*!important/)?.[1]
}
