// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      1.2.0
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

(function() {
    'use strict';

    // 配置参数
    const config = {
        color: '#f1f5f9', // 链接颜色，默认为 slate-100
        urlPatterns: [ // 自定义URL匹配规则
            /example\.com/,
        ],
        presets: ['v2ex', 'south-plus', 'nga', 'chiphell', 'linuxdo', 'bilibili', 'zhihu'], // 使用的预设规则
        debug: false, // 是否开启调试模式
    };

    const domain = window.location.hostname;
    const currentUrl = window.location.href;
    const scriptKey = `scriptEnabled_${domain}`;
    let isEnabled = GM_getValue(scriptKey, true);

    // 检查当前页面是否在preset的生效范围内
    function isInPresetPages() {
        let inPresetPages = false;
        config.presets.forEach(preset => {
            PRESET_RULES[preset].pages.forEach(page => {
                if (page.test(currentUrl)) {
                    inPresetPages = true;
                }
            });
        });
        if (config.debug) {
            console.log('currentUrl', currentUrl);
            console.log('inPresetPages', inPresetPages);
        }
        return inPresetPages;
    }

    // 获取所有应用的URL匹配规则
    function getAllPatterns() {
        let patterns = [...config.urlPatterns];

        config.presets.forEach(preset => {
            if (PRESET_RULES[preset]) {
                patterns = patterns.concat(PRESET_RULES[preset].patterns);
            }
        });

        return patterns.length > 0 ? patterns : [/.*/];
    }

    function shouldColorLink(url) {
        return getAllPatterns().some(pattern => pattern.test(url));
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
        } else {
            removeScript();
        }
    }

    function clearLinks() {
        GM_setValue('visitedLinks', []);
        document.querySelectorAll('a[href]').forEach(link => {
            link.style.color = '';
        });
    }

    function initScript() {
        // 如果不在预设页面内，直接结束
        if (!isInPresetPages()) return;

        const visitedLinks = new Set(GM_getValue('visitedLinks', []));

        function updateLinkStatus(link) {
            const inputUrl = getBaseUrl(link.href);
            if (!shouldColorLink(inputUrl)) return;

            if (visitedLinks.has(inputUrl)) {
                link.style.color = config.color;
            } else {
                // 在鼠标左键单击（包括 ctrl, command, shift + 单击），中键单击时触发
                // 对右键菜单开发无能为力，建议把这种操作改成效率更高的按键 + 鼠标左键
                const events = ['click', 'auxclick'];
                events.forEach((event) => {
                    link.addEventListener(event, () => {
                        if (config.debug) {
                            console.log('inputUrl', inputUrl);
                        }
                        visitedLinks.add(inputUrl);
                        GM_setValue('visitedLinks', Array.from(visitedLinks));
                        link.style.color = config.color;
                    }, { capture: true });
                });
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
    }

    function removeScript() {
        document.querySelectorAll('a[href]').forEach(link => {
            link.style.color = '';
        });
    }

    // 去除各种查询参数等的干扰
    function getBaseUrl(url) {
        const domain = new URL(url).hostname;
        if (domain === 'www.v2ex.com') return url.split('?')[0].split('#')[0];
        if (domain === 'linux.do') return url.replace(/(\/\d+)\/\d+$/, '$1');
        if (domain === 'www.bilibili.com') return url.split('?')[0];
        return url;
    }

    updateMenu();

    window.onload = () => {
        if (isEnabled) {
            initScript();
        }
    };

    // 预设规则集合
    const PRESET_RULES = {
        'v2ex': {
            pages: [
                /https:\/\/www\.v2ex\.com\/$/,
                /https:\/\/www\.v2ex\.com\/\?tab.*/,
                /https:\/\/www\.v2ex\.com\/go\/.*/
            ],
            patterns: [
                /v2ex\.com\/t\/.*/
            ]
        },
        'south-plus': {
            pages: [
                /https:\/\/www\.south-plus\.net\/thread\.php\?fid.*/,
                /https:\/\/www\.south-plus\.net\/u\.php\?action-topic-uid-.*/,
            ],
            patterns: [
                /south-plus\.net\/read\.php\?tid-.*/,

            ]
        },
        'nga': {
            pages: [
                /https:\/\/bbs\.nga\.cn\/thread\.php\?fid.*/,
                /https:\/\/ngabbs\.com\/thread\.php\?fid.*/,
            ],
            patterns: [
                /bbs\.nga\.cn\/read\.php\?tid.*/,
                /ngabbs\.com\/read\.php\?tid.*/
            ]
        },
        'chiphell': {
            pages: [
                /https:\/\/www\.chiphell\.com\/forum-.*/,
            ],
            patterns: [
                /chiphell\.com\/thread-.*/
            ]
        },
        'linuxdo': {
            pages: [
                /https:\/\/linux\.do$/,
                /https:\/\/linux\.do\/c\/.*/,
            ],
            patterns: [
                /linux\.do\/t\/topic\/.*/
            ]
        },
        'bilibili': {
            pages: [
                // TODO: 动态页挂载不上，以后再研究研究
                // /https:\/\/t\.bilibili\.com.*/,
                /https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/, // 个人空间首页
                /https:\/\/space\.bilibili\.com\/\d+\/video/, // 个人空间投稿
                // TODO: 并不是 <a> 标签本身，而是子标签负责显示，稍后处理一下
                /https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频播放页

            ],
            patterns: [
                /www\.bilibili\.com\/video\/BV.*/,
            ]
        },
        'zhihu': {
            pages: [
                /https:\/\/www\.zhihu\.com\/$/,
                /https:\/\/www\.zhihu\.com\/people\/.*/,
            ],
            patterns: [
                /zhihu\.com\/question\/\d+\/answer\/\d+$/,
                /zhuanlan\.zhihu\.com\/p\/\d+/,
            ]
        }
    };
})();
