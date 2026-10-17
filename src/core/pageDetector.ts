// ================== 页面检测模块 ==================

import { findActiveSite, type Site } from '@/shared/sites'
import type { ScriptState } from '@/types'
import { registerUrlChangeCallback, ensureDOMObserver } from '@/core/domObserver'

// 缓存当前页面的站点，避免在每个链接判断时重复遍历
let cachedSite: Site | undefined
let cachedUrl: string | null = null

// 判断当前页面是否符合运行条件。
// 注入范围可能比激活范围大：SPA 站点整站注入（站点表的 match），站内跳转时页面并没有真正刷新，
// 而是通过 js 动态地更新了页面内容，同时修改了浏览器的地址栏，所以要按 pages 再判断一次，URL 一变就重新判断
export function isPageActive(state: ScriptState): boolean {
  return findActiveSite(window.location.href, state.presetSettings) !== undefined
}

// 获取当前页面对应的站点
function getCurrentSite(state: ScriptState): Site | undefined {
  const currentUrl = window.location.href

  // 若 URL 未变且已有缓存，直接返回
  if (currentUrl === cachedUrl && cachedSite) return cachedSite

  cachedUrl = currentUrl
  cachedSite = findActiveSite(currentUrl, state.presetSettings)
  if (state.generalSettings.debug) {
    console.log(`[getCurrentSite] 当前页面URL: ${currentUrl}，匹配到的站点: ${cachedSite?.id ?? '无'}`)
  }
  return cachedSite
}

// 检查链接是否应该被染色（只检查当前页面所属站点的 links）
export function shouldColorLink(url: string, state: ScriptState): boolean {
  const site = getCurrentSite(state)

  if (state.generalSettings.debug) {
    console.log(`[shouldColorLink] 当前站点: ${site?.id ?? '无'}`)
  }

  if (!site) return false

  const matchedPattern = site.links.find((pattern) => pattern.test(url))
  const result = matchedPattern !== undefined

  if (state.generalSettings.debug) {
    console.log(`[shouldColorLink] 检查URL: ${url}`)
    console.log(`[shouldColorLink] 可用规则: ${site.links.map((p) => p.source).join(', ')}`)
    console.log(`[shouldColorLink] 匹配结果: ${result}${matchedPattern ? `, 匹配模式: ${matchedPattern.source}` : ''}`)
  }

  return result
}

// 检测 URL 变化 - 复用全局 MutationObserver
export function onUrlChange(callback: () => void): void {
  registerUrlChangeCallback(() => {
    // URL 已变化，重置缓存
    cachedSite = undefined
    cachedUrl = null

    callback()
  })

  // 确保全局 Observer 已创建
  ensureDOMObserver()
}
