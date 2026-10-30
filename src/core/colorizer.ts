import { log } from '@/core/log'
import { createDefaultSettings, getSettings, type Settings } from '@/core/settings'
import { isTyping, matchesShortcut } from '@/core/shortcut'
import {
  deleteLinksIfUnchanged,
  isVisited,
  loadLinks,
  mergeLinks,
  onLinksChange,
  recordVisit,
  type VisitedLinks,
} from '@/core/storage'
import { runSync } from '@/core/sync'
import { normalizeUrl, type Site } from '@/shared/sites'
import { notify } from '@/ui/notify'

// 标记用带命名空间的 data 属性：class 可能和页面重名，React、Vue 更新 class 绑定时还会整个改写 className，把它冲掉
const MARK = 'data-color-visited'

export function activate(site: Site, settings: Settings): () => void {
  const { color, expirationTime, debug } = settings.general
  const isTarget = (url: string) => site.links.some((pattern) => pattern.test(url))

  // 按链接现在的 href 重新判断，不看原来有没有标记：翻页、"换一批"、虚拟滚动这类列表会复用 <a>、只换 href，
  // 移出 DOM 之后再改的 href 只能在插回来时发现，克隆出来的链接也带着原来的标记。
  // 结果和现在一样时 toggleAttribute 不写 DOM：每个新插入的链接都要判断，访问记录每变一次整页都要重新判断，
  // 而 setAttribute 即使值没变，页面上的 MutationObserver 也会收到一次变化
  const updateLinks = (links: Iterable<Element>, reason: string) => {
    let checked = 0
    let marked = 0
    for (const link of links) {
      // a[href] 也会选中 SVG 里的 <a>，它的 href 不是字符串，跳过
      if (!(link instanceof HTMLAnchorElement)) continue
      const url = normalizeUrl(link)
      if (link.toggleAttribute(MARK, isTarget(url) && isVisited(url, expirationTime))) marked++
      checked++
    }
    if (checked > 0) log.debug(`${reason}：检查了 ${checked} 个链接，标记了 ${marked} 个`)
  }

  const style = injectLinkStyle(color)
  // 要把全部记录读一遍，只在调试时做
  if (debug) log.debug(describeStorage())
  updateLinks(document.querySelectorAll('a[href]'), `按 ${site.name} 的规则染色`)

  // 观察整个 documentElement 而不是 body：有的站点会整个替换 <body>（比如用 Turbo 的），挂在旧 body 上的 observer 就收不到了
  const observer = new MutationObserver((mutations) => updateLinks(linksIn(mutations), '页面有变化'))
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] })

  // 访问记录一变，就按存储把整页的链接重新判断一遍。只挑出变了的 URL 也省不了什么：
  // 同一个 URL 在页面上可能有好几个写法不同的链接，要找出它们，照样得把每个链接都归一化一遍
  const unsubscribe = onLinksChange(() => updateLinks(document.querySelectorAll('a[href]'), '访问记录有变化'))

  const onClick = (event: MouseEvent) => {
    // auxclick 对中键、右键都会触发。右键点一下（比如复制链接地址）不算点开
    if (event.type === 'auxclick' && event.button !== 1) return
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null
    if (!(link instanceof HTMLAnchorElement)) return
    const url = normalizeUrl(link)
    if (!isTarget(url)) return
    recordVisit(url)
    log.debug(`记下访问：${url}`)
  }

  const onKeydown = (event: KeyboardEvent) => {
    if (isTyping(event) || !matchesShortcut(event, settings.batch)) return
    event.preventDefault()
    // 按住不放时 keydown 会重复触发，只标记第一次
    if (!event.repeat) batchMark(isTarget, expirationTime)
  }

  const ac = new AbortController()
  // 点击在捕获阶段记：页面在冒泡阶段阻止传播的话也收得到
  document.addEventListener('click', onClick, { capture: true, signal: ac.signal })
  document.addEventListener('auxclick', onClick, { capture: true, signal: ac.signal })
  document.addEventListener('keydown', onKeydown, { signal: ac.signal })

  return () => {
    ac.abort()
    observer.disconnect()
    unsubscribe()
    style.remove()
    for (const link of document.querySelectorAll(`a[${MARK}]`)) link.removeAttribute(MARK)
  }
}

// 新插入的链接（插入的节点本身，或者在它里面）、href 变了的链接
function* linksIn(mutations: MutationRecord[]): Generator<Element> {
  for (const mutation of mutations) {
    if (mutation.type === 'attributes') {
      yield mutation.target as Element
      continue
    }
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Element)) continue
      if (node.matches('a[href]')) yield node
      yield* node.querySelectorAll('a[href]')
    }
  }
}

// 规则写在 layer 里：layer 里的 !important 声明优先于所有不在 layer 里的 !important，和特异性无关，
// 网站自己写的 !important（比如 #app .list a{color:red!important}）压不过它。
// 颜色是用户填的：不合法的值（包括想借机拼出别的规则的）用默认值，写入用 textContent
function injectLinkStyle(color: string): HTMLStyleElement {
  const linkColor = CSS.supports('color', color) ? color : createDefaultSettings().general.color
  const link = `a[${MARK}]`
  const style = document.createElement('style')
  style.id = 'color-visited-style'
  style.textContent = `@layer color-visited {
  ${link}, ${link}::before, ${link}::after, ${link} *, ${link} *::before, ${link} *::after {
    color: ${linkColor} !important;
  }
  ${link} img, ${link} [style*="background-image"], ${link} [style*="background:"] {
    filter: opacity(0.1) !important;
  }
}`
  document.head.append(style)
  return style
}

function describeStorage(): string {
  const links = loadLinks()
  const kb = new TextEncoder().encode(JSON.stringify(links)).length / 1024
  return `存储里有 ${Object.keys(links).length} 条访问记录，约 ${kb.toFixed(1)} KB`
}

// 批量标记：页面上符合规则、还没访问过的链接记成同一个时间戳。快捷键可能是误按的，通知上给一个撤销的机会
function batchMark(isTarget: (url: string) => boolean, expirationTime: number): void {
  const now = Date.now()
  const newLinks: VisitedLinks = {}
  for (const link of document.querySelectorAll('a[href]')) {
    if (!(link instanceof HTMLAnchorElement)) continue
    const url = normalizeUrl(link)
    // 还没过期的记录不改时间戳：链接只是显示在页面上，不算访问
    if (isTarget(url) && !isVisited(url, expirationTime)) newLinks[url] = now
  }
  const count = mergeLinks(newLinks)
  if (count === 0) notify('没有找到新的符合规则的链接可添加', 'info')
  else notify(`已批量添加 ${count} 个链接到已访问记录`, 'success', {
    text: '撤销',
    onClick: () => undoBatchMark(newLinks),
    onClose: () => {
      if (getSettings().sync.enabled) runSync({ manual: false })
    },
  })
}

function undoBatchMark(newLinks: VisitedLinks): void {
  const deletedCount = deleteLinksIfUnchanged(newLinks).length
  const keptCount = Object.keys(newLinks).length - deletedCount
  notify(`已撤销 ${deletedCount} 个链接` + (keptCount > 0 ? `，${keptCount} 个点开过的保留` : ''), 'success')
}
