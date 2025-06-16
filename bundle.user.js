// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      1.17.0
// @description  把访问过的链接染色成灰色
// @author       chesha1
// @license      GPL-3.0-only
// @include      /https:\/\/36kr\.com\/$/
// @include      /https:\/\/36kr\.com\/motif\/\d+$/
// @include      /https:\/\/36kr\.com\/newsflashes\/$/
// @include      /https:\/\/36kr\.com\/information\/.*/
// @include      /https:\/\/36kr\.com\/topics\/\d+$/
// @include      /https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/
// @include      /https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/
// @include      /https:\/\/space\.bilibili\.com\/\d+\/video/
// @include      /https:\/\/space\.bilibili\.com\/\d+\/upload.*/
// @include      /https:\/\/www\.bilibili\.com\/video\/BV.*/
// @include      /https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/
// @include      /https:\/\/www\.chiphell\.com\/forum-.*/
// @include      /https:\/\/www\.douban\.com\/group\/.*/
// @include      /https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/
// @include      /https:\/\/e-hentai\.org\/?$/
// @include      /https:\/\/exhentai\.org\/?$/
// @include      /https:\/\/e-hentai\.org\/toplist\.php\?tl=\d+/
// @include      /https:\/\/exhentai\.org\/toplist\.php\?tl=\d+/
// @include      /https:\/\/e-hentai\.org\/\?f_search=.*/
// @include      /https:\/\/exhentai\.org\/\?f_search=.*/
// @include      /https:\/\/e-hentai\.org\/popular/
// @include      /https:\/\/exhentai\.org\/popular/
// @include      /https:\/\/www\.hacg\.me\/wp\/$/
// @include      /https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/
// @include      /https:\/\/hostloc\.com\/forum-.*/
// @include      /https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/
// @include      /https:\/\/linux\.do\/?$/
// @include      /https:\/\/linux\.do\/(latest|new|top|hot|categories)/
// @include      /https:\/\/linux\.do\/c\/.*/
// @include      /https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/
// @include      /https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/
// @include      /https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/
// @include      /https:\/\/www\.nodeseek\.com\/?$/
// @include      /https:\/\/www\.nodeseek\.com\/categories\/.*/
// @include      /https:\/\/www\.nodeseek\.com\/page-\d+/
// @include      /https:\/\/www\.reddit\.com\/r\/[^\/]+\/?$/
// @include      /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/
// @include      /https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/
// @include      /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/
// @include      /https:\/\/www\.techflowpost\.com\/$/
// @include      /https:\/\/tieba\.baidu\.com\/f\?kw=.*/
// @include      /https:\/\/tieba\.baidu\.com\/hottopic.*/
// @include      /https:\/\/www\.v2ex\.com\/$/
// @include      /https:\/\/www\.v2ex\.com\/\?tab.*/
// @include      /https:\/\/www\.v2ex\.com\/go\/.*/
// @include      /https:\/\/www\.zhihu\.com\/$/
// @include      /https:\/\/www\.zhihu\.com\/hot$/
// @include      /https:\/\/www\.zhihu\.com\/people\/.*/
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// @noframes
// @homepageURL  https://github.com/chesha1/color-visited
// @supportURL   https://github.com/chesha1/color-visited/issues
// ==/UserScript==
// 配置参数
const config = {
  color: '#f1f5f9', // 链接颜色，默认为 slate-100
  presets: 'all', // 使用的预设规则
  debug: false, // 是否开启调试模式
  expirationTime: 1000 * 60 * 60 * 24 * 365, // 链接染色的过期时间，毫秒为单位，默认为一年
};

// 预设规则集合
const PRESET_RULES = {
  '36kr': {
    pages: [
      /https:\/\/36kr\.com\/$/, // 首页
      /https:\/\/36kr\.com\/motif\/\d+$/, // 主题页
      /https:\/\/36kr\.com\/newsflashes\/$/, // 快讯页
      /https:\/\/36kr\.com\/information\/.*/, // 资讯页
      /https:\/\/36kr\.com\/topics\/\d+$/, // 专题页
    ],
    patterns: [
      /36kr\.com\/p\/\d+$/, // 文章页
      /36kr\.com\/newsflashes\/\d+$/, // 快讯详情页
    ],
  },
  'bahamut': {
    pages: [
      /https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/, // 各个板块首页
    ],
    patterns: [
      /forum\.gamer\.com\.tw\/C\.php\?bsn=.*/, // 帖子
    ],
  },
  'bilibili': {
    pages: [
      // TODO: 动态页挂载不上，以后再研究研究
      // /https:\/\/t\.bilibili\.com.*/,
      /https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/, // 个人空间首页
      /https:\/\/space\.bilibili\.com\/\d+\/video/, // 个人空间投稿（疑似已失效）
      /https:\/\/space\.bilibili\.com\/\d+\/upload.*/, // 个人空间投稿
      /https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频详情页
      /https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/, // 稍后再看中的视频详情页
    ],
    patterns: [
      /www\.bilibili\.com\/video\/BV.*/, // 视频详情页
    ],
  },
  'chiphell': {
    pages: [
      /https:\/\/www\.chiphell\.com\/forum-.*/,
    ],
    patterns: [
      /chiphell\.com\/thread-.*/,
    ],
  },
  'douban': {
    pages: [
      /https:\/\/www\.douban\.com\/group\/.*/, // 小组首页
    ],
    patterns: [
      /douban\.com\/group\/topic\/\d+\//, // 小组帖子
    ],
  },
  'e-hentai-forums': {
    pages: [
      /https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/, // 论坛版块页面
    ],
    patterns: [
      /https:\/\/forums\.e-hentai\.org\/index\.php\?showtopic=\d+/, // 帖子页面
    ],
  },
  'ehentai': {
    pages: [
      /https:\/\/e-hentai\.org\/?$/, // 首页
      /https:\/\/exhentai\.org\/?$/, // 首页
      /https:\/\/e-hentai\.org\/toplist\.php\?tl=\d+/, // 排行榜
      /https:\/\/exhentai\.org\/toplist\.php\?tl=\d+/, // 排行榜
      /https:\/\/e-hentai\.org\/\?f_search=.*/, // 首页搜索页
      /https:\/\/exhentai\.org\/\?f_search=.*/, // 首页搜索页
      /https:\/\/e-hentai\.org\/popular/, // 热门页面
      /https:\/\/exhentai\.org\/popular/, // 热门页面
    ],
    patterns: [
      /https:\/\/e-hentai\.org\/g\/\d+\/\w+\//, // 画廊页面
      /https:\/\/exhentai\.org\/g\/\d+\/\w+\//, // 画廊页面
    ],
  },
  // TODO: 很纯粹的网站，纯静态资源，暂时无能为力，后续研究一下
  'hacg': {
    pages: [
      /https:\/\/www\.hacg\.me\/wp\/$/, // 首页
      /https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/, // 分类目录页
    ],
    patterns: [
      /hacg\.me\/wp\/\d+\.html/, // 文章页
    ],
  },
  'hostloc': {
    pages: [
      /https:\/\/hostloc\.com\/forum-.*/, // 板块首页
    ],
    patterns: [
      /hostloc\.com\/thread.*/, // 帖子
    ],
  },
  'hupu': {
    pages: [
      /https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/, // 各个板块首页
    ],
    patterns: [
      /bbs\.hupu\.com\/\d+\.html/, // 帖子
    ],
  },
  'linuxdo': {
    pages: [
      /https:\/\/linux\.do\/?$/, // 首页
      /https:\/\/linux\.do\/(latest|new|top|hot|categories)/, // 首页的几个页签
      /https:\/\/linux\.do\/c\/.*/,
    ],
    patterns: [
      /linux\.do\/t\/topic\/.*/,
    ],
  },
  'nga': {
    pages: [
      /https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/,
      /https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/,
      /https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/,
    ],
    patterns: [
      /bbs\.nga\.cn\/read\.php\?tid.*/,
      /ngabbs\.com\/read\.php\?tid.*/,
      /nga\.178\.com\/read\.php\?tid.*/,
    ],
  },
  'nodeseek': {
    pages: [
      /https:\/\/www\.nodeseek\.com\/?$/, // 首页
      /https:\/\/www\.nodeseek\.com\/categories\/.*/, // 各个板块
      /https:\/\/www\.nodeseek\.com\/page-\d+/, // 分页
    ],
    patterns: [
      /https:\/\/www\.nodeseek\.com\/post-.*/, // 帖子
    ],
  },
  'reddit': {
    pages: [
      /https:\/\/www\.reddit\.com\/r\/[^\/]+\/?$/, // 板块首页
    ],
    patterns: [
      /reddit\.com\/r\/[^\/]+\/comments\/.*/, // 帖子
    ],
  },
  'south-plus': {
    pages: [
      /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/, // 板块首页
      /https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/, // 板块首页
      /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/, // 个人主页
    ],
    patterns: [
      /(south|north|blue|white|level|snow|spring|summer)-plus\.net\/read\.php\?tid-.*/, // 帖子
      /bbs\.imoutolove\.me\/read\.php\?tid-.*/, // 帖子

    ],
  },
  'techflow': {
    pages: [
      /https:\/\/www\.techflowpost\.com\/$/, // 首页
    ],
    patterns: [
      /techflowpost\.com\/article\/.*/, // 文章页
    ],
  },
  'tieba': {
    pages: [
      /https:\/\/tieba\.baidu\.com\/f\?kw=.*/, // 某个吧首页
      /https:\/\/tieba\.baidu\.com\/hottopic.*/, // 热榜
    ],
    patterns: [
      /tieba\.baidu\.com\/p\/\d+/, // 帖子
    ],
  },
  'v2ex': {
    pages: [
      /https:\/\/www\.v2ex\.com\/$/,
      /https:\/\/www\.v2ex\.com\/\?tab.*/,
      /https:\/\/www\.v2ex\.com\/go\/.*/,
    ],
    patterns: [
      /v2ex\.com\/t\/.*/,
    ],
  },
  'zhihu': {
    pages: [
      /https:\/\/www\.zhihu\.com\/$/, // 首页
      /https:\/\/www\.zhihu\.com\/hot$/, // 热榜
      /https:\/\/www\.zhihu\.com\/people\/.*/, // 个人
    ],
    patterns: [
      /zhihu\.com\/question\/\d+\/answer\/\d+$/, // 具体的回答页
      /zhihu\.com\/question\/\d+$/, // 问题页
      /zhuanlan\.zhihu\.com\/p\/\d+/, // 专栏文章
    ],
  },
  // resources: https://rebang.today/
  // TODO: enshan 油猴脚本都加载不进去，之后再试试
  // TODO: reddit 第一次点击的时候不会变色，刷新后才会
  // TODO: 优化一下多次获取 patterns 的逻辑
  // TODO: 让 o1 优化一下
};

(function () {
  'use strict';

  console.log('Color Visited Script has started!');

  // ================== 全局变量和初始化配置 ==================
  const domain = window.location.hostname;
  const scriptKey = `scriptEnabled_${domain}`;
  let isEnabled = GM_getValue(scriptKey, true);
  let allPatterns = [];

  // 检测当前操作系统
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

  // 根据操作系统设置不同的默认快捷键
  const defaultBatchKeySettings = {
    ctrlKey: !isMac, // macOS 下为 false，Windows 下为 true
    shiftKey: true,
    altKey: false,
    metaKey: isMac, // macOS 下为 true，Windows 下为 false
    key: 'V',
  };

  // 从存储中读取快捷键设置，如果没有则使用默认设置
  let batchKeySettings = GM_getValue('batch_shortcut_settings', defaultBatchKeySettings);

  // 批量记录快捷键处理器
  let batchKeyHandler = null;

  // ================== 同步配置 ==================

  // 简化的同步配置 - 代码中的默认值
  const defaultSyncSettings = {
    enabled: false,
    githubToken: '',
    gistId: '',
    lastSyncTime: 0,
  };

  // 合并存储值和默认值，确保重要参数不为空
  let storedSettings = GM_getValue('sync_settings', {});
  let syncSettings = {
    ...defaultSyncSettings,
    ...storedSettings,
    // 确保关键参数不为空，如果存储中为空则使用默认值
    githubToken: storedSettings.githubToken || defaultSyncSettings.githubToken,
    gistId: storedSettings.gistId || defaultSyncSettings.gistId,
  };

  // ================== 主流程控制 ==================

  // 脚本启动和全局初始化 - 负责整个脚本的启动配置、菜单设置、URL监听
  async function startScript() {
    updateMenu();

    // 如果启用同步，先进行启动同步
    if (syncSettings.enabled) {
      await syncOnStartup();
    }

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
      setupBatchKeyListener(); // 设置批量记录快捷键监听
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
    GM_unregisterMenuCommand('setBatchKeyMenuCommand');
    GM_unregisterMenuCommand('showSyncSettingsMenuCommand');

    const toggleText = isEnabled ? '禁用链接染色脚本' : '启用链接染色脚本';
    GM_registerMenuCommand(toggleText, toggleScript);
    GM_registerMenuCommand('清除所有记住的链接', clearLinks);
    GM_registerMenuCommand('批量记录当前页面链接', batchAddLinks);
    GM_registerMenuCommand('设置批量记录快捷键', showBatchKeySettingsDialog);
    GM_registerMenuCommand('同步设置', showSyncSettingsDialog);
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

    // 移除快捷键监听器
    if (batchKeyHandler) {
      document.removeEventListener('keydown', batchKeyHandler);
      batchKeyHandler = null;
    }
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
      showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
    }
    else {
      showNotification('没有找到新的符合规则的链接可添加');
    }
  }

  // 显示批量记录快捷键设置弹窗
  function showBatchKeySettingsDialog() {
    // 创建设置弹窗
    const dialog = document.createElement('div');
    dialog.style.position = 'fixed';
    dialog.style.top = '50%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translate(-50%, -50%)';
    dialog.style.backgroundColor = 'white';
    dialog.style.padding = '20px';
    dialog.style.borderRadius = '8px';
    dialog.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    dialog.style.zIndex = '10000';
    dialog.style.minWidth = '300px';
    dialog.style.maxWidth = '400px';

    // 创建标题
    const title = document.createElement('h2');
    title.textContent = '设置批量记录快捷键';
    title.style.marginTop = '0';
    title.style.marginBottom = '15px';
    dialog.appendChild(title);

    // 创建说明
    const description = document.createElement('p');
    description.textContent = '请按下您想要使用的快捷键组合。';
    dialog.appendChild(description);

    // 创建当前设置显示区域
    const currentShortcut = document.createElement('div');
    currentShortcut.style.padding = '10px';
    currentShortcut.style.border = '1px solid #ddd';
    currentShortcut.style.borderRadius = '4px';
    currentShortcut.style.marginBottom = '15px';
    currentShortcut.style.textAlign = 'center';
    currentShortcut.style.fontSize = '16px';
    updateShortcutDisplay();
    dialog.appendChild(currentShortcut);

    function updateShortcutDisplay() {
      let shortcutText = [];

      // 根据操作系统显示不同的修饰键名称
      if (batchKeySettings.metaKey) shortcutText.push(isMac ? '⌘ Command' : 'Win');
      if (batchKeySettings.ctrlKey) shortcutText.push(isMac ? '⌃ Control' : 'Ctrl');
      if (batchKeySettings.altKey) shortcutText.push(isMac ? '⌥ Option' : 'Alt');
      if (batchKeySettings.shiftKey) shortcutText.push(isMac ? '⇧ Shift' : 'Shift');
      shortcutText.push(batchKeySettings.key);

      currentShortcut.textContent = shortcutText.join(' + ');
    }

    // 创建提示
    const hint = document.createElement('p');
    hint.textContent = '请按下新的快捷键组合...';
    hint.style.marginBottom = '15px';
    dialog.appendChild(hint);

    // 创建按钮区域
    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.justifyContent = 'space-between';
    dialog.appendChild(buttonsDiv);

    // 创建保存按钮
    const saveButton = document.createElement('button');
    saveButton.textContent = '保存';
    saveButton.style.padding = '8px 16px';
    saveButton.style.backgroundColor = '#4CAF50';
    saveButton.style.color = 'white';
    saveButton.style.border = 'none';
    saveButton.style.borderRadius = '4px';
    saveButton.style.cursor = 'pointer';
    saveButton.disabled = true;
    buttonsDiv.appendChild(saveButton);

    // 创建取消按钮
    const cancelButton = document.createElement('button');
    cancelButton.textContent = '取消';
    cancelButton.style.padding = '8px 16px';
    cancelButton.style.backgroundColor = '#f44336';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.cursor = 'pointer';
    buttonsDiv.appendChild(cancelButton);

    // 创建重置按钮
    const resetButton = document.createElement('button');
    resetButton.textContent = '重置为默认';
    resetButton.style.padding = '8px 16px';
    resetButton.style.backgroundColor = '#2196F3';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '4px';
    resetButton.style.cursor = 'pointer';
    buttonsDiv.appendChild(resetButton);

    // 临时存储新设置
    let newSettings = Object.assign({}, batchKeySettings);
    let hasNewKeyPress = false;

    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '9999';

    // 添加遮罩和弹窗到页面
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);

    // 按键事件处理
    function handleKeyDown(e) {
      // 忽略单独的修饰键按下
      if (e.key === 'Control' || e.key === 'Shift' || e.key === 'Alt' || e.key === 'Meta') {
        return;
      }

      e.preventDefault();

      newSettings = {
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        key: e.key.toUpperCase(),
      };

      // 更新显示
      let shortcutText = [];

      if (newSettings.metaKey) shortcutText.push(isMac ? '⌘ Command' : 'Win');
      if (newSettings.ctrlKey) shortcutText.push(isMac ? '⌃ Control' : 'Ctrl');
      if (newSettings.altKey) shortcutText.push(isMac ? '⌥ Option' : 'Alt');
      if (newSettings.shiftKey) shortcutText.push(isMac ? '⇧ Shift' : 'Shift');
      shortcutText.push(newSettings.key);

      currentShortcut.textContent = shortcutText.join(' + ');

      hint.textContent = '已记录新快捷键，点击保存应用设置';
      saveButton.disabled = false;
      hasNewKeyPress = true;
    }

    // 绑定事件
    document.addEventListener('keydown', handleKeyDown);

    // 保存按钮事件
    saveButton.addEventListener('click', function () {
      if (hasNewKeyPress) {
        batchKeySettings = newSettings;
        GM_setValue('batch_shortcut_settings', batchKeySettings);
        closeDialog();
        showNotification('批量记录快捷键设置已保存！');
      }
    });

    // 取消按钮事件
    cancelButton.addEventListener('click', closeDialog);

    // 重置按钮事件
    resetButton.addEventListener('click', function () {
      newSettings = Object.assign({}, defaultBatchKeySettings);
      batchKeySettings = Object.assign({}, defaultBatchKeySettings);
      GM_setValue('batch_shortcut_settings', defaultBatchKeySettings);
      updateShortcutDisplay();
      closeDialog();
      showNotification('批量记录快捷键已重置为默认！');
    });

    // 关闭对话框
    function closeDialog() {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.removeChild(dialog);
      document.body.removeChild(overlay);
    }
  }

  // 显示通知
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '9999';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

    document.body.appendChild(notification);

    setTimeout(function () {
      document.body.removeChild(notification);
    }, 2000);
  }

  // 设置批量记录快捷键监听器
  function setupBatchKeyListener() {
    // 移除之前的监听器
    if (batchKeyHandler) {
      document.removeEventListener('keydown', batchKeyHandler);
    }

    // 创建新的监听器
    batchKeyHandler = function (event) {
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

  // ================== GitHub API 和同步模块 ==================

  // 验证 GitHub 令牌
  async function validateGitHubToken(token) {
    try {
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      return response.ok;
    }
    catch (error) {
      console.warn('验证 GitHub 令牌失败:', error);
      return false;
    }
  }

  // 更新现有的 Gist
  async function updateGist(token, gistId, data) {
    try {
      // 先获取现有 Gist 以确定文件名
      const gistInfo = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!gistInfo.ok) {
        throw new Error(`获取 Gist 信息失败: ${gistInfo.status}`);
      }

      const gistData = await gistInfo.json();
      const fileName = Object.keys(gistData.files)[0]; // 使用第一个文件

      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          files: {
            [fileName]: {
              content: JSON.stringify(data, null, 2),
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`更新 Gist 失败: ${response.status}`);
      }
    }
    catch (error) {
      console.warn('更新 Gist 失败:', error);
      throw error;
    }
  }

  // 获取 Gist 内容
  async function getGist(token, gistId) {
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        // 获取第一个文件的内容，不依赖特定文件名
        const fileName = Object.keys(result.files)[0];
        const content = result.files[fileName]?.content;
        return content ? JSON.parse(content) : {};
      }
      else {
        throw new Error(`获取 Gist 失败: ${response.status}`);
      }
    }
    catch (error) {
      console.warn('获取 Gist 失败:', error);
      throw error;
    }
  }

  // 上传数据到云端
  async function uploadToCloud(data) {
    const { githubToken, gistId } = syncSettings;

    if (!githubToken) {
      throw new Error('GitHub 令牌未设置');
    }

    if (!gistId) {
      throw new Error('Gist ID 未设置，请先创建 Gist 并在设置中填入 ID');
    }

    await updateGist(githubToken, gistId, data);
  }

  // 从云端下载数据
  async function downloadFromCloud() {
    const { githubToken, gistId } = syncSettings;

    if (!githubToken || !gistId) {
      return {};
    }

    return await getGist(githubToken, gistId);
  }

  // 合并本地和云端数据
  function mergeVisitedLinks(localLinks, cloudLinks) {
    const merged = { ...localLinks };

    // 以最新时间戳为准合并数据
    Object.keys(cloudLinks).forEach((url) => {
      if (!merged[url] || cloudLinks[url] > merged[url]) {
        merged[url] = cloudLinks[url];
      }
    });

    return merged;
  }

  // 检查数据是否有变化
  function hasDataChanged(oldData, newData) {
    return JSON.stringify(oldData) !== JSON.stringify(newData);
  }

  // 启动时同步
  async function syncOnStartup() {
    try {
      console.log('开始同步数据...');

      // 1. 获取本地数据
      const localLinks = GM_getValue('visitedLinks', {});

      // 2. 从云端获取数据
      const cloudLinks = await downloadFromCloud();

      // 3. 合并数据（以最新时间戳为准）
      const mergedLinks = mergeVisitedLinks(localLinks, cloudLinks);

      // 4. 保存到本地
      GM_setValue('visitedLinks', mergedLinks);

      // 5. 检查是否需要上传到云端
      const localChanged = hasDataChanged(localLinks, mergedLinks);
      const cloudChanged = hasDataChanged(cloudLinks, mergedLinks);

      if (localChanged || cloudChanged) {
        await uploadToCloud(mergedLinks);
        console.log('数据已同步并上传到云端');
      }
      else {
        console.log('数据已同步，无需上传');
      }

      // 6. 更新同步时间
      syncSettings.lastSyncTime = Date.now();
      GM_setValue('sync_settings', syncSettings);
    }
    catch (error) {
      console.warn('同步失败，使用本地数据:', error.message);
      showNotification(`同步失败: ${error.message}`);
    }
  }

  // 显示同步设置对话框
  function showSyncSettingsDialog() {
    // 创建设置弹窗
    const dialog = document.createElement('div');
    dialog.style.position = 'fixed';
    dialog.style.top = '50%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translate(-50%, -50%)';
    dialog.style.backgroundColor = 'white';
    dialog.style.padding = '20px';
    dialog.style.borderRadius = '8px';
    dialog.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    dialog.style.zIndex = '10000';
    dialog.style.minWidth = '400px';
    dialog.style.maxWidth = '500px';

    // 创建标题
    const title = document.createElement('h2');
    title.textContent = '同步设置';
    title.style.marginTop = '0';
    title.style.marginBottom = '15px';
    dialog.appendChild(title);

    // 同步开关
    const enableLabel = document.createElement('label');
    enableLabel.style.display = 'block';
    enableLabel.style.marginBottom = '15px';
    enableLabel.innerHTML = '<input type="checkbox" id="syncEnabled"> 启用数据同步';
    const enableCheckbox = enableLabel.querySelector('#syncEnabled');
    enableCheckbox.checked = syncSettings.enabled;
    dialog.appendChild(enableLabel);

    // GitHub 令牌输入
    const tokenLabel = document.createElement('label');
    tokenLabel.style.display = 'block';
    tokenLabel.style.marginBottom = '15px';
    tokenLabel.innerHTML = 'GitHub 个人访问令牌:<br><input type="password" id="githubToken" style="width: 100%; padding: 5px; margin-top: 5px;">';
    const tokenInput = tokenLabel.querySelector('#githubToken');
    // 如果存储中没有值，使用代码中的默认值
    tokenInput.value = syncSettings.githubToken || defaultSyncSettings.githubToken;
    dialog.appendChild(tokenLabel);

    // Gist ID 输入
    const gistLabel = document.createElement('label');
    gistLabel.style.display = 'block';
    gistLabel.style.marginBottom = '15px';
    gistLabel.innerHTML = 'Gist ID:<br><input type="text" id="gistId" style="width: 100%; padding: 5px; margin-top: 5px;" placeholder="请输入现有 Gist 的 ID">';
    const gistInput = gistLabel.querySelector('#gistId');
    // 如果存储中没有值，使用代码中的默认值
    gistInput.value = syncSettings.gistId || defaultSyncSettings.gistId;
    dialog.appendChild(gistLabel);

    // 帮助说明
    const helpText = document.createElement('p');
    helpText.style.fontSize = '12px';
    helpText.style.color = '#666';
    helpText.style.marginBottom = '15px';
    helpText.innerHTML = `
      <strong>设置步骤：</strong><br>
      1. 到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建令牌，权限选择 "gist"<br>
      2. 手动创建一个 Gist（任意文件名和内容），复制 URL 中的 ID 部分<br>
      3. 将令牌和 Gist ID 填入上方输入框
    `;
    dialog.appendChild(helpText);

    // 同步状态显示
    const statusDiv = document.createElement('div');
    statusDiv.style.marginBottom = '15px';
    statusDiv.style.padding = '10px';
    statusDiv.style.backgroundColor = '#f5f5f5';
    statusDiv.style.borderRadius = '4px';
    const lastSyncTime = syncSettings.lastSyncTime ? new Date(syncSettings.lastSyncTime).toLocaleString() : '从未同步';
    statusDiv.innerHTML = `
      <div>当前 Gist ID: ${syncSettings.gistId || '未设置'}</div>
      <div>最后同步时间: ${lastSyncTime}</div>
    `;
    dialog.appendChild(statusDiv);

    // 按钮区域
    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.justifyContent = 'space-between';
    dialog.appendChild(buttonsDiv);

    // 测试连接按钮
    const testButton = document.createElement('button');
    testButton.textContent = '测试连接';
    testButton.style.padding = '8px 16px';
    testButton.style.backgroundColor = '#2196F3';
    testButton.style.color = 'white';
    testButton.style.border = 'none';
    testButton.style.borderRadius = '4px';
    testButton.style.cursor = 'pointer';
    buttonsDiv.appendChild(testButton);

    // 保存按钮
    const saveButton = document.createElement('button');
    saveButton.textContent = '保存';
    saveButton.style.padding = '8px 16px';
    saveButton.style.backgroundColor = '#4CAF50';
    saveButton.style.color = 'white';
    saveButton.style.border = 'none';
    saveButton.style.borderRadius = '4px';
    saveButton.style.cursor = 'pointer';
    buttonsDiv.appendChild(saveButton);

    // 取消按钮
    const cancelButton = document.createElement('button');
    cancelButton.textContent = '取消';
    cancelButton.style.padding = '8px 16px';
    cancelButton.style.backgroundColor = '#f44336';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.cursor = 'pointer';
    buttonsDiv.appendChild(cancelButton);

    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '9999';

    // 添加遮罩和弹窗到页面
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);

    // 测试连接按钮事件
    testButton.addEventListener('click', async function () {
      const token = tokenInput.value.trim();
      if (!token) {
        showNotification('请输入 GitHub 令牌');
        return;
      }

      testButton.textContent = '测试中...';
      testButton.disabled = true;

      try {
        const isValid = await validateGitHubToken(token);
        if (isValid) {
          showNotification('连接成功！');
        }
        else {
          showNotification('连接失败，请检查令牌是否正确');
        }
      }
      catch (error) {
        showNotification('连接失败: ' + error.message);
      }
      finally {
        testButton.textContent = '测试连接';
        testButton.disabled = false;
      }
    });

    // 保存按钮事件
    saveButton.addEventListener('click', async function () {
      const newSettings = {
        ...syncSettings,
        enabled: enableCheckbox.checked,
        githubToken: tokenInput.value.trim(),
        gistId: gistInput.value.trim(),
      };

      syncSettings = newSettings;
      GM_setValue('sync_settings', syncSettings);

      closeDialog();
      showNotification('同步设置已保存！');

      // 重新更新菜单以反映状态变化
      updateMenu();
    });

    // 取消按钮事件
    cancelButton.addEventListener('click', closeDialog);

    // 关闭对话框
    function closeDialog() {
      document.body.removeChild(dialog);
      document.body.removeChild(overlay);
    }
  }

  // ================== 启动脚本 ==================

  // 执行脚本启动流程
  startScript();
})();
