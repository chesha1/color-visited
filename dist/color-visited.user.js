// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      2.0.0
// @author       chesha1
// @description  把访问过的链接染色成灰色
// @license      GPL-3.0-only
// @homepage     https://github.com/chesha1/color-visited
// @supportURL   https://github.com/chesha1/color-visited/issues
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
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// @noframes
// ==/UserScript==

(function () {
  'use strict';

  const config = {
    color: "#f1f5f9",
    // 链接颜色，默认为 slate-100
    presets: "all",
    // 是否开启调试模式
    expirationTime: 1e3 * 60 * 60 * 24 * 365
    // 链接染色的过期时间，毫秒为单位，默认为一年
  };
  const PRESET_RULES = {
    "36kr": {
      pages: [
        /https:\/\/36kr\.com\/$/,
        // 首页
        /https:\/\/36kr\.com\/motif\/\d+$/,
        // 主题页
        /https:\/\/36kr\.com\/newsflashes\/$/,
        // 快讯页
        /https:\/\/36kr\.com\/information\/.*/,
        // 资讯页
        /https:\/\/36kr\.com\/topics\/\d+$/
        // 专题页
      ],
      patterns: [
        /36kr\.com\/p\/\d+$/,
        // 文章页
        /36kr\.com\/newsflashes\/\d+$/
        // 快讯详情页
      ]
    },
    "bahamut": {
      pages: [
        /https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/
        // 各个板块首页
      ],
      patterns: [
        /forum\.gamer\.com\.tw\/C\.php\?bsn=.*/
        // 帖子
      ]
    },
    "bilibili": {
      pages: [
        // TODO: 动态页挂载不上，以后再研究研究
        // /https:\/\/t\.bilibili\.com.*/,
        /https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/,
        // 个人空间首页
        /https:\/\/space\.bilibili\.com\/\d+\/video/,
        // 个人空间投稿（疑似已失效）
        /https:\/\/space\.bilibili\.com\/\d+\/upload.*/,
        // 个人空间投稿
        /https:\/\/www\.bilibili\.com\/video\/BV.*/,
        // 视频详情页
        /https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/
        // 稍后再看中的视频详情页
      ],
      patterns: [
        /www\.bilibili\.com\/video\/BV.*/
        // 视频详情页
      ]
    },
    "chiphell": {
      pages: [
        /https:\/\/www\.chiphell\.com\/forum-.*/
      ],
      patterns: [
        /chiphell\.com\/thread-.*/
      ]
    },
    "douban": {
      pages: [
        /https:\/\/www\.douban\.com\/group\/.*/
        // 小组首页
      ],
      patterns: [
        /douban\.com\/group\/topic\/\d+\//
        // 小组帖子
      ]
    },
    "e-hentai-forums": {
      pages: [
        /https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/
        // 论坛版块页面
      ],
      patterns: [
        /https:\/\/forums\.e-hentai\.org\/index\.php\?showtopic=\d+/
        // 帖子页面
      ]
    },
    "ehentai": {
      pages: [
        /https:\/\/e-hentai\.org\/?$/,
        // 首页
        /https:\/\/exhentai\.org\/?$/,
        // 首页
        /https:\/\/e-hentai\.org\/toplist\.php\?tl=\d+/,
        // 排行榜
        /https:\/\/exhentai\.org\/toplist\.php\?tl=\d+/,
        // 排行榜
        /https:\/\/e-hentai\.org\/\?f_search=.*/,
        // 首页搜索页
        /https:\/\/exhentai\.org\/\?f_search=.*/,
        // 首页搜索页
        /https:\/\/e-hentai\.org\/popular/,
        // 热门页面
        /https:\/\/exhentai\.org\/popular/
        // 热门页面
      ],
      patterns: [
        /https:\/\/e-hentai\.org\/g\/\d+\/\w+\//,
        // 画廊页面
        /https:\/\/exhentai\.org\/g\/\d+\/\w+\//
        // 画廊页面
      ]
    },
    // TODO: 很纯粹的网站，纯静态资源，暂时无能为力，后续研究一下
    "hacg": {
      pages: [
        /https:\/\/www\.hacg\.me\/wp\/$/,
        // 首页
        /https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/
        // 分类目录页
      ],
      patterns: [
        /hacg\.me\/wp\/\d+\.html/
        // 文章页
      ]
    },
    "hostloc": {
      pages: [
        /https:\/\/hostloc\.com\/forum-.*/
        // 板块首页
      ],
      patterns: [
        /hostloc\.com\/thread.*/
        // 帖子
      ]
    },
    "hupu": {
      pages: [
        /https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/
        // 各个板块首页
      ],
      patterns: [
        /bbs\.hupu\.com\/\d+\.html/
        // 帖子
      ]
    },
    "linuxdo": {
      pages: [
        /https:\/\/linux\.do\/?$/,
        // 首页
        /https:\/\/linux\.do\/(latest|new|top|hot|categories)/,
        // 首页的几个页签
        /https:\/\/linux\.do\/c\/.*/
      ],
      patterns: [
        /linux\.do\/t\/topic\/.*/
      ]
    },
    "nga": {
      pages: [
        /https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/,
        /https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/,
        /https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/
      ],
      patterns: [
        /bbs\.nga\.cn\/read\.php\?tid.*/,
        /ngabbs\.com\/read\.php\?tid.*/,
        /nga\.178\.com\/read\.php\?tid.*/
      ]
    },
    "nodeseek": {
      pages: [
        /https:\/\/www\.nodeseek\.com\/?$/,
        // 首页
        /https:\/\/www\.nodeseek\.com\/categories\/.*/,
        // 各个板块
        /https:\/\/www\.nodeseek\.com\/page-\d+/
        // 分页
      ],
      patterns: [
        /https:\/\/www\.nodeseek\.com\/post-.*/
        // 帖子
      ]
    },
    "reddit": {
      pages: [
        /https:\/\/www\.reddit\.com\/r\/[^\/]+\/?$/
        // 板块首页
      ],
      patterns: [
        /reddit\.com\/r\/[^\/]+\/comments\/.*/
        // 帖子
      ]
    },
    "south-plus": {
      pages: [
        /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/,
        // 板块首页
        /https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/,
        // 板块首页
        /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/
        // 个人主页
      ],
      patterns: [
        /(south|north|blue|white|level|snow|spring|summer)-plus\.net\/read\.php\?tid-.*/,
        // 帖子
        /bbs\.imoutolove\.me\/read\.php\?tid-.*/
        // 帖子
      ]
    },
    "techflow": {
      pages: [
        /https:\/\/www\.techflowpost\.com\/$/
        // 首页
      ],
      patterns: [
        /techflowpost\.com\/article\/.*/
        // 文章页
      ]
    },
    "tieba": {
      pages: [
        /https:\/\/tieba\.baidu\.com\/f\?kw=.*/,
        // 某个吧首页
        /https:\/\/tieba\.baidu\.com\/hottopic.*/
        // 热榜
      ],
      patterns: [
        /tieba\.baidu\.com\/p\/\d+/
        // 帖子
      ]
    },
    "v2ex": {
      pages: [
        /https:\/\/www\.v2ex\.com\/$/,
        /https:\/\/www\.v2ex\.com\/\?tab.*/,
        /https:\/\/www\.v2ex\.com\/go\/.*/
      ],
      patterns: [
        /v2ex\.com\/t\/.*/
      ]
    },
    "zhihu": {
      pages: [
        /https:\/\/www\.zhihu\.com\/$/,
        // 首页
        /https:\/\/www\.zhihu\.com\/hot$/,
        // 热榜
        /https:\/\/www\.zhihu\.com\/people\/.*/
        // 个人
      ],
      patterns: [
        /zhihu\.com\/question\/\d+\/answer\/\d+$/,
        // 具体的回答页
        /zhihu\.com\/question\/\d+$/,
        // 问题页
        /zhuanlan\.zhihu\.com\/p\/\d+/
        // 专栏文章
      ]
    }
    // resources: https://rebang.today/
    // TODO: enshan 油猴脚本都加载不进去，之后再试试
    // TODO: reddit 第一次点击的时候不会变色，刷新后才会
    // TODO: 优化一下多次获取 patterns 的逻辑
    // TODO: 让 o1 优化一下
  };
  const defaultSyncSettings = {
    enabled: false,
    githubToken: "",
    gistId: "",
    lastSyncTime: 0
  };
  function getSyncSettings() {
    const storedSettings = GM_getValue("sync_settings", {});
    return {
      ...defaultSyncSettings,
      ...storedSettings,
      // 确保关键参数不为空，如果存储中为空则使用默认值
      githubToken: storedSettings.githubToken || defaultSyncSettings.githubToken,
      gistId: storedSettings.gistId || defaultSyncSettings.gistId
    };
  }
  function saveSyncSettings(settings) {
    GM_setValue("sync_settings", settings);
  }
  async function validateGitHubToken(token) {
    try {
      const response = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json"
        }
      });
      return response.ok;
    } catch (error) {
      console.warn("验证 GitHub 令牌失败:", error);
      return false;
    }
  }
  async function updateGist(token, gistId, data) {
    try {
      const gistInfo = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json"
        }
      });
      if (!gistInfo.ok) {
        throw new Error(`获取 Gist 信息失败: ${gistInfo.status}`);
      }
      const gistData = await gistInfo.json();
      const fileName = Object.keys(gistData.files)[0];
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: "PATCH",
        headers: {
          "Authorization": `token ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/vnd.github.v3+json"
        },
        body: JSON.stringify({
          files: {
            [fileName]: {
              content: JSON.stringify(data, null, 2)
            }
          }
        })
      });
      if (!response.ok) {
        throw new Error(`更新 Gist 失败: ${response.status}`);
      }
    } catch (error) {
      console.warn("更新 Gist 失败:", error);
      throw error;
    }
  }
  async function getGist(token, gistId) {
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json"
        }
      });
      if (response.ok) {
        const result = await response.json();
        const fileName = Object.keys(result.files)[0];
        const file = result.files[fileName];
        let contentText = "";
        if (file.truncated) {
          const rawResp = await fetch(file.raw_url);
          if (!rawResp.ok) {
            throw new Error(`获取 Gist 原始内容失败: ${rawResp.status}`);
          }
          contentText = await rawResp.text();
        } else {
          contentText = file.content;
        }
        try {
          return contentText ? JSON.parse(contentText) : {};
        } catch (e) {
          console.warn("解析 Gist 内容失败:", e);
          return {};
        }
      } else {
        throw new Error(`获取 Gist 失败: ${response.status}`);
      }
    } catch (error) {
      console.warn("获取 Gist 失败:", error);
      throw error;
    }
  }
  async function uploadToCloud(data) {
    const syncSettings = getSyncSettings();
    const { githubToken, gistId } = syncSettings;
    if (!githubToken) {
      throw new Error("GitHub 令牌未设置");
    }
    if (!gistId) {
      throw new Error("Gist ID 未设置，请先创建 Gist 并在设置中填入 ID");
    }
    await updateGist(githubToken, gistId, data);
  }
  async function downloadFromCloud() {
    const syncSettings = getSyncSettings();
    const { githubToken, gistId } = syncSettings;
    if (!githubToken || !gistId) {
      return {};
    }
    return await getGist(githubToken, gistId);
  }
  function mergeVisitedLinks(localLinks, cloudLinks) {
    const merged = { ...localLinks };
    Object.keys(cloudLinks).forEach((url) => {
      if (!merged[url] || cloudLinks[url] > merged[url]) {
        merged[url] = cloudLinks[url];
      }
    });
    return merged;
  }
  function hasDataChanged(oldData, newData) {
    return JSON.stringify(oldData) !== JSON.stringify(newData);
  }
  async function syncOnStartup() {
    try {
      console.log("开始同步数据...");
      const localLinks = GM_getValue("visitedLinks", {});
      const cloudLinks = await downloadFromCloud();
      const mergedLinks = mergeVisitedLinks(localLinks, cloudLinks);
      GM_setValue("visitedLinks", mergedLinks);
      const localChanged = hasDataChanged(localLinks, mergedLinks);
      const cloudChanged = hasDataChanged(cloudLinks, mergedLinks);
      if (localChanged || cloudChanged) {
        await uploadToCloud(mergedLinks);
        console.log("数据已同步并上传到云端");
      } else {
        console.log("数据已同步，无需上传");
      }
      const syncSettings = getSyncSettings();
      syncSettings.lastSyncTime = Date.now();
      saveSyncSettings(syncSettings);
    } catch (error) {
      console.warn("同步失败，使用本地数据:", error.message);
      throw error;
    }
  }
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = "#4CAF50";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "9999";
    notification.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    document.body.appendChild(notification);
    setTimeout(function() {
      document.body.removeChild(notification);
    }, 2e3);
  }
  function injectCustomStyles() {
    if (document.querySelector("#color-visited-style")) return;
    const style = document.createElement("style");
    style.id = "color-visited-style";
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
  function removeCustomStyles() {
    const styleElement = document.querySelector("#color-visited-style");
    if (styleElement) {
      styleElement.remove();
    }
  }
  function showBatchKeySettingsDialog(currentSettings, _defaultSettings, isMac2, onSave, onReset) {
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, -50%)";
    dialog.style.backgroundColor = "white";
    dialog.style.padding = "20px";
    dialog.style.borderRadius = "8px";
    dialog.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    dialog.style.zIndex = "10000";
    dialog.style.minWidth = "300px";
    dialog.style.maxWidth = "400px";
    const title = document.createElement("h2");
    title.textContent = "设置批量记录快捷键";
    title.style.marginTop = "0";
    title.style.marginBottom = "15px";
    dialog.appendChild(title);
    const description = document.createElement("p");
    description.textContent = "请按下您想要使用的快捷键组合。";
    dialog.appendChild(description);
    const currentShortcut = document.createElement("div");
    currentShortcut.style.padding = "10px";
    currentShortcut.style.border = "1px solid #ddd";
    currentShortcut.style.borderRadius = "4px";
    currentShortcut.style.marginBottom = "15px";
    currentShortcut.style.textAlign = "center";
    currentShortcut.style.fontSize = "16px";
    let batchKeySettings = { ...currentSettings };
    function updateShortcutDisplay() {
      let shortcutText = [];
      if (batchKeySettings.metaKey) shortcutText.push(isMac2 ? "⌘ Command" : "Win");
      if (batchKeySettings.ctrlKey) shortcutText.push(isMac2 ? "⌃ Control" : "Ctrl");
      if (batchKeySettings.altKey) shortcutText.push(isMac2 ? "⌥ Option" : "Alt");
      if (batchKeySettings.shiftKey) shortcutText.push(isMac2 ? "⇧ Shift" : "Shift");
      shortcutText.push(batchKeySettings.key);
      currentShortcut.textContent = shortcutText.join(" + ");
    }
    updateShortcutDisplay();
    dialog.appendChild(currentShortcut);
    const hint = document.createElement("p");
    hint.textContent = "请按下新的快捷键组合...";
    hint.style.marginBottom = "15px";
    dialog.appendChild(hint);
    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "space-between";
    dialog.appendChild(buttonsDiv);
    const saveButton = document.createElement("button");
    saveButton.textContent = "保存";
    saveButton.style.padding = "8px 16px";
    saveButton.style.backgroundColor = "#4CAF50";
    saveButton.style.color = "white";
    saveButton.style.border = "none";
    saveButton.style.borderRadius = "4px";
    saveButton.style.cursor = "pointer";
    saveButton.disabled = true;
    buttonsDiv.appendChild(saveButton);
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "取消";
    cancelButton.style.padding = "8px 16px";
    cancelButton.style.backgroundColor = "#f44336";
    cancelButton.style.color = "white";
    cancelButton.style.border = "none";
    cancelButton.style.borderRadius = "4px";
    cancelButton.style.cursor = "pointer";
    buttonsDiv.appendChild(cancelButton);
    const resetButton = document.createElement("button");
    resetButton.textContent = "重置为默认";
    resetButton.style.padding = "8px 16px";
    resetButton.style.backgroundColor = "#2196F3";
    resetButton.style.color = "white";
    resetButton.style.border = "none";
    resetButton.style.borderRadius = "4px";
    resetButton.style.cursor = "pointer";
    buttonsDiv.appendChild(resetButton);
    let newSettings = Object.assign({}, batchKeySettings);
    let hasNewKeyPress = false;
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.zIndex = "9999";
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);
    function handleKeyDown(e) {
      if (e.key === "Control" || e.key === "Shift" || e.key === "Alt" || e.key === "Meta") {
        return;
      }
      e.preventDefault();
      newSettings = {
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        key: e.key.toUpperCase()
      };
      let shortcutText = [];
      if (newSettings.metaKey) shortcutText.push(isMac2 ? "⌘ Command" : "Win");
      if (newSettings.ctrlKey) shortcutText.push(isMac2 ? "⌃ Control" : "Ctrl");
      if (newSettings.altKey) shortcutText.push(isMac2 ? "⌥ Option" : "Alt");
      if (newSettings.shiftKey) shortcutText.push(isMac2 ? "⇧ Shift" : "Shift");
      shortcutText.push(newSettings.key);
      currentShortcut.textContent = shortcutText.join(" + ");
      hint.textContent = "已记录新快捷键，点击保存应用设置";
      saveButton.disabled = false;
      hasNewKeyPress = true;
    }
    document.addEventListener("keydown", handleKeyDown);
    saveButton.addEventListener("click", function() {
      if (hasNewKeyPress) {
        onSave(newSettings);
        closeDialog();
        showNotification("批量记录快捷键设置已保存！");
      }
    });
    cancelButton.addEventListener("click", closeDialog);
    resetButton.addEventListener("click", function() {
      onReset();
      closeDialog();
      showNotification("批量记录快捷键已重置为默认！");
    });
    function closeDialog() {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.removeChild(dialog);
      document.body.removeChild(overlay);
    }
  }
  function showSyncSettingsDialog(onMenuUpdate) {
    const syncSettings = getSyncSettings();
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, -50%)";
    dialog.style.backgroundColor = "white";
    dialog.style.padding = "20px";
    dialog.style.borderRadius = "8px";
    dialog.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    dialog.style.zIndex = "10000";
    dialog.style.minWidth = "400px";
    dialog.style.maxWidth = "500px";
    const title = document.createElement("h2");
    title.textContent = "同步设置";
    title.style.marginTop = "0";
    title.style.marginBottom = "15px";
    dialog.appendChild(title);
    const enableLabel = document.createElement("label");
    enableLabel.style.display = "block";
    enableLabel.style.marginBottom = "15px";
    enableLabel.innerHTML = '<input type="checkbox" id="syncEnabled"> 启用数据同步';
    const enableCheckbox = enableLabel.querySelector("#syncEnabled");
    enableCheckbox.checked = syncSettings.enabled;
    dialog.appendChild(enableLabel);
    const tokenLabel = document.createElement("label");
    tokenLabel.style.display = "block";
    tokenLabel.style.marginBottom = "15px";
    tokenLabel.innerHTML = 'GitHub 个人访问令牌:<br><input type="password" id="githubToken" style="width: 100%; padding: 5px; margin-top: 5px;">';
    const tokenInput = tokenLabel.querySelector("#githubToken");
    tokenInput.value = syncSettings.githubToken;
    dialog.appendChild(tokenLabel);
    const gistLabel = document.createElement("label");
    gistLabel.style.display = "block";
    gistLabel.style.marginBottom = "15px";
    gistLabel.innerHTML = 'Gist ID:<br><input type="text" id="gistId" style="width: 100%; padding: 5px; margin-top: 5px;" placeholder="请输入现有 Gist 的 ID">';
    const gistInput = gistLabel.querySelector("#gistId");
    gistInput.value = syncSettings.gistId;
    dialog.appendChild(gistLabel);
    const helpText = document.createElement("p");
    helpText.style.fontSize = "12px";
    helpText.style.color = "#666";
    helpText.style.marginBottom = "15px";
    helpText.innerHTML = `
    <strong>设置步骤：</strong><br>
    1. 到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建令牌，权限选择 "gist"<br>
    2. 手动创建一个 Gist（任意文件名和内容），复制 URL 中的 ID 部分<br>
    3. 将令牌和 Gist ID 填入上方输入框
  `;
    dialog.appendChild(helpText);
    const statusDiv = document.createElement("div");
    statusDiv.style.marginBottom = "15px";
    statusDiv.style.padding = "10px";
    statusDiv.style.backgroundColor = "#f5f5f5";
    statusDiv.style.borderRadius = "4px";
    const lastSyncTime = syncSettings.lastSyncTime ? new Date(syncSettings.lastSyncTime).toLocaleString() : "从未同步";
    statusDiv.innerHTML = `
    <div>当前 Gist ID: ${syncSettings.gistId || "未设置"}</div>
    <div>最后同步时间: ${lastSyncTime}</div>
  `;
    dialog.appendChild(statusDiv);
    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "space-between";
    dialog.appendChild(buttonsDiv);
    const testButton = document.createElement("button");
    testButton.textContent = "测试连接";
    testButton.style.padding = "8px 16px";
    testButton.style.backgroundColor = "#2196F3";
    testButton.style.color = "white";
    testButton.style.border = "none";
    testButton.style.borderRadius = "4px";
    testButton.style.cursor = "pointer";
    buttonsDiv.appendChild(testButton);
    const saveButton = document.createElement("button");
    saveButton.textContent = "保存";
    saveButton.style.padding = "8px 16px";
    saveButton.style.backgroundColor = "#4CAF50";
    saveButton.style.color = "white";
    saveButton.style.border = "none";
    saveButton.style.borderRadius = "4px";
    saveButton.style.cursor = "pointer";
    buttonsDiv.appendChild(saveButton);
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "取消";
    cancelButton.style.padding = "8px 16px";
    cancelButton.style.backgroundColor = "#f44336";
    cancelButton.style.color = "white";
    cancelButton.style.border = "none";
    cancelButton.style.borderRadius = "4px";
    cancelButton.style.cursor = "pointer";
    buttonsDiv.appendChild(cancelButton);
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.zIndex = "9999";
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);
    testButton.addEventListener("click", async function() {
      const token = tokenInput.value.trim();
      if (!token) {
        showNotification("请输入 GitHub 令牌");
        return;
      }
      testButton.textContent = "测试中...";
      testButton.disabled = true;
      try {
        const isValid = await validateGitHubToken(token);
        if (isValid) {
          showNotification("连接成功！");
        } else {
          showNotification("连接失败，请检查令牌是否正确");
        }
      } catch (error) {
        showNotification("连接失败: " + error.message);
      } finally {
        testButton.textContent = "测试连接";
        testButton.disabled = false;
      }
    });
    saveButton.addEventListener("click", async function() {
      const newSettings = {
        ...syncSettings,
        enabled: enableCheckbox.checked,
        githubToken: tokenInput.value.trim(),
        gistId: gistInput.value.trim()
      };
      saveSyncSettings(newSettings);
      closeDialog();
      showNotification("同步设置已保存！");
      onMenuUpdate();
    });
    cancelButton.addEventListener("click", closeDialog);
    function closeDialog() {
      document.body.removeChild(dialog);
      document.body.removeChild(overlay);
    }
  }
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  const defaultBatchKeySettings = {
    ctrlKey: !isMac,
    // macOS 下为 false，Windows 下为 true
    shiftKey: true,
    altKey: false,
    metaKey: isMac,
    // macOS 下为 true，Windows 下为 false
    key: "V"
  };
  function getBaseUrl(url) {
    const domain = new URL(url).hostname;
    if (domain === "www.v2ex.com") return url.split("?")[0].split("#")[0];
    if (domain === "linux.do") return url.replace(/(\/\d+)\/\d+$/, "$1");
    if (domain === "www.bilibili.com") return url.split("?")[0];
    if (domain === "tieba.baidu.com") return url.split("?")[0];
    if (domain === "www.douban.com") return url.split("?")[0];
    if (domain === "ngabbs.com") return url.split("&")[0];
    if (domain === "bbs.nga.cn") return url.split("&")[0];
    if (domain === "nga.178.com") return url.split("&")[0];
    if (/^www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net$/.test(domain)) {
      let processedUrl = url;
      processedUrl = processedUrl.replace(/#a$/, "");
      processedUrl = processedUrl.replace(/-fpage-\d+/, "");
      processedUrl = processedUrl.replace(/-page-(\d+|[ea])(\.html)?$/, "$2");
      return processedUrl;
    }
    return url;
  }
  function logStorageInfo(visitedLinks) {
    const serializedData = JSON.stringify(visitedLinks);
    const sizeInBytes = new TextEncoder().encode(serializedData).length;
    const sizeInKB = (sizeInBytes / 1024).toFixed(2);
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
    let sizeText;
    if (sizeInBytes < 1024) {
      sizeText = `${sizeInBytes} bytes`;
    } else if (sizeInBytes < 1024 * 1024) {
      sizeText = `${sizeInKB} KB`;
    } else {
      sizeText = `${sizeInMB} MB`;
    }
    const itemCount = Object.keys(visitedLinks).length;
    console.log(`visitedLinks storage size: ${itemCount} items, ${sizeText}`);
  }
  function getCurrentDomain() {
    return window.location.hostname;
  }
  function getScriptKey(domain) {
    return `scriptEnabled_${domain}`;
  }
  (function() {
    console.log("Color Visited Script has started!");
    const domain = getCurrentDomain();
    const scriptKey = getScriptKey(domain);
    let isEnabled = GM_getValue(scriptKey, true);
    let allPatterns = [];
    let batchKeySettings = GM_getValue("batch_shortcut_settings", defaultBatchKeySettings);
    let batchKeyHandler = null;
    let syncSettings = getSyncSettings();
    function startScript() {
      updateMenu();
      if (syncSettings.enabled) {
        syncOnStartup().catch((error) => {
          console.warn("后台同步失败:", error.message);
          showNotification(`同步失败: ${error.message}`);
        });
      }
      if (config.presets === "all") {
        config.presets = Object.keys(PRESET_RULES);
      }
      loadUrlPatterns();
      setupPage();
      onUrlChange(() => {
        setupPage();
      });
    }
    function setupPage() {
      removeScript();
      if (isEnabled && isPageActive()) {
        injectCustomStyles();
        activateLinkFeatures();
        setupBatchKeyListener();
      }
    }
    function isPageActive() {
      const currentUrl = window.location.href;
      const presets = config.presets === "all" ? Object.keys(PRESET_RULES) : config.presets;
      return presets.some((preset) => {
        var _a;
        const pages = ((_a = PRESET_RULES[preset]) == null ? void 0 : _a.pages) || [];
        return pages.some((pattern) => pattern.test(currentUrl));
      });
    }
    function onUrlChange(callback) {
      let oldHref = location.href;
      const body = document.querySelector("body");
      const observer = new MutationObserver(() => {
        if (oldHref !== location.href) {
          oldHref = location.href;
          callback();
        }
      });
      observer.observe(body, { childList: true, subtree: true });
    }
    function loadUrlPatterns() {
      const presets = config.presets === "all" ? Object.keys(PRESET_RULES) : config.presets;
      presets.forEach((preset) => {
        if (PRESET_RULES[preset]) {
          allPatterns = allPatterns.concat(PRESET_RULES[preset].patterns);
        }
      });
    }
    function shouldColorLink(url) {
      return allPatterns.some((pattern) => pattern.test(url));
    }
    function updateMenu() {
      GM_unregisterMenuCommand("toggleScriptMenuCommand");
      GM_unregisterMenuCommand("clearLinksMenuCommand");
      GM_unregisterMenuCommand("batchAddLinksMenuCommand");
      GM_unregisterMenuCommand("setBatchKeyMenuCommand");
      GM_unregisterMenuCommand("showSyncSettingsMenuCommand");
      const toggleText = isEnabled ? "禁用链接染色脚本" : "启用链接染色脚本";
      GM_registerMenuCommand(toggleText, toggleScript);
      GM_registerMenuCommand("清除所有记住的链接", clearLinks);
      GM_registerMenuCommand("批量记录当前页面链接", batchAddLinks);
      GM_registerMenuCommand("设置批量记录快捷键", () => {
        showBatchKeySettingsDialog(
          batchKeySettings,
          defaultBatchKeySettings,
          isMac,
          (newSettings) => {
            batchKeySettings = newSettings;
            GM_setValue("batch_shortcut_settings", batchKeySettings);
          },
          () => {
            batchKeySettings = Object.assign({}, defaultBatchKeySettings);
            GM_setValue("batch_shortcut_settings", defaultBatchKeySettings);
          }
        );
      });
      GM_registerMenuCommand("同步设置", () => {
        showSyncSettingsDialog(updateMenu);
      });
    }
    function toggleScript() {
      isEnabled = !isEnabled;
      GM_setValue(scriptKey, isEnabled);
      updateMenu();
      setupPage();
    }
    function removeScript() {
      removeCustomStyles();
      document.querySelectorAll("a.visited-link").forEach((link) => {
        link.classList.remove("visited-link");
      });
      if (batchKeyHandler) {
        document.removeEventListener("keydown", batchKeyHandler);
        batchKeyHandler = null;
      }
    }
    function deleteExpiredLinks() {
      const visitedLinks = GM_getValue("visitedLinks", {});
      const now = (/* @__PURE__ */ new Date()).getTime();
      Object.keys(visitedLinks).forEach((url) => {
        if (now - visitedLinks[url] > config.expirationTime) {
          delete visitedLinks[url];
        }
      });
      GM_setValue("visitedLinks", visitedLinks);
    }
    function clearLinks() {
      GM_setValue("visitedLinks", {});
      removeScript();
    }
    function batchAddLinks() {
      const visitedLinks = GM_getValue("visitedLinks", {});
      const now = (/* @__PURE__ */ new Date()).getTime();
      let addedCount = 0;
      document.querySelectorAll("a[href]").forEach((link) => {
        const inputUrl = getBaseUrl(link.href);
        if (shouldColorLink(inputUrl) && !Object.hasOwn(visitedLinks, inputUrl)) {
          visitedLinks[inputUrl] = now;
          link.classList.add("visited-link");
          addedCount++;
        }
      });
      if (addedCount > 0) {
        GM_setValue("visitedLinks", visitedLinks);
        showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
      } else {
        showNotification("没有找到新的符合规则的链接可添加");
      }
    }
    function setupBatchKeyListener() {
      if (batchKeyHandler) {
        document.removeEventListener("keydown", batchKeyHandler);
      }
      batchKeyHandler = function(event) {
        if (event.ctrlKey === batchKeySettings.ctrlKey && event.shiftKey === batchKeySettings.shiftKey && event.altKey === batchKeySettings.altKey && event.metaKey === batchKeySettings.metaKey && event.key.toUpperCase() === batchKeySettings.key) {
          event.preventDefault();
          batchAddLinks();
        }
      };
      document.addEventListener("keydown", batchKeyHandler);
    }
    function updateLinkStatus(link, visitedLinks) {
      const inputUrl = getBaseUrl(link.href);
      if (!shouldColorLink(inputUrl)) return;
      if (Object.hasOwn(visitedLinks, inputUrl)) {
        link.classList.add("visited-link");
      }
    }
    function updateAllLinksStatus(visitedLinks) {
      document.querySelectorAll("a[href]").forEach((link) => {
        updateLinkStatus(link, visitedLinks);
      });
    }
    function setupDOMObserver(visitedLinks) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              node.querySelectorAll("a[href]").forEach((link) => {
                updateLinkStatus(link, visitedLinks);
              });
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return observer;
    }
    function createLinkClickHandler(visitedLinks) {
      return function handleLinkClick(event) {
        const link = event.target.closest("a[href]");
        if (!link) return;
        const inputUrl = getBaseUrl(link.href);
        if (!shouldColorLink(inputUrl)) return;
        if (!Object.hasOwn(visitedLinks, inputUrl)) {
          visitedLinks[inputUrl] = (/* @__PURE__ */ new Date()).getTime();
          GM_setValue("visitedLinks", visitedLinks);
          link.classList.add("visited-link");
        }
      };
    }
    function setupLinkEventListeners(visitedLinks) {
      const handleLinkClick = createLinkClickHandler(visitedLinks);
      document.addEventListener("click", handleLinkClick, true);
      document.addEventListener("auxclick", handleLinkClick, true);
      return handleLinkClick;
    }
    function activateLinkFeatures() {
      deleteExpiredLinks();
      const visitedLinks = GM_getValue("visitedLinks", {});
      logStorageInfo(visitedLinks);
      updateAllLinksStatus(visitedLinks);
      setupDOMObserver(visitedLinks);
      setupLinkEventListeners(visitedLinks);
    }
    startScript();
  })();

})();