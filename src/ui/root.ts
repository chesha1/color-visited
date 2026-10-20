// 设置界面和通知放在一个 closed shadow root 里，第一次打开设置或弹通知时才创建：页面的样式碰不到界面，页面的脚本也不能经宿主元素的 shadowRoot 拿到里面的元素。
// 宿主元素用自定义的标签名，挂在 <html> 下，页面写给 div 这类标签的样式碰不到它。
// 样式都写进 shadow root：先写自己的（style.css）；Element Plus 的组件样式跟着各自的模块初始化进来（见 vite.config.ts 的 cssSideEffects），
// 比如先弹过通知、后打开设置时，对话框的样式是后来的，所以每次调用都把新来的补上

import ownStyle from '@/ui/style.css?inline'

// 对话框、通知共用的 Element Plus 配置（见 dialog.ts、message.ts）。
// 弹层（对话框的遮罩、取色面板、通知）默认从 z-index 2000 起往上叠。宿主元素没有定位，弹层和页面的元素在同一个层叠上下文里比，
// 会被页面的置顶元素盖住（比如虎扑的顶栏盖住通知），所以从一个很高的起点叠，之后打开的照样叠在前面的上面。
// 不能把宿主元素做成层叠上下文：挂在 document.body 里的取色面板会被整个压在对话框下面
export const ELEMENT_PLUS_CONFIG = { zIndex: 2_000_000_000 }

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
  const host = document.createElement('color-visited-ui')
  const shadowRoot = host.attachShadow({ mode: 'closed' })
  // 键盘事件会冒泡出 shadow root，页面在 document 上看到的目标是宿主元素，分不出用户在输入框里打字，
  // 会当成自己的快捷键（比如 Discourse 上按 c 是发新帖）。所以界面里的按键到这里就不再往上传。
  // Tab 除外：它不是快捷键，而 Element Plus 的焦点陷阱要在 document 上看到它，才知道焦点是按键移走的，把移出对话框的焦点拉回来。
  // 页面在捕获阶段照样收得到，录快捷键就是在 document 的捕获阶段录的；Element Plus 挂在 document 上的其他键盘监听收不到，比如按 Esc 关通知
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
    return [...document.querySelectorAll('style[data-vite-dev-id]')].map((style) => style.textContent ?? '')
  }
  return (globalThis as unknown as Record<symbol, string[] | undefined>)[Symbol.for('color-visited/css')] ?? []
}

function createStyle(css: string): HTMLStyleElement {
  const style = document.createElement('style')
  style.textContent = css
  return style
}
