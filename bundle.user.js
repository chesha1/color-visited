// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      1.8.2
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
// @include      /https:\/\/www\.hacg\.me\/wp\/$/
// @include      /https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/
// @include      /https:\/\/hostloc\.com\/forum-.*/
// @include      /https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/
// @include      /https:\/\/linux\.do\/?$/
// @include      /https:\/\/linux\.do\/(new|top|hot|categories)/
// @include      /https:\/\/linux\.do\/c\/.*/
// @include      /https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/
// @include      /https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/
// @include      /https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/
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
      /https:\/\/linux\.do\/(new|top|hot|categories)/, // 首页的几个页签
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
