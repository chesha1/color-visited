// ================== 页面检测模块 ==================

import { PRESET_RULES } from '@/core/config';
import type { ScriptState } from '@/types';
import { getActivePresets } from '@/core/state';
import { registerUrlChangeCallback, ensureDOMObserver } from '@/core/domObserver';

// 新增: 缓存当前页面预设，避免在每个链接判断时重复遍历
let cachedCurrentPreset: string | null = null;
let cachedUrl: string | null = null;

// 获取启用的预设列表
export function getEnabledPresets(state: ScriptState): string[] {
  const allPresets = getActivePresets(state);
  return allPresets.filter(preset => state.presetSettings[preset] !== false);
}

// 判断当前页面是否符合运行条件
// 虽然已经用 @include 正则限定了运行范围了，但是有的网站用了 SPA
// 在首页点击某个帖子链接时，页面并没有真正刷新，而是通过 js 动态地更新了页面内容，同时修改了浏览器的地址栏
// 所以这里还要进一步检查一下
// 目前只有 linux.do 这个网站是这么做的
export function isPageActive(state: ScriptState): boolean {
  const currentUrl = window.location.href;
  const enabledPresets = getEnabledPresets(state);
  return enabledPresets.some((preset: string) => {
    const presetRule = PRESET_RULES[preset];
    return presetRule?.pages.some((pattern) => pattern.test(currentUrl)) ?? false;
  });
}

// 获取当前页面对应的预设名称
export function getCurrentPagePreset(state: ScriptState): string | null {
  const currentUrl = window.location.href;

  // 若 URL 未变且已有缓存，直接返回
  if (currentUrl === cachedUrl && cachedCurrentPreset !== null) {
    return cachedCurrentPreset;
  }

  // 重新计算并缓存结果
  const enabledPresets = getEnabledPresets(state);
  for (const preset of enabledPresets) {
    const presetRule = PRESET_RULES[preset];
    if (presetRule?.pages.some((pattern) => pattern.test(currentUrl))) {
      cachedUrl = currentUrl;
      cachedCurrentPreset = preset;
      return preset;
    }
  }

  // 未匹配到预设时也要更新缓存，避免重复计算
  cachedUrl = currentUrl;
  cachedCurrentPreset = null;
  return null;
}

// 检查链接是否应该被染色（只检查当前页面对应预设的patterns）
export function shouldColorLink(url: string, state: ScriptState): boolean {
  const currentPreset = getCurrentPagePreset(state);
  if (!currentPreset) return false;

  const presetRule = PRESET_RULES[currentPreset];
  return presetRule?.patterns.some((pattern) => pattern.test(url)) ?? false;
}

// 检测 URL 变化 - 复用全局 MutationObserver
export function onUrlChange(callback: () => void): void {
  registerUrlChangeCallback(() => {
    // URL 已变化，重置缓存
    cachedCurrentPreset = null;
    cachedUrl = null;

    callback();
  });

  // 确保全局 Observer 已创建
  ensureDOMObserver();
}