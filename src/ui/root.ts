// 设置界面和通知放在一个 closed shadow root 里，第一次打开设置或弹通知时才创建：页面的样式碰不到界面，页面的脚本也不能经宿主元素的 shadowRoot 拿到里面的元素。
// 宿主元素用自定义的标签名，挂在 <html> 下，页面写给 div 这类标签的样式碰不到它。
// 样式都写进 shadow root：先写自己的（style.css）；Element Plus 的组件样式跟着各自的模块初始化进来（见 vite.config.ts 的 cssSideEffects），
// 比如先弹过通知、后打开设置时，对话框的样式是后来的，所以每次调用都把新来的补上

import { UI_TAG } from '@/core/shortcut'
import ownStyle from '@/ui/style.css?inline'

let root: ShadowRoot | undefined
const written = new Set<string>()

// 在 shadow root 里新建一个元素，给调用方挂界面：设置对话框的 Vue 应用、通知各用一个
export function createMountPoint(): HTMLElement {
  root ??= createRoot()
  const css = collectedCss().filter((text) => !written.has(text))
  if (css.length > 0) {
    for (const text of css) written.add(text)
    // Element Plus 的变量写在 :root 上，在 shadow root 里要写在宿主元素上。
    // 放进 Tailwind 的 components 层：排在 preflight（base 层）后面，按钮的背景这些不会被它盖掉；排在 utilities 层前面，写在组件上的工具类才生效
    root.append(createStyle(`@layer components{${css.join('').replaceAll(':root', ':host')}}`))
  }
  return root.appendChild(document.createElement('div'))
}

// 取色面板只能挂在 document.body：Element Plus 按 document 上收到的事件的 target 判断是不是点到了面板外面，
// shadow root 里的点击传到 document 时，target 已经换成了宿主元素，面板一点就关。
// 所以它要的样式只能写进宿主页面：收集到的 Element Plus 样式原样写在 <head> 的最后。对话框打开时给 body 加的、锁住页面滚动的类，样式也在里面
export function addPanelStyle(): HTMLStyleElement {
  const style = createStyle(collectedCss().join(''))
  document.head.append(style)
  return style
}

function createRoot(): ShadowRoot {
  const host = document.createElement(UI_TAG)
  const shadowRoot = host.attachShadow({ mode: 'closed' })
  shadowRoot.append(createStyle(ownStyle))
  document.documentElement.append(host)
  return shadowRoot
}

// 构建时 Element Plus 的组件样式收在这个数组里，开发时 Vite 把它们插进 <head>
function collectedCss(): string[] {
  if (import.meta.env.DEV) {
    return [...document.querySelectorAll('style[data-vite-dev-id]')].map((style) => style.textContent ?? '')
  }
  return (globalThis as unknown as Record<symbol, string[] | undefined>)[Symbol.for('color-visited/css')] ?? []
}

function createStyle(css: string): HTMLStyleElement {
  const style = document.createElement('style')
  style.textContent = css
  return style
}
