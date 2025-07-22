// ================== 导入配置 ==================
import { config, PRESET_RULES } from '@/core/config';
import {
  getSyncSettings,
  saveSyncSettings,
  defaultSyncSettings,
  syncOnStartup
} from '@/core/sync';
import {
  showNotification,
  injectCustomStyles,
  removeCustomStyles,
  showSettingsDialog
} from '@/core/ui';
import type { BatchKeySettings, GeneralSettings, VisitedLinks } from '@/types';
import {
  isMac,
  defaultBatchKeySettings,
  getBaseUrl,
  logStorageInfo,
  getCurrentDomain,
  getScriptKey
} from '@/core/utils';
import {
  GM_getValue,
  GM_setValue,
  GM_registerMenuCommand,
  GM_unregisterMenuCommand
} from 'vite-plugin-monkey/dist/client';

export function startColorVisitedScript() {
  'use strict';

  console.log('Color Visited Script has started!');

  // ================== 全局变量和初始化配置 ==================
  const domain = getCurrentDomain();
  const scriptKey = getScriptKey(domain);
  let isEnabled = GM_getValue(scriptKey, true);
  let allPatterns: RegExp[] = [];

  // 从存储中读取快捷键设置，如果没有则使用默认设置
  let batchKeySettings: BatchKeySettings = GM_getValue('batch_shortcut_settings', defaultBatchKeySettings);

  // 从存储中读取预设状态，如果没有则默认全部启用
  let presetStates: Record<string, boolean> = (() => {
    const defaultStates: Record<string, boolean> = {};
    Object.keys(PRESET_RULES).forEach(siteName => {
      defaultStates[siteName] = true;
    });
    return GM_getValue('preset_states', defaultStates);
  })();

  // 从配置中获取常规设置
  const getGeneralSettings = (): GeneralSettings => ({
    color: GM_getValue('color_setting', config.color),
    expirationTime: GM_getValue('expiration_time_setting', config.expirationTime),
    debug: GM_getValue('debug_setting', config.debug)
  });

  // 默认常规设置
  const defaultGeneralSettings: GeneralSettings = {
    color: config.color,
    expirationTime: config.expirationTime,
    debug: config.debug
  };

  let currentGeneralSettings = getGeneralSettings();

  // 批量记录快捷键处理器
  let batchKeyHandler: ((event: KeyboardEvent) => void) | null = null;

  // ================== 同步配置 ==================
  let syncSettings = getSyncSettings();

  // ================== 主流程控制 ==================

  // 脚本启动和全局初始化 - 负责整个脚本的启动配置、菜单设置、URL监听
  function startScript() {
    // 从存储中恢复常规设置到config对象
    (config as any).color = currentGeneralSettings.color;
    (config as any).expirationTime = currentGeneralSettings.expirationTime;
    (config as any).debug = currentGeneralSettings.debug;

    updateMenu();

    // 如果启用同步，在后台进行启动同步（不阻塞主流程）
    if (syncSettings.enabled) {
      syncOnStartup().catch((error) => {
        console.warn('后台同步失败:', error.message);
        showNotification(`同步失败: ${error.message}`);
      });
    }

    // 生成预设
    if (config.presets === 'all') {
      (config as any).presets = Object.keys(PRESET_RULES);
    }
    loadUrlPatterns();

    // 监听预设状态更新事件
    window.addEventListener('preset-states-updated', (event: any) => {
      const { presetStates: newPresetStates } = event.detail;
      presetStates = newPresetStates;
      GM_setValue('preset_states', presetStates);

      // 重新加载 URL 模式
      allPatterns = [];
      loadUrlPatterns();

      // 重新设置页面以应用新的预设配置
      setupPage();
    });

    // 初始运行
    setupPage();

    // 监听 URL 变化
    onUrlChange(() => {
      setupPage();
    });
  }

  // 页面级别的设置和初始化 - 每个页面的条件检查、样式注入、功能激活
  function setupPage() {
    if (config.debug) console.log('color-visited script initialized on', window.location.href);

    removeScript(); // 清除之前的脚本效果

    if (isEnabled && isPageActive()) {
      injectCustomStyles();
      activateLinkFeatures();
      setupBatchKeyListener(); // 设置批量记录快捷键监听
    }
    else {
      if (config.debug) console.log('Script is not active on this page:', window.location.href);
    }
  }

  // ================== URL和页面检测模块 ==================

  // 获取启用的预设列表
  function getEnabledPresets(): string[] {
    const allPresets = config.presets === 'all' ? Object.keys(PRESET_RULES) : config.presets;
    return allPresets.filter(preset => presetStates[preset] !== false);
  }

  // 判断当前页面是否符合运行条件
  // 虽然已经用 @include 正则限定了运行范围了，但是有的网站用了 SPA
  // 在首页点击某个帖子链接时，页面并没有真正刷新，而是通过 js 动态地更新了页面内容，同时修改了浏览器的地址栏
  // 所以这里还要进一步检查一下
  // 目前只有 linux.do 这个网站是这么做的
  function isPageActive() {
    const currentUrl = window.location.href;
    const enabledPresets = getEnabledPresets();
    return enabledPresets.some((preset: string) => {
      const pages = (PRESET_RULES as any)[preset]?.pages || [];
      return pages.some((pattern: RegExp) => pattern.test(currentUrl));
    });
  }

  // 检测 URL 变化的函数
  function onUrlChange(callback: () => void) {
    let oldHref = location.href;
    const body = document.querySelector('body');
    const observer = new MutationObserver(() => {
      if (oldHref !== location.href) {
        oldHref = location.href;
        if (config.debug) console.log('URL changed:', oldHref, '->', location.href);
        callback();
      }
    });
    observer.observe(body!, { childList: true, subtree: true });
  }


  // ================== 模式匹配和规则管理 ==================

  // 加载URL匹配模式 - 根据预设规则构建匹配模式数组
  function loadUrlPatterns() {
    const enabledPresets = getEnabledPresets();
    enabledPresets.forEach((preset: string) => {
      if ((PRESET_RULES as any)[preset]) {
        allPatterns = allPatterns.concat((PRESET_RULES as any)[preset].patterns);
      }
    });
  }

  function shouldColorLink(url: string) {
    return allPatterns.some(pattern => pattern.test(url));
  }

  // ================== 菜单管理模块 ==================

  function updateMenu() {
    GM_unregisterMenuCommand('toggleScriptMenuCommand');
    GM_unregisterMenuCommand('clearLinksMenuCommand');
    GM_unregisterMenuCommand('batchAddLinksMenuCommand');
    GM_unregisterMenuCommand('setBatchKeyMenuCommand');

    const toggleText = isEnabled ? '禁用链接染色脚本' : '启用链接染色脚本';
    GM_registerMenuCommand(toggleText, toggleScript);
    GM_registerMenuCommand('清除所有记住的链接', clearLinks);
    GM_registerMenuCommand('批量记录当前页面链接', batchAddLinks);
    GM_registerMenuCommand('设置', () => {
      showSettingsDialog(
        batchKeySettings,
        defaultBatchKeySettings,
        currentGeneralSettings,
        defaultGeneralSettings,
        presetStates,
        syncSettings,
        isMac,
        (newSettings) => {
          batchKeySettings = newSettings;
          GM_setValue('batch_shortcut_settings', batchKeySettings);
        },
        () => {
          batchKeySettings = Object.assign({}, defaultBatchKeySettings);
          GM_setValue('batch_shortcut_settings', defaultBatchKeySettings);
        },
        (newGeneralSettings) => {
          currentGeneralSettings = newGeneralSettings;
          GM_setValue('color_setting', newGeneralSettings.color);
          GM_setValue('expiration_time_setting', newGeneralSettings.expirationTime);
          GM_setValue('debug_setting', newGeneralSettings.debug);
          // 更新config对象以便立即生效
          (config as any).color = newGeneralSettings.color;
          (config as any).expirationTime = newGeneralSettings.expirationTime;
          (config as any).debug = newGeneralSettings.debug;
          // 重新设置页面以应用新设置
          setupPage();
        },
        () => {
          currentGeneralSettings = { ...defaultGeneralSettings };
          GM_setValue('color_setting', defaultGeneralSettings.color);
          GM_setValue('expiration_time_setting', defaultGeneralSettings.expirationTime);
          GM_setValue('debug_setting', defaultGeneralSettings.debug);
          // 更新config对象以便立即生效
          (config as any).color = defaultGeneralSettings.color;
          (config as any).expirationTime = defaultGeneralSettings.expirationTime;
          (config as any).debug = defaultGeneralSettings.debug;
          // 重新设置页面以应用新设置
          setupPage();
        },
        (newPresetStates) => {
          presetStates = newPresetStates;
          GM_setValue('preset_states', presetStates);
          // 重新设置页面以应用新设置
          setupPage();
        },
        () => {
          // 重置预设状态为默认值（全部启用）
          const defaultStates: Record<string, boolean> = {};
          Object.keys(PRESET_RULES).forEach(key => {
            defaultStates[key] = true;
          });
          presetStates = defaultStates;
          GM_setValue('preset_states', presetStates);
          // 重新设置页面以应用新设置
          setupPage();
        },
        (newSyncSettings) => {
          // 保存同步设置
          syncSettings = newSyncSettings;
          saveSyncSettings(syncSettings);
          updateMenu();
        },
        () => {
          // 重置同步设置为默认值
          syncSettings = { ...defaultSyncSettings };
          saveSyncSettings(syncSettings);
          updateMenu();
        }
      );
    });
  }

  function toggleScript() {
    isEnabled = !isEnabled;
    GM_setValue(scriptKey, isEnabled);
    updateMenu();
    setupPage();
  }

  // ================== 样式管理模块 ==================

  function removeScript() {
    // 移除样式
    removeCustomStyles();

    // 移除链接上的类名
    document.querySelectorAll('a.visited-link').forEach((link) => {
      link.classList.remove('visited-link');
    });

    // 移除快捷键监听器
    if (batchKeyHandler) {
      document.removeEventListener('keydown', batchKeyHandler);
      batchKeyHandler = null;
    }
  }

  // ================== 链接管理模块 ==================

  function deleteExpiredLinks() {
    const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
    const now = new Date().getTime();
    Object.keys(visitedLinks).forEach((url) => {
      if (now - visitedLinks[url] > config.expirationTime) {
        delete visitedLinks[url];
      }
    });
    GM_setValue('visitedLinks', visitedLinks);
  }

  function clearLinks() {
    GM_setValue('visitedLinks', {});
    removeScript();
  }

  // 批量记录当前页面上的所有符合规则的链接
  function batchAddLinks() {
    const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});
    const now = new Date().getTime();
    let addedCount = 0;

    // 查找所有链接
    document.querySelectorAll('a[href]').forEach((link) => {
      const inputUrl = getBaseUrl((link as HTMLAnchorElement).href);

      // 检查链接是否符合规则且尚未被标记为已访问
      if (shouldColorLink(inputUrl) && !Object.hasOwn(visitedLinks, inputUrl)) {
        visitedLinks[inputUrl] = now;
        link.classList.add('visited-link');
        addedCount++;
      }
    });

    // 保存更新后的访问链接记录
    if (addedCount > 0) {
      GM_setValue('visitedLinks', visitedLinks);
      showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
    }
    else {
      showNotification('没有找到新的符合规则的链接可添加');
    }
  }



  // 设置批量记录快捷键监听器
  function setupBatchKeyListener() {
    // 移除之前的监听器
    if (batchKeyHandler) {
      document.removeEventListener('keydown', batchKeyHandler);
    }

    // 创建新的监听器
    batchKeyHandler = function (event: KeyboardEvent) {
      // 检测是否按下设置的快捷键组合
      if (
        event.ctrlKey === batchKeySettings.ctrlKey
        && event.shiftKey === batchKeySettings.shiftKey
        && event.altKey === batchKeySettings.altKey
        && event.metaKey === batchKeySettings.metaKey
        && event.key.toUpperCase() === batchKeySettings.key
      ) {
        // 阻止浏览器默认行为
        event.preventDefault();

        // 执行批量记录功能
        batchAddLinks();
      }
    };

    // 添加新的监听器
    document.addEventListener('keydown', batchKeyHandler);
  }


  // 更新单个链接的状态
  function updateLinkStatus(link: Element, visitedLinks: VisitedLinks) {
    const inputUrl = getBaseUrl((link as HTMLAnchorElement).href);
    if (!shouldColorLink(inputUrl)) return;

    // 添加 visited-link 类名
    if (Object.hasOwn(visitedLinks, inputUrl)) {
      link.classList.add('visited-link');
      if (config.debug) console.log(`${inputUrl} class added`);
    }
  }

  // 批量更新页面中所有链接的状态
  function updateAllLinksStatus(visitedLinks: VisitedLinks) {
    document.querySelectorAll('a[href]').forEach((link) => {
      updateLinkStatus(link, visitedLinks);
    });
  }

  // ================== DOM监听器和事件处理模块 ==================

  // 设置DOM变化监听器
  function setupDOMObserver(visitedLinks: VisitedLinks) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            (node as Element).querySelectorAll('a[href]').forEach((link) => {
              updateLinkStatus(link, visitedLinks);
            });
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return observer;
  }

  // 处理链接点击事件
  function createLinkClickHandler(visitedLinks: VisitedLinks) {
    return function handleLinkClick(event: Event) {
      // 使用 event.target.closest 来获取被点击的链接元素
      const link = (event.target as Element).closest('a[href]') as HTMLAnchorElement;
      if (!link) return; // 如果点击的不是链接，直接返回

      const inputUrl = getBaseUrl(link.href);
      if (!shouldColorLink(inputUrl)) return; // 如果链接不符合匹配规则，返回

      if (!Object.hasOwn(visitedLinks, inputUrl)) {
        // 如果是第一次点击该链接，记录到 visitedLinks 并更新存储
        visitedLinks[inputUrl] = new Date().getTime();
        GM_setValue('visitedLinks', visitedLinks);
        if (config.debug) console.log(`${inputUrl} saved`);
        link.classList.add('visited-link');
        if (config.debug) console.log(`${inputUrl} class added`);
      }
    };
  }

  // 设置链接点击事件监听器
  function setupLinkEventListeners(visitedLinks: VisitedLinks) {
    const handleLinkClick = createLinkClickHandler(visitedLinks);

    // 添加事件委托的点击事件监听器
    document.addEventListener('click', handleLinkClick, true);
    document.addEventListener('auxclick', handleLinkClick, true);

    return handleLinkClick;
  }

  // ================== 脚本核心逻辑模块 ==================

  // 激活链接功能 - 启动存储管理、状态更新、DOM监听、事件处理
  function activateLinkFeatures() {
    deleteExpiredLinks(); // 删除过期的链接

    const visitedLinks: VisitedLinks = GM_getValue('visitedLinks', {});

    logStorageInfo(visitedLinks); // 显示存储信息
    updateAllLinksStatus(visitedLinks); // 更新链接状态
    setupDOMObserver(visitedLinks); // 设置DOM监听
    setupLinkEventListeners(visitedLinks); // 设置事件监听
  }



  // ================== 启动脚本 ==================

  // 执行脚本启动流程
  startScript();
}

