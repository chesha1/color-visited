(function () {
  'use strict';

  console.log('Color Visited Script has started!');

  // ================== 全局变量和初始化配置 ==================
  const domain = window.location.hostname;
  const scriptKey = `scriptEnabled_${domain}`;
  let isEnabled = GM_getValue(scriptKey, true);
  let allPatterns = [];

  // ================== 主流程控制 ==================

  // 脚本启动和全局初始化 - 负责整个脚本的启动配置、菜单设置、URL监听
  function startScript() {
    updateMenu();

    // 生成预设
    if (config.presets === 'all') {
      config.presets = Object.keys(PRESET_RULES);
    }
    loadUrlPatterns();

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
    }
    else {
      if (config.debug) console.log('Script is not active on this page:', window.location.href);
    }
  }

  // ================== URL和页面检测模块 ==================

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
      let processedUrl = url;
      // 1. 首先移除末尾的 #a
      processedUrl = processedUrl.replace(/#a$/, '');
      // 2. 移除 -fpage-\d+
      processedUrl = processedUrl.replace(/-fpage-\d+/, '');
      // 3. 移除 -page- 后跟数字 (\d+) 或字母 'e' 或 'a' 的部分
      processedUrl = processedUrl.replace(/-page-(\d+|[ea])(\.html)?$/, '$2');
      return processedUrl;
    }

    return url;
  }

  // ================== 模式匹配和规则管理 ==================

  // 加载URL匹配模式 - 根据预设规则构建匹配模式数组
  function loadUrlPatterns() {
    config.presets.forEach((preset) => {
      if (PRESET_RULES[preset]) {
        allPatterns = allPatterns.concat(PRESET_RULES[preset].patterns);
      }
    });
  }

  function shouldColorLink(url) {
    return allPatterns.some(pattern => pattern.test(url));
  }

  // ================== 菜单管理模块 ==================

  function updateMenu() {
    GM_unregisterMenuCommand('toggleScriptMenuCommand');
    GM_unregisterMenuCommand('clearLinksMenuCommand');
    GM_unregisterMenuCommand('batchAddLinksMenuCommand');

    const toggleText = isEnabled ? '禁用链接染色脚本' : '启用链接染色脚本';
    GM_registerMenuCommand(toggleText, toggleScript);
    GM_registerMenuCommand('清除所有记住的链接', clearLinks);
    GM_registerMenuCommand('批量记录当前页面链接', batchAddLinks);
  }

  function toggleScript() {
    isEnabled = !isEnabled;
    GM_setValue(scriptKey, isEnabled);
    updateMenu();
    setupPage();
  }

  // ================== 样式管理模块 ==================

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

  // ================== 链接管理模块 ==================

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

  function clearLinks() {
    GM_setValue('visitedLinks', {});
    removeScript();
  }

  // 批量记录当前页面上的所有符合规则的链接
  function batchAddLinks() {
    const visitedLinks = GM_getValue('visitedLinks', {});
    const now = new Date().getTime();
    let addedCount = 0;

    // 查找所有链接
    document.querySelectorAll('a[href]').forEach((link) => {
      const inputUrl = getBaseUrl(link.href);

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
      alert(`已批量添加 ${addedCount} 个链接到已访问记录`);
    }
    else {
      alert('没有找到新的符合规则的链接可添加');
    }
  }

  // 计算存储信息的大小并显示到控制台
  function logStorageInfo(visitedLinks) {
    const serializedData = JSON.stringify(visitedLinks);
    const sizeInBytes = new TextEncoder().encode(serializedData).length;
    const sizeInKB = (sizeInBytes / 1024).toFixed(2);
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);

    let sizeText;
    if (sizeInBytes < 1024) {
      sizeText = `${sizeInBytes} bytes`;
    }
    else if (sizeInBytes < 1024 * 1024) {
      sizeText = `${sizeInKB} KB`;
    }
    else {
      sizeText = `${sizeInMB} MB`;
    }

    const itemCount = Object.keys(visitedLinks).length;
    console.log(`visitedLinks storage size: ${itemCount} items, ${sizeText}`);
  }

  // 更新单个链接的状态
  function updateLinkStatus(link, visitedLinks) {
    const inputUrl = getBaseUrl(link.href);
    if (!shouldColorLink(inputUrl)) return;

    // 添加 visited-link 类名
    if (Object.hasOwn(visitedLinks, inputUrl)) {
      link.classList.add('visited-link');
      if (config.debug) console.log(`${inputUrl} class added`);
    }
  }

  // 批量更新页面中所有链接的状态
  function updateAllLinksStatus(visitedLinks) {
    document.querySelectorAll('a[href]').forEach((link) => {
      updateLinkStatus(link, visitedLinks);
    });
  }

  // ================== DOM监听器和事件处理模块 ==================

  // 设置DOM变化监听器
  function setupDOMObserver(visitedLinks) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            node.querySelectorAll('a[href]').forEach((link) => {
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
  function createLinkClickHandler(visitedLinks) {
    return function handleLinkClick(event) {
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
    };
  }

  // 设置链接点击事件监听器
  function setupLinkEventListeners(visitedLinks) {
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

    const visitedLinks = GM_getValue('visitedLinks', {});

    logStorageInfo(visitedLinks); // 显示存储信息
    updateAllLinksStatus(visitedLinks); // 更新链接状态
    setupDOMObserver(visitedLinks); // 设置DOM监听
    setupLinkEventListeners(visitedLinks); // 设置事件监听
  }

  // ================== 启动脚本 ==================

  // 执行脚本启动流程
  startScript();
})();
