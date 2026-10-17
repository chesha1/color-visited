// 页面和用户的操作。只用 DOM 的 API，和脚本的实现无关

// 等 MutationObserver 的回调跑完。回调在微任务里，等一个宏任务，排在前面的微任务就都跑完了
export function flush(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve))
}

export function addLink(href: string, parent: Element = document.body): HTMLAnchorElement {
  const link = document.createElement('a')
  link.setAttribute('href', href)
  link.textContent = href
  parent.append(link)
  return link
}

// SVG 里的 <a>：选择器 a[href] 也会选中它，但它不是 HTMLAnchorElement，href 也不是字符串
// （浏览器里是 SVGAnimatedString，jsdom 里没有这个属性）
export function addSvgLink(href: string, parent: Element = document.body): SVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const link = document.createElementNS('http://www.w3.org/2000/svg', 'a')
  link.setAttribute('href', href)
  svg.append(link)
  parent.append(svg)
  return link
}

// 左键点击。页面在冒泡阶段取消了跳转（像 SPA 的路由那样）：jsdom 不支持跳到别的页面，跳转会打一条 Not implemented 的错误
export function click(target: Element): void {
  const cancel = (event: Event) => event.preventDefault()
  document.addEventListener('click', cancel)
  target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 }))
  document.removeEventListener('click', cancel)
}

// 中键、右键点击只触发 auxclick，不触发 click
export function middleClick(target: Element): void {
  target.dispatchEvent(new MouseEvent('auxclick', { bubbles: true, cancelable: true, button: 1 }))
}

export function rightClick(target: Element): void {
  target.dispatchEvent(new MouseEvent('auxclick', { bubbles: true, cancelable: true, button: 2 }))
}

// 按下一个键。焦点不在任何元素上时，keydown 的目标是 body
export function press(keys: KeyboardEventInit, target: Element = document.body): void {
  target.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, composed: true, ...keys }))
}

// SPA 的站内跳转：改地址栏，把 container 的内容换成新页面的链接，等脚本处理完，返回这些链接。
// 脚本靠 DOM 的变化发现地址变了，所以先改地址栏、再改 DOM，hrefs 至少要有一个
export async function navigate(path: string, container: Element, ...hrefs: string[]): Promise<HTMLAnchorElement[]> {
  history.pushState(null, '', path)
  container.replaceChildren()
  const links = hrefs.map((href) => addLink(href, container))
  await flush()
  return links
}
