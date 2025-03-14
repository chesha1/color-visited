(function () {
  'use strict';

  const domain = window.location.hostname;
  const scriptKey = `scriptEnabled_${domain}`;
  let isEnabled = GM_getValue(scriptKey, true);
  let allPatterns = [];

  updateMenu();

  // 生成预设
  if (config.presets === 'all') {
    config.presets = Object.keys(PRESET_RULES);
  }
  initAllPatterns();

  // 初始运行
  init();

  // 监听 URL 变化
  onUrlChange(() => {
    init();
  });

  // 定义 init() 函数
  function init() {
    if (config.debug) console.log('color-visited script initialized on', window.location.href);

    removeScript(); // 清除之前的脚本效果

    if (isEnabled && isPageActive()) {
      injectCustomStyles();
      initScript();
    }
    else {
      if (config.debug) console.log('Script is not active on this page:', window.location.href);
    }
  }

  // 判断当前页面是否符合运行条件
  // 虽然已经用 @include 正则限定了运行范围了，但是有的网站用了 SPA
  // 在首页点击某个帖子链接时，页面并没有真正刷新，而是通过 js 动态地更新了页面内容，同时修改了浏览器的地址栏
  // 所以这里还要进一步检查一下
  // 目前只有 linux.do 这个网站是这么做的
  function isPageActive() {
    const currentUrl = window.location.href;
    return config.presets.some((preset) => {
      const pages = PRESET_RULES[preset]?.pages || [];
      return pages.some(pattern => pattern.test(currentUrl));
    });
  }

  // 检测 URL 变化的函数
  function onUrlChange(callback) {
    let oldHref = location.href;
    const body = document.querySelector('body');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (oldHref !== location.href) {
          oldHref = location.href;
          if (config.debug) console.log('URL changed:', oldHref, '->', location.href);
          callback();
        }
      });
    });
    observer.observe(body, { childList: true, subtree: true });
  }

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
    init();
  }

  function clearLinks() {
    GM_setValue('visitedLinks', {});
    removeScript();
  }

  // 在文档中注入一段自定义的 CSS 样式，针对这个类名的元素及其所有子元素，设置颜色样式，使用更高的选择器优先级和 !important
  // 直接使用 link.style.color 会被后续的样式覆盖，所以这么做
  function injectCustomStyles() {
    if (document.querySelector('#color-visited-style')) return;

    const style = document.createElement('style');
    style.id = 'color-visited-style';
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
        if (config.debug) console.log(`${inputUrl} saved`);
        link.classList.add('visited-link');
        if (config.debug) console.log(`${inputUrl} class added`);
      }
    }

    document.addEventListener('click', handleLinkClick, true);
    document.addEventListener('auxclick', handleLinkClick, true);
  }

  function removeScript() {
    // 移除样式
    const styleElement = document.querySelector('#color-visited-style');
    if (styleElement) {
      styleElement.remove();
    }

    // 移除链接上的类名
    document.querySelectorAll('a.visited-link').forEach((link) => {
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

    // 使用正则表达式匹配所有 south-plus 域名
    if (/^www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net$/.test(domain)) {
      return url.replace(/-fpage-\d+/, '');
    }

    return url;
  }
})();
