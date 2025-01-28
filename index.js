// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      1.6.0
// @description  把访问过的链接染色成灰色
// @author       chesha1
// @license      GPL-3.0-only
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  // 配置参数
  const config = {
    color: '#f1f5f9', // 链接颜色，默认为 slate-100
    urlPatterns: [ // 自定义URL匹配规则
      /example\.com/,
    ],
    presets: 'all', // 使用的预设规则
    debug: false, // 是否开启调试模式
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
    'bilibili': {
      pages: [
        // TODO: 动态页挂载不上，以后再研究研究
        // /https:\/\/t\.bilibili\.com.*/,
        /https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/, // 个人空间首页
        /https:\/\/space\.bilibili\.com\/\d+\/video/, // 个人空间投稿（疑似已失效）
        /https:\/\/space\.bilibili\.com\/\d+\/upload.*/, // 个人空间投稿
        /https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频播放页

      ],
      patterns: [
        /www\.bilibili\.com\/video\/BV.*/,
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
        /https:\/\/linux\.do\/?$/,
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

  // 检查当前页面是否在preset的生效范围内
  function isInPresetPages() {
    let inPresetPages = false;
    config.presets.forEach((preset) => {
      PRESET_RULES[preset].pages.forEach((page) => {
        if (page.test(currentUrl)) {
          inPresetPages = true;
        }
      });
    });
    if (config.debug) {
      console.log('currentUrl: ', currentUrl);
      console.log('inPresetPages: ', inPresetPages);
    }
    return inPresetPages;
  }

  // 获取所有应用的URL匹配规则
  function initAllPatterns() {
    let patterns = [...config.urlPatterns];
    config.presets.forEach((preset) => {
      if (PRESET_RULES[preset]) {
        patterns = patterns.concat(PRESET_RULES[preset].patterns);
      }
    });
    allPatterns = patterns.length > 0 ? patterns : [/.*/];
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

  function initScript() {
    // 如果不在预设页面内，直接结束
    if (!isInPresetPages()) return;

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
        visitedLinks[inputUrl] = true;
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
