(function () {
  'use strict';

  const domain = window.location.hostname;
  const currentUrl = window.location.href;
  const scriptKey = `scriptEnabled_${domain}`;
  let isEnabled = GM_getValue(scriptKey, true);
  let allPatterns = [];

  updateMenu();

  // 生成预设
  if (config.presets === 'all') {
    config.presets = Object.keys(PRESET_RULES);
  }
  initAllPatterns();

  window.onload = () => {
    if (config.debug) console.log('color-visited script loaded');
    injectCustomStyles();
    if (isEnabled) {
      initScript();
    }
  };

  // 获取所有应用的URL匹配规则
  function initAllPatterns() {
    config.presets.forEach((preset) => {
      if (PRESET_RULES[preset]) {
        allPatterns = allPatterns.concat(PRESET_RULES[preset].patterns);
      }
    });
  }

  function shouldColorLink(url) {
    return allPatterns.some(pattern => pattern.test(url));
  }

  function updateMenu() {
    GM_unregisterMenuCommand('toggleScriptMenuCommand');
    GM_unregisterMenuCommand('clearLinksMenuCommand');

    const toggleText = isEnabled ? '禁用链接染色脚本' : '启用链接染色脚本';
    GM_registerMenuCommand(toggleText, toggleScript);
    GM_registerMenuCommand('清除所有记住的链接', clearLinks);
  }

  function toggleScript() {
    isEnabled = !isEnabled;
    GM_setValue(scriptKey, isEnabled);
    updateMenu();
    if (isEnabled) {
      initScript();
    }
    else {
      removeScript();
    }
  }

  function clearLinks() {
    GM_setValue('visitedLinks', {});
    removeScript();
  }

  // 在文档中注入一段自定义的 CSS 样式，针对这个类名的元素及其所有子元素，设置颜色样式，使用更高的选择器优先级和 !important
  // 直接使用 link.style.color 会被后续的样式覆盖，所以这么做
  function injectCustomStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
            a.visited-link,
            a.visited-link *,
            a.visited-link *::before,
            a.visited-link *::after {
                color: ${config.color} !important;
            }
        `;
    document.head.appendChild(style);
  }

  function deleteExpiredLinks() {
    const visitedLinks = GM_getValue('visitedLinks', {});
    const now = new Date().getTime();
    Object.keys(visitedLinks).forEach((url) => {
      if (now - visitedLinks[url] > config.expirationTime) {
        delete visitedLinks[url];
      }
    });
    GM_setValue('visitedLinks', visitedLinks);
  }

  function initScript() {
    deleteExpiredLinks(); // 删除过期的链接

    const visitedLinks = GM_getValue('visitedLinks', {});

    function updateLinkStatus(link) {
      const inputUrl = getBaseUrl(link.href);
      if (!shouldColorLink(inputUrl)) return;

      // 添加 visited-link 类名
      if (Object.hasOwn(visitedLinks, inputUrl)) {
        link.classList.add('visited-link');
        if (config.debug) console.log(`${inputUrl} class added`);
      }
    }

    document.querySelectorAll('a[href]').forEach(updateLinkStatus);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            node.querySelectorAll('a[href]').forEach(updateLinkStatus);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // 添加事件委托的点击事件监听器
    function handleLinkClick(event) {
      // 使用 event.target.closest 来获取被点击的链接元素
      const link = event.target.closest('a[href]');
      if (!link) return; // 如果点击的不是链接，直接返回

      const inputUrl = getBaseUrl(link.href);
      if (!shouldColorLink(inputUrl)) return; // 如果链接不符合匹配规则，返回

      if (!Object.hasOwn(visitedLinks, inputUrl)) {
        // 如果是第一次点击该链接，记录到 visitedLinks 并更新存储
        visitedLinks[inputUrl] = new Date().getTime();
        GM_setValue('visitedLinks', visitedLinks);
        link.classList.add('visited-link');
        if (config.debug) console.log(`${inputUrl} class added`);
      }
    }
    document.addEventListener('click', handleLinkClick, true);
    document.addEventListener('auxclick', handleLinkClick, true);
  }

  function removeScript() {
    document.querySelectorAll('a[href]').forEach((link) => {
      link.classList.remove('visited-link');
    });
  }

  // 去除各种查询参数等的干扰
  function getBaseUrl(url) {
    const domain = new URL(url).hostname;
    if (domain === 'www.v2ex.com') return url.split('?')[0].split('#')[0];
    if (domain === 'linux.do') return url.replace(/(\/\d+)\/\d+$/, '$1');
    if (domain === 'www.bilibili.com') return url.split('?')[0];
    if (domain === 'tieba.baidu.com') return url.split('?')[0];
    if (domain === 'www.douban.com') return url.split('?')[0];
    if (domain === 'ngabbs.com') return url.split('&')[0];
    if (domain === 'bbs.nga.cn') return url.split('&')[0];
    if (domain === 'nga.178.com') return url.split('&')[0];
    return url;
  }
})();
