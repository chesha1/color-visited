import ownStyle from '@/ui/style.css?inline'

// 对话框、通知共用的 Element Plus 配置（见 dialog.ts、message.ts）。
// 弹层（对话框的遮罩、取色面板、通知）默认从 z-index 2000 起往上叠。宿主元素没有定位，弹层和页面的元素在同一个层叠上下文里比，
// 会被页面的置顶元素盖住（比如虎扑的顶栏盖住通知），所以从一个很高的起点叠，之后打开的照样叠在前面的上面。
// 不能把宿主元素做成层叠上下文：挂在 document.body 里的取色面板会被整个压在对话框下面
export const ELEMENT_PLUS_CONFIG = { zIndex: 2_000_000_000 }

let root: ShadowRoot | undefined
const written = new Set<string>()

// 在 shadow root 里新建一个元素，给调用方挂界面：设置对话框的 Vue 应用、通知各用一个。
// Element Plus 的组件样式跟着各自的模块初始化进来（见 vite.config.ts 的 cssSideEffects），
// 比如先弹过通知、后打开设置时，对话框的样式是后来的，所以每次调用都把新来的补上
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

// 取色面板只能挂在 document.body（见 AGENTS.md「已经定了的界面技术」），它要的样式只能写进宿主页面：
// 收集到的 Element Plus 样式原样写在 <head> 的最后。对话框打开时给 body 加的、锁住页面滚动的类，样式也在里面
export function addPanelStyle(): HTMLStyleElement {
  const style = createStyle(collectedCss().join(''))
  document.head.append(style)
  return style
}

// 宿主元素用自定义的标签名，挂在 <html> 下，页面写给 div 这类标签的样式碰不到它
function createRoot(): ShadowRoot {
  const host = document.createElement('color-visited-ui')
  const shadowRoot = host.attachShadow({ mode: 'closed' })
  // 界面里的按键到这里就不再往上传，免得页面当成自己的快捷键（比如 Discourse 上按 c 是发新帖）。
  // Tab 除外，见 AGENTS.md「界面的事件和层叠」
  for (const type of ['keydown', 'keypress', 'keyup']) {
    shadowRoot.addEventListener(type, (event) => {
      if ((event as KeyboardEvent).key !== 'Tab') event.stopPropagation()
    })
  }
  shadowRoot.append(createStyle(ownStyle))
  document.documentElement.append(host)
  return shadowRoot
}

// 构建时 Element Plus 的组件样式收在这个数组里，开发时 Vite 把它们插进 <head>
function collectedCss(): string[] {
  if (import.meta.env.DEV) {
    return [...document.querySelectorAll('style[data-vite-dev-id]')].map((style) => style.textContent)
  }
  return (globalThis as unknown as Record<symbol, string[] | undefined>)[Symbol.for('color-visited/css')] ?? []
}

function createStyle(css: string): HTMLStyleElement {
  const style = document.createElement('style')
  style.textContent = css
  return style
}
