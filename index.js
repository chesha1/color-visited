// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      1.0.1
// @description  把访问过的链接染色成灰色
// @author       chesha1
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// ==/UserScript==
// TODO: 当前窗口的 url 也收进来
// TODO: 只在某些页面生效

(function() {
    'use strict';

    // 配置参数
    const config = {
        color: '#f1f5f9', // 链接颜色，默认为 slate-100
        urlPatterns: [ // 自定义URL匹配规则
            /example\.com/,
        ],
        presets: ['v2ex', 'south-plus', 'nga', 'chiphell', 'linuxdo', 'bilibili'] // 使用的预设规则
    };

    const domain = window.location.hostname;
    const scriptKey = `scriptEnabled_${domain}`;
    let isEnabled = GM_getValue(scriptKey, true);

    // 获取所有应用的URL匹配规则
    function getAllPatterns() {
        let patterns = [...config.urlPatterns];

        config.presets.forEach(preset => {
            if (PRESET_RULES[preset]) {
                patterns = patterns.concat(PRESET_RULES[preset]);
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
        const visitedLinks = new Set(GM_getValue('visitedLinks', []));

        function updateLinkStatus(link) {
            const inputUrl = getBaseUrl(link.href);
            if (!shouldColorLink(inputUrl)) return;

            if (visitedLinks.has(inputUrl)) {
                link.style.color = config.color;
            } else {
                link.addEventListener('click', () => {
                    console.log('input:', inputUrl);
                    visitedLinks.add(inputUrl);
                    GM_setValue('visitedLinks', Array.from(visitedLinks));
                    link.style.color = config.color;
                }, { capture: true });
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
        if (domain === 'linux.do') return url.replace(/(\/\d+)$/, '');
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
        'v2ex': [
            /v2ex\.com\/t\/.*/,
        ],
        'south-plus': [
            /south-plus\.net\/read\.php\?tid-.*/
        ],
        'nga': [
            /bbs\.nga\.cn\/read\.php\?tid.*/,
            /ngabbs\.com\/read\.php\?tid.*/
        ],
        'chiphell': [
            /chiphell\.com\/thread-.*/
        ],
        'linuxdo': [
            /linux.do\/t\/topic\/.*/
        ],
        'bilibili': [
            /www\.bilibili\.com\/video\/BV.*/
        ],
    };
})();
