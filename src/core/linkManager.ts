// ================== 链接管理模块 ==================

import { shouldColorLink } from '@/core/pageDetector'
import { showNotification, removeCustomStyles } from '@/core/ui'
import { logStorageInfo } from '@/core/utils'
import { normalizeUrl } from '@/shared/sites'
import { clearLinkContext } from '@/core/domObserver'
import { deleteLinksIfUnchanged, isVisited, loadLinks, mergeLinks } from '@/core/storage'
import type { ScriptState, VisitedLinks } from '@/types'

// 批量染色当前页面上的所有符合规则的链接（仅供快捷键调用）
export function batchAddLinks(state: ScriptState): void {
  const startTime = performance.now()
  const now = Date.now()
  const newLinks: VisitedLinks = {}

  const links = document.querySelectorAll('a[href]:not(.visited-link)')
  links.forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) return // SVG 里的 <a> 也会被选中，它的 href 不是字符串
    const url = normalizeUrl(link)
    if (!shouldColorLink(url, state)) return
    // 还没过期的记录不改时间戳：链接只是显示在页面上，不算访问
    if (!Object.hasOwn(newLinks, url) && !isVisited(url, state.generalSettings.expirationTime)) newLinks[url] = now
    link.classList.add('visited-link')
  })

  const addedCount = Object.keys(newLinks).length
  if (state.generalSettings.debug) {
    console.log(`[batchAddLinks] 处理 ${links.length} 个链接，新增 ${addedCount} 条记录，耗时 ${(performance.now() - startTime).toFixed(2)}ms`)
  }

  if (addedCount === 0) {
    showNotification('没有找到新的符合规则的链接可添加')
    return
  }

  mergeLinks(newLinks)
  // 快捷键可能是误按的，通知上给一个撤销的机会
  showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`, 'success', {
    text: '撤销',
    onClick: () => undoBatchAdd(newLinks),
  })
}

// 撤销一次批量标记：删掉这次新增、之后没再点开过的记录，并去掉对应链接的颜色
function undoBatchAdd(newLinks: VisitedLinks): void {
  const deletedUrls = new Set(deleteLinksIfUnchanged(newLinks))

  // updateAllLinksStatus 只加颜色不去颜色，这里单独去掉。同一个 URL 在页面上可能有好几个链接
  document.querySelectorAll('a.visited-link').forEach((link) => {
    if (link instanceof HTMLAnchorElement && deletedUrls.has(normalizeUrl(link))) {
      link.classList.remove('visited-link')
    }
  })

  const keptCount = Object.keys(newLinks).length - deletedUrls.size
  showNotification(`已撤销 ${deletedUrls.size} 个链接` + (keptCount > 0 ? `，${keptCount} 个点开过的保留` : ''))
}

// ================== 链接状态管理 ==================

// 按链接现在的 href 更新标记：该染的加上，不该染的去掉。
// 不看链接原来有没有标记：翻页、"换一批"、虚拟滚动这类列表会复用 <a> 元素，只换 href，原来的标记可能已经不对了
export function updateLinkStatus(link: Element, state: ScriptState): void {
  // a[href] 也会选中 SVG 里的 <a>，它的 href 是 SVGAnimatedString 对象而不是字符串，直接跳过
  if (!(link instanceof HTMLAnchorElement)) return

  const originalHref = link.href
  const inputUrl = normalizeUrl(link)
  const shouldColor = shouldColorLink(inputUrl, state)

  if (state.generalSettings.debug) {
    console.log(`[updateLinkStatus] 原始href: ${originalHref}`)
    console.log(`[updateLinkStatus] 处理后URL: ${inputUrl}`)
    console.log(`[updateLinkStatus] shouldColorLink结果: ${shouldColor}`)
  }

  const visited = shouldColor && isVisited(inputUrl, state.generalSettings.expirationTime)
  if (state.generalSettings.debug && shouldColor) {
    console.log(`[updateLinkStatus] 是否已访问: ${visited}`)
  }

  // 用带第二个参数的 toggle：标记已经是这个状态时不改 class。add、remove 即使没变也会改写一次 class，
  // 页面上监听 class 的代码就会收到变化，而这里每个新插入的链接都要走一遍
  link.classList.toggle('visited-link', visited)
}

// 批量更新页面中所有链接的状态
export function updateAllLinksStatus(state: ScriptState): void {
  // 只查找还没有 visited-link 类的链接，避免重复处理，提高性能。
  // 调用它时访问记录只增不减（点击、同步合并），已经染色的链接不会因此变成不该染；href 变了的由 observer 重新判断
  document.querySelectorAll('a[href]:not(.visited-link)').forEach((link) => {
    updateLinkStatus(link, state)
  })
}

// ================== 脚本清理 ==================

// 移除脚本效果
export function removeScript(state: ScriptState): void {
  // 移除样式
  removeCustomStyles()

  // 移除链接上的类名
  document.querySelectorAll('a.visited-link').forEach((link) => {
    link.classList.remove('visited-link')
  })

  // 移除快捷键监听器
  if (state.batchKeyHandler) {
    document.removeEventListener('keydown', state.batchKeyHandler)
    state.batchKeyHandler = null
  }

  // 清空链接处理上下文，但保留全局 DOM 观察器继续监听 SPA URL 变化
  clearLinkContext()

  // 移除全局链接点击 / 中键点击事件监听器
  if (state.linkClickHandler) {
    document.removeEventListener('click', state.linkClickHandler, true)
    document.removeEventListener('auxclick', state.linkClickHandler, true)
    state.linkClickHandler = null
  }
}

// ================== 核心链接功能 ==================

// 激活链接功能 - 状态更新、DOM监听、事件处理
export function activateLinkFeatures(
  state: ScriptState,
  setupDOMObserver: (state: ScriptState) => MutationObserver,
  setupLinkEventListeners: (state: ScriptState) => ((event: Event) => void),
): void {
  if (state.generalSettings.debug) logStorageInfo(loadLinks()) // 显示存储信息，要把全部记录读一遍，只在调试模式下做
  updateAllLinksStatus(state) // 更新链接状态

  // 设置全局 DOM 观察器（仅首次创建）
  setupDOMObserver(state)

  // 设置点击事件监听器并保存引用，便于后续清理
  state.linkClickHandler = setupLinkEventListeners(state)
}
