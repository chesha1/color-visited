// 当前页面按哪个站点的规则染色。URL 或设置一变，就把上一次的激活整个释放，再按当前的 URL 和设置重新激活

import { activate } from '@/core/colorizer'
import { log } from '@/core/log'
import { getSettings, onSettingsChange } from '@/core/settings'
import { findActiveSite } from '@/shared/sites'

export function startPage(): void {
  let dispose: (() => void) | null = null
  const refresh = () => {
    dispose?.()
    dispose = null
    try {
      const settings = getSettings()
      const site = findActiveSite(location.href, settings.preset)
      if (site) dispose = activate(site, settings)
      else log.debug(`${location.href} 不属于任何启用了的站点，不染色`)
    } catch (error) {
      // 要接住：不能让 URL 检测和设置订阅跟着失效
      console.error('[color-visited] 激活页面失败', error)
    }
  }
  // URL 检测比激活先建，同一批 DOM 变化先交给它：URL 变了的话，旧的激活还没处理这批变化就释放掉了
  watchUrl(refresh)
  onSettingsChange(refresh)
  refresh()
}

// SPA 的站内跳转不是整页加载，只能在 DOM 变化时比较 location.href 来发现（隔离环境里 hook 不到页面的 history.pushState）。
// 在非激活页上也要一直运行，否则从非激活页站内跳到激活页时发现不了。
// 和链接的 observer 看同样的变化：换页时页面可能只改了已有链接的 href，没有增删节点
function watchUrl(onChange: () => void): void {
  let href = location.href
  new MutationObserver(() => {
    if (location.href === href) return
    href = location.href
    onChange()
  }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] })
}
