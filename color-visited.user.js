// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      2.23.5
// @author       chesha1
// @description  把访问过的链接染色成灰色
// @license      GPL-3.0-only
// @homepage     https://github.com/chesha1/color-visited
// @supportURL   https://github.com/chesha1/color-visited/issues
// @include      /^https:\/\/36kr\.com\/$/
// @include      /^https:\/\/36kr\.com\/motif\/\d+$/
// @include      /^https:\/\/36kr\.com\/newsflashes\/$/
// @include      /^https:\/\/36kr\.com\/information\/.*/
// @include      /^https:\/\/36kr\.com\/topics\/\d+$/
// @include      /^https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/
// @include      /^https:\/\/www\.bloomberg\.com\/.*/
// @include      /^https:\/\/www\.economist\.com\/.*/
// @include      /^https:\/\/www\.chiphell\.com\/forum-.*/
// @include      /^https:\/\/www\.douban\.com\/group\/.*/
// @include      /^https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/
// @include      /^https:\/\/(e-|ex)hentai\.org\/?$/
// @include      /^https:\/\/(e-|ex)hentai\.org\/toplist\.php\?tl=\d+/
// @include      /^https:\/\/(e-|ex)hentai\.org\/\?f_search=.*/
// @include      /^https:\/\/(e-|ex)hentai\.org\/popular/
// @include      /^https:\/\/(e-|ex)hentai\.org\/watched.*/
// @include      /^https:\/\/(e-|ex)hentai\.org\/tag\/.*/
// @include      /^https:\/\/www\.hacg\.me\/wp\/$/
// @include      /^https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/
// @include      /^https:\/\/hanime1\.me\/$/
// @include      /^https:\/\/hanime1\.me\/search.*/
// @include      /^https:\/\/news\.ycombinator\.com\/.*/
// @include      /^https:\/\/hostloc\.com\/forum-.*/
// @include      /^https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/
// @include      /^https:\/\/juejin\.cn\/(\?sort=.*)?$/
// @include      /^https:\/\/juejin\.cn\/(hot|following|backend|frontend|android|ios|ai|freebie|career|article).*/
// @include      /^https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/
// @include      /^https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/
// @include      /^https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/
// @include      /^https:\/\/www\.nodeseek\.com\/?$/
// @include      /^https:\/\/www\.nodeseek\.com\/categories\/.*/
// @include      /^https:\/\/www\.nodeseek\.com\/page-\d+/
// @include      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/model\/.*/
// @include      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/pornstar\/.*/
// @include      /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/?)?([?#].*)?$/
// @include      /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/)?posts\/?([?#].*)?$/
// @include      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/
// @include      /^https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/
// @include      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/
// @include      /^https:\/\/tieba\.baidu\.com\/f\?[^#]*kw=.*/
// @include      /^https:\/\/tieba\.baidu\.com\/hottopic.*/
// @include      /^https:\/\/www\.txrjy\.com\/forum.*/
// @include      /^https:\/\/51cg1\.com\/?$/
// @include      /^https:\/\/51cg1\.com\/page\/\d+\/?$/
// @include      /^https:\/\/www\.v2ex\.com\/$/
// @include      /^https:\/\/www\.v2ex\.com\/\?tab.*/
// @include      /^https:\/\/www\.v2ex\.com\/go\/.*/
// @include      /^https:\/\/www\.1point3acres\.com\/.*/
// @include      /^https:\/\/1point3acres\.com\/.*/
// @include      /^https:\/\/www\.zhihu\.com\/$/
// @include      /^https:\/\/www\.zhihu\.com\/hot$/
// @include      /^https:\/\/www\.zhihu\.com\/people\/.*/
// @match        https://space.bilibili.com/*
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/list/watchlater*
// @match        https://linux.do/*
// @match        https://www.uscardforum.com/*
// @match        https://www.pixiv.net/*
// @match        https://www.reddit.com/*
// @match        https://seekingalpha.com/*
// @match        https://www.techflowpost.com/*
// @connect      api.github.com
// @connect      gist.githubusercontent.com
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_deleteValues
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_xmlhttpRequest
// @run-at       document-idle
// @noframes
// ==/UserScript==

(function() {
	"use strict";
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var s, _css;
	var init__virtual_monkey_css = __esmMin((() => {
		s = new Set();
		_css = async (t) => {
			if (s.has(t)) return;
			s.add(t);
			((css) => {
				const scope = globalThis;
				(scope[Symbol.for("color-visited/css")] ??= []).push(css);
			})(t);
		};
	}));
	__commonJSMin(((exports, module) => {
		init__virtual_monkey_css();
		var __defProp = Object.defineProperty;
		var __esmMin = (fn, res, err) => () => {
			if (err) throw err[0];
			try {
				return fn && (res = fn(fn = 0)), res;
			} catch (e) {
				throw err = [e], e;
			}
		};
		var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
		var __exportAll = (all, no_symbols) => {
			let target = {};
			for (var name in all) __defProp(target, name, {
				get: all[name],
				enumerable: true
			});
			if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
			return target;
		};
		var _GM_addValueChangeListener;
		var _GM_deleteValue;
		var _GM_deleteValues;
		var _GM_getValue;
		var _GM_listValues;
		var _GM_registerMenuCommand;
		var _GM_removeValueChangeListener;
		var _GM_setValue;
		var _GM_setValues;
		var _GM_xmlhttpRequest;
		var init_client = __esmMin((() => {
			_GM_addValueChangeListener = (() => typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0)();
			_GM_deleteValue = (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
			_GM_deleteValues = (() => typeof GM_deleteValues != "undefined" ? GM_deleteValues : void 0)();
			_GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
			_GM_listValues = (() => typeof GM_listValues != "undefined" ? GM_listValues : void 0)();
			_GM_registerMenuCommand = (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
			_GM_removeValueChangeListener = (() => typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0)();
			_GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
			_GM_setValues = (() => typeof GM_setValues != "undefined" ? GM_setValues : void 0)();
			_GM_xmlhttpRequest = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
		}));
		function toShortcut({ ctrlKey, shiftKey, altKey, metaKey, code }) {
			return {
				ctrlKey,
				shiftKey,
				altKey,
				metaKey,
				code
			};
		}
		function isRecordable(event) {
			return !SKIPPED_CODES.test(event.code);
		}
		function matchesShortcut(event, shortcut) {
			const pressed = toShortcut(event);
			return Object.keys(pressed).every((k) => pressed[k] === shortcut[k]);
		}
		function formatShortcut(shortcut, mac = isMac) {
			const parts = [];
			if (shortcut.metaKey) parts.push(mac ? "⌘ Command" : "Win");
			if (shortcut.ctrlKey) parts.push(mac ? "⌃ Control" : "Ctrl");
			if (shortcut.altKey) parts.push(mac ? "⌥ Option" : "Alt");
			if (shortcut.shiftKey) parts.push(mac ? "⇧ Shift" : "Shift");
			if (shortcut.code) parts.push(KEY_SYMBOLS[shortcut.code] || shortcut.code.replace(/^(Key|Digit)/, ""));
			return parts.length > 0 ? parts.join(" + ") : "未设置";
		}
		function isTyping(event) {
			if (event.isComposing) return true;
			const target = event.composedPath()[0];
			return target instanceof HTMLElement && (target.localName === "color-visited-ui" || target.isContentEditable || [
				"INPUT",
				"TEXTAREA",
				"SELECT"
			].includes(target.tagName));
		}
		var isMac;
		var DEFAULT_SHORTCUT;
		var SKIPPED_CODES;
		var KEY_SYMBOLS;
		var UI_TAG;
		var init_shortcut = __esmMin((() => {
			isMac = (() => {
				const { userAgentData, userAgent } = navigator;
				return userAgentData ? userAgentData.platform === "macOS" : /Mac|iPod|iPhone|iPad/.test(userAgent);
			})();
			DEFAULT_SHORTCUT = {
				ctrlKey: !isMac,
				shiftKey: true,
				altKey: false,
				metaKey: isMac,
				code: "KeyV"
			};
			SKIPPED_CODES = /^((Control|Shift|Alt|Meta)(Left|Right)|Tab|CapsLock|NumLock|ScrollLock|Insert|PrintScreen|Pause)?$/;
			KEY_SYMBOLS = {
				ArrowUp: "↑",
				ArrowDown: "↓",
				ArrowLeft: "←",
				ArrowRight: "→",
				Enter: "⏎",
				Backspace: "⌫",
				Delete: "⌦",
				Escape: "Esc"
			};
			UI_TAG = "color-visited-ui";
		}));
		function isLinkKey(key) {
			return key.includes(":");
		}
		function isLinkEntry(key, value) {
			return isLinkKey(key) && Number.isFinite(value);
		}
		function onLinksChange(listener) {
			linkListeners.add(listener);
			return () => {
				linkListeners.delete(listener);
			};
		}
		function setLinks(links) {
			if (_GM_setValues) _GM_setValues(links);
			else for (const url in links) _GM_setValue(url, links[url]);
			const urls = Object.keys(links);
			for (const listener of linkListeners) listener(urls);
		}
		function deleteLinks(urls) {
			if (_GM_deleteValues) _GM_deleteValues(urls);
			else for (const url of urls) _GM_deleteValue(url);
			for (const listener of linkListeners) listener(urls);
		}
		function isVisited(url, expirationTime) {
			const time = _GM_getValue(url);
			return time !== void 0 && Date.now() - time <= expirationTime;
		}
		function recordVisit(url) {
			mergeLinks({ [url]: Date.now() });
		}
		function loadLinks() {
			const links = {};
			for (const key of _GM_listValues()) if (isLinkKey(key)) links[key] = _GM_getValue(key);
			return links;
		}
		function mergeLinks(links) {
			const updates = {};
			for (const [url, time] of Object.entries(links)) {
				if (!isLinkEntry(url, time)) continue;
				const current = _GM_getValue(url);
				if (current === void 0 || current < time) updates[url] = time;
			}
			const count = Object.keys(updates).length;
			if (count > 0) setLinks(updates);
			return count;
		}
		function deleteExpiredLinks(expirationTime) {
			const now = Date.now();
			if (now - _GM_getValue(LAST_CLEANUP_TIME_KEY, 0) < CLEANUP_INTERVAL) return;
			_GM_setValue(LAST_CLEANUP_TIME_KEY, now);
			const links = loadLinks();
			const expiredUrls = Object.keys(links).filter((url) => now - links[url] > expirationTime);
			if (expiredUrls.length > 0) deleteLinks(expiredUrls);
		}
		function deleteLinksIfUnchanged(links) {
			const unchangedUrls = Object.keys(links).filter((url) => _GM_getValue(url) === links[url]);
			if (unchangedUrls.length > 0) deleteLinks(unchangedUrls);
			return unchangedUrls;
		}
		function migrateLegacyLinks() {
			const legacyLinks = _GM_getValue(LEGACY_LINKS_KEY);
			if (!legacyLinks) return;
			const mergedCount = mergeLinks(legacyLinks);
			_GM_deleteValue(LEGACY_LINKS_KEY);
			console.log(`已把 ${mergedCount} 条访问记录迁移为逐条存储`);
		}
		function readSettings() {
			return _GM_getValue(SETTINGS_KEY);
		}
		function writeSettings(settings) {
			_GM_setValue(SETTINGS_KEY, settings);
		}
		function onRemoteSettingsWrite(listener) {
			const id = _GM_addValueChangeListener(SETTINGS_KEY, (_key, _oldValue, _newValue, remote) => {
				if (remote) listener();
			});
			return () => _GM_removeValueChangeListener(id);
		}
		function getLastSyncTime() {
			return _GM_getValue(LAST_SYNC_TIME_KEY, 0);
		}
		function setLastSyncTime(time) {
			_GM_setValue(LAST_SYNC_TIME_KEY, time);
		}
		function onLastSyncTimeChange(listener) {
			const id = _GM_addValueChangeListener(LAST_SYNC_TIME_KEY, (_key, _oldTime, time) => listener(time ?? 0));
			return () => _GM_removeValueChangeListener(id);
		}
		var SETTINGS_KEY;
		var LAST_SYNC_TIME_KEY;
		var LAST_CLEANUP_TIME_KEY;
		var LEGACY_LINKS_KEY;
		var linkListeners;
		var CLEANUP_INTERVAL;
		var init_storage = __esmMin((() => {
			init_client();
			SETTINGS_KEY = "userSettings";
			LAST_SYNC_TIME_KEY = "lastSyncTime";
			LAST_CLEANUP_TIME_KEY = "lastCleanupTime";
			LEGACY_LINKS_KEY = "visitedLinks";
			linkListeners = new Set();
			CLEANUP_INTERVAL = 864e5;
		}));
		function normalizeSouthPlus(href) {
			return href.replace(/#a$/, "").replace(/-fpage-\d+/, "").replace(/-page-(\d+|[ea])(\.html)?$/, "$2");
		}
		function normalizeUrl(link) {
			return NORMALIZERS.get(link.hostname)?.(link.href) ?? link.href;
		}
		function isSiteEnabled(preset, id) {
			return preset[id] !== false;
		}
		function findActiveSite(url, preset) {
			return SITES.find((site) => isSiteEnabled(preset, site.id) && site.pages.some((page) => page.test(url)));
		}
		var SITES;
		var stripQuery;
		var stripQueryAndHash;
		var stripFromAmpersand;
		var NORMALIZERS;
		var init_sites = __esmMin((() => {
			SITES = [
				{
					id: "36kr",
					name: "36氪",
					pages: [
						/^https:\/\/36kr\.com\/$/,
						/^https:\/\/36kr\.com\/motif\/\d+$/,
						/^https:\/\/36kr\.com\/newsflashes\/$/,
						/^https:\/\/36kr\.com\/information\/.*/,
						/^https:\/\/36kr\.com\/topics\/\d+$/
					],
					links: [/^https:\/\/36kr\.com\/p\/\d+$/, /^https:\/\/36kr\.com\/newsflashes\/\d+$/]
				},
				{
					id: "bahamut",
					name: "巴哈姆特",
					pages: [/^https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/],
					links: [/^https:\/\/forum\.gamer\.com\.tw\/C\.php\?bsn=.*/]
				},
				{
					id: "bilibili",
					name: "哔哩哔哩",
					pages: [
						/^https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/,
						/^https:\/\/space\.bilibili\.com\/\d+\/video/,
						/^https:\/\/space\.bilibili\.com\/\d+\/upload.*/,
						/^https:\/\/www\.bilibili\.com\/video\/BV.*/,
						/^https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/
					],
					links: [/^https:\/\/www\.bilibili\.com\/video\/BV.*/],
					match: [
						"https://space.bilibili.com/*",
						"https://www.bilibili.com/video/*",
						"https://www.bilibili.com/list/watchlater*"
					]
				},
				{
					id: "bloomberg",
					name: "Bloomberg",
					pages: [/^https:\/\/www\.bloomberg\.com\/.*/],
					links: [/^https:\/\/www\.bloomberg\.com\/news\/articles.*/]
				},
				{
					id: "The Economist",
					name: "The Economist",
					pages: [/^https:\/\/www\.economist\.com\/.*/],
					links: [/^https:\/\/www\.economist\.com\/.+\/\d{4}\/\d{2}\/\d{2}\/.*$/]
				},
				{
					id: "chiphell",
					name: "Chiphell",
					pages: [/^https:\/\/www\.chiphell\.com\/forum-.*/],
					links: [/^https:\/\/www\.chiphell\.com\/thread-.*/]
				},
				{
					id: "douban",
					name: "豆瓣小组",
					pages: [/^https:\/\/www\.douban\.com\/group\/.*/],
					links: [/^https:\/\/www\.douban\.com\/group\/topic\/\d+\//]
				},
				{
					id: "e-hentai-forums",
					name: "E-Hentai 论坛",
					pages: [/^https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/],
					links: [/^https:\/\/forums\.e-hentai\.org\/index\.php\?showtopic=\d+/]
				},
				{
					id: "ehentai",
					name: "E-Hentai",
					pages: [
						/^https:\/\/(e-|ex)hentai\.org\/?$/,
						/^https:\/\/(e-|ex)hentai\.org\/toplist\.php\?tl=\d+/,
						/^https:\/\/(e-|ex)hentai\.org\/\?f_search=.*/,
						/^https:\/\/(e-|ex)hentai\.org\/popular/,
						/^https:\/\/(e-|ex)hentai\.org\/watched.*/,
						/^https:\/\/(e-|ex)hentai\.org\/tag\/.*/
					],
					links: [/^https:\/\/(e-|ex)hentai\.org\/g\/\d+\/\w+\//]
				},
				{
					id: "hacg",
					name: "琉璃神社",
					pages: [/^https:\/\/www\.hacg\.me\/wp\/$/, /^https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/],
					links: [/^https:\/\/www\.hacg\.me\/wp\/\d+\.html/]
				},
				{
					id: "hanime1",
					name: "Hanime1",
					pages: [/^https:\/\/hanime1\.me\/$/, /^https:\/\/hanime1\.me\/search.*/],
					links: [/^https:\/\/hanime1\.me\/watch\?v=\d+/]
				},
				{
					id: "Hacker News",
					name: "Hacker News",
					pages: [/^https:\/\/news\.ycombinator\.com\/.*/],
					links: [/^(?!https:\/\/news\.ycombinator\.com).*/]
				},
				{
					id: "hostloc",
					name: "HostLoc",
					pages: [/^https:\/\/hostloc\.com\/forum-.*/],
					links: [/^https:\/\/hostloc\.com\/thread.*/]
				},
				{
					id: "hupu",
					name: "虎扑",
					pages: [/^https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/],
					links: [/^https:\/\/bbs\.hupu\.com\/\d+\.html/]
				},
				{
					id: "juejin",
					name: "掘金",
					pages: [/^https:\/\/juejin\.cn\/(\?sort=.*)?$/, /^https:\/\/juejin\.cn\/(hot|following|backend|frontend|android|ios|ai|freebie|career|article).*/],
					links: [/^https:\/\/juejin\.cn\/post\/.*/]
				},
				{
					id: "linuxdo",
					name: "LINUX DO",
					pages: [
						/^https:\/\/linux\.do\/?$/,
						/^https:\/\/linux\.do\/(latest|new|top|hot|categories)/,
						/^https:\/\/linux\.do\/c\/.*/
					],
					links: [/^https:\/\/linux\.do\/t\/topic\/.*/],
					match: ["https://linux.do/*"]
				},
				{
					id: "美卡论坛",
					name: "美卡论坛",
					pages: [/^https:\/\/www\.uscardforum\.com\/?$/, /^https:\/\/www\.uscardforum\.com\/c\/.*/],
					links: [/^https:\/\/www\.uscardforum\.com\/t\/topic\/\d+/],
					match: ["https://www.uscardforum.com/*"]
				},
				{
					id: "nga",
					name: "NGA",
					pages: [
						/^https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/,
						/^https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/,
						/^https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/
					],
					links: [
						/^https:\/\/bbs\.nga\.cn\/read\.php\?tid.*/,
						/^https:\/\/ngabbs\.com\/read\.php\?tid.*/,
						/^https:\/\/nga\.178\.com\/read\.php\?tid.*/
					]
				},
				{
					id: "nodeseek",
					name: "NodeSeek",
					pages: [
						/^https:\/\/www\.nodeseek\.com\/?$/,
						/^https:\/\/www\.nodeseek\.com\/categories\/.*/,
						/^https:\/\/www\.nodeseek\.com\/page-\d+/
					],
					links: [/^https:\/\/www\.nodeseek\.com\/post-.*/]
				},
				{
					id: "pixiv",
					name: "pixiv",
					pages: [
						/^https:\/\/www\.pixiv\.net\/$/,
						/^https:\/\/www\.pixiv\.net\/illustration.*/,
						/^https:\/\/www\.pixiv\.net\/manga.*/,
						/^https:\/\/www\.pixiv\.net\/novel.*/,
						/^https:\/\/www\.pixiv\.net\/tags\/.*/,
						/^https:\/\/www\.pixiv\.net\/new_illust(_r18)?\.php.*/,
						/^https:\/\/www\.pixiv\.net\/bookmark_new_illust(_r18)?\.php.*/,
						/^https:\/\/www\.pixiv\.net\/following\/watchlist\/.*/,
						/^https:\/\/www\.pixiv\.net\/mypixiv_new_illust\.php.*/
					],
					links: [/^https:\/\/www\.pixiv\.net\/artworks\/\d+/, /^https:\/\/www\.pixiv\.net\/novel\/show\.php\?id=\d+/],
					match: ["https://www.pixiv.net/*"]
				},
				{
					id: "pornhub",
					name: "Pornhub",
					pages: [/^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/model\/.*/, /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/pornstar\/.*/],
					links: [/^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/view_video\.php\?viewkey=.*/]
				},
				{
					id: "reddit",
					name: "Reddit",
					pages: [/^https:\/\/www\.reddit\.com\/r\/[^/]+\/?$/],
					links: [/^https:\/\/www\.reddit\.com\/r\/[^/]+\/comments\/.*/],
					match: ["https://www.reddit.com/*"]
				},
				{
					id: "sankaku",
					name: "Sankaku Channel",
					pages: [/^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/?)?([?#].*)?$/, /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/)?posts\/?([?#].*)?$/],
					links: [/^https:\/\/chan\.sankakucomplex\.com\/posts\/[A-Za-z0-9]{11}$/]
				},
				{
					id: "Seeking Alpha",
					name: "Seeking Alpha",
					pages: [/^https:\/\/seekingalpha\.com\/$/, /^https:\/\/seekingalpha\.com\/symbol\/.*/],
					links: [/^https:\/\/seekingalpha\.com\/article\/.*/, /^https:\/\/seekingalpha\.com\/news\/.*/],
					match: ["https://seekingalpha.com/*"]
				},
				{
					id: "south-plus",
					name: "South Plus",
					pages: [
						/^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/,
						/^https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/,
						/^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/
					],
					links: [/^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/read\.php\?tid-.*/, /^https:\/\/bbs\.imoutolove\.me\/read\.php\?tid-.*/]
				},
				{
					id: "techflow",
					name: "深潮 TechFlow",
					pages: [/^https:\/\/www\.techflowpost\.com\/$/],
					links: [/^https:\/\/www\.techflowpost\.com\/article\/.*/],
					match: ["https://www.techflowpost.com/*"]
				},
				{
					id: "tieba",
					name: "百度贴吧",
					pages: [/^https:\/\/tieba\.baidu\.com\/f\?[^#]*kw=.*/, /^https:\/\/tieba\.baidu\.com\/hottopic.*/],
					links: [/^https:\/\/tieba\.baidu\.com\/p\/\d+/]
				},
				{
					id: "通信人家园",
					name: "通信人家园",
					pages: [/^https:\/\/www\.txrjy\.com\/forum.*/],
					links: [/^https:\/\/www\.txrjy\.com\/thread.*/]
				},
				{
					id: "51吃瓜网",
					name: "51吃瓜网",
					pages: [/^https:\/\/51cg1\.com\/?$/, /^https:\/\/51cg1\.com\/page\/\d+\/?$/],
					links: [/^https:\/\/51cg1\.com\/archives\/\d+\/?$/]
				},
				{
					id: "v2ex",
					name: "V2EX",
					pages: [
						/^https:\/\/www\.v2ex\.com\/$/,
						/^https:\/\/www\.v2ex\.com\/\?tab.*/,
						/^https:\/\/www\.v2ex\.com\/go\/.*/
					],
					links: [/^https:\/\/www\.v2ex\.com\/t\/.*/]
				},
				{
					id: "一亩三分地",
					name: "一亩三分地",
					pages: [/^https:\/\/www\.1point3acres\.com\/.*/, /^https:\/\/1point3acres\.com\/.*/],
					links: [/^https:\/\/www\.1point3acres\.com\/bbs\/thread-.*/]
				},
				{
					id: "zhihu",
					name: "知乎",
					pages: [
						/^https:\/\/www\.zhihu\.com\/$/,
						/^https:\/\/www\.zhihu\.com\/hot$/,
						/^https:\/\/www\.zhihu\.com\/people\/.*/
					],
					links: [
						/^https:\/\/www\.zhihu\.com\/question\/\d+\/answer\/\d+$/,
						/^https:\/\/www\.zhihu\.com\/question\/\d+$/,
						/^https:\/\/zhuanlan\.zhihu\.com\/p\/\d+/
					]
				}
			];
			stripQuery = (href) => href.split("?")[0];
			stripQueryAndHash = (href) => href.split(/[?#]/)[0];
			stripFromAmpersand = (href) => href.split("&")[0];
			NORMALIZERS = new Map([
				["www.v2ex.com", stripQueryAndHash],
				["linux.do", (href) => href.replace(/(\/\d+)\/\d+$/, "$1")],
				["www.bilibili.com", stripQuery],
				["tieba.baidu.com", stripQuery],
				["www.douban.com", stripQuery],
				["bbs.nga.cn", stripFromAmpersand],
				["ngabbs.com", stripFromAmpersand],
				["nga.178.com", stripFromAmpersand],
				["chan.sankakucomplex.com", (href) => stripQueryAndHash(href).replace(/\.com\/[a-z]{2}\/posts\//, ".com/posts/")],
				["www.south-plus.net", normalizeSouthPlus],
				["www.north-plus.net", normalizeSouthPlus],
				["www.blue-plus.net", normalizeSouthPlus],
				["www.white-plus.net", normalizeSouthPlus],
				["www.level-plus.net", normalizeSouthPlus],
				["www.snow-plus.net", normalizeSouthPlus],
				["www.spring-plus.net", normalizeSouthPlus],
				["www.summer-plus.net", normalizeSouthPlus],
				["bbs.imoutolove.me", normalizeSouthPlus]
			]);
		}));
		function createDefaultSettings() {
			return {
				general: {
					color: "rgba(0,0,0,0)",
					expirationTime: 365 * DAY$1,
					debug: false
				},
				preset: {},
				batch: { ...DEFAULT_SHORTCUT },
				sync: {
					enabled: false,
					githubToken: "",
					gistId: ""
				}
			};
		}
		function isRecord$1(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}
		function pick$1(defaults, raw) {
			const result = { ...defaults };
			if (!isRecord$1(raw)) return result;
			for (const key of Object.keys(defaults)) if (typeof raw[key] === typeof defaults[key]) result[key] = raw[key];
			return result;
		}
		function hasAllFields(defaults, raw) {
			return isRecord$1(raw) && Object.keys(defaults).every((key) => typeof raw[key] === typeof defaults[key]);
		}
		function parseSettings(raw) {
			const defaults = createDefaultSettings();
			const stored = isRecord$1(raw) ? raw : {};
			const general = pick$1(defaults.general, stored.general);
			if (!Number.isFinite(general.expirationTime) || general.expirationTime < DAY$1) general.expirationTime = defaults.general.expirationTime;
			return {
				general,
				preset: isRecord$1(stored.preset) ? Object.fromEntries(Object.entries(stored.preset).filter((entry) => typeof entry[1] === "boolean")) : {},
				batch: hasAllFields(defaults.batch, stored.batch) ? pick$1(defaults.batch, stored.batch) : defaults.batch,
				sync: pick$1(defaults.sync, stored.sync)
			};
		}
		function getSettings() {
			return parseSettings(readSettings());
		}
		function saveSettings(patch) {
			const current = getSettings();
			writeSettings({
				general: {
					...current.general,
					...patch.general
				},
				preset: {
					...current.preset,
					...patch.preset
				},
				batch: patch.batch ?? current.batch,
				sync: {
					...current.sync,
					...patch.sync
				}
			});
			for (const listener of listeners) listener();
		}
		function onSettingsChange(listener) {
			listeners.add(listener);
			const unsubscribeRemote = onRemoteSettingsWrite(listener);
			return () => {
				listeners.delete(listener);
				unsubscribeRemote();
			};
		}
		function changedFields(base, draft) {
			const changes = {};
			for (const key in draft) if (draft[key] !== base[key]) changes[key] = draft[key];
			return changes;
		}
		function diffSettings(base, draft) {
			const patch = {};
			const general = changedFields(base.general, draft.general);
			if (Object.keys(general).length > 0) patch.general = general;
			const preset = Object.fromEntries(Object.entries(draft.preset).filter(([id, enabled]) => enabled !== isSiteEnabled(base.preset, id)));
			if (Object.keys(preset).length > 0) patch.preset = preset;
			if (Object.keys(changedFields(base.batch, draft.batch)).length > 0) patch.batch = { ...draft.batch };
			const sync = changedFields(base.sync, draft.sync);
			if (Object.keys(sync).length > 0) patch.sync = sync;
			return patch;
		}
		var DAY$1;
		var listeners;
		var init_settings = __esmMin((() => {
			init_shortcut();
			init_storage();
			init_sites();
			DAY$1 = 864e5;
			listeners = new Set();
		}));
		var log;
		var init_log = __esmMin((() => {
			init_settings();
			log = { debug(...args) {
				if (getSettings().general.debug) console.log("[color-visited]", ...args);
			} };
		}));
		function makeMap(str) {
			const map = Object.create(null);
			for (const key of str.split(",")) map[key] = 1;
			return (val) => val in map;
		}
		function normalizeStyle(value) {
			if (isArray$1(value)) {
				const res = {};
				for (let i = 0; i < value.length; i++) {
					const item = value[i];
					const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
					if (normalized) for (const key in normalized) res[key] = normalized[key];
				}
				return res;
			} else if (isString(value) || isObject$2(value)) return value;
		}
		function parseStringStyle(cssText) {
			const ret = {};
			cssText.replace(styleCommentRE, (match) => match.startsWith("/*") ? "" : match).split(listDelimiterRE).forEach((item) => {
				if (item) {
					const tmp = item.split(propertyDelimiterRE);
					tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
				}
			});
			return ret;
		}
		function normalizeClass(value) {
			let res = "";
			if (isString(value)) res = value;
			else if (isArray$1(value)) for (let i = 0; i < value.length; i++) {
				const normalized = normalizeClass(value[i]);
				if (normalized) res += normalized + " ";
			}
			else if (isObject$2(value)) {
				for (const name in value) if (value[name]) res += name + " ";
			}
			return res.trim();
		}
		function includeBooleanAttr(value) {
			return !!value || value === "";
		}
		function looseCompareArrays(a, b, seen) {
			if (a.length !== b.length) return false;
			let equal = true;
			for (let i = 0; equal && i < a.length; i++) equal = looseEqual(a[i], b[i], seen);
			return equal;
		}
		function looseCompareCollections(a, b, seen) {
			if (a.size !== b.size) return false;
			const candidates = Array.from(b);
			const matched = new Uint8Array(candidates.length);
			for (const item of a) {
				let index = -1;
				for (let i = 0; i < candidates.length; i++) if (!matched[i] && looseEqual(item, candidates[i], seen)) {
					index = i;
					break;
				}
				if (index < 0) return false;
				matched[index] = 1;
			}
			return true;
		}
		function looseCompareObjects(a, b, seen) {
			let aValidType = isMap$1(a);
			let bValidType = isMap$1(b);
			if (aValidType || bValidType) return aValidType && bValidType ? looseCompareCollections(a, b, seen) : false;
			aValidType = isSet$1(a);
			bValidType = isSet$1(b);
			if (aValidType || bValidType) return aValidType && bValidType ? looseCompareCollections(a, b, seen) : false;
			if (Object.keys(a).length !== Object.keys(b).length) return false;
			for (const key in a) {
				const aHasKey = a.hasOwnProperty(key);
				const bHasKey = b.hasOwnProperty(key);
				if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key], seen)) return false;
			}
			return String(a) === String(b);
		}
		function looseCompareNested(a, b, seen, compare) {
			if (!seen) seen = [new Map(), new Map()];
			const [seenA, seenB] = seen;
			if (seenA.has(a) || seenB.has(b)) return seenA.get(a) === b && seenB.get(b) === a;
			seenA.set(a, b);
			seenB.set(b, a);
			const equal = compare(a, b, seen);
			seenA.delete(a);
			seenB.delete(b);
			return equal;
		}
		function looseEqual(a, b, seen) {
			if (a === b) return true;
			let aValidType = isDate(a);
			let bValidType = isDate(b);
			if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
			aValidType = isSymbol$1(a);
			bValidType = isSymbol$1(b);
			if (aValidType || bValidType) return a === b;
			aValidType = isArray$1(a);
			bValidType = isArray$1(b);
			if (aValidType || bValidType) return aValidType && bValidType ? looseCompareNested(a, b, seen, looseCompareArrays) : false;
			aValidType = isObject$2(a);
			bValidType = isObject$2(b);
			if (aValidType || bValidType) {
				if (!aValidType || !bValidType) return false;
				return looseCompareNested(a, b, seen, looseCompareObjects);
			}
			return String(a) === String(b);
		}
		var EMPTY_OBJ;
		var EMPTY_ARR;
		var NOOP;
		var NO;
		var isOn;
		var isModelListener;
		var extend;
		var remove;
		var hasOwnProperty$15;
		var hasOwn;
		var isArray$1;
		var isMap$1;
		var isSet$1;
		var isDate;
		var isFunction$1;
		var isString;
		var isSymbol$1;
		var isObject$2;
		var isPromise;
		var objectToString$1;
		var toTypeString;
		var toRawType;
		var isPlainObject$1;
		var isIntegerKey;
		var isReservedProp;
		var cacheStringFunction$1;
		var camelizeRE$1;
		var camelize$1;
		var hyphenateRE$1;
		var hyphenate$1;
		var capitalize$1;
		var toHandlerKey;
		var hasChanged;
		var invokeArrayFns;
		var def;
		var looseToNumber$1;
		var toNumber$1;
		var _globalThis;
		var getGlobalThis;
		var listDelimiterRE;
		var propertyDelimiterRE;
		var styleCommentRE;
		var specialBooleanAttrs;
		var isSpecialBooleanAttr;
		var isRef$1;
		var toDisplayString;
		var replacer;
		var stringifySymbol;
		var init_shared_esm_bundler = __esmMin((() => {
			EMPTY_OBJ = {};
			EMPTY_ARR = [];
			NOOP = () => {};
			NO = () => false;
			isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
			isModelListener = (key) => key.startsWith("onUpdate:");
			extend = Object.assign;
			remove = (arr, el) => {
				const i = arr.indexOf(el);
				if (i > -1) arr.splice(i, 1);
			};
			hasOwnProperty$15 = Object.prototype.hasOwnProperty;
			hasOwn = (val, key) => hasOwnProperty$15.call(val, key);
			isArray$1 = Array.isArray;
			isMap$1 = (val) => toTypeString(val) === "[object Map]";
			isSet$1 = (val) => toTypeString(val) === "[object Set]";
			isDate = (val) => toTypeString(val) === "[object Date]";
			isFunction$1 = (val) => typeof val === "function";
			isString = (val) => typeof val === "string";
			isSymbol$1 = (val) => typeof val === "symbol";
			isObject$2 = (val) => val !== null && typeof val === "object";
			isPromise = (val) => {
				return (isObject$2(val) || isFunction$1(val)) && isFunction$1(val.then) && isFunction$1(val.catch);
			};
			objectToString$1 = Object.prototype.toString;
			toTypeString = (value) => objectToString$1.call(value);
			toRawType = (value) => {
				return toTypeString(value).slice(8, -1);
			};
			isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
			isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
			isReservedProp = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
			cacheStringFunction$1 = (fn) => {
				const cache = Object.create(null);
				return ((str) => {
					return cache[str] || (cache[str] = fn(str));
				});
			};
			camelizeRE$1 = /-\w/g;
			camelize$1 = cacheStringFunction$1((str) => {
				return str.replace(camelizeRE$1, (c) => c.slice(1).toUpperCase());
			});
			hyphenateRE$1 = /\B([A-Z])/g;
			hyphenate$1 = cacheStringFunction$1((str) => str.replace(hyphenateRE$1, "-$1").toLowerCase());
			capitalize$1 = cacheStringFunction$1((str) => {
				return str.charAt(0).toUpperCase() + str.slice(1);
			});
			toHandlerKey = cacheStringFunction$1((str) => {
				return str ? `on${capitalize$1(str)}` : ``;
			});
			hasChanged = (value, oldValue) => !Object.is(value, oldValue);
			invokeArrayFns = (fns, ...arg) => {
				for (let i = 0; i < fns.length; i++) fns[i](...arg);
			};
			def = (obj, key, value, writable = false) => {
				Object.defineProperty(obj, key, {
					configurable: true,
					enumerable: false,
					writable,
					value
				});
			};
			looseToNumber$1 = (val) => {
				const n = parseFloat(val);
				return isNaN(n) ? val : n;
			};
			toNumber$1 = (val) => {
				const n = isString(val) ? Number(val) : NaN;
				return isNaN(n) ? val : n;
			};
			getGlobalThis = () => {
				return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
			};
			listDelimiterRE = /;(?![^(]*\))/g;
			propertyDelimiterRE = /:([^]+)/;
			styleCommentRE = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
			specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
			isSpecialBooleanAttr = makeMap(specialBooleanAttrs);
			specialBooleanAttrs + "";
			isRef$1 = (val) => {
				return !!(val && val["__v_isRef"] === true);
			};
			toDisplayString = (val) => {
				return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject$2(val) && (val.toString === objectToString$1 || !isFunction$1(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
			};
			replacer = (_key, val) => {
				if (isRef$1(val)) return replacer(_key, val.value);
				else if (isMap$1(val)) return { [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
					entries[stringifySymbol(key, i) + " =>"] = val2;
					return entries;
				}, {}) };
				else if (isSet$1(val)) return { [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v)) };
				else if (isSymbol$1(val)) return stringifySymbol(val);
				else if (isObject$2(val) && !isArray$1(val) && !isPlainObject$1(val)) return String(val);
				return val;
			};
			stringifySymbol = (v, i = "") => {
				var _a;
				return isSymbol$1(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
			};
		}));
		function getCurrentScope() {
			return activeEffectScope;
		}
		function onScopeDispose(fn, failSilently = false) {
			if (activeEffectScope) activeEffectScope.cleanups.push(fn);
		}
		function batch(sub, isComputed = false) {
			sub.flags |= 8;
			if (isComputed) {
				sub.next = batchedComputed;
				batchedComputed = sub;
				return;
			}
			sub.next = batchedSub;
			batchedSub = sub;
		}
		function startBatch() {
			batchDepth++;
		}
		function endBatch() {
			if (--batchDepth > 0) return;
			if (batchedComputed) {
				let e = batchedComputed;
				batchedComputed = void 0;
				while (e) {
					const next = e.next;
					e.next = void 0;
					e.flags &= -9;
					e = next;
				}
			}
			let error;
			while (batchedSub) {
				let e = batchedSub;
				batchedSub = void 0;
				while (e) {
					const next = e.next;
					e.next = void 0;
					e.flags &= -9;
					if (e.flags & 1) try {
						e.trigger();
					} catch (err) {
						if (!error) error = err;
					}
					e = next;
				}
			}
			if (error) throw error;
		}
		function prepareDeps(sub) {
			for (let link = sub.deps; link; link = link.nextDep) {
				link.version = -1;
				link.prevActiveLink = link.dep.activeLink;
				link.dep.activeLink = link;
			}
		}
		function cleanupDeps(sub) {
			let head;
			let tail = sub.depsTail;
			let link = tail;
			while (link) {
				const prev = link.prevDep;
				if (link.version === -1) {
					if (link === tail) tail = prev;
					removeSub(link);
					removeDep(link);
				} else head = link;
				link.dep.activeLink = link.prevActiveLink;
				link.prevActiveLink = void 0;
				link = prev;
			}
			sub.deps = head;
			sub.depsTail = tail;
		}
		function isDirty(sub) {
			for (let link = sub.deps; link; link = link.nextDep) if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
			if (sub._dirty) return true;
			return false;
		}
		function refreshComputed(computed) {
			if (computed.flags & 4 && !(computed.flags & 16)) return;
			computed.flags &= -17;
			if (computed.globalVersion === globalVersion) return;
			computed.globalVersion = globalVersion;
			if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) return;
			computed.flags |= 2;
			const dep = computed.dep;
			const prevSub = activeSub;
			const prevShouldTrack = shouldTrack;
			activeSub = computed;
			shouldTrack = true;
			try {
				prepareDeps(computed);
				const value = computed.fn(computed._value);
				if (dep.version === 0 || hasChanged(value, computed._value)) {
					computed.flags |= 128;
					computed._value = value;
					dep.version++;
				}
			} catch (err) {
				dep.version++;
				throw err;
			} finally {
				activeSub = prevSub;
				shouldTrack = prevShouldTrack;
				cleanupDeps(computed);
				computed.flags &= -3;
			}
		}
		function removeSub(link, soft = false) {
			const { dep, prevSub, nextSub } = link;
			if (prevSub) {
				prevSub.nextSub = nextSub;
				link.prevSub = void 0;
			}
			if (nextSub) {
				nextSub.prevSub = prevSub;
				link.nextSub = void 0;
			}
			if (dep.subs === link) {
				dep.subs = prevSub;
				if (!prevSub && dep.computed) {
					dep.computed.flags &= -5;
					for (let l = dep.computed.deps; l; l = l.nextDep) removeSub(l, true);
				}
			}
			if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
		}
		function removeDep(link) {
			const { prevDep, nextDep } = link;
			if (prevDep) {
				prevDep.nextDep = nextDep;
				link.prevDep = void 0;
			}
			if (nextDep) {
				nextDep.prevDep = prevDep;
				link.nextDep = void 0;
			}
		}
		function pauseTracking() {
			trackStack.push(shouldTrack);
			shouldTrack = false;
		}
		function resetTracking() {
			const last = trackStack.pop();
			shouldTrack = last === void 0 ? true : last;
		}
		function cleanupEffect(e) {
			const { cleanup } = e;
			e.cleanup = void 0;
			if (cleanup) {
				const prevSub = activeSub;
				activeSub = void 0;
				try {
					cleanup();
				} finally {
					activeSub = prevSub;
				}
			}
		}
		function addSub(link) {
			link.dep.sc++;
			if (link.sub.flags & 4) {
				const computed = link.dep.computed;
				if (computed && !link.dep.subs) {
					computed.flags |= 20;
					for (let l = computed.deps; l; l = l.nextDep) addSub(l);
				}
				const currentTail = link.dep.subs;
				if (currentTail !== link) {
					link.prevSub = currentTail;
					if (currentTail) currentTail.nextSub = link;
				}
				link.dep.subs = link;
			}
		}
		function track(target, type, key) {
			if (shouldTrack && activeSub) {
				let depsMap = targetMap.get(target);
				if (!depsMap) targetMap.set(target, depsMap = new Map());
				let dep = depsMap.get(key);
				if (!dep) {
					depsMap.set(key, dep = new Dep());
					dep.map = depsMap;
					dep.key = key;
				}
				dep.track();
			}
		}
		function trigger(target, type, key, newValue, oldValue, oldTarget) {
			const depsMap = targetMap.get(target);
			if (!depsMap) {
				globalVersion++;
				return;
			}
			const run = (dep) => {
				if (dep) dep.trigger();
			};
			startBatch();
			if (type === "clear") depsMap.forEach(run);
			else {
				const targetIsArray = isArray$1(target);
				const isArrayIndex = targetIsArray && isIntegerKey(key);
				if (targetIsArray && key === "length") {
					const newLength = Number(newValue);
					depsMap.forEach((dep, key2) => {
						if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol$1(key2) && key2 >= newLength) run(dep);
					});
				} else {
					if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
					if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
					switch (type) {
						case "add":
							if (!targetIsArray) {
								run(depsMap.get(ITERATE_KEY));
								if (isMap$1(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
							} else if (isArrayIndex) run(depsMap.get("length"));
							break;
						case "delete":
							if (!targetIsArray) {
								run(depsMap.get(ITERATE_KEY));
								if (isMap$1(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
							}
							break;
						case "set": if (isMap$1(target)) run(depsMap.get(ITERATE_KEY));
					}
				}
			}
			endBatch();
		}
		function getDepFromReactive(object, key) {
			const depMap = targetMap.get(object);
			return depMap && depMap.get(key);
		}
		function reactiveReadArray(array) {
			const raw = toRaw(array);
			if (raw === array) return raw;
			track(raw, "iterate", ARRAY_ITERATE_KEY);
			if (isShallow(array)) return raw;
			if (!isReadonly(array)) return raw.map(toReactive$1);
			return isReactive(array) ? raw.map((item) => toReadonly(toReactive$1(item))) : raw.map(toReadonly);
		}
		function shallowReadArray(arr) {
			track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
			return arr;
		}
		function toWrapped(target, item) {
			if (isReadonly(target)) return isReactive(target) ? toReadonly(toReactive$1(item)) : toReadonly(item);
			return toReactive$1(item);
		}
		function iterator(self, method, wrapValue) {
			const arr = shallowReadArray(self);
			const iter = arr[method]();
			if (arr !== self && !isShallow(self)) {
				iter._next = iter.next;
				iter.next = () => {
					const result = iter._next();
					if (!result.done) result.value = wrapValue(result.value);
					return result;
				};
			}
			return iter;
		}
		function apply$1(self, method, fn, thisArg, wrappedRetFn, args) {
			const arr = shallowReadArray(self);
			const needsWrap = arr !== self && !isShallow(self);
			const methodFn = arr[method];
			if (methodFn !== arrayProto[method]) {
				const result2 = methodFn.apply(self, args);
				return needsWrap ? toReactive$1(result2) : result2;
			}
			let wrappedFn = fn;
			if (arr !== self) {
				if (needsWrap) wrappedFn = function(item, index) {
					return fn.call(this, toWrapped(self, item), index, self);
				};
				else if (fn.length > 2) wrappedFn = function(item, index) {
					return fn.call(this, item, index, self);
				};
			}
			const result = methodFn.call(arr, wrappedFn, thisArg);
			return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
		}
		function reduce(self, method, fn, args) {
			const arr = shallowReadArray(self);
			const needsWrap = arr !== self && !isShallow(self);
			let wrappedFn = fn;
			let wrapInitialAccumulator = false;
			if (arr !== self) {
				if (needsWrap) {
					wrapInitialAccumulator = args.length === 0;
					wrappedFn = function(acc, item, index) {
						if (wrapInitialAccumulator) {
							wrapInitialAccumulator = false;
							acc = toWrapped(self, acc);
						}
						return fn.call(this, acc, toWrapped(self, item), index, self);
					};
				} else if (fn.length > 3) wrappedFn = function(acc, item, index) {
					return fn.call(this, acc, item, index, self);
				};
			}
			const result = arr[method](wrappedFn, ...args);
			return wrapInitialAccumulator ? toWrapped(self, result) : result;
		}
		function searchProxy(self, method, args) {
			const arr = toRaw(self);
			track(arr, "iterate", ARRAY_ITERATE_KEY);
			const res = arr[method](...args);
			if ((res === -1 || res === false) && isProxy(args[0])) {
				args[0] = toRaw(args[0]);
				return arr[method](...args);
			}
			return res;
		}
		function noTracking(self, method, args = []) {
			pauseTracking();
			startBatch();
			const res = toRaw(self)[method].apply(self, args);
			endBatch();
			resetTracking();
			return res;
		}
		function hasOwnProperty$14(key) {
			if (!isSymbol$1(key)) key = String(key);
			const obj = toRaw(this);
			track(obj, "has", key);
			return obj.hasOwnProperty(key);
		}
		function createIterableMethod(method, isReadonly2, isShallow2) {
			return function(...args) {
				const target = this["__v_raw"];
				const rawTarget = toRaw(target);
				const targetIsMap = isMap$1(rawTarget);
				const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
				const isKeyOnly = method === "keys" && targetIsMap;
				const innerIterator = target[method](...args);
				const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive$1;
				!isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
				return extend(Object.create(innerIterator), { next() {
					const { value, done } = innerIterator.next();
					return done ? {
						value,
						done
					} : {
						value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
						done
					};
				} });
			};
		}
		function createReadonlyMethod(type) {
			return function(...args) {
				return type === "delete" ? false : type === "clear" ? void 0 : this;
			};
		}
		function createInstrumentations(readonly, shallow) {
			const instrumentations = {
				get(key) {
					const target = this["__v_raw"];
					const rawTarget = toRaw(target);
					const rawKey = toRaw(key);
					if (!readonly) {
						if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
						track(rawTarget, "get", rawKey);
					}
					const { has } = getProto(rawTarget);
					const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive$1;
					if (has.call(rawTarget, key)) return wrap(target.get(key));
					else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
					else if (target !== rawTarget) target.get(key);
				},
				get size() {
					const target = this["__v_raw"];
					!readonly && track(toRaw(target), "iterate", ITERATE_KEY);
					return target.size;
				},
				has(key) {
					const target = this["__v_raw"];
					const rawTarget = toRaw(target);
					const rawKey = toRaw(key);
					if (!readonly) {
						if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
						track(rawTarget, "has", rawKey);
					}
					return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
				},
				forEach(callback, thisArg) {
					const observed = this;
					const target = observed["__v_raw"];
					const rawTarget = toRaw(target);
					const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive$1;
					!readonly && track(rawTarget, "iterate", ITERATE_KEY);
					return target.forEach((value, key) => {
						return callback.call(thisArg, wrap(value), wrap(key), observed);
					});
				}
			};
			extend(instrumentations, readonly ? {
				add: createReadonlyMethod("add"),
				set: createReadonlyMethod("set"),
				delete: createReadonlyMethod("delete"),
				clear: createReadonlyMethod("clear")
			} : {
				add(value) {
					const target = toRaw(this);
					const proto = getProto(target);
					const rawValue = toRaw(value);
					const valueToAdd = !shallow && !isShallow(value) && !isReadonly(value) ? rawValue : value;
					if (!(proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue))) {
						target.add(valueToAdd);
						trigger(target, "add", valueToAdd, valueToAdd);
					}
					return this;
				},
				set(key, value) {
					if (!shallow && !isShallow(value) && !isReadonly(value)) value = toRaw(value);
					const target = toRaw(this);
					const { has, get } = getProto(target);
					let hadKey = has.call(target, key);
					if (!hadKey) {
						key = toRaw(key);
						hadKey = has.call(target, key);
					}
					const oldValue = get.call(target, key);
					target.set(key, value);
					if (!hadKey) trigger(target, "add", key, value);
					else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
					return this;
				},
				delete(key) {
					const target = toRaw(this);
					const { has, get } = getProto(target);
					let hadKey = has.call(target, key);
					if (!hadKey) {
						key = toRaw(key);
						hadKey = has.call(target, key);
					}
					const oldValue = get ? get.call(target, key) : void 0;
					const result = target.delete(key);
					if (hadKey) trigger(target, "delete", key, void 0, oldValue);
					return result;
				},
				clear() {
					const target = toRaw(this);
					const hadItems = target.size !== 0;
					const oldTarget = void 0;
					const result = target.clear();
					if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
					return result;
				}
			});
			[
				"keys",
				"values",
				"entries",
				Symbol.iterator
			].forEach((method) => {
				instrumentations[method] = createIterableMethod(method, readonly, shallow);
			});
			return instrumentations;
		}
		function createInstrumentationGetter(isReadonly2, shallow) {
			const instrumentations = createInstrumentations(isReadonly2, shallow);
			return (target, key, receiver) => {
				if (key === "__v_isReactive") return !isReadonly2;
				else if (key === "__v_isReadonly") return isReadonly2;
				else if (key === "__v_raw") return target;
				return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
			};
		}
		function targetTypeMap(rawType) {
			switch (rawType) {
				case "Object":
				case "Array": return 1;
				case "Map":
				case "Set":
				case "WeakMap":
				case "WeakSet": return 2;
				default: return 0;
			}
		}
		function reactive(target) {
			if (isReadonly(target)) return target;
			return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
		}
		function shallowReactive(target) {
			return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
		}
		function readonly(target) {
			return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
		}
		function shallowReadonly(target) {
			return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
		}
		function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
			if (!isObject$2(target)) return target;
			if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
			if (target["__v_skip"] || !Object.isExtensible(target)) return target;
			const existingProxy = proxyMap.get(target);
			if (existingProxy) return existingProxy;
			const targetType = targetTypeMap(toRawType(target));
			if (targetType === 0) return target;
			const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
			proxyMap.set(target, proxy);
			return proxy;
		}
		function isReactive(value) {
			if (isReadonly(value)) return isReactive(value["__v_raw"]);
			return !!(value && value["__v_isReactive"]);
		}
		function isReadonly(value) {
			return !!(value && value["__v_isReadonly"]);
		}
		function isShallow(value) {
			return !!(value && value["__v_isShallow"]);
		}
		function isProxy(value) {
			return value ? !!value["__v_raw"] : false;
		}
		function toRaw(observed) {
			const raw = observed && observed["__v_raw"];
			return raw ? toRaw(raw) : observed;
		}
		function markRaw(value) {
			if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
			return value;
		}
		function isRef(r) {
			return r ? r["__v_isRef"] === true : false;
		}
		function ref(value) {
			return createRef(value, false);
		}
		function shallowRef(value) {
			return createRef(value, true);
		}
		function createRef(rawValue, shallow) {
			if (isRef(rawValue)) return rawValue;
			return new RefImpl(rawValue, shallow);
		}
		function triggerRef(ref2) {
			if (ref2.dep) ref2.dep.trigger();
		}
		function unref(ref2) {
			return isRef(ref2) ? ref2.value : ref2;
		}
		function toValue(source) {
			return isFunction$1(source) ? source() : unref(source);
		}
		function proxyRefs(objectWithRefs) {
			return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
		}
		function customRef(factory) {
			return new CustomRefImpl(factory);
		}
		function toRefs(object) {
			const ret = isArray$1(object) ? new Array(object.length) : {};
			for (const key in object) ret[key] = propertyToRef(object, key);
			return ret;
		}
		function toRef(source, key, defaultValue) {
			if (isRef(source)) return source;
			else if (isFunction$1(source)) return new GetterRefImpl(source);
			else if (isObject$2(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
			else return ref(source);
		}
		function propertyToRef(source, key, defaultValue) {
			return new ObjectRefImpl(source, key, defaultValue);
		}
		function computed$1(getterOrOptions, debugOptions, isSSR = false) {
			let getter;
			let setter;
			if (isFunction$1(getterOrOptions)) getter = getterOrOptions;
			else {
				getter = getterOrOptions.get;
				setter = getterOrOptions.set;
			}
			return new ComputedRefImpl(getter, setter, isSSR);
		}
		function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
			if (owner) {
				let cleanups = cleanupMap.get(owner);
				if (!cleanups) cleanupMap.set(owner, cleanups = []);
				cleanups.push(cleanupFn);
			}
		}
		function watch$1(source, cb, options = EMPTY_OBJ) {
			const { immediate, deep, once, scheduler, augmentJob, call } = options;
			const reactiveGetter = (source2) => {
				if (deep) return source2;
				if (isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
				return traverse(source2);
			};
			let effect;
			let getter;
			let cleanup;
			let boundCleanup;
			let forceTrigger = false;
			let isMultiSource = false;
			if (isRef(source)) {
				getter = () => source.value;
				forceTrigger = isShallow(source);
			} else if (isReactive(source)) {
				getter = () => reactiveGetter(source);
				forceTrigger = true;
			} else if (isArray$1(source)) {
				isMultiSource = true;
				forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
				getter = () => source.map((s) => {
					if (isRef(s)) return s.value;
					else if (isReactive(s)) return reactiveGetter(s);
					else if (isFunction$1(s)) return call ? call(s, 2) : s();
				});
			} else if (isFunction$1(source)) {
				if (cb) getter = call ? () => call(source, 2) : source;
				else getter = () => {
					if (cleanup) {
						pauseTracking();
						try {
							cleanup();
						} finally {
							resetTracking();
						}
					}
					const currentEffect = activeWatcher;
					activeWatcher = effect;
					try {
						return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
					} finally {
						activeWatcher = currentEffect;
					}
				};
			} else getter = NOOP;
			if (cb && deep) {
				const baseGetter = getter;
				const depth = deep === true ? Infinity : deep;
				getter = () => traverse(baseGetter(), depth);
			}
			const scope = getCurrentScope();
			const watchHandle = () => {
				effect.stop();
				if (scope && scope.active) remove(scope.effects, effect);
			};
			if (once && cb) {
				const _cb = cb;
				cb = (...args) => {
					const res = _cb(...args);
					watchHandle();
					return res;
				};
			}
			let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
			const job = (immediateFirstRun) => {
				if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
				if (cb) {
					const newValue = effect.run();
					if (immediateFirstRun || deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
						if (cleanup) cleanup();
						const currentWatcher = activeWatcher;
						activeWatcher = effect;
						try {
							const args = [
								newValue,
								oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
								boundCleanup
							];
							oldValue = newValue;
							call ? call(cb, 3, args) : cb(...args);
						} finally {
							activeWatcher = currentWatcher;
						}
					}
				} else effect.run();
			};
			if (augmentJob) augmentJob(job);
			effect = new ReactiveEffect(getter);
			effect.scheduler = scheduler ? () => scheduler(job, false) : job;
			boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
			cleanup = effect.onStop = () => {
				const cleanups = cleanupMap.get(effect);
				if (cleanups) {
					if (call) call(cleanups, 4);
					else for (const cleanup2 of cleanups) cleanup2();
					cleanupMap.delete(effect);
				}
			};
			if (cb) {
				if (immediate) job(true);
				else oldValue = effect.run();
			} else if (scheduler) scheduler(job.bind(null, true), true);
			else effect.run();
			watchHandle.pause = effect.pause.bind(effect);
			watchHandle.resume = effect.resume.bind(effect);
			watchHandle.stop = watchHandle;
			return watchHandle;
		}
		function traverse(value, depth = Infinity, seen) {
			if (depth <= 0 || !isObject$2(value) || value["__v_skip"]) return value;
			seen = seen || new Map();
			if ((seen.get(value) || 0) >= depth) return value;
			seen.set(value, depth);
			depth--;
			if (isRef(value)) traverse(value.value, depth, seen);
			else if (isArray$1(value)) for (let i = 0; i < value.length; i++) traverse(value[i], depth, seen);
			else if (isSet$1(value) || isMap$1(value)) value.forEach((v) => {
				traverse(v, depth, seen);
			});
			else if (isPlainObject$1(value)) {
				for (const key in value) traverse(value[key], depth, seen);
				for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
			}
			return value;
		}
		var activeEffectScope;
		var EffectScope;
		var activeSub;
		var pausedQueueEffects;
		var ReactiveEffect;
		var batchDepth;
		var batchedSub;
		var batchedComputed;
		var shouldTrack;
		var trackStack;
		var globalVersion;
		var Link;
		var Dep;
		var targetMap;
		var ITERATE_KEY;
		var MAP_KEY_ITERATE_KEY;
		var ARRAY_ITERATE_KEY;
		var arrayInstrumentations;
		var arrayProto;
		var isNonTrackableKeys;
		var builtInSymbols;
		var BaseReactiveHandler;
		var MutableReactiveHandler;
		var ReadonlyReactiveHandler;
		var mutableHandlers;
		var readonlyHandlers;
		var shallowReactiveHandlers;
		var shallowReadonlyHandlers;
		var toShallow;
		var getProto;
		var mutableCollectionHandlers;
		var shallowCollectionHandlers;
		var readonlyCollectionHandlers;
		var shallowReadonlyCollectionHandlers;
		var reactiveMap;
		var shallowReactiveMap;
		var readonlyMap;
		var shallowReadonlyMap;
		var toReactive$1;
		var toReadonly;
		var RefImpl;
		var shallowUnwrapHandlers;
		var CustomRefImpl;
		var ObjectRefImpl;
		var GetterRefImpl;
		var ComputedRefImpl;
		var INITIAL_WATCHER_VALUE;
		var cleanupMap;
		var activeWatcher;
		var init_reactivity_esm_bundler = __esmMin((() => {
			init_shared_esm_bundler();
			EffectScope = class {
				constructor(detached = false) {
					this.detached = detached;
					this._active = true;
					this._on = 0;
					this.effects = [];
					this.cleanups = [];
					this._isPaused = false;
					this._warnOnRun = true;
					this.__v_skip = true;
					if (!detached && activeEffectScope) {
						if (activeEffectScope.active) {
							this.parent = activeEffectScope;
							this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
						} else {
							this._active = false;
							this._warnOnRun = false;
						}
					}
				}
				get active() {
					return this._active;
				}
				pause() {
					if (this._active) {
						this._isPaused = true;
						let i, l;
						if (this.scopes) {
							const scopes = this.scopes.slice();
							for (i = 0, l = scopes.length; i < l; i++) scopes[i].pause();
						}
						for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].pause();
					}
				}
				resume() {
					if (this._active) {
						if (this._isPaused) {
							this._isPaused = false;
							let i, l;
							if (this.scopes) {
								const scopes = this.scopes.slice();
								for (i = 0, l = scopes.length; i < l; i++) scopes[i].resume();
							}
							const effects = this.effects.slice();
							for (i = 0, l = effects.length; i < l; i++) effects[i].resume();
						}
					}
				}
				run(fn) {
					if (this._active) {
						const currentEffectScope = activeEffectScope;
						try {
							activeEffectScope = this;
							return fn();
						} finally {
							activeEffectScope = currentEffectScope;
						}
					}
				}
				on() {
					if (++this._on === 1) {
						this.prevScope = activeEffectScope;
						activeEffectScope = this;
					}
				}
				off() {
					if (this._on > 0 && --this._on === 0) {
						if (activeEffectScope === this) activeEffectScope = this.prevScope;
						else {
							let current = activeEffectScope;
							while (current) {
								if (current.prevScope === this) {
									current.prevScope = this.prevScope;
									break;
								}
								current = current.prevScope;
							}
						}
						this.prevScope = void 0;
					}
				}
				stop(fromParent) {
					if (this._active) {
						this._active = false;
						let i, l;
						for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
						this.effects.length = 0;
						for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
						this.cleanups.length = 0;
						if (this.scopes) {
							const scopes = this.scopes.slice();
							for (i = 0, l = scopes.length; i < l; i++) scopes[i].stop(true);
							this.scopes.length = 0;
						}
						if (!this.detached && this.parent && !fromParent) {
							const last = this.parent.scopes.pop();
							if (last && last !== this) {
								this.parent.scopes[this.index] = last;
								last.index = this.index;
							}
						}
						this.parent = void 0;
					}
				}
			};
			pausedQueueEffects = new WeakSet();
			ReactiveEffect = class {
				constructor(fn) {
					this.fn = fn;
					this.deps = void 0;
					this.depsTail = void 0;
					this.flags = 5;
					this.next = void 0;
					this.cleanup = void 0;
					this.scheduler = void 0;
					if (activeEffectScope) {
						if (activeEffectScope.active) activeEffectScope.effects.push(this);
						else this.flags &= -2;
					}
				}
				pause() {
					this.flags |= 64;
				}
				resume() {
					if (this.flags & 64) {
						this.flags &= -65;
						if (pausedQueueEffects.has(this)) {
							pausedQueueEffects.delete(this);
							this.trigger();
						}
					}
				}
				notify() {
					if (this.flags & 2 && !(this.flags & 32)) return;
					if (!(this.flags & 8)) batch(this);
				}
				run() {
					if (!(this.flags & 1)) return this.fn();
					this.flags |= 2;
					cleanupEffect(this);
					prepareDeps(this);
					const prevEffect = activeSub;
					const prevShouldTrack = shouldTrack;
					activeSub = this;
					shouldTrack = true;
					try {
						return this.fn();
					} finally {
						cleanupDeps(this);
						activeSub = prevEffect;
						shouldTrack = prevShouldTrack;
						this.flags &= -3;
					}
				}
				stop() {
					if (this.flags & 1) {
						for (let link = this.deps; link; link = link.nextDep) removeSub(link);
						this.deps = this.depsTail = void 0;
						cleanupEffect(this);
						this.onStop && this.onStop();
						this.flags &= -2;
					}
				}
				trigger() {
					if (this.flags & 64) pausedQueueEffects.add(this);
					else if (this.scheduler) this.scheduler();
					else this.runIfDirty();
				}
				runIfDirty() {
					if (isDirty(this)) this.run();
				}
				get dirty() {
					return isDirty(this);
				}
			};
			batchDepth = 0;
			shouldTrack = true;
			trackStack = [];
			globalVersion = 0;
			Link = class {
				constructor(sub, dep) {
					this.sub = sub;
					this.dep = dep;
					this.version = dep.version;
					this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
				}
			};
			Dep = class {
				constructor(computed) {
					this.computed = computed;
					this.version = 0;
					this.activeLink = void 0;
					this.subs = void 0;
					this.map = void 0;
					this.key = void 0;
					this.sc = 0;
					this.__v_skip = true;
				}
				track(debugInfo) {
					if (!activeSub || !shouldTrack || activeSub === this.computed) return;
					let link = this.activeLink;
					if (link === void 0 || link.sub !== activeSub) {
						link = this.activeLink = new Link(activeSub, this);
						if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
						else {
							link.prevDep = activeSub.depsTail;
							activeSub.depsTail.nextDep = link;
							activeSub.depsTail = link;
						}
						addSub(link);
					} else if (link.version === -1) {
						link.version = this.version;
						if (link.nextDep) {
							const next = link.nextDep;
							next.prevDep = link.prevDep;
							if (link.prevDep) link.prevDep.nextDep = next;
							link.prevDep = activeSub.depsTail;
							link.nextDep = void 0;
							activeSub.depsTail.nextDep = link;
							activeSub.depsTail = link;
							if (activeSub.deps === link) activeSub.deps = next;
						}
					}
					return link;
				}
				trigger(debugInfo) {
					this.version++;
					globalVersion++;
					this.notify(debugInfo);
				}
				notify(debugInfo) {
					startBatch();
					try {
						for (let link = this.subs; link; link = link.prevSub) if (link.sub.notify()) link.sub.dep.notify();
					} finally {
						endBatch();
					}
				}
			};
			targetMap = new WeakMap();
			ITERATE_KEY = Symbol("");
			MAP_KEY_ITERATE_KEY = Symbol("");
			ARRAY_ITERATE_KEY = Symbol("");
			arrayInstrumentations = {
				__proto__: null,
				[Symbol.iterator]() {
					return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
				},
				concat(...args) {
					return reactiveReadArray(this).concat(...args.map((x) => isArray$1(x) ? reactiveReadArray(x) : x));
				},
				entries() {
					return iterator(this, "entries", (value) => {
						value[1] = toWrapped(this, value[1]);
						return value;
					});
				},
				every(fn, thisArg) {
					return apply$1(this, "every", fn, thisArg, void 0, arguments);
				},
				filter(fn, thisArg) {
					return apply$1(this, "filter", fn, thisArg, (v) => v.map((item) => toWrapped(this, item)), arguments);
				},
				find(fn, thisArg) {
					return apply$1(this, "find", fn, thisArg, (item) => toWrapped(this, item), arguments);
				},
				findIndex(fn, thisArg) {
					return apply$1(this, "findIndex", fn, thisArg, void 0, arguments);
				},
				findLast(fn, thisArg) {
					return apply$1(this, "findLast", fn, thisArg, (item) => toWrapped(this, item), arguments);
				},
				findLastIndex(fn, thisArg) {
					return apply$1(this, "findLastIndex", fn, thisArg, void 0, arguments);
				},
				forEach(fn, thisArg) {
					return apply$1(this, "forEach", fn, thisArg, void 0, arguments);
				},
				includes(...args) {
					return searchProxy(this, "includes", args);
				},
				indexOf(...args) {
					return searchProxy(this, "indexOf", args);
				},
				join(separator) {
					return reactiveReadArray(this).join(separator);
				},
				lastIndexOf(...args) {
					return searchProxy(this, "lastIndexOf", args);
				},
				map(fn, thisArg) {
					return apply$1(this, "map", fn, thisArg, void 0, arguments);
				},
				pop() {
					return noTracking(this, "pop");
				},
				push(...args) {
					return noTracking(this, "push", args);
				},
				reduce(fn, ...args) {
					return reduce(this, "reduce", fn, args);
				},
				reduceRight(fn, ...args) {
					return reduce(this, "reduceRight", fn, args);
				},
				shift() {
					return noTracking(this, "shift");
				},
				some(fn, thisArg) {
					return apply$1(this, "some", fn, thisArg, void 0, arguments);
				},
				splice(...args) {
					return noTracking(this, "splice", args);
				},
				toReversed() {
					return reactiveReadArray(this).toReversed();
				},
				toSorted(comparer) {
					return reactiveReadArray(this).toSorted(comparer);
				},
				toSpliced(...args) {
					return reactiveReadArray(this).toSpliced(...args);
				},
				unshift(...args) {
					return noTracking(this, "unshift", args);
				},
				values() {
					return iterator(this, "values", (item) => toWrapped(this, item));
				}
			};
			arrayProto = Array.prototype;
			isNonTrackableKeys = makeMap(`__proto__,__v_isRef,__isVue`);
			builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1));
			BaseReactiveHandler = class {
				constructor(_isReadonly = false, _isShallow = false) {
					this._isReadonly = _isReadonly;
					this._isShallow = _isShallow;
				}
				get(target, key, receiver) {
					if (key === "__v_skip") return target["__v_skip"];
					const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
					if (key === "__v_isReactive") return !isReadonly2;
					else if (key === "__v_isReadonly") return isReadonly2;
					else if (key === "__v_isShallow") return isShallow2;
					else if (key === "__v_raw") {
						if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
						return;
					}
					const targetIsArray = isArray$1(target);
					if (!isReadonly2) {
						let fn;
						if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
						if (key === "hasOwnProperty") return hasOwnProperty$14;
					}
					const res = Reflect.get(target, key, isRef(target) ? target : receiver);
					if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
					if (!isReadonly2) track(target, "get", key);
					if (isShallow2) return res;
					if (isRef(res)) {
						const value = targetIsArray && isIntegerKey(key) ? res : res.value;
						return isReadonly2 && isObject$2(value) ? readonly(value) : value;
					}
					if (isObject$2(res)) return isReadonly2 ? readonly(res) : reactive(res);
					return res;
				}
			};
			MutableReactiveHandler = class extends BaseReactiveHandler {
				constructor(isShallow2 = false) {
					super(false, isShallow2);
				}
				set(target, key, value, receiver) {
					let oldValue = target[key];
					const isArrayWithIntegerKey = isArray$1(target) && isIntegerKey(key);
					if (!this._isShallow) {
						const isOldValueReadonly = isReadonly(oldValue);
						if (!isShallow(value) && !isReadonly(value)) {
							oldValue = toRaw(oldValue);
							value = toRaw(value);
						}
						if (!isArrayWithIntegerKey && isRef(oldValue) && !isRef(value)) {
							if (isOldValueReadonly) return true;
							else {
								oldValue.value = value;
								return true;
							}
						}
					}
					const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
					const result = Reflect.set(target, key, value, isRef(target) ? target : receiver);
					if (target === toRaw(receiver) && result) {
						if (!hadKey) trigger(target, "add", key, value);
						else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
					}
					return result;
				}
				deleteProperty(target, key) {
					const hadKey = hasOwn(target, key);
					const oldValue = target[key];
					const result = Reflect.deleteProperty(target, key);
					if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
					return result;
				}
				has(target, key) {
					const result = Reflect.has(target, key);
					if (!isSymbol$1(key) || !builtInSymbols.has(key)) track(target, "has", key);
					return result;
				}
				ownKeys(target) {
					track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
					return Reflect.ownKeys(target);
				}
			};
			ReadonlyReactiveHandler = class extends BaseReactiveHandler {
				constructor(isShallow2 = false) {
					super(true, isShallow2);
				}
				set(target, key) {
					return true;
				}
				deleteProperty(target, key) {
					return true;
				}
			};
			mutableHandlers = new MutableReactiveHandler();
			readonlyHandlers = new ReadonlyReactiveHandler();
			shallowReactiveHandlers = new MutableReactiveHandler(true);
			shallowReadonlyHandlers = new ReadonlyReactiveHandler(true);
			toShallow = (value) => value;
			getProto = (v) => Reflect.getPrototypeOf(v);
			mutableCollectionHandlers = { get: createInstrumentationGetter(false, false) };
			shallowCollectionHandlers = { get: createInstrumentationGetter(false, true) };
			readonlyCollectionHandlers = { get: createInstrumentationGetter(true, false) };
			shallowReadonlyCollectionHandlers = { get: createInstrumentationGetter(true, true) };
			reactiveMap = new WeakMap();
			shallowReactiveMap = new WeakMap();
			readonlyMap = new WeakMap();
			shallowReadonlyMap = new WeakMap();
			toReactive$1 = (value) => isObject$2(value) ? reactive(value) : value;
			toReadonly = (value) => isObject$2(value) ? readonly(value) : value;
			RefImpl = class {
				constructor(value, isShallow2) {
					this.dep = new Dep();
					this["__v_isRef"] = true;
					this["__v_isShallow"] = false;
					this._rawValue = isShallow2 ? value : toRaw(value);
					this._value = isShallow2 ? value : toReactive$1(value);
					this["__v_isShallow"] = isShallow2;
				}
				get value() {
					this.dep.track();
					return this._value;
				}
				set value(newValue) {
					const oldValue = this._rawValue;
					const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
					newValue = useDirectValue ? newValue : toRaw(newValue);
					if (hasChanged(newValue, oldValue)) {
						this._rawValue = newValue;
						this._value = useDirectValue ? newValue : toReactive$1(newValue);
						this.dep.trigger();
					}
				}
			};
			shallowUnwrapHandlers = {
				get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
				set: (target, key, value, receiver) => {
					const oldValue = target[key];
					if (isRef(oldValue) && !isRef(value)) {
						oldValue.value = value;
						return true;
					} else return Reflect.set(target, key, value, receiver);
				}
			};
			CustomRefImpl = class {
				constructor(factory) {
					this["__v_isRef"] = true;
					this._value = void 0;
					const dep = this.dep = new Dep();
					const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
					this._get = get;
					this._set = set;
				}
				get value() {
					return this._value = this._get();
				}
				set value(newVal) {
					this._set(newVal);
				}
			};
			ObjectRefImpl = class {
				constructor(_object, key, _defaultValue) {
					this._object = _object;
					this._defaultValue = _defaultValue;
					this["__v_isRef"] = true;
					this._value = void 0;
					this._key = isSymbol$1(key) ? key : String(key);
					this._raw = toRaw(_object);
					let shallow = true;
					let obj = _object;
					if (!isArray$1(_object) || isSymbol$1(this._key) || !isIntegerKey(this._key)) do
						shallow = !isProxy(obj) || isShallow(obj);
					while (shallow && (obj = obj["__v_raw"]));
					this._shallow = shallow;
				}
				get value() {
					let val = this._object[this._key];
					if (this._shallow) val = unref(val);
					return this._value = val === void 0 ? this._defaultValue : val;
				}
				set value(newVal) {
					if (this._shallow && isRef(this._raw[this._key])) {
						const nestedRef = this._object[this._key];
						if (isRef(nestedRef)) {
							nestedRef.value = newVal;
							return;
						}
					}
					this._object[this._key] = newVal;
				}
				get dep() {
					return getDepFromReactive(this._raw, this._key);
				}
			};
			GetterRefImpl = class {
				constructor(_getter) {
					this._getter = _getter;
					this["__v_isRef"] = true;
					this["__v_isReadonly"] = true;
					this._value = void 0;
				}
				get value() {
					return this._value = this._getter();
				}
			};
			ComputedRefImpl = class {
				constructor(fn, setter, isSSR) {
					this.fn = fn;
					this.setter = setter;
					this._value = void 0;
					this.dep = new Dep(this);
					this.__v_isRef = true;
					this.deps = void 0;
					this.depsTail = void 0;
					this.flags = 16;
					this.globalVersion = globalVersion - 1;
					this.next = void 0;
					this.effect = this;
					this["__v_isReadonly"] = !setter;
					this.isSSR = isSSR;
				}
				notify() {
					this.flags |= 16;
					if (!(this.flags & 8) && activeSub !== this) {
						batch(this, true);
						return true;
					}
				}
				get value() {
					const link = this.dep.track();
					refreshComputed(this);
					if (link) link.version = this.dep.version;
					return this._value;
				}
				set value(newValue) {
					if (this.setter) this.setter(newValue);
				}
			};
			INITIAL_WATCHER_VALUE = {};
			cleanupMap = new WeakMap();
			activeWatcher = void 0;
		}));
		function callWithErrorHandling(fn, instance, type, args) {
			try {
				return args ? fn(...args) : fn();
			} catch (err) {
				handleError(err, instance, type);
			}
		}
		function callWithAsyncErrorHandling(fn, instance, type, args) {
			if (isFunction$1(fn)) {
				const res = callWithErrorHandling(fn, instance, type, args);
				if (res && isPromise(res)) res.catch((err) => {
					handleError(err, instance, type);
				});
				return res;
			}
			if (isArray$1(fn)) {
				const values = [];
				for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
				return values;
			}
		}
		function handleError(err, instance, type, throwInDev = true) {
			const contextVNode = instance ? instance.vnode : null;
			const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
			if (instance) {
				let cur = instance.parent;
				const exposedInstance = instance.proxy;
				const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
				while (cur) {
					const errorCapturedHooks = cur.ec;
					if (errorCapturedHooks) {
						for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
					}
					cur = cur.parent;
				}
				if (errorHandler) {
					pauseTracking();
					callWithErrorHandling(errorHandler, null, 10, [
						err,
						exposedInstance,
						errorInfo
					]);
					resetTracking();
					return;
				}
			}
			logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
		}
		function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
			if (throwInProd) throw err;
			else console.error(err);
		}
		function nextTick(fn) {
			const p = currentFlushPromise || resolvedPromise;
			return fn ? p.then(this ? fn.bind(this) : fn) : p;
		}
		function findInsertionIndex(id) {
			let start = flushIndex + 1;
			let end = queue.length;
			while (start < end) {
				const middle = start + end >>> 1;
				const middleJob = queue[middle];
				const middleJobId = getId(middleJob);
				if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
				else end = middle;
			}
			return start;
		}
		function queueJob(job) {
			if (!(job.flags & 1)) {
				const jobId = getId(job);
				const lastJob = queue[queue.length - 1];
				if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
				else queue.splice(findInsertionIndex(jobId), 0, job);
				job.flags |= 1;
				queueFlush();
			}
		}
		function queueFlush() {
			if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs);
		}
		function queuePostFlushCb(cb) {
			if (!isArray$1(cb)) {
				if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
				else if (!(cb.flags & 1)) {
					pendingPostFlushCbs.push(cb);
					cb.flags |= 1;
				}
			} else for (let i = 0; i < cb.length; i++) pendingPostFlushCbs.push(cb[i]);
			queueFlush();
		}
		function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
			for (; i < queue.length; i++) {
				const cb = queue[i];
				if (cb && cb.flags & 2) {
					if (instance && cb.id !== instance.uid) continue;
					queue.splice(i, 1);
					i--;
					if (cb.flags & 4) cb.flags &= -2;
					cb();
					if (!(cb.flags & 4)) cb.flags &= -2;
				}
			}
		}
		function flushPostFlushCbs(seen) {
			if (pendingPostFlushCbs.length) {
				const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
				pendingPostFlushCbs.length = 0;
				if (activePostFlushCbs) {
					for (let i = 0; i < deduped.length; i++) activePostFlushCbs.push(deduped[i]);
					return;
				}
				activePostFlushCbs = deduped;
				for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
					const cb = activePostFlushCbs[postFlushIndex];
					if (cb.flags & 4) cb.flags &= -2;
					if (!(cb.flags & 8)) cb();
					cb.flags &= -2;
				}
				activePostFlushCbs = null;
				postFlushIndex = 0;
			}
		}
		function flushJobs(seen) {
			try {
				for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
					const job = queue[flushIndex];
					if (job && !(job.flags & 8)) {
						if (job.flags & 4) job.flags &= -2;
						callWithErrorHandling(job, job.i, job.i ? 15 : 14);
						if (!(job.flags & 4)) job.flags &= -2;
					}
				}
			} finally {
				for (; flushIndex < queue.length; flushIndex++) {
					const job = queue[flushIndex];
					if (job) job.flags &= -2;
				}
				flushIndex = -1;
				queue.length = 0;
				flushPostFlushCbs(seen);
				currentFlushPromise = null;
				if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
			}
		}
		function setCurrentRenderingInstance(instance) {
			const prev = currentRenderingInstance;
			currentRenderingInstance = instance;
			currentScopeId = instance && instance.type.__scopeId || null;
			return prev;
		}
		function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
			if (!ctx) return fn;
			if (fn._n) return fn;
			const renderFnWithContext = (...args) => {
				if (renderFnWithContext._d) setBlockTracking(-1);
				const prevInstance = setCurrentRenderingInstance(ctx);
				const prevStackSize = blockStack.length;
				let res;
				try {
					res = fn(...args);
				} finally {
					for (let i = blockStack.length; i > prevStackSize; i--) closeBlock();
					setCurrentRenderingInstance(prevInstance);
					if (renderFnWithContext._d) setBlockTracking(1);
				}
				return res;
			};
			renderFnWithContext._n = true;
			renderFnWithContext._c = true;
			renderFnWithContext._d = true;
			return renderFnWithContext;
		}
		function withDirectives(vnode, directives) {
			if (currentRenderingInstance === null) return vnode;
			const instance = getComponentPublicInstance(currentRenderingInstance);
			const bindings = vnode.dirs || (vnode.dirs = []);
			for (let i = 0; i < directives.length; i++) {
				let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
				if (dir) {
					if (isFunction$1(dir)) dir = {
						mounted: dir,
						updated: dir
					};
					if (dir.deep) traverse(value);
					bindings.push({
						dir,
						instance,
						value,
						oldValue: void 0,
						arg,
						modifiers
					});
				}
			}
			return vnode;
		}
		function invokeDirectiveHook(vnode, prevVNode, instance, name) {
			const bindings = vnode.dirs;
			const oldBindings = prevVNode && prevVNode.dirs;
			for (let i = 0; i < bindings.length; i++) {
				const binding = bindings[i];
				if (oldBindings) binding.oldValue = oldBindings[i].value;
				let hook = binding.dir[name];
				if (hook) {
					pauseTracking();
					callWithAsyncErrorHandling(hook, instance, 8, [
						vnode.el,
						binding,
						vnode,
						prevVNode
					]);
					resetTracking();
				}
			}
		}
		function provide(key, value) {
			if (currentInstance) {
				let provides = currentInstance.provides;
				const parentProvides = currentInstance.parent && currentInstance.parent.provides;
				if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
				provides[key] = value;
			}
		}
		function inject(key, defaultValue, treatDefaultAsFactory = false) {
			const instance = getCurrentInstance();
			if (instance || currentApp) {
				let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
				if (provides && key in provides) return provides[key];
				else if (arguments.length > 1) return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
			}
		}
		function watchEffect(effect, options) {
			return doWatch(effect, null, options);
		}
		function watchSyncEffect(effect, options) {
			return doWatch(effect, null, { flush: "sync" });
		}
		function watch(source, cb, options) {
			return doWatch(source, cb, options);
		}
		function doWatch(source, cb, options = EMPTY_OBJ) {
			const { immediate, deep, flush, once } = options;
			const baseWatchOptions = extend({}, options);
			const runsImmediately = cb && immediate || !cb && flush !== "post";
			let ssrCleanup;
			if (isInSSRComponentSetup) {
				if (flush === "sync") {
					const ctx = useSSRContext();
					ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
				} else if (!runsImmediately) {
					const watchStopHandle = () => {};
					watchStopHandle.stop = NOOP;
					watchStopHandle.resume = NOOP;
					watchStopHandle.pause = NOOP;
					return watchStopHandle;
				}
			}
			const instance = currentInstance;
			baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
			let isPre = false;
			if (flush === "post") baseWatchOptions.scheduler = (job) => {
				queuePostRenderEffect(job, instance && instance.suspense);
			};
			else if (flush !== "sync") {
				isPre = true;
				baseWatchOptions.scheduler = (job, isFirstRun) => {
					if (isFirstRun) job();
					else queueJob(job);
				};
			}
			baseWatchOptions.augmentJob = (job) => {
				if (cb) job.flags |= 4;
				if (isPre) {
					job.flags |= 2;
					if (instance) {
						job.id = instance.uid;
						job.i = instance;
					}
				}
			};
			const watchHandle = watch$1(source, cb, baseWatchOptions);
			if (isInSSRComponentSetup) {
				if (ssrCleanup) ssrCleanup.push(watchHandle);
				else if (runsImmediately) watchHandle();
			}
			return watchHandle;
		}
		function instanceWatch(source, value, options) {
			const publicThis = this.proxy;
			const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
			let cb;
			if (isFunction$1(value)) cb = value;
			else {
				cb = value.handler;
				options = value;
			}
			const reset = setCurrentInstance(this);
			const res = doWatch(getter, cb.bind(publicThis), options);
			reset();
			return res;
		}
		function createPathGetter(ctx, path) {
			const segments = path.split(".");
			return () => {
				let cur = ctx;
				for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
				return cur;
			};
		}
		function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
			if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
			const { el, anchor, shapeFlag, children, props } = vnode;
			const isReorder = moveType === 2;
			if (isReorder) insert(el, container, parentAnchor);
			if (!pendingMounts.has(vnode) && (!isReorder || isTeleportDisabled(props))) {
				if (shapeFlag & 16) for (let i = 0; i < children.length; i++) move(children[i], container, parentAnchor, 2);
			}
			if (isReorder) insert(anchor, container, parentAnchor);
		}
		function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector, insert, createText } }, hydrateChildren) {
			function hydrateAnchor(target2, targetNode) {
				let targetAnchor = targetNode;
				while (targetAnchor) {
					if (targetAnchor && targetAnchor.nodeType === 8) {
						if (targetAnchor.data === "teleport start anchor") vnode.targetStart = targetAnchor;
						else if (targetAnchor.data === "teleport anchor") {
							vnode.targetAnchor = targetAnchor;
							target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
							break;
						}
					}
					targetAnchor = nextSibling(targetAnchor);
				}
			}
			function hydrateDisabledTeleport(node2, vnode2) {
				vnode2.anchor = hydrateChildren(nextSibling(node2), vnode2, parentNode(node2), parentComponent, parentSuspense, slotScopeIds, optimized);
			}
			const target = vnode.target = resolveTarget(vnode.props, querySelector);
			const disabled = isTeleportDisabled(vnode.props);
			if (target) {
				const targetNode = target._lpa || target.firstChild;
				if (vnode.shapeFlag & 16) {
					if (disabled) {
						hydrateDisabledTeleport(node, vnode);
						hydrateAnchor(target, targetNode);
						if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert, parentNode(node) === target ? node : null);
					} else {
						vnode.anchor = nextSibling(node);
						hydrateAnchor(target, targetNode);
						if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert);
						hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
					}
				}
				updateCssVars(vnode, disabled);
			} else if (disabled) {
				if (vnode.shapeFlag & 16) {
					hydrateDisabledTeleport(node, vnode);
					vnode.targetStart = node;
					vnode.targetAnchor = nextSibling(node);
				}
			}
			return vnode.anchor && nextSibling(vnode.anchor);
		}
		function updateCssVars(vnode, isDisabled) {
			const ctx = vnode.ctx;
			if (ctx && ctx.ut) {
				let node, anchor;
				if (isDisabled) {
					node = vnode.el;
					anchor = vnode.anchor;
				} else {
					node = vnode.targetStart;
					anchor = vnode.targetAnchor;
				}
				while (node && node !== anchor) {
					if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
					node = node.nextSibling;
				}
				ctx.ut();
			}
		}
		function prepareAnchor(target, vnode, createText, insert, anchor = null) {
			const targetStart = vnode.targetStart = createText("");
			const targetAnchor = vnode.targetAnchor = createText("");
			targetStart[TeleportEndKey] = targetAnchor;
			if (target) {
				insert(targetStart, target, anchor);
				insert(targetAnchor, target, anchor);
			}
			return targetAnchor;
		}
		function useTransitionState() {
			const state = {
				isMounted: false,
				isLeaving: false,
				isUnmounting: false,
				leavingVNodes: new Map()
			};
			onMounted(() => {
				state.isMounted = true;
			});
			onBeforeUnmount(() => {
				state.isUnmounting = true;
			});
			return state;
		}
		function findNonCommentChild(children) {
			let child = children[0];
			if (children.length > 1) {
				for (const c of children) if (c.type !== Comment) {
					child = c;
					break;
				}
			}
			return child;
		}
		function getLeavingNodesForType(state, vnode) {
			const { leavingVNodes } = state;
			let leavingVNodesCache = leavingVNodes.get(vnode.type);
			if (!leavingVNodesCache) {
				leavingVNodesCache = Object.create(null);
				leavingVNodes.set(vnode.type, leavingVNodesCache);
			}
			return leavingVNodesCache;
		}
		function resolveTransitionHooks(vnode, props, state, instance, postClone) {
			const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
			const key = String(vnode.key);
			const leavingVNodesCache = getLeavingNodesForType(state, vnode);
			const callHook = (hook, args) => {
				hook && callWithAsyncErrorHandling(hook, instance, 9, args);
			};
			const callAsyncHook = (hook, args) => {
				const done = args[1];
				callHook(hook, args);
				if (isArray$1(hook)) {
					if (hook.every((hook2) => hook2.length <= 1)) done();
				} else if (hook.length <= 1) done();
			};
			const hooks = {
				mode,
				persisted,
				beforeEnter(el) {
					let hook = onBeforeEnter;
					if (!state.isMounted) {
						if (appear) hook = onBeforeAppear || onBeforeEnter;
						else return;
					}
					if (el[leaveCbKey]) el[leaveCbKey](true);
					const leavingVNode = leavingVNodesCache[key];
					if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
					callHook(hook, [el]);
				},
				enter(el) {
					if (leavingVNodesCache[key] === vnode) return;
					let hook = onEnter;
					let afterHook = onAfterEnter;
					let cancelHook = onEnterCancelled;
					if (!state.isMounted) {
						if (appear) {
							hook = onAppear || onEnter;
							afterHook = onAfterAppear || onAfterEnter;
							cancelHook = onAppearCancelled || onEnterCancelled;
						} else return;
					}
					let called = false;
					el[enterCbKey$1] = (cancelled) => {
						if (called) return;
						called = true;
						if (cancelled) callHook(cancelHook, [el]);
						else callHook(afterHook, [el]);
						if (hooks.delayedLeave) hooks.delayedLeave();
						el[enterCbKey$1] = void 0;
					};
					const done = el[enterCbKey$1].bind(null, false);
					if (hook) callAsyncHook(hook, [el, done]);
					else done();
				},
				leave(el, remove) {
					const key2 = String(vnode.key);
					if (el[enterCbKey$1]) el[enterCbKey$1](true);
					if (state.isUnmounting) return remove();
					callHook(onBeforeLeave, [el]);
					let called = false;
					el[leaveCbKey] = (cancelled) => {
						if (called) return;
						called = true;
						remove();
						if (cancelled) callHook(onLeaveCancelled, [el]);
						else callHook(onAfterLeave, [el]);
						el[leaveCbKey] = void 0;
						if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
					};
					const done = el[leaveCbKey].bind(null, false);
					leavingVNodesCache[key2] = vnode;
					if (onLeave) callAsyncHook(onLeave, [el, done]);
					else done();
				},
				clone(vnode2) {
					const hooks2 = resolveTransitionHooks(vnode2, props, state, instance, postClone);
					if (postClone) postClone(hooks2);
					return hooks2;
				}
			};
			return hooks;
		}
		function emptyPlaceholder(vnode) {
			if (isKeepAlive(vnode)) {
				vnode = cloneVNode(vnode);
				vnode.children = null;
				return vnode;
			}
		}
		function getInnerChild$1(vnode) {
			if (!isKeepAlive(vnode)) {
				if (isTeleport(vnode.type) && vnode.children) return findNonCommentChild(vnode.children);
				return vnode;
			}
			if (vnode.component) return vnode.component.subTree;
			const { shapeFlag, children } = vnode;
			if (children) {
				if (shapeFlag & 16) return children[0];
				if (shapeFlag & 32 && isFunction$1(children.default)) return children.default();
			}
		}
		function setTransitionHooks(vnode, hooks) {
			if (vnode.shapeFlag & 6 && vnode.component) {
				vnode.transition = hooks;
				const subTree = vnode.component.subTree;
				setTransitionHooks(isTeleport(subTree.type) ? getInnerChild$1(subTree) || subTree : subTree, hooks);
			} else if (vnode.shapeFlag & 128) {
				vnode.ssContent.transition = hooks.clone(vnode.ssContent);
				vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
			} else vnode.transition = hooks;
		}
		function getTransitionRawChildren(children, keepComment = false, parentKey) {
			let ret = [];
			let keyedFragmentCount = 0;
			for (let i = 0; i < children.length; i++) {
				let child = children[i];
				const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
				if (child.type === Fragment) {
					if (child.patchFlag & 128) keyedFragmentCount++;
					ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
				} else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, { key }) : child);
			}
			if (keyedFragmentCount > 1) for (let i = 0; i < ret.length; i++) ret[i].patchFlag = -2;
			return ret;
		}
		function defineComponent(options, extraOptions) {
			return isFunction$1(options) ? (() => extend({ name: options.name }, extraOptions, { setup: options }))() : options;
		}
		function markAsyncBoundary(instance) {
			instance.ids = [
				instance.ids[0] + instance.ids[2]++ + "-",
				0,
				0
			];
		}
		function isTemplateRefKey(refs, key) {
			let desc;
			return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
		}
		function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
			if (isArray$1(rawRef)) {
				rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
				return;
			}
			if (isAsyncWrapper(vnode) && !isUnmount) {
				if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
				return;
			}
			const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
			const value = isUnmount ? null : refValue;
			const { i: owner, r: ref } = rawRef;
			const oldRef = oldRawRef && oldRawRef.r;
			const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
			const setupState = owner.setupState;
			const rawSetupState = toRaw(setupState);
			const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
				if (isTemplateRefKey(refs, key)) return false;
				return hasOwn(rawSetupState, key);
			};
			const canSetRef = (ref2, key) => {
				if (key && isTemplateRefKey(refs, key)) return false;
				return true;
			};
			if (oldRef != null && oldRef !== ref) {
				invalidatePendingSetRef(oldRawRef);
				if (isString(oldRef)) {
					refs[oldRef] = null;
					if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
				} else if (isRef(oldRef)) {
					const oldRawRefAtom = oldRawRef;
					if (canSetRef(oldRef, oldRawRefAtom.k)) oldRef.value = null;
					if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
				}
			}
			if (isFunction$1(ref)) callWithErrorHandling(ref, owner, 12, [value, refs]);
			else {
				const _isString = isString(ref);
				const _isRef = isRef(ref);
				if (_isString || _isRef) {
					const doSet = () => {
						if (rawRef.f) {
							const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef(ref) || !rawRef.k ? ref.value : refs[rawRef.k];
							if (isUnmount) isArray$1(existing) && remove(existing, refValue);
							else if (!isArray$1(existing)) {
								if (_isString) {
									refs[ref] = [refValue];
									if (canSetSetupRef(ref)) setupState[ref] = refs[ref];
								} else {
									const newVal = [refValue];
									if (canSetRef(ref, rawRef.k)) ref.value = newVal;
									if (rawRef.k) refs[rawRef.k] = newVal;
								}
							} else if (!existing.includes(refValue)) existing.push(refValue);
						} else if (_isString) {
							refs[ref] = value;
							if (canSetSetupRef(ref)) setupState[ref] = value;
						} else if (_isRef) {
							if (canSetRef(ref, rawRef.k)) ref.value = value;
							if (rawRef.k) refs[rawRef.k] = value;
						}
					};
					if (value) {
						const job = () => {
							doSet();
							pendingSetRefMap.delete(rawRef);
						};
						job.id = -1;
						pendingSetRefMap.set(rawRef, job);
						queuePostRenderEffect(job, parentSuspense);
					} else {
						invalidatePendingSetRef(rawRef);
						doSet();
					}
				}
			}
		}
		function invalidatePendingSetRef(rawRef) {
			const pendingSetRef = pendingSetRefMap.get(rawRef);
			if (pendingSetRef) {
				pendingSetRef.flags |= 8;
				pendingSetRefMap.delete(rawRef);
			}
		}
		function onActivated(hook, target) {
			registerKeepAliveHook(hook, "a", target);
		}
		function onDeactivated(hook, target) {
			registerKeepAliveHook(hook, "da", target);
		}
		function registerKeepAliveHook(hook, type, target = currentInstance) {
			const wrappedHook = hook.__wdc || (hook.__wdc = () => {
				let current = target;
				while (current) {
					if (current.isDeactivated) return;
					current = current.parent;
				}
				return hook();
			});
			injectHook(type, wrappedHook, target);
			if (target) {
				let current = target.parent;
				while (current && current.parent) {
					if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
					current = current.parent;
				}
			}
		}
		function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
			const injected = injectHook(type, hook, keepAliveRoot, true);
			onUnmounted(() => {
				remove(keepAliveRoot[type], injected);
			}, target);
		}
		function injectHook(type, hook, target = currentInstance, prepend = false) {
			if (target) {
				const hooks = target[type] || (target[type] = []);
				const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
					pauseTracking();
					const reset = setCurrentInstance(target);
					const res = callWithAsyncErrorHandling(hook, target, type, args);
					reset();
					resetTracking();
					return res;
				});
				if (prepend) hooks.unshift(wrappedHook);
				else hooks.push(wrappedHook);
				return wrappedHook;
			}
		}
		function onErrorCaptured(hook, target = currentInstance) {
			injectHook("ec", hook, target);
		}
		function resolveDynamicComponent(component) {
			if (isString(component)) return resolveAsset(COMPONENTS, component, false) || component;
			else return component || NULL_DYNAMIC_COMPONENT;
		}
		function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
			const instance = currentRenderingInstance || currentInstance;
			if (instance) {
				const Component = instance.type;
				if (type === COMPONENTS) {
					const selfName = getComponentName(Component, false);
					if (selfName && (selfName === name || selfName === camelize$1(name) || selfName === capitalize$1(camelize$1(name)))) return Component;
				}
				const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
				if (!res && maybeSelfReference) return Component;
				return res;
			}
		}
		function resolve(registry, name) {
			return registry && (registry[name] || registry[camelize$1(name)] || registry[capitalize$1(camelize$1(name))]);
		}
		function renderList(source, renderItem, cache, index) {
			let ret;
			const cached = cache && cache[index];
			const sourceIsArray = isArray$1(source);
			if (sourceIsArray || isString(source)) {
				const sourceIsReactiveArray = sourceIsArray && isReactive(source);
				let needsWrap = false;
				let isReadonlySource = false;
				if (sourceIsReactiveArray) {
					needsWrap = !isShallow(source);
					isReadonlySource = isReadonly(source);
					source = shallowReadArray(source);
				}
				ret = new Array(source.length);
				for (let i = 0, l = source.length; i < l; i++) ret[i] = renderItem(needsWrap ? isReadonlySource ? toReadonly(toReactive$1(source[i])) : toReactive$1(source[i]) : source[i], i, void 0, cached && cached[i]);
			} else if (typeof source === "number") {
				ret = new Array(source);
				for (let i = 0; i < source; i++) ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
			} else if (isObject$2(source)) {
				if (source[Symbol.iterator]) ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
				else {
					const keys = Object.keys(source);
					ret = new Array(keys.length);
					for (let i = 0, l = keys.length; i < l; i++) {
						const key = keys[i];
						ret[i] = renderItem(source[key], key, i, cached && cached[i]);
					}
				}
			} else ret = [];
			if (cache) cache[index] = ret;
			return ret;
		}
		function createSlots(slots, dynamicSlots) {
			for (let i = 0; i < dynamicSlots.length; i++) {
				const slot = dynamicSlots[i];
				if (isArray$1(slot)) for (let j = 0; j < slot.length; j++) slots[slot[j].name] = slot[j].fn;
				else if (slot) slots[slot.name] = slot.key ? (...args) => {
					const res = slot.fn(...args);
					if (res) res.key = slot.key;
					return res;
				} : slot.fn;
			}
			return slots;
		}
		function renderSlot(slots, name, props, fallback, noSlotted, branchKey) {
			if (props == null) props = {};
			if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
				const slotProps = branchKey != null && props.key == null ? extend({}, props, { key: branchKey }) : props;
				const hasProps = Object.keys(slotProps).length > 0;
				if (name !== "default") slotProps.name = name;
				return openBlock(), createBlock(Fragment, null, [createVNode("slot", slotProps, fallback && fallback())], hasProps ? -2 : 64);
			}
			let slot = slots[name];
			if (slot && slot._c) slot._d = false;
			const prevStackSize = blockStack.length;
			openBlock();
			let rendered;
			try {
				const validSlotContent = slot && ensureValidVNode(slot(props));
				const slotKey = props.key || branchKey || validSlotContent && validSlotContent.key;
				rendered = createBlock(Fragment, { key: (slotKey && !isSymbol$1(slotKey) ? slotKey : `_${name}`) + (!validSlotContent && fallback ? "_fb" : "") }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
			} catch (err) {
				for (let i = blockStack.length; i > prevStackSize; i--) closeBlock();
				throw err;
			} finally {
				if (slot && slot._c) slot._d = true;
			}
			if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [rendered.scopeId + "-s"];
			return rendered;
		}
		function ensureValidVNode(vnodes) {
			return vnodes.some((child) => {
				if (!isVNode(child)) return true;
				if (child.type === Comment) return false;
				if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
				return true;
			}) ? vnodes : null;
		}
		function toHandlers(obj, preserveCaseIfNecessary) {
			const ret = {};
			for (const key in obj) ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
			return ret;
		}
		function useSlots() {
			return getContext("useSlots").slots;
		}
		function useAttrs$1() {
			return getContext("useAttrs").attrs;
		}
		function getContext(calledFunctionName) {
			const i = getCurrentInstance();
			return i.setupContext || (i.setupContext = createSetupContext(i));
		}
		function normalizePropsOrEmits(props) {
			return isArray$1(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
		}
		function mergeModels(a, b) {
			if (!a || !b) return a || b;
			if (isArray$1(a) && isArray$1(b)) return a.concat(b);
			return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
		}
		function applyOptions(instance) {
			const options = resolveMergedOptions(instance);
			const publicThis = instance.proxy;
			const ctx = instance.ctx;
			shouldCacheAccess = false;
			if (options.beforeCreate) callHook$1(options.beforeCreate, instance, "bc");
			const { data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters } = options;
			const checkDuplicateProperties = null;
			if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
			if (methods) for (const key in methods) {
				const methodHandler = methods[key];
				if (isFunction$1(methodHandler)) ctx[key] = methodHandler.bind(publicThis);
			}
			if (dataOptions) {
				const data = dataOptions.call(publicThis, publicThis);
				if (!isObject$2(data)) {} else instance.data = reactive(data);
			}
			shouldCacheAccess = true;
			if (computedOptions) for (const key in computedOptions) {
				const opt = computedOptions[key];
				const get = isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
				const set = !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : NOOP;
				const c = computed({
					get,
					set
				});
				Object.defineProperty(ctx, key, {
					enumerable: true,
					configurable: true,
					get: () => c.value,
					set: (v) => c.value = v
				});
			}
			if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
			if (provideOptions) {
				const provides = isFunction$1(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
				Reflect.ownKeys(provides).forEach((key) => {
					provide(key, provides[key]);
				});
			}
			if (created) callHook$1(created, instance, "c");
			function registerLifecycleHook(register, hook) {
				if (isArray$1(hook)) hook.forEach((_hook) => register(_hook.bind(publicThis)));
				else if (hook) register(hook.bind(publicThis));
			}
			registerLifecycleHook(onBeforeMount, beforeMount);
			registerLifecycleHook(onMounted, mounted);
			registerLifecycleHook(onBeforeUpdate, beforeUpdate);
			registerLifecycleHook(onUpdated, updated);
			registerLifecycleHook(onActivated, activated);
			registerLifecycleHook(onDeactivated, deactivated);
			registerLifecycleHook(onErrorCaptured, errorCaptured);
			registerLifecycleHook(onRenderTracked, renderTracked);
			registerLifecycleHook(onRenderTriggered, renderTriggered);
			registerLifecycleHook(onBeforeUnmount, beforeUnmount);
			registerLifecycleHook(onUnmounted, unmounted);
			registerLifecycleHook(onServerPrefetch, serverPrefetch);
			if (isArray$1(expose)) {
				if (expose.length) {
					const exposed = instance.exposed || (instance.exposed = {});
					expose.forEach((key) => {
						Object.defineProperty(exposed, key, {
							get: () => publicThis[key],
							set: (val) => publicThis[key] = val,
							enumerable: true
						});
					});
				} else if (!instance.exposed) instance.exposed = {};
			}
			if (render && instance.render === NOOP) instance.render = render;
			if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
			if (components) instance.components = components;
			if (directives) instance.directives = directives;
			if (serverPrefetch) markAsyncBoundary(instance);
		}
		function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
			if (isArray$1(injectOptions)) injectOptions = normalizeInject(injectOptions);
			for (const key in injectOptions) {
				const opt = injectOptions[key];
				let injected;
				if (isObject$2(opt)) {
					if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
					else injected = inject(opt.from || key);
				} else injected = inject(opt);
				if (isRef(injected)) Object.defineProperty(ctx, key, {
					enumerable: true,
					configurable: true,
					get: () => injected.value,
					set: (v) => injected.value = v
				});
				else ctx[key] = injected;
			}
		}
		function callHook$1(hook, instance, type) {
			callWithAsyncErrorHandling(isArray$1(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
		}
		function createWatcher(raw, ctx, publicThis, key) {
			let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
			if (isString(raw)) {
				const handler = ctx[raw];
				if (isFunction$1(handler)) watch(getter, handler);
			} else if (isFunction$1(raw)) watch(getter, raw.bind(publicThis));
			else if (isObject$2(raw)) {
				if (isArray$1(raw)) raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
				else {
					const handler = isFunction$1(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
					if (isFunction$1(handler)) watch(getter, handler, raw);
				}
			}
		}
		function resolveMergedOptions(instance) {
			const base = instance.type;
			const { mixins, extends: extendsOptions } = base;
			const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
			const cached = cache.get(base);
			let resolved;
			if (cached) resolved = cached;
			else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
			else {
				resolved = {};
				if (globalMixins.length) globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
				mergeOptions(resolved, base, optionMergeStrategies);
			}
			if (isObject$2(base)) cache.set(base, resolved);
			return resolved;
		}
		function mergeOptions(to, from, strats, asMixin = false) {
			const { mixins, extends: extendsOptions } = from;
			if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
			if (mixins) mixins.forEach((m) => mergeOptions(to, m, strats, true));
			for (const key in from) if (asMixin && key === "expose") {} else {
				const strat = internalOptionMergeStrats[key] || strats && strats[key];
				to[key] = strat ? strat(to[key], from[key]) : from[key];
			}
			return to;
		}
		function mergeDataFn(to, from) {
			if (!from) return to;
			if (!to) return from;
			return function mergedDataFn() {
				return extend(isFunction$1(to) ? to.call(this, this) : to, isFunction$1(from) ? from.call(this, this) : from);
			};
		}
		function mergeInject(to, from) {
			return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
		}
		function normalizeInject(raw) {
			if (isArray$1(raw)) {
				const res = {};
				for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
				return res;
			}
			return raw;
		}
		function mergeAsArray(to, from) {
			return to ? [...new Set([].concat(to, from))] : from;
		}
		function mergeObjectOptions(to, from) {
			return to ? extend(Object.create(null), to, from) : from;
		}
		function mergeEmitsOrPropsOptions(to, from) {
			if (to) {
				if (isArray$1(to) && isArray$1(from)) return [...new Set([...to, ...from])];
				return extend(Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
			} else return from;
		}
		function mergeWatchOptions(to, from) {
			if (!to) return from;
			if (!from) return to;
			const merged = extend(Object.create(null), to);
			for (const key in from) merged[key] = mergeAsArray(to[key], from[key]);
			return merged;
		}
		function createAppContext() {
			return {
				app: null,
				config: {
					isNativeTag: NO,
					performance: false,
					globalProperties: {},
					optionMergeStrategies: {},
					errorHandler: void 0,
					warnHandler: void 0,
					compilerOptions: {}
				},
				mixins: [],
				components: {},
				directives: {},
				provides: Object.create(null),
				optionsCache: new WeakMap(),
				propsCache: new WeakMap(),
				emitsCache: new WeakMap()
			};
		}
		function createAppAPI(render, hydrate) {
			return function createApp(rootComponent, rootProps = null) {
				if (!isFunction$1(rootComponent)) rootComponent = extend({}, rootComponent);
				if (rootProps != null && !isObject$2(rootProps)) rootProps = null;
				const context = createAppContext();
				const installedPlugins = new WeakSet();
				const pluginCleanupFns = [];
				let isMounted = false;
				const app = context.app = {
					_uid: uid$1++,
					_component: rootComponent,
					_props: rootProps,
					_container: null,
					_context: context,
					_instance: null,
					version,
					get config() {
						return context.config;
					},
					set config(v) {},
					use(plugin, ...options) {
						if (installedPlugins.has(plugin)) {} else if (plugin && isFunction$1(plugin.install)) {
							installedPlugins.add(plugin);
							plugin.install(app, ...options);
						} else if (isFunction$1(plugin)) {
							installedPlugins.add(plugin);
							plugin(app, ...options);
						}
						return app;
					},
					mixin(mixin) {
						if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
						return app;
					},
					component(name, component) {
						if (!component) return context.components[name];
						context.components[name] = component;
						return app;
					},
					directive(name, directive) {
						if (!directive) return context.directives[name];
						context.directives[name] = directive;
						return app;
					},
					mount(rootContainer, isHydrate, namespace) {
						if (!isMounted) {
							const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
							vnode.appContext = context;
							if (namespace === true) namespace = "svg";
							else if (namespace === false) namespace = void 0;
							if (isHydrate && hydrate) hydrate(vnode, rootContainer);
							else render(vnode, rootContainer, namespace);
							isMounted = true;
							app._container = rootContainer;
							rootContainer.__vue_app__ = app;
							return getComponentPublicInstance(vnode.component);
						}
					},
					onUnmount(cleanupFn) {
						pluginCleanupFns.push(cleanupFn);
					},
					unmount() {
						if (isMounted) {
							callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
							render(null, app._container);
							delete app._container.__vue_app__;
						}
					},
					provide(key, value) {
						context.provides[key] = value;
						return app;
					},
					runWithContext(fn) {
						const lastApp = currentApp;
						currentApp = app;
						try {
							return fn();
						} finally {
							currentApp = lastApp;
						}
					}
				};
				return app;
			};
		}
		function useModel(props, name, options = EMPTY_OBJ) {
			const i = getCurrentInstance();
			const camelizedName = camelize$1(name);
			const hyphenatedName = hyphenate$1(name);
			const modifiers = getModelModifiers(props, camelizedName);
			const res = customRef((track, trigger) => {
				let localValue;
				let prevSetValue = EMPTY_OBJ;
				let prevEmittedValue;
				watchSyncEffect(() => {
					const propValue = props[camelizedName];
					if (hasChanged(localValue, propValue)) {
						localValue = propValue;
						trigger();
					}
				});
				return {
					get() {
						track();
						return options.get ? options.get(localValue) : localValue;
					},
					set(value) {
						const emittedValue = options.set ? options.set(value) : value;
						if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) return;
						const rawProps = i.vnode.props;
						const hasVModel = !!(rawProps && (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps));
						if (!hasVModel) {
							localValue = value;
							trigger();
						}
						i.emit(`update:${name}`, emittedValue);
						if (hasChanged(value, prevSetValue) && (hasChanged(value, emittedValue) && !hasChanged(emittedValue, prevEmittedValue) || hasVModel && prevSetValue !== EMPTY_OBJ && !hasChanged(emittedValue, localValue))) trigger();
						prevSetValue = value;
						prevEmittedValue = emittedValue;
					}
				};
			});
			res[Symbol.iterator] = () => {
				let i2 = 0;
				return { next() {
					if (i2 < 2) return {
						value: i2++ ? modifiers || EMPTY_OBJ : res,
						done: false
					};
					else return { done: true };
				} };
			};
			return res;
		}
		function emit(instance, event, ...rawArgs) {
			if (instance.isUnmounted) return;
			const props = instance.vnode.props || EMPTY_OBJ;
			let args = rawArgs;
			const isModelListener = event.startsWith("update:");
			const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
			if (modifiers) {
				if (modifiers.trim) args = rawArgs.map((a) => isString(a) ? a.trim() : a);
				if (modifiers.number) args = args.map(looseToNumber$1);
			}
			let handlerName;
			let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize$1(event))];
			if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate$1(event))];
			if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
			const onceHandler = props[handlerName + `Once`];
			if (onceHandler) {
				if (!instance.emitted) instance.emitted = {};
				else if (instance.emitted[handlerName]) return;
				instance.emitted[handlerName] = true;
				callWithAsyncErrorHandling(onceHandler, instance, 6, args);
			}
		}
		function normalizeEmitsOptions(comp, appContext, asMixin = false) {
			const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
			const cached = cache.get(comp);
			if (cached !== void 0) return cached;
			const raw = comp.emits;
			let normalized = {};
			let hasExtends = false;
			if (!isFunction$1(comp)) {
				const extendEmits = (raw2) => {
					const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
					if (normalizedFromExtend) {
						hasExtends = true;
						extend(normalized, normalizedFromExtend);
					}
				};
				if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
				if (comp.extends) extendEmits(comp.extends);
				if (comp.mixins) comp.mixins.forEach(extendEmits);
			}
			if (!raw && !hasExtends) {
				if (isObject$2(comp)) cache.set(comp, null);
				return null;
			}
			if (isArray$1(raw)) raw.forEach((key) => normalized[key] = null);
			else extend(normalized, raw);
			if (isObject$2(comp)) cache.set(comp, normalized);
			return normalized;
		}
		function isEmitListener(options, key) {
			if (!options || !isOn(key)) return false;
			key = key.slice(2);
			key = key === "Once" ? key : key.replace(/Once$/, "");
			return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate$1(key)) || hasOwn(options, key);
		}
		function renderComponentRoot(instance) {
			const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
			const prev = setCurrentRenderingInstance(instance);
			let result;
			let fallthroughAttrs;
			try {
				if (vnode.shapeFlag & 4) {
					const proxyToUse = withProxy || proxy;
					const thisProxy = proxyToUse;
					result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
					fallthroughAttrs = attrs;
				} else {
					const render2 = Component;
					result = normalizeVNode(render2.length > 1 ? render2(props, {
						attrs,
						slots,
						emit
					}) : render2(props, null));
					fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
				}
			} catch (err) {
				blockStack.length = 0;
				handleError(err, instance, 1);
				result = createVNode(Comment);
			}
			let root = result;
			if (fallthroughAttrs && inheritAttrs !== false) {
				const keys = Object.keys(fallthroughAttrs);
				const { shapeFlag } = root;
				if (keys.length) {
					if (shapeFlag & 7) {
						if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
						root = cloneVNode(root, fallthroughAttrs, false, true);
					}
				}
			}
			if (vnode.dirs) {
				root = cloneVNode(root, null, false, true);
				root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
			}
			if (vnode.transition) setTransitionHooks(isTeleport(root.type) ? getInnerChild$1(root) || root : root, vnode.transition);
			result = root;
			setCurrentRenderingInstance(prev);
			return result;
		}
		function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
			const { props: prevProps, children: prevChildren, component } = prevVNode;
			const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
			const emits = component.emitsOptions;
			if (nextVNode.dirs || nextVNode.transition) return true;
			if (optimized && patchFlag >= 0) {
				if (patchFlag & 1024) return true;
				if (patchFlag & 16) {
					if (!prevProps) return !!nextProps;
					return hasPropsChanged(prevProps, nextProps, emits);
				} else if (patchFlag & 8) {
					const dynamicProps = nextVNode.dynamicProps;
					for (let i = 0; i < dynamicProps.length; i++) {
						const key = dynamicProps[i];
						if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) return true;
					}
				}
			} else {
				if (prevChildren || nextChildren) {
					if (!nextChildren || !nextChildren.$stable) return true;
				}
				if (prevProps === nextProps) return false;
				if (!prevProps) return !!nextProps;
				if (!nextProps) return true;
				return hasPropsChanged(prevProps, nextProps, emits);
			}
			return false;
		}
		function hasPropsChanged(prevProps, nextProps, emitsOptions) {
			const nextKeys = Object.keys(nextProps);
			if (nextKeys.length !== Object.keys(prevProps).length) return true;
			for (let i = 0; i < nextKeys.length; i++) {
				const key = nextKeys[i];
				if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) return true;
			}
			return false;
		}
		function hasPropValueChanged(nextProps, prevProps, key) {
			const nextProp = nextProps[key];
			const prevProp = prevProps[key];
			if (key === "style" && isObject$2(nextProp) && isObject$2(prevProp)) return !looseEqual(nextProp, prevProp);
			return nextProp !== prevProp;
		}
		function updateHOCHostEl({ vnode, parent, suspense }, el) {
			while (parent) {
				const root = parent.subTree;
				if (root.suspense && root.suspense.activeBranch === vnode) {
					root.suspense.vnode.el = root.el = el;
					vnode = root;
				}
				if (root === vnode) {
					(vnode = parent.vnode).el = el;
					parent = parent.parent;
				} else break;
			}
			if (suspense && suspense.activeBranch === vnode) suspense.vnode.el = el;
		}
		function initProps(instance, rawProps, isStateful, isSSR = false) {
			const props = {};
			const attrs = createInternalObject();
			instance.propsDefaults = Object.create(null);
			setFullProps(instance, rawProps, props, attrs);
			for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
			if (isStateful) instance.props = isSSR ? props : shallowReactive(props);
			else if (!instance.type.props) instance.props = attrs;
			else instance.props = props;
			instance.attrs = attrs;
		}
		function updateProps(instance, rawProps, rawPrevProps, optimized) {
			const { props, attrs, vnode: { patchFlag } } = instance;
			const rawCurrentProps = toRaw(props);
			const [options] = instance.propsOptions;
			let hasAttrsChanged = false;
			if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
				if (patchFlag & 8) {
					const propsToUpdate = instance.vnode.dynamicProps;
					for (let i = 0; i < propsToUpdate.length; i++) {
						let key = propsToUpdate[i];
						if (isEmitListener(instance.emitsOptions, key)) continue;
						const value = rawProps[key];
						if (options) {
							if (hasOwn(attrs, key)) {
								if (value !== attrs[key]) {
									attrs[key] = value;
									hasAttrsChanged = true;
								}
							} else {
								const camelizedKey = camelize$1(key);
								props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
							}
						} else if (value !== attrs[key]) {
							attrs[key] = value;
							hasAttrsChanged = true;
						}
					}
				}
			} else {
				if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
				let kebabKey;
				for (const key in rawCurrentProps) if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate$1(key)) === key || !hasOwn(rawProps, kebabKey))) {
					if (options) {
						if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
					} else delete props[key];
				}
				if (attrs !== rawCurrentProps) {
					for (const key in attrs) if (!rawProps || !hasOwn(rawProps, key) && true) {
						delete attrs[key];
						hasAttrsChanged = true;
					}
				}
			}
			if (hasAttrsChanged) trigger(instance.attrs, "set", "");
		}
		function setFullProps(instance, rawProps, props, attrs) {
			const [options, needCastKeys] = instance.propsOptions;
			let hasAttrsChanged = false;
			let rawCastValues;
			if (rawProps) for (let key in rawProps) {
				if (isReservedProp(key)) continue;
				const value = rawProps[key];
				let camelKey;
				if (options && hasOwn(options, camelKey = camelize$1(key))) {
					if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
					else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
				} else if (!isEmitListener(instance.emitsOptions, key)) {
					if (!(key in attrs) || value !== attrs[key]) {
						attrs[key] = value;
						hasAttrsChanged = true;
					}
				}
			}
			if (needCastKeys) {
				const rawCurrentProps = toRaw(props);
				const castValues = rawCastValues || EMPTY_OBJ;
				for (let i = 0; i < needCastKeys.length; i++) {
					const key = needCastKeys[i];
					props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
				}
			}
			return hasAttrsChanged;
		}
		function resolvePropValue(options, props, key, value, instance, isAbsent) {
			const opt = options[key];
			if (opt != null) {
				const hasDefault = hasOwn(opt, "default");
				if (hasDefault && value === void 0) {
					const defaultValue = opt.default;
					if (opt.type !== Function && !opt.skipFactory && isFunction$1(defaultValue)) {
						const { propsDefaults } = instance;
						if (key in propsDefaults) value = propsDefaults[key];
						else {
							const reset = setCurrentInstance(instance);
							value = propsDefaults[key] = defaultValue.call(null, props);
							reset();
						}
					} else value = defaultValue;
					if (instance.ce) instance.ce._setProp(key, value);
				}
				if (opt[0]) {
					if (isAbsent && !hasDefault) value = false;
					else if (opt[1] && (value === "" || value === hyphenate$1(key))) value = true;
				}
			}
			return value;
		}
		function normalizePropsOptions(comp, appContext, asMixin = false) {
			const cache = asMixin ? mixinPropsCache : appContext.propsCache;
			const cached = cache.get(comp);
			if (cached) return cached;
			const raw = comp.props;
			const normalized = {};
			const needCastKeys = [];
			let hasExtends = false;
			if (!isFunction$1(comp)) {
				const extendProps = (raw2) => {
					hasExtends = true;
					const [props, keys] = normalizePropsOptions(raw2, appContext, true);
					extend(normalized, props);
					if (keys) needCastKeys.push(...keys);
				};
				if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
				if (comp.extends) extendProps(comp.extends);
				if (comp.mixins) comp.mixins.forEach(extendProps);
			}
			if (!raw && !hasExtends) {
				if (isObject$2(comp)) cache.set(comp, EMPTY_ARR);
				return EMPTY_ARR;
			}
			if (isArray$1(raw)) for (let i = 0; i < raw.length; i++) {
				const normalizedKey = camelize$1(raw[i]);
				if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
			}
			else if (raw) for (const key in raw) {
				const normalizedKey = camelize$1(key);
				if (validatePropName(normalizedKey)) {
					const opt = raw[key];
					const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction$1(opt) ? { type: opt } : extend({}, opt);
					const propType = prop.type;
					let shouldCast = false;
					let shouldCastTrue = true;
					if (isArray$1(propType)) for (let index = 0; index < propType.length; ++index) {
						const type = propType[index];
						const typeName = isFunction$1(type) && type.name;
						if (typeName === "Boolean") {
							shouldCast = true;
							break;
						} else if (typeName === "String") shouldCastTrue = false;
					}
					else shouldCast = isFunction$1(propType) && propType.name === "Boolean";
					prop[0] = shouldCast;
					prop[1] = shouldCastTrue;
					if (shouldCast || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
				}
			}
			const res = [normalized, needCastKeys];
			if (isObject$2(comp)) cache.set(comp, res);
			return res;
		}
		function validatePropName(key) {
			if (key[0] !== "$" && !isReservedProp(key)) return true;
			return false;
		}
		function createRenderer(options) {
			return baseCreateRenderer(options);
		}
		function baseCreateRenderer(options, createHydrationFns) {
			const target = getGlobalThis();
			target.__VUE__ = true;
			const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
			const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
				if (n1 === n2) return;
				if (n1 && !isSameVNodeType(n1, n2)) {
					anchor = getNextHostNode(n1);
					unmount(n1, parentComponent, parentSuspense, true);
					n1 = null;
				}
				if (n2.patchFlag === -2) {
					optimized = false;
					n2.dynamicChildren = null;
				}
				if (n2.dynamicChildren && n1 && n1.dynamicChildren && n1.dynamicChildren.hasOnce) {
					if (n2.dynamicChildren === EMPTY_ARR) n2.dynamicChildren = [];
					n2.dynamicChildren.hasOnce = true;
				}
				const { type, ref, shapeFlag } = n2;
				switch (type) {
					case Text:
						processText(n1, n2, container, anchor);
						break;
					case Comment:
						processCommentNode(n1, n2, container, anchor);
						break;
					case Static:
						if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
						break;
					case Fragment:
						processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
						break;
					default: if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
					else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
				}
				if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
				else if (ref == null && n1 && n1.ref != null) setRef(n1.ref, null, parentSuspense, n1, true);
			};
			const processText = (n1, n2, container, anchor) => {
				if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
				else {
					const el = n2.el = n1.el;
					if (n2.children !== n1.children) hostSetText(el, n2.children);
				}
			};
			const processCommentNode = (n1, n2, container, anchor) => {
				if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
				else n2.el = n1.el;
			};
			const mountStaticNode = (n2, container, anchor, namespace) => {
				[n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
			};
			const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
				let next;
				while (el && el !== anchor) {
					next = hostNextSibling(el);
					hostInsert(el, container, nextSibling);
					el = next;
				}
				hostInsert(anchor, container, nextSibling);
			};
			const removeStaticNode = ({ el, anchor }) => {
				let next;
				while (el && el !== anchor) {
					next = hostNextSibling(el);
					hostRemove(el);
					el = next;
				}
				hostRemove(anchor);
			};
			const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
				if (n2.type === "svg") namespace = "svg";
				else if (n2.type === "math") namespace = "mathml";
				if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else {
					const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
					try {
						if (customElement) customElement._beginPatch();
						patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					} finally {
						if (customElement) customElement._endPatch();
					}
				}
			};
			const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
				let el;
				let vnodeHook;
				const { props, shapeFlag, transition, dirs } = vnode;
				el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
				if (shapeFlag & 8) hostSetElementText(el, vnode.children);
				else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
				if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
				setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
				if (props) {
					for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
					if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
					if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
				}
				if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
				const needCallTransitionHooks = needTransition(parentSuspense, transition);
				if (needCallTransitionHooks) transition.beforeEnter(el);
				hostInsert(el, container, anchor);
				if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(() => {
					try {
						vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
						needCallTransitionHooks && transition.enter(el);
						dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
					} finally {}
				}, parentSuspense);
			};
			const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
				if (scopeId) hostSetScopeId(el, scopeId);
				if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
				if (parentComponent) {
					let subTree = parentComponent.subTree;
					if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
						const parentVNode = parentComponent.vnode;
						setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
					}
				}
			};
			const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
				for (let i = start; i < children.length; i++) {
					const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
					patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				}
			};
			const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
				const el = n2.el = n1.el;
				let { patchFlag, dynamicChildren, dirs } = n2;
				patchFlag |= n1.patchFlag & 16;
				const oldProps = n1.props || EMPTY_OBJ;
				const newProps = n2.props || EMPTY_OBJ;
				let vnodeHook;
				parentComponent && toggleRecurse(parentComponent, false);
				if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
				if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
				parentComponent && toggleRecurse(parentComponent, true);
				if (dynamicChildren && (!n1.dynamicChildren || n1.dynamicChildren.length !== dynamicChildren.length)) {
					patchFlag = 0;
					optimized = false;
					dynamicChildren = null;
				}
				if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
				if (dynamicChildren) patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
				else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
				if (patchFlag > 0) {
					if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
					else {
						if (patchFlag & 2) {
							if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
						}
						if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
						if (patchFlag & 8) {
							const propsToUpdate = n2.dynamicProps;
							for (let i = 0; i < propsToUpdate.length; i++) {
								const key = propsToUpdate[i];
								const prev = oldProps[key];
								const next = newProps[key];
								if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
							}
						}
					}
					if (patchFlag & 1) {
						if (n1.children !== n2.children) hostSetElementText(el, n2.children);
					}
				} else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
				if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(() => {
					vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
					dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
				}, parentSuspense);
			};
			const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
				for (let i = 0; i < newChildren.length; i++) {
					const oldVNode = oldChildren[i];
					const newVNode = newChildren[i];
					const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 198) ? hostParentNode(oldVNode.el) : fallbackContainer;
					patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
				}
			};
			const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
				if (oldProps !== newProps) {
					if (oldProps !== EMPTY_OBJ) {
						for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
					}
					for (const key in newProps) {
						if (isReservedProp(key)) continue;
						const next = newProps[key];
						const prev = oldProps[key];
						if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
					}
					if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
				}
			};
			const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
				const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
				const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
				let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
				if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
				if (n1 == null) {
					hostInsert(fragmentStartAnchor, container, anchor);
					hostInsert(fragmentEndAnchor, container, anchor);
					mountChildren(n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				} else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
					patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
					if (n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
				} else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			};
			const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
				n2.slotScopeIds = slotScopeIds;
				if (n1 == null) {
					if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
					else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
				} else updateComponent(n1, n2, optimized);
			};
			const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
				const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
				if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
				setupComponent(instance, false, optimized);
				if (instance.asyncDep) {
					parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
					if (!initialVNode.el) {
						const placeholder = instance.subTree = createVNode(Comment);
						processCommentNode(null, placeholder, container, anchor);
						initialVNode.placeholder = placeholder.el;
					}
				} else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
			};
			const updateComponent = (n1, n2, optimized) => {
				const instance = n2.component = n1.component;
				if (shouldUpdateComponent(n1, n2, optimized)) {
					if (instance.asyncDep && !instance.asyncResolved) {
						n2.el = n1.el;
						updateComponentPreRender(instance, n2, optimized);
						return;
					} else {
						instance.next = n2;
						instance.update();
					}
				} else {
					n2.el = n1.el;
					instance.vnode = n2;
				}
			};
			const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
				const componentUpdateFn = () => {
					if (!instance.isMounted) {
						let vnodeHook;
						const { el, props } = initialVNode;
						const { bm, m, parent, root, type } = instance;
						const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
						toggleRecurse(instance, false);
						if (bm) invokeArrayFns(bm);
						if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
						toggleRecurse(instance, true);
						if (el && hydrateNode) {
							const hydrateSubTree = () => {
								instance.subTree = renderComponentRoot(instance);
								hydrateNode(el, instance.subTree, instance, parentSuspense, null);
							};
							if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
							else hydrateSubTree();
						} else {
							if (root.ce && root.ce._hasShadowRoot()) root.ce._injectChildStyle(type, instance.parent ? instance.parent.type : void 0);
							const subTree = instance.subTree = renderComponentRoot(instance);
							patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
							initialVNode.el = subTree.el;
						}
						if (m) queuePostRenderEffect(m, parentSuspense);
						if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
							const scopedInitialVNode = initialVNode;
							queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
						}
						if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
						instance.isMounted = true;
						initialVNode = container = anchor = null;
					} else {
						let { next, bu, u, parent, vnode } = instance;
						{
							const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
							if (nonHydratedAsyncRoot) {
								if (next) {
									next.el = vnode.el;
									updateComponentPreRender(instance, next, optimized);
								}
								nonHydratedAsyncRoot.asyncDep.then(() => {
									queuePostRenderEffect(() => {
										if (!instance.isUnmounted) update();
									}, parentSuspense);
								});
								return;
							}
						}
						let originNext = next;
						let vnodeHook;
						toggleRecurse(instance, false);
						if (next) {
							next.el = vnode.el;
							updateComponentPreRender(instance, next, optimized);
						} else next = vnode;
						if (bu) invokeArrayFns(bu);
						if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
						toggleRecurse(instance, true);
						const nextTree = renderComponentRoot(instance);
						const prevTree = instance.subTree;
						instance.subTree = nextTree;
						patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, namespace);
						next.el = nextTree.el;
						if (originNext === null) updateHOCHostEl(instance, nextTree.el);
						if (u) queuePostRenderEffect(u, parentSuspense);
						if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
					}
				};
				instance.scope.on();
				const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
				instance.scope.off();
				const update = instance.update = effect.run.bind(effect);
				const job = instance.job = effect.runIfDirty.bind(effect);
				job.i = instance;
				job.id = instance.uid;
				effect.scheduler = () => queueJob(job);
				toggleRecurse(instance, true);
				update();
			};
			const updateComponentPreRender = (instance, nextVNode, optimized) => {
				nextVNode.component = instance;
				const prevProps = instance.vnode.props;
				instance.vnode = nextVNode;
				instance.next = null;
				updateProps(instance, nextVNode.props, prevProps, optimized);
				updateSlots(instance, nextVNode.children, optimized);
				pauseTracking();
				flushPreFlushCbs(instance);
				resetTracking();
			};
			const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
				const c1 = n1 && n1.children;
				const prevShapeFlag = n1 ? n1.shapeFlag : 0;
				const c2 = n2.children;
				const { patchFlag, shapeFlag } = n2;
				if (patchFlag > 0) {
					if (patchFlag & 128) {
						patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
						return;
					} else if (patchFlag & 256) {
						patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
						return;
					}
				}
				if (shapeFlag & 8) {
					if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
					if (c2 !== c1) hostSetElementText(container, c2);
				} else if (prevShapeFlag & 16) {
					if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					else unmountChildren(c1, parentComponent, parentSuspense, true);
				} else {
					if (prevShapeFlag & 8) hostSetElementText(container, "");
					if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				}
			};
			const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
				c1 = c1 || EMPTY_ARR;
				c2 = c2 || EMPTY_ARR;
				const oldLength = c1.length;
				const newLength = c2.length;
				const commonLength = Math.min(oldLength, newLength);
				let i = 0;
				for (; i < commonLength; i++) {
					const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
					patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				}
				if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
				else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
			};
			const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
				let i = 0;
				const l2 = c2.length;
				let e1 = c1.length - 1;
				let e2 = l2 - 1;
				while (i <= e1 && i <= e2) {
					const n1 = c1[i];
					const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
					if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					else break;
					i++;
				}
				while (i <= e1 && i <= e2) {
					const n1 = c1[e1];
					const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
					if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					else break;
					e1--;
					e2--;
				}
				if (i > e1) {
					if (i <= e2) {
						const nextPos = e2 + 1;
						const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
						while (i <= e2) {
							patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
							i++;
						}
					}
				} else if (i > e2) while (i <= e1) {
					unmount(c1[i], parentComponent, parentSuspense, true);
					i++;
				}
				else {
					const s1 = i;
					const s2 = i;
					const keyToNewIndexMap = new Map();
					for (i = s2; i <= e2; i++) {
						const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
						if (nextChild.key != null) keyToNewIndexMap.set(nextChild.key, i);
					}
					let j;
					let patched = 0;
					const toBePatched = e2 - s2 + 1;
					let moved = false;
					let maxNewIndexSoFar = 0;
					const newIndexToOldIndexMap = new Array(toBePatched);
					for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
					for (i = s1; i <= e1; i++) {
						const prevChild = c1[i];
						if (patched >= toBePatched) {
							unmount(prevChild, parentComponent, parentSuspense, true);
							continue;
						}
						let newIndex;
						if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
						else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
							newIndex = j;
							break;
						}
						if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
						else {
							newIndexToOldIndexMap[newIndex - s2] = i + 1;
							if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
							else moved = true;
							patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
							patched++;
						}
					}
					const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
					j = increasingNewIndexSequence.length - 1;
					for (i = toBePatched - 1; i >= 0; i--) {
						const nextIndex = s2 + i;
						const nextChild = c2[nextIndex];
						const anchorVNode = c2[nextIndex + 1];
						const anchor = nextIndex + 1 < l2 ? anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode) : parentAnchor;
						if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
						else if (moved) {
							if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
							else j--;
						}
					}
				}
			};
			const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
				const { el, type, transition, children, shapeFlag } = vnode;
				if (shapeFlag & 6) {
					move(vnode.component.subTree, container, anchor, moveType);
					return;
				}
				if (shapeFlag & 128) {
					vnode.suspense.move(container, anchor, moveType);
					return;
				}
				if (shapeFlag & 64) {
					type.move(vnode, container, anchor, internals);
					return;
				}
				if (type === Fragment) {
					hostInsert(el, container, anchor);
					for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
					hostInsert(vnode.anchor, container, anchor);
					return;
				}
				if (type === Static) {
					moveStaticNode(vnode, container, anchor);
					return;
				}
				if (moveType !== 2 && shapeFlag & 1 && transition) {
					if (moveType === 0) {
						if (transition.persisted && !el[leaveCbKey]) hostInsert(el, container, anchor);
						else {
							transition.beforeEnter(el);
							hostInsert(el, container, anchor);
							queuePostRenderEffect(() => transition.enter(el), parentSuspense);
						}
					} else {
						const { leave, delayLeave, afterLeave } = transition;
						const remove2 = () => {
							if (vnode.ctx.isUnmounted) hostRemove(el);
							else hostInsert(el, container, anchor);
						};
						const performLeave = () => {
							const wasLeaving = el._isLeaving || !!el[leaveCbKey];
							if (el._isLeaving) el[leaveCbKey](true);
							if (transition.persisted && !wasLeaving) remove2();
							else leave(el, () => {
								remove2();
								afterLeave && afterLeave();
							});
						};
						if (delayLeave) delayLeave(el, remove2, performLeave);
						else performLeave();
					}
				} else hostInsert(el, container, anchor);
			};
			const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
				const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex, memo } = vnode;
				if (patchFlag === -2 || dynamicChildren && dynamicChildren.hasOnce) optimized = false;
				if (ref != null) {
					pauseTracking();
					setRef(ref, null, parentSuspense, vnode, true);
					resetTracking();
				}
				if (cacheIndex != null && (!vnode.ctx || vnode.ctx === parentComponent)) parentComponent.renderCache[cacheIndex] = void 0;
				if (shapeFlag & 256) {
					parentComponent.ctx.deactivate(vnode);
					return;
				}
				const shouldInvokeDirs = shapeFlag & 1 && dirs;
				const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
				let vnodeHook;
				if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
				if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
				else {
					if (shapeFlag & 128) {
						vnode.suspense.unmount(parentSuspense, doRemove);
						return;
					}
					if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
					if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
					else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
					else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
					if (doRemove) remove(vnode);
				}
				const shouldInvalidateMemo = memo != null && cacheIndex == null;
				if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs || shouldInvalidateMemo) queuePostRenderEffect(() => {
					vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
					shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
					if (shouldInvalidateMemo) vnode.el = null;
				}, parentSuspense);
			};
			const remove = (vnode) => {
				const { type, el, anchor, transition } = vnode;
				if (type === Fragment) {
					removeFragment(el, anchor);
					return;
				}
				if (type === Static) {
					removeStaticNode(vnode);
					if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
					return;
				}
				const performRemove = () => {
					hostRemove(el);
					if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
				};
				if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
					const { leave, delayLeave } = transition;
					const performLeave = () => leave(el, performRemove);
					if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
					else performLeave();
				} else performRemove();
			};
			const removeFragment = (cur, end) => {
				let next;
				while (cur !== end) {
					next = hostNextSibling(cur);
					hostRemove(cur);
					cur = next;
				}
				hostRemove(end);
			};
			const unmountComponent = (instance, parentSuspense, doRemove) => {
				const { bum, scope, job, subTree, um, m, a } = instance;
				invalidateMount(m);
				invalidateMount(a);
				if (bum) invokeArrayFns(bum);
				scope.stop();
				if (job) {
					job.flags |= 8;
					unmount(subTree, instance, parentSuspense, doRemove);
				} else if (instance.vnode.el && subTree) {
					subTree.transition = instance.vnode.transition;
					unmount(subTree, instance, parentSuspense, doRemove);
				}
				if (um) queuePostRenderEffect(um, parentSuspense);
				queuePostRenderEffect(() => {
					instance.isUnmounted = true;
				}, parentSuspense);
			};
			const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
				for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
			};
			const getNextHostNode = (vnode) => {
				if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
				if (vnode.shapeFlag & 128) return vnode.suspense.next();
				const el = hostNextSibling(vnode.anchor || vnode.el);
				const teleportEnd = el && el[TeleportEndKey];
				return teleportEnd ? hostNextSibling(teleportEnd) : el;
			};
			let isFlushing = false;
			const render = (vnode, container, namespace) => {
				let instance;
				if (vnode == null) {
					if (container._vnode) {
						unmount(container._vnode, null, null, true);
						instance = container._vnode.component;
					}
				} else patch(container._vnode || null, vnode, container, null, null, null, namespace);
				container._vnode = vnode;
				if (!isFlushing) {
					isFlushing = true;
					flushPreFlushCbs(instance);
					flushPostFlushCbs();
					isFlushing = false;
				}
			};
			const internals = {
				p: patch,
				um: unmount,
				m: move,
				r: remove,
				mt: mountComponent,
				mc: mountChildren,
				pc: patchChildren,
				pbc: patchBlockChildren,
				n: getNextHostNode,
				o: options
			};
			let hydrate;
			let hydrateNode;
			if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
			return {
				render,
				hydrate,
				createApp: createAppAPI(render, hydrate)
			};
		}
		function resolveChildrenNamespace({ type, props }, currentNamespace) {
			return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
		}
		function toggleRecurse({ effect, job }, allowed) {
			if (allowed) {
				effect.flags |= 32;
				job.flags |= 4;
			} else {
				effect.flags &= -33;
				job.flags &= -5;
			}
		}
		function needTransition(parentSuspense, transition) {
			return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
		}
		function traverseStaticChildren(n1, n2, shallow = false) {
			const ch1 = n1.children;
			const ch2 = n2.children;
			if (isArray$1(ch1) && isArray$1(ch2)) for (let i = 0; i < ch1.length; i++) {
				const c1 = ch1[i];
				let c2 = ch2[i];
				if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
					if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
						c2 = ch2[i] = cloneIfMounted(ch2[i]);
						c2.el = c1.el;
					}
					if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
				}
				if (c2.type === Text) {
					if (c2.patchFlag === -1) c2 = ch2[i] = cloneIfMounted(c2);
					c2.el = c1.el;
				}
				if (c2.type === Comment && !c2.el) c2.el = c1.el;
			}
		}
		function getSequence(arr) {
			const p = arr.slice();
			const result = [0];
			let i, j, u, v, c;
			const len = arr.length;
			for (i = 0; i < len; i++) {
				const arrI = arr[i];
				if (arrI !== 0) {
					j = result[result.length - 1];
					if (arr[j] < arrI) {
						p[i] = j;
						result.push(i);
						continue;
					}
					u = 0;
					v = result.length - 1;
					while (u < v) {
						c = u + v >> 1;
						if (arr[result[c]] < arrI) u = c + 1;
						else v = c;
					}
					if (arrI < arr[result[u]]) {
						if (u > 0) p[i] = result[u - 1];
						result[u] = i;
					}
				}
			}
			u = result.length;
			v = result[u - 1];
			while (u-- > 0) {
				result[u] = v;
				v = p[v];
			}
			return result;
		}
		function locateNonHydratedAsyncRoot(instance) {
			const subComponent = instance.subTree.component;
			if (subComponent) {
				if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
				else return locateNonHydratedAsyncRoot(subComponent);
			}
		}
		function invalidateMount(hooks) {
			if (hooks) for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
		}
		function resolveAsyncComponentPlaceholder(anchorVnode) {
			if (anchorVnode.placeholder) return anchorVnode.placeholder;
			const instance = anchorVnode.component;
			if (instance) return resolveAsyncComponentPlaceholder(instance.subTree);
			return null;
		}
		function queueEffectWithSuspense(fn, suspense) {
			if (suspense && suspense.pendingBranch) {
				if (isArray$1(fn)) suspense.effects.push(...fn);
				else suspense.effects.push(fn);
			} else queuePostFlushCb(fn);
		}
		function openBlock(disableTracking = false) {
			blockStack.push(currentBlock = disableTracking ? null : []);
		}
		function closeBlock() {
			blockStack.pop();
			currentBlock = blockStack[blockStack.length - 1] || null;
		}
		function setBlockTracking(value, inVOnce = false) {
			isBlockTreeEnabled += value;
			if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
		}
		function setupBlock(vnode) {
			vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
			closeBlock();
			if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
			return vnode;
		}
		function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
			return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
		}
		function createBlock(type, props, children, patchFlag, dynamicProps) {
			return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
		}
		function isVNode(value) {
			return value ? value.__v_isVNode === true : false;
		}
		function isSameVNodeType(n1, n2) {
			return n1.type === n2.type && n1.key === n2.key;
		}
		function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
			const vnode = {
				__v_isVNode: true,
				__v_skip: true,
				type,
				props,
				key: props && normalizeKey(props),
				ref: props && normalizeRef(props),
				scopeId: currentScopeId,
				slotScopeIds: null,
				children,
				component: null,
				suspense: null,
				ssContent: null,
				ssFallback: null,
				dirs: null,
				transition: null,
				el: null,
				anchor: null,
				target: null,
				targetStart: null,
				targetAnchor: null,
				staticCount: 0,
				shapeFlag,
				patchFlag,
				dynamicProps,
				dynamicChildren: null,
				appContext: null,
				ctx: currentRenderingInstance
			};
			if (needFullChildrenNormalization) {
				normalizeChildren(vnode, children);
				if (shapeFlag & 128) type.normalize(vnode);
			} else if (children) vnode.shapeFlag |= isString(children) ? 8 : 16;
			if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
			return vnode;
		}
		function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
			if (!type || type === NULL_DYNAMIC_COMPONENT) type = Comment;
			if (isVNode(type)) {
				const cloned = cloneVNode(type, props, true);
				if (children) normalizeChildren(cloned, children);
				if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
					if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
					else currentBlock.push(cloned);
				}
				cloned.patchFlag = -2;
				return cloned;
			}
			if (isClassComponent(type)) type = type.__vccOpts;
			if (props) {
				props = guardReactiveProps(props);
				let { class: klass, style } = props;
				if (klass && !isString(klass)) props.class = normalizeClass(klass);
				if (isObject$2(style)) {
					if (isProxy(style) && !isArray$1(style)) style = extend({}, style);
					props.style = normalizeStyle(style);
				}
			}
			const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$2(type) ? 4 : isFunction$1(type) ? 2 : 0;
			return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
		}
		function guardReactiveProps(props) {
			if (!props) return null;
			return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
		}
		function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
			const { props, ref, patchFlag, children, transition } = vnode;
			const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
			const cloned = {
				__v_isVNode: true,
				__v_skip: true,
				type: vnode.type,
				props: mergedProps,
				key: mergedProps && normalizeKey(mergedProps),
				ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray$1(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
				scopeId: vnode.scopeId,
				slotScopeIds: vnode.slotScopeIds,
				children,
				target: vnode.target,
				targetStart: vnode.targetStart,
				targetAnchor: vnode.targetAnchor,
				staticCount: vnode.staticCount,
				shapeFlag: vnode.shapeFlag,
				patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
				dynamicProps: vnode.dynamicProps,
				dynamicChildren: vnode.dynamicChildren,
				appContext: vnode.appContext,
				dirs: vnode.dirs,
				transition,
				component: vnode.component,
				suspense: vnode.suspense,
				ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
				ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
				placeholder: vnode.placeholder,
				el: vnode.el,
				anchor: vnode.anchor,
				ctx: vnode.ctx,
				ce: vnode.ce,
				cacheIndex: vnode.cacheIndex
			};
			if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
			return cloned;
		}
		function createTextVNode(text = " ", flag = 0) {
			return createVNode(Text, null, text, flag);
		}
		function createCommentVNode(text = "", asBlock = false) {
			return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
		}
		function normalizeVNode(child) {
			if (child == null || typeof child === "boolean") return createVNode(Comment);
			else if (isArray$1(child)) return createVNode(Fragment, null, child.slice());
			else if (isVNode(child)) return cloneIfMounted(child);
			else return createVNode(Text, null, String(child));
		}
		function cloneIfMounted(child) {
			return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
		}
		function normalizeChildren(vnode, children) {
			let type = 0;
			const { shapeFlag } = vnode;
			if (children == null) children = null;
			else if (isArray$1(children)) type = 16;
			else if (typeof children === "object") {
				if (shapeFlag & 65) {
					const slot = children.default;
					if (slot) {
						slot._c && (slot._d = false);
						normalizeChildren(vnode, slot());
						slot._c && (slot._d = true);
					}
					return;
				} else {
					type = 32;
					const slotFlag = children._;
					if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
					else if (slotFlag === 3 && currentRenderingInstance) {
						if (currentRenderingInstance.slots._ === 1) children._ = 1;
						else {
							children._ = 2;
							vnode.patchFlag |= 1024;
						}
					}
				}
			} else if (isFunction$1(children)) {
				if (shapeFlag & 65) {
					normalizeChildren(vnode, { default: children });
					return;
				}
				children = {
					default: children,
					_ctx: currentRenderingInstance
				};
				type = 32;
			} else {
				children = String(children);
				if (shapeFlag & 64) {
					type = 16;
					children = [createTextVNode(children)];
				} else type = 8;
			}
			vnode.children = children;
			vnode.shapeFlag |= type;
		}
		function mergeProps(...args) {
			const ret = {};
			for (let i = 0; i < args.length; i++) {
				const toMerge = args[i];
				for (const key in toMerge) if (key === "class") {
					if (ret.class !== toMerge.class) ret.class = normalizeClass([ret.class, toMerge.class]);
				} else if (key === "style") ret.style = normalizeStyle([ret.style, toMerge.style]);
				else if (isOn(key)) {
					const existing = ret[key];
					const incoming = toMerge[key];
					if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
					else if (incoming == null && existing == null && !isModelListener(key)) ret[key] = incoming;
				} else if (key !== "") ret[key] = toMerge[key];
			}
			return ret;
		}
		function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
			callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
		}
		function createComponentInstance(vnode, parent, suspense) {
			const type = vnode.type;
			const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
			const instance = {
				uid: uid++,
				vnode,
				type,
				parent,
				appContext,
				root: null,
				next: null,
				subTree: null,
				effect: null,
				update: null,
				job: null,
				scope: new EffectScope(true),
				render: null,
				proxy: null,
				exposed: null,
				exposeProxy: null,
				withProxy: null,
				provides: parent ? parent.provides : Object.create(appContext.provides),
				ids: parent ? parent.ids : [
					"",
					0,
					0
				],
				accessCache: null,
				renderCache: [],
				components: null,
				directives: null,
				propsOptions: normalizePropsOptions(type, appContext),
				emitsOptions: normalizeEmitsOptions(type, appContext),
				emit: null,
				emitted: null,
				propsDefaults: EMPTY_OBJ,
				inheritAttrs: type.inheritAttrs,
				ctx: EMPTY_OBJ,
				data: EMPTY_OBJ,
				props: EMPTY_OBJ,
				attrs: EMPTY_OBJ,
				slots: EMPTY_OBJ,
				refs: EMPTY_OBJ,
				setupState: EMPTY_OBJ,
				setupContext: null,
				suspense,
				suspenseId: suspense ? suspense.pendingId : 0,
				asyncDep: null,
				asyncResolved: false,
				isMounted: false,
				isUnmounted: false,
				isDeactivated: false,
				bc: null,
				c: null,
				bm: null,
				m: null,
				bu: null,
				u: null,
				um: null,
				bum: null,
				da: null,
				a: null,
				rtg: null,
				rtc: null,
				ec: null,
				sp: null
			};
			instance.ctx = { _: instance };
			instance.root = parent ? parent.root : instance;
			instance.emit = emit.bind(null, instance);
			if (vnode.ce) vnode.ce(instance);
			return instance;
		}
		function isStatefulComponent(instance) {
			return instance.vnode.shapeFlag & 4;
		}
		function setupComponent(instance, isSSR = false, optimized = false) {
			isSSR && setInSSRSetupState(isSSR);
			const { props, children } = instance.vnode;
			const isStateful = isStatefulComponent(instance);
			initProps(instance, props, isStateful, isSSR);
			initSlots(instance, children, optimized || isSSR);
			const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
			isSSR && setInSSRSetupState(false);
			return setupResult;
		}
		function setupStatefulComponent(instance, isSSR) {
			const Component = instance.type;
			instance.accessCache = Object.create(null);
			instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
			const { setup } = Component;
			if (setup) {
				pauseTracking();
				const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
				const reset = setCurrentInstance(instance);
				const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
				const isAsyncSetup = isPromise(setupResult);
				resetTracking();
				reset();
				if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
				if (isAsyncSetup) {
					setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
					if (isSSR) return setupResult.then((resolvedResult) => {
						setInSSRSetupState(true);
						try {
							handleSetupResult(instance, resolvedResult, isSSR);
						} finally {
							setInSSRSetupState(false);
						}
					}).catch((e) => {
						handleError(e, instance, 0);
					});
					else instance.asyncDep = setupResult;
				} else handleSetupResult(instance, setupResult, isSSR);
			} else finishComponentSetup(instance, isSSR);
		}
		function handleSetupResult(instance, setupResult, isSSR) {
			if (isFunction$1(setupResult)) {
				if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
				else instance.render = setupResult;
			} else if (isObject$2(setupResult)) instance.setupState = proxyRefs(setupResult);
			finishComponentSetup(instance, isSSR);
		}
		function finishComponentSetup(instance, isSSR, skipOptions) {
			const Component = instance.type;
			if (!instance.render) {
				if (!isSSR && compile && !Component.render) {
					const template = Component.template || resolveMergedOptions(instance).template;
					if (template) {
						const { isCustomElement, compilerOptions } = instance.appContext.config;
						const { delimiters, compilerOptions: componentCompilerOptions } = Component;
						Component.render = compile(template, extend(extend({
							isCustomElement,
							delimiters
						}, compilerOptions), componentCompilerOptions));
					}
				}
				instance.render = Component.render || NOOP;
				if (installWithProxy) installWithProxy(instance);
			}
			{
				const reset = setCurrentInstance(instance);
				pauseTracking();
				try {
					applyOptions(instance);
				} finally {
					resetTracking();
					reset();
				}
			}
		}
		function createSetupContext(instance) {
			const expose = (exposed) => {
				instance.exposed = exposed || {};
			};
			return {
				attrs: new Proxy(instance.attrs, attrsProxyHandlers),
				slots: instance.slots,
				emit: instance.emit,
				expose
			};
		}
		function getComponentPublicInstance(instance) {
			if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
				get(target, key) {
					if (key in target) return target[key];
					else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
				},
				has(target, key) {
					return key in target || key in publicPropertiesMap;
				}
			}));
			else return instance.proxy;
		}
		function getComponentName(Component, includeInferred = true) {
			return isFunction$1(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
		}
		function isClassComponent(value) {
			return isFunction$1(value) && "__vccOpts" in value;
		}
		function h(type, propsOrChildren, children) {
			try {
				setBlockTracking(-1);
				const l = arguments.length;
				if (l === 2) {
					if (isObject$2(propsOrChildren) && !isArray$1(propsOrChildren)) {
						if (isVNode(propsOrChildren)) return createVNode(type, null, [propsOrChildren]);
						return createVNode(type, propsOrChildren);
					} else return createVNode(type, null, propsOrChildren);
				} else {
					if (l > 3) children = Array.prototype.slice.call(arguments, 2);
					else if (l === 3 && isVNode(children)) children = [children];
					return createVNode(type, propsOrChildren, children);
				}
			} finally {
				setBlockTracking(1);
			}
		}
		var queue;
		var flushIndex;
		var pendingPostFlushCbs;
		var activePostFlushCbs;
		var postFlushIndex;
		var resolvedPromise;
		var currentFlushPromise;
		var getId;
		var currentRenderingInstance;
		var currentScopeId;
		var ssrContextKey;
		var useSSRContext;
		var pendingMounts;
		var TeleportEndKey;
		var isTeleport;
		var isTeleportDisabled;
		var isTeleportDeferred;
		var isTargetSVG;
		var isTargetMathML;
		var resolveTarget;
		var TeleportImpl;
		var Teleport;
		var leaveCbKey;
		var enterCbKey$1;
		var TransitionHookValidator;
		var BaseTransitionPropsValidators;
		var recursiveGetSubtree;
		var BaseTransitionImpl;
		var BaseTransition;
		var pendingSetRefMap;
		var isAsyncWrapper;
		var isKeepAlive;
		var createHook;
		var onBeforeMount;
		var onMounted;
		var onBeforeUpdate;
		var onUpdated;
		var onBeforeUnmount;
		var onUnmounted;
		var onServerPrefetch;
		var onRenderTriggered;
		var onRenderTracked;
		var COMPONENTS;
		var NULL_DYNAMIC_COMPONENT;
		var getPublicInstance;
		var publicPropertiesMap;
		var hasSetupBinding;
		var PublicInstanceProxyHandlers;
		var shouldCacheAccess;
		var internalOptionMergeStrats;
		var uid$1;
		var currentApp;
		var getModelModifiers;
		var mixinEmitsCache;
		var getFunctionalFallthrough;
		var filterModelListeners;
		var internalObjectProto;
		var createInternalObject;
		var isInternalObject;
		var mixinPropsCache;
		var isInternalKey;
		var normalizeSlotValue;
		var normalizeSlot;
		var normalizeObjectSlots;
		var normalizeVNodeSlots;
		var assignSlots;
		var initSlots;
		var updateSlots;
		var queuePostRenderEffect;
		var isSuspense;
		var Fragment;
		var Text;
		var Comment;
		var Static;
		var blockStack;
		var currentBlock;
		var isBlockTreeEnabled;
		var normalizeKey;
		var normalizeRef;
		var createVNode;
		var emptyAppContext;
		var uid;
		var currentInstance;
		var getCurrentInstance;
		var internalSetCurrentInstance;
		var setInSSRSetupState;
		var setCurrentInstance;
		var unsetCurrentInstance;
		var isInSSRComponentSetup;
		var compile;
		var installWithProxy;
		var attrsProxyHandlers;
		var computed;
		var version;
		var warn;
		var init_runtime_core_esm_bundler = __esmMin((() => {
			init_reactivity_esm_bundler();
			init_shared_esm_bundler();
			queue = [];
			flushIndex = -1;
			pendingPostFlushCbs = [];
			activePostFlushCbs = null;
			postFlushIndex = 0;
			resolvedPromise = Promise.resolve();
			currentFlushPromise = null;
			getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
			currentRenderingInstance = null;
			currentScopeId = null;
			ssrContextKey = Symbol.for("v-scx");
			useSSRContext = () => {
				{
					const ctx = inject(ssrContextKey);
					if (!ctx) {}
					return ctx;
				}
			};
			pendingMounts = new WeakMap();
			TeleportEndKey = Symbol("_vte");
			isTeleport = (type) => type.__isTeleport;
			isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
			isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
			isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
			isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
			resolveTarget = (props, select) => {
				const targetSelector = props && props.to;
				if (isString(targetSelector)) {
					if (!select) return null;
					else return select(targetSelector);
				} else return targetSelector;
			};
			TeleportImpl = {
				name: "Teleport",
				__isTeleport: true,
				process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
					const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment, parentNode } } = internals;
					const disabled = isTeleportDisabled(n2.props);
					let { dynamicChildren } = n2;
					const mount = (vnode, container2, anchor2) => {
						if (vnode.shapeFlag & 16) mountChildren(vnode.children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					};
					const mountToTarget = (vnode = n2) => {
						const disabled2 = isTeleportDisabled(vnode.props);
						const target = vnode.target = resolveTarget(vnode.props, querySelector);
						const targetAnchor = prepareAnchor(target, vnode, createText, insert);
						if (target) {
							if (namespace !== "svg" && isTargetSVG(target)) namespace = "svg";
							else if (namespace !== "mathml" && isTargetMathML(target)) namespace = "mathml";
							if (parentComponent && parentComponent.isCE) (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = new Set())).add(target);
							if (!disabled2) {
								mount(vnode, target, targetAnchor);
								updateCssVars(vnode, false);
							}
						}
					};
					const queuePendingMount = (vnode) => {
						const mountJob = () => {
							if (pendingMounts.get(vnode) !== mountJob) return;
							pendingMounts.delete(vnode);
							if (isTeleportDisabled(vnode.props)) {
								const mountContainer = parentNode(vnode.el) || container;
								mount(vnode, mountContainer, vnode.anchor);
								updateCssVars(vnode, true);
							}
							mountToTarget(vnode);
						};
						pendingMounts.set(vnode, mountJob);
						queuePostRenderEffect(mountJob, parentSuspense);
					};
					if (n1 == null) {
						const placeholder = n2.el = createText("");
						const mainAnchor = n2.anchor = createText("");
						insert(placeholder, container, anchor);
						insert(mainAnchor, container, anchor);
						if (isTeleportDeferred(n2.props) || parentSuspense && parentSuspense.pendingBranch) {
							queuePendingMount(n2);
							return;
						}
						if (disabled) {
							mount(n2, container, mainAnchor);
							updateCssVars(n2, true);
						}
						mountToTarget();
					} else {
						n2.el = n1.el;
						const mainAnchor = n2.anchor = n1.anchor;
						const pendingMount = pendingMounts.get(n1);
						if (pendingMount) {
							pendingMount.flags |= 8;
							pendingMounts.delete(n1);
							queuePendingMount(n2);
							return;
						}
						n2.targetStart = n1.targetStart;
						const target = n2.target = n1.target;
						const targetAnchor = n2.targetAnchor = n1.targetAnchor;
						const wasDisabled = isTeleportDisabled(n1.props);
						const currentContainer = wasDisabled ? container : target;
						const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
						if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
						else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
						if (dynamicChildren) {
							patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
							traverseStaticChildren(n1, n2, true);
						} else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
						if (disabled) {
							if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
							else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
						} else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
							const nextTarget = resolveTarget(n2.props, querySelector);
							if (nextTarget) {
								n2.target = nextTarget;
								moveTeleport(n2, nextTarget, null, internals, 0);
							}
						} else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
						updateCssVars(n2, disabled);
					}
				},
				remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
					const { shapeFlag, children, anchor, targetStart, targetAnchor, target, props } = vnode;
					const disabled = isTeleportDisabled(props);
					const shouldRemove = doRemove || !disabled;
					const pendingMount = pendingMounts.get(vnode);
					if (pendingMount) {
						pendingMount.flags |= 8;
						pendingMounts.delete(vnode);
					}
					if (target) {
						hostRemove(targetStart);
						hostRemove(targetAnchor);
					}
					doRemove && hostRemove(anchor);
					if (!pendingMount && (disabled || target) && shapeFlag & 16) for (let i = 0; i < children.length; i++) {
						const child = children[i];
						unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
					}
				},
				move: moveTeleport,
				hydrate: hydrateTeleport
			};
			Teleport = TeleportImpl;
			leaveCbKey = Symbol("_leaveCb");
			enterCbKey$1 = Symbol("_enterCb");
			TransitionHookValidator = [Function, Array];
			BaseTransitionPropsValidators = {
				mode: String,
				appear: Boolean,
				persisted: Boolean,
				onBeforeEnter: TransitionHookValidator,
				onEnter: TransitionHookValidator,
				onAfterEnter: TransitionHookValidator,
				onEnterCancelled: TransitionHookValidator,
				onBeforeLeave: TransitionHookValidator,
				onLeave: TransitionHookValidator,
				onAfterLeave: TransitionHookValidator,
				onLeaveCancelled: TransitionHookValidator,
				onBeforeAppear: TransitionHookValidator,
				onAppear: TransitionHookValidator,
				onAfterAppear: TransitionHookValidator,
				onAppearCancelled: TransitionHookValidator
			};
			recursiveGetSubtree = (instance) => {
				const subTree = instance.subTree;
				return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
			};
			BaseTransitionImpl = {
				name: `BaseTransition`,
				props: BaseTransitionPropsValidators,
				setup(props, { slots }) {
					const instance = getCurrentInstance();
					const state = useTransitionState();
					return () => {
						const children = slots.default && getTransitionRawChildren(slots.default(), true);
						const child = children && children.length ? findNonCommentChild(children) : instance.subTree ? createCommentVNode() : void 0;
						if (!child) return;
						const rawProps = toRaw(props);
						const { mode } = rawProps;
						if (state.isLeaving) return emptyPlaceholder(child);
						const innerChild = getInnerChild$1(child);
						if (!innerChild) return emptyPlaceholder(child);
						let enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance, (hooks) => enterHooks = hooks);
						if (innerChild.type !== Comment) setTransitionHooks(innerChild, enterHooks);
						let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
						if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
							let leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
							setTransitionHooks(oldInnerChild, leavingHooks);
							if (mode === "out-in" && innerChild.type !== Comment) {
								state.isLeaving = true;
								leavingHooks.afterLeave = () => {
									state.isLeaving = false;
									if (!(instance.job.flags & 8)) instance.update();
									delete leavingHooks.afterLeave;
									oldInnerChild = void 0;
								};
								return emptyPlaceholder(child);
							} else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
								const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
								leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
								el[leaveCbKey] = () => {
									earlyRemove();
									el[leaveCbKey] = void 0;
									delete enterHooks.delayedLeave;
									oldInnerChild = void 0;
								};
								enterHooks.delayedLeave = () => {
									delayedLeave();
									delete enterHooks.delayedLeave;
									oldInnerChild = void 0;
								};
							};
							else oldInnerChild = void 0;
						} else if (oldInnerChild) oldInnerChild = void 0;
						return child;
					};
				}
			};
			BaseTransition = BaseTransitionImpl;
			pendingSetRefMap = new WeakMap();
			getGlobalThis().requestIdleCallback;
			getGlobalThis().cancelIdleCallback;
			isAsyncWrapper = (i) => !!i.type.__asyncLoader;
			isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
			createHook = (lifecycle) => (hook, target = currentInstance) => {
				if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
			};
			onBeforeMount = createHook("bm");
			onMounted = createHook("m");
			onBeforeUpdate = createHook("bu");
			onUpdated = createHook("u");
			onBeforeUnmount = createHook("bum");
			onUnmounted = createHook("um");
			onServerPrefetch = createHook("sp");
			onRenderTriggered = createHook("rtg");
			onRenderTracked = createHook("rtc");
			COMPONENTS = "components";
			NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
			getPublicInstance = (i) => {
				if (!i) return null;
				if (isStatefulComponent(i)) return getComponentPublicInstance(i);
				return getPublicInstance(i.parent);
			};
			publicPropertiesMap = extend(Object.create(null), {
				$: (i) => i,
				$el: (i) => i.vnode.el,
				$data: (i) => i.data,
				$props: (i) => i.props,
				$attrs: (i) => i.attrs,
				$slots: (i) => i.slots,
				$refs: (i) => i.refs,
				$parent: (i) => getPublicInstance(i.parent),
				$root: (i) => getPublicInstance(i.root),
				$host: (i) => i.ce,
				$emit: (i) => i.emit,
				$options: (i) => resolveMergedOptions(i),
				$forceUpdate: (i) => i.f || (i.f = () => {
					queueJob(i.update);
				}),
				$nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
				$watch: (i) => instanceWatch.bind(i)
			});
			hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
			PublicInstanceProxyHandlers = {
				get({ _: instance }, key) {
					if (key === "__v_skip") return true;
					const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
					if (key[0] !== "$") {
						const n = accessCache[key];
						if (n !== void 0) switch (n) {
							case 1: return setupState[key];
							case 2: return data[key];
							case 4: return ctx[key];
							case 3: return props[key];
						}
						else if (hasSetupBinding(setupState, key)) {
							accessCache[key] = 1;
							return setupState[key];
						} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
							accessCache[key] = 2;
							return data[key];
						} else if (hasOwn(props, key)) {
							accessCache[key] = 3;
							return props[key];
						} else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
							accessCache[key] = 4;
							return ctx[key];
						} else if (shouldCacheAccess) accessCache[key] = 0;
					}
					const publicGetter = publicPropertiesMap[key];
					let cssModule, globalProperties;
					if (publicGetter) {
						if (key === "$attrs") track(instance.attrs, "get", "");
						return publicGetter(instance);
					} else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
					else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
						accessCache[key] = 4;
						return ctx[key];
					} else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key];
				},
				set({ _: instance }, key, value) {
					const { data, setupState, ctx } = instance;
					if (hasSetupBinding(setupState, key)) {
						setupState[key] = value;
						return true;
					} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
						data[key] = value;
						return true;
					} else if (hasOwn(instance.props, key)) return false;
					if (key[0] === "$" && key.slice(1) in instance) return false;
					else ctx[key] = value;
					return true;
				},
				has({ _: { data, setupState, accessCache, ctx, appContext, props, type } }, key) {
					let cssModules;
					return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
				},
				defineProperty(target, key, descriptor) {
					if (descriptor.get != null) target._.accessCache[key] = 0;
					else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
					return Reflect.defineProperty(target, key, descriptor);
				}
			};
			shouldCacheAccess = true;
			internalOptionMergeStrats = {
				data: mergeDataFn,
				props: mergeEmitsOrPropsOptions,
				emits: mergeEmitsOrPropsOptions,
				methods: mergeObjectOptions,
				computed: mergeObjectOptions,
				beforeCreate: mergeAsArray,
				created: mergeAsArray,
				beforeMount: mergeAsArray,
				mounted: mergeAsArray,
				beforeUpdate: mergeAsArray,
				updated: mergeAsArray,
				beforeDestroy: mergeAsArray,
				beforeUnmount: mergeAsArray,
				destroyed: mergeAsArray,
				unmounted: mergeAsArray,
				activated: mergeAsArray,
				deactivated: mergeAsArray,
				errorCaptured: mergeAsArray,
				serverPrefetch: mergeAsArray,
				components: mergeObjectOptions,
				directives: mergeObjectOptions,
				watch: mergeWatchOptions,
				provide: mergeDataFn,
				inject: mergeInject
			};
			uid$1 = 0;
			currentApp = null;
			getModelModifiers = (props, modelName) => {
				return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize$1(modelName)}Modifiers`] || props[`${hyphenate$1(modelName)}Modifiers`];
			};
			mixinEmitsCache = new WeakMap();
			getFunctionalFallthrough = (attrs) => {
				let res;
				for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
				return res;
			};
			filterModelListeners = (attrs, props) => {
				const res = {};
				for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
				return res;
			};
			internalObjectProto = {};
			createInternalObject = () => Object.create(internalObjectProto);
			isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
			mixinPropsCache = new WeakMap();
			isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
			normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
			normalizeSlot = (key, rawSlot, ctx) => {
				if (rawSlot._n) return rawSlot;
				const normalized = withCtx((...args) => {
					return normalizeSlotValue(rawSlot(...args));
				}, ctx);
				normalized._c = false;
				return normalized;
			};
			normalizeObjectSlots = (rawSlots, slots, instance) => {
				const ctx = rawSlots._ctx;
				for (const key in rawSlots) {
					if (isInternalKey(key)) continue;
					const value = rawSlots[key];
					if (isFunction$1(value)) slots[key] = normalizeSlot(key, value, ctx);
					else if (value != null) {
						const normalized = normalizeSlotValue(value);
						slots[key] = () => normalized;
					}
				}
			};
			normalizeVNodeSlots = (instance, children) => {
				const normalized = normalizeSlotValue(children);
				instance.slots.default = () => normalized;
			};
			assignSlots = (slots, children, optimized) => {
				for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
			};
			initSlots = (instance, children, optimized) => {
				const slots = instance.slots = createInternalObject();
				if (instance.vnode.shapeFlag & 32) {
					const type = children._;
					if (type) {
						assignSlots(slots, children, optimized);
						if (optimized) def(slots, "_", type, true);
					} else normalizeObjectSlots(children, slots);
				} else if (children) normalizeVNodeSlots(instance, children);
			};
			updateSlots = (instance, children, optimized) => {
				const { vnode, slots } = instance;
				let needDeletionCheck = true;
				let deletionComparisonTarget = EMPTY_OBJ;
				if (vnode.shapeFlag & 32) {
					const type = children._;
					if (type) {
						if (optimized && type === 1) needDeletionCheck = false;
						else assignSlots(slots, children, optimized);
					} else {
						needDeletionCheck = !children.$stable;
						normalizeObjectSlots(children, slots);
					}
					deletionComparisonTarget = children;
				} else if (children) {
					normalizeVNodeSlots(instance, children);
					deletionComparisonTarget = { default: 1 };
				}
				if (needDeletionCheck) {
					for (const key in slots) if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
				}
			};
			queuePostRenderEffect = queueEffectWithSuspense;
			isSuspense = (type) => type.__isSuspense;
			Fragment = Symbol.for("v-fgt");
			Text = Symbol.for("v-txt");
			Comment = Symbol.for("v-cmt");
			Static = Symbol.for("v-stc");
			blockStack = [];
			currentBlock = null;
			isBlockTreeEnabled = 1;
			normalizeKey = ({ key }) => key != null ? key : null;
			normalizeRef = ({ ref, ref_key, ref_for }) => {
				if (typeof ref === "number") ref = "" + ref;
				return ref != null ? isString(ref) || isRef(ref) || isFunction$1(ref) ? {
					i: currentRenderingInstance,
					r: ref,
					k: ref_key,
					f: !!ref_for
				} : ref : null;
			};
			createVNode = _createVNode;
			emptyAppContext = createAppContext();
			uid = 0;
			currentInstance = null;
			getCurrentInstance = () => currentInstance || currentRenderingInstance;
			{
				const g = getGlobalThis();
				const registerGlobalSetter = (key, setter) => {
					let setters;
					if (!(setters = g[key])) setters = g[key] = [];
					setters.push(setter);
					return (v) => {
						if (setters.length > 1) setters.forEach((set) => set(v));
						else setters[0](v);
					};
				};
				internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
				setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
			}
			setCurrentInstance = (instance) => {
				const prev = currentInstance;
				internalSetCurrentInstance(instance);
				instance.scope.on();
				return () => {
					instance.scope.off();
					internalSetCurrentInstance(prev);
				};
			};
			unsetCurrentInstance = () => {
				currentInstance && currentInstance.scope.off();
				internalSetCurrentInstance(null);
			};
			isInSSRComponentSetup = false;
			attrsProxyHandlers = { get(target, key) {
				track(target, "get", "");
				return target[key];
			} };
			computed = (getterOrOptions, debugOptions) => {
				return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
			};
			version = "3.5.43";
			warn = NOOP;
		}));
		function resolveTransitionProps(rawProps) {
			const baseProps = {};
			for (const key in rawProps) if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
			if (rawProps.css === false) return baseProps;
			const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
			const durations = normalizeDuration(duration);
			const enterDuration = durations && durations[0];
			const leaveDuration = durations && durations[1];
			const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
			const finishEnter = (el, isAppear, done, isCancelled) => {
				el._enterCancelled = isCancelled;
				removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
				removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
				done && done();
			};
			const finishLeave = (el, done) => {
				el._isLeaving = false;
				removeTransitionClass(el, leaveFromClass);
				removeTransitionClass(el, leaveToClass);
				removeTransitionClass(el, leaveActiveClass);
				done && done();
			};
			const makeEnterHook = (isAppear) => {
				return (el, done) => {
					const hook = isAppear ? onAppear : onEnter;
					const resolve = () => finishEnter(el, isAppear, done);
					callHook(hook, [el, resolve]);
					nextFrame(() => {
						removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
						addTransitionClass(el, isAppear ? appearToClass : enterToClass);
						if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
					});
				};
			};
			return extend(baseProps, {
				onBeforeEnter(el) {
					callHook(onBeforeEnter, [el]);
					addTransitionClass(el, enterFromClass);
					addTransitionClass(el, enterActiveClass);
				},
				onBeforeAppear(el) {
					callHook(onBeforeAppear, [el]);
					addTransitionClass(el, appearFromClass);
					addTransitionClass(el, appearActiveClass);
				},
				onEnter: makeEnterHook(false),
				onAppear: makeEnterHook(true),
				onLeave(el, done) {
					el._isLeaving = true;
					const resolve = () => finishLeave(el, done);
					addTransitionClass(el, leaveFromClass);
					if (!el._enterCancelled) {
						forceReflow(el);
						addTransitionClass(el, leaveActiveClass);
					} else {
						addTransitionClass(el, leaveActiveClass);
						forceReflow(el);
					}
					nextFrame(() => {
						if (!el._isLeaving) return;
						removeTransitionClass(el, leaveFromClass);
						addTransitionClass(el, leaveToClass);
						if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
					});
					callHook(onLeave, [el, resolve]);
				},
				onEnterCancelled(el) {
					finishEnter(el, false, void 0, true);
					callHook(onEnterCancelled, [el]);
				},
				onAppearCancelled(el) {
					finishEnter(el, true, void 0, true);
					callHook(onAppearCancelled, [el]);
				},
				onLeaveCancelled(el) {
					finishLeave(el);
					callHook(onLeaveCancelled, [el]);
				}
			});
		}
		function normalizeDuration(duration) {
			if (duration == null) return null;
			else if (isObject$2(duration)) return [NumberOf(duration.enter), NumberOf(duration.leave)];
			else {
				const n = NumberOf(duration);
				return [n, n];
			}
		}
		function NumberOf(val) {
			return toNumber$1(val);
		}
		function addTransitionClass(el, cls) {
			cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
			(el[vtcKey] || (el[vtcKey] = new Set())).add(cls);
		}
		function removeTransitionClass(el, cls) {
			cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
			const _vtc = el[vtcKey];
			if (_vtc) {
				_vtc.delete(cls);
				if (!_vtc.size) el[vtcKey] = void 0;
			}
		}
		function nextFrame(cb) {
			requestAnimationFrame(() => {
				requestAnimationFrame(cb);
			});
		}
		function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
			const id = el._endId = ++endId;
			const resolveIfNotStale = () => {
				if (id === el._endId) resolve();
			};
			if (explicitTimeout != null) return setTimeout(resolveIfNotStale, explicitTimeout);
			const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
			if (!type) return resolve();
			const endEvent = type + "end";
			let ended = 0;
			const end = () => {
				el.removeEventListener(endEvent, onEnd);
				resolveIfNotStale();
			};
			const onEnd = (e) => {
				if (e.target === el && ++ended >= propCount) end();
			};
			setTimeout(() => {
				if (ended < propCount) end();
			}, timeout + 1);
			el.addEventListener(endEvent, onEnd);
		}
		function getTransitionInfo(el, expectedType) {
			const styles = window.getComputedStyle(el);
			const getStyleProperties = (key) => (styles[key] || "").split(", ");
			const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
			const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
			const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
			const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
			const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
			const animationTimeout = getTimeout(animationDelays, animationDurations);
			let type = null;
			let timeout = 0;
			let propCount = 0;
			if (expectedType === TRANSITION) {
				if (transitionTimeout > 0) {
					type = TRANSITION;
					timeout = transitionTimeout;
					propCount = transitionDurations.length;
				}
			} else if (expectedType === ANIMATION) {
				if (animationTimeout > 0) {
					type = ANIMATION;
					timeout = animationTimeout;
					propCount = animationDurations.length;
				}
			} else {
				timeout = Math.max(transitionTimeout, animationTimeout);
				type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
				propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
			}
			const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
			return {
				type,
				timeout,
				propCount,
				hasTransform
			};
		}
		function getTimeout(delays, durations) {
			while (delays.length < durations.length) delays = delays.concat(delays);
			return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
		}
		function toMs(s) {
			if (s === "auto") return 0;
			return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
		}
		function forceReflow(el) {
			return (el ? el.ownerDocument : document).body.offsetHeight;
		}
		function patchClass(el, value, isSVG) {
			const transitionClasses = el[vtcKey];
			if (transitionClasses) value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
			if (value == null) el.removeAttribute("class");
			else if (isSVG) el.setAttribute("class", value);
			else el.className = value;
		}
		function setDisplay(el, value) {
			el.style.display = value ? el[vShowOriginalDisplay] : "none";
			el[vShowHidden] = !value;
		}
		function patchStyle(el, prev, next) {
			const style = el.style;
			const isCssString = isString(next);
			let hasControlledDisplay = false;
			if (next && !isCssString) {
				if (prev) {
					if (!isString(prev)) {
						for (const key in prev) if (next[key] == null) setStyle(style, key, "");
					} else for (const prevStyle of prev.split(";")) {
						const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
						if (next[key] == null) setStyle(style, key, "");
					}
				}
				for (const key in next) {
					if (key === "display") hasControlledDisplay = true;
					const value = next[key];
					if (value != null) {
						if (!shouldPreserveTextareaResizeStyle(el, key, !isString(prev) && prev ? prev[key] : void 0, value)) setStyle(style, key, value);
					} else setStyle(style, key, "");
				}
			} else if (isCssString) {
				if (prev !== next) {
					const cssVarText = style[CSS_VAR_TEXT];
					if (cssVarText) next += ";" + cssVarText;
					style.cssText = next;
					hasControlledDisplay = displayRE.test(next);
				}
			} else if (prev) el.removeAttribute("style");
			if (vShowOriginalDisplay in el) {
				el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
				if (el[vShowHidden]) style.display = "none";
			}
		}
		function setStyle(style, name, val) {
			if (isArray$1(val)) val.forEach((v) => setStyle(style, name, v));
			else {
				if (val == null) val = "";
				if (name.startsWith("--")) {
					if (importantRE.test(val)) style.setProperty(name, val.replace(importantRE, ""), "important");
					else style.setProperty(name, val);
				} else {
					const prefixed = autoPrefix(style, name);
					if (importantRE.test(val)) style.setProperty(hyphenate$1(prefixed), val.replace(importantRE, ""), "important");
					else style[prefixed] = val;
				}
			}
		}
		function autoPrefix(style, rawName) {
			const cached = prefixCache[rawName];
			if (cached) return cached;
			let name = camelize$1(rawName);
			if (name !== "filter" && name in style) return prefixCache[rawName] = name;
			name = capitalize$1(name);
			for (let i = 0; i < prefixes.length; i++) {
				const prefixed = prefixes[i] + name;
				if (prefixed in style) return prefixCache[rawName] = prefixed;
			}
			return rawName;
		}
		function shouldPreserveTextareaResizeStyle(el, key, prev, next) {
			return el.tagName === "TEXTAREA" && (key === "width" || key === "height") && isString(next) && prev === next;
		}
		function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
			if (isSVG && key.startsWith("xlink:")) {
				if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
				else el.setAttributeNS(xlinkNS, key, value);
			} else if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
			else el.setAttribute(key, isBoolean ? "" : isSymbol$1(value) ? String(value) : value);
		}
		function patchDOMProp(el, key, value, parentComponent, attrName) {
			if (key === "innerHTML" || key === "textContent") {
				if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
				return;
			}
			const tag = el.tagName;
			if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
				const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
				const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
				if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
				if (value == null) el.removeAttribute(key);
				el._value = value;
				return;
			}
			let needRemove = false;
			if (value === "" || value == null) {
				const type = typeof el[key];
				if (type === "boolean") value = includeBooleanAttr(value);
				else if (value == null && type === "string") {
					value = "";
					needRemove = true;
				} else if (type === "number") {
					value = 0;
					needRemove = true;
				}
			}
			try {
				el[key] = value;
			} catch (e) {}
			needRemove && el.removeAttribute(attrName || key);
		}
		function addEventListener(el, event, handler, options) {
			el.addEventListener(event, handler, options);
		}
		function removeEventListener(el, event, handler, options) {
			el.removeEventListener(event, handler, options);
		}
		function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
			const invokers = el[veiKey] || (el[veiKey] = {});
			const existingInvoker = invokers[rawName];
			if (nextValue && existingInvoker) existingInvoker.value = nextValue;
			else {
				const [name, options] = parseName(rawName);
				if (nextValue) addEventListener(el, name, invokers[rawName] = createInvoker(nextValue, instance), options);
				else if (existingInvoker) {
					removeEventListener(el, name, existingInvoker, options);
					invokers[rawName] = void 0;
				}
			}
		}
		function parseName(name) {
			let options;
			let m;
			while ((m = name.match(optionsModifierRE)) && !optionsModifierEventRE.test(name)) {
				if (!options) options = {};
				name = name.slice(0, name.length - m[1].length);
				options[m[1].toLowerCase()] = true;
			}
			return [name[2] === ":" ? name.slice(3) : hyphenate$1(name.slice(2)), options];
		}
		function createInvoker(initialValue, instance) {
			const invoker = (e) => {
				if (!e._vts) e._vts = Date.now();
				else if (e._vts <= invoker.attached) return;
				const value = invoker.value;
				if (isArray$1(value)) {
					const originalStop = e.stopImmediatePropagation;
					e.stopImmediatePropagation = () => {
						originalStop.call(e);
						e._stopped = true;
					};
					const handlers = value.slice();
					const args = [e];
					for (let i = 0; i < handlers.length; i++) {
						if (e._stopped) break;
						const handler = handlers[i];
						if (handler) callWithAsyncErrorHandling(handler, instance, 5, args);
					}
				} else callWithAsyncErrorHandling(value, instance, 5, [e]);
			};
			invoker.value = initialValue;
			invoker.attached = getNow();
			return invoker;
		}
		function shouldSetAsProp(el, key, value, isSVG) {
			if (isSVG) {
				if (key === "innerHTML" || key === "textContent") return true;
				if (key in el && isNativeOn(key) && isFunction$1(value)) return true;
				return false;
			}
			if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") return false;
			if (key === "sandbox" && el.tagName === "IFRAME") return false;
			if (key === "form") return false;
			if (key === "list" && el.tagName === "INPUT") return false;
			if (key === "type" && el.tagName === "TEXTAREA") return false;
			if (key === "width" || key === "height") {
				const tag = el.tagName;
				if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
			}
			if (isNativeOn(key) && isString(value)) return false;
			return key in el;
		}
		function shouldSetAsPropForVueCE(el, key) {
			const props = el._def.props;
			if (!props) return false;
			const camelKey = camelize$1(key);
			return Array.isArray(props) ? props.some((prop) => camelize$1(prop) === camelKey) : Object.keys(props).some((prop) => camelize$1(prop) === camelKey);
		}
		function callPendingCbs(c) {
			const el = c.el;
			if (el[moveCbKey]) el[moveCbKey]();
			if (el[enterCbKey]) el[enterCbKey]();
		}
		function recordPosition(c) {
			newPositionMap.set(c, getPosition(c.el));
		}
		function applyTranslation(c) {
			const oldPos = positionMap.get(c);
			const newPos = newPositionMap.get(c);
			const dx = oldPos.left - newPos.left;
			const dy = oldPos.top - newPos.top;
			if (dx || dy) {
				const el = c.el;
				const s = el.style;
				const rect = el.getBoundingClientRect();
				let scaleX = 1;
				let scaleY = 1;
				if (el.offsetWidth) scaleX = rect.width / el.offsetWidth;
				if (el.offsetHeight) scaleY = rect.height / el.offsetHeight;
				if (!Number.isFinite(scaleX) || scaleX === 0) scaleX = 1;
				if (!Number.isFinite(scaleY) || scaleY === 0) scaleY = 1;
				if (Math.abs(scaleX - 1) < .01) scaleX = 1;
				if (Math.abs(scaleY - 1) < .01) scaleY = 1;
				s.transform = s.webkitTransform = `translate(${dx / scaleX}px,${dy / scaleY}px)`;
				s.transitionDuration = "0s";
				return c;
			}
		}
		function getPosition(el) {
			const rect = el.getBoundingClientRect();
			return {
				left: rect.left,
				top: rect.top
			};
		}
		function hasCSSTransform(el, root, moveClass) {
			const clone = el.cloneNode();
			const _vtc = el[vtcKey];
			if (_vtc) _vtc.forEach((cls) => {
				cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
			});
			moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
			clone.style.display = "none";
			const container = root.nodeType === 1 ? root : root.parentNode;
			container.appendChild(clone);
			const { hasTransform } = getTransitionInfo(clone);
			container.removeChild(clone);
			return hasTransform;
		}
		function ensureRenderer() {
			return renderer || (renderer = createRenderer(rendererOptions));
		}
		function resolveRootNamespace(container) {
			if (container instanceof SVGElement) return "svg";
			if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
		}
		function normalizeContainer(container) {
			if (isString(container)) return document.querySelector(container);
			return container;
		}
		var policy;
		var tt$1;
		var unsafeToTrustedHTML;
		var svgNS;
		var mathmlNS;
		var doc;
		var templateContainer;
		var nodeOps;
		var TRANSITION;
		var ANIMATION;
		var vtcKey;
		var DOMTransitionPropsValidators;
		var TransitionPropsValidators;
		var decorate$1;
		var Transition;
		var callHook;
		var hasExplicitCallback;
		var endId;
		var vShowOriginalDisplay;
		var vShowHidden;
		var vShow;
		var CSS_VAR_TEXT;
		var displayRE;
		var importantRE;
		var prefixes;
		var prefixCache;
		var xlinkNS;
		var veiKey;
		var optionsModifierRE;
		var optionsModifierEventRE;
		var cachedNow;
		var p;
		var getNow;
		var isNativeOn;
		var patchProp;
		var positionMap;
		var newPositionMap;
		var moveCbKey;
		var enterCbKey;
		var decorate;
		var TransitionGroup;
		var systemModifiers;
		var modifierGuards;
		var withModifiers;
		var keyNames;
		var withKeys;
		var rendererOptions;
		var renderer;
		var render;
		var createApp;
		var init_runtime_dom_esm_bundler = __esmMin((() => {
			init_runtime_core_esm_bundler();
			init_runtime_core_esm_bundler();
			init_shared_esm_bundler();
			policy = void 0;
			tt$1 = typeof window !== "undefined" && window.trustedTypes;
			if (tt$1) try {
				policy = tt$1.createPolicy("vue", { createHTML: (val) => val });
			} catch (e) {}
			unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
			svgNS = "http://www.w3.org/2000/svg";
			mathmlNS = "http://www.w3.org/1998/Math/MathML";
			doc = typeof document !== "undefined" ? document : null;
			templateContainer = doc && doc.createElement("template");
			nodeOps = {
				insert: (child, parent, anchor) => {
					parent.insertBefore(child, anchor || null);
				},
				remove: (child) => {
					const parent = child.parentNode;
					if (parent) parent.removeChild(child);
				},
				createElement: (tag, namespace, is, props) => {
					const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
					if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
					return el;
				},
				createText: (text) => doc.createTextNode(text),
				createComment: (text) => doc.createComment(text),
				setText: (node, text) => {
					node.nodeValue = text;
				},
				setElementText: (el, text) => {
					el.textContent = text;
				},
				parentNode: (node) => node.parentNode,
				nextSibling: (node) => node.nextSibling,
				querySelector: (selector) => doc.querySelector(selector),
				setScopeId(el, id) {
					el.setAttribute(id, "");
				},
				insertStaticContent(content, parent, anchor, namespace, start, end) {
					const before = anchor ? anchor.previousSibling : parent.lastChild;
					if (start && (start === end || start.nextSibling)) while (true) {
						parent.insertBefore(start.cloneNode(true), anchor);
						if (start === end || !(start = start.nextSibling)) break;
					}
					else {
						templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
						const template = templateContainer.content;
						if (namespace === "svg" || namespace === "mathml") {
							const wrapper = template.firstChild;
							while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
							template.removeChild(wrapper);
						}
						parent.insertBefore(template, anchor);
					}
					return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
				}
			};
			TRANSITION = "transition";
			ANIMATION = "animation";
			vtcKey = Symbol("_vtc");
			DOMTransitionPropsValidators = {
				name: String,
				type: String,
				css: {
					type: Boolean,
					default: true
				},
				duration: [
					String,
					Number,
					Object
				],
				enterFromClass: String,
				enterActiveClass: String,
				enterToClass: String,
				appearFromClass: String,
				appearActiveClass: String,
				appearToClass: String,
				leaveFromClass: String,
				leaveActiveClass: String,
				leaveToClass: String
			};
			TransitionPropsValidators = extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
			decorate$1 = (t) => {
				t.displayName = "Transition";
				t.props = TransitionPropsValidators;
				return t;
			};
			Transition = decorate$1((props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots));
			callHook = (hook, args = []) => {
				if (isArray$1(hook)) hook.forEach((h2) => h2(...args));
				else if (hook) hook(...args);
			};
			hasExplicitCallback = (hook) => {
				return hook ? isArray$1(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
			};
			endId = 0;
			vShowOriginalDisplay = Symbol("_vod");
			vShowHidden = Symbol("_vsh");
			vShow = {
				name: "show",
				beforeMount(el, { value }, { transition }) {
					el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
					if (transition && value) transition.beforeEnter(el);
					else setDisplay(el, value);
				},
				mounted(el, { value }, { transition }) {
					if (transition && value) transition.enter(el);
				},
				updated(el, { value, oldValue }, { transition }) {
					if (!value === !oldValue) return;
					if (transition) {
						if (value) {
							transition.beforeEnter(el);
							setDisplay(el, true);
							transition.enter(el);
						} else transition.leave(el, () => {
							setDisplay(el, false);
						});
					} else setDisplay(el, value);
				},
				beforeUnmount(el, { value }) {
					setDisplay(el, value);
				}
			};
			CSS_VAR_TEXT = Symbol("");
			displayRE = /(?:^|;)\s*display\s*:/;
			importantRE = /\s*!important$/;
			prefixes = [
				"Webkit",
				"Moz",
				"ms"
			];
			prefixCache = {};
			xlinkNS = "http://www.w3.org/1999/xlink";
			veiKey = Symbol("_vei");
			optionsModifierRE = /(Once|Passive|Capture)$/;
			optionsModifierEventRE = /^on:?(?:Once|Passive|Capture)$/;
			cachedNow = 0;
			p = Promise.resolve();
			getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
			isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
			patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
				const isSVG = namespace === "svg";
				if (key === "class") patchClass(el, nextValue, isSVG);
				else if (key === "style") patchStyle(el, prevValue, nextValue);
				else if (isOn(key)) {
					if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
				} else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
					patchDOMProp(el, key, nextValue);
					if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
				} else if (el._isVueCE && (shouldSetAsPropForVueCE(el, key) || el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString(nextValue)))) patchDOMProp(el, camelize$1(key), nextValue, parentComponent, key);
				else {
					if (key === "true-value") el._trueValue = nextValue;
					else if (key === "false-value") el._falseValue = nextValue;
					patchAttr(el, key, nextValue, isSVG);
				}
			};
			positionMap = new WeakMap();
			newPositionMap = new WeakMap();
			moveCbKey = Symbol("_moveCb");
			enterCbKey = Symbol("_enterCb");
			decorate = (t) => {
				delete t.props.mode;
				return t;
			};
			TransitionGroup = decorate({
				name: "TransitionGroup",
				props: extend({}, TransitionPropsValidators, {
					tag: String,
					moveClass: String
				}),
				setup(props, { slots }) {
					const instance = getCurrentInstance();
					const state = useTransitionState();
					let prevChildren;
					let children;
					onUpdated(() => {
						if (!prevChildren.length) return;
						const moveClass = props.moveClass || `${props.name || "v"}-move`;
						if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
							prevChildren = [];
							return;
						}
						prevChildren.forEach(callPendingCbs);
						prevChildren.forEach(recordPosition);
						const movedChildren = prevChildren.filter(applyTranslation);
						forceReflow(instance.vnode.el);
						movedChildren.forEach((c) => {
							const el = c.el;
							const style = el.style;
							addTransitionClass(el, moveClass);
							style.transform = style.webkitTransform = style.transitionDuration = "";
							const cb = el[moveCbKey] = (e) => {
								if (e && e.target !== el) return;
								if (!e || e.propertyName.endsWith("transform")) {
									el.removeEventListener("transitionend", cb);
									el[moveCbKey] = null;
									removeTransitionClass(el, moveClass);
								}
							};
							el.addEventListener("transitionend", cb);
						});
						prevChildren = [];
					});
					return () => {
						const rawProps = toRaw(props);
						const cssTransitionProps = resolveTransitionProps(rawProps);
						let tag = rawProps.tag || Fragment;
						prevChildren = [];
						if (children) for (let i = 0; i < children.length; i++) {
							const child = children[i];
							if (child.el && child.el instanceof Element && !child.el[vShowHidden]) {
								prevChildren.push(child);
								setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
								positionMap.set(child, getPosition(child.el));
							}
						}
						children = slots.default ? getTransitionRawChildren(slots.default()) : [];
						for (let i = 0; i < children.length; i++) {
							const child = children[i];
							if (child.key != null) setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
						}
						return createVNode(tag, null, children);
					};
				}
			});
			systemModifiers = [
				"ctrl",
				"shift",
				"alt",
				"meta"
			];
			modifierGuards = {
				stop: (e) => e.stopPropagation(),
				prevent: (e) => e.preventDefault(),
				self: (e) => e.target !== e.currentTarget,
				ctrl: (e) => !e.ctrlKey,
				shift: (e) => !e.shiftKey,
				alt: (e) => !e.altKey,
				meta: (e) => !e.metaKey,
				left: (e) => "button" in e && e.button !== 0,
				middle: (e) => "button" in e && e.button !== 1,
				right: (e) => "button" in e && e.button !== 2,
				exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
			};
			withModifiers = (fn, modifiers) => {
				if (!fn) return fn;
				const cache = fn._withMods || (fn._withMods = {});
				const cacheKey = modifiers.join(".");
				return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
					for (let i = 0; i < modifiers.length; i++) {
						const guard = modifierGuards[modifiers[i]];
						if (guard && guard(event, modifiers)) return;
					}
					return fn(event, ...args);
				}));
			};
			keyNames = {
				esc: "escape",
				space: " ",
				up: "arrow-up",
				left: "arrow-left",
				right: "arrow-right",
				down: "arrow-down",
				delete: "backspace"
			};
			withKeys = (fn, modifiers) => {
				const cache = fn._withKeys || (fn._withKeys = {});
				const cacheKey = modifiers.join(".");
				return cache[cacheKey] || (cache[cacheKey] = ((event) => {
					if (!("key" in event)) return;
					const eventKey = hyphenate$1(event.key);
					if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) return fn(event);
				}));
			};
			rendererOptions = extend({ patchProp }, nodeOps);
			render = ((...args) => {
				ensureRenderer().render(...args);
			});
			createApp = ((...args) => {
				const app = ensureRenderer().createApp(...args);
				const { mount } = app;
				app.mount = (containerOrSelector) => {
					const container = normalizeContainer(containerOrSelector);
					if (!container) return;
					const component = app._component;
					if (!isFunction$1(component) && !component.render && !component.template) component.template = container.innerHTML;
					if (container.nodeType === 1) container.textContent = "";
					const proxy = mount(container, false, resolveRootNamespace(container));
					if (container instanceof Element) {
						container.removeAttribute("v-cloak");
						container.setAttribute("data-v-app", "");
					}
					return proxy;
				};
				return app;
			});
		}));
		var init_vue_runtime_esm_bundler = __esmMin((() => {
			init_runtime_dom_esm_bundler();
		}));
		var EVENT_CODE;
		var init_aria$1 = __esmMin((() => {
			EVENT_CODE = {
				tab: "Tab",
				enter: "Enter",
				space: "Space",
				left: "ArrowLeft",
				up: "ArrowUp",
				right: "ArrowRight",
				down: "ArrowDown",
				esc: "Escape",
				delete: "Delete",
				backspace: "Backspace",
				numpadEnter: "NumpadEnter",
				pageUp: "PageUp",
				pageDown: "PageDown",
				home: "Home",
				end: "End"
			};
		}));
		var UPDATE_MODEL_EVENT;
		var CHANGE_EVENT;
		var INPUT_EVENT;
		var init_event$1 = __esmMin((() => {
			UPDATE_MODEL_EVENT = "update:modelValue";
			CHANGE_EVENT = "change";
			INPUT_EVENT = "input";
		}));
		var componentSizes;
		var init_size = __esmMin((() => {
			componentSizes = [
				"",
				"default",
				"small",
				"large"
			];
		}));
		var freeGlobal;
		var init__freeGlobal = __esmMin((() => {
			freeGlobal = typeof global == "object" && global && global.Object === Object && global;
		}));
		var freeSelf;
		var root$1;
		var init__root = __esmMin((() => {
			init__freeGlobal();
			freeSelf = typeof self == "object" && self && self.Object === Object && self;
			root$1 = freeGlobal || freeSelf || Function("return this")();
		}));
		var Symbol$1;
		var init__Symbol = __esmMin((() => {
			init__root();
			Symbol$1 = root$1.Symbol;
		}));
		function getRawTag(value) {
			var isOwn = hasOwnProperty$13.call(value, symToStringTag$1), tag = value[symToStringTag$1];
			try {
				value[symToStringTag$1] = void 0;
				var unmasked = true;
			} catch (e) {}
			var result = nativeObjectToString$1.call(value);
			if (unmasked) {
				if (isOwn) value[symToStringTag$1] = tag;
				else delete value[symToStringTag$1];
			}
			return result;
		}
		var objectProto$4;
		var hasOwnProperty$13;
		var nativeObjectToString$1;
		var symToStringTag$1;
		var init__getRawTag = __esmMin((() => {
			init__Symbol();
			objectProto$4 = Object.prototype;
			hasOwnProperty$13 = objectProto$4.hasOwnProperty;
			nativeObjectToString$1 = objectProto$4.toString;
			symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
		}));
		function objectToString(value) {
			return nativeObjectToString.call(value);
		}
		var nativeObjectToString;
		var init__objectToString = __esmMin((() => {
			nativeObjectToString = Object.prototype.toString;
		}));
		function baseGetTag(value) {
			if (value == null) return value === void 0 ? undefinedTag : nullTag;
			return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
		}
		var nullTag;
		var undefinedTag;
		var symToStringTag;
		var init__baseGetTag = __esmMin((() => {
			init__Symbol();
			init__getRawTag();
			init__objectToString();
			nullTag = "[object Null]";
			undefinedTag = "[object Undefined]";
			symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
		}));
		function isObjectLike(value) {
			return value != null && typeof value == "object";
		}
		var init_isObjectLike = __esmMin((() => {}));
		function isSymbol(value) {
			return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
		}
		var symbolTag$3;
		var init_isSymbol = __esmMin((() => {
			init__baseGetTag();
			init_isObjectLike();
			symbolTag$3 = "[object Symbol]";
		}));
		function arrayMap(array, iteratee) {
			var index = -1, length = array == null ? 0 : array.length, result = Array(length);
			while (++index < length) result[index] = iteratee(array[index], index, array);
			return result;
		}
		var init__arrayMap = __esmMin((() => {}));
		var isArray;
		var init_isArray = __esmMin((() => {
			isArray = Array.isArray;
		}));
		function baseToString(value) {
			if (typeof value == "string") return value;
			if (isArray(value)) return arrayMap(value, baseToString) + "";
			if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
			var result = value + "";
			return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
		}
		var INFINITY$1;
		var symbolProto$2;
		var symbolToString;
		var init__baseToString = __esmMin((() => {
			init__Symbol();
			init__arrayMap();
			init_isArray();
			init_isSymbol();
			INFINITY$1 = 1 / 0;
			symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0;
			symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
		}));
		function trimmedEndIndex(string) {
			var index = string.length;
			while (index-- && reWhitespace.test(string.charAt(index)));
			return index;
		}
		var reWhitespace;
		var init__trimmedEndIndex = __esmMin((() => {
			reWhitespace = /\s/;
		}));
		function baseTrim(string) {
			return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
		}
		var reTrimStart;
		var init__baseTrim = __esmMin((() => {
			init__trimmedEndIndex();
			reTrimStart = /^\s+/;
		}));
		function isObject$1(value) {
			var type = typeof value;
			return value != null && (type == "object" || type == "function");
		}
		var init_isObject = __esmMin((() => {}));
		function toNumber(value) {
			if (typeof value == "number") return value;
			if (isSymbol(value)) return NAN;
			if (isObject$1(value)) {
				var other = typeof value.valueOf == "function" ? value.valueOf() : value;
				value = isObject$1(other) ? other + "" : other;
			}
			if (typeof value != "string") return value === 0 ? value : +value;
			value = baseTrim(value);
			var isBinary = reIsBinary.test(value);
			return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
		}
		var NAN;
		var reIsBadHex;
		var reIsBinary;
		var reIsOctal;
		var freeParseInt;
		var init_toNumber = __esmMin((() => {
			init__baseTrim();
			init_isObject();
			init_isSymbol();
			NAN = NaN;
			reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
			reIsBinary = /^0b[01]+$/i;
			reIsOctal = /^0o[0-7]+$/i;
			freeParseInt = parseInt;
		}));
		function identity(value) {
			return value;
		}
		var init_identity = __esmMin((() => {}));
		function isFunction(value) {
			if (!isObject$1(value)) return false;
			var tag = baseGetTag(value);
			return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
		}
		var asyncTag;
		var funcTag$2;
		var genTag$1;
		var proxyTag;
		var init_isFunction = __esmMin((() => {
			init__baseGetTag();
			init_isObject();
			asyncTag = "[object AsyncFunction]";
			funcTag$2 = "[object Function]";
			genTag$1 = "[object GeneratorFunction]";
			proxyTag = "[object Proxy]";
		}));
		var coreJsData;
		var init__coreJsData = __esmMin((() => {
			init__root();
			coreJsData = root$1["__core-js_shared__"];
		}));
		function isMasked(func) {
			return !!maskSrcKey && maskSrcKey in func;
		}
		var maskSrcKey;
		var init__isMasked = __esmMin((() => {
			init__coreJsData();
			maskSrcKey = function() {
				var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
				return uid ? "Symbol(src)_1." + uid : "";
			}();
		}));
		function toSource(func) {
			if (func != null) {
				try {
					return funcToString$2.call(func);
				} catch (e) {}
				try {
					return func + "";
				} catch (e) {}
			}
			return "";
		}
		var funcToString$2;
		var init__toSource = __esmMin((() => {
			funcToString$2 = Function.prototype.toString;
		}));
		function baseIsNative(value) {
			if (!isObject$1(value) || isMasked(value)) return false;
			return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
		}
		var reRegExpChar;
		var reIsHostCtor;
		var funcProto$1;
		var objectProto$3;
		var funcToString$1;
		var hasOwnProperty$12;
		var reIsNative;
		var init__baseIsNative = __esmMin((() => {
			init_isFunction();
			init__isMasked();
			init_isObject();
			init__toSource();
			reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
			reIsHostCtor = /^\[object .+?Constructor\]$/;
			funcProto$1 = Function.prototype;
			objectProto$3 = Object.prototype;
			funcToString$1 = funcProto$1.toString;
			hasOwnProperty$12 = objectProto$3.hasOwnProperty;
			reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$12).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
		}));
		function getValue$1(object, key) {
			return object == null ? void 0 : object[key];
		}
		var init__getValue = __esmMin((() => {}));
		function getNative(object, key) {
			var value = getValue$1(object, key);
			return baseIsNative(value) ? value : void 0;
		}
		var init__getNative = __esmMin((() => {
			init__baseIsNative();
			init__getValue();
		}));
		var WeakMap$1;
		var init__WeakMap = __esmMin((() => {
			init__getNative();
			init__root();
			WeakMap$1 = getNative(root$1, "WeakMap");
		}));
		var objectCreate;
		var baseCreate;
		var init__baseCreate = __esmMin((() => {
			init_isObject();
			objectCreate = Object.create;
			baseCreate = function() {
				function object() {}
				return function(proto) {
					if (!isObject$1(proto)) return {};
					if (objectCreate) return objectCreate(proto);
					object.prototype = proto;
					var result = new object();
					object.prototype = void 0;
					return result;
				};
			}();
		}));
		function apply(func, thisArg, args) {
			switch (args.length) {
				case 0: return func.call(thisArg);
				case 1: return func.call(thisArg, args[0]);
				case 2: return func.call(thisArg, args[0], args[1]);
				case 3: return func.call(thisArg, args[0], args[1], args[2]);
			}
			return func.apply(thisArg, args);
		}
		var init__apply = __esmMin((() => {}));
		function copyArray(source, array) {
			var index = -1, length = source.length;
			array || (array = Array(length));
			while (++index < length) array[index] = source[index];
			return array;
		}
		var init__copyArray = __esmMin((() => {}));
		function shortOut(func) {
			var count = 0, lastCalled = 0;
			return function() {
				var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
				lastCalled = stamp;
				if (remaining > 0) {
					if (++count >= HOT_COUNT) return arguments[0];
				} else count = 0;
				return func.apply(void 0, arguments);
			};
		}
		var HOT_COUNT;
		var HOT_SPAN;
		var nativeNow;
		var init__shortOut = __esmMin((() => {
			HOT_COUNT = 800;
			HOT_SPAN = 16;
			nativeNow = Date.now;
		}));
		function constant(value) {
			return function() {
				return value;
			};
		}
		var init_constant = __esmMin((() => {}));
		var defineProperty;
		var init__defineProperty = __esmMin((() => {
			init__getNative();
			defineProperty = function() {
				try {
					var func = getNative(Object, "defineProperty");
					func({}, "", {});
					return func;
				} catch (e) {}
			}();
		}));
		var baseSetToString;
		var init__baseSetToString = __esmMin((() => {
			init_constant();
			init__defineProperty();
			init_identity();
			baseSetToString = !defineProperty ? identity : function(func, string) {
				return defineProperty(func, "toString", {
					"configurable": true,
					"enumerable": false,
					"value": constant(string),
					"writable": true
				});
			};
		}));
		var setToString;
		var init__setToString = __esmMin((() => {
			init__baseSetToString();
			init__shortOut();
			setToString = shortOut(baseSetToString);
		}));
		function arrayEach(array, iteratee) {
			var index = -1, length = array == null ? 0 : array.length;
			while (++index < length) if (iteratee(array[index], index, array) === false) break;
			return array;
		}
		var init__arrayEach = __esmMin((() => {}));
		function isIndex(value, length) {
			var type = typeof value;
			length = length == null ? MAX_SAFE_INTEGER$1 : length;
			return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
		}
		var MAX_SAFE_INTEGER$1;
		var reIsUint;
		var init__isIndex = __esmMin((() => {
			MAX_SAFE_INTEGER$1 = 9007199254740991;
			reIsUint = /^(?:0|[1-9]\d*)$/;
		}));
		function baseAssignValue(object, key, value) {
			if (key == "__proto__" && defineProperty) defineProperty(object, key, {
				"configurable": true,
				"enumerable": true,
				"value": value,
				"writable": true
			});
			else object[key] = value;
		}
		var init__baseAssignValue = __esmMin((() => {
			init__defineProperty();
		}));
		function eq(value, other) {
			return value === other || value !== value && other !== other;
		}
		var init_eq = __esmMin((() => {}));
		function assignValue(object, key, value) {
			var objValue = object[key];
			if (!(hasOwnProperty$11.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
		}
		var hasOwnProperty$11;
		var init__assignValue = __esmMin((() => {
			init__baseAssignValue();
			init_eq();
			hasOwnProperty$11 = Object.prototype.hasOwnProperty;
		}));
		function copyObject(source, props, object, customizer) {
			var isNew = !object;
			object || (object = {});
			var index = -1, length = props.length;
			while (++index < length) {
				var key = props[index];
				var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
				if (newValue === void 0) newValue = source[key];
				if (isNew) baseAssignValue(object, key, newValue);
				else assignValue(object, key, newValue);
			}
			return object;
		}
		var init__copyObject = __esmMin((() => {
			init__assignValue();
			init__baseAssignValue();
		}));
		function overRest(func, start, transform) {
			start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
			return function() {
				var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
				while (++index < length) array[index] = args[start + index];
				index = -1;
				var otherArgs = Array(start + 1);
				while (++index < start) otherArgs[index] = args[index];
				otherArgs[start] = transform(array);
				return apply(func, this, otherArgs);
			};
		}
		var nativeMax$1;
		var init__overRest = __esmMin((() => {
			init__apply();
			nativeMax$1 = Math.max;
		}));
		function isLength(value) {
			return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		}
		var MAX_SAFE_INTEGER;
		var init_isLength = __esmMin((() => {
			MAX_SAFE_INTEGER = 9007199254740991;
		}));
		function isArrayLike(value) {
			return value != null && isLength(value.length) && !isFunction(value);
		}
		var init_isArrayLike = __esmMin((() => {
			init_isFunction();
			init_isLength();
		}));
		function isPrototype(value) {
			var Ctor = value && value.constructor;
			return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
		}
		var objectProto$2;
		var init__isPrototype = __esmMin((() => {
			objectProto$2 = Object.prototype;
		}));
		function baseTimes(n, iteratee) {
			var index = -1, result = Array(n);
			while (++index < n) result[index] = iteratee(index);
			return result;
		}
		var init__baseTimes = __esmMin((() => {}));
		function baseIsArguments(value) {
			return isObjectLike(value) && baseGetTag(value) == argsTag$3;
		}
		var argsTag$3;
		var init__baseIsArguments = __esmMin((() => {
			init__baseGetTag();
			init_isObjectLike();
			argsTag$3 = "[object Arguments]";
		}));
		var objectProto$1;
		var hasOwnProperty$10;
		var propertyIsEnumerable$1;
		var isArguments;
		var init_isArguments = __esmMin((() => {
			init__baseIsArguments();
			init_isObjectLike();
			objectProto$1 = Object.prototype;
			hasOwnProperty$10 = objectProto$1.hasOwnProperty;
			propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;
			isArguments = baseIsArguments(function() {
				return arguments;
			}()) ? baseIsArguments : function(value) {
				return isObjectLike(value) && hasOwnProperty$10.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
			};
		}));
		function stubFalse() {
			return false;
		}
		var init_stubFalse = __esmMin((() => {}));
		var freeExports$2;
		var freeModule$2;
		var Buffer$2;
		var isBuffer;
		var init_isBuffer = __esmMin((() => {
			init__root();
			init_stubFalse();
			freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
			freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
			Buffer$2 = freeModule$2 && freeModule$2.exports === freeExports$2 ? root$1.Buffer : void 0;
			isBuffer = (Buffer$2 ? Buffer$2.isBuffer : void 0) || stubFalse;
		}));
		function baseIsTypedArray(value) {
			return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
		}
		var argsTag$2;
		var arrayTag$2;
		var boolTag$3;
		var dateTag$3;
		var errorTag$2;
		var funcTag$1;
		var mapTag$5;
		var numberTag$3;
		var objectTag$4;
		var regexpTag$3;
		var setTag$5;
		var stringTag$3;
		var weakMapTag$2;
		var arrayBufferTag$3;
		var dataViewTag$4;
		var float32Tag$2;
		var float64Tag$2;
		var int8Tag$2;
		var int16Tag$2;
		var int32Tag$2;
		var uint8Tag$2;
		var uint8ClampedTag$2;
		var uint16Tag$2;
		var uint32Tag$2;
		var typedArrayTags;
		var init__baseIsTypedArray = __esmMin((() => {
			init__baseGetTag();
			init_isLength();
			init_isObjectLike();
			argsTag$2 = "[object Arguments]";
			arrayTag$2 = "[object Array]";
			boolTag$3 = "[object Boolean]";
			dateTag$3 = "[object Date]";
			errorTag$2 = "[object Error]";
			funcTag$1 = "[object Function]";
			mapTag$5 = "[object Map]";
			numberTag$3 = "[object Number]";
			objectTag$4 = "[object Object]";
			regexpTag$3 = "[object RegExp]";
			setTag$5 = "[object Set]";
			stringTag$3 = "[object String]";
			weakMapTag$2 = "[object WeakMap]";
			arrayBufferTag$3 = "[object ArrayBuffer]";
			dataViewTag$4 = "[object DataView]";
			float32Tag$2 = "[object Float32Array]";
			float64Tag$2 = "[object Float64Array]";
			int8Tag$2 = "[object Int8Array]";
			int16Tag$2 = "[object Int16Array]";
			int32Tag$2 = "[object Int32Array]";
			uint8Tag$2 = "[object Uint8Array]";
			uint8ClampedTag$2 = "[object Uint8ClampedArray]";
			uint16Tag$2 = "[object Uint16Array]";
			uint32Tag$2 = "[object Uint32Array]";
			typedArrayTags = {};
			typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
			typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
		}));
		function baseUnary(func) {
			return function(value) {
				return func(value);
			};
		}
		var init__baseUnary = __esmMin((() => {}));
		var freeExports$1;
		var freeModule$1;
		var freeProcess;
		var nodeUtil;
		var init__nodeUtil = __esmMin((() => {
			init__freeGlobal();
			freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
			freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
			freeProcess = freeModule$1 && freeModule$1.exports === freeExports$1 && freeGlobal.process;
			nodeUtil = function() {
				try {
					var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
					if (types) return types;
					return freeProcess && freeProcess.binding && freeProcess.binding("util");
				} catch (e) {}
			}();
		}));
		var nodeIsTypedArray;
		var isTypedArray;
		var init_isTypedArray = __esmMin((() => {
			init__baseIsTypedArray();
			init__baseUnary();
			init__nodeUtil();
			nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
			isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
		}));
		function arrayLikeKeys(value, inherited) {
			var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
			for (var key in value) if ((inherited || hasOwnProperty$9.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
			return result;
		}
		var hasOwnProperty$9;
		var init__arrayLikeKeys = __esmMin((() => {
			init__baseTimes();
			init_isArguments();
			init_isArray();
			init_isBuffer();
			init__isIndex();
			init_isTypedArray();
			hasOwnProperty$9 = Object.prototype.hasOwnProperty;
		}));
		function overArg(func, transform) {
			return function(arg) {
				return func(transform(arg));
			};
		}
		var init__overArg = __esmMin((() => {}));
		var nativeKeys;
		var init__nativeKeys = __esmMin((() => {
			init__overArg();
			nativeKeys = overArg(Object.keys, Object);
		}));
		function baseKeys(object) {
			if (!isPrototype(object)) return nativeKeys(object);
			var result = [];
			for (var key in Object(object)) if (hasOwnProperty$8.call(object, key) && key != "constructor") result.push(key);
			return result;
		}
		var hasOwnProperty$8;
		var init__baseKeys = __esmMin((() => {
			init__isPrototype();
			init__nativeKeys();
			hasOwnProperty$8 = Object.prototype.hasOwnProperty;
		}));
		function keys(object) {
			return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
		}
		var init_keys = __esmMin((() => {
			init__arrayLikeKeys();
			init__baseKeys();
			init_isArrayLike();
		}));
		function nativeKeysIn(object) {
			var result = [];
			if (object != null) for (var key in Object(object)) result.push(key);
			return result;
		}
		var init__nativeKeysIn = __esmMin((() => {}));
		function baseKeysIn(object) {
			if (!isObject$1(object)) return nativeKeysIn(object);
			var isProto = isPrototype(object), result = [];
			for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$7.call(object, key)))) result.push(key);
			return result;
		}
		var hasOwnProperty$7;
		var init__baseKeysIn = __esmMin((() => {
			init_isObject();
			init__isPrototype();
			init__nativeKeysIn();
			hasOwnProperty$7 = Object.prototype.hasOwnProperty;
		}));
		function keysIn(object) {
			return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
		}
		var init_keysIn = __esmMin((() => {
			init__arrayLikeKeys();
			init__baseKeysIn();
			init_isArrayLike();
		}));
		function isKey(value, object) {
			if (isArray(value)) return false;
			var type = typeof value;
			if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
			return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
		}
		var reIsDeepProp;
		var reIsPlainProp;
		var init__isKey = __esmMin((() => {
			init_isArray();
			init_isSymbol();
			reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
			reIsPlainProp = /^\w*$/;
		}));
		var nativeCreate;
		var init__nativeCreate = __esmMin((() => {
			init__getNative();
			nativeCreate = getNative(Object, "create");
		}));
		function hashClear() {
			this.__data__ = nativeCreate ? nativeCreate(null) : {};
			this.size = 0;
		}
		var init__hashClear = __esmMin((() => {
			init__nativeCreate();
		}));
		function hashDelete(key) {
			var result = this.has(key) && delete this.__data__[key];
			this.size -= result ? 1 : 0;
			return result;
		}
		var init__hashDelete = __esmMin((() => {}));
		function hashGet(key) {
			var data = this.__data__;
			if (nativeCreate) {
				var result = data[key];
				return result === HASH_UNDEFINED$2 ? void 0 : result;
			}
			return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
		}
		var HASH_UNDEFINED$2;
		var hasOwnProperty$6;
		var init__hashGet = __esmMin((() => {
			init__nativeCreate();
			HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
			hasOwnProperty$6 = Object.prototype.hasOwnProperty;
		}));
		function hashHas(key) {
			var data = this.__data__;
			return nativeCreate ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
		}
		var hasOwnProperty$5;
		var init__hashHas = __esmMin((() => {
			init__nativeCreate();
			hasOwnProperty$5 = Object.prototype.hasOwnProperty;
		}));
		function hashSet(key, value) {
			var data = this.__data__;
			this.size += this.has(key) ? 0 : 1;
			data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
			return this;
		}
		var HASH_UNDEFINED$1;
		var init__hashSet = __esmMin((() => {
			init__nativeCreate();
			HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
		}));
		function Hash(entries) {
			var index = -1, length = entries == null ? 0 : entries.length;
			this.clear();
			while (++index < length) {
				var entry = entries[index];
				this.set(entry[0], entry[1]);
			}
		}
		var init__Hash = __esmMin((() => {
			init__hashClear();
			init__hashDelete();
			init__hashGet();
			init__hashHas();
			init__hashSet();
			Hash.prototype.clear = hashClear;
			Hash.prototype["delete"] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;
		}));
		function listCacheClear() {
			this.__data__ = [];
			this.size = 0;
		}
		var init__listCacheClear = __esmMin((() => {}));
		function assocIndexOf(array, key) {
			var length = array.length;
			while (length--) if (eq(array[length][0], key)) return length;
			return -1;
		}
		var init__assocIndexOf = __esmMin((() => {
			init_eq();
		}));
		function listCacheDelete(key) {
			var data = this.__data__, index = assocIndexOf(data, key);
			if (index < 0) return false;
			if (index == data.length - 1) data.pop();
			else splice.call(data, index, 1);
			--this.size;
			return true;
		}
		var splice;
		var init__listCacheDelete = __esmMin((() => {
			init__assocIndexOf();
			splice = Array.prototype.splice;
		}));
		function listCacheGet(key) {
			var data = this.__data__, index = assocIndexOf(data, key);
			return index < 0 ? void 0 : data[index][1];
		}
		var init__listCacheGet = __esmMin((() => {
			init__assocIndexOf();
		}));
		function listCacheHas(key) {
			return assocIndexOf(this.__data__, key) > -1;
		}
		var init__listCacheHas = __esmMin((() => {
			init__assocIndexOf();
		}));
		function listCacheSet(key, value) {
			var data = this.__data__, index = assocIndexOf(data, key);
			if (index < 0) {
				++this.size;
				data.push([key, value]);
			} else data[index][1] = value;
			return this;
		}
		var init__listCacheSet = __esmMin((() => {
			init__assocIndexOf();
		}));
		function ListCache(entries) {
			var index = -1, length = entries == null ? 0 : entries.length;
			this.clear();
			while (++index < length) {
				var entry = entries[index];
				this.set(entry[0], entry[1]);
			}
		}
		var init__ListCache = __esmMin((() => {
			init__listCacheClear();
			init__listCacheDelete();
			init__listCacheGet();
			init__listCacheHas();
			init__listCacheSet();
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype["delete"] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;
		}));
		var Map$1;
		var init__Map = __esmMin((() => {
			init__getNative();
			init__root();
			Map$1 = getNative(root$1, "Map");
		}));
		function mapCacheClear() {
			this.size = 0;
			this.__data__ = {
				"hash": new Hash(),
				"map": new (Map$1 || ListCache)(),
				"string": new Hash()
			};
		}
		var init__mapCacheClear = __esmMin((() => {
			init__Hash();
			init__ListCache();
			init__Map();
		}));
		function isKeyable(value) {
			var type = typeof value;
			return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
		}
		var init__isKeyable = __esmMin((() => {}));
		function getMapData(map, key) {
			var data = map.__data__;
			return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
		}
		var init__getMapData = __esmMin((() => {
			init__isKeyable();
		}));
		function mapCacheDelete(key) {
			var result = getMapData(this, key)["delete"](key);
			this.size -= result ? 1 : 0;
			return result;
		}
		var init__mapCacheDelete = __esmMin((() => {
			init__getMapData();
		}));
		function mapCacheGet(key) {
			return getMapData(this, key).get(key);
		}
		var init__mapCacheGet = __esmMin((() => {
			init__getMapData();
		}));
		function mapCacheHas(key) {
			return getMapData(this, key).has(key);
		}
		var init__mapCacheHas = __esmMin((() => {
			init__getMapData();
		}));
		function mapCacheSet(key, value) {
			var data = getMapData(this, key), size = data.size;
			data.set(key, value);
			this.size += data.size == size ? 0 : 1;
			return this;
		}
		var init__mapCacheSet = __esmMin((() => {
			init__getMapData();
		}));
		function MapCache(entries) {
			var index = -1, length = entries == null ? 0 : entries.length;
			this.clear();
			while (++index < length) {
				var entry = entries[index];
				this.set(entry[0], entry[1]);
			}
		}
		var init__MapCache = __esmMin((() => {
			init__mapCacheClear();
			init__mapCacheDelete();
			init__mapCacheGet();
			init__mapCacheHas();
			init__mapCacheSet();
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype["delete"] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;
		}));
		function memoize(func, resolver) {
			if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT$1);
			var memoized = function() {
				var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
				if (cache.has(key)) return cache.get(key);
				var result = func.apply(this, args);
				memoized.cache = cache.set(key, result) || cache;
				return result;
			};
			memoized.cache = new (memoize.Cache || MapCache)();
			return memoized;
		}
		var FUNC_ERROR_TEXT$1;
		var init_memoize = __esmMin((() => {
			init__MapCache();
			FUNC_ERROR_TEXT$1 = "Expected a function";
			memoize.Cache = MapCache;
		}));
		function memoizeCapped(func) {
			var result = memoize(func, function(key) {
				if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
				return key;
			});
			var cache = result.cache;
			return result;
		}
		var MAX_MEMOIZE_SIZE;
		var init__memoizeCapped = __esmMin((() => {
			init_memoize();
			MAX_MEMOIZE_SIZE = 500;
		}));
		var rePropName;
		var reEscapeChar;
		var stringToPath;
		var init__stringToPath = __esmMin((() => {
			init__memoizeCapped();
			rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
			reEscapeChar = /\\(\\)?/g;
			stringToPath = memoizeCapped(function(string) {
				var result = [];
				if (string.charCodeAt(0) === 46) result.push("");
				string.replace(rePropName, function(match, number, quote, subString) {
					result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
				});
				return result;
			});
		}));
		function toString$1(value) {
			return value == null ? "" : baseToString(value);
		}
		var init_toString = __esmMin((() => {
			init__baseToString();
		}));
		function castPath(value, object) {
			if (isArray(value)) return value;
			return isKey(value, object) ? [value] : stringToPath(toString$1(value));
		}
		var init__castPath = __esmMin((() => {
			init_isArray();
			init__isKey();
			init__stringToPath();
			init_toString();
		}));
		function toKey(value) {
			if (typeof value == "string" || isSymbol(value)) return value;
			var result = value + "";
			return result == "0" && 1 / value == -INFINITY ? "-0" : result;
		}
		var INFINITY;
		var init__toKey = __esmMin((() => {
			init_isSymbol();
			INFINITY = 1 / 0;
		}));
		function baseGet(object, path) {
			path = castPath(path, object);
			var index = 0, length = path.length;
			while (object != null && index < length) object = object[toKey(path[index++])];
			return index && index == length ? object : void 0;
		}
		var init__baseGet = __esmMin((() => {
			init__castPath();
			init__toKey();
		}));
		function get(object, path, defaultValue) {
			var result = object == null ? void 0 : baseGet(object, path);
			return result === void 0 ? defaultValue : result;
		}
		var init_get = __esmMin((() => {
			init__baseGet();
		}));
		function arrayPush(array, values) {
			var index = -1, length = values.length, offset = array.length;
			while (++index < length) array[offset + index] = values[index];
			return array;
		}
		var init__arrayPush = __esmMin((() => {}));
		function isFlattenable(value) {
			return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
		}
		var spreadableSymbol;
		var init__isFlattenable = __esmMin((() => {
			init__Symbol();
			init_isArguments();
			init_isArray();
			spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
		}));
		function baseFlatten(array, depth, predicate, isStrict, result) {
			var index = -1, length = array.length;
			predicate || (predicate = isFlattenable);
			result || (result = []);
			while (++index < length) {
				var value = array[index];
				if (depth > 0 && predicate(value)) {
					if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
					else arrayPush(result, value);
				} else if (!isStrict) result[result.length] = value;
			}
			return result;
		}
		var init__baseFlatten = __esmMin((() => {
			init__arrayPush();
			init__isFlattenable();
		}));
		function flatten(array) {
			return (array == null ? 0 : array.length) ? baseFlatten(array, 1) : [];
		}
		var init_flatten = __esmMin((() => {
			init__baseFlatten();
		}));
		function flatRest(func) {
			return setToString(overRest(func, void 0, flatten), func + "");
		}
		var init__flatRest = __esmMin((() => {
			init_flatten();
			init__overRest();
			init__setToString();
		}));
		var getPrototype;
		var init__getPrototype = __esmMin((() => {
			init__overArg();
			getPrototype = overArg(Object.getPrototypeOf, Object);
		}));
		function isPlainObject(value) {
			if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) return false;
			var proto = getPrototype(value);
			if (proto === null) return true;
			var Ctor = hasOwnProperty$4.call(proto, "constructor") && proto.constructor;
			return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
		}
		var objectTag$3;
		var funcProto;
		var objectProto;
		var funcToString;
		var hasOwnProperty$4;
		var objectCtorString;
		var init_isPlainObject = __esmMin((() => {
			init__baseGetTag();
			init__getPrototype();
			init_isObjectLike();
			objectTag$3 = "[object Object]";
			funcProto = Function.prototype;
			objectProto = Object.prototype;
			funcToString = funcProto.toString;
			hasOwnProperty$4 = objectProto.hasOwnProperty;
			objectCtorString = funcToString.call(Object);
		}));
		function baseSlice(array, start, end) {
			var index = -1, length = array.length;
			if (start < 0) start = -start > length ? 0 : length + start;
			end = end > length ? length : end;
			if (end < 0) end += length;
			length = start > end ? 0 : end - start >>> 0;
			start >>>= 0;
			var result = Array(length);
			while (++index < length) result[index] = array[index + start];
			return result;
		}
		var init__baseSlice = __esmMin((() => {}));
		function castArray$1() {
			if (!arguments.length) return [];
			var value = arguments[0];
			return isArray(value) ? value : [value];
		}
		var init_castArray = __esmMin((() => {
			init_isArray();
		}));
		function baseClamp(number, lower, upper) {
			if (number === number) {
				if (upper !== void 0) number = number <= upper ? number : upper;
				if (lower !== void 0) number = number >= lower ? number : lower;
			}
			return number;
		}
		var init__baseClamp = __esmMin((() => {}));
		function clamp(number, lower, upper) {
			if (upper === void 0) {
				upper = lower;
				lower = void 0;
			}
			if (upper !== void 0) {
				upper = toNumber(upper);
				upper = upper === upper ? upper : 0;
			}
			if (lower !== void 0) {
				lower = toNumber(lower);
				lower = lower === lower ? lower : 0;
			}
			return baseClamp(toNumber(number), lower, upper);
		}
		var init_clamp = __esmMin((() => {
			init__baseClamp();
			init_toNumber();
		}));
		function stackClear() {
			this.__data__ = new ListCache();
			this.size = 0;
		}
		var init__stackClear = __esmMin((() => {
			init__ListCache();
		}));
		function stackDelete(key) {
			var data = this.__data__, result = data["delete"](key);
			this.size = data.size;
			return result;
		}
		var init__stackDelete = __esmMin((() => {}));
		function stackGet(key) {
			return this.__data__.get(key);
		}
		var init__stackGet = __esmMin((() => {}));
		function stackHas(key) {
			return this.__data__.has(key);
		}
		var init__stackHas = __esmMin((() => {}));
		function stackSet(key, value) {
			var data = this.__data__;
			if (data instanceof ListCache) {
				var pairs = data.__data__;
				if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
					pairs.push([key, value]);
					this.size = ++data.size;
					return this;
				}
				data = this.__data__ = new MapCache(pairs);
			}
			data.set(key, value);
			this.size = data.size;
			return this;
		}
		var LARGE_ARRAY_SIZE;
		var init__stackSet = __esmMin((() => {
			init__ListCache();
			init__Map();
			init__MapCache();
			LARGE_ARRAY_SIZE = 200;
		}));
		function Stack(entries) {
			var data = this.__data__ = new ListCache(entries);
			this.size = data.size;
		}
		var init__Stack = __esmMin((() => {
			init__ListCache();
			init__stackClear();
			init__stackDelete();
			init__stackGet();
			init__stackHas();
			init__stackSet();
			Stack.prototype.clear = stackClear;
			Stack.prototype["delete"] = stackDelete;
			Stack.prototype.get = stackGet;
			Stack.prototype.has = stackHas;
			Stack.prototype.set = stackSet;
		}));
		function baseAssign(object, source) {
			return object && copyObject(source, keys(source), object);
		}
		var init__baseAssign = __esmMin((() => {
			init__copyObject();
			init_keys();
		}));
		function baseAssignIn(object, source) {
			return object && copyObject(source, keysIn(source), object);
		}
		var init__baseAssignIn = __esmMin((() => {
			init__copyObject();
			init_keysIn();
		}));
		function cloneBuffer(buffer, isDeep) {
			if (isDeep) return buffer.slice();
			var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
			buffer.copy(result);
			return result;
		}
		var freeExports;
		var freeModule;
		var Buffer$1;
		var allocUnsafe;
		var init__cloneBuffer = __esmMin((() => {
			init__root();
			freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
			freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
			Buffer$1 = freeModule && freeModule.exports === freeExports ? root$1.Buffer : void 0;
			allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
		}));
		function arrayFilter(array, predicate) {
			var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
			while (++index < length) {
				var value = array[index];
				if (predicate(value, index, array)) result[resIndex++] = value;
			}
			return result;
		}
		var init__arrayFilter = __esmMin((() => {}));
		function stubArray() {
			return [];
		}
		var init_stubArray = __esmMin((() => {}));
		var propertyIsEnumerable;
		var nativeGetSymbols;
		var getSymbols;
		var init__getSymbols = __esmMin((() => {
			init__arrayFilter();
			init_stubArray();
			propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
			nativeGetSymbols = Object.getOwnPropertySymbols;
			getSymbols = !nativeGetSymbols ? stubArray : function(object) {
				if (object == null) return [];
				object = Object(object);
				return arrayFilter(nativeGetSymbols(object), function(symbol) {
					return propertyIsEnumerable.call(object, symbol);
				});
			};
		}));
		function copySymbols(source, object) {
			return copyObject(source, getSymbols(source), object);
		}
		var init__copySymbols = __esmMin((() => {
			init__copyObject();
			init__getSymbols();
		}));
		var getSymbolsIn;
		var init__getSymbolsIn = __esmMin((() => {
			init__arrayPush();
			init__getPrototype();
			init__getSymbols();
			init_stubArray();
			getSymbolsIn = !Object.getOwnPropertySymbols ? stubArray : function(object) {
				var result = [];
				while (object) {
					arrayPush(result, getSymbols(object));
					object = getPrototype(object);
				}
				return result;
			};
		}));
		function copySymbolsIn(source, object) {
			return copyObject(source, getSymbolsIn(source), object);
		}
		var init__copySymbolsIn = __esmMin((() => {
			init__copyObject();
			init__getSymbolsIn();
		}));
		function baseGetAllKeys(object, keysFunc, symbolsFunc) {
			var result = keysFunc(object);
			return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
		}
		var init__baseGetAllKeys = __esmMin((() => {
			init__arrayPush();
			init_isArray();
		}));
		function getAllKeys(object) {
			return baseGetAllKeys(object, keys, getSymbols);
		}
		var init__getAllKeys = __esmMin((() => {
			init__baseGetAllKeys();
			init__getSymbols();
			init_keys();
		}));
		function getAllKeysIn(object) {
			return baseGetAllKeys(object, keysIn, getSymbolsIn);
		}
		var init__getAllKeysIn = __esmMin((() => {
			init__baseGetAllKeys();
			init__getSymbolsIn();
			init_keysIn();
		}));
		var DataView;
		var init__DataView = __esmMin((() => {
			init__getNative();
			init__root();
			DataView = getNative(root$1, "DataView");
		}));
		var Promise$1;
		var init__Promise = __esmMin((() => {
			init__getNative();
			init__root();
			Promise$1 = getNative(root$1, "Promise");
		}));
		var Set$1;
		var init__Set = __esmMin((() => {
			init__getNative();
			init__root();
			Set$1 = getNative(root$1, "Set");
		}));
		var mapTag$4;
		var objectTag$2;
		var promiseTag;
		var setTag$4;
		var weakMapTag$1;
		var dataViewTag$3;
		var dataViewCtorString;
		var mapCtorString;
		var promiseCtorString;
		var setCtorString;
		var weakMapCtorString;
		var getTag;
		var _getTag_default;
		var init__getTag = __esmMin((() => {
			init__DataView();
			init__Map();
			init__Promise();
			init__Set();
			init__WeakMap();
			init__baseGetTag();
			init__toSource();
			mapTag$4 = "[object Map]";
			objectTag$2 = "[object Object]";
			promiseTag = "[object Promise]";
			setTag$4 = "[object Set]";
			weakMapTag$1 = "[object WeakMap]";
			dataViewTag$3 = "[object DataView]";
			dataViewCtorString = toSource(DataView);
			mapCtorString = toSource(Map$1);
			promiseCtorString = toSource(Promise$1);
			setCtorString = toSource(Set$1);
			weakMapCtorString = toSource(WeakMap$1);
			getTag = baseGetTag;
			if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) getTag = function(value) {
				var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
				if (ctorString) switch (ctorString) {
					case dataViewCtorString: return dataViewTag$3;
					case mapCtorString: return mapTag$4;
					case promiseCtorString: return promiseTag;
					case setCtorString: return setTag$4;
					case weakMapCtorString: return weakMapTag$1;
				}
				return result;
			};
			_getTag_default = getTag;
		}));
		function initCloneArray(array) {
			var length = array.length, result = new array.constructor(length);
			if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
				result.index = array.index;
				result.input = array.input;
			}
			return result;
		}
		var hasOwnProperty$3;
		var init__initCloneArray = __esmMin((() => {
			hasOwnProperty$3 = Object.prototype.hasOwnProperty;
		}));
		var Uint8Array$1;
		var init__Uint8Array = __esmMin((() => {
			init__root();
			Uint8Array$1 = root$1.Uint8Array;
		}));
		function cloneArrayBuffer(arrayBuffer) {
			var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
			new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
			return result;
		}
		var init__cloneArrayBuffer = __esmMin((() => {
			init__Uint8Array();
		}));
		function cloneDataView(dataView, isDeep) {
			var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
			return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
		}
		var init__cloneDataView = __esmMin((() => {
			init__cloneArrayBuffer();
		}));
		function cloneRegExp(regexp) {
			var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
			result.lastIndex = regexp.lastIndex;
			return result;
		}
		var reFlags;
		var init__cloneRegExp = __esmMin((() => {
			reFlags = /\w*$/;
		}));
		function cloneSymbol(symbol) {
			return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
		}
		var symbolProto$1;
		var symbolValueOf$1;
		var init__cloneSymbol = __esmMin((() => {
			init__Symbol();
			symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0;
			symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
		}));
		function cloneTypedArray(typedArray, isDeep) {
			var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
			return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
		}
		var init__cloneTypedArray = __esmMin((() => {
			init__cloneArrayBuffer();
		}));
		function initCloneByTag(object, tag, isDeep) {
			var Ctor = object.constructor;
			switch (tag) {
				case arrayBufferTag$2: return cloneArrayBuffer(object);
				case boolTag$2:
				case dateTag$2: return new Ctor(+object);
				case dataViewTag$2: return cloneDataView(object, isDeep);
				case float32Tag$1:
				case float64Tag$1:
				case int8Tag$1:
				case int16Tag$1:
				case int32Tag$1:
				case uint8Tag$1:
				case uint8ClampedTag$1:
				case uint16Tag$1:
				case uint32Tag$1: return cloneTypedArray(object, isDeep);
				case mapTag$3: return new Ctor();
				case numberTag$2:
				case stringTag$2: return new Ctor(object);
				case regexpTag$2: return cloneRegExp(object);
				case setTag$3: return new Ctor();
				case symbolTag$2: return cloneSymbol(object);
			}
		}
		var boolTag$2;
		var dateTag$2;
		var mapTag$3;
		var numberTag$2;
		var regexpTag$2;
		var setTag$3;
		var stringTag$2;
		var symbolTag$2;
		var arrayBufferTag$2;
		var dataViewTag$2;
		var float32Tag$1;
		var float64Tag$1;
		var int8Tag$1;
		var int16Tag$1;
		var int32Tag$1;
		var uint8Tag$1;
		var uint8ClampedTag$1;
		var uint16Tag$1;
		var uint32Tag$1;
		var init__initCloneByTag = __esmMin((() => {
			init__cloneArrayBuffer();
			init__cloneDataView();
			init__cloneRegExp();
			init__cloneSymbol();
			init__cloneTypedArray();
			boolTag$2 = "[object Boolean]";
			dateTag$2 = "[object Date]";
			mapTag$3 = "[object Map]";
			numberTag$2 = "[object Number]";
			regexpTag$2 = "[object RegExp]";
			setTag$3 = "[object Set]";
			stringTag$2 = "[object String]";
			symbolTag$2 = "[object Symbol]";
			arrayBufferTag$2 = "[object ArrayBuffer]";
			dataViewTag$2 = "[object DataView]";
			float32Tag$1 = "[object Float32Array]";
			float64Tag$1 = "[object Float64Array]";
			int8Tag$1 = "[object Int8Array]";
			int16Tag$1 = "[object Int16Array]";
			int32Tag$1 = "[object Int32Array]";
			uint8Tag$1 = "[object Uint8Array]";
			uint8ClampedTag$1 = "[object Uint8ClampedArray]";
			uint16Tag$1 = "[object Uint16Array]";
			uint32Tag$1 = "[object Uint32Array]";
		}));
		function initCloneObject(object) {
			return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
		}
		var init__initCloneObject = __esmMin((() => {
			init__baseCreate();
			init__getPrototype();
			init__isPrototype();
		}));
		function baseIsMap(value) {
			return isObjectLike(value) && _getTag_default(value) == mapTag$2;
		}
		var mapTag$2;
		var init__baseIsMap = __esmMin((() => {
			init__getTag();
			init_isObjectLike();
			mapTag$2 = "[object Map]";
		}));
		var nodeIsMap;
		var isMap;
		var init_isMap = __esmMin((() => {
			init__baseIsMap();
			init__baseUnary();
			init__nodeUtil();
			nodeIsMap = nodeUtil && nodeUtil.isMap;
			isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
		}));
		function baseIsSet(value) {
			return isObjectLike(value) && _getTag_default(value) == setTag$2;
		}
		var setTag$2;
		var init__baseIsSet = __esmMin((() => {
			init__getTag();
			init_isObjectLike();
			setTag$2 = "[object Set]";
		}));
		var nodeIsSet;
		var isSet;
		var init_isSet = __esmMin((() => {
			init__baseIsSet();
			init__baseUnary();
			init__nodeUtil();
			nodeIsSet = nodeUtil && nodeUtil.isSet;
			isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
		}));
		function baseClone(value, bitmask, customizer, key, object, stack) {
			var result, isDeep = bitmask & CLONE_DEEP_FLAG$2, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
			if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
			if (result !== void 0) return result;
			if (!isObject$1(value)) return value;
			var isArr = isArray(value);
			if (isArr) {
				result = initCloneArray(value);
				if (!isDeep) return copyArray(value, result);
			} else {
				var tag = _getTag_default(value), isFunc = tag == funcTag || tag == genTag;
				if (isBuffer(value)) return cloneBuffer(value, isDeep);
				if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
					result = isFlat || isFunc ? {} : initCloneObject(value);
					if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
				} else {
					if (!cloneableTags[tag]) return object ? value : {};
					result = initCloneByTag(value, tag, isDeep);
				}
			}
			stack || (stack = new Stack());
			var stacked = stack.get(value);
			if (stacked) return stacked;
			stack.set(value, result);
			if (isSet(value)) value.forEach(function(subValue) {
				result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
			});
			else if (isMap(value)) value.forEach(function(subValue, key) {
				result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
			});
			var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
			arrayEach(props || value, function(subValue, key) {
				if (props) {
					key = subValue;
					subValue = value[key];
				}
				assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
			});
			return result;
		}
		var CLONE_DEEP_FLAG$2;
		var CLONE_FLAT_FLAG$1;
		var CLONE_SYMBOLS_FLAG$2;
		var argsTag$1;
		var arrayTag$1;
		var boolTag$1;
		var dateTag$1;
		var errorTag$1;
		var funcTag;
		var genTag;
		var mapTag$1;
		var numberTag$1;
		var objectTag$1;
		var regexpTag$1;
		var setTag$1;
		var stringTag$1;
		var symbolTag$1;
		var weakMapTag;
		var arrayBufferTag$1;
		var dataViewTag$1;
		var float32Tag;
		var float64Tag;
		var int8Tag;
		var int16Tag;
		var int32Tag;
		var uint8Tag;
		var uint8ClampedTag;
		var uint16Tag;
		var uint32Tag;
		var cloneableTags;
		var init__baseClone = __esmMin((() => {
			init__Stack();
			init__arrayEach();
			init__assignValue();
			init__baseAssign();
			init__baseAssignIn();
			init__cloneBuffer();
			init__copyArray();
			init__copySymbols();
			init__copySymbolsIn();
			init__getAllKeys();
			init__getAllKeysIn();
			init__getTag();
			init__initCloneArray();
			init__initCloneByTag();
			init__initCloneObject();
			init_isArray();
			init_isBuffer();
			init_isMap();
			init_isObject();
			init_isSet();
			init_keys();
			init_keysIn();
			CLONE_DEEP_FLAG$2 = 1;
			CLONE_FLAT_FLAG$1 = 2;
			CLONE_SYMBOLS_FLAG$2 = 4;
			argsTag$1 = "[object Arguments]";
			arrayTag$1 = "[object Array]";
			boolTag$1 = "[object Boolean]";
			dateTag$1 = "[object Date]";
			errorTag$1 = "[object Error]";
			funcTag = "[object Function]";
			genTag = "[object GeneratorFunction]";
			mapTag$1 = "[object Map]";
			numberTag$1 = "[object Number]";
			objectTag$1 = "[object Object]";
			regexpTag$1 = "[object RegExp]";
			setTag$1 = "[object Set]";
			stringTag$1 = "[object String]";
			symbolTag$1 = "[object Symbol]";
			weakMapTag = "[object WeakMap]";
			arrayBufferTag$1 = "[object ArrayBuffer]";
			dataViewTag$1 = "[object DataView]";
			float32Tag = "[object Float32Array]";
			float64Tag = "[object Float64Array]";
			int8Tag = "[object Int8Array]";
			int16Tag = "[object Int16Array]";
			int32Tag = "[object Int32Array]";
			uint8Tag = "[object Uint8Array]";
			uint8ClampedTag = "[object Uint8ClampedArray]";
			uint16Tag = "[object Uint16Array]";
			uint32Tag = "[object Uint32Array]";
			cloneableTags = {};
			cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
			cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
		}));
		function cloneDeep(value) {
			return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
		}
		var CLONE_DEEP_FLAG$1;
		var CLONE_SYMBOLS_FLAG$1;
		var init_cloneDeep = __esmMin((() => {
			init__baseClone();
			CLONE_DEEP_FLAG$1 = 1;
			CLONE_SYMBOLS_FLAG$1 = 4;
		}));
		function setCacheAdd(value) {
			this.__data__.set(value, HASH_UNDEFINED);
			return this;
		}
		var HASH_UNDEFINED;
		var init__setCacheAdd = __esmMin((() => {
			HASH_UNDEFINED = "__lodash_hash_undefined__";
		}));
		function setCacheHas(value) {
			return this.__data__.has(value);
		}
		var init__setCacheHas = __esmMin((() => {}));
		function SetCache(values) {
			var index = -1, length = values == null ? 0 : values.length;
			this.__data__ = new MapCache();
			while (++index < length) this.add(values[index]);
		}
		var init__SetCache = __esmMin((() => {
			init__MapCache();
			init__setCacheAdd();
			init__setCacheHas();
			SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
			SetCache.prototype.has = setCacheHas;
		}));
		function arraySome(array, predicate) {
			var index = -1, length = array == null ? 0 : array.length;
			while (++index < length) if (predicate(array[index], index, array)) return true;
			return false;
		}
		var init__arraySome = __esmMin((() => {}));
		function cacheHas(cache, key) {
			return cache.has(key);
		}
		var init__cacheHas = __esmMin((() => {}));
		function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
			var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
			if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
			var arrStacked = stack.get(array);
			var othStacked = stack.get(other);
			if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
			var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
			stack.set(array, other);
			stack.set(other, array);
			while (++index < arrLength) {
				var arrValue = array[index], othValue = other[index];
				if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
				if (compared !== void 0) {
					if (compared) continue;
					result = false;
					break;
				}
				if (seen) {
					if (!arraySome(other, function(othValue, othIndex) {
						if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
					})) {
						result = false;
						break;
					}
				} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
					result = false;
					break;
				}
			}
			stack["delete"](array);
			stack["delete"](other);
			return result;
		}
		var COMPARE_PARTIAL_FLAG$3;
		var COMPARE_UNORDERED_FLAG$1;
		var init__equalArrays = __esmMin((() => {
			init__SetCache();
			init__arraySome();
			init__cacheHas();
			COMPARE_PARTIAL_FLAG$3 = 1;
			COMPARE_UNORDERED_FLAG$1 = 2;
		}));
		function mapToArray(map) {
			var index = -1, result = Array(map.size);
			map.forEach(function(value, key) {
				result[++index] = [key, value];
			});
			return result;
		}
		var init__mapToArray = __esmMin((() => {}));
		function setToArray(set) {
			var index = -1, result = Array(set.size);
			set.forEach(function(value) {
				result[++index] = value;
			});
			return result;
		}
		var init__setToArray = __esmMin((() => {}));
		function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
			switch (tag) {
				case dataViewTag:
					if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
					object = object.buffer;
					other = other.buffer;
				case arrayBufferTag:
					if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) return false;
					return true;
				case boolTag:
				case dateTag:
				case numberTag: return eq(+object, +other);
				case errorTag: return object.name == other.name && object.message == other.message;
				case regexpTag:
				case stringTag: return object == other + "";
				case mapTag: var convert = mapToArray;
				case setTag:
					var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
					convert || (convert = setToArray);
					if (object.size != other.size && !isPartial) return false;
					var stacked = stack.get(object);
					if (stacked) return stacked == other;
					bitmask |= COMPARE_UNORDERED_FLAG;
					stack.set(object, other);
					var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
					stack["delete"](object);
					return result;
				case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
			}
			return false;
		}
		var COMPARE_PARTIAL_FLAG$2;
		var COMPARE_UNORDERED_FLAG;
		var boolTag;
		var dateTag;
		var errorTag;
		var mapTag;
		var numberTag;
		var regexpTag;
		var setTag;
		var stringTag;
		var symbolTag;
		var arrayBufferTag;
		var dataViewTag;
		var symbolProto;
		var symbolValueOf;
		var init__equalByTag = __esmMin((() => {
			init__Symbol();
			init__Uint8Array();
			init_eq();
			init__equalArrays();
			init__mapToArray();
			init__setToArray();
			COMPARE_PARTIAL_FLAG$2 = 1;
			COMPARE_UNORDERED_FLAG = 2;
			boolTag = "[object Boolean]";
			dateTag = "[object Date]";
			errorTag = "[object Error]";
			mapTag = "[object Map]";
			numberTag = "[object Number]";
			regexpTag = "[object RegExp]";
			setTag = "[object Set]";
			stringTag = "[object String]";
			symbolTag = "[object Symbol]";
			arrayBufferTag = "[object ArrayBuffer]";
			dataViewTag = "[object DataView]";
			symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
			symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
		}));
		function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
			var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length;
			if (objLength != getAllKeys(other).length && !isPartial) return false;
			var index = objLength;
			while (index--) {
				var key = objProps[index];
				if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) return false;
			}
			var objStacked = stack.get(object);
			var othStacked = stack.get(other);
			if (objStacked && othStacked) return objStacked == other && othStacked == object;
			var result = true;
			stack.set(object, other);
			stack.set(other, object);
			var skipCtor = isPartial;
			while (++index < objLength) {
				key = objProps[index];
				var objValue = object[key], othValue = other[key];
				if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
				if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
					result = false;
					break;
				}
				skipCtor || (skipCtor = key == "constructor");
			}
			if (result && !skipCtor) {
				var objCtor = object.constructor, othCtor = other.constructor;
				if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
			}
			stack["delete"](object);
			stack["delete"](other);
			return result;
		}
		var COMPARE_PARTIAL_FLAG$1;
		var hasOwnProperty$2;
		var init__equalObjects = __esmMin((() => {
			init__getAllKeys();
			COMPARE_PARTIAL_FLAG$1 = 1;
			hasOwnProperty$2 = Object.prototype.hasOwnProperty;
		}));
		function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
			var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
			objTag = objTag == argsTag ? objectTag : objTag;
			othTag = othTag == argsTag ? objectTag : othTag;
			var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
			if (isSameTag && isBuffer(object)) {
				if (!isBuffer(other)) return false;
				objIsArr = true;
				objIsObj = false;
			}
			if (isSameTag && !objIsObj) {
				stack || (stack = new Stack());
				return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
			}
			if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
				var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
				if (objIsWrapped || othIsWrapped) {
					var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
					stack || (stack = new Stack());
					return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
				}
			}
			if (!isSameTag) return false;
			stack || (stack = new Stack());
			return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
		}
		var COMPARE_PARTIAL_FLAG;
		var argsTag;
		var arrayTag;
		var objectTag;
		var hasOwnProperty$1;
		var init__baseIsEqualDeep = __esmMin((() => {
			init__Stack();
			init__equalArrays();
			init__equalByTag();
			init__equalObjects();
			init__getTag();
			init_isArray();
			init_isBuffer();
			init_isTypedArray();
			COMPARE_PARTIAL_FLAG = 1;
			argsTag = "[object Arguments]";
			arrayTag = "[object Array]";
			objectTag = "[object Object]";
			hasOwnProperty$1 = Object.prototype.hasOwnProperty;
		}));
		function baseIsEqual(value, other, bitmask, customizer, stack) {
			if (value === other) return true;
			if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
			return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
		}
		var init__baseIsEqual = __esmMin((() => {
			init__baseIsEqualDeep();
			init_isObjectLike();
		}));
		function baseHasIn(object, key) {
			return object != null && key in Object(object);
		}
		var init__baseHasIn = __esmMin((() => {}));
		function hasPath(object, path, hasFunc) {
			path = castPath(path, object);
			var index = -1, length = path.length, result = false;
			while (++index < length) {
				var key = toKey(path[index]);
				if (!(result = object != null && hasFunc(object, key))) break;
				object = object[key];
			}
			if (result || ++index != length) return result;
			length = object == null ? 0 : object.length;
			return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
		}
		var init__hasPath = __esmMin((() => {
			init__castPath();
			init_isArguments();
			init_isArray();
			init__isIndex();
			init_isLength();
			init__toKey();
		}));
		function hasIn(object, path) {
			return object != null && hasPath(object, path, baseHasIn);
		}
		var init_hasIn = __esmMin((() => {
			init__baseHasIn();
			init__hasPath();
		}));
		var now;
		var init_now = __esmMin((() => {
			init__root();
			now = function() {
				return root$1.Date.now();
			};
		}));
		function debounce(func, wait, options) {
			var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
			if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
			wait = toNumber(wait) || 0;
			if (isObject$1(options)) {
				leading = !!options.leading;
				maxing = "maxWait" in options;
				maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
				trailing = "trailing" in options ? !!options.trailing : trailing;
			}
			function invokeFunc(time) {
				var args = lastArgs, thisArg = lastThis;
				lastArgs = lastThis = void 0;
				lastInvokeTime = time;
				result = func.apply(thisArg, args);
				return result;
			}
			function leadingEdge(time) {
				lastInvokeTime = time;
				timerId = setTimeout(timerExpired, wait);
				return leading ? invokeFunc(time) : result;
			}
			function remainingWait(time) {
				var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
				return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
			}
			function shouldInvoke(time) {
				var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
				return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
			}
			function timerExpired() {
				var time = now();
				if (shouldInvoke(time)) return trailingEdge(time);
				timerId = setTimeout(timerExpired, remainingWait(time));
			}
			function trailingEdge(time) {
				timerId = void 0;
				if (trailing && lastArgs) return invokeFunc(time);
				lastArgs = lastThis = void 0;
				return result;
			}
			function cancel() {
				if (timerId !== void 0) clearTimeout(timerId);
				lastInvokeTime = 0;
				lastArgs = lastCallTime = lastThis = timerId = void 0;
			}
			function flush() {
				return timerId === void 0 ? result : trailingEdge(now());
			}
			function debounced() {
				var time = now(), isInvoking = shouldInvoke(time);
				lastArgs = arguments;
				lastThis = this;
				lastCallTime = time;
				if (isInvoking) {
					if (timerId === void 0) return leadingEdge(lastCallTime);
					if (maxing) {
						clearTimeout(timerId);
						timerId = setTimeout(timerExpired, wait);
						return invokeFunc(lastCallTime);
					}
				}
				if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
				return result;
			}
			debounced.cancel = cancel;
			debounced.flush = flush;
			return debounced;
		}
		var FUNC_ERROR_TEXT;
		var nativeMax;
		var nativeMin;
		var init_debounce = __esmMin((() => {
			init_isObject();
			init_now();
			init_toNumber();
			FUNC_ERROR_TEXT = "Expected a function";
			nativeMax = Math.max;
			nativeMin = Math.min;
		}));
		function last(array) {
			var length = array == null ? 0 : array.length;
			return length ? array[length - 1] : void 0;
		}
		var init_last = __esmMin((() => {}));
		function fromPairs(pairs) {
			var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
			while (++index < length) {
				var pair = pairs[index];
				baseAssignValue(result, pair[0], pair[1]);
			}
			return result;
		}
		var init_fromPairs = __esmMin((() => {
			init__baseAssignValue();
		}));
		function parent(object, path) {
			return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
		}
		var init__parent = __esmMin((() => {
			init__baseGet();
			init__baseSlice();
		}));
		function isEqual(value, other) {
			return baseIsEqual(value, other);
		}
		var init_isEqual = __esmMin((() => {
			init__baseIsEqual();
		}));
		function isNil(value) {
			return value == null;
		}
		var init_isNil = __esmMin((() => {}));
		function isUndefined$1(value) {
			return value === void 0;
		}
		var init_isUndefined = __esmMin((() => {}));
		function baseUnset(object, path) {
			path = castPath(path, object);
			var index = -1, length = path.length;
			if (!length) return true;
			while (++index < length) {
				var key = toKey(path[index]);
				if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) return false;
				if ((key === "constructor" || key === "prototype") && index < length - 1) return false;
			}
			var obj = parent(object, path);
			return obj == null || delete obj[toKey(last(path))];
		}
		var hasOwnProperty;
		var init__baseUnset = __esmMin((() => {
			init__castPath();
			init_last();
			init__parent();
			init__toKey();
			hasOwnProperty = Object.prototype.hasOwnProperty;
		}));
		function customOmitClone(value) {
			return isPlainObject(value) ? void 0 : value;
		}
		var init__customOmitClone = __esmMin((() => {
			init_isPlainObject();
		}));
		var CLONE_DEEP_FLAG;
		var CLONE_FLAT_FLAG;
		var CLONE_SYMBOLS_FLAG;
		var omit;
		var init_omit = __esmMin((() => {
			init__arrayMap();
			init__baseClone();
			init__baseUnset();
			init__castPath();
			init__copyObject();
			init__customOmitClone();
			init__flatRest();
			init__getAllKeysIn();
			CLONE_DEEP_FLAG = 1;
			CLONE_FLAT_FLAG = 2;
			CLONE_SYMBOLS_FLAG = 4;
			omit = flatRest(function(object, paths) {
				var result = {};
				if (object == null) return result;
				var isDeep = false;
				paths = arrayMap(paths, function(path) {
					path = castPath(path, object);
					isDeep || (isDeep = path.length > 1);
					return path;
				});
				copyObject(object, getAllKeysIn(object), result);
				if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
				var length = paths.length;
				while (length--) baseUnset(result, paths[length]);
				return result;
			});
		}));
		function baseSet(object, path, value, customizer) {
			if (!isObject$1(object)) return object;
			path = castPath(path, object);
			var index = -1, length = path.length, lastIndex = length - 1, nested = object;
			while (nested != null && ++index < length) {
				var key = toKey(path[index]), newValue = value;
				if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
				if (index != lastIndex) {
					var objValue = nested[key];
					newValue = customizer ? customizer(objValue, key, nested) : void 0;
					if (newValue === void 0) newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
				}
				assignValue(nested, key, newValue);
				nested = nested[key];
			}
			return object;
		}
		var init__baseSet = __esmMin((() => {
			init__assignValue();
			init__castPath();
			init__isIndex();
			init_isObject();
			init__toKey();
		}));
		function basePickBy(object, paths, predicate) {
			var index = -1, length = paths.length, result = {};
			while (++index < length) {
				var path = paths[index], value = baseGet(object, path);
				if (predicate(value, path)) baseSet(result, castPath(path, object), value);
			}
			return result;
		}
		var init__basePickBy = __esmMin((() => {
			init__baseGet();
			init__baseSet();
			init__castPath();
		}));
		function basePick(object, paths) {
			return basePickBy(object, paths, function(value, path) {
				return hasIn(object, path);
			});
		}
		var init__basePick = __esmMin((() => {
			init__basePickBy();
			init_hasIn();
		}));
		var pick;
		var init_pick = __esmMin((() => {
			init__basePick();
			init__flatRest();
			pick = flatRest(function(object, paths) {
				return object == null ? {} : basePick(object, paths);
			});
		}));
		function set(object, path, value) {
			return object == null ? object : baseSet(object, path, value);
		}
		var init_set = __esmMin((() => {
			init__baseSet();
		}));
		var init_lodash = __esmMin((() => {
			init_isSymbol();
			init__baseToString();
			init_toNumber();
			init_identity();
			init__WeakMap();
			init__baseCreate();
			init_isObject();
			init__root();
			init__apply();
			init_isArray();
			init_isObjectLike();
			init__copyArray();
			init__shortOut();
			init__setToString();
			init__arrayEach();
			init__isIndex();
			init__assignValue();
			init__copyObject();
			init__overRest();
			init_eq();
			init_isArrayLike();
			init__isPrototype();
			init_keys();
			init_keysIn();
			init_get();
			init__flatRest();
			init__baseGetTag();
			init_isPlainObject();
			init__baseAssignValue();
			init__toKey();
			init_toString();
			init__baseSlice();
			init_castArray();
			init_clamp();
			init__baseClone();
			init_cloneDeep();
			init__arrayPush();
			init__baseFlatten();
			init__arrayMap();
			init__Stack();
			init__baseIsEqual();
			init_hasIn();
			init__isKey();
			init__baseGet();
			init_constant();
			init__baseAssign();
			init_debounce();
			init__cloneBuffer();
			init__cloneTypedArray();
			init__initCloneObject();
			init_isArguments();
			init_isBuffer();
			init_isFunction();
			init_isTypedArray();
			init__SetCache();
			init__baseUnary();
			init__cacheHas();
			init_last();
			init__baseClamp();
			init__getTag();
			init__mapToArray();
			init__arrayFilter();
			init_flatten();
			init_fromPairs();
			init__hasPath();
			init__castPath();
			init__parent();
			init__nodeUtil();
			init__baseKeys();
			init_isEqual();
			init_isLength();
			init_isMap();
			init__baseIsNative();
			init__coreJsData();
			init_stubFalse();
			init_isNil();
			init_isSet();
			init_isUndefined();
			init_memoize();
			init__Symbol();
			init__setToArray();
			init_now();
			init_omit();
			init__basePickBy();
			init__getAllKeysIn();
			init__arraySome();
			init_pick();
			init__baseUnset();
			init_set();
			init__baseSet();
			init_stubArray();
			init__baseTimes();
			init__stringToPath();
			init__getPrototype();
			init__baseTrim();
			init__trimmedEndIndex();
			init__Set();
		}));
		var init_import = __esmMin((() => {
			init_lodash();
		}));
		var isUndefined;
		var isBoolean;
		var isNumber;
		var isElement;
		var isStringNumber;
		var init_types = __esmMin((() => {
			init_shared_esm_bundler();
			init_import();
			isUndefined = (val) => val === void 0;
			isBoolean = (val) => typeof val === "boolean";
			isNumber = (val) => typeof val === "number";
			isElement = (e) => {
				if (typeof Element === "undefined") return false;
				return e instanceof Element;
			};
			isStringNumber = (val) => {
				if (!isString(val)) return false;
				return !Number.isNaN(Number(val));
			};
		}));
		var keysOf;
		var getProp;
		var init_objects = __esmMin((() => {
			init_shared_esm_bundler();
			init_import();
			keysOf = (arr) => Object.keys(arr);
			getProp = (obj, path, defaultValue) => {
				return {
					get value() {
						return get(obj, path, defaultValue);
					},
					set value(val) {
						set(obj, path, val);
					}
				};
			};
		}));
		var epPropKey;
		var definePropType;
		var isEpProp;
		var buildProp;
		var buildProps;
		var init_runtime = __esmMin((() => {
			init_types();
			init_objects();
			init_import();
			init_vue_runtime_esm_bundler();
			epPropKey = "__epPropKey";
			definePropType = (val) => val;
			isEpProp = (val) => isObject$2(val) && !!val["__epPropKey"];
			buildProp = (prop, key) => {
				if (!isObject$2(prop) || isEpProp(prop)) return prop;
				const { values, required, default: defaultValue, type, validator } = prop;
				const epProp = {
					type,
					required: !!required,
					validator: values || validator ? (val) => {
						let valid = false;
						let allowedValues = [];
						if (values) {
							allowedValues = Array.from(values);
							if (hasOwn(prop, "default")) allowedValues.push(defaultValue);
							valid ||= allowedValues.includes(val);
						}
						if (validator) valid ||= validator(val);
						if (!valid && allowedValues.length > 0) {
							const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
							warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
						}
						return valid;
					} : void 0,
					[epPropKey]: true
				};
				if (hasOwn(prop, "default")) epProp.default = defaultValue;
				return epProp;
			};
			buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
		}));
		function throwError(scope, m) {
			throw new ElementPlusError(`[${scope}] ${m}`);
		}
		function debugWarn(scope, message) {
			{
				const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
				console.warn(error);
			}
		}
		var ElementPlusError;
		var init_error = __esmMin((() => {
			init_types();
			ElementPlusError = class extends Error {
				constructor(m) {
					super(m);
					this.name = "ElementPlusError";
				}
			};
		}));
		var DEFAULT_EXCLUDE_KEYS;
		var LISTENER_PREFIX;
		var useAttrs;
		var init_use_attrs = __esmMin((() => {
			init_error();
			init_import();
			init_vue_runtime_esm_bundler();
			DEFAULT_EXCLUDE_KEYS = ["class", "style"];
			LISTENER_PREFIX = /^on[A-Z]/;
			useAttrs = (params = {}) => {
				const { excludeListeners = false, excludeKeys } = params;
				const allExcludeKeys = computed(() => {
					return (excludeKeys?.value || []).concat(DEFAULT_EXCLUDE_KEYS);
				});
				const instance = getCurrentInstance();
				if (!instance) {
					debugWarn("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
					return computed(() => ({}));
				}
				return computed(() => fromPairs(Object.entries(instance.proxy?.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key)))));
			};
		}));
		function computedEager(fn, options) {
			var _options$flush;
			const result = shallowRef();
			watchEffect(() => {
				result.value = fn();
			}, {
				...options,
				flush: (_options$flush = options === null || options === void 0 ? void 0 : options.flush) !== null && _options$flush !== void 0 ? _options$flush : "sync"
			});
			return readonly(result);
		}
		function tryOnScopeDispose(fn, failSilently) {
			if (getCurrentScope()) {
				onScopeDispose(fn, failSilently);
				return true;
			}
			return false;
		}
		function getIsIOS() {
			var _window, _window2, _window3;
			return isClient && !!((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
		}
		function createFilterWrapper(filter, fn) {
			function wrapper(...args) {
				return new Promise((resolve, reject) => {
					Promise.resolve(filter(() => fn.apply(this, args), {
						fn,
						thisArg: this,
						args
					})).then(resolve).catch(reject);
				});
			}
			if ("cancel" in filter) Object.assign(wrapper, {
				cancel: filter.cancel,
				flush: filter.flush,
				isPending: filter.isPending
			});
			return wrapper;
		}
		function debounceFilter(ms, options = {}) {
			let timer;
			let maxTimer;
			let lastRejector = noop;
			let lastResolve = noop;
			const _pending = shallowRef(false);
			const _clearTimeout = (timer) => {
				clearTimeout(timer);
				lastRejector();
				lastRejector = noop;
			};
			let lastInvoker;
			const handler = (invoke) => {
				const duration = toValue(ms);
				const maxDuration = toValue(options.maxWait);
				if (timer) _clearTimeout(timer);
				if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
					if (maxTimer) {
						_clearTimeout(maxTimer);
						maxTimer = void 0;
					}
					_pending.value = false;
					return Promise.resolve(invoke());
				}
				_pending.value = true;
				return new Promise((resolve, reject) => {
					lastRejector = options.rejectOnCancel ? reject : resolve;
					lastResolve = resolve;
					lastInvoker = invoke;
					if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
						if (timer) _clearTimeout(timer);
						maxTimer = void 0;
						_pending.value = false;
						resolve(lastInvoker());
					}, maxDuration);
					timer = setTimeout(() => {
						if (maxTimer) _clearTimeout(maxTimer);
						maxTimer = void 0;
						_pending.value = false;
						resolve(invoke());
					}, duration);
				});
			};
			return Object.assign(handler, {
				cancel: () => {
					if (timer) {
						_clearTimeout(timer);
						timer = void 0;
					}
					if (maxTimer) {
						_clearTimeout(maxTimer);
						maxTimer = void 0;
					}
					_pending.value = false;
					lastResolve = noop;
				},
				flush: () => {
					if (_pending.value) {
						if (timer) {
							clearTimeout(timer);
							timer = void 0;
						}
						if (maxTimer) {
							clearTimeout(maxTimer);
							maxTimer = void 0;
						}
						_pending.value = false;
						const resolve = lastResolve;
						lastRejector = noop;
						lastResolve = noop;
						resolve(lastInvoker());
					}
				},
				isPending: shallowReadonly(_pending)
			});
		}
		function toArray(value) {
			return Array.isArray(value) ? value : [value];
		}
		function getLifeCycleTarget(target) {
			return target || getCurrentInstance();
		}
		function toReactive(objectRef) {
			if (!isRef(objectRef)) return reactive(objectRef);
			return reactive(new Proxy({}, {
				get(_, p, receiver) {
					return unref(Reflect.get(objectRef.value, p, receiver));
				},
				set(_, p, value) {
					if (isRef(objectRef.value[p]) && !isRef(value)) objectRef.value[p].value = value;
					else objectRef.value[p] = value;
					return true;
				},
				deleteProperty(_, p) {
					return Reflect.deleteProperty(objectRef.value, p);
				},
				has(_, p) {
					return Reflect.has(objectRef.value, p);
				},
				ownKeys() {
					return Object.keys(objectRef.value);
				},
				getOwnPropertyDescriptor() {
					return {
						enumerable: true,
						configurable: true
					};
				}
			}));
		}
		function reactiveComputed(fn) {
			return toReactive(computed(fn));
		}
		function useDebounceFn(fn, ms = 200, options = {}) {
			return createFilterWrapper(debounceFilter(ms, options), fn);
		}
		function refDebounced(value, ms = 200, options = {}) {
			const debounced = ref(toValue(value));
			const updater = useDebounceFn(() => {
				debounced.value = value.value;
			}, ms, options);
			watch(value, () => updater());
			return shallowReadonly(debounced);
		}
		function tryOnMounted(fn, sync = true, target) {
			if (getLifeCycleTarget(target)) onMounted(fn, target);
			else if (sync) fn();
			else nextTick(fn);
		}
		function useTimeoutFn(cb, interval, options = {}) {
			const { immediate = true, immediateCallback = false } = options;
			const isPending = shallowRef(false);
			let timer;
			function clear() {
				if (timer) {
					clearTimeout(timer);
					timer = void 0;
				}
			}
			function stop() {
				isPending.value = false;
				clear();
			}
			function start(...args) {
				if (immediateCallback) cb();
				clear();
				isPending.value = true;
				timer = setTimeout(() => {
					isPending.value = false;
					timer = void 0;
					cb(...args);
				}, toValue(interval));
			}
			if (immediate) {
				isPending.value = true;
				if (isClient) start();
			}
			tryOnScopeDispose(stop);
			return {
				isPending: shallowReadonly(isPending),
				start,
				stop
			};
		}
		function watchImmediate(source, cb, options) {
			return watch(source, cb, {
				...options,
				immediate: true
			});
		}
		var isClient;
		var toString;
		var isObject;
		var noop;
		var isIOS;
		var init_dist$3 = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			isClient = typeof window !== "undefined" && typeof document !== "undefined";
			typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
			toString = Object.prototype.toString;
			isObject = (val) => toString.call(val) === "[object Object]";
			noop = () => {};
			isIOS = getIsIOS();
		}));
		function unrefElement(elRef) {
			var _$el;
			const plain = toValue(elRef);
			return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
		}
		function useEventListener(...args) {
			const register = (el, event, listener, options) => {
				el.addEventListener(event, listener, options);
				return () => el.removeEventListener(event, listener, options);
			};
			const firstParamTargets = computed(() => {
				const test = toArray(toValue(args[0])).filter((e) => e != null);
				return test.every((e) => typeof e !== "string") ? test : void 0;
			});
			return watchImmediate(() => {
				var _firstParamTargets$va, _firstParamTargets$va2;
				return [
					(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
					toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
					toArray(unref(firstParamTargets.value ? args[2] : args[1])),
					toValue(firstParamTargets.value ? args[3] : args[2])
				];
			}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
				if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
				const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
				const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
				onCleanup(() => {
					cleanups.forEach((fn) => fn());
				});
			}, { flush: "post" });
		}
		function onClickOutside(target, handler, options = {}) {
			const { window = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
			if (!window) return controls ? {
				stop: noop,
				cancel: noop,
				trigger: noop
			} : noop;
			if (isIOS && !_iOSWorkaround) {
				_iOSWorkaround = true;
				const listenerOptions = { passive: true };
				Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", noop, listenerOptions));
				window.document.documentElement.addEventListener("click", noop, listenerOptions);
			}
			let shouldListen = true;
			const shouldIgnore = (event) => {
				return toValue(ignore).some((target) => {
					if (typeof target === "string") return Array.from(window.document.querySelectorAll(target)).some((el) => el === event.target || event.composedPath().includes(el));
					else {
						const el = unrefElement(target);
						return el && (event.target === el || event.composedPath().includes(el));
					}
				});
			};
			function hasMultipleRoots(target) {
				const vm = toValue(target);
				return vm && vm.$.subTree.shapeFlag === 16;
			}
			function checkMultipleRoots(target, event) {
				const vm = toValue(target);
				const children = vm.$.subTree && vm.$.subTree.children;
				if (children == null || !Array.isArray(children)) return false;
				return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
			}
			const listener = (event) => {
				const el = unrefElement(target);
				if (event.target == null) return;
				if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
				if (!el || el === event.target || event.composedPath().includes(el)) return;
				if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
				if (!shouldListen) {
					shouldListen = true;
					return;
				}
				handler(event);
			};
			let isProcessingClick = false;
			const cleanup = [
				useEventListener(window, "click", (event) => {
					if (!isProcessingClick) {
						isProcessingClick = true;
						setTimeout(() => {
							isProcessingClick = false;
						}, 0);
						listener(event);
					}
				}, {
					passive: true,
					capture
				}),
				useEventListener(window, "pointerdown", (e) => {
					const el = unrefElement(target);
					shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
				}, { passive: true }),
				detectIframe && useEventListener(window, "blur", (event) => {
					setTimeout(() => {
						const el = unrefElement(target);
						let activeEl = window.document.activeElement;
						while (activeEl === null || activeEl === void 0 ? void 0 : activeEl.shadowRoot) activeEl = activeEl.shadowRoot.activeElement;
						if ((activeEl === null || activeEl === void 0 ? void 0 : activeEl.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window.document.activeElement))) handler(event);
					}, 0);
				}, { passive: true })
			].filter(Boolean);
			const stop = () => cleanup.forEach((fn) => fn());
			if (controls) return {
				stop,
				cancel: () => {
					shouldListen = false;
				},
				trigger: (event) => {
					shouldListen = true;
					listener(event);
					shouldListen = false;
				}
			};
			return stop;
		}
		function useMounted() {
			const isMounted = shallowRef(false);
			const instance = getCurrentInstance();
			if (instance) onMounted(() => {
				isMounted.value = true;
			}, instance);
			return isMounted;
		}
		function useSupported(callback) {
			const isMounted = useMounted();
			return computed(() => {
				isMounted.value;
				return Boolean(callback());
			});
		}
		function useDocumentVisibility(options = {}) {
			const { document = defaultDocument } = options;
			if (!document) return shallowRef("visible");
			const visibility = shallowRef(document.visibilityState);
			useEventListener(document, "visibilitychange", () => {
				visibility.value = document.visibilityState;
			}, { passive: true });
			return visibility;
		}
		function useResizeObserver(target, callback, options = {}) {
			const { window = defaultWindow, ...observerOptions } = options;
			let observer;
			const isSupported = useSupported(() => window && "ResizeObserver" in window);
			const cleanup = () => {
				if (observer) {
					observer.disconnect();
					observer = void 0;
				}
			};
			const stopWatch = watch(computed(() => {
				const _targets = toValue(target);
				return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
			}), (els) => {
				cleanup();
				if (isSupported.value && window) {
					observer = new ResizeObserver(callback);
					for (const _el of els) if (_el instanceof Element) observer.observe(_el, observerOptions);
				}
			}, {
				immediate: true,
				flush: "post"
			});
			const stop = () => {
				cleanup();
				stopWatch();
			};
			tryOnScopeDispose(stop);
			return {
				isSupported,
				stop
			};
		}
		function useElementSize(target, initialSize = {
			width: 0,
			height: 0
		}, options = {}) {
			const { window = defaultWindow, box = "content-box" } = options;
			const isSVG = computed(() => {
				var _unrefElement;
				return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
			});
			const width = shallowRef(initialSize.width);
			const height = shallowRef(initialSize.height);
			const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
				const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
				if (window && isSVG.value) {
					const $elem = unrefElement(target);
					if ($elem) {
						const rect = $elem.getBoundingClientRect();
						width.value = rect.width;
						height.value = rect.height;
					}
				} else if (boxSize) {
					const formatBoxSize = toArray(boxSize);
					width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
					height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
				} else {
					width.value = entry.contentRect.width;
					height.value = entry.contentRect.height;
				}
			}, options);
			tryOnMounted(() => {
				const ele = unrefElement(target);
				if (ele && "offsetWidth" in ele) {
					if (box === "content-box" && window) {
						const cs = window.getComputedStyle(ele);
						const padX = Number.parseFloat(cs.paddingLeft) + Number.parseFloat(cs.paddingRight);
						const padY = Number.parseFloat(cs.paddingTop) + Number.parseFloat(cs.paddingBottom);
						const bdX = Number.parseFloat(cs.borderLeftWidth) + Number.parseFloat(cs.borderRightWidth);
						const bdY = Number.parseFloat(cs.borderTopWidth) + Number.parseFloat(cs.borderBottomWidth);
						width.value = ele.offsetWidth - padX - bdX;
						height.value = ele.offsetHeight - padY - bdY;
					} else {
						width.value = ele.offsetWidth;
						height.value = ele.offsetHeight;
					}
				} else if (ele) {
					width.value = initialSize.width;
					height.value = initialSize.height;
				}
			});
			const stop2 = watch(() => unrefElement(target), (ele) => {
				width.value = ele ? initialSize.width : 0;
				height.value = ele ? initialSize.height : 0;
			});
			function stop() {
				stop1();
				stop2();
			}
			return {
				width,
				height,
				stop
			};
		}
		function useWindowFocus(options = {}) {
			const { window = defaultWindow } = options;
			if (!window) return shallowRef(false);
			const focused = shallowRef(window.document.hasFocus());
			const listenerOptions = { passive: true };
			useEventListener(window, "blur", () => {
				focused.value = false;
			}, listenerOptions);
			useEventListener(window, "focus", () => {
				focused.value = true;
			}, listenerOptions);
			return focused;
		}
		var defaultWindow;
		var defaultDocument;
		var _iOSWorkaround;
		var init_dist$2 = __esmMin((() => {
			init_dist$3();
			init_vue_runtime_esm_bundler();
			init_dist$3();
			defaultWindow = isClient ? window : void 0;
			defaultDocument = isClient ? window.document : void 0;
			isClient && window.navigator;
			isClient && window.location;
			_iOSWorkaround = false;
		}));
		var useDeprecated;
		var init_use_deprecated = __esmMin((() => {
			init_error();
			init_vue_runtime_esm_bundler();
			useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
				watch(() => unref(condition), (val) => {
					if (val) debugWarn(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`);
				}, { immediate: true });
			};
		}));
		var isShadowRoot;
		var isHTMLElement;
		var isFocusable;
		var focusElement;
		var init_aria = __esmMin((() => {
			isShadowRoot = (e) => {
				if (typeof ShadowRoot === "undefined") return false;
				return e instanceof ShadowRoot;
			};
			isHTMLElement = (e) => {
				if (typeof Element === "undefined") return false;
				return e instanceof Element;
			};
			isFocusable = (element) => {
				if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) return true;
				if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") return false;
				switch (element.nodeName) {
					case "A": return !!element.href && element.rel !== "ignore";
					case "INPUT": return !(element.type === "hidden" || element.type === "file");
					case "BUTTON":
					case "SELECT":
					case "TEXTAREA": return true;
					default: return false;
				}
			};
			focusElement = (el, options) => {
				if (!el || !el.focus) return;
				let cleanup = false;
				if (isHTMLElement(el) && !isFocusable(el) && !el.getAttribute("tabindex")) {
					el.setAttribute("tabindex", "-1");
					cleanup = true;
				}
				el.focus(options);
				if (isHTMLElement(el) && cleanup) el.removeAttribute("tabindex");
			};
		}));
		var isFirefox;
		var isAndroid;
		var init_browser = __esmMin((() => {
			init_dist$2();
			isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
			isAndroid = () => isClient && /android/i.test(window.navigator.userAgent);
		}));
		var capitalize;
		var init_strings = __esmMin((() => {
			init_shared_esm_bundler();
			capitalize = (str) => capitalize$1(str);
		}));
		function addUnit(value, defaultUnit = "px") {
			if (!value && value !== 0) return "";
			if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`;
			else if (isString(value)) return value;
			debugWarn(SCOPE$3, "binding value must be a string or number");
		}
		var SCOPE$3;
		var classNameToArray;
		var hasClass;
		var addClass;
		var removeClass;
		var getStyle;
		var init_style$1 = __esmMin((() => {
			init_aria();
			init_browser();
			init_types();
			init_strings();
			init_error();
			SCOPE$3 = "utils/dom/style";
			classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
			hasClass = (el, cls) => {
				if (!el || !cls) return false;
				if (cls.includes(" ")) throw new Error("className should not contain space.");
				return el.classList.contains(cls);
			};
			addClass = (el, cls) => {
				if (!el || !cls.trim()) return;
				el.classList.add(...classNameToArray(cls));
			};
			removeClass = (el, cls) => {
				if (!el || !cls.trim()) return;
				el.classList.remove(...classNameToArray(cls));
			};
			getStyle = (element, styleName) => {
				if (!isClient || !element || !styleName || isShadowRoot(element)) return "";
				let key = camelize$1(styleName);
				if (key === "float") key = "cssFloat";
				try {
					const style = element.style[key];
					if (style) return style;
					const computed = document.defaultView?.getComputedStyle(element, "");
					return computed ? computed[key] : "";
				} catch {
					return element.style[key];
				}
			};
		}));
		var useDraggable;
		var init_use_draggable = __esmMin((() => {
			init_style$1();
			init_import();
			init_vue_runtime_esm_bundler();
			useDraggable = (targetRef, dragRef, draggable, overflow) => {
				const transform = {
					offsetX: 0,
					offsetY: 0
				};
				const isDragging = ref(false);
				const adjustPosition = (moveX, moveY) => {
					if (targetRef.value) {
						const { offsetX, offsetY } = transform;
						const targetRect = targetRef.value.getBoundingClientRect();
						const targetLeft = Math.max(targetRect.left, 0);
						const targetTop = Math.max(targetRect.top, 0);
						const targetWidth = targetRect.width;
						const targetHeight = targetRect.height;
						const clientWidth = document.documentElement.clientWidth;
						const clientHeight = document.documentElement.clientHeight;
						const minLeft = -targetLeft + offsetX;
						const minTop = -targetTop + offsetY;
						const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
						const maxTop = clientHeight - targetTop - (targetHeight < clientHeight ? targetHeight : 0) + offsetY;
						if (!overflow?.value) {
							moveX = clamp(moveX, minLeft, maxLeft);
							moveY = clamp(moveY, minTop, maxTop);
						}
						transform.offsetX = moveX;
						transform.offsetY = moveY;
						targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
					}
				};
				const onMousedown = (e) => {
					const downX = e.clientX;
					const downY = e.clientY;
					const { offsetX, offsetY } = transform;
					const onMousemove = (e) => {
						if (!isDragging.value) isDragging.value = true;
						const moveX = offsetX + e.clientX - downX;
						const moveY = offsetY + e.clientY - downY;
						adjustPosition(moveX, moveY);
					};
					const onMouseup = () => {
						isDragging.value = false;
						document.removeEventListener("mousemove", onMousemove);
						document.removeEventListener("mouseup", onMouseup);
					};
					document.addEventListener("mousemove", onMousemove);
					document.addEventListener("mouseup", onMouseup);
				};
				const onDraggable = () => {
					if (dragRef.value && targetRef.value) {
						dragRef.value.addEventListener("mousedown", onMousedown);
						window.addEventListener("resize", updatePosition);
					}
				};
				const offDraggable = () => {
					if (dragRef.value && targetRef.value) {
						dragRef.value.removeEventListener("mousedown", onMousedown);
						window.removeEventListener("resize", updatePosition);
					}
				};
				const resetPosition = () => {
					transform.offsetX = 0;
					transform.offsetY = 0;
					if (targetRef.value) targetRef.value.style.transform = "";
				};
				const updatePosition = () => {
					const { offsetX, offsetY } = transform;
					adjustPosition(offsetX, offsetY);
				};
				onMounted(() => {
					watchEffect(() => {
						if (draggable.value) onDraggable();
						else offDraggable();
					});
				});
				onBeforeUnmount(() => {
					offDraggable();
				});
				return {
					isDragging,
					resetPosition,
					updatePosition
				};
			};
		}));
		var en_default;
		var init_en = __esmMin((() => {
			en_default = {
				name: "en",
				el: {
					breadcrumb: { label: "Breadcrumb" },
					colorpicker: {
						confirm: "OK",
						clear: "Clear",
						defaultLabel: "color picker",
						description: "current color is {color}. press enter to select a new color.",
						alphaLabel: "pick alpha value",
						alphaDescription: "alpha {alpha}, current color is {color}",
						hueLabel: "pick hue value",
						hueDescription: "hue {hue}, current color is {color}",
						svLabel: "pick saturation and brightness value",
						svDescription: "saturation {saturation}, brightness {brightness}, current color is {color}",
						predefineDescription: "select {value} as the color"
					},
					datepicker: {
						now: "Now",
						today: "Today",
						cancel: "Cancel",
						clear: "Clear",
						confirm: "OK",
						dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
						monthTablePrompt: "Use the arrow keys and enter to select the month",
						quarterTablePrompt: "Use the arrow keys and enter to select the quarter",
						yearTablePrompt: "Use the arrow keys and enter to select the year",
						selectedDate: "Selected date",
						selectDate: "Select date",
						selectTime: "Select time",
						startDate: "Start Date",
						startTime: "Start Time",
						endDate: "End Date",
						endTime: "End Time",
						prevYear: "Previous Year",
						nextYear: "Next Year",
						prevMonth: "Previous Month",
						nextMonth: "Next Month",
						year: "",
						month1: "January",
						month2: "February",
						month3: "March",
						month4: "April",
						month5: "May",
						month6: "June",
						month7: "July",
						month8: "August",
						month9: "September",
						month10: "October",
						month11: "November",
						month12: "December",
						weeks: {
							sun: "Sun",
							mon: "Mon",
							tue: "Tue",
							wed: "Wed",
							thu: "Thu",
							fri: "Fri",
							sat: "Sat"
						},
						weeksFull: {
							sun: "Sunday",
							mon: "Monday",
							tue: "Tuesday",
							wed: "Wednesday",
							thu: "Thursday",
							fri: "Friday",
							sat: "Saturday"
						},
						months: {
							jan: "Jan",
							feb: "Feb",
							mar: "Mar",
							apr: "Apr",
							may: "May",
							jun: "Jun",
							jul: "Jul",
							aug: "Aug",
							sep: "Sep",
							oct: "Oct",
							nov: "Nov",
							dec: "Dec"
						}
					},
					input: { characters: "{count} / {max} characters" },
					inputNumber: {
						decrease: "decrease number",
						increase: "increase number"
					},
					select: {
						loading: "Loading",
						noMatch: "No matching data",
						noData: "No data",
						placeholder: "Select"
					},
					mention: { loading: "Loading" },
					dropdown: { toggleDropdown: "Toggle Dropdown" },
					cascader: {
						noMatch: "No matching data",
						loading: "Loading",
						placeholder: "Select",
						noData: "No data"
					},
					pagination: {
						goto: "Go to",
						pagesize: "/page",
						total: "Total {total}",
						pageClassifier: "",
						page: "Page",
						prev: "Go to previous page",
						next: "Go to next page",
						currentPage: "page {pager}",
						prevPages: "Previous {pager} pages",
						nextPages: "Next {pager} pages",
						deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
					},
					dialog: { close: "Close this dialog" },
					drawer: { close: "Close this dialog" },
					messagebox: {
						title: "Message",
						confirm: "OK",
						cancel: "Cancel",
						error: "Illegal input",
						close: "Close this dialog"
					},
					upload: {
						deleteTip: "press delete to remove",
						delete: "Delete",
						preview: "Preview",
						continue: "Continue"
					},
					slider: {
						defaultLabel: "slider between {min} and {max}",
						defaultRangeStartLabel: "pick start value",
						defaultRangeEndLabel: "pick end value"
					},
					table: {
						emptyText: "No Data",
						confirmFilter: "Confirm",
						resetFilter: "Reset",
						clearFilter: "All",
						sumText: "Sum",
						selectAllLabel: "Select all rows",
						selectRowLabel: "Select this row",
						expandRowLabel: "Expand this row",
						collapseRowLabel: "Collapse this row",
						sortLabel: "Sort by {column}",
						filterLabel: "Filter by {column}"
					},
					tag: { close: "Close this tag" },
					tour: {
						next: "Next",
						previous: "Previous",
						finish: "Finish",
						close: "Close this dialog"
					},
					tree: { emptyText: "No Data" },
					transfer: {
						noMatch: "No matching data",
						noData: "No data",
						titles: ["List 1", "List 2"],
						filterPlaceholder: "Enter keyword",
						noCheckedFormat: "{total} items",
						hasCheckedFormat: "{checked}/{total} checked"
					},
					image: { error: "FAILED" },
					pageHeader: { title: "Back" },
					popconfirm: {
						confirmButtonText: "Yes",
						cancelButtonText: "No"
					},
					carousel: {
						leftArrow: "Carousel arrow left",
						rightArrow: "Carousel arrow right",
						indicator: "Carousel switch to index {index}"
					},
					inputOTP: {
						groupLabel: "OTP Input",
						defaultLabel: "Please enter OTP character {index}"
					}
				}
			};
		}));
		var buildTranslator;
		var translate;
		var buildLocaleContext;
		var localeContextKey;
		var useLocale;
		var init_use_locale = __esmMin((() => {
			init_en();
			init_import();
			init_vue_runtime_esm_bundler();
			buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
			translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`);
			buildLocaleContext = (locale) => {
				return {
					lang: computed(() => unref(locale).name),
					locale: isRef(locale) ? locale : ref(locale),
					t: buildTranslator(locale)
				};
			};
			localeContextKey = Symbol("localeContextKey");
			useLocale = (localeOverrides) => {
				const locale = localeOverrides || inject(localeContextKey, ref());
				return buildLocaleContext(computed(() => locale.value || en_default));
			};
		}));
		var statePrefix;
		var _bem;
		var namespaceContextKey;
		var useGetDerivedNamespace;
		var useNamespace;
		var init_use_namespace = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			statePrefix = "is-";
			_bem = (namespace, block, blockSuffix, element, modifier) => {
				let cls = `${namespace}-${block}`;
				if (blockSuffix) cls += `-${blockSuffix}`;
				if (element) cls += `__${element}`;
				if (modifier) cls += `--${modifier}`;
				return cls;
			};
			namespaceContextKey = Symbol("namespaceContextKey");
			useGetDerivedNamespace = (namespaceOverrides) => {
				const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref("el")) : ref("el"));
				return computed(() => {
					return unref(derivedNamespace) || "el";
				});
			};
			useNamespace = (block, namespaceOverrides) => {
				const namespace = useGetDerivedNamespace(namespaceOverrides);
				const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
				const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
				const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
				const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
				const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
				const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
				const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
				const is = (name, ...args) => {
					const state = args.length >= 1 ? args[0] : true;
					return name && state ? `${statePrefix}${name}` : "";
				};
				const cssVar = (object) => {
					const styles = {};
					for (const key in object) if (object[key]) styles[`--${namespace.value}-${key}`] = object[key];
					return styles;
				};
				const cssVarBlock = (object) => {
					const styles = {};
					for (const key in object) if (object[key]) styles[`--${namespace.value}-${block}-${key}`] = object[key];
					return styles;
				};
				const cssVarName = (name) => `--${namespace.value}-${name}`;
				const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
				return {
					namespace,
					b,
					e,
					m,
					be,
					em,
					bm,
					bem,
					is,
					cssVar,
					cssVarName,
					cssVarBlock,
					cssVarBlockName
				};
			};
		}));
		var rAF;
		var cAF;
		var init_raf = __esmMin((() => {
			init_browser();
			rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
			cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
		}));
		var scrollBarWidth;
		var getScrollBarWidth;
		var init_scroll = __esmMin((() => {
			init_browser();
			getScrollBarWidth = (namespace) => {
				if (!isClient) return 0;
				if (scrollBarWidth !== void 0) return scrollBarWidth;
				const outer = document.createElement("div");
				outer.className = `${namespace}-scrollbar__wrap`;
				outer.style.visibility = "hidden";
				outer.style.width = "100px";
				outer.style.position = "absolute";
				outer.style.top = "-9999px";
				document.body.appendChild(outer);
				const widthNoScroll = outer.offsetWidth;
				outer.style.overflow = "scroll";
				const inner = document.createElement("div");
				inner.style.width = "100%";
				outer.appendChild(inner);
				const widthWithScroll = inner.offsetWidth;
				outer.parentNode?.removeChild(outer);
				scrollBarWidth = widthNoScroll - widthWithScroll;
				return scrollBarWidth;
			};
		}));
		var useLockscreen;
		var init_use_lockscreen = __esmMin((() => {
			init_error();
			init_style$1();
			init_scroll();
			init_use_namespace();
			init_vue_runtime_esm_bundler();
			useLockscreen = (trigger, options = {}) => {
				if (!isRef(trigger)) throwError("[useLockscreen]", "You need to pass a ref param to this function");
				const ns = options.ns || useNamespace("popup");
				const hiddenCls = computed(() => ns.bm("parent", "hidden"));
				let scrollBarWidth = 0;
				let withoutHiddenClass = false;
				let bodyWidth = "0";
				let cleaned = false;
				const cleanup = () => {
					if (cleaned) return;
					cleaned = true;
					setTimeout(() => {
						if (typeof document === "undefined") return;
						if (withoutHiddenClass && document) {
							document.body.style.width = bodyWidth;
							removeClass(document.body, hiddenCls.value);
						}
					}, 200);
				};
				watch(trigger, (val) => {
					if (!val) {
						cleanup();
						return;
					}
					cleaned = false;
					withoutHiddenClass = !hasClass(document.body, hiddenCls.value);
					if (withoutHiddenClass) {
						bodyWidth = document.body.style.width;
						addClass(document.body, hiddenCls.value);
					}
					scrollBarWidth = getScrollBarWidth(ns.namespace.value);
					const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
					const bodyOverflowY = getStyle(document.body, "overflowY");
					if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
				});
				onScopeDispose(() => cleanup());
			};
		}));
		var composeEventHandlers;
		var getEventCode;
		var getEventKey;
		var init_event = __esmMin((() => {
			init_aria$1();
			init_browser();
			composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
				const handleEvent = (event) => {
					const shouldPrevent = theirsHandler?.(event);
					if (checkForDefaultPrevented === false || !shouldPrevent) return oursHandler?.(event);
				};
				return handleEvent;
			};
			getEventCode = (event) => {
				if (event.code && event.code !== "Unidentified") return event.code;
				const key = getEventKey(event);
				if (key) {
					if (Object.values(EVENT_CODE).includes(key)) return key;
					switch (key) {
						case " ": return EVENT_CODE.space;
						default: return "";
					}
				}
				return "";
			};
			getEventKey = (event) => {
				let key = event.key && event.key !== "Unidentified" ? event.key : "";
				if (!key && event.type === "keyup" && isAndroid()) {
					const target = event.target;
					key = target.value.charAt(target.selectionStart - 1);
				}
				return key;
			};
		}));
		var _prop;
		var _event;
		var createModelToggleComposable;
		var useModelToggle;
		var useModelToggleProps;
		var useModelToggleEmits;
		var init_use_model_toggle = __esmMin((() => {
			init_browser();
			init_types();
			init_runtime();
			init_vue_runtime_esm_bundler();
			_prop = buildProp({
				type: definePropType(Boolean),
				default: null
			});
			_event = buildProp({ type: definePropType(Function) });
			createModelToggleComposable = (name) => {
				const updateEventKey = `update:${name}`;
				const updateEventKeyRaw = `onUpdate:${name}`;
				const useModelToggleEmits = [updateEventKey];
				const useModelToggleProps = {
					[name]: _prop,
					[updateEventKeyRaw]: _event
				};
				const useModelToggle = ({ indicator, toggleReason, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide }) => {
					const instance = getCurrentInstance();
					const { emit } = instance;
					const props = instance.props;
					const hasUpdateHandler = computed(() => isFunction$1(props[updateEventKeyRaw]));
					const isModelBindingAbsent = computed(() => props[name] === null);
					const doShow = (event) => {
						if (indicator.value === true) return;
						indicator.value = true;
						if (toggleReason) toggleReason.value = event;
						if (isFunction$1(onShow)) onShow(event);
					};
					const doHide = (event) => {
						if (indicator.value === false) return;
						indicator.value = false;
						if (toggleReason) toggleReason.value = event;
						if (isFunction$1(onHide)) onHide(event);
					};
					const show = (event) => {
						if (props.disabled === true || isFunction$1(shouldProceed) && !shouldProceed()) return;
						const shouldEmit = hasUpdateHandler.value && isClient;
						if (shouldEmit) emit(updateEventKey, true);
						if (isModelBindingAbsent.value || !shouldEmit) doShow(event);
					};
					const hide = (event) => {
						if (props.disabled === true || !isClient) return;
						const shouldEmit = hasUpdateHandler.value && isClient;
						if (shouldEmit) emit(updateEventKey, false);
						if (isModelBindingAbsent.value || !shouldEmit) doHide(event);
					};
					const onChange = (val) => {
						if (!isBoolean(val)) return;
						if (props.disabled && val) {
							if (hasUpdateHandler.value) emit(updateEventKey, false);
						} else if (indicator.value !== val) {
							if (val) doShow();
							else doHide();
						}
					};
					const toggle = () => {
						if (indicator.value) hide();
						else show();
					};
					watch(() => props[name], onChange);
					if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) watch(() => ({ ...instance.proxy.$route }), () => {
						if (shouldHideWhenRouteChanges.value && indicator.value) hide();
					});
					onMounted(() => {
						onChange(props[name]);
					});
					return {
						hide,
						show,
						toggle,
						hasUpdateHandler
					};
				};
				return {
					useModelToggle,
					useModelToggleProps,
					useModelToggleEmits
				};
			};
			({useModelToggle, useModelToggleProps, useModelToggleEmits} = createModelToggleComposable("modelValue"));
		}));
		var useProp;
		var init_use_prop = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			useProp = (name) => {
				const vm = getCurrentInstance();
				return computed(() => (vm?.proxy?.$props)?.[name]);
			};
		}));
		function V(e) {
			return e ? (e.nodeName || "").toLowerCase() : null;
		}
		function B(e) {
			if (e == null) return window;
			if (e.toString() !== "[object Window]") {
				var t = e.ownerDocument;
				return t && t.defaultView || window;
			}
			return e;
		}
		function G(e) {
			return e instanceof B(e).Element || e instanceof Element;
		}
		function R(e) {
			return e instanceof B(e).HTMLElement || e instanceof HTMLElement;
		}
		function Ae(e) {
			if (typeof ShadowRoot == "undefined") return !1;
			return e instanceof B(e).ShadowRoot || e instanceof ShadowRoot;
		}
		function Tt(e) {
			var t = e.state;
			Object.keys(t.elements).forEach(function(n) {
				var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
				!R(a) || !V(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(c) {
					var s = o[c];
					s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
				}));
			});
		}
		function Bt(e) {
			var t = e.state, n = {
				popper: {
					position: t.options.strategy,
					left: "0",
					top: "0",
					margin: "0"
				},
				arrow: { position: "absolute" },
				reference: {}
			};
			return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
				Object.keys(t.elements).forEach(function(r) {
					var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]).reduce(function(i, f) {
						return i[f] = "", i;
					}, {});
					!R(o) || !V(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(i) {
						o.removeAttribute(i);
					}));
				});
			};
		}
		function C(e) {
			return e.split("-")[0];
		}
		function Le() {
			var e = navigator.userAgentData;
			return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
				return t.brand + "/" + t.version;
			}).join(" ") : navigator.userAgent;
		}
		function at() {
			return !/^((?!chrome|android).)*safari/i.test(Le());
		}
		function ne(e, t, n) {
			t === void 0 && (t = !1), n === void 0 && (n = !1);
			var r = e.getBoundingClientRect(), o = 1, a = 1;
			t && R(e) && (o = e.offsetWidth > 0 && te(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && te(r.height) / e.offsetHeight || 1);
			var s = (G(e) ? B(e) : window).visualViewport, i = !at() && n, f = (r.left + (i && s ? s.offsetLeft : 0)) / o, u = (r.top + (i && s ? s.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
			return {
				width: m,
				height: h,
				top: u,
				right: f + m,
				bottom: u + h,
				left: f,
				x: f,
				y: u
			};
		}
		function Pe(e) {
			var t = ne(e), n = e.offsetWidth, r = e.offsetHeight;
			return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
				x: e.offsetLeft,
				y: e.offsetTop,
				width: n,
				height: r
			};
		}
		function st(e, t) {
			var n = t.getRootNode && t.getRootNode();
			if (e.contains(t)) return !0;
			if (n && Ae(n)) {
				var r = t;
				do {
					if (r && e.isSameNode(r)) return !0;
					r = r.parentNode || r.host;
				} while (r);
			}
			return !1;
		}
		function I(e) {
			return B(e).getComputedStyle(e);
		}
		function Rt(e) {
			return [
				"table",
				"td",
				"th"
			].indexOf(V(e)) >= 0;
		}
		function N(e) {
			return ((G(e) ? e.ownerDocument : e.document) || window.document).documentElement;
		}
		function ye(e) {
			return V(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ae(e) ? e.host : null) || N(e);
		}
		function ft(e) {
			return !R(e) || I(e).position === "fixed" ? null : e.offsetParent;
		}
		function Ht(e) {
			var t = /firefox/i.test(Le());
			if (/Trident/i.test(Le()) && R(e)) {
				if (I(e).position === "fixed") return null;
			}
			var o = ye(e);
			for (Ae(o) && (o = o.host); R(o) && ["html", "body"].indexOf(V(o)) < 0;) {
				var a = I(o);
				if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
				o = o.parentNode;
			}
			return null;
		}
		function se(e) {
			for (var t = B(e), n = ft(e); n && Rt(n) && I(n).position === "static";) n = ft(n);
			return n && (V(n) === "html" || V(n) === "body" && I(n).position === "static") ? t : n || Ht(e) || t;
		}
		function Me(e) {
			return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
		}
		function fe(e, t, n) {
			return J(e, ve(t, n));
		}
		function St(e, t, n) {
			var r = fe(e, t, n);
			return r > n ? n : r;
		}
		function ct() {
			return {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			};
		}
		function ut(e) {
			return Object.assign({}, ct(), e);
		}
		function pt(e, t) {
			return t.reduce(function(n, r) {
				return n[r] = e, n;
			}, {});
		}
		function Ct(e) {
			var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, c = n.modifiersData.popperOffsets, s = C(n.placement), i = Me(s), u = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
			if (!(!a || !c)) {
				var m = Vt(o.padding, n), h = Pe(a), l = i === "y" ? "top" : P, g = i === "y" ? W : T, p = n.rects.reference[u] + n.rects.reference[i] - c[i] - n.rects.popper[u], y = c[i] - n.rects.reference[i], b = se(a), x = b ? i === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, O = p / 2 - y / 2, d = m[l], v = x - h[u] - m[g], w = x / 2 - h[u] / 2 + O, $ = fe(d, w, v), j = i;
				n.modifiersData[r] = (t = {}, t[j] = $, t.centerOffset = $ - w, t);
			}
		}
		function qt(e) {
			var t = e.state, r = e.options.element, o = r === void 0 ? "[data-popper-arrow]" : r;
			o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || st(t.elements.popper, o) && (t.elements.arrow = o));
		}
		function re(e) {
			return e.split("-")[1];
		}
		function Nt(e, t) {
			var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
			return {
				x: te(n * o) / o || 0,
				y: te(r * o) / o || 0
			};
		}
		function dt(e) {
			var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, c = e.offsets, s = e.position, i = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, m = e.isFixed, h = c.x, l = h === void 0 ? 0 : h, g = c.y, p = g === void 0 ? 0 : g, y = typeof u == "function" ? u({
				x: l,
				y: p
			}) : {
				x: l,
				y: p
			};
			l = y.x, p = y.y;
			var b = c.hasOwnProperty("x"), x = c.hasOwnProperty("y"), O = P, d = "top", v = window;
			if (f) {
				var w = se(n), $ = "clientHeight", j = "clientWidth";
				if (w === B(n) && (w = N(n), I(w).position !== "static" && s === "absolute" && ($ = "scrollHeight", j = "scrollWidth")), w = w, o === "top" || (o === "left" || o === "right") && a === "end") {
					d = W;
					var D = m && w === v && v.visualViewport ? v.visualViewport.height : w[$];
					p -= D - r.height, p *= i ? 1 : -1;
				}
				if (o === "left" || (o === "top" || o === "bottom") && a === "end") {
					O = T;
					var E = m && w === v && v.visualViewport ? v.visualViewport.width : w[j];
					l -= E - r.width, l *= i ? 1 : -1;
				}
			}
			var A = Object.assign({ position: s }, f && It), H = u === !0 ? Nt({
				x: l,
				y: p
			}, B(n)) : {
				x: l,
				y: p
			};
			if (l = H.x, p = H.y, i) {
				var k;
				return Object.assign({}, A, (k = {}, k[d] = x ? "0" : "", k[O] = b ? "0" : "", k.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + p + "px)" : "translate3d(" + l + "px, " + p + "px, 0)", k));
			}
			return Object.assign({}, A, (t = {}, t[d] = x ? p + "px" : "", t[O] = b ? l + "px" : "", t.transform = "", t));
		}
		function Ft(e) {
			var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, c = a === void 0 ? !0 : a, s = n.roundOffsets, i = s === void 0 ? !0 : s, f = {
				placement: C(t.placement),
				variation: re(t.placement),
				popper: t.elements.popper,
				popperRect: t.rects.popper,
				gpuAcceleration: o,
				isFixed: t.options.strategy === "fixed"
			};
			t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dt(Object.assign({}, f, {
				offsets: t.modifiersData.popperOffsets,
				position: t.options.strategy,
				adaptive: c,
				roundOffsets: i
			})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dt(Object.assign({}, f, {
				offsets: t.modifiersData.arrow,
				position: "absolute",
				adaptive: !1,
				roundOffsets: i
			})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
		}
		function Ut(e) {
			var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, c = r.resize, s = c === void 0 ? !0 : c, i = B(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
			return a && f.forEach(function(u) {
				u.addEventListener("scroll", n.update, ge);
			}), s && i.addEventListener("resize", n.update, ge), function() {
				a && f.forEach(function(u) {
					u.removeEventListener("scroll", n.update, ge);
				}), s && i.removeEventListener("resize", n.update, ge);
			};
		}
		function be(e) {
			return e.replace(/left|right|bottom|top/g, function(t) {
				return _t[t];
			});
		}
		function ht(e) {
			return e.replace(/start|end/g, function(t) {
				return zt[t];
			});
		}
		function Be(e) {
			var t = B(e);
			return {
				scrollLeft: t.pageXOffset,
				scrollTop: t.pageYOffset
			};
		}
		function Re(e) {
			return ne(N(e)).left + Be(e).scrollLeft;
		}
		function Xt(e, t) {
			var n = B(e), r = N(e), o = n.visualViewport, a = r.clientWidth, c = r.clientHeight, s = 0, i = 0;
			if (o) {
				a = o.width, c = o.height;
				var f = at();
				(f || !f && t === "fixed") && (s = o.offsetLeft, i = o.offsetTop);
			}
			return {
				width: a,
				height: c,
				x: s + Re(e),
				y: i
			};
		}
		function Yt(e) {
			var t, n = N(e), r = Be(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = J(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), c = J(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Re(e), i = -r.scrollTop;
			return I(o || n).direction === "rtl" && (s += J(n.clientWidth, o ? o.clientWidth : 0) - a), {
				width: a,
				height: c,
				x: s,
				y: i
			};
		}
		function He(e) {
			var t = I(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
			return /auto|scroll|overlay|hidden/.test(n + o + r);
		}
		function mt(e) {
			return [
				"html",
				"body",
				"#document"
			].indexOf(V(e)) >= 0 ? e.ownerDocument.body : R(e) && He(e) ? e : mt(ye(e));
		}
		function ce(e, t) {
			var n;
			t === void 0 && (t = []);
			var r = mt(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = B(r), c = o ? [a].concat(a.visualViewport || [], He(r) ? r : []) : r, s = t.concat(c);
			return o ? s : s.concat(ce(ye(c)));
		}
		function Se(e) {
			return Object.assign({}, e, {
				left: e.x,
				top: e.y,
				right: e.x + e.width,
				bottom: e.y + e.height
			});
		}
		function Gt(e, t) {
			var n = ne(e, !1, t === "fixed");
			return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
		}
		function vt(e, t, n) {
			return t === "viewport" ? Se(Xt(e, n)) : G(t) ? Gt(t, n) : Se(Yt(N(e)));
		}
		function Jt(e) {
			var t = ce(ye(e)), r = ["absolute", "fixed"].indexOf(I(e).position) >= 0 && R(e) ? se(e) : e;
			return G(r) ? t.filter(function(o) {
				return G(o) && st(o, r) && V(o) !== "body";
			}) : [];
		}
		function Kt(e, t, n, r) {
			var o = t === "clippingParents" ? Jt(e) : [].concat(t), a = [].concat(o, [n]), c = a[0], s = a.reduce(function(i, f) {
				var u = vt(e, f, r);
				return i.top = J(u.top, i.top), i.right = ve(u.right, i.right), i.bottom = ve(u.bottom, i.bottom), i.left = J(u.left, i.left), i;
			}, vt(e, c, r));
			return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
		}
		function yt(e) {
			var t = e.reference, n = e.element, r = e.placement, o = r ? C(r) : null, a = r ? re(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
			switch (o) {
				case "top":
					i = {
						x: c,
						y: t.y - n.height
					};
					break;
				case W:
					i = {
						x: c,
						y: t.y + t.height
					};
					break;
				case T:
					i = {
						x: t.x + t.width,
						y: s
					};
					break;
				case P:
					i = {
						x: t.x - n.width,
						y: s
					};
					break;
				default: i = {
					x: t.x,
					y: t.y
				};
			}
			var f = o ? Me(o) : null;
			if (f != null) {
				var u = f === "y" ? "height" : "width";
				switch (a) {
					case Y:
						i[f] = i[f] - (t[u] / 2 - n[u] / 2);
						break;
					case "end": i[f] = i[f] + (t[u] / 2 - n[u] / 2);
				}
			}
			return i;
		}
		function oe(e, t) {
			t === void 0 && (t = {});
			var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, c = a === void 0 ? e.strategy : a, s = n.boundary, i = s === void 0 ? Ye : s, f = n.rootBoundary, u = f === void 0 ? je : f, m = n.elementContext, h = m === void 0 ? ee : m, l = n.altBoundary, g = l === void 0 ? !1 : l, p = n.padding, y = p === void 0 ? 0 : p, b = ut(typeof y != "number" ? y : pt(y, Q)), x = h === "popper" ? Ge : ee, O = e.rects.popper, d = e.elements[g ? x : h], v = Kt(G(d) ? d : d.contextElement || N(e.elements.popper), i, u, c), w = ne(e.elements.reference), $ = yt({
				reference: w,
				element: O,
				placement: o
			}), j = Se(Object.assign({}, O, $)), D = h === "popper" ? j : w, E = {
				top: v.top - D.top + b.top,
				bottom: D.bottom - v.bottom + b.bottom,
				left: v.left - D.left + b.left,
				right: D.right - v.right + b.right
			}, A = e.modifiersData.offset;
			if (h === "popper" && A) {
				var H = A[o];
				Object.keys(E).forEach(function(k) {
					var F = ["right", "bottom"].indexOf(k) >= 0 ? 1 : -1, U = ["top", "bottom"].indexOf(k) >= 0 ? "y" : "x";
					E[k] += H[U] * F;
				});
			}
			return E;
		}
		function Qt(e, t) {
			t === void 0 && (t = {});
			var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, c = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, f = i === void 0 ? Ee : i, u = re(r), m = u ? s ? De : De.filter(function(g) {
				return re(g) === u;
			}) : Q, h = m.filter(function(g) {
				return f.indexOf(g) >= 0;
			});
			h.length === 0 && (h = m);
			var l = h.reduce(function(g, p) {
				return g[p] = oe(e, {
					placement: p,
					boundary: o,
					rootBoundary: a,
					padding: c
				})[C(p)], g;
			}, {});
			return Object.keys(l).sort(function(g, p) {
				return l[g] - l[p];
			});
		}
		function Zt(e) {
			if (C(e) === "auto") return [];
			var t = be(e);
			return [
				ht(e),
				t,
				ht(t)
			];
		}
		function en(e) {
			var t = e.state, n = e.options, r = e.name;
			if (!t.modifiersData[r]._skip) {
				for (var o = n.mainAxis, a = o === void 0 ? !0 : o, c = n.altAxis, s = c === void 0 ? !0 : c, i = n.fallbackPlacements, f = n.padding, u = n.boundary, m = n.rootBoundary, h = n.altBoundary, l = n.flipVariations, g = l === void 0 ? !0 : l, p = n.allowedAutoPlacements, y = t.options.placement, x = C(y) === y, O = i || (x || !g ? [be(y)] : Zt(y)), d = [y].concat(O).reduce(function(z, q) {
					return z.concat(C(q) === "auto" ? Qt(t, {
						placement: q,
						boundary: u,
						rootBoundary: m,
						padding: f,
						flipVariations: g,
						allowedAutoPlacements: p
					}) : q);
				}, []), v = t.rects.reference, w = t.rects.popper, $ = new Map(), j = !0, D = d[0], E = 0; E < d.length; E++) {
					var A = d[E], H = C(A), k = re(A) === Y, F = ["top", W].indexOf(H) >= 0, U = F ? "width" : "height", M = oe(t, {
						placement: A,
						boundary: u,
						rootBoundary: m,
						altBoundary: h,
						padding: f
					}), S = F ? k ? T : P : k ? W : "top";
					v[U] > w[U] && (S = be(S));
					var ue = be(S), _ = [];
					if (a && _.push(M[H] <= 0), s && _.push(M[S] <= 0, M[ue] <= 0), _.every(function(z) {
						return z;
					})) {
						D = A, j = !1;
						break;
					}
					$.set(A, _);
				}
				if (j) {
					for (var pe = g ? 3 : 1, xe = function(z) {
						var q = d.find(function(de) {
							var ae = $.get(de);
							if (ae) return ae.slice(0, z).every(function(K) {
								return K;
							});
						});
						if (q) return D = q, "break";
					}, ie = pe; ie > 0; ie--) if (xe(ie) === "break") break;
				}
				t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
			}
		}
		function bt(e, t, n) {
			return n === void 0 && (n = {
				x: 0,
				y: 0
			}), {
				top: e.top - t.height - n.y,
				right: e.right - t.width + n.x,
				bottom: e.bottom - t.height + n.y,
				left: e.left - t.width - n.x
			};
		}
		function wt(e) {
			return [
				"top",
				T,
				W,
				P
			].some(function(t) {
				return e[t] >= 0;
			});
		}
		function tn(e) {
			var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, c = oe(t, { elementContext: "reference" }), s = oe(t, { altBoundary: !0 }), i = bt(c, r), f = bt(s, o, a), u = wt(i), m = wt(f);
			t.modifiersData[n] = {
				referenceClippingOffsets: i,
				popperEscapeOffsets: f,
				isReferenceHidden: u,
				hasPopperEscaped: m
			}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
				"data-popper-reference-hidden": u,
				"data-popper-escaped": m
			});
		}
		function nn(e, t, n) {
			var r = C(e), o = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, c = a[0], s = a[1];
			return c = c || 0, s = (s || 0) * o, ["left", "right"].indexOf(r) >= 0 ? {
				x: s,
				y: c
			} : {
				x: c,
				y: s
			};
		}
		function rn(e) {
			var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, c = Ee.reduce(function(u, m) {
				return u[m] = nn(m, t.rects, a), u;
			}, {}), s = c[t.placement], i = s.x, f = s.y;
			t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
		}
		function on(e) {
			var t = e.state, n = e.name;
			t.modifiersData[n] = yt({
				reference: t.rects.reference,
				element: t.rects.popper,
				placement: t.placement
			});
		}
		function an(e) {
			return e === "x" ? "y" : "x";
		}
		function sn(e) {
			var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, c = n.altAxis, s = c === void 0 ? !1 : c, i = n.boundary, f = n.rootBoundary, u = n.altBoundary, m = n.padding, h = n.tether, l = h === void 0 ? !0 : h, g = n.tetherOffset, p = g === void 0 ? 0 : g, y = oe(t, {
				boundary: i,
				rootBoundary: f,
				padding: m,
				altBoundary: u
			}), b = C(t.placement), x = re(t.placement), O = !x, d = Me(b), v = an(d), w = t.modifiersData.popperOffsets, $ = t.rects.reference, j = t.rects.popper, D = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, E = typeof D == "number" ? {
				mainAxis: D,
				altAxis: D
			} : Object.assign({
				mainAxis: 0,
				altAxis: 0
			}, D), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
				x: 0,
				y: 0
			};
			if (w) {
				if (a) {
					var k, F = d === "y" ? "top" : P, U = d === "y" ? W : T, M = d === "y" ? "height" : "width", S = w[d], ue = S + y[F], _ = S - y[U], pe = l ? -j[M] / 2 : 0, xe = x === "start" ? $[M] : j[M], ie = x === "start" ? -j[M] : -$[M], le = t.elements.arrow, z = l && le ? Pe(le) : {
						width: 0,
						height: 0
					}, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ct(), de = q[F], ae = q[U], K = fe(0, $[M], z[M]), Et = O ? $[M] / 2 - pe - K - de - E.mainAxis : xe - K - de - E.mainAxis, At = O ? -$[M] / 2 + pe + K + ae + E.mainAxis : ie + K + ae + E.mainAxis, Oe = t.elements.arrow && se(t.elements.arrow), kt = Oe ? d === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (k = A == null ? void 0 : A[d]) != null ? k : 0, Lt = S + Et - Ce - kt, Pt = S + At - Ce, qe = fe(l ? ve(ue, Lt) : ue, S, l ? J(_, Pt) : _);
					w[d] = qe, H[d] = qe - S;
				}
				if (s) {
					var Ie, Mt = d === "x" ? "top" : P, Wt = d === "x" ? W : T, X = w[v], he = v === "y" ? "height" : "width", Ne = X + y[Mt], Fe = X - y[Wt], $e = ["top", P].indexOf(b) !== -1, Ue = (Ie = A == null ? void 0 : A[v]) != null ? Ie : 0, _e = $e ? Ne : X - $[he] - j[he] - Ue + E.altAxis, ze = $e ? X + $[he] + j[he] - Ue - E.altAxis : Fe, Xe = l && $e ? St(_e, X, ze) : fe(l ? _e : Ne, X, l ? ze : Fe);
					w[v] = Xe, H[v] = Xe - X;
				}
				t.modifiersData[r] = H;
			}
		}
		function fn(e) {
			return {
				scrollLeft: e.scrollLeft,
				scrollTop: e.scrollTop
			};
		}
		function cn(e) {
			return e === B(e) || !R(e) ? Be(e) : fn(e);
		}
		function un(e) {
			var t = e.getBoundingClientRect(), n = te(t.width) / e.offsetWidth || 1, r = te(t.height) / e.offsetHeight || 1;
			return n !== 1 || r !== 1;
		}
		function pn(e, t, n) {
			n === void 0 && (n = !1);
			var r = R(t), o = R(t) && un(t), a = N(t), c = ne(e, o, n), s = {
				scrollLeft: 0,
				scrollTop: 0
			}, i = {
				x: 0,
				y: 0
			};
			return (r || !r && !n) && ((V(t) !== "body" || He(a)) && (s = cn(t)), R(t) ? (i = ne(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = Re(a))), {
				x: c.left + s.scrollLeft - i.x,
				y: c.top + s.scrollTop - i.y,
				width: c.width,
				height: c.height
			};
		}
		function ln(e) {
			var t = new Map(), n = new Set(), r = [];
			e.forEach(function(a) {
				t.set(a.name, a);
			});
			function o(a) {
				n.add(a.name);
				[].concat(a.requires || [], a.requiresIfExists || []).forEach(function(s) {
					if (!n.has(s)) {
						var i = t.get(s);
						i && o(i);
					}
				}), r.push(a);
			}
			return e.forEach(function(a) {
				n.has(a.name) || o(a);
			}), r;
		}
		function dn(e) {
			var t = ln(e);
			return it.reduce(function(n, r) {
				return n.concat(t.filter(function(o) {
					return o.phase === r;
				}));
			}, []);
		}
		function hn(e) {
			var t;
			return function() {
				return t || (t = new Promise(function(n) {
					Promise.resolve().then(function() {
						t = void 0, n(e());
					});
				})), t;
			};
		}
		function mn(e) {
			var t = e.reduce(function(n, r) {
				var o = n[r.name];
				return n[r.name] = o ? Object.assign({}, o, r, {
					options: Object.assign({}, o.options, r.options),
					data: Object.assign({}, o.data, r.data)
				}) : r, n;
			}, {});
			return Object.keys(t).map(function(n) {
				return t[n];
			});
		}
		function Dt() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return !t.some(function(r) {
				return !(r && typeof r.getBoundingClientRect == "function");
			});
		}
		function we(e) {
			e === void 0 && (e = {});
			var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? jt : o;
			return function(c, s, i) {
				i === void 0 && (i = a);
				var f = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, jt, a),
					modifiersData: {},
					elements: {
						reference: c,
						popper: s
					},
					attributes: {},
					styles: {}
				}, u = [], m = !1, h = {
					state: f,
					setOptions: function(p) {
						var y = typeof p == "function" ? p(f.options) : p;
						g(), f.options = Object.assign({}, a, f.options, y), f.scrollParents = {
							reference: G(c) ? ce(c) : c.contextElement ? ce(c.contextElement) : [],
							popper: ce(s)
						};
						var b = dn(mn([].concat(r, f.options.modifiers)));
						return f.orderedModifiers = b.filter(function(x) {
							return x.enabled;
						}), l(), h.update();
					},
					forceUpdate: function() {
						if (!m) {
							var p = f.elements, y = p.reference, b = p.popper;
							if (Dt(y, b)) {
								f.rects = {
									reference: pn(y, se(b), f.options.strategy === "fixed"),
									popper: Pe(b)
								}, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(j) {
									return f.modifiersData[j.name] = Object.assign({}, j.data);
								});
								for (var x = 0; x < f.orderedModifiers.length; x++) {
									if (f.reset === !0) {
										f.reset = !1, x = -1;
										continue;
									}
									var O = f.orderedModifiers[x], d = O.fn, v = O.options, w = v === void 0 ? {} : v, $ = O.name;
									typeof d == "function" && (f = d({
										state: f,
										options: w,
										name: $,
										instance: h
									}) || f);
								}
							}
						}
					},
					update: hn(function() {
						return new Promise(function(p) {
							h.forceUpdate(), p(f);
						});
					}),
					destroy: function() {
						g(), m = !0;
					}
				};
				if (!Dt(c, s)) return h;
				h.setOptions(i).then(function(p) {
					!m && i.onFirstUpdate && i.onFirstUpdate(p);
				});
				function l() {
					f.orderedModifiers.forEach(function(p) {
						var y = p.name, b = p.options, x = b === void 0 ? {} : b, O = p.effect;
						if (typeof O == "function") {
							var d = O({
								state: f,
								name: y,
								instance: h,
								options: x
							}), v = function() {};
							u.push(d || v);
						}
					});
				}
				function g() {
					u.forEach(function(p) {
						return p();
					}), u = [];
				}
				return h;
			};
		}
		var W;
		var T;
		var P;
		var me;
		var Q;
		var Y;
		var Ye;
		var je;
		var ee;
		var Ge;
		var De;
		var Ee;
		var Je;
		var Ke;
		var Qe;
		var Ze;
		var et;
		var tt;
		var nt;
		var rt;
		var ot;
		var it;
		var ke;
		var J;
		var ve;
		var te;
		var Vt;
		var lt;
		var It;
		var We;
		var ge;
		var Te;
		var _t;
		var zt;
		var gt;
		var xt;
		var Ot;
		var Ve;
		var $t;
		var jt;
		var wn;
		var init_dist$1 = __esmMin((() => {
			W = "bottom";
			T = "right";
			P = "left";
			me = "auto";
			Q = [
				"top",
				W,
				T,
				P
			];
			Y = "start";
			Ye = "clippingParents";
			je = "viewport";
			ee = "popper";
			Ge = "reference";
			De = Q.reduce(function(e, t) {
				return e.concat([t + "-" + Y, t + "-end"]);
			}, []);
			Ee = [].concat(Q, [me]).reduce(function(e, t) {
				return e.concat([
					t,
					t + "-" + Y,
					t + "-end"
				]);
			}, []);
			Je = "beforeRead";
			Ke = "read";
			Qe = "afterRead";
			Ze = "beforeMain";
			et = "main";
			tt = "afterMain";
			nt = "beforeWrite";
			rt = "write";
			ot = "afterWrite";
			it = [
				Je,
				Ke,
				Qe,
				Ze,
				et,
				tt,
				nt,
				rt,
				ot
			];
			ke = {
				name: "applyStyles",
				enabled: !0,
				phase: "write",
				fn: Tt,
				effect: Bt,
				requires: ["computeStyles"]
			};
			J = Math.max;
			ve = Math.min;
			te = Math.round;
			Vt = function(e, t) {
				return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ut(typeof e != "number" ? e : pt(e, Q));
			};
			lt = {
				name: "arrow",
				enabled: !0,
				phase: "main",
				fn: Ct,
				effect: qt,
				requires: ["popperOffsets"],
				requiresIfExists: ["preventOverflow"]
			};
			It = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};
			We = {
				name: "computeStyles",
				enabled: !0,
				phase: "beforeWrite",
				fn: Ft,
				data: {}
			};
			ge = { passive: !0 };
			Te = {
				name: "eventListeners",
				enabled: !0,
				phase: "write",
				fn: function() {},
				effect: Ut,
				data: {}
			};
			_t = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};
			zt = {
				start: "end",
				end: "start"
			};
			gt = {
				name: "flip",
				enabled: !0,
				phase: "main",
				fn: en,
				requiresIfExists: ["offset"],
				data: { _skip: !1 }
			};
			xt = {
				name: "hide",
				enabled: !0,
				phase: "main",
				requiresIfExists: ["preventOverflow"],
				fn: tn
			};
			Ot = {
				name: "offset",
				enabled: !0,
				phase: "main",
				requires: ["popperOffsets"],
				fn: rn
			};
			Ve = {
				name: "popperOffsets",
				enabled: !0,
				phase: "read",
				fn: on,
				data: {}
			};
			$t = {
				name: "preventOverflow",
				enabled: !0,
				phase: "main",
				fn: sn,
				requiresIfExists: ["offset"]
			};
			jt = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};
			we();
			we({ defaultModifiers: [
				Te,
				Ve,
				We,
				ke
			] });
			wn = we({ defaultModifiers: [
				Te,
				Ve,
				We,
				ke,
				Ot,
				gt,
				$t,
				lt,
				xt
			] });
		}));
		function deriveState(state) {
			const elements = Object.keys(state.elements);
			return {
				styles: fromPairs(elements.map((element) => [element, state.styles[element] || {}])),
				attributes: fromPairs(elements.map((element) => [element, state.attributes[element]]))
			};
		}
		var usePopper;
		var init_use_popper = __esmMin((() => {
			init_import();
			init_vue_runtime_esm_bundler();
			init_dist$1();
			usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
				const stateUpdater = {
					name: "updateState",
					enabled: true,
					phase: "write",
					fn: ({ state }) => {
						const derivedState = deriveState(state);
						Object.assign(states.value, derivedState);
					},
					requires: ["computeStyles"]
				};
				const options = computed(() => {
					const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
					return {
						onFirstUpdate,
						placement: placement || "bottom",
						strategy: strategy || "absolute",
						modifiers: [
							...modifiers || [],
							stateUpdater,
							{
								name: "applyStyles",
								enabled: false
							}
						]
					};
				});
				const instanceRef = shallowRef();
				const states = ref({
					styles: {
						popper: {
							position: unref(options).strategy,
							left: "0",
							top: "0"
						},
						arrow: { position: "absolute" }
					},
					attributes: {}
				});
				const destroy = () => {
					if (!instanceRef.value) return;
					instanceRef.value.destroy();
					instanceRef.value = void 0;
				};
				watch(options, (newOptions) => {
					const instance = unref(instanceRef);
					if (instance) instance.setOptions(newOptions);
				}, { deep: true });
				watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
					destroy();
					if (!referenceElement || !popperElement) return;
					instanceRef.value = wn(referenceElement, popperElement, unref(options));
				});
				onBeforeUnmount(() => {
					destroy();
				});
				return {
					state: computed(() => ({ ...unref(instanceRef)?.state || {} })),
					styles: computed(() => unref(states).styles),
					attributes: computed(() => unref(states).attributes),
					update: () => unref(instanceRef)?.update(),
					forceUpdate: () => unref(instanceRef)?.forceUpdate(),
					instanceRef: computed(() => unref(instanceRef))
				};
			};
		}));
		var init_functions = __esmMin((() => {
			init_shared_esm_bundler();
		}));
		var useSameTarget;
		var init_use_same_target = __esmMin((() => {
			init_functions();
			useSameTarget = (handleClick) => {
				if (!handleClick) return {
					onClick: NOOP,
					onMousedown: NOOP,
					onMouseup: NOOP
				};
				let mousedownTarget = false;
				let mouseupTarget = false;
				const onClick = (e) => {
					if (mousedownTarget && mouseupTarget) handleClick(e);
					mousedownTarget = mouseupTarget = false;
				};
				const onMousedown = (e) => {
					mousedownTarget = e.target === e.currentTarget;
				};
				const onMouseup = (e) => {
					mouseupTarget = e.target === e.currentTarget;
				};
				return {
					onClick,
					onMousedown,
					onMouseup
				};
			};
		}));
		function useTimeout() {
			let timeoutHandle;
			const registerTimeout = (fn, delay) => {
				cancelTimeout();
				timeoutHandle = globalThis.setTimeout(fn, delay);
			};
			const cancelTimeout = () => {
				if (timeoutHandle === void 0) return;
				globalThis.clearTimeout(timeoutHandle);
				timeoutHandle = void 0;
			};
			tryOnScopeDispose(() => cancelTimeout());
			return {
				registerTimeout,
				cancelTimeout
			};
		}
		var init_use_timeout = __esmMin((() => {
			init_dist$2();
		}));
		var defaultIdInjection;
		var ID_INJECTION_KEY;
		var useIdInjection;
		var useId;
		var init_use_id = __esmMin((() => {
			init_browser();
			init_error();
			init_use_namespace();
			init_dist$2();
			init_vue_runtime_esm_bundler();
			defaultIdInjection = {
				prefix: Math.floor(Math.random() * 1e4),
				current: 0
			};
			ID_INJECTION_KEY = Symbol("elIdInjection");
			useIdInjection = () => {
				return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
			};
			useId = (deterministicId) => {
				const idInjection = useIdInjection();
				if (!isClient && idInjection === defaultIdInjection) debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
				const namespace = useGetDerivedNamespace();
				return computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
			};
		}));
		var registeredEscapeHandlers;
		var cachedHandler;
		var useEscapeKeydown;
		var init_use_escape_keydown = __esmMin((() => {
			init_aria$1();
			init_browser();
			init_event();
			init_vue_runtime_esm_bundler();
			registeredEscapeHandlers = [];
			cachedHandler = (event) => {
				if (getEventCode(event) === EVENT_CODE.esc) registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
			};
			useEscapeKeydown = (handler) => {
				onMounted(() => {
					if (registeredEscapeHandlers.length === 0) document.addEventListener("keydown", cachedHandler);
					if (isClient) registeredEscapeHandlers.push(handler);
				});
				onBeforeUnmount(() => {
					registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
					if (registeredEscapeHandlers.length === 0) {
						if (isClient) document.removeEventListener("keydown", cachedHandler);
					}
				});
			};
		}));
		var usePopperContainerId;
		var createContainer;
		var usePopperContainer;
		var init_use_popper_container = __esmMin((() => {
			init_browser();
			init_use_namespace();
			init_use_id();
			init_vue_runtime_esm_bundler();
			usePopperContainerId = () => {
				const namespace = useGetDerivedNamespace();
				const idInjection = useIdInjection();
				const id = computed(() => {
					return `${namespace.value}-popper-container-${idInjection.prefix}`;
				});
				return {
					id,
					selector: computed(() => `#${id.value}`)
				};
			};
			createContainer = (id) => {
				const container = document.createElement("div");
				container.id = id;
				document.body.appendChild(container);
				return container;
			};
			usePopperContainer = () => {
				const { id, selector } = usePopperContainerId();
				onBeforeMount(() => {
					if (!isClient) return;
					if (!document.body.querySelector(selector.value)) createContainer(id.value);
				});
				return {
					id,
					selector
				};
			};
		}));
		var useDelayedToggleProps;
		var useDelayedTogglePropsDefaults;
		var useDelayedToggle;
		var init_use_delayed_toggle = __esmMin((() => {
			init_types();
			init_runtime();
			init_use_timeout();
			init_vue_runtime_esm_bundler();
			useDelayedToggleProps = buildProps({
				showAfter: {
					type: Number,
					default: 0
				},
				hideAfter: {
					type: Number,
					default: 200
				},
				autoClose: {
					type: Number,
					default: 0
				}
			});
			useDelayedTogglePropsDefaults = {
				showAfter: 0,
				hideAfter: 200,
				autoClose: 0
			};
			useDelayedToggle = ({ showAfter, hideAfter, autoClose, open, close }) => {
				const { registerTimeout } = useTimeout();
				const { registerTimeout: registerTimeoutForAutoClose, cancelTimeout: cancelTimeoutForAutoClose } = useTimeout();
				const onOpen = (event, delay = unref(showAfter)) => {
					registerTimeout(() => {
						open(event);
						const _autoClose = unref(autoClose);
						if (isNumber(_autoClose) && _autoClose > 0) registerTimeoutForAutoClose(() => {
							close(event);
						}, _autoClose);
					}, delay);
				};
				const onClose = (event, delay = unref(hideAfter)) => {
					cancelTimeoutForAutoClose();
					registerTimeout(() => {
						close(event);
					}, delay);
				};
				return {
					onOpen,
					onClose
				};
			};
		}));
		var FORWARD_REF_INJECTION_KEY;
		var useForwardRef;
		var useForwardRefDirective;
		var init_use_forward_ref = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
			useForwardRef = (forwardRef) => {
				const setForwardRef = ((el) => {
					forwardRef.value = el;
				});
				provide(FORWARD_REF_INJECTION_KEY, { setForwardRef });
			};
			useForwardRefDirective = (setForwardRef) => {
				return {
					mounted(el) {
						setForwardRef(el);
					},
					updated(el) {
						setForwardRef(el);
					},
					unmounted() {
						setForwardRef(null);
					}
				};
			};
		}));
		var initial;
		var zIndex;
		var defaultInitialZIndex;
		var ZINDEX_INJECTION_KEY;
		var zIndexContextKey;
		var useZIndex;
		var init_use_z_index = __esmMin((() => {
			init_browser();
			init_types();
			init_error();
			init_vue_runtime_esm_bundler();
			initial = { current: 0 };
			zIndex = ref(0);
			defaultInitialZIndex = 2e3;
			ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
			zIndexContextKey = Symbol("zIndexContextKey");
			useZIndex = (zIndexOverrides) => {
				const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
				const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
				const initialZIndex = computed(() => {
					const zIndexFromInjection = unref(zIndexInjection);
					return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
				});
				const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
				const nextZIndex = () => {
					increasingInjection.current++;
					zIndex.value = increasingInjection.current;
					return currentZIndex.value;
				};
				if (!isClient && !inject(ZINDEX_INJECTION_KEY)) debugWarn("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`);
				return {
					initialZIndex,
					currentZIndex,
					nextZIndex
				};
			};
		}));
		function useCursor(input) {
			let selectionInfo;
			function recordCursor() {
				if (input.value == void 0) return;
				const { selectionStart, selectionEnd, value } = input.value;
				if (selectionStart == null || selectionEnd == null) return;
				selectionInfo = {
					selectionStart,
					selectionEnd,
					value,
					beforeTxt: value.slice(0, Math.max(0, selectionStart)),
					afterTxt: value.slice(Math.max(0, selectionEnd))
				};
			}
			function setCursor() {
				if (input.value == void 0 || selectionInfo == void 0) return;
				const { value } = input.value;
				const { beforeTxt, afterTxt, selectionStart } = selectionInfo;
				if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0) return;
				let startPos = value.length;
				if (value.endsWith(afterTxt)) startPos = value.length - afterTxt.length;
				else if (value.startsWith(beforeTxt)) startPos = beforeTxt.length;
				else {
					const beforeLastChar = beforeTxt[selectionStart - 1];
					const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
					if (newIndex !== -1) startPos = newIndex + 1;
				}
				input.value.setSelectionRange(startPos, startPos);
			}
			return [recordCursor, setCursor];
		}
		var init_use_cursor = __esmMin((() => {}));
		function isComment(node) {
			return isVNode(node) && node.type === Comment;
		}
		var flattedChildren;
		var init_vnode = __esmMin((() => {
			init_types();
			init_vue_runtime_esm_bundler();
			flattedChildren = (children) => {
				const vNodes = isArray$1(children) ? children : [children];
				const result = [];
				vNodes.forEach((child) => {
					if (isArray$1(child)) result.push(...flattedChildren(child));
					else if (isVNode(child) && child.component?.subTree) result.push(child, ...flattedChildren(child.component.subTree));
					else if (isVNode(child) && isArray$1(child.children)) result.push(...flattedChildren(child.children));
					else if (isVNode(child) && child.shapeFlag === 2) result.push(...flattedChildren(child.type()));
					else result.push(child);
				});
				return result;
			};
		}));
		var getOrderedChildren;
		var useOrderedChildren;
		var init_use_ordered_children = __esmMin((() => {
			init_vnode();
			init_vue_runtime_esm_bundler();
			getOrderedChildren = (vm, childComponentName, children) => {
				return flattedChildren(vm.subTree).filter((n) => isVNode(n) && n.type?.name === childComponentName && !!n.component).map((n) => n.component.uid).map((uid) => children[uid]).filter((p) => !!p);
			};
			useOrderedChildren = (vm, childComponentName) => {
				const children = shallowRef({});
				const orderedChildren = shallowRef([]);
				const nodesMap = new WeakMap();
				const addChild = (child) => {
					children.value[child.uid] = child;
					triggerRef(children);
					onMounted(() => {
						const childNode = child.getVnode().el;
						const parentNode = childNode.parentNode;
						if (!nodesMap.has(parentNode)) {
							nodesMap.set(parentNode, []);
							const originalFn = parentNode.insertBefore.bind(parentNode);
							parentNode.insertBefore = (node, anchor) => {
								if (nodesMap.get(parentNode).some((el) => node === el || anchor === el)) triggerRef(children);
								return originalFn(node, anchor);
							};
						}
						nodesMap.get(parentNode).push(childNode);
					});
				};
				const removeChild = (child) => {
					delete children.value[child.uid];
					triggerRef(children);
					const childNode = child.getVnode().el;
					const parentNode = childNode.parentNode;
					const childNodes = nodesMap.get(parentNode);
					const index = childNodes.indexOf(childNode);
					childNodes.splice(index, 1);
				};
				const sortChildren = () => {
					orderedChildren.value = getOrderedChildren(vm, childComponentName, children.value);
				};
				const IsolatedRenderer = (props) => {
					return props.render();
				};
				return {
					children: orderedChildren,
					addChild,
					removeChild,
					ChildrenSorter: defineComponent({ setup(_, { slots }) {
						return () => {
							sortChildren();
							return slots.default ? h(IsolatedRenderer, { render: slots.default }) : null;
						};
					} })
				};
			};
		}));
		var useSizeProp;
		var SIZE_INJECTION_KEY;
		var useGlobalSize;
		var init_use_size = __esmMin((() => {
			init_size();
			init_runtime();
			init_vue_runtime_esm_bundler();
			useSizeProp = buildProp({
				type: String,
				values: componentSizes,
				required: false
			});
			SIZE_INJECTION_KEY = Symbol("size");
			useGlobalSize = () => {
				const injectedSize = inject(SIZE_INJECTION_KEY, {});
				return computed(() => {
					return unref(injectedSize.size) || "";
				});
			};
		}));
		function useFocusController(target, { disabled, beforeFocus, afterFocus, beforeBlur, afterBlur } = {}) {
			const { emit } = getCurrentInstance();
			const wrapperRef = shallowRef();
			const isFocused = ref(false);
			const handleFocus = (event) => {
				const cancelFocus = isFunction$1(beforeFocus) ? beforeFocus(event) : false;
				if (unref(disabled) || isFocused.value || cancelFocus) return;
				isFocused.value = true;
				emit("focus", event);
				afterFocus?.();
			};
			const handleBlur = (event) => {
				const cancelBlur = isFunction$1(beforeBlur) ? beforeBlur(event) : false;
				if (unref(disabled) || event.relatedTarget && wrapperRef.value?.contains(event.relatedTarget) || cancelBlur) return;
				isFocused.value = false;
				emit("blur", event);
				afterBlur?.();
			};
			const handleClick = (event) => {
				if (unref(disabled) || isFocusable(event.target) || wrapperRef.value?.contains(document.activeElement) && wrapperRef.value !== document.activeElement) return;
				target.value?.focus();
			};
			watch([wrapperRef, () => unref(disabled)], ([el, disabled]) => {
				if (!el) return;
				if (disabled) el.removeAttribute("tabindex");
				else el.setAttribute("tabindex", "-1");
			});
			useEventListener(wrapperRef, "focus", handleFocus, true);
			useEventListener(wrapperRef, "blur", handleBlur, true);
			useEventListener(wrapperRef, "click", handleClick, true);
			return {
				isFocused,
				wrapperRef,
				handleFocus,
				handleBlur
			};
		}
		var init_use_focus_controller = __esmMin((() => {
			init_aria();
			init_types();
			init_dist$2();
			init_vue_runtime_esm_bundler();
		}));
		function useComposition({ afterComposition, emit }) {
			const isComposing = ref(false);
			const handleCompositionStart = (event) => {
				emit?.("compositionstart", event);
				isComposing.value = true;
			};
			const handleCompositionUpdate = (event) => {
				emit?.("compositionupdate", event);
				isComposing.value = true;
			};
			const handleCompositionEnd = (event) => {
				emit?.("compositionend", event);
				if (isComposing.value) {
					isComposing.value = false;
					nextTick(() => afterComposition(event));
				}
			};
			const handleComposition = (event) => {
				event.type === "compositionend" ? handleCompositionEnd(event) : handleCompositionUpdate(event);
			};
			return {
				isComposing,
				handleComposition,
				handleCompositionStart,
				handleCompositionUpdate,
				handleCompositionEnd
			};
		}
		var init_use_composition = __esmMin((() => {
			init_vue_runtime_esm_bundler();
		}));
		var emptyValuesContextKey;
		var SCOPE$2;
		var DEFAULT_EMPTY_VALUES;
		var useEmptyValuesProps;
		var useEmptyValues;
		var init_use_empty_values = __esmMin((() => {
			init_types();
			init_error();
			init_runtime();
			init_import();
			init_vue_runtime_esm_bundler();
			emptyValuesContextKey = Symbol("emptyValuesContextKey");
			SCOPE$2 = "use-empty-values";
			DEFAULT_EMPTY_VALUES = [
				"",
				void 0,
				null
			];
			useEmptyValuesProps = buildProps({
				emptyValues: Array,
				valueOnClear: {
					type: definePropType([
						String,
						Number,
						Boolean,
						Function
					]),
					default: void 0,
					validator: (val) => {
						val = isFunction$1(val) ? val() : val;
						if (isArray$1(val)) return val.every((item) => !item);
						return !val;
					}
				}
			});
			useEmptyValues = (props, defaultValue) => {
				const config = getCurrentInstance() ? inject(emptyValuesContextKey, ref({})) : ref({});
				const emptyValues = computed(() => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES);
				const valueOnClear = computed(() => {
					if (isFunction$1(props.valueOnClear)) return props.valueOnClear();
					else if (props.valueOnClear !== void 0) return props.valueOnClear;
					else if (isFunction$1(config.value.valueOnClear)) return config.value.valueOnClear();
					else if (config.value.valueOnClear !== void 0) return config.value.valueOnClear;
					return defaultValue !== void 0 ? defaultValue : void 0;
				});
				const isEmptyValue = (value) => {
					let result = true;
					if (isArray$1(value)) result = emptyValues.value.some((emptyValue) => {
						return isEqual(value, emptyValue);
					});
					else result = emptyValues.value.includes(value);
					return result;
				};
				if (!isEmptyValue(valueOnClear.value)) debugWarn(SCOPE$2, "value-on-clear should be a value of empty-values");
				return {
					emptyValues,
					valueOnClear,
					isEmptyValue
				};
			};
		}));
		var ariaProps;
		var useAriaProps;
		var init_use_aria = __esmMin((() => {
			init_runtime();
			init_import();
			ariaProps = buildProps({
				ariaLabel: String,
				ariaOrientation: {
					type: String,
					values: [
						"horizontal",
						"vertical",
						"undefined"
					]
				},
				ariaControls: String
			});
			useAriaProps = (arias) => {
				return pick(ariaProps, arias);
			};
		}));
		var withPropsDefaultsSetter;
		var withInstall;
		var withInstallFunction;
		var withNoopInstall;
		var init_install = __esmMin((() => {
			init_functions();
			init_shared_esm_bundler();
			init_import();
			withPropsDefaultsSetter = (target) => {
				const _p = target.props;
				const props = isArray$1(_p) ? fromPairs(_p.map((key) => [key, {}])) : _p;
				target.setPropsDefaults = (defaults) => {
					if (!props) return;
					for (const [key, value] of Object.entries(defaults)) {
						const prop = props[key];
						if (!hasOwn(props, key)) continue;
						if (isPlainObject(prop)) {
							props[key] = {
								...prop,
								default: value
							};
							continue;
						}
						props[key] = {
							type: prop,
							default: value
						};
					}
					target.props = props;
				};
			};
			withInstall = (main, extra) => {
				main.install = (app) => {
					for (const comp of [main, ...Object.values(extra ?? {})]) app.component(comp.name, comp);
				};
				if (extra) for (const [key, comp] of Object.entries(extra)) main[key] = comp;
				withPropsDefaultsSetter(main);
				return main;
			};
			withInstallFunction = (fn, name) => {
				fn.install = (app) => {
					fn._context = app._context;
					app.config.globalProperties[name] = fn;
				};
				return fn;
			};
			withNoopInstall = (component) => {
				component.install = NOOP;
				withPropsDefaultsSetter(component);
				return component;
			};
		}));
		var arrow_down_default;
		var arrow_left_default;
		var arrow_right_default;
		var arrow_up_default;
		var circle_check_default;
		var circle_close_filled_default;
		var circle_close_default;
		var close_default;
		var hide_default;
		var info_filled_default;
		var loading_default;
		var minus_default;
		var plus_default;
		var success_filled_default;
		var view_default;
		var warning_filled_default;
		var init_dist = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			arrow_down_default = defineComponent({
				name: "ArrowDown",
				__name: "arrow-down",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
					})]));
				}
			});
			arrow_left_default = defineComponent({
				name: "ArrowLeft",
				__name: "arrow-left",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0"
					})]));
				}
			});
			arrow_right_default = defineComponent({
				name: "ArrowRight",
				__name: "arrow-right",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
					})]));
				}
			});
			arrow_up_default = defineComponent({
				name: "ArrowUp",
				__name: "arrow-up",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
					})]));
				}
			});
			circle_check_default = defineComponent({
				name: "CircleCheck",
				__name: "circle-check",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
					}), createBaseVNode("path", {
						fill: "currentColor",
						d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"
					})]));
				}
			});
			circle_close_filled_default = defineComponent({
				name: "CircleCloseFilled",
				__name: "circle-close-filled",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
					})]));
				}
			});
			circle_close_default = defineComponent({
				name: "CircleClose",
				__name: "circle-close",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
					}), createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
					})]));
				}
			});
			close_default = defineComponent({
				name: "Close",
				__name: "close",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
					})]));
				}
			});
			hide_default = defineComponent({
				name: "Hide",
				__name: "hide",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"
					}), createBaseVNode("path", {
						fill: "currentColor",
						d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"
					})]));
				}
			});
			info_filled_default = defineComponent({
				name: "InfoFilled",
				__name: "info-filled",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
					})]));
				}
			});
			loading_default = defineComponent({
				name: "Loading",
				__name: "loading",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
					})]));
				}
			});
			minus_default = defineComponent({
				name: "Minus",
				__name: "minus",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
					})]));
				}
			});
			plus_default = defineComponent({
				name: "Plus",
				__name: "plus",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
					})]));
				}
			});
			success_filled_default = defineComponent({
				name: "SuccessFilled",
				__name: "success-filled",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
					})]));
				}
			});
			view_default = defineComponent({
				name: "View",
				__name: "view",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
					})]));
				}
			});
			warning_filled_default = defineComponent({
				name: "WarningFilled",
				__name: "warning-filled",
				setup(__props) {
					return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 1024 1024"
					}, [createBaseVNode("path", {
						fill: "currentColor",
						d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
					})]));
				}
			});
		}));
		var iconPropType;
		var CloseComponents;
		var TypeComponents;
		var TypeComponentsMap;
		var ValidateComponentsMap;
		var init_icon$2 = __esmMin((() => {
			init_runtime();
			init_dist();
			iconPropType = definePropType([
				String,
				Object,
				Function
			]);
			CloseComponents = { Close: close_default };
			TypeComponents = {
				Close: close_default,
				SuccessFilled: success_filled_default,
				InfoFilled: info_filled_default,
				WarningFilled: warning_filled_default,
				CircleCloseFilled: circle_close_filled_default
			};
			TypeComponentsMap = {
				primary: info_filled_default,
				success: success_filled_default,
				warning: warning_filled_default,
				error: circle_close_filled_default,
				info: info_filled_default
			};
			ValidateComponentsMap = {
				validating: loading_default,
				success: circle_check_default,
				error: circle_close_default
			};
		}));
		var alertEffects;
		var alertProps;
		var alertEmits;
		var init_alert$1 = __esmMin((() => {
			init_objects();
			init_runtime();
			init_icon$2();
			alertEffects = ["light", "dark"];
			alertProps = buildProps({
				title: {
					type: String,
					default: ""
				},
				description: {
					type: String,
					default: ""
				},
				type: {
					type: String,
					values: keysOf(TypeComponentsMap),
					default: "info"
				},
				closable: {
					type: Boolean,
					default: true
				},
				closeText: {
					type: String,
					default: ""
				},
				showIcon: Boolean,
				center: Boolean,
				effect: {
					type: String,
					values: alertEffects,
					default: "light"
				}
			});
			alertEmits = { close: (evt) => evt instanceof MouseEvent };
		}));
		var iconProps;
		var init_icon$1 = __esmMin((() => {
			init_runtime();
			iconProps = buildProps({
				size: { type: definePropType([Number, String]) },
				color: { type: String }
			});
		}));
		var icon_vue_vue_type_script_setup_true_lang_default;
		var init_icon_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_style$1();
			init_use_namespace();
			init_icon$1();
			init_vue_runtime_esm_bundler();
			icon_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElIcon",
				inheritAttrs: false,
				__name: "icon",
				props: iconProps,
				setup(__props) {
					const props = __props;
					const ns = useNamespace("icon");
					const style = computed(() => {
						const { size, color } = props;
						const fontSize = addUnit(size);
						if (!fontSize && !color) return {};
						return {
							fontSize,
							"--color": color
						};
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("i", mergeProps({
							class: unref(ns).b(),
							style: style.value
						}, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16);
					};
				}
			});
		}));
		var icon_default;
		var init_icon2 = __esmMin((() => {
			init_icon_vue_vue_type_script_setup_true_lang();
			icon_default = icon_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElIcon;
		var init_icon = __esmMin((() => {
			init_install();
			init_icon2();
			ElIcon = withInstall(icon_default);
		}));
		var alert_vue_vue_type_script_setup_true_lang_default;
		var init_alert_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_icon$2();
			init_vnode();
			init_use_namespace();
			init_alert$1();
			init_icon();
			init_vue_runtime_esm_bundler();
			alert_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElAlert",
				__name: "alert",
				props: alertProps,
				emits: alertEmits,
				setup(__props, { emit: __emit }) {
					const { Close } = TypeComponents;
					const props = __props;
					const emit = __emit;
					const slots = useSlots();
					const ns = useNamespace("alert");
					const visible = ref(true);
					const iconComponent = computed(() => TypeComponentsMap[props.type]);
					const hasDesc = computed(() => {
						if (props.description) return true;
						const slotContent = slots.default?.();
						if (!slotContent) return false;
						return flattedChildren(slotContent).some((child) => !isComment(child));
					});
					const close = (evt) => {
						visible.value = false;
						emit("close", evt);
					};
					return (_ctx, _cache) => {
						return openBlock(), createBlock(Transition, {
							name: unref(ns).b("fade"),
							persisted: ""
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("div", {
								class: normalizeClass([
									unref(ns).b(),
									unref(ns).m(__props.type),
									unref(ns).is("center", __props.center),
									unref(ns).is(__props.effect)
								]),
								role: "alert"
							}, [__props.showIcon && (_ctx.$slots.icon || iconComponent.value) ? (openBlock(), createBlock(unref(ElIcon), {
								key: 0,
								class: normalizeClass([unref(ns).e("icon"), unref(ns).is("big", hasDesc.value)])
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "icon", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(iconComponent.value)))])]),
								_: 3
							}, 8, ["class"])) : createCommentVNode("v-if", true), createBaseVNode("div", { class: normalizeClass(unref(ns).e("content")) }, [
								__props.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass([unref(ns).e("title"), { "with-description": hasDesc.value }])
								}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])], 2)) : createCommentVNode("v-if", true),
								hasDesc.value ? (openBlock(), createElementBlock("p", {
									key: 1,
									class: normalizeClass(unref(ns).e("description"))
								}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.description), 1)])], 2)) : createCommentVNode("v-if", true),
								__props.closable ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [__props.closeText ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass([unref(ns).e("close-btn"), unref(ns).is("customed")]),
									onClick: close
								}, toDisplayString(__props.closeText), 3)) : (openBlock(), createBlock(unref(ElIcon), {
									key: 1,
									class: normalizeClass(unref(ns).e("close-btn")),
									onClick: close
								}, {
									default: withCtx(() => [createVNode(unref(Close))]),
									_: 1
								}, 8, ["class"]))], 64)) : createCommentVNode("v-if", true)
							], 2)], 2), [[vShow, visible.value]])]),
							_: 3
						}, 8, ["name"]);
					};
				}
			});
		}));
		var alert_default;
		var init_alert2 = __esmMin((() => {
			init_alert_vue_vue_type_script_setup_true_lang();
			alert_default = alert_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElAlert;
		var init_alert = __esmMin((() => {
			init_install();
			init_alert2();
			ElAlert = withInstall(alert_default);
		}));
		var roleTypes;
		var popperProps;
		var init_popper$1 = __esmMin((() => {
			init_runtime();
			roleTypes = [
				"dialog",
				"grid",
				"group",
				"listbox",
				"menu",
				"navigation",
				"tooltip",
				"tree"
			];
			popperProps = buildProps({ role: {
				type: String,
				values: roleTypes,
				default: "tooltip"
			} });
		}));
		var POPPER_INJECTION_KEY;
		var POPPER_CONTENT_INJECTION_KEY;
		var init_constants$6 = __esmMin((() => {
			POPPER_INJECTION_KEY = Symbol("popper");
			POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
		}));
		var arrow_vue_vue_type_script_setup_true_lang_default;
		var init_arrow_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_namespace();
			init_constants$6();
			init_vue_runtime_esm_bundler();
			arrow_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElPopperArrow",
				inheritAttrs: false,
				__name: "arrow",
				setup(__props, { expose: __expose }) {
					const ns = useNamespace("popper");
					const { arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
					onBeforeUnmount(() => {
						arrowRef.value = void 0;
					});
					__expose({ arrowRef });
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("span", {
							ref_key: "arrowRef",
							ref: arrowRef,
							class: normalizeClass(unref(ns).e("arrow")),
							style: normalizeStyle(unref(arrowStyle)),
							"data-popper-arrow": ""
						}, null, 6);
					};
				}
			});
		}));
		var arrow_default;
		var init_arrow2 = __esmMin((() => {
			init_arrow_vue_vue_type_script_setup_true_lang();
			arrow_default = arrow_vue_vue_type_script_setup_true_lang_default;
		}));
		var popperTriggerProps;
		var init_trigger$1 = __esmMin((() => {
			init_runtime();
			popperTriggerProps = buildProps({
				virtualRef: { type: definePropType(Object) },
				virtualTriggering: Boolean,
				onMouseenter: { type: definePropType(Function) },
				onMouseleave: { type: definePropType(Function) },
				onClick: { type: definePropType(Function) },
				onKeydown: { type: definePropType(Function) },
				onFocus: { type: definePropType(Function) },
				onBlur: { type: definePropType(Function) },
				onContextmenu: { type: definePropType(Function) },
				id: String,
				open: Boolean
			});
		}));
		function findFirstLegitChild(node) {
			if (!node) return [null, 0];
			const children = node;
			const len = children.filter((c) => c.type !== Comment).length;
			for (const child of children) {
				if (isObject$2(child)) switch (child.type) {
					case Comment: continue;
					case Text:
					case "svg": return [wrapTextContent(child), len];
					case Fragment: return findFirstLegitChild(child.children);
					default: return [child, len];
				}
				return [wrapTextContent(child), len];
			}
			return [null, 0];
		}
		function wrapTextContent(s) {
			const ns = useNamespace("only-child");
			return createVNode("span", { "class": ns.e("content") }, [s]);
		}
		var NAME;
		var OnlyChild;
		var init_only_child = __esmMin((() => {
			init_types();
			init_error();
			init_functions();
			init_use_namespace();
			init_use_forward_ref();
			init_vue_runtime_esm_bundler();
			NAME = "ElOnlyChild";
			OnlyChild = defineComponent({
				name: NAME,
				setup(_, { slots, attrs }) {
					const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
					const forwardRefDirective = useForwardRefDirective(forwardRefInjection?.setForwardRef ?? NOOP);
					return () => {
						const defaultSlot = slots.default?.(attrs);
						if (!defaultSlot) return null;
						const [firstLegitNode, length] = findFirstLegitChild(defaultSlot);
						if (!firstLegitNode) {
							debugWarn(NAME, "no valid child node found");
							return null;
						}
						if (length > 1) debugWarn(NAME, "requires exact only one valid child.");
						return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
					};
				}
			});
		}));
		var trigger_vue_vue_type_script_setup_true_lang_default$1;
		var init_trigger_vue_vue_type_script_setup_true_lang$1 = __esmMin((() => {
			init_aria();
			init_types();
			init_use_forward_ref();
			init_constants$6();
			init_trigger$1();
			init_only_child();
			init_dist$2();
			init_import();
			init_vue_runtime_esm_bundler();
			trigger_vue_vue_type_script_setup_true_lang_default$1 = defineComponent({
				name: "ElPopperTrigger",
				inheritAttrs: false,
				__name: "trigger",
				props: popperTriggerProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
					useForwardRef(triggerRef);
					const ariaControls = computed(() => {
						return ariaHaspopup.value ? props.id : void 0;
					});
					const ariaDescribedby = computed(() => {
						if (role && role.value === "tooltip") return props.open && props.id ? props.id : void 0;
					});
					const ariaHaspopup = computed(() => {
						if (role && role.value !== "tooltip") return role.value;
					});
					const ariaExpanded = computed(() => {
						return ariaHaspopup.value ? `${props.open}` : void 0;
					});
					let virtualTriggerAriaStopWatch = void 0;
					const TRIGGER_ELE_EVENTS = [
						"onMouseenter",
						"onMouseleave",
						"onClick",
						"onKeydown",
						"onFocus",
						"onBlur",
						"onContextmenu"
					];
					onMounted(() => {
						watch(() => props.virtualRef, (virtualEl) => {
							if (virtualEl) triggerRef.value = unrefElement(virtualEl);
						}, { immediate: true });
						watch(triggerRef, (el, prevEl) => {
							virtualTriggerAriaStopWatch?.();
							virtualTriggerAriaStopWatch = void 0;
							if (isElement(prevEl)) TRIGGER_ELE_EVENTS.forEach((eventName) => {
								const handler = props[eventName];
								if (handler) prevEl.removeEventListener(eventName.slice(2).toLowerCase(), handler, ["onFocus", "onBlur"].includes(eventName));
							});
							if (isElement(el)) {
								TRIGGER_ELE_EVENTS.forEach((eventName) => {
									const handler = props[eventName];
									if (handler) el.addEventListener(eventName.slice(2).toLowerCase(), handler, ["onFocus", "onBlur"].includes(eventName));
								});
								if (isFocusable(el)) virtualTriggerAriaStopWatch = watch([
									ariaControls,
									ariaDescribedby,
									ariaHaspopup,
									ariaExpanded
								], (watches) => {
									[
										"aria-controls",
										"aria-describedby",
										"aria-haspopup",
										"aria-expanded"
									].forEach((key, idx) => {
										isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
									});
								}, { immediate: true });
							}
							if (isElement(prevEl) && isFocusable(prevEl)) [
								"aria-controls",
								"aria-describedby",
								"aria-haspopup",
								"aria-expanded"
							].forEach((key) => prevEl.removeAttribute(key));
						}, { immediate: true });
					});
					onBeforeUnmount(() => {
						virtualTriggerAriaStopWatch?.();
						virtualTriggerAriaStopWatch = void 0;
						if (triggerRef.value && isElement(triggerRef.value)) {
							const el = triggerRef.value;
							TRIGGER_ELE_EVENTS.forEach((eventName) => {
								const handler = props[eventName];
								if (handler) el.removeEventListener(eventName.slice(2).toLowerCase(), handler, ["onFocus", "onBlur"].includes(eventName));
							});
							triggerRef.value = void 0;
						}
					});
					__expose({ triggerRef });
					return (_ctx, _cache) => {
						return !__props.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
							"aria-controls": ariaControls.value,
							"aria-describedby": ariaDescribedby.value,
							"aria-expanded": ariaExpanded.value,
							"aria-haspopup": ariaHaspopup.value
						}), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16, [
							"aria-controls",
							"aria-describedby",
							"aria-expanded",
							"aria-haspopup"
						])) : createCommentVNode("v-if", true);
					};
				}
			});
		}));
		var trigger_default$1;
		var init_trigger2$1 = __esmMin((() => {
			init_trigger_vue_vue_type_script_setup_true_lang$1();
			trigger_default$1 = trigger_vue_vue_type_script_setup_true_lang_default$1;
		}));
		var popperArrowProps;
		var popperArrowPropsDefaults;
		var init_arrow = __esmMin((() => {
			init_runtime();
			popperArrowProps = buildProps({ arrowOffset: {
				type: Number,
				default: 5
			} });
			popperArrowPropsDefaults = { arrowOffset: 5 };
		}));
		var popperCoreConfigProps;
		var popperContentProps;
		var popperCoreConfigPropsDefaults;
		var popperContentPropsDefaults;
		var popperContentEmits;
		var init_content$1 = __esmMin((() => {
			init_runtime();
			init_use_aria();
			init_arrow();
			init_dist$1();
			popperCoreConfigProps = buildProps({
				boundariesPadding: {
					type: Number,
					default: 0
				},
				fallbackPlacements: {
					type: definePropType(Array),
					default: void 0
				},
				gpuAcceleration: {
					type: Boolean,
					default: true
				},
				offset: {
					type: Number,
					default: 12
				},
				placement: {
					type: String,
					values: Ee,
					default: "bottom"
				},
				popperOptions: {
					type: definePropType(Object),
					default: () => ({})
				},
				strategy: {
					type: String,
					values: ["fixed", "absolute"],
					default: "absolute"
				}
			});
			popperContentProps = buildProps({
				...popperCoreConfigProps,
				...popperArrowProps,
				id: String,
				style: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				className: { type: definePropType([
					String,
					Array,
					Object,
					Boolean
				]) },
				effect: {
					type: definePropType(String),
					default: "dark"
				},
				visible: Boolean,
				enterable: {
					type: Boolean,
					default: true
				},
				pure: Boolean,
				focusOnShow: Boolean,
				trapping: Boolean,
				popperClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				popperStyle: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				referenceEl: { type: definePropType(Object) },
				triggerTargetEl: { type: definePropType(Object) },
				stopPopperMouseEvent: {
					type: Boolean,
					default: true
				},
				virtualTriggering: Boolean,
				zIndex: Number,
				...useAriaProps(["ariaLabel"]),
				loop: Boolean
			});
			popperCoreConfigPropsDefaults = {
				boundariesPadding: 0,
				gpuAcceleration: true,
				offset: 12,
				placement: "bottom",
				popperOptions: () => ({}),
				strategy: "absolute"
			};
			popperContentPropsDefaults = {
				...popperCoreConfigPropsDefaults,
				...popperArrowPropsDefaults,
				effect: "dark",
				enterable: true,
				stopPopperMouseEvent: true,
				visible: false,
				pure: false,
				focusOnShow: false,
				trapping: false,
				virtualTriggering: false,
				loop: false,
				style: void 0,
				popperStyle: void 0,
				popperClass: void 0
			};
			popperContentEmits = {
				mouseenter: (evt) => evt instanceof MouseEvent,
				mouseleave: (evt) => evt instanceof MouseEvent,
				focus: () => true,
				blur: () => true,
				close: () => true
			};
		}));
		var formMetaProps;
		var formProps;
		var formEmits;
		var init_form$1 = __esmMin((() => {
			init_size();
			init_types();
			init_runtime();
			formMetaProps = buildProps({
				size: {
					type: String,
					values: componentSizes
				},
				disabled: Boolean
			});
			formProps = buildProps({
				...formMetaProps,
				model: Object,
				rules: { type: definePropType(Object) },
				labelPosition: {
					type: String,
					values: [
						"left",
						"right",
						"top"
					],
					default: "right"
				},
				requireAsteriskPosition: {
					type: String,
					values: ["left", "right"],
					default: "left"
				},
				labelWidth: {
					type: [String, Number],
					default: ""
				},
				labelSuffix: {
					type: String,
					default: ""
				},
				inline: Boolean,
				inlineMessage: Boolean,
				statusIcon: Boolean,
				showMessage: {
					type: Boolean,
					default: true
				},
				validateOnRuleChange: {
					type: Boolean,
					default: true
				},
				hideRequiredAsterisk: Boolean,
				scrollToError: Boolean,
				scrollIntoViewOptions: {
					type: definePropType([Object, Boolean]),
					default: true
				}
			});
			formEmits = { validate: (prop, isValid, message) => (isArray$1(prop) || isString(prop)) && isBoolean(isValid) && isString(message) };
		}));
		var formContextKey;
		var formItemContextKey;
		var init_constants$5 = __esmMin((() => {
			formContextKey = Symbol("formContextKey");
			formItemContextKey = Symbol("formItemContextKey");
		}));
		var useFormSize;
		var useFormDisabled;
		var init_use_form_common_props = __esmMin((() => {
			init_use_prop();
			init_use_size();
			init_constants$5();
			init_vue_runtime_esm_bundler();
			useFormSize = (fallback, ignore = {}) => {
				const emptyRef = ref(void 0);
				const size = ignore.prop ? emptyRef : useProp("size");
				const globalConfig = ignore.global ? emptyRef : useGlobalSize();
				const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
				const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
				return computed(() => size.value || unref(fallback) || formItem?.size || form?.size || globalConfig.value || "");
			};
			useFormDisabled = (fallback) => {
				const disabled = useProp("disabled");
				const form = inject(formContextKey, void 0);
				return computed(() => {
					return disabled.value ?? unref(fallback) ?? form?.disabled ?? false;
				});
			};
		}));
		var useFormItem;
		var useFormItemInputId;
		var init_use_form_item = __esmMin((() => {
			init_use_id();
			init_constants$5();
			init_vue_runtime_esm_bundler();
			useFormItem = () => {
				return {
					form: inject(formContextKey, void 0),
					formItem: inject(formItemContextKey, void 0)
				};
			};
			useFormItemInputId = (props, { formItemContext, disableIdGeneration, disableIdManagement }) => {
				if (!disableIdGeneration) disableIdGeneration = ref(false);
				if (!disableIdManagement) disableIdManagement = ref(false);
				const instance = getCurrentInstance();
				const inLabel = () => {
					let parent = instance?.parent;
					while (parent) {
						if (parent.type.name === "ElFormItem") return false;
						if (parent.type.name === "ElLabelWrap") return true;
						parent = parent.parent;
					}
					return false;
				};
				const inputId = ref();
				let idUnwatch = void 0;
				const isLabeledByFormItem = computed(() => {
					return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && formItemContext.inputIds?.length <= 1);
				});
				onMounted(() => {
					idUnwatch = watch([toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration]) => {
						const newId = id ?? (!disableIdGeneration ? useId().value : void 0);
						if (newId !== inputId.value) {
							if (formItemContext?.removeInputId && !inLabel()) {
								inputId.value && formItemContext.removeInputId(inputId.value);
								if (!disableIdManagement?.value && !disableIdGeneration && newId) formItemContext.addInputId(newId);
							}
							inputId.value = newId;
						}
					}, { immediate: true });
				});
				onUnmounted(() => {
					idUnwatch && idUnwatch();
					if (formItemContext?.removeInputId) inputId.value && formItemContext.removeInputId(inputId.value);
				});
				return {
					isLabeledByFormItem,
					inputId
				};
			};
		}));
		var formItemValidateStates;
		var formItemProps;
		var init_form_item = __esmMin((() => {
			init_size();
			init_runtime();
			formItemValidateStates = [
				"",
				"error",
				"validating",
				"success"
			];
			formItemProps = buildProps({
				label: String,
				labelWidth: { type: [String, Number] },
				labelPosition: {
					type: String,
					values: [
						"left",
						"right",
						"top",
						""
					],
					default: ""
				},
				prop: { type: definePropType([String, Array]) },
				required: {
					type: Boolean,
					default: void 0
				},
				rules: { type: definePropType([Object, Array]) },
				error: String,
				validateStatus: {
					type: String,
					values: formItemValidateStates
				},
				for: String,
				inlineMessage: {
					type: Boolean,
					default: void 0
				},
				showMessage: {
					type: Boolean,
					default: true
				},
				size: {
					type: String,
					values: componentSizes
				}
			});
		}));
		var castArray;
		var init_arrays = __esmMin((() => {
			init_types();
			init_import();
			castArray = (arr) => {
				if (!arr && arr !== 0) return [];
				return isArray$1(arr) ? arr : [arr];
			};
		}));
		function useFormLabelWidth() {
			const potentialLabelWidthArr = ref([]);
			const autoLabelWidth = computed(() => {
				if (!potentialLabelWidthArr.value.length) return "0";
				const max = Math.max(...potentialLabelWidthArr.value);
				return max ? `${max}px` : "";
			});
			function getLabelWidthIndex(width) {
				const index = potentialLabelWidthArr.value.indexOf(width);
				if (index === -1 && autoLabelWidth.value === "0") debugWarn(SCOPE$1, `unexpected width ${width}`);
				return index;
			}
			function registerLabelWidth(val, oldVal) {
				if (val && oldVal) {
					const index = getLabelWidthIndex(oldVal);
					potentialLabelWidthArr.value.splice(index, 1, val);
				} else if (val) potentialLabelWidthArr.value.push(val);
			}
			function deregisterLabelWidth(val) {
				const index = getLabelWidthIndex(val);
				if (index > -1) potentialLabelWidthArr.value.splice(index, 1);
			}
			return {
				autoLabelWidth,
				registerLabelWidth,
				deregisterLabelWidth
			};
		}
		var SCOPE$1;
		var filterFields;
		var init_utils$4 = __esmMin((() => {
			init_types();
			init_error();
			init_arrays();
			init_vue_runtime_esm_bundler();
			SCOPE$1 = "ElForm";
			filterFields = (fields, props) => {
				const normalized = castArray$1(props).map((prop) => isArray$1(prop) ? prop.join(".") : prop);
				return normalized.length > 0 ? fields.filter((field) => field.propString && normalized.includes(field.propString)) : fields;
			};
		}));
		var COMPONENT_NAME$7;
		var form_vue_vue_type_script_setup_true_lang_default;
		var init_form_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_types();
			init_objects();
			init_error();
			init_functions();
			init_arrays();
			init_use_namespace();
			init_form$1();
			init_constants$5();
			init_use_form_common_props();
			init_utils$4();
			init_import();
			init_vue_runtime_esm_bundler();
			COMPONENT_NAME$7 = "ElForm";
			form_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: COMPONENT_NAME$7,
				__name: "form",
				props: formProps,
				emits: formEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					const formRef = ref();
					const fields = reactive([]);
					const initialValues = new Map();
					const formSize = useFormSize();
					const ns = useNamespace("form");
					const formClasses = computed(() => {
						const { labelPosition, inline } = props;
						return [
							ns.b(),
							ns.m(formSize.value || "default"),
							{
								[ns.m(`label-${labelPosition}`)]: labelPosition,
								[ns.m("inline")]: inline
							}
						];
					});
					const getField = (prop) => {
						return filterFields(fields, [prop])[0];
					};
					const addField = (field) => {
						if (!fields.includes(field)) fields.push(field);
						if (field.propString) {
							if (initialValues.has(field.propString)) field.setInitialValue(initialValues.get(field.propString));
							else initialValues.set(field.propString, cloneDeep(field.fieldValue));
						}
					};
					const removeField = (field, oldPropString) => {
						if (oldPropString) {
							initialValues.delete(oldPropString);
							return;
						}
						const idx = fields.indexOf(field);
						if (idx > -1) {
							fields.splice(idx, 1);
							if (field.propString) initialValues.set(field.propString, cloneDeep(field.getInitialValue()));
						}
					};
					const setInitialValues = (initModel) => {
						if (!props.model) {
							debugWarn(COMPONENT_NAME$7, "model is required for setInitialValues to work.");
							return;
						}
						if (!initModel) {
							debugWarn(COMPONENT_NAME$7, "initModel is required for setInitialValues to work.");
							return;
						}
						for (const key of initialValues.keys()) initialValues.set(key, cloneDeep(getProp(initModel, key).value));
						fields.forEach((field) => {
							if (field.prop) field.setInitialValue(getProp(initModel, field.prop).value);
						});
					};
					const resetFields = (properties = []) => {
						if (!props.model) {
							debugWarn(COMPONENT_NAME$7, "model is required for resetFields to work.");
							return;
						}
						filterFields(fields, properties).forEach((field) => field.resetField());
						const activePropStrings = new Set(fields.map((f) => f.propString).filter(Boolean));
						const propsToCheck = properties.length > 0 ? castArray$1(properties).map((p) => isArray$1(p) ? p.join(".") : p) : [...initialValues.keys()];
						for (const propString of propsToCheck) if (!activePropStrings.has(propString) && initialValues.has(propString)) getProp(props.model, propString).value = cloneDeep(initialValues.get(propString));
					};
					const clearValidate = (props = []) => {
						filterFields(fields, props).forEach((field) => field.clearValidate());
					};
					const isValidatable = computed(() => {
						const hasModel = !!props.model;
						if (!hasModel) debugWarn(COMPONENT_NAME$7, "model is required for validate to work.");
						return hasModel;
					});
					const obtainValidateFields = (props) => {
						if (fields.length === 0) return [];
						const filteredFields = filterFields(fields, props);
						if (!filteredFields.length) {
							debugWarn(COMPONENT_NAME$7, "please pass correct props!");
							return [];
						}
						return filteredFields;
					};
					const validate = async (callback) => validateField(void 0, callback);
					const doValidateField = async (props = []) => {
						if (!isValidatable.value) return false;
						const fields = obtainValidateFields(props);
						if (fields.length === 0) return true;
						let validationErrors = {};
						for (const field of fields) try {
							await field.validate("");
							if (field.validateState === "error" && !field.error) field.resetField();
						} catch (fields) {
							validationErrors = {
								...validationErrors,
								...fields
							};
						}
						if (Object.keys(validationErrors).length === 0) return true;
						return Promise.reject(validationErrors);
					};
					const validateField = async (modelProps = [], callback) => {
						let result = false;
						const shouldThrow = !isFunction$1(callback);
						try {
							result = await doValidateField(modelProps);
							if (result === true) await callback?.(result);
							return result;
						} catch (e) {
							if (e instanceof Error) throw e;
							const invalidFields = e;
							if (props.scrollToError) {
								if (formRef.value) formRef.value.querySelector(`.${ns.b()}-item.is-error`)?.scrollIntoView(props.scrollIntoViewOptions);
							}
							!result && await callback?.(false, invalidFields);
							return shouldThrow && Promise.reject(invalidFields);
						}
					};
					const scrollToField = (prop) => {
						const field = getField(prop);
						if (field) field.$el?.scrollIntoView(props.scrollIntoViewOptions);
					};
					watch(() => props.rules, () => {
						if (props.validateOnRuleChange) validate().catch(NOOP);
					}, {
						deep: true,
						flush: "post"
					});
					provide(formContextKey, reactive({
						...toRefs(props),
						emit,
						resetFields,
						clearValidate,
						validateField,
						getField,
						addField,
						removeField,
						setInitialValues,
						...useFormLabelWidth()
					}));
					__expose({
						validate,
						validateField,
						resetFields,
						clearValidate,
						scrollToField,
						getField,
						fields,
						setInitialValues
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("form", {
							ref_key: "formRef",
							ref: formRef,
							class: normalizeClass(formClasses.value)
						}, [renderSlot(_ctx.$slots, "default")], 2);
					};
				}
			});
		}));
		var form_default;
		var init_form2 = __esmMin((() => {
			init_form_vue_vue_type_script_setup_true_lang();
			form_default = form_vue_vue_type_script_setup_true_lang_default;
		}));
		var COMPONENT_NAME$6;
		var form_label_wrap_default;
		var init_form_label_wrap = __esmMin((() => {
			init_error();
			init_use_namespace();
			init_constants$5();
			init_dist$2();
			init_vue_runtime_esm_bundler();
			COMPONENT_NAME$6 = "ElLabelWrap";
			form_label_wrap_default = defineComponent({
				name: COMPONENT_NAME$6,
				props: {
					isAutoWidth: Boolean,
					updateAll: Boolean
				},
				setup(props, { slots }) {
					const formContext = inject(formContextKey, void 0);
					const formItemContext = inject(formItemContextKey);
					if (!formItemContext) throwError(COMPONENT_NAME$6, "usage: <el-form-item><label-wrap /></el-form-item>");
					const ns = useNamespace("form");
					const el = ref();
					const computedWidth = ref(0);
					const getLabelWidth = () => {
						if (el.value?.firstElementChild) {
							const width = window.getComputedStyle(el.value.firstElementChild).width;
							return Math.ceil(Number.parseFloat(width));
						} else return 0;
					};
					const updateLabelWidth = (action = "update") => {
						nextTick(() => {
							if (formItemContext.hasLabel && props.isAutoWidth) {
								if (action === "update") computedWidth.value = getLabelWidth();
								else if (action === "remove") formContext?.deregisterLabelWidth(computedWidth.value);
							}
						});
					};
					const updateLabelWidthFn = () => updateLabelWidth("update");
					onMounted(() => {
						updateLabelWidthFn();
					});
					onBeforeUnmount(() => {
						updateLabelWidth("remove");
					});
					onUpdated(() => updateLabelWidthFn());
					watch(computedWidth, (val, oldVal) => {
						if (props.updateAll) formContext?.registerLabelWidth(val, oldVal);
					});
					useResizeObserver(computed(() => el.value?.firstElementChild ?? null), updateLabelWidthFn);
					return () => {
						if (!slots) return null;
						const { isAutoWidth } = props;
						if (isAutoWidth) {
							const autoLabelWidth = formContext?.autoLabelWidth;
							const hasLabel = formItemContext?.hasLabel;
							const style = {};
							if (hasLabel && autoLabelWidth && autoLabelWidth !== "auto") {
								const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
								const marginPosition = (formItemContext.labelPosition || formContext.labelPosition) === "left" ? "marginRight" : "marginLeft";
								if (marginWidth) style[marginPosition] = `${marginWidth}px`;
							}
							return createVNode("div", {
								"ref": el,
								"class": [ns.be("item", "label-wrap")],
								"style": style
							}, [slots.default?.()]);
						} else return createVNode(Fragment, { "ref": el }, [slots.default?.()]);
					};
				}
			});
		}));
		function _extends() {
			_extends = Object.assign ? Object.assign.bind() : function(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];
					for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
				}
				return target;
			};
			return _extends.apply(this, arguments);
		}
		function _inheritsLoose(subClass, superClass) {
			subClass.prototype = Object.create(superClass.prototype);
			subClass.prototype.constructor = subClass;
			_setPrototypeOf(subClass, superClass);
		}
		function _getPrototypeOf(o) {
			_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
			};
			return _getPrototypeOf(o);
		}
		function _setPrototypeOf(o, p) {
			_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};
			return _setPrototypeOf(o, p);
		}
		function _isNativeReflectConstruct() {
			if (typeof Reflect === "undefined" || !Reflect.construct) return false;
			if (Reflect.construct.sham) return false;
			if (typeof Proxy === "function") return true;
			try {
				Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
				return true;
			} catch (e) {
				return false;
			}
		}
		function _construct(Parent, args, Class) {
			if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
			else _construct = function _construct(Parent, args, Class) {
				var a = [null];
				a.push.apply(a, args);
				var instance = new (Function.bind.apply(Parent, a))();
				if (Class) _setPrototypeOf(instance, Class.prototype);
				return instance;
			};
			return _construct.apply(null, arguments);
		}
		function _isNativeFunction(fn) {
			return Function.toString.call(fn).indexOf("[native code]") !== -1;
		}
		function _wrapNativeSuper(Class) {
			var _cache = typeof Map === "function" ? new Map() : void 0;
			_wrapNativeSuper = function _wrapNativeSuper(Class) {
				if (Class === null || !_isNativeFunction(Class)) return Class;
				if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
				if (typeof _cache !== "undefined") {
					if (_cache.has(Class)) return _cache.get(Class);
					_cache.set(Class, Wrapper);
				}
				function Wrapper() {
					return _construct(Class, arguments, _getPrototypeOf(this).constructor);
				}
				Wrapper.prototype = Object.create(Class.prototype, { constructor: {
					value: Wrapper,
					enumerable: false,
					writable: true,
					configurable: true
				} });
				return _setPrototypeOf(Wrapper, Class);
			};
			return _wrapNativeSuper(Class);
		}
		function convertFieldsError(errors) {
			if (!errors || !errors.length) return null;
			var fields = {};
			errors.forEach(function(error) {
				var field = error.field;
				fields[field] = fields[field] || [];
				fields[field].push(error);
			});
			return fields;
		}
		function format(template) {
			for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
			var i = 0;
			var len = args.length;
			if (typeof template === "function") return template.apply(null, args);
			if (typeof template === "string") return template.replace(formatRegExp, function(x) {
				if (x === "%%") return "%";
				if (i >= len) return x;
				switch (x) {
					case "%s": return String(args[i++]);
					case "%d": return Number(args[i++]);
					case "%j": try {
						return JSON.stringify(args[i++]);
					} catch (_) {
						return "[Circular]";
					}
					default: return x;
				}
			});
			return template;
		}
		function isNativeStringType(type) {
			return type === "string" || type === "url" || type === "hex" || type === "email" || type === "date" || type === "pattern";
		}
		function isEmptyValue(value, type) {
			if (value === void 0 || value === null) return true;
			if (type === "array" && Array.isArray(value) && !value.length) return true;
			if (isNativeStringType(type) && typeof value === "string" && !value) return true;
			return false;
		}
		function asyncParallelArray(arr, func, callback) {
			var results = [];
			var total = 0;
			var arrLength = arr.length;
			function count(errors) {
				results.push.apply(results, errors || []);
				total++;
				if (total === arrLength) callback(results);
			}
			arr.forEach(function(a) {
				func(a, count);
			});
		}
		function asyncSerialArray(arr, func, callback) {
			var index = 0;
			var arrLength = arr.length;
			function next(errors) {
				if (errors && errors.length) {
					callback(errors);
					return;
				}
				var original = index;
				index = index + 1;
				if (original < arrLength) func(arr[original], next);
				else callback([]);
			}
			next([]);
		}
		function flattenObjArr(objArr) {
			var ret = [];
			Object.keys(objArr).forEach(function(k) {
				ret.push.apply(ret, objArr[k] || []);
			});
			return ret;
		}
		function asyncMap(objArr, option, func, callback, source) {
			if (option.first) {
				var _pending = new Promise(function(resolve, reject) {
					asyncSerialArray(flattenObjArr(objArr), func, function next(errors) {
						callback(errors);
						return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
					});
				});
				_pending["catch"](function(e) {
					return e;
				});
				return _pending;
			}
			var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
			var objArrKeys = Object.keys(objArr);
			var objArrLength = objArrKeys.length;
			var total = 0;
			var results = [];
			var pending = new Promise(function(resolve, reject) {
				var next = function next(errors) {
					results.push.apply(results, errors);
					total++;
					if (total === objArrLength) {
						callback(results);
						return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
					}
				};
				if (!objArrKeys.length) {
					callback(results);
					resolve(source);
				}
				objArrKeys.forEach(function(key) {
					var arr = objArr[key];
					if (firstFields.indexOf(key) !== -1) asyncSerialArray(arr, func, next);
					else asyncParallelArray(arr, func, next);
				});
			});
			pending["catch"](function(e) {
				return e;
			});
			return pending;
		}
		function isErrorObj(obj) {
			return !!(obj && obj.message !== void 0);
		}
		function getValue(value, path) {
			var v = value;
			for (var i = 0; i < path.length; i++) {
				if (v == void 0) return v;
				v = v[path[i]];
			}
			return v;
		}
		function complementError(rule, source) {
			return function(oe) {
				var fieldValue;
				if (rule.fullFields) fieldValue = getValue(source, rule.fullFields);
				else fieldValue = source[oe.field || rule.fullField];
				if (isErrorObj(oe)) {
					oe.field = oe.field || rule.fullField;
					oe.fieldValue = fieldValue;
					return oe;
				}
				return {
					message: typeof oe === "function" ? oe() : oe,
					fieldValue,
					field: oe.field || rule.fullField
				};
			};
		}
		function deepMerge(target, source) {
			if (source) {
				for (var s in source) if (source.hasOwnProperty(s)) {
					var value = source[s];
					if (typeof value === "object" && typeof target[s] === "object") target[s] = _extends({}, target[s], value);
					else target[s] = value;
				}
			}
			return target;
		}
		function newMessages() {
			return {
				"default": "Validation error on field %s",
				required: "%s is required",
				"enum": "%s must be one of %s",
				whitespace: "%s cannot be empty",
				date: {
					format: "%s date %s is invalid for format %s",
					parse: "%s date could not be parsed, %s is invalid ",
					invalid: "%s date %s is invalid"
				},
				types: {
					string: "%s is not a %s",
					method: "%s is not a %s (function)",
					array: "%s is not an %s",
					object: "%s is not an %s",
					number: "%s is not a %s",
					date: "%s is not a %s",
					"boolean": "%s is not a %s",
					integer: "%s is not an %s",
					"float": "%s is not a %s",
					regexp: "%s is not a valid %s",
					email: "%s is not a valid %s",
					url: "%s is not a valid %s",
					hex: "%s is not a valid %s"
				},
				string: {
					len: "%s must be exactly %s characters",
					min: "%s must be at least %s characters",
					max: "%s cannot be longer than %s characters",
					range: "%s must be between %s and %s characters"
				},
				number: {
					len: "%s must equal %s",
					min: "%s cannot be less than %s",
					max: "%s cannot be greater than %s",
					range: "%s must be between %s and %s"
				},
				array: {
					len: "%s must be exactly %s in length",
					min: "%s cannot be less than %s in length",
					max: "%s cannot be greater than %s in length",
					range: "%s must be between %s and %s in length"
				},
				pattern: { mismatch: "%s value %s does not match pattern %s" },
				clone: function clone() {
					var cloned = JSON.parse(JSON.stringify(this));
					cloned.clone = this.clone;
					return cloned;
				}
			};
		}
		var formatRegExp;
		var warning;
		var AsyncValidationError;
		var required$1;
		var whitespace;
		var urlReg;
		var getUrlRegex;
		var pattern$2;
		var types;
		var type$1;
		var range;
		var ENUM$1;
		var rules;
		var string;
		var method;
		var number;
		var _boolean;
		var regexp;
		var integer;
		var floatFn;
		var array;
		var object;
		var ENUM;
		var enumerable;
		var pattern;
		var date;
		var required;
		var type;
		var validators;
		var messages;
		var Schema;
		var init_dist_web = __esmMin((() => {
			formatRegExp = /%[sdj%]/g;
			warning = function warning() {};
			AsyncValidationError = function(_Error) {
				_inheritsLoose(AsyncValidationError, _Error);
				function AsyncValidationError(errors, fields) {
					var _this = _Error.call(this, "Async Validation Error") || this;
					_this.errors = errors;
					_this.fields = fields;
					return _this;
				}
				return AsyncValidationError;
			}(_wrapNativeSuper(Error));
			required$1 = function required(rule, value, source, errors, options, type) {
				if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) errors.push(format(options.messages.required, rule.fullField));
			};
			whitespace = function whitespace(rule, value, source, errors, options) {
				if (/^\s+$/.test(value) || value === "") errors.push(format(options.messages.whitespace, rule.fullField));
			};
			getUrlRegex = (function() {
				if (urlReg) return urlReg;
				var word = "[a-fA-F\\d:]";
				var b = function b(options) {
					return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
				};
				var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
				var v6seg = "[a-fA-F\\d]{1,4}";
				var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
				var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
				var v4exact = new RegExp("^" + v4 + "$");
				var v6exact = new RegExp("^" + v6 + "$");
				var ip = function ip(options) {
					return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
				};
				ip.v4 = function(options) {
					return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
				};
				ip.v6 = function(options) {
					return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
				};
				var protocol = "(?:(?:[a-z]+:)?//)";
				var auth = "(?:\\S+(?::\\S*)?@)?";
				var ipv4 = ip.v4().source;
				var ipv6 = ip.v6().source;
				var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"]*)?";
				urlReg = new RegExp("(?:^" + regex + "$)", "i");
				return urlReg;
			});
			pattern$2 = {
				email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
				hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
			};
			types = {
				integer: function integer(value) {
					return types.number(value) && parseInt(value, 10) === value;
				},
				"float": function float(value) {
					return types.number(value) && !types.integer(value);
				},
				array: function array(value) {
					return Array.isArray(value);
				},
				regexp: function regexp(value) {
					if (value instanceof RegExp) return true;
					try {
						return !!new RegExp(value);
					} catch (e) {
						return false;
					}
				},
				date: function date(value) {
					return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
				},
				number: function number(value) {
					if (isNaN(value)) return false;
					return typeof value === "number";
				},
				object: function object(value) {
					return typeof value === "object" && !types.array(value);
				},
				method: function method(value) {
					return typeof value === "function";
				},
				email: function email(value) {
					return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
				},
				url: function url(value) {
					return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
				},
				hex: function hex(value) {
					return typeof value === "string" && !!value.match(pattern$2.hex);
				}
			};
			type$1 = function type(rule, value, source, errors, options) {
				if (rule.required && value === void 0) {
					required$1(rule, value, source, errors, options);
					return;
				}
				var custom = [
					"integer",
					"float",
					"array",
					"regexp",
					"object",
					"method",
					"email",
					"number",
					"date",
					"url",
					"hex"
				];
				var ruleType = rule.type;
				if (custom.indexOf(ruleType) > -1) {
					if (!types[ruleType](value)) errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
				} else if (ruleType && typeof value !== rule.type) errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
			};
			range = function range(rule, value, source, errors, options) {
				var len = typeof rule.len === "number";
				var min = typeof rule.min === "number";
				var max = typeof rule.max === "number";
				var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
				var val = value;
				var key = null;
				var num = typeof value === "number";
				var str = typeof value === "string";
				var arr = Array.isArray(value);
				if (num) key = "number";
				else if (str) key = "string";
				else if (arr) key = "array";
				if (!key) return false;
				if (arr) val = value.length;
				if (str) val = value.replace(spRegexp, "_").length;
				if (len) {
					if (val !== rule.len) errors.push(format(options.messages[key].len, rule.fullField, rule.len));
				} else if (min && !max && val < rule.min) errors.push(format(options.messages[key].min, rule.fullField, rule.min));
				else if (max && !min && val > rule.max) errors.push(format(options.messages[key].max, rule.fullField, rule.max));
				else if (min && max && (val < rule.min || val > rule.max)) errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
			};
			ENUM$1 = "enum";
			rules = {
				required: required$1,
				whitespace,
				type: type$1,
				range,
				"enum": function enumerable(rule, value, source, errors, options) {
					rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
					if (rule[ENUM$1].indexOf(value) === -1) errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
				},
				pattern: function pattern(rule, value, source, errors, options) {
					if (rule.pattern) {
						if (rule.pattern instanceof RegExp) {
							rule.pattern.lastIndex = 0;
							if (!rule.pattern.test(value)) errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
						} else if (typeof rule.pattern === "string") {
							if (!new RegExp(rule.pattern).test(value)) errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
						}
					}
				}
			};
			string = function string(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value, "string") && !rule.required) return callback();
					rules.required(rule, value, source, errors, options, "string");
					if (!isEmptyValue(value, "string")) {
						rules.type(rule, value, source, errors, options);
						rules.range(rule, value, source, errors, options);
						rules.pattern(rule, value, source, errors, options);
						if (rule.whitespace === true) rules.whitespace(rule, value, source, errors, options);
					}
				}
				callback(errors);
			};
			method = function method(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (value !== void 0) rules.type(rule, value, source, errors, options);
				}
				callback(errors);
			};
			number = function number(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (value === "") value = void 0;
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (value !== void 0) {
						rules.type(rule, value, source, errors, options);
						rules.range(rule, value, source, errors, options);
					}
				}
				callback(errors);
			};
			_boolean = function _boolean(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (value !== void 0) rules.type(rule, value, source, errors, options);
				}
				callback(errors);
			};
			regexp = function regexp(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (!isEmptyValue(value)) rules.type(rule, value, source, errors, options);
				}
				callback(errors);
			};
			integer = function integer(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (value !== void 0) {
						rules.type(rule, value, source, errors, options);
						rules.range(rule, value, source, errors, options);
					}
				}
				callback(errors);
			};
			floatFn = function floatFn(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (value !== void 0) {
						rules.type(rule, value, source, errors, options);
						rules.range(rule, value, source, errors, options);
					}
				}
				callback(errors);
			};
			array = function array(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if ((value === void 0 || value === null) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options, "array");
					if (value !== void 0 && value !== null) {
						rules.type(rule, value, source, errors, options);
						rules.range(rule, value, source, errors, options);
					}
				}
				callback(errors);
			};
			object = function object(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (value !== void 0) rules.type(rule, value, source, errors, options);
				}
				callback(errors);
			};
			ENUM = "enum";
			enumerable = function enumerable(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (value !== void 0) rules[ENUM](rule, value, source, errors, options);
				}
				callback(errors);
			};
			pattern = function pattern(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value, "string") && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (!isEmptyValue(value, "string")) rules.pattern(rule, value, source, errors, options);
				}
				callback(errors);
			};
			date = function date(rule, value, callback, source, options) {
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value, "date") && !rule.required) return callback();
					rules.required(rule, value, source, errors, options);
					if (!isEmptyValue(value, "date")) {
						var dateObject;
						if (value instanceof Date) dateObject = value;
						else dateObject = new Date(value);
						rules.type(rule, dateObject, source, errors, options);
						if (dateObject) rules.range(rule, dateObject.getTime(), source, errors, options);
					}
				}
				callback(errors);
			};
			required = function required(rule, value, callback, source, options) {
				var errors = [];
				var type = Array.isArray(value) ? "array" : typeof value;
				rules.required(rule, value, source, errors, options, type);
				callback(errors);
			};
			type = function type(rule, value, callback, source, options) {
				var ruleType = rule.type;
				var errors = [];
				if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
					if (isEmptyValue(value, ruleType) && !rule.required) return callback();
					rules.required(rule, value, source, errors, options, ruleType);
					if (!isEmptyValue(value, ruleType)) rules.type(rule, value, source, errors, options);
				}
				callback(errors);
			};
			validators = {
				string,
				method,
				number,
				"boolean": _boolean,
				regexp,
				integer,
				"float": floatFn,
				array,
				object,
				"enum": enumerable,
				pattern,
				date,
				url: type,
				hex: type,
				email: type,
				required,
				any: function any(rule, value, callback, source, options) {
					var errors = [];
					if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
						if (isEmptyValue(value) && !rule.required) return callback();
						rules.required(rule, value, source, errors, options);
					}
					callback(errors);
				}
			};
			messages = newMessages();
			Schema = function() {
				function Schema(descriptor) {
					this.rules = null;
					this._messages = messages;
					this.define(descriptor);
				}
				var _proto = Schema.prototype;
				_proto.define = function define(rules) {
					var _this = this;
					if (!rules) throw new Error("Cannot configure a schema with no rules");
					if (typeof rules !== "object" || Array.isArray(rules)) throw new Error("Rules must be an object");
					this.rules = {};
					Object.keys(rules).forEach(function(name) {
						var item = rules[name];
						_this.rules[name] = Array.isArray(item) ? item : [item];
					});
				};
				_proto.messages = function messages(_messages) {
					if (_messages) this._messages = deepMerge(newMessages(), _messages);
					return this._messages;
				};
				_proto.validate = function validate(source_, o, oc) {
					var _this2 = this;
					if (o === void 0) o = {};
					if (oc === void 0) oc = function oc() {};
					var source = source_;
					var options = o;
					var callback = oc;
					if (typeof options === "function") {
						callback = options;
						options = {};
					}
					if (!this.rules || Object.keys(this.rules).length === 0) {
						if (callback) callback(null, source);
						return Promise.resolve(source);
					}
					function complete(results) {
						var errors = [];
						var fields = {};
						function add(e) {
							if (Array.isArray(e)) {
								var _errors;
								errors = (_errors = errors).concat.apply(_errors, e);
							} else errors.push(e);
						}
						for (var i = 0; i < results.length; i++) add(results[i]);
						if (!errors.length) callback(null, source);
						else {
							fields = convertFieldsError(errors);
							callback(errors, fields);
						}
					}
					if (options.messages) {
						var messages$1 = this.messages();
						if (messages$1 === messages) messages$1 = newMessages();
						deepMerge(messages$1, options.messages);
						options.messages = messages$1;
					} else options.messages = this.messages();
					var series = {};
					(options.keys || Object.keys(this.rules)).forEach(function(z) {
						var arr = _this2.rules[z];
						var value = source[z];
						arr.forEach(function(r) {
							var rule = r;
							if (typeof rule.transform === "function") {
								if (source === source_) source = _extends({}, source);
								value = source[z] = rule.transform(value);
							}
							if (typeof rule === "function") rule = { validator: rule };
							else rule = _extends({}, rule);
							rule.validator = _this2.getValidationMethod(rule);
							if (!rule.validator) return;
							rule.field = z;
							rule.fullField = rule.fullField || z;
							rule.type = _this2.getType(rule);
							series[z] = series[z] || [];
							series[z].push({
								rule,
								value,
								source,
								field: z
							});
						});
					});
					var errorFields = {};
					return asyncMap(series, options, function(data, doIt) {
						var rule = data.rule;
						var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
						deep = deep && (rule.required || !rule.required && data.value);
						rule.field = data.field;
						function addFullField(key, schema) {
							return _extends({}, schema, {
								fullField: rule.fullField + "." + key,
								fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
							});
						}
						function cb(e) {
							if (e === void 0) e = [];
							var errorList = Array.isArray(e) ? e : [e];
							if (!options.suppressWarning && errorList.length) Schema.warning("async-validator:", errorList);
							if (errorList.length && rule.message !== void 0) errorList = [].concat(rule.message);
							var filledErrors = errorList.map(complementError(rule, source));
							if (options.first && filledErrors.length) {
								errorFields[rule.field] = 1;
								return doIt(filledErrors);
							}
							if (!deep) doIt(filledErrors);
							else {
								if (rule.required && !data.value) {
									if (rule.message !== void 0) filledErrors = [].concat(rule.message).map(complementError(rule, source));
									else if (options.error) filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
									return doIt(filledErrors);
								}
								var fieldsSchema = {};
								if (rule.defaultField) Object.keys(data.value).map(function(key) {
									fieldsSchema[key] = rule.defaultField;
								});
								fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
								var paredFieldsSchema = {};
								Object.keys(fieldsSchema).forEach(function(field) {
									var fieldSchema = fieldsSchema[field];
									paredFieldsSchema[field] = (Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema]).map(addFullField.bind(null, field));
								});
								var schema = new Schema(paredFieldsSchema);
								schema.messages(options.messages);
								if (data.rule.options) {
									data.rule.options.messages = options.messages;
									data.rule.options.error = options.error;
								}
								schema.validate(data.value, data.rule.options || options, function(errs) {
									var finalErrors = [];
									if (filledErrors && filledErrors.length) finalErrors.push.apply(finalErrors, filledErrors);
									if (errs && errs.length) finalErrors.push.apply(finalErrors, errs);
									doIt(finalErrors.length ? finalErrors : null);
								});
							}
						}
						var res;
						if (rule.asyncValidator) res = rule.asyncValidator(rule, data.value, cb, data.source, options);
						else if (rule.validator) {
							try {
								res = rule.validator(rule, data.value, cb, data.source, options);
							} catch (error) {
								console.error == null || console.error(error);
								if (!options.suppressValidatorError) setTimeout(function() {
									throw error;
								}, 0);
								cb(error.message);
							}
							if (res === true) cb();
							else if (res === false) cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
							else if (res instanceof Array) cb(res);
							else if (res instanceof Error) cb(res.message);
						}
						if (res && res.then) res.then(function() {
							return cb();
						}, function(e) {
							return cb(e);
						});
					}, function(results) {
						complete(results);
					}, source);
				};
				_proto.getType = function getType(rule) {
					if (rule.type === void 0 && rule.pattern instanceof RegExp) rule.type = "pattern";
					if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) throw new Error(format("Unknown rule type %s", rule.type));
					return rule.type || "string";
				};
				_proto.getValidationMethod = function getValidationMethod(rule) {
					if (typeof rule.validator === "function") return rule.validator;
					var keys = Object.keys(rule);
					var messageIndex = keys.indexOf("message");
					if (messageIndex !== -1) keys.splice(messageIndex, 1);
					if (keys.length === 1 && keys[0] === "required") return validators.required;
					return validators[this.getType(rule)] || void 0;
				};
				return Schema;
			}();
			Schema.register = function register(type, validator) {
				if (typeof validator !== "function") throw new Error("Cannot register a validator by type, validator is not a function");
				validators[type] = validator;
			};
			Schema.warning = warning;
			Schema.messages = messages;
			Schema.validators = validators;
		}));
		var _hoisted_1$18;
		var form_item_vue_vue_type_script_setup_true_lang_default;
		var init_form_item_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_types();
			init_objects();
			init_style$1();
			init_arrays();
			init_use_namespace();
			init_use_id();
			init_constants$5();
			init_use_form_common_props();
			init_form_item();
			init_form_label_wrap();
			init_dist$2();
			init_import();
			init_vue_runtime_esm_bundler();
			init_dist_web();
			_hoisted_1$18 = ["role", "aria-labelledby"];
			form_item_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElFormItem",
				__name: "form-item",
				props: formItemProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const slots = useSlots();
					const formContext = inject(formContextKey, void 0);
					const parentFormItemContext = inject(formItemContextKey, void 0);
					const _size = useFormSize(void 0, { formItem: false });
					const ns = useNamespace("form-item");
					const labelId = useId().value;
					const inputIds = ref([]);
					const validateState = ref("");
					const validateStateDebounced = refDebounced(validateState, 100);
					const validateMessage = ref("");
					const formItemRef = ref();
					let initialValue = void 0;
					let isResettingField = false;
					const labelPosition = computed(() => props.labelPosition || formContext?.labelPosition);
					const labelStyle = computed(() => {
						if (labelPosition.value === "top") return {};
						return { width: addUnit(props.labelWidth ?? formContext?.labelWidth) };
					});
					const contentStyle = computed(() => {
						if (labelPosition.value === "top" || formContext?.inline) return {};
						if (!props.label && !props.labelWidth && isNested) return {};
						const labelWidth = addUnit(props.labelWidth ?? formContext?.labelWidth);
						if (!props.label && !slots.label) return { marginLeft: labelWidth };
						return {};
					});
					const formItemClasses = computed(() => [
						ns.b(),
						ns.m(_size.value),
						ns.is("error", validateState.value === "error"),
						ns.is("validating", validateState.value === "validating"),
						ns.is("success", validateState.value === "success"),
						ns.is("required", isRequired.value || props.required),
						ns.is("no-asterisk", formContext?.hideRequiredAsterisk),
						formContext?.requireAsteriskPosition === "right" ? "asterisk-right" : "asterisk-left",
						{
							[ns.m("feedback")]: formContext?.statusIcon,
							[ns.m(`label-${labelPosition.value}`)]: labelPosition.value
						}
					]);
					const _inlineMessage = computed(() => isBoolean(props.inlineMessage) ? props.inlineMessage : formContext?.inlineMessage || false);
					const validateClasses = computed(() => [ns.e("error"), { [ns.em("error", "inline")]: _inlineMessage.value }]);
					const propString = computed(() => {
						if (!props.prop) return "";
						return isArray$1(props.prop) ? props.prop.join(".") : props.prop;
					});
					const hasLabel = computed(() => {
						return !!(props.label || slots.label);
					});
					const labelFor = computed(() => {
						return props.for ?? (inputIds.value.length === 1 ? inputIds.value[0] : void 0);
					});
					const isGroup = computed(() => {
						return !labelFor.value && hasLabel.value;
					});
					const isNested = !!parentFormItemContext;
					const fieldValue = computed(() => {
						const model = formContext?.model;
						if (!model || !props.prop) return;
						return getProp(model, props.prop).value;
					});
					const normalizedRules = computed(() => {
						const { required } = props;
						const rules = [];
						if (props.rules) rules.push(...castArray$1(props.rules));
						const formRules = formContext?.rules;
						if (formRules && props.prop) {
							const _rules = getProp(formRules, props.prop).value;
							if (_rules) rules.push(...castArray$1(_rules));
						}
						if (required !== void 0) {
							const requiredRules = rules.map((rule, i) => [rule, i]).filter(([rule]) => "required" in rule);
							if (requiredRules.length > 0) for (const [rule, i] of requiredRules) {
								if (rule.required === required) continue;
								rules[i] = {
									...rule,
									required
								};
							}
							else rules.push({ required });
						}
						return rules;
					});
					const validateEnabled = computed(() => normalizedRules.value.length > 0);
					const getFilteredRule = (trigger) => {
						return normalizedRules.value.filter((rule) => {
							if (!rule.trigger || !trigger) return true;
							if (isArray$1(rule.trigger)) return rule.trigger.includes(trigger);
							else return rule.trigger === trigger;
						}).map(({ trigger, ...rule }) => rule);
					};
					const isRequired = computed(() => normalizedRules.value.some((rule) => rule.required));
					const shouldShowError = computed(() => validateStateDebounced.value === "error" && props.showMessage && (formContext?.showMessage ?? true));
					const currentLabel = computed(() => `${props.label || ""}${formContext?.labelSuffix || ""}`);
					const setValidationState = (state) => {
						validateState.value = state;
					};
					const onValidationFailed = (error) => {
						const { errors, fields } = error;
						if (!errors || !fields) console.error(error);
						setValidationState("error");
						validateMessage.value = errors ? errors?.[0]?.message ?? `${props.prop} is required` : "";
						formContext?.emit("validate", props.prop, false, validateMessage.value);
					};
					const onValidationSucceeded = () => {
						setValidationState("success");
						formContext?.emit("validate", props.prop, true, "");
					};
					const doValidate = async (rules) => {
						const modelName = propString.value;
						return new Schema({ [modelName]: rules }).validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
							onValidationSucceeded();
							return true;
						}).catch((err) => {
							onValidationFailed(err);
							return Promise.reject(err);
						});
					};
					const validate = async (trigger, callback) => {
						if (isResettingField || !props.prop) return false;
						const hasCallback = isFunction$1(callback);
						if (!validateEnabled.value) {
							callback?.(false);
							return false;
						}
						const rules = getFilteredRule(trigger);
						if (rules.length === 0) {
							callback?.(true);
							return true;
						}
						setValidationState("validating");
						return doValidate(rules).then(() => {
							callback?.(true);
							return true;
						}).catch((err) => {
							const { fields } = err;
							callback?.(false, fields);
							return hasCallback ? false : Promise.reject(fields);
						});
					};
					const clearValidate = () => {
						setValidationState("");
						validateMessage.value = "";
						isResettingField = false;
					};
					const resetField = async () => {
						const model = formContext?.model;
						if (!model || !props.prop) return;
						const computedValue = getProp(model, props.prop);
						isResettingField = true;
						computedValue.value = cloneDeep(initialValue);
						await nextTick();
						clearValidate();
						isResettingField = false;
					};
					const addInputId = (id) => {
						if (!inputIds.value.includes(id)) inputIds.value.push(id);
					};
					const removeInputId = (id) => {
						inputIds.value = inputIds.value.filter((listId) => listId !== id);
					};
					const setInitialValue = (value) => {
						initialValue = cloneDeep(value);
					};
					const getInitialValue = () => initialValue;
					watch(() => props.error, (val) => {
						validateMessage.value = val || "";
						setValidationState(val ? "error" : "");
					}, { immediate: true });
					watch(() => props.validateStatus, (val) => setValidationState(val || ""));
					const context = reactive({
						...toRefs(props),
						$el: formItemRef,
						size: _size,
						validateMessage,
						validateState,
						labelId,
						inputIds,
						isGroup,
						hasLabel,
						fieldValue,
						addInputId,
						removeInputId,
						resetField,
						clearValidate,
						validate,
						propString,
						setInitialValue,
						getInitialValue
					});
					provide(formItemContextKey, context);
					watch(propString, (newPropString, oldPropString) => {
						if (!formContext || !oldPropString) return;
						formContext.removeField(context, oldPropString);
						if (newPropString) {
							setInitialValue(fieldValue.value);
							formContext.addField(context);
						}
					});
					onMounted(() => {
						if (props.prop) {
							setInitialValue(fieldValue.value);
							formContext?.addField(context);
						}
					});
					onBeforeUnmount(() => {
						formContext?.removeField(context);
					});
					__expose({
						size: _size,
						validateMessage,
						validateState,
						validate,
						clearValidate,
						resetField,
						setInitialValue
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							ref_key: "formItemRef",
							ref: formItemRef,
							class: normalizeClass(formItemClasses.value),
							role: isGroup.value ? "group" : void 0,
							"aria-labelledby": isGroup.value ? unref(labelId) : void 0
						}, [createVNode(unref(form_label_wrap_default), {
							"is-auto-width": labelStyle.value.width === "auto",
							"update-all": unref(formContext)?.labelWidth === "auto"
						}, {
							default: withCtx(() => [!!(__props.label || _ctx.$slots.label) ? (openBlock(), createBlock(resolveDynamicComponent(labelFor.value ? "label" : "div"), {
								key: 0,
								id: unref(labelId),
								for: labelFor.value,
								class: normalizeClass(unref(ns).e("label")),
								style: normalizeStyle(labelStyle.value)
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "label", { label: currentLabel.value }, () => [createTextVNode(toDisplayString(currentLabel.value), 1)])]),
								_: 3
							}, 8, [
								"id",
								"for",
								"class",
								"style"
							])) : createCommentVNode("v-if", true)]),
							_: 3
						}, 8, ["is-auto-width", "update-all"]), createBaseVNode("div", {
							class: normalizeClass(unref(ns).e("content")),
							style: normalizeStyle(contentStyle.value)
						}, [renderSlot(_ctx.$slots, "default"), createVNode(TransitionGroup, { name: `${unref(ns).namespace.value}-zoom-in-top` }, {
							default: withCtx(() => [shouldShowError.value ? renderSlot(_ctx.$slots, "error", {
								key: 0,
								error: validateMessage.value
							}, () => [createBaseVNode("div", {
								class: normalizeClass(validateClasses.value),
								role: "alert"
							}, toDisplayString(validateMessage.value), 3)]) : createCommentVNode("v-if", true)]),
							_: 3
						}, 8, ["name"])], 6)], 10, _hoisted_1$18);
					};
				}
			});
		}));
		var form_item_default;
		var init_form_item2 = __esmMin((() => {
			init_form_item_vue_vue_type_script_setup_true_lang();
			form_item_default = form_item_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElForm;
		var ElFormItem;
		var init_form = __esmMin((() => {
			init_install();
			init_form2();
			init_form_item2();
			ElForm = withInstall(form_default, { FormItem: form_item_default });
			ElFormItem = withNoopInstall(form_item_default);
		}));
		var FOCUS_AFTER_TRAPPED;
		var FOCUS_AFTER_RELEASED;
		var FOCUSOUT_PREVENTED;
		var FOCUS_AFTER_TRAPPED_OPTS;
		var FOCUSOUT_PREVENTED_OPTS;
		var ON_TRAP_FOCUS_EVT;
		var ON_RELEASE_FOCUS_EVT;
		var FOCUS_TRAP_INJECTION_KEY;
		var init_tokens = __esmMin((() => {
			FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
			FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
			FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
			FOCUS_AFTER_TRAPPED_OPTS = {
				cancelable: true,
				bubbles: false
			};
			FOCUSOUT_PREVENTED_OPTS = {
				cancelable: true,
				bubbles: false
			};
			ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
			ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
			FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
		}));
		function removeFromStack(list, item) {
			const copy = [...list];
			const idx = list.indexOf(item);
			if (idx !== -1) copy.splice(idx, 1);
			return copy;
		}
		var focusReason;
		var lastUserFocusTimestamp;
		var lastAutomatedFocusTimestamp;
		var focusReasonUserCount;
		var obtainAllFocusableElements;
		var getVisibleElement;
		var isHidden;
		var getEdges;
		var isSelectable;
		var tryFocus;
		var createFocusableStack;
		var focusFirstDescendant;
		var focusableStack;
		var isFocusCausedByUserEvent;
		var notifyFocusReasonPointer;
		var notifyFocusReasonKeydown;
		var useFocusReason;
		var createFocusOutPreventedEvent;
		var init_utils$3 = __esmMin((() => {
			init_aria();
			init_tokens();
			init_vue_runtime_esm_bundler();
			focusReason = ref();
			lastUserFocusTimestamp = ref(0);
			lastAutomatedFocusTimestamp = ref(0);
			focusReasonUserCount = 0;
			obtainAllFocusableElements = (element) => {
				const nodes = [];
				const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
					const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
					if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
					return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
				} });
				while (walker.nextNode()) nodes.push(walker.currentNode);
				return nodes;
			};
			getVisibleElement = (elements, container) => {
				for (const element of elements) if (!isHidden(element, container)) return element;
			};
			isHidden = (element, container) => {
				if (getComputedStyle(element).visibility === "hidden") return true;
				while (element) {
					if (container && element === container) return false;
					if (getComputedStyle(element).display === "none") return true;
					element = element.parentElement;
				}
				return false;
			};
			getEdges = (container) => {
				const focusable = obtainAllFocusableElements(container);
				return [getVisibleElement(focusable, container), getVisibleElement(focusable.reverse(), container)];
			};
			isSelectable = (element) => {
				return element instanceof HTMLInputElement && "select" in element;
			};
			tryFocus = (element, shouldSelect) => {
				if (element) {
					const prevFocusedElement = document.activeElement;
					focusElement(element, { preventScroll: true });
					lastAutomatedFocusTimestamp.value = window.performance.now();
					if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) element.select();
				}
			};
			createFocusableStack = () => {
				let stack = [];
				const push = (layer) => {
					const currentLayer = stack[0];
					if (currentLayer && layer !== currentLayer) currentLayer.pause();
					stack = removeFromStack(stack, layer);
					stack.unshift(layer);
				};
				const remove = (layer) => {
					stack = removeFromStack(stack, layer);
					stack[0]?.resume?.();
				};
				return {
					push,
					remove
				};
			};
			focusFirstDescendant = (elements, shouldSelect = false) => {
				const prevFocusedElement = document.activeElement;
				for (const element of elements) {
					tryFocus(element, shouldSelect);
					if (document.activeElement !== prevFocusedElement) return;
				}
			};
			focusableStack = createFocusableStack();
			isFocusCausedByUserEvent = () => {
				return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
			};
			notifyFocusReasonPointer = () => {
				focusReason.value = "pointer";
				lastUserFocusTimestamp.value = window.performance.now();
			};
			notifyFocusReasonKeydown = () => {
				focusReason.value = "keyboard";
				lastUserFocusTimestamp.value = window.performance.now();
			};
			useFocusReason = () => {
				onMounted(() => {
					if (focusReasonUserCount === 0) {
						document.addEventListener("mousedown", notifyFocusReasonPointer);
						document.addEventListener("touchstart", notifyFocusReasonPointer);
						document.addEventListener("keydown", notifyFocusReasonKeydown);
					}
					focusReasonUserCount++;
				});
				onBeforeUnmount(() => {
					focusReasonUserCount--;
					if (focusReasonUserCount <= 0) {
						document.removeEventListener("mousedown", notifyFocusReasonPointer);
						document.removeEventListener("touchstart", notifyFocusReasonPointer);
						document.removeEventListener("keydown", notifyFocusReasonKeydown);
					}
				});
				return {
					focusReason,
					lastUserFocusTimestamp,
					lastAutomatedFocusTimestamp
				};
			};
			createFocusOutPreventedEvent = (detail) => {
				return new CustomEvent(FOCUSOUT_PREVENTED, {
					...FOCUSOUT_PREVENTED_OPTS,
					detail
				});
			};
		}));
		var focus_trap_vue_vue_type_script_lang_default;
		var init_focus_trap_vue_vue_type_script_lang = __esmMin((() => {
			init_aria$1();
			init_event();
			init_types();
			init_use_escape_keydown();
			init_tokens();
			init_utils$3();
			init_import();
			init_vue_runtime_esm_bundler();
			focus_trap_vue_vue_type_script_lang_default = defineComponent({
				name: "ElFocusTrap",
				inheritAttrs: false,
				props: {
					loop: Boolean,
					trapped: Boolean,
					focusTrapEl: Object,
					focusStartEl: {
						type: [Object, String],
						default: "first"
					}
				},
				emits: [
					ON_TRAP_FOCUS_EVT,
					ON_RELEASE_FOCUS_EVT,
					"focusin",
					"focusout",
					"focusout-prevented",
					"release-requested"
				],
				setup(props, { emit }) {
					const forwardRef = ref();
					let lastFocusBeforeTrapped;
					let lastFocusAfterTrapped;
					const { focusReason } = useFocusReason();
					useEscapeKeydown((event) => {
						if (props.trapped && !focusLayer.paused) emit("release-requested", event);
					});
					const focusLayer = {
						paused: false,
						pause() {
							this.paused = true;
						},
						resume() {
							this.paused = false;
						}
					};
					const onKeydown = (e) => {
						if (!props.loop && !props.trapped) return;
						if (focusLayer.paused) return;
						const { altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
						const { loop } = props;
						const isTabbing = getEventCode(e) === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
						const currentFocusingEl = document.activeElement;
						if (isTabbing && currentFocusingEl) {
							const container = currentTarget;
							const [first, last] = getEdges(container);
							if (!(first && last)) {
								if (currentFocusingEl === container) {
									const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
									emit("focusout-prevented", focusoutPreventedEvent);
									if (!focusoutPreventedEvent.defaultPrevented) e.preventDefault();
								}
							} else if (!shiftKey && currentFocusingEl === last) {
								const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
								emit("focusout-prevented", focusoutPreventedEvent);
								if (!focusoutPreventedEvent.defaultPrevented) {
									e.preventDefault();
									if (loop) tryFocus(first, true);
								}
							} else if (shiftKey && [first, container].includes(currentFocusingEl)) {
								const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
								emit("focusout-prevented", focusoutPreventedEvent);
								if (!focusoutPreventedEvent.defaultPrevented) {
									e.preventDefault();
									if (loop) tryFocus(last, true);
								}
							}
						}
					};
					provide(FOCUS_TRAP_INJECTION_KEY, {
						focusTrapRef: forwardRef,
						onKeydown
					});
					watch(() => props.focusTrapEl, (focusTrapEl) => {
						if (focusTrapEl) forwardRef.value = focusTrapEl;
					}, { immediate: true });
					watch([forwardRef], ([forwardRef], [oldForwardRef]) => {
						if (forwardRef) {
							forwardRef.addEventListener("keydown", onKeydown);
							forwardRef.addEventListener("focusin", onFocusIn);
							forwardRef.addEventListener("focusout", onFocusOut);
						}
						if (oldForwardRef) {
							oldForwardRef.removeEventListener("keydown", onKeydown);
							oldForwardRef.removeEventListener("focusin", onFocusIn);
							oldForwardRef.removeEventListener("focusout", onFocusOut);
						}
					});
					const trapOnFocus = (e) => {
						emit(ON_TRAP_FOCUS_EVT, e);
					};
					const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
					const onFocusIn = (e) => {
						const trapContainer = unref(forwardRef);
						if (!trapContainer) return;
						const target = e.target;
						const relatedTarget = e.relatedTarget;
						const isFocusedInTrap = target && trapContainer.contains(target);
						if (!props.trapped) {
							if (!(relatedTarget && trapContainer.contains(relatedTarget))) lastFocusBeforeTrapped = relatedTarget;
						}
						if (isFocusedInTrap) emit("focusin", e);
						if (focusLayer.paused) return;
						if (props.trapped) {
							if (isFocusedInTrap) lastFocusAfterTrapped = target;
							else tryFocus(lastFocusAfterTrapped, true);
						}
					};
					const onFocusOut = (e) => {
						const trapContainer = unref(forwardRef);
						if (focusLayer.paused || !trapContainer) return;
						if (props.trapped) {
							const relatedTarget = e.relatedTarget;
							if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) setTimeout(() => {
								if (!focusLayer.paused && props.trapped) {
									const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
									emit("focusout-prevented", focusoutPreventedEvent);
									if (!focusoutPreventedEvent.defaultPrevented) tryFocus(lastFocusAfterTrapped, true);
								}
							}, 0);
						} else {
							const target = e.target;
							if (!(target && trapContainer.contains(target))) emit("focusout", e);
						}
					};
					async function startTrap() {
						await nextTick();
						const trapContainer = unref(forwardRef);
						if (trapContainer) {
							focusableStack.push(focusLayer);
							const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
							lastFocusBeforeTrapped = prevFocusedElement;
							if (!trapContainer.contains(prevFocusedElement)) {
								const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
								trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
								trapContainer.dispatchEvent(focusEvent);
								if (!focusEvent.defaultPrevented) nextTick(() => {
									let focusStartEl = props.focusStartEl;
									if (!isString(focusStartEl)) {
										tryFocus(focusStartEl);
										if (document.activeElement !== focusStartEl) focusStartEl = "first";
									}
									if (focusStartEl === "first") focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
									if (document.activeElement === prevFocusedElement || focusStartEl === "container") tryFocus(trapContainer);
								});
							}
						}
					}
					function stopTrap() {
						const trapContainer = unref(forwardRef);
						if (trapContainer) {
							trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
							const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
								...FOCUS_AFTER_TRAPPED_OPTS,
								detail: { focusReason: focusReason.value }
							});
							trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
							trapContainer.dispatchEvent(releasedEvent);
							if (!releasedEvent.defaultPrevented && (focusReason.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) tryFocus(lastFocusBeforeTrapped ?? document.body);
							trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
							focusableStack.remove(focusLayer);
							lastFocusBeforeTrapped = null;
							lastFocusAfterTrapped = null;
						}
					}
					onMounted(() => {
						if (props.trapped) startTrap();
						watch(() => props.trapped, (trapped) => {
							if (trapped) startTrap();
							else stopTrap();
						});
					});
					onBeforeUnmount(() => {
						if (props.trapped) stopTrap();
						if (forwardRef.value) {
							forwardRef.value.removeEventListener("keydown", onKeydown);
							forwardRef.value.removeEventListener("focusin", onFocusIn);
							forwardRef.value.removeEventListener("focusout", onFocusOut);
							forwardRef.value = void 0;
						}
						lastFocusBeforeTrapped = null;
						lastFocusAfterTrapped = null;
					});
					return { onKeydown };
				}
			});
		}));
		var _plugin_vue_export_helper_default;
		var init__plugin_vue_export_helper = __esmMin((() => {
			_plugin_vue_export_helper_default = (sfc, props) => {
				const target = sfc.__vccOpts || sfc;
				for (const [key, val] of props) target[key] = val;
				return target;
			};
		}));
		function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
			return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
		}
		var focus_trap_default;
		var init_focus_trap$1 = __esmMin((() => {
			init_focus_trap_vue_vue_type_script_lang();
			init__plugin_vue_export_helper();
			init_vue_runtime_esm_bundler();
			focus_trap_default = _plugin_vue_export_helper_default(focus_trap_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
		}));
		var focus_trap_default$1;
		var init_focus_trap = __esmMin((() => {
			init_focus_trap$1();
			focus_trap_default$1 = focus_trap_default;
		}));
		function genModifiers(options) {
			const { offset, gpuAcceleration, fallbackPlacements } = options;
			return [
				{
					name: "offset",
					options: { offset: [0, offset ?? 12] }
				},
				{
					name: "preventOverflow",
					options: { padding: {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0
					} }
				},
				{
					name: "flip",
					options: {
						padding: 5,
						fallbackPlacements
					}
				},
				{
					name: "computeStyles",
					options: { gpuAcceleration }
				}
			];
		}
		function deriveExtraModifiers(options, modifiers) {
			if (modifiers) options.modifiers = [...options.modifiers, ...modifiers ?? []];
		}
		var buildPopperOptions;
		var unwrapMeasurableEl;
		var init_utils$2 = __esmMin((() => {
			init_browser();
			init_dist$2();
			buildPopperOptions = (props, modifiers = []) => {
				const { placement, strategy, popperOptions } = props;
				const options = {
					placement,
					strategy,
					...popperOptions,
					modifiers: [...genModifiers(props), ...modifiers]
				};
				deriveExtraModifiers(options, popperOptions?.modifiers);
				return options;
			};
			unwrapMeasurableEl = ($el) => {
				if (!isClient) return;
				return unrefElement($el);
			};
		}));
		var DEFAULT_ARROW_OFFSET;
		var usePopperContent;
		var init_use_content = __esmMin((() => {
			init_use_popper();
			init_constants$6();
			init_utils$2();
			init_dist$2();
			init_import();
			init_vue_runtime_esm_bundler();
			DEFAULT_ARROW_OFFSET = 0;
			usePopperContent = (props) => {
				const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
				const arrowRef = ref();
				const arrowOffset = computed(() => props.arrowOffset);
				const eventListenerModifier = computed(() => {
					return {
						name: "eventListeners",
						enabled: !!props.visible
					};
				});
				const arrowModifier = computed(() => {
					const arrowEl = unref(arrowRef);
					const offset = unref(arrowOffset) ?? DEFAULT_ARROW_OFFSET;
					return {
						name: "arrow",
						enabled: !isUndefined$1(arrowEl),
						options: {
							element: arrowEl,
							padding: offset
						}
					};
				});
				const options = computed(() => {
					return {
						onFirstUpdate: () => {
							update();
						},
						...buildPopperOptions(props, [unref(arrowModifier), unref(eventListenerModifier)])
					};
				});
				const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
				const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
				watch(instanceRef, (instance) => popperInstanceRef.value = instance, { flush: "sync" });
				onMounted(() => {
					watch(() => unref(computedReference)?.getBoundingClientRect?.(), () => {
						update();
					});
				});
				let stopResizeObserver;
				watch(() => props.visible, (visible) => {
					stopResizeObserver?.();
					stopResizeObserver = void 0;
					if (visible) stopResizeObserver = useResizeObserver(contentRef, update).stop;
				});
				onBeforeUnmount(() => {
					popperInstanceRef.value = void 0;
					stopResizeObserver?.();
					stopResizeObserver = void 0;
				});
				return {
					attributes,
					arrowRef,
					contentRef,
					instanceRef,
					state,
					styles,
					role,
					forceUpdate,
					update
				};
			};
		}));
		var usePopperContentDOM;
		var init_use_content_dom = __esmMin((() => {
			init_types();
			init_use_namespace();
			init_use_z_index();
			init_vue_runtime_esm_bundler();
			usePopperContentDOM = (props, { attributes, styles, role }) => {
				const { nextZIndex } = useZIndex();
				const ns = useNamespace("popper");
				const contentAttrs = computed(() => unref(attributes).popper);
				const contentZIndex = ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
				const contentClass = computed(() => [
					ns.b(),
					ns.is("pure", props.pure),
					ns.is(props.effect),
					props.popperClass
				]);
				const contentStyle = computed(() => {
					return [
						{ zIndex: unref(contentZIndex) },
						unref(styles).popper,
						props.popperStyle || {}
					];
				});
				const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
				const arrowStyle = computed(() => unref(styles).arrow || {});
				const updateZIndex = () => {
					contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
				};
				return {
					ariaModal,
					arrowStyle,
					contentAttrs,
					contentClass,
					contentStyle,
					contentZIndex,
					updateZIndex
				};
			};
		}));
		var usePopperContentFocusTrap;
		var init_use_focus_trap = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			usePopperContentFocusTrap = (props, emit) => {
				const trapped = ref(false);
				const focusStartRef = ref();
				const onFocusAfterTrapped = () => {
					emit("focus");
				};
				const onFocusAfterReleased = (event) => {
					if (event.detail?.focusReason !== "pointer") {
						focusStartRef.value = "first";
						emit("blur");
					}
				};
				const onFocusInTrap = (event) => {
					if (props.visible && !trapped.value) {
						if (event.target) focusStartRef.value = event.target;
						trapped.value = true;
					}
				};
				const onFocusoutPrevented = (event) => {
					if (!props.trapping) {
						if (event.detail.focusReason === "pointer") event.preventDefault();
						trapped.value = false;
					}
				};
				const onReleaseRequested = () => {
					trapped.value = false;
					emit("close");
				};
				onBeforeUnmount(() => {
					focusStartRef.value = void 0;
				});
				return {
					focusStartRef,
					trapped,
					onFocusAfterReleased,
					onFocusAfterTrapped,
					onFocusInTrap,
					onFocusoutPrevented,
					onReleaseRequested
				};
			};
		}));
		var content_vue_vue_type_script_setup_true_lang_default$1;
		var init_content_vue_vue_type_script_setup_true_lang$1 = __esmMin((() => {
			init_types();
			init_functions();
			init_constants$6();
			init_content$1();
			init_focus_trap();
			init_constants$5();
			init_use_content();
			init_use_content_dom();
			init_use_focus_trap();
			init_import();
			init_vue_runtime_esm_bundler();
			content_vue_vue_type_script_setup_true_lang_default$1 = defineComponent({
				name: "ElPopperContent",
				__name: "content",
				props: popperContentProps,
				emits: popperContentEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const emit = __emit;
					const props = __props;
					const { focusStartRef, trapped, onFocusAfterReleased, onFocusAfterTrapped, onFocusInTrap, onFocusoutPrevented, onReleaseRequested } = usePopperContentFocusTrap(props, emit);
					const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
					const { ariaModal, arrowStyle, contentAttrs, contentClass, contentStyle, updateZIndex } = usePopperContentDOM(props, {
						styles,
						attributes,
						role
					});
					const formItemContext = inject(formItemContextKey, void 0);
					provide(POPPER_CONTENT_INJECTION_KEY, {
						arrowStyle,
						arrowRef
					});
					if (formItemContext) provide(formItemContextKey, {
						...formItemContext,
						addInputId: NOOP,
						removeInputId: NOOP
					});
					let triggerTargetAriaStopWatch = void 0;
					const updatePopper = (shouldUpdateZIndex = true) => {
						update();
						shouldUpdateZIndex && updateZIndex();
					};
					const togglePopperAlive = () => {
						updatePopper(false);
						if (props.visible && props.focusOnShow) trapped.value = true;
						else if (props.visible === false) trapped.value = false;
					};
					onMounted(() => {
						watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
							triggerTargetAriaStopWatch?.();
							triggerTargetAriaStopWatch = void 0;
							const el = unref(triggerTargetEl || contentRef.value);
							const prevEl = unref(prevTriggerTargetEl || contentRef.value);
							if (isElement(el)) triggerTargetAriaStopWatch = watch([
								role,
								() => props.ariaLabel,
								ariaModal,
								() => props.id
							], (watches) => {
								[
									"role",
									"aria-label",
									"aria-modal",
									"id"
								].forEach((key, idx) => {
									isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
								});
							}, { immediate: true });
							if (prevEl !== el && isElement(prevEl)) [
								"role",
								"aria-label",
								"aria-modal",
								"id"
							].forEach((key) => {
								prevEl.removeAttribute(key);
							});
						}, { immediate: true });
						watch(() => props.visible, togglePopperAlive, { immediate: true });
					});
					onBeforeUnmount(() => {
						triggerTargetAriaStopWatch?.();
						triggerTargetAriaStopWatch = void 0;
						contentRef.value = void 0;
					});
					__expose({
						popperContentRef: contentRef,
						popperInstanceRef: instanceRef,
						updatePopper,
						contentStyle
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", mergeProps({
							ref_key: "contentRef",
							ref: contentRef
						}, unref(contentAttrs), {
							style: unref(contentStyle),
							class: unref(contentClass),
							tabindex: "-1",
							onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
							onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
						}), [createVNode(unref(focus_trap_default$1), {
							loop: __props.loop,
							trapped: unref(trapped),
							"trap-on-focus-in": true,
							"focus-trap-el": unref(contentRef),
							"focus-start-el": unref(focusStartRef),
							onFocusAfterTrapped: unref(onFocusAfterTrapped),
							onFocusAfterReleased: unref(onFocusAfterReleased),
							onFocusin: unref(onFocusInTrap),
							onFocusoutPrevented: unref(onFocusoutPrevented),
							onReleaseRequested: unref(onReleaseRequested)
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 8, [
							"loop",
							"trapped",
							"focus-trap-el",
							"focus-start-el",
							"onFocusAfterTrapped",
							"onFocusAfterReleased",
							"onFocusin",
							"onFocusoutPrevented",
							"onReleaseRequested"
						])], 16);
					};
				}
			});
		}));
		var content_default$1;
		var init_content2$1 = __esmMin((() => {
			init_content_vue_vue_type_script_setup_true_lang$1();
			content_default$1 = content_vue_vue_type_script_setup_true_lang_default$1;
		}));
		var popper_vue_vue_type_script_setup_true_lang_default;
		var init_popper_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_popper$1();
			init_constants$6();
			init_vue_runtime_esm_bundler();
			popper_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElPopper",
				inheritAttrs: false,
				__name: "popper",
				props: popperProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const popperProvides = {
						triggerRef: ref(),
						popperInstanceRef: ref(),
						contentRef: ref(),
						referenceRef: ref(),
						role: computed(() => props.role)
					};
					__expose(popperProvides);
					provide(POPPER_INJECTION_KEY, popperProvides);
					return (_ctx, _cache) => {
						return renderSlot(_ctx.$slots, "default");
					};
				}
			});
		}));
		var popper_default;
		var init_popper2 = __esmMin((() => {
			init_popper_vue_vue_type_script_setup_true_lang();
			popper_default = popper_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElPopper;
		var init_popper = __esmMin((() => {
			init_install();
			init_popper2();
			ElPopper = withInstall(popper_default);
		}));
		var useTooltipContentProps;
		var init_content = __esmMin((() => {
			init_runtime();
			init_use_delayed_toggle();
			init_use_aria();
			init_content$1();
			({
				...useDelayedTogglePropsDefaults,
				...popperContentPropsDefaults
			});
			useTooltipContentProps = buildProps({
				...useDelayedToggleProps,
				...popperContentProps,
				appendTo: { type: definePropType([String, Object]) },
				content: {
					type: String,
					default: ""
				},
				rawContent: Boolean,
				persistent: Boolean,
				visible: {
					type: definePropType(Boolean),
					default: null
				},
				transition: String,
				teleported: {
					type: Boolean,
					default: true
				},
				disabled: Boolean,
				...useAriaProps(["ariaLabel"])
			});
		}));
		var useTooltipTriggerProps;
		var init_trigger = __esmMin((() => {
			init_aria$1();
			init_runtime();
			init_trigger$1();
			useTooltipTriggerProps = buildProps({
				...popperTriggerProps,
				disabled: Boolean,
				trigger: {
					type: definePropType([String, Array]),
					default: "hover"
				},
				triggerKeys: {
					type: definePropType(Array),
					default: () => [
						EVENT_CODE.enter,
						EVENT_CODE.numpadEnter,
						EVENT_CODE.space
					]
				},
				focusOnTarget: Boolean
			});
		}));
		var useTooltipModelToggleProps;
		var useTooltipModelToggleEmits;
		var useTooltipModelToggle;
		var useTooltipProps;
		var tooltipEmits;
		var init_tooltip$1 = __esmMin((() => {
			init_runtime();
			init_use_model_toggle();
			init_popper$1();
			init_arrow();
			init_content();
			init_trigger();
			({useModelToggleProps: useTooltipModelToggleProps, useModelToggleEmits: useTooltipModelToggleEmits, useModelToggle: useTooltipModelToggle} = createModelToggleComposable("visible"));
			useTooltipProps = buildProps({
				...popperProps,
				...useTooltipModelToggleProps,
				...useTooltipContentProps,
				...useTooltipTriggerProps,
				...popperArrowProps,
				showArrow: {
					type: Boolean,
					default: true
				}
			});
			tooltipEmits = [
				...useTooltipModelToggleEmits,
				"before-show",
				"before-hide",
				"show",
				"hide",
				"open",
				"close"
			];
		}));
		var TOOLTIP_INJECTION_KEY;
		var init_constants$4 = __esmMin((() => {
			TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
		}));
		var isTriggerType;
		var whenTrigger;
		var init_utils$1 = __esmMin((() => {
			init_types();
			init_vue_runtime_esm_bundler();
			isTriggerType = (trigger, type) => {
				if (isArray$1(trigger)) return trigger.includes(type);
				return trigger === type;
			};
			whenTrigger = (trigger, type, handler) => {
				return (e) => {
					isTriggerType(unref(trigger), type) && handler(e);
				};
			};
		}));
		var trigger_vue_vue_type_script_setup_true_lang_default;
		var init_trigger_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_aria();
			init_event();
			init_use_namespace();
			init_trigger2$1();
			init_trigger();
			init_constants$4();
			init_utils$1();
			init_vue_runtime_esm_bundler();
			trigger_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElTooltipTrigger",
				__name: "trigger",
				props: useTooltipTriggerProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const ns = useNamespace("tooltip");
					const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
					const triggerRef = ref(null);
					const stopWhenControlledOrDisabled = () => {
						if (unref(controlled) || props.disabled) return true;
					};
					const trigger = toRef(props, "trigger");
					const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", (e) => {
						onOpen(e);
						if (props.focusOnTarget && e.target) nextTick(() => {
							focusElement(e.target, { preventScroll: true });
						});
					}));
					const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
					const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
						if (e.button === 0) onToggle(e);
					}));
					const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
					const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
					const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
						e.preventDefault();
						onToggle(e);
					}));
					const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
						const code = getEventCode(e);
						if (props.triggerKeys.includes(code)) {
							e.preventDefault();
							onToggle(e);
						}
					});
					__expose({ triggerRef });
					return (_ctx, _cache) => {
						return openBlock(), createBlock(unref(trigger_default$1), {
							id: unref(id),
							"virtual-ref": __props.virtualRef,
							open: unref(open),
							"virtual-triggering": __props.virtualTriggering,
							class: normalizeClass(unref(ns).e("trigger")),
							onBlur: unref(onBlur),
							onClick: unref(onClick),
							onContextmenu: unref(onContextMenu),
							onFocus: unref(onFocus),
							onMouseenter: unref(onMouseenter),
							onMouseleave: unref(onMouseleave),
							onKeydown: unref(onKeydown)
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 8, [
							"id",
							"virtual-ref",
							"open",
							"virtual-triggering",
							"class",
							"onBlur",
							"onClick",
							"onContextmenu",
							"onFocus",
							"onMouseenter",
							"onMouseleave",
							"onKeydown"
						]);
					};
				}
			});
		}));
		var trigger_default;
		var init_trigger2 = __esmMin((() => {
			init_trigger_vue_vue_type_script_setup_true_lang();
			trigger_default = trigger_vue_vue_type_script_setup_true_lang_default;
		}));
		var content_vue_vue_type_script_setup_true_lang_default;
		var init_content_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_aria();
			init_event();
			init_arrays();
			init_use_namespace();
			init_use_popper_container();
			init_content2$1();
			init_content();
			init_constants$4();
			init_utils$1();
			init_dist$2();
			init_vue_runtime_esm_bundler();
			content_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElTooltipContent",
				inheritAttrs: false,
				__name: "content",
				props: useTooltipContentProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const { selector } = usePopperContainerId();
					const ns = useNamespace("tooltip");
					const contentRef = ref();
					const popperContentRef = computedEager(() => contentRef.value?.popperContentRef);
					let stopHandle;
					const { controlled, id, open, trigger, onClose, onOpen, onShow, onHide, onBeforeShow, onBeforeHide } = inject(TOOLTIP_INJECTION_KEY, void 0);
					const transitionClass = computed(() => {
						return props.transition || `${ns.namespace.value}-fade-in-linear`;
					});
					const persistentRef = computed(() => {
						return props.persistent;
					});
					onBeforeUnmount(() => {
						stopHandle?.();
					});
					const shouldRender = computed(() => {
						return unref(persistentRef) ? true : unref(open);
					});
					const shouldShow = computed(() => {
						return props.disabled ? false : unref(open);
					});
					const appendTo = computed(() => {
						return props.appendTo || selector.value;
					});
					const contentStyle = computed(() => props.style ?? {});
					const ariaHidden = ref(true);
					const onTransitionLeave = () => {
						onHide();
						isFocusInsideContent() && focusElement(document.body, { preventScroll: true });
						ariaHidden.value = true;
					};
					const stopWhenControlled = () => {
						if (unref(controlled)) return true;
					};
					const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
						if (props.enterable && isTriggerType(unref(trigger), "hover")) onOpen();
					});
					const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
						if (isTriggerType(unref(trigger), "hover")) onClose();
					});
					const onBeforeEnter = () => {
						contentRef.value?.updatePopper?.();
						onBeforeShow?.();
					};
					const onBeforeLeave = () => {
						onBeforeHide?.();
					};
					const onAfterShow = () => {
						onShow();
					};
					const onBlur = () => {
						if (!props.virtualTriggering) onClose();
					};
					const isFocusInsideContent = (event) => {
						const popperContent = contentRef.value?.popperContentRef;
						const activeElement = event?.relatedTarget || document.activeElement;
						return popperContent?.contains(activeElement);
					};
					watch(() => unref(open), (val) => {
						if (!val) stopHandle?.();
						else {
							ariaHidden.value = false;
							stopHandle = onClickOutside(popperContentRef, () => {
								if (unref(controlled)) return;
								if (castArray(unref(trigger)).every((item) => {
									return item !== "hover" && item !== "focus";
								})) onClose();
							}, { detectIframe: true });
						}
					}, { flush: "post" });
					__expose({
						contentRef,
						isFocusInsideContent
					});
					return (_ctx, _cache) => {
						return openBlock(), createBlock(Teleport, {
							disabled: !__props.teleported,
							to: appendTo.value
						}, [shouldRender.value || !ariaHidden.value ? (openBlock(), createBlock(Transition, {
							key: 0,
							name: transitionClass.value,
							appear: !persistentRef.value,
							onAfterLeave: onTransitionLeave,
							onBeforeEnter,
							onAfterEnter: onAfterShow,
							onBeforeLeave,
							persisted: ""
						}, {
							default: withCtx(() => [withDirectives(createVNode(unref(content_default$1), mergeProps({
								id: unref(id),
								ref_key: "contentRef",
								ref: contentRef
							}, _ctx.$attrs, {
								"aria-label": __props.ariaLabel,
								"aria-hidden": ariaHidden.value,
								"boundaries-padding": __props.boundariesPadding,
								"fallback-placements": __props.fallbackPlacements,
								"gpu-acceleration": __props.gpuAcceleration,
								offset: __props.offset,
								placement: __props.placement,
								"popper-options": __props.popperOptions,
								"arrow-offset": __props.arrowOffset,
								strategy: __props.strategy,
								effect: __props.effect,
								enterable: __props.enterable,
								pure: __props.pure,
								"popper-class": __props.popperClass,
								"popper-style": [__props.popperStyle, contentStyle.value],
								"reference-el": __props.referenceEl,
								"trigger-target-el": __props.triggerTargetEl,
								visible: shouldShow.value,
								"z-index": __props.zIndex,
								loop: __props.loop,
								onMouseenter: unref(onContentEnter),
								onMouseleave: unref(onContentLeave),
								onBlur,
								onClose: unref(onClose)
							}), {
								default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
								_: 3
							}, 16, [
								"id",
								"aria-label",
								"aria-hidden",
								"boundaries-padding",
								"fallback-placements",
								"gpu-acceleration",
								"offset",
								"placement",
								"popper-options",
								"arrow-offset",
								"strategy",
								"effect",
								"enterable",
								"pure",
								"popper-class",
								"popper-style",
								"reference-el",
								"trigger-target-el",
								"visible",
								"z-index",
								"loop",
								"onMouseenter",
								"onMouseleave",
								"onClose"
							]), [[vShow, shouldShow.value]])]),
							_: 3
						}, 8, ["name", "appear"])) : createCommentVNode("v-if", true)], 8, ["disabled", "to"]);
					};
				}
			});
		}));
		var content_default;
		var init_content2 = __esmMin((() => {
			init_content_vue_vue_type_script_setup_true_lang();
			content_default = content_vue_vue_type_script_setup_true_lang_default;
		}));
		var _hoisted_1$17;
		var _hoisted_2$9;
		var tooltip_vue_vue_type_script_setup_true_lang_default;
		var init_tooltip_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_types();
			init_use_namespace();
			init_use_id();
			init_use_popper_container();
			init_use_delayed_toggle();
			init_arrow2();
			init_popper();
			init_tooltip$1();
			init_constants$4();
			init_trigger2();
			init_content2();
			init_vue_runtime_esm_bundler();
			_hoisted_1$17 = ["innerHTML"];
			_hoisted_2$9 = { key: 1 };
			tooltip_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElTooltip",
				__name: "tooltip",
				props: useTooltipProps,
				emits: tooltipEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					usePopperContainer();
					const ns = useNamespace("tooltip");
					const id = useId();
					const popperRef = ref();
					const contentRef = ref();
					const updatePopper = () => {
						const popperComponent = unref(popperRef);
						if (popperComponent) popperComponent.popperInstanceRef?.update();
					};
					const open = ref(false);
					const toggleReason = ref();
					const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
						indicator: open,
						toggleReason
					});
					const { onOpen, onClose } = useDelayedToggle({
						showAfter: toRef(props, "showAfter"),
						hideAfter: toRef(props, "hideAfter"),
						autoClose: toRef(props, "autoClose"),
						open: show,
						close: hide
					});
					const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
					const kls = computed(() => {
						return [ns.b(), props.popperClass];
					});
					provide(TOOLTIP_INJECTION_KEY, {
						controlled,
						id,
						open: readonly(open),
						trigger: toRef(props, "trigger"),
						onOpen,
						onClose,
						onToggle: (event) => {
							if (unref(open)) onClose(event);
							else onOpen(event);
						},
						onShow: () => {
							emit("show", toggleReason.value);
						},
						onHide: () => {
							emit("hide", toggleReason.value);
						},
						onBeforeShow: () => {
							emit("before-show", toggleReason.value);
						},
						onBeforeHide: () => {
							emit("before-hide", toggleReason.value);
						},
						updatePopper
					});
					watch(() => props.disabled, (disabled) => {
						if (disabled && open.value) open.value = false;
						if (!disabled && isBoolean(props.visible)) open.value = props.visible;
					});
					const isFocusInsideContent = (event) => {
						return contentRef.value?.isFocusInsideContent(event);
					};
					onDeactivated(() => open.value && hide());
					onBeforeUnmount(() => {
						toggleReason.value = void 0;
					});
					__expose({
						popperRef,
						contentRef,
						isFocusInsideContent,
						updatePopper,
						onOpen,
						onClose,
						hide
					});
					return (_ctx, _cache) => {
						return openBlock(), createBlock(unref(ElPopper), {
							ref_key: "popperRef",
							ref: popperRef,
							role: __props.role
						}, {
							default: withCtx(() => [createVNode(trigger_default, {
								disabled: __props.disabled,
								trigger: __props.trigger,
								"trigger-keys": __props.triggerKeys,
								"virtual-ref": __props.virtualRef,
								"virtual-triggering": __props.virtualTriggering,
								"focus-on-target": __props.focusOnTarget
							}, {
								default: withCtx(() => [_ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)]),
								_: 3
							}, 8, [
								"disabled",
								"trigger",
								"trigger-keys",
								"virtual-ref",
								"virtual-triggering",
								"focus-on-target"
							]), createVNode(content_default, {
								ref_key: "contentRef",
								ref: contentRef,
								"aria-label": __props.ariaLabel,
								"boundaries-padding": __props.boundariesPadding,
								content: __props.content,
								disabled: __props.disabled,
								effect: __props.effect,
								enterable: __props.enterable,
								"fallback-placements": __props.fallbackPlacements,
								"hide-after": __props.hideAfter,
								"gpu-acceleration": __props.gpuAcceleration,
								offset: __props.offset,
								persistent: __props.persistent,
								"popper-class": kls.value,
								"popper-style": __props.popperStyle,
								placement: __props.placement,
								"popper-options": __props.popperOptions,
								"arrow-offset": __props.arrowOffset,
								pure: __props.pure,
								"raw-content": __props.rawContent,
								"reference-el": __props.referenceEl,
								"trigger-target-el": __props.triggerTargetEl,
								"show-after": __props.showAfter,
								strategy: __props.strategy,
								teleported: __props.teleported,
								transition: __props.transition,
								"virtual-triggering": __props.virtualTriggering,
								"z-index": __props.zIndex,
								"append-to": __props.appendTo,
								loop: __props.loop
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "content", {}, () => [__props.rawContent ? (openBlock(), createElementBlock("span", {
									key: 0,
									innerHTML: __props.content
								}, null, 8, _hoisted_1$17)) : (openBlock(), createElementBlock("span", _hoisted_2$9, toDisplayString(__props.content), 1))]), __props.showArrow ? (openBlock(), createBlock(unref(arrow_default), { key: 0 })) : createCommentVNode("v-if", true)]),
								_: 3
							}, 8, [
								"aria-label",
								"boundaries-padding",
								"content",
								"disabled",
								"effect",
								"enterable",
								"fallback-placements",
								"hide-after",
								"gpu-acceleration",
								"offset",
								"persistent",
								"popper-class",
								"popper-style",
								"placement",
								"popper-options",
								"arrow-offset",
								"pure",
								"raw-content",
								"reference-el",
								"trigger-target-el",
								"show-after",
								"strategy",
								"teleported",
								"transition",
								"virtual-triggering",
								"z-index",
								"append-to",
								"loop"
							])]),
							_: 3
						}, 8, ["role"]);
					};
				}
			});
		}));
		var tooltip_default;
		var init_tooltip2 = __esmMin((() => {
			init_tooltip_vue_vue_type_script_setup_true_lang();
			tooltip_default = tooltip_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElTooltip;
		var init_tooltip = __esmMin((() => {
			init_install();
			init_tooltip2();
			ElTooltip = withInstall(tooltip_default);
		}));
		var mutable;
		var init_typescript = __esmMin((() => {
			mutable = (val) => val;
		}));
		var inputProps;
		var inputEmits;
		var init_input$1 = __esmMin((() => {
			init_event$1();
			init_types();
			init_runtime();
			init_icon$2();
			init_typescript();
			init_use_size();
			init_use_aria();
			init_dist();
			init_vue_runtime_esm_bundler();
			inputProps = buildProps({
				id: {
					type: String,
					default: void 0
				},
				size: useSizeProp,
				disabled: {
					type: Boolean,
					default: void 0
				},
				modelValue: {
					type: definePropType([
						String,
						Number,
						Object
					]),
					default: ""
				},
				modelModifiers: {
					type: definePropType(Object),
					default: () => ({})
				},
				maxlength: { type: [String, Number] },
				minlength: { type: [String, Number] },
				type: {
					type: definePropType(String),
					default: "text"
				},
				resize: {
					type: String,
					values: [
						"none",
						"both",
						"horizontal",
						"vertical"
					]
				},
				autosize: {
					type: definePropType([Boolean, Object]),
					default: false
				},
				autocomplete: {
					type: definePropType(String),
					default: "off"
				},
				formatter: { type: Function },
				parser: { type: Function },
				placeholder: { type: String },
				form: { type: String },
				readonly: Boolean,
				clearable: Boolean,
				clearIcon: {
					type: iconPropType,
					default: circle_close_default
				},
				showPassword: Boolean,
				showWordLimit: Boolean,
				wordLimitPosition: {
					type: String,
					values: ["inside", "outside"],
					default: "inside"
				},
				suffixIcon: { type: iconPropType },
				prefixIcon: { type: iconPropType },
				containerRole: {
					type: String,
					default: void 0
				},
				tabindex: {
					type: [String, Number],
					default: 0
				},
				validateEvent: {
					type: Boolean,
					default: true
				},
				inputStyle: {
					type: definePropType([
						Object,
						Array,
						String,
						Boolean
					]),
					default: () => mutable({})
				},
				countGraphemes: { type: definePropType(Function) },
				autofocus: Boolean,
				rows: {
					type: Number,
					default: 2
				},
				...useAriaProps(["ariaLabel"]),
				inputmode: {
					type: definePropType(String),
					default: void 0
				},
				name: String
			});
			inputEmits = {
				[UPDATE_MODEL_EVENT]: (value) => isString(value),
				input: (value) => isString(value),
				change: (value, evt) => isString(value) && (evt instanceof Event || evt === void 0),
				focus: (evt) => evt instanceof FocusEvent,
				blur: (evt) => evt instanceof FocusEvent,
				clear: (evt) => evt === void 0 || evt instanceof MouseEvent,
				mouseleave: (evt) => evt instanceof MouseEvent,
				mouseenter: (evt) => evt instanceof MouseEvent,
				keydown: (evt) => evt instanceof Event,
				compositionstart: (evt) => evt instanceof CompositionEvent,
				compositionupdate: (evt) => evt instanceof CompositionEvent,
				compositionend: (evt) => evt instanceof CompositionEvent
			};
			markRaw(circle_close_default);
		}));
		function calculateNodeStyling(targetElement) {
			const style = window.getComputedStyle(targetElement);
			const boxSizing = style.getPropertyValue("box-sizing");
			const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
			const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
			return {
				contextStyle: CONTEXT_STYLE.map((name) => [name, style.getPropertyValue(name)]),
				paddingSize,
				borderSize,
				boxSizing
			};
		}
		function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
			if (!hiddenTextarea) {
				hiddenTextarea = document.createElement("textarea");
				let hostNode = document.body;
				if (!isFirefox() && targetElement.parentNode) hostNode = targetElement.parentNode;
				hostNode.appendChild(hiddenTextarea);
			}
			const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
			contextStyle.forEach(([key, value]) => hiddenTextarea?.style.setProperty(key, value));
			Object.entries(HIDDEN_STYLE).forEach(([key, value]) => hiddenTextarea?.style.setProperty(key, value, "important"));
			hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
			let height = hiddenTextarea.scrollHeight;
			const result = {};
			if (boxSizing === "border-box") height = height + borderSize;
			else if (boxSizing === "content-box") height = height - paddingSize;
			hiddenTextarea.value = "";
			const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
			if (isNumber(minRows)) {
				let minHeight = singleRowHeight * minRows;
				if (boxSizing === "border-box") minHeight = minHeight + paddingSize + borderSize;
				height = Math.max(minHeight, height);
				result.minHeight = `${minHeight}px`;
			}
			if (isNumber(maxRows)) {
				let maxHeight = singleRowHeight * maxRows;
				if (boxSizing === "border-box") maxHeight = maxHeight + paddingSize + borderSize;
				height = Math.min(maxHeight, height);
			}
			result.height = `${height}px`;
			hiddenTextarea.parentNode?.removeChild(hiddenTextarea);
			hiddenTextarea = void 0;
			return result;
		}
		var hiddenTextarea;
		var HIDDEN_STYLE;
		var CONTEXT_STYLE;
		var looseToNumber;
		var init_utils = __esmMin((() => {
			init_browser();
			init_types();
			hiddenTextarea = void 0;
			HIDDEN_STYLE = {
				height: "0",
				visibility: "hidden",
				overflow: isFirefox() ? "" : "hidden",
				position: "absolute",
				"z-index": "-1000",
				top: "0",
				right: "0"
			};
			CONTEXT_STYLE = [
				"letter-spacing",
				"line-height",
				"padding-top",
				"padding-bottom",
				"font-family",
				"font-weight",
				"font-size",
				"text-rendering",
				"text-transform",
				"width",
				"text-indent",
				"padding-left",
				"padding-right",
				"border-width",
				"box-sizing",
				"word-break"
			];
			looseToNumber = (val) => {
				const n = Number.parseFloat(val);
				return Number.isNaN(n) ? val : n;
			};
		}));
		var _hoisted_1$16;
		var _hoisted_2$8;
		var _hoisted_3$6;
		var _hoisted_4$5;
		var COMPONENT_NAME$5;
		var input_vue_vue_type_script_setup_true_lang_default;
		var init_input_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_event$1();
			init_browser();
			init_types();
			init_raf();
			init_error();
			init_icon$2();
			init_functions();
			init_use_attrs();
			init_use_locale();
			init_use_namespace();
			init_use_cursor();
			init_use_focus_controller();
			init_use_composition();
			init_icon();
			init_use_form_common_props();
			init_use_form_item();
			init_input$1();
			init_utils();
			init_dist$2();
			init_import();
			init_dist();
			init_vue_runtime_esm_bundler();
			_hoisted_1$16 = [
				"id",
				"name",
				"minlength",
				"maxlength",
				"type",
				"disabled",
				"readonly",
				"autocomplete",
				"tabindex",
				"aria-label",
				"placeholder",
				"form",
				"autofocus",
				"role",
				"inputmode"
			];
			_hoisted_2$8 = ["aria-label"];
			_hoisted_3$6 = [
				"id",
				"name",
				"minlength",
				"maxlength",
				"tabindex",
				"disabled",
				"readonly",
				"autocomplete",
				"aria-label",
				"placeholder",
				"form",
				"autofocus",
				"rows",
				"role",
				"inputmode"
			];
			_hoisted_4$5 = ["aria-label"];
			COMPONENT_NAME$5 = "ElInput";
			input_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: COMPONENT_NAME$5,
				inheritAttrs: false,
				__name: "input",
				props: inputProps,
				emits: inputEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					const rawAttrs = useAttrs$1();
					const slots = useSlots();
					const containerKls = computed(() => [
						props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
						nsInput.m(inputSize.value),
						nsInput.is("disabled", inputDisabled.value),
						nsInput.is("exceed", inputExceed.value),
						{
							[nsInput.b("group")]: slots.prepend || slots.append,
							[nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
							[nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
							[nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
							[nsInput.b("hidden")]: props.type === "hidden"
						},
						rawAttrs.class
					]);
					const wrapperKls = computed(() => [nsInput.e("wrapper"), nsInput.is("focus", isFocused.value)]);
					const attrs = useAttrs();
					const maxlength = computed(() => props.maxlength?.toString());
					const { form: elForm, formItem: elFormItem } = useFormItem();
					const { inputId } = useFormItemInputId(props, { formItemContext: elFormItem });
					const inputSize = useFormSize();
					const inputDisabled = useFormDisabled();
					const nsInput = useNamespace("input");
					const nsTextarea = useNamespace("textarea");
					const { t } = useLocale();
					const input = shallowRef();
					const textarea = shallowRef();
					const hovering = ref(false);
					const passwordVisible = ref(false);
					const countStyle = ref();
					const clearIconStyle = ref();
					const textareaCalcStyle = shallowRef(props.inputStyle);
					const saveValue = ref("");
					let passwordFocusValue;
					const textareaHeight = ref();
					const _ref = computed(() => input.value || textarea.value);
					const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
						disabled: inputDisabled,
						afterFocus() {
							if (props.showPassword) passwordFocusValue = _ref.value?.value;
						},
						beforeBlur(event) {
							if (props.showPassword) {
								const target = _ref.value;
								if (event.relatedTarget && target?.parentElement?.contains(event.relatedTarget)) return;
								const value = target?.value;
								if (!isNil(value) && !isNil(passwordFocusValue) && value !== passwordFocusValue) target?.dispatchEvent(new Event("change", { bubbles: true }));
								passwordFocusValue = void 0;
							}
						},
						afterBlur() {
							if (props.validateEvent) elFormItem?.validate?.("blur").catch(NOOP);
						}
					});
					const needStatusIcon = computed(() => elForm?.statusIcon ?? false);
					const validateState = computed(() => elFormItem?.validateState || "");
					const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
					const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
					const containerStyle = computed(() => [rawAttrs.style]);
					const textareaStyle = computed(() => [
						props.inputStyle,
						textareaCalcStyle.value,
						{ resize: props.resize },
						textareaHeight.value ? { height: textareaHeight.value } : void 0
					]);
					const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
					const renderClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly);
					const showClear = computed(() => renderClear.value && !!nativeInputValue.value && (isFocused.value || hovering.value));
					const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !!nativeInputValue.value);
					const isWordLimitVisible = computed(() => props.showWordLimit && !!maxlength.value && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
					const textLength = computed(() => {
						if (props.countGraphemes && props.showWordLimit) return props.countGraphemes(nativeInputValue.value);
						return nativeInputValue.value.length;
					});
					const wordLimitLabel = computed(() => t("el.input.characters", {
						count: textLength.value,
						max: maxlength.value ?? ""
					}));
					const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(maxlength.value));
					const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || props.clearable || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
					const hasModelModifiers = computed(() => !!Object.keys(props.modelModifiers).length);
					const [recordCursor, setCursor] = useCursor(input);
					let rAFId;
					useResizeObserver(textarea, (entries) => {
						onceInitSizeTextarea();
						if (!isWordLimitVisible.value && !renderClear.value || props.resize !== "both" && props.resize !== "horizontal") return;
						const { width } = entries[0].target.getBoundingClientRect();
						const updateStyle = () => {
							rAFId = void 0;
							countStyle.value = { right: `calc(100% - ${width - 10}px)` };
							clearIconStyle.value = { right: `calc(100% - ${width - 11}px)` };
						};
						rAFId && cAF(rAFId);
						rAFId = rAF(updateStyle);
					});
					const resizeTextarea = () => {
						const { type, autosize } = props;
						if (!isClient || type !== "textarea" || !textarea.value) return;
						if (autosize) {
							const minRows = isObject$2(autosize) ? autosize.minRows : void 0;
							const maxRows = isObject$2(autosize) ? autosize.maxRows : void 0;
							const textareaStyle = calcTextareaHeight(textarea.value, minRows, maxRows);
							textareaCalcStyle.value = {
								overflowY: "hidden",
								...textareaStyle
							};
							nextTick(() => {
								textarea.value.offsetHeight;
								textareaCalcStyle.value = textareaStyle;
							});
						} else textareaCalcStyle.value = { minHeight: calcTextareaHeight(textarea.value).minHeight };
					};
					const createOnceInitResize = (resizeTextarea) => {
						let isInit = false;
						return () => {
							if (isInit || !props.autosize) {
								if (props.resize !== "none") setTimeout(() => {
									textareaHeight.value = textarea.value?.style.height;
								});
								return;
							}
							if (!(textarea.value?.offsetParent === null)) {
								setTimeout(resizeTextarea);
								isInit = true;
							}
						};
					};
					const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
					const setNativeInputValue = () => {
						const input = _ref.value;
						const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
						if (!input || input.value === formatterValue || props.type === "file") return;
						input.value = formatterValue;
					};
					const formatValue = (value) => {
						const { trim, number } = props.modelModifiers;
						if (trim) value = value.trim();
						if (number) value = `${looseToNumber(value)}`;
						if (props.formatter && props.parser) value = props.parser(value);
						return value;
					};
					const handleInput = async (event) => {
						if (isComposing.value) return;
						const { lazy } = props.modelModifiers;
						let { value } = event.target;
						let shouldForceNativeUpdate = false;
						if (lazy) {
							emit(INPUT_EVENT, value);
							return;
						}
						value = formatValue(value);
						if (props.countGraphemes && maxlength.value != null) {
							const limit = Number(maxlength.value);
							const graphemes = props.countGraphemes(value);
							const saveGraphemes = props.countGraphemes(saveValue.value);
							if (graphemes > limit && graphemes > saveGraphemes) {
								if (saveGraphemes > limit) {
									value = saveValue.value;
									shouldForceNativeUpdate = true;
								} else {
									const prevValue = saveValue.value;
									const nextValue = value;
									let prefixLen = 0;
									while (prefixLen < prevValue.length && prefixLen < nextValue.length && prevValue[prefixLen] === nextValue[prefixLen]) prefixLen++;
									let prevSuffixIndex = prevValue.length;
									let nextSuffixIndex = nextValue.length;
									while (prevSuffixIndex > prefixLen && nextSuffixIndex > prefixLen && prevValue[prevSuffixIndex - 1] === nextValue[nextSuffixIndex - 1]) {
										prevSuffixIndex--;
										nextSuffixIndex--;
									}
									const before = nextValue.slice(0, prefixLen);
									const removed = prevValue.slice(prefixLen, prevSuffixIndex);
									const inserted = nextValue.slice(prefixLen, nextSuffixIndex);
									const after = nextValue.slice(nextSuffixIndex);
									const baseCount = saveGraphemes - props.countGraphemes(removed);
									const availableInserted = Math.max(0, limit - baseCount);
									let acceptedInserted = "";
									if (availableInserted > 0) {
										if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
											const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
											for (const { segment } of segmenter.segment(inserted)) {
												const candidate = acceptedInserted + segment;
												if (props.countGraphemes(candidate) > availableInserted) break;
												acceptedInserted = candidate;
											}
										} else for (const char of Array.from(inserted)) {
											const candidate = acceptedInserted + char;
											if (props.countGraphemes(candidate) > availableInserted) break;
											acceptedInserted = candidate;
										}
									}
									value = before + acceptedInserted + after;
									shouldForceNativeUpdate = true;
								}
							}
						}
						if (String(value) === nativeInputValue.value) {
							if (props.formatter || shouldForceNativeUpdate) {
								const target = event.target;
								const blockedValue = target.value;
								const selectionStart = target.selectionStart;
								const selectionEnd = target.selectionEnd;
								setNativeInputValue();
								if (shouldForceNativeUpdate && _ref.value && selectionStart != null && selectionEnd != null) {
									const restoredValue = _ref.value.value;
									const afterTxt = blockedValue.slice(Math.max(0, selectionEnd));
									let caretPos = Math.min(selectionStart, restoredValue.length);
									if (afterTxt && restoredValue.endsWith(afterTxt)) caretPos = restoredValue.length - afterTxt.length;
									_ref.value.setSelectionRange(caretPos, caretPos);
								}
							}
							return;
						}
						saveValue.value = value;
						recordCursor();
						emit(UPDATE_MODEL_EVENT, value);
						emit(INPUT_EVENT, value);
						await nextTick();
						if (props.formatter && props.parser || !hasModelModifiers.value) setNativeInputValue();
						setCursor();
					};
					const handleChange = async (event) => {
						let { value } = event.target;
						if (props.showPassword) passwordFocusValue = value;
						value = formatValue(value);
						if (props.modelModifiers.lazy) emit(UPDATE_MODEL_EVENT, value);
						emit(CHANGE_EVENT, value, event);
						await nextTick();
						setNativeInputValue();
					};
					const { isComposing, handleCompositionStart, handleCompositionUpdate, handleCompositionEnd } = useComposition({
						emit,
						afterComposition: handleInput
					});
					const handlePasswordVisible = () => {
						passwordVisible.value = !passwordVisible.value;
					};
					const focus = () => _ref.value?.focus();
					const blur = () => _ref.value?.blur();
					const handleMouseLeave = (evt) => {
						hovering.value = false;
						emit("mouseleave", evt);
					};
					const handleMouseEnter = (evt) => {
						hovering.value = true;
						emit("mouseenter", evt);
					};
					const handleKeydown = (evt) => {
						emit("keydown", evt);
					};
					const select = () => {
						_ref.value?.select();
					};
					const clear = (evt) => {
						emit(UPDATE_MODEL_EVENT, "");
						passwordFocusValue = "";
						emit(CHANGE_EVENT, "");
						emit("clear", evt);
						emit(INPUT_EVENT, "");
					};
					watch(() => props.modelValue, () => {
						nextTick(() => {
							resizeTextarea();
							if (props.autosize) textareaHeight.value = void 0;
						});
						if (props.validateEvent) elFormItem?.validate?.("change").catch(NOOP);
					});
					watch(() => nativeInputValue.value, (val) => {
						saveValue.value = val;
					}, { immediate: true });
					watch(nativeInputValue, (newValue) => {
						if (!_ref.value) return;
						const { trim, number } = props.modelModifiers;
						const elValue = _ref.value.value;
						const displayValue = (number || props.type === "number") && !/^0\d/.test(elValue) ? `${looseToNumber(elValue)}` : elValue;
						if (displayValue === newValue) return;
						if (document.activeElement === _ref.value && _ref.value.type !== "range") {
							if (trim && displayValue.trim() === newValue) return;
						}
						setNativeInputValue();
					});
					watch(() => props.type, async () => {
						await nextTick();
						setNativeInputValue();
						resizeTextarea();
					});
					onMounted(() => {
						if (!props.formatter && props.parser) debugWarn(COMPONENT_NAME$5, "If you set the parser, you also need to set the formatter.");
						setNativeInputValue();
						nextTick(resizeTextarea);
					});
					onBeforeUnmount(() => {
						rAFId && cAF(rAFId);
					});
					__expose({
						input,
						textarea,
						ref: _ref,
						textareaStyle,
						autosize: toRef(props, "autosize"),
						isComposing,
						passwordVisible,
						focus,
						blur,
						select,
						clear,
						resizeTextarea
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							class: normalizeClass([containerKls.value, {
								[unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
								[unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend
							}]),
							style: normalizeStyle(containerStyle.value),
							onMouseenter: handleMouseEnter,
							onMouseleave: handleMouseLeave
						}, [createCommentVNode(" input "), __props.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
							createCommentVNode(" prepend slot "),
							_ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(unref(nsInput).be("group", "prepend"))
							}, [renderSlot(_ctx.$slots, "prepend")], 2)) : createCommentVNode("v-if", true),
							createBaseVNode("div", {
								ref_key: "wrapperRef",
								ref: wrapperRef,
								class: normalizeClass(wrapperKls.value)
							}, [
								createCommentVNode(" prefix slot "),
								_ctx.$slots.prefix || __props.prefixIcon ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(unref(nsInput).e("prefix"))
								}, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("prefix-inner")) }, [renderSlot(_ctx.$slots, "prefix"), __props.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
									key: 0,
									class: normalizeClass(unref(nsInput).e("icon"))
								}, {
									default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.prefixIcon)))]),
									_: 1
								}, 8, ["class"])) : createCommentVNode("v-if", true)], 2)], 2)) : createCommentVNode("v-if", true),
								createBaseVNode("input", mergeProps({
									id: unref(inputId),
									ref_key: "input",
									ref: input,
									class: unref(nsInput).e("inner")
								}, unref(attrs), {
									name: __props.name,
									minlength: __props.countGraphemes ? void 0 : __props.minlength,
									maxlength: __props.countGraphemes ? void 0 : maxlength.value,
									type: __props.showPassword ? passwordVisible.value ? "text" : "password" : __props.type,
									disabled: unref(inputDisabled),
									readonly: __props.readonly,
									autocomplete: __props.autocomplete,
									tabindex: __props.tabindex,
									"aria-label": __props.ariaLabel,
									placeholder: __props.placeholder,
									style: __props.inputStyle,
									form: __props.form,
									autofocus: __props.autofocus,
									role: __props.containerRole,
									inputmode: __props.inputmode,
									onCompositionstart: _cache[0] || (_cache[0] = (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
									onCompositionupdate: _cache[1] || (_cache[1] = (...args) => unref(handleCompositionUpdate) && unref(handleCompositionUpdate)(...args)),
									onCompositionend: _cache[2] || (_cache[2] = (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args)),
									onInput: handleInput,
									onChange: handleChange,
									onKeydown: handleKeydown
								}), null, 16, _hoisted_1$16),
								createCommentVNode(" suffix slot "),
								suffixVisible.value ? (openBlock(), createElementBlock("span", {
									key: 1,
									class: normalizeClass(unref(nsInput).e("suffix"))
								}, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("suffix-inner")) }, [
									renderClear.value ? (openBlock(), createBlock(unref(ElIcon), {
										key: 0,
										class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
										style: normalizeStyle({ visibility: showClear.value ? "visible" : "hidden" }),
										onMousedown: withModifiers(unref(NOOP), ["prevent"]),
										onClick: clear
									}, {
										default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.clearIcon)))]),
										_: 1
									}, 8, [
										"class",
										"style",
										"onMousedown"
									])) : createCommentVNode("v-if", true),
									!showClear.value || !showPwdVisible.value || !isWordLimitVisible.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [renderSlot(_ctx.$slots, "suffix"), __props.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
										key: 0,
										class: normalizeClass(unref(nsInput).e("icon"))
									}, {
										default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.suffixIcon)))]),
										_: 1
									}, 8, ["class"])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true),
									showPwdVisible.value ? (openBlock(), createBlock(unref(ElIcon), {
										key: 2,
										class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
										onClick: handlePasswordVisible,
										onMousedown: withModifiers(unref(NOOP), ["prevent"]),
										onMouseup: withModifiers(unref(NOOP), ["prevent"])
									}, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "password-icon", { visible: passwordVisible.value }, () => [(openBlock(), createBlock(resolveDynamicComponent(passwordIcon.value)))])]),
										_: 3
									}, 8, [
										"class",
										"onMousedown",
										"onMouseup"
									])) : createCommentVNode("v-if", true),
									isWordLimitVisible.value ? (openBlock(), createElementBlock("span", {
										key: 3,
										class: normalizeClass([unref(nsInput).e("count"), unref(nsInput).is("outside", __props.wordLimitPosition === "outside")]),
										"aria-label": wordLimitLabel.value,
										role: "status"
									}, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("count-inner")) }, toDisplayString(textLength.value) + " / " + toDisplayString(maxlength.value), 3)], 10, _hoisted_2$8)) : createCommentVNode("v-if", true),
									validateState.value && validateIcon.value && needStatusIcon.value ? (openBlock(), createBlock(unref(ElIcon), {
										key: 4,
										class: normalizeClass([
											unref(nsInput).e("icon"),
											unref(nsInput).e("validateIcon"),
											unref(nsInput).is("loading", validateState.value === "validating")
										])
									}, {
										default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(validateIcon.value)))]),
										_: 1
									}, 8, ["class"])) : createCommentVNode("v-if", true)
								], 2)], 2)) : createCommentVNode("v-if", true)
							], 2),
							createCommentVNode(" append slot "),
							_ctx.$slots.append ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(unref(nsInput).be("group", "append"))
							}, [renderSlot(_ctx.$slots, "append")], 2)) : createCommentVNode("v-if", true)
						], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							createCommentVNode(" textarea "),
							createBaseVNode("textarea", mergeProps({
								id: unref(inputId),
								ref_key: "textarea",
								ref: textarea,
								class: [
									unref(nsTextarea).e("inner"),
									unref(nsInput).is("focus", unref(isFocused)),
									unref(nsTextarea).is("clearable", __props.clearable)
								]
							}, unref(attrs), {
								name: __props.name,
								minlength: __props.countGraphemes ? void 0 : __props.minlength,
								maxlength: __props.countGraphemes ? void 0 : maxlength.value,
								tabindex: __props.tabindex,
								disabled: unref(inputDisabled),
								readonly: __props.readonly,
								autocomplete: __props.autocomplete,
								style: textareaStyle.value,
								"aria-label": __props.ariaLabel,
								placeholder: __props.placeholder,
								form: __props.form,
								autofocus: __props.autofocus,
								rows: __props.rows,
								role: __props.containerRole,
								inputmode: __props.inputmode,
								onCompositionstart: _cache[3] || (_cache[3] = (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
								onCompositionupdate: _cache[4] || (_cache[4] = (...args) => unref(handleCompositionUpdate) && unref(handleCompositionUpdate)(...args)),
								onCompositionend: _cache[5] || (_cache[5] = (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args)),
								onInput: handleInput,
								onFocus: _cache[6] || (_cache[6] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
								onBlur: _cache[7] || (_cache[7] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
								onChange: handleChange,
								onKeydown: handleKeydown
							}), null, 16, _hoisted_3$6),
							showClear.value ? (openBlock(), createBlock(unref(ElIcon), {
								key: 0,
								class: normalizeClass([unref(nsTextarea).e("icon"), unref(nsTextarea).e("clear")]),
								style: normalizeStyle(clearIconStyle.value),
								onMousedown: withModifiers(unref(NOOP), ["prevent"]),
								onClick: clear
							}, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.clearIcon)))]),
								_: 1
							}, 8, [
								"class",
								"style",
								"onMousedown"
							])) : createCommentVNode("v-if", true),
							isWordLimitVisible.value ? (openBlock(), createElementBlock("span", {
								key: 1,
								style: normalizeStyle(countStyle.value),
								class: normalizeClass([unref(nsInput).e("count"), unref(nsInput).is("outside", __props.wordLimitPosition === "outside")]),
								"aria-label": wordLimitLabel.value,
								role: "status"
							}, toDisplayString(textLength.value) + " / " + toDisplayString(maxlength.value), 15, _hoisted_4$5)) : createCommentVNode("v-if", true)
						], 64))], 38);
					};
				}
			});
		}));
		var input_default;
		var init_input2 = __esmMin((() => {
			init_input_vue_vue_type_script_setup_true_lang();
			input_default = input_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElInput;
		var init_input = __esmMin((() => {
			init_install();
			init_input2();
			ElInput = withInstall(input_default);
		}));
		function isGreaterThan(a, b, epsilon = .03) {
			return a - b > epsilon;
		}
		var init_numbers = __esmMin((() => {}));
		var badgeProps;
		var init_badge$1 = __esmMin((() => {
			init_runtime();
			badgeProps = buildProps({
				value: {
					type: [String, Number],
					default: ""
				},
				max: {
					type: Number,
					default: 99
				},
				isDot: Boolean,
				hidden: Boolean,
				type: {
					type: String,
					values: [
						"primary",
						"success",
						"warning",
						"info",
						"danger"
					],
					default: "danger"
				},
				showZero: {
					type: Boolean,
					default: true
				},
				color: String,
				badgeStyle: {
					type: definePropType([
						String,
						Object,
						Array,
						Boolean
					]),
					default: void 0
				},
				offset: {
					type: definePropType(Array),
					default: () => [0, 0]
				},
				badgeClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				}
			});
		}));
		var badge_vue_vue_type_script_setup_true_lang_default;
		var init_badge_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_types();
			init_style$1();
			init_use_namespace();
			init_badge$1();
			init_vue_runtime_esm_bundler();
			badge_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElBadge",
				__name: "badge",
				props: badgeProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const ns = useNamespace("badge");
					const content = computed(() => {
						if (props.isDot) return "";
						if (isNumber(props.value) && isNumber(props.max)) return props.max < props.value ? `${props.max}+` : `${props.value}`;
						return `${props.value}`;
					});
					const style = computed(() => {
						return [{
							backgroundColor: props.color,
							marginRight: addUnit(-props.offset[0]),
							marginTop: addUnit(props.offset[1])
						}, props.badgeStyle ?? {}];
					});
					__expose({ content });
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", { class: normalizeClass(unref(ns).b()) }, [renderSlot(_ctx.$slots, "default"), createVNode(Transition, { name: `${unref(ns).namespace.value}-zoom-in-center` }, {
							default: withCtx(() => [!__props.hidden && (content.value || __props.isDot || _ctx.$slots.content) ? (openBlock(), createElementBlock("sup", {
								key: 0,
								class: normalizeClass([
									unref(ns).e("content"),
									unref(ns).em("content", __props.type),
									unref(ns).is("fixed", !!_ctx.$slots.default),
									unref(ns).is("dot", __props.isDot),
									unref(ns).is("hide-zero", !__props.showZero && __props.value === 0),
									__props.badgeClass
								]),
								style: normalizeStyle(style.value)
							}, [renderSlot(_ctx.$slots, "content", { value: content.value }, () => [createTextVNode(toDisplayString(content.value), 1)])], 6)) : createCommentVNode("v-if", true)]),
							_: 3
						}, 8, ["name"])], 2);
					};
				}
			});
		}));
		var badge_default;
		var init_badge2 = __esmMin((() => {
			init_badge_vue_vue_type_script_setup_true_lang();
			badge_default = badge_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElBadge;
		var init_badge = __esmMin((() => {
			init_install();
			init_badge2();
			ElBadge = withInstall(badge_default);
		}));
		var buttonTypes;
		var buttonNativeTypes;
		var buttonProps;
		var buttonEmits;
		var init_button$1 = __esmMin((() => {
			init_runtime();
			init_icon$2();
			init_use_size();
			init_dist();
			buttonTypes = [
				"default",
				"primary",
				"success",
				"warning",
				"info",
				"danger",
				"text",
				""
			];
			buttonNativeTypes = [
				"button",
				"submit",
				"reset"
			];
			buttonProps = buildProps({
				size: useSizeProp,
				disabled: {
					type: Boolean,
					default: void 0
				},
				type: {
					type: String,
					values: buttonTypes,
					default: ""
				},
				icon: { type: iconPropType },
				nativeType: {
					type: String,
					values: buttonNativeTypes,
					default: "button"
				},
				loading: Boolean,
				loadingIcon: {
					type: iconPropType,
					default: () => loading_default
				},
				plain: {
					type: Boolean,
					default: void 0
				},
				text: {
					type: Boolean,
					default: void 0
				},
				link: Boolean,
				bg: Boolean,
				autofocus: Boolean,
				round: {
					type: Boolean,
					default: void 0
				},
				circle: Boolean,
				dashed: {
					type: Boolean,
					default: void 0
				},
				color: String,
				dark: Boolean,
				autoInsertSpace: {
					type: Boolean,
					default: void 0
				},
				tag: {
					type: definePropType([String, Object]),
					default: "button"
				}
			});
			buttonEmits = { click: (evt) => evt instanceof MouseEvent };
		}));
		var configProviderContextKey;
		var init_constants$3 = __esmMin((() => {
			configProviderContextKey = Symbol();
		}));
		function useGlobalConfig(key, defaultValue = void 0) {
			const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
			if (key) return computed(() => config.value?.[key] ?? defaultValue);
			else return config;
		}
		function useGlobalComponentSettings(block, sizeFallback) {
			const config = useGlobalConfig();
			const ns = useNamespace(block, computed(() => config.value?.namespace || "el"));
			const locale = useLocale(computed(() => config.value?.locale));
			const zIndex = useZIndex(computed(() => {
				const zIndex = config.value?.zIndex;
				return isNil(zIndex) || Number.isNaN(zIndex) ? defaultInitialZIndex : zIndex;
			}));
			const size = computed(() => unref(sizeFallback) || config.value?.size || "");
			provideGlobalConfig(computed(() => unref(config) || {}));
			return {
				ns,
				locale,
				zIndex,
				size
			};
		}
		var globalConfig;
		var provideGlobalConfig;
		var mergeConfig;
		var init_use_global_config = __esmMin((() => {
			init_objects();
			init_error();
			init_use_locale();
			init_use_namespace();
			init_use_z_index();
			init_use_size();
			init_use_empty_values();
			init_constants$3();
			init_import();
			init_vue_runtime_esm_bundler();
			globalConfig = ref();
			provideGlobalConfig = (config, app, global = false) => {
				const inSetup = !!getCurrentInstance();
				const oldConfig = inSetup ? useGlobalConfig() : void 0;
				const provideFn = app?.provide ?? (inSetup ? provide : void 0);
				if (!provideFn) {
					debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
					return;
				}
				const context = computed(() => {
					const cfg = unref(config);
					if (!oldConfig?.value) return cfg;
					return mergeConfig(oldConfig.value, cfg);
				});
				provideFn(configProviderContextKey, context);
				provideFn(localeContextKey, computed(() => context.value.locale));
				provideFn(namespaceContextKey, computed(() => context.value.namespace));
				provideFn(zIndexContextKey, computed(() => context.value.zIndex));
				provideFn(SIZE_INJECTION_KEY, { size: computed(() => context.value.size || "") });
				provideFn(emptyValuesContextKey, computed(() => ({
					emptyValues: context.value.emptyValues,
					valueOnClear: context.value.valueOnClear
				})));
				if (global || !globalConfig.value) globalConfig.value = context.value;
				return context;
			};
			mergeConfig = (a, b) => {
				const keys = [...new Set([...keysOf(a), ...keysOf(b)])];
				const obj = {};
				for (const key of keys) obj[key] = b[key] !== void 0 ? b[key] : a[key];
				return obj;
			};
		}));
		var init_config_provider_props = __esmMin((() => {
			init_runtime();
			init_use_size();
			init_use_empty_values();
			buildProps({
				a11y: {
					type: Boolean,
					default: true
				},
				locale: { type: definePropType(Object) },
				size: useSizeProp,
				button: { type: definePropType(Object) },
				card: { type: definePropType(Object) },
				dialog: { type: definePropType(Object) },
				link: { type: definePropType(Object) },
				experimentalFeatures: { type: definePropType(Object) },
				keyboardNavigation: {
					type: Boolean,
					default: true
				},
				message: { type: definePropType(Object) },
				zIndex: Number,
				namespace: {
					type: String,
					default: "el"
				},
				table: { type: definePropType(Object) },
				...useEmptyValuesProps
			});
		}));
		var messageConfig;
		var init_config_provider = __esmMin((() => {
			init_use_global_config();
			init_config_provider_props();
			init_vue_runtime_esm_bundler();
			messageConfig = { placement: "top" };
		}));
		var buttonGroupContextKey;
		var init_constants$2 = __esmMin((() => {
			buttonGroupContextKey = Symbol("buttonGroupContextKey");
		}));
		var useButton;
		var init_use_button = __esmMin((() => {
			init_use_deprecated();
			init_use_form_common_props();
			init_use_form_item();
			init_use_global_config();
			init_constants$2();
			init_vue_runtime_esm_bundler();
			useButton = (props, emit) => {
				useDeprecated({
					from: "type.text",
					replacement: "link",
					version: "3.0.0",
					scope: "props",
					ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
				}, computed(() => props.type === "text"));
				const buttonGroupContext = inject(buttonGroupContextKey, void 0);
				const globalConfig = useGlobalConfig("button");
				const { form } = useFormItem();
				const _size = useFormSize(computed(() => buttonGroupContext?.size));
				const _disabled = useFormDisabled();
				const _ref = ref();
				const slots = useSlots();
				const _type = computed(() => props.type || buttonGroupContext?.type || globalConfig.value?.type || "");
				const autoInsertSpace = computed(() => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false);
				const _plain = computed(() => props.plain ?? globalConfig.value?.plain ?? false);
				const _round = computed(() => props.round ?? globalConfig.value?.round ?? false);
				const _text = computed(() => props.text ?? globalConfig.value?.text ?? false);
				const _dashed = computed(() => props.dashed ?? globalConfig.value?.dashed ?? false);
				const _props = computed(() => {
					if (props.tag === "button") return {
						ariaDisabled: _disabled.value || props.loading,
						disabled: _disabled.value || props.loading,
						autofocus: props.autofocus,
						type: props.nativeType
					};
					return {};
				});
				const shouldAddSpace = computed(() => {
					const defaultSlot = slots.default?.();
					if (autoInsertSpace.value && defaultSlot?.length === 1) {
						const slot = defaultSlot[0];
						if (slot?.type === Text) {
							const text = slot.children;
							return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
						}
					}
					return false;
				});
				const handleClick = (evt) => {
					if (_disabled.value || props.loading) {
						evt.stopPropagation();
						return;
					}
					if (props.nativeType === "reset") form?.resetFields();
					emit("click", evt);
				};
				return {
					_disabled,
					_size,
					_type,
					_ref,
					_props,
					_plain,
					_round,
					_text,
					_dashed,
					shouldAddSpace,
					handleClick
				};
			};
		}));
		function bound01(n, max) {
			if (isOnePointZero(n)) n = "100%";
			const isPercent = isPercentage(n);
			n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
			if (isPercent) n = parseInt(String(n * max), 10) / 100;
			if (Math.abs(n - max) < 1e-6) return 1;
			if (max === 360) n = (n < 0 ? n % max + max : n % max) / max;
			else n = n % max / max;
			return n;
		}
		function clamp01(val) {
			return Math.min(1, Math.max(0, val));
		}
		function isOnePointZero(n) {
			return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
		}
		function isPercentage(n) {
			return typeof n === "string" && n.indexOf("%") !== -1;
		}
		function boundAlpha(a) {
			a = parseFloat(a);
			if (isNaN(a) || a < 0 || a > 1) a = 1;
			return a;
		}
		function convertToPercentage(n) {
			if (Number(n) <= 1) return `${Number(n) * 100}%`;
			return n;
		}
		function pad2(c) {
			return c.length === 1 ? "0" + c : String(c);
		}
		var init_util = __esmMin((() => {}));
		function rgbToRgb(r, g, b) {
			return {
				r: bound01(r, 255) * 255,
				g: bound01(g, 255) * 255,
				b: bound01(b, 255) * 255
			};
		}
		function rgbToHsl(r, g, b) {
			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);
			const max = Math.max(r, g, b);
			const min = Math.min(r, g, b);
			let h = 0;
			let s = 0;
			const l = (max + min) / 2;
			if (max === min) {
				s = 0;
				h = 0;
			} else {
				const d = max - min;
				s = l > .5 ? d / (2 - max - min) : d / (max + min);
				switch (max) {
					case r:
						h = (g - b) / d + (g < b ? 6 : 0);
						break;
					case g:
						h = (b - r) / d + 2;
						break;
					case b: h = (r - g) / d + 4;
				}
				h /= 6;
			}
			return {
				h,
				s,
				l
			};
		}
		function hue2rgb(p, q, t) {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * (6 * t);
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		}
		function hslToRgb(h, s, l) {
			let r;
			let g;
			let b;
			h = bound01(h, 360);
			s = bound01(s, 100);
			l = bound01(l, 100);
			if (s === 0) {
				g = l;
				b = l;
				r = l;
			} else {
				const q = l < .5 ? l * (1 + s) : l + s - l * s;
				const p = 2 * l - q;
				r = hue2rgb(p, q, h + 1 / 3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1 / 3);
			}
			return {
				r: r * 255,
				g: g * 255,
				b: b * 255
			};
		}
		function rgbToHsv(r, g, b) {
			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);
			const max = Math.max(r, g, b);
			const min = Math.min(r, g, b);
			let h = 0;
			const v = max;
			const d = max - min;
			const s = max === 0 ? 0 : d / max;
			if (max === min) h = 0;
			else {
				switch (max) {
					case r:
						h = (g - b) / d + (g < b ? 6 : 0);
						break;
					case g:
						h = (b - r) / d + 2;
						break;
					case b: h = (r - g) / d + 4;
				}
				h /= 6;
			}
			return {
				h,
				s,
				v
			};
		}
		function hsvToRgb(h, s, v) {
			h = bound01(h, 360) * 6;
			s = bound01(s, 100);
			v = bound01(v, 100);
			const i = Math.floor(h);
			const f = h - i;
			const p = v * (1 - s);
			const q = v * (1 - f * s);
			const t = v * (1 - (1 - f) * s);
			const mod = i % 6;
			const r = [
				v,
				q,
				p,
				p,
				t,
				v
			][mod];
			const g = [
				t,
				v,
				v,
				q,
				p,
				p
			][mod];
			const b = [
				p,
				p,
				t,
				v,
				v,
				q
			][mod];
			return {
				r: r * 255,
				g: g * 255,
				b: b * 255
			};
		}
		function rgbToHex(r, g, b, allow3Char) {
			const rHex = pad2(Math.round(r).toString(16));
			const gHex = pad2(Math.round(g).toString(16));
			const bHex = pad2(Math.round(b).toString(16));
			if (allow3Char && rHex.startsWith(rHex.charAt(1)) && gHex.startsWith(gHex.charAt(1)) && bHex.startsWith(bHex.charAt(1))) return rHex.charAt(0) + gHex.charAt(0) + bHex.charAt(0);
			return rHex + gHex + bHex;
		}
		function rgbaToHex(r, g, b, a, allow4Char) {
			const rHex = pad2(Math.round(r).toString(16));
			const gHex = pad2(Math.round(g).toString(16));
			const bHex = pad2(Math.round(b).toString(16));
			const aHex = pad2(convertDecimalToHex(a));
			if (allow4Char && rHex.startsWith(rHex.charAt(1)) && gHex.startsWith(gHex.charAt(1)) && bHex.startsWith(bHex.charAt(1)) && aHex.startsWith(aHex.charAt(1))) return rHex.charAt(0) + gHex.charAt(0) + bHex.charAt(0) + aHex.charAt(0);
			return rHex + gHex + bHex + aHex;
		}
		function cmykToRgb(c, m, y, k) {
			const cConv = c / 100;
			const mConv = m / 100;
			const yConv = y / 100;
			const kConv = k / 100;
			return {
				r: 255 * (1 - cConv) * (1 - kConv),
				g: 255 * (1 - mConv) * (1 - kConv),
				b: 255 * (1 - yConv) * (1 - kConv)
			};
		}
		function rgbToCmyk(r, g, b) {
			let c = 1 - r / 255;
			let m = 1 - g / 255;
			let y = 1 - b / 255;
			let k = Math.min(c, m, y);
			if (k === 1) {
				c = 0;
				m = 0;
				y = 0;
			} else {
				c = (c - k) / (1 - k) * 100;
				m = (m - k) / (1 - k) * 100;
				y = (y - k) / (1 - k) * 100;
			}
			k *= 100;
			return {
				c: Math.round(c),
				m: Math.round(m),
				y: Math.round(y),
				k: Math.round(k)
			};
		}
		function convertDecimalToHex(d) {
			return Math.round(parseFloat(d) * 255).toString(16);
		}
		function convertHexToDecimal(h) {
			return parseIntFromHex(h) / 255;
		}
		function parseIntFromHex(val) {
			return parseInt(val, 16);
		}
		function numberInputToObject(color) {
			return {
				r: color >> 16,
				g: (color & 65280) >> 8,
				b: color & 255
			};
		}
		var init_conversion = __esmMin((() => {
			init_util();
		}));
		var names;
		var init_css_color_names = __esmMin((() => {
			names = {
				aliceblue: "#f0f8ff",
				antiquewhite: "#faebd7",
				aqua: "#00ffff",
				aquamarine: "#7fffd4",
				azure: "#f0ffff",
				beige: "#f5f5dc",
				bisque: "#ffe4c4",
				black: "#000000",
				blanchedalmond: "#ffebcd",
				blue: "#0000ff",
				blueviolet: "#8a2be2",
				brown: "#a52a2a",
				burlywood: "#deb887",
				cadetblue: "#5f9ea0",
				chartreuse: "#7fff00",
				chocolate: "#d2691e",
				coral: "#ff7f50",
				cornflowerblue: "#6495ed",
				cornsilk: "#fff8dc",
				crimson: "#dc143c",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgoldenrod: "#b8860b",
				darkgray: "#a9a9a9",
				darkgreen: "#006400",
				darkgrey: "#a9a9a9",
				darkkhaki: "#bdb76b",
				darkmagenta: "#8b008b",
				darkolivegreen: "#556b2f",
				darkorange: "#ff8c00",
				darkorchid: "#9932cc",
				darkred: "#8b0000",
				darksalmon: "#e9967a",
				darkseagreen: "#8fbc8f",
				darkslateblue: "#483d8b",
				darkslategray: "#2f4f4f",
				darkslategrey: "#2f4f4f",
				darkturquoise: "#00ced1",
				darkviolet: "#9400d3",
				deeppink: "#ff1493",
				deepskyblue: "#00bfff",
				dimgray: "#696969",
				dimgrey: "#696969",
				dodgerblue: "#1e90ff",
				firebrick: "#b22222",
				floralwhite: "#fffaf0",
				forestgreen: "#228b22",
				fuchsia: "#ff00ff",
				gainsboro: "#dcdcdc",
				ghostwhite: "#f8f8ff",
				goldenrod: "#daa520",
				gold: "#ffd700",
				gray: "#808080",
				green: "#008000",
				greenyellow: "#adff2f",
				grey: "#808080",
				honeydew: "#f0fff0",
				hotpink: "#ff69b4",
				indianred: "#cd5c5c",
				indigo: "#4b0082",
				ivory: "#fffff0",
				khaki: "#f0e68c",
				lavenderblush: "#fff0f5",
				lavender: "#e6e6fa",
				lawngreen: "#7cfc00",
				lemonchiffon: "#fffacd",
				lightblue: "#add8e6",
				lightcoral: "#f08080",
				lightcyan: "#e0ffff",
				lightgoldenrodyellow: "#fafad2",
				lightgray: "#d3d3d3",
				lightgreen: "#90ee90",
				lightgrey: "#d3d3d3",
				lightpink: "#ffb6c1",
				lightsalmon: "#ffa07a",
				lightseagreen: "#20b2aa",
				lightskyblue: "#87cefa",
				lightslategray: "#778899",
				lightslategrey: "#778899",
				lightsteelblue: "#b0c4de",
				lightyellow: "#ffffe0",
				lime: "#00ff00",
				limegreen: "#32cd32",
				linen: "#faf0e6",
				magenta: "#ff00ff",
				maroon: "#800000",
				mediumaquamarine: "#66cdaa",
				mediumblue: "#0000cd",
				mediumorchid: "#ba55d3",
				mediumpurple: "#9370db",
				mediumseagreen: "#3cb371",
				mediumslateblue: "#7b68ee",
				mediumspringgreen: "#00fa9a",
				mediumturquoise: "#48d1cc",
				mediumvioletred: "#c71585",
				midnightblue: "#191970",
				mintcream: "#f5fffa",
				mistyrose: "#ffe4e1",
				moccasin: "#ffe4b5",
				navajowhite: "#ffdead",
				navy: "#000080",
				oldlace: "#fdf5e6",
				olive: "#808000",
				olivedrab: "#6b8e23",
				orange: "#ffa500",
				orangered: "#ff4500",
				orchid: "#da70d6",
				palegoldenrod: "#eee8aa",
				palegreen: "#98fb98",
				paleturquoise: "#afeeee",
				palevioletred: "#db7093",
				papayawhip: "#ffefd5",
				peachpuff: "#ffdab9",
				peru: "#cd853f",
				pink: "#ffc0cb",
				plum: "#dda0dd",
				powderblue: "#b0e0e6",
				purple: "#800080",
				rebeccapurple: "#663399",
				red: "#ff0000",
				rosybrown: "#bc8f8f",
				royalblue: "#4169e1",
				saddlebrown: "#8b4513",
				salmon: "#fa8072",
				sandybrown: "#f4a460",
				seagreen: "#2e8b57",
				seashell: "#fff5ee",
				sienna: "#a0522d",
				silver: "#c0c0c0",
				skyblue: "#87ceeb",
				slateblue: "#6a5acd",
				slategray: "#708090",
				slategrey: "#708090",
				snow: "#fffafa",
				springgreen: "#00ff7f",
				steelblue: "#4682b4",
				tan: "#d2b48c",
				teal: "#008080",
				thistle: "#d8bfd8",
				tomato: "#ff6347",
				turquoise: "#40e0d0",
				violet: "#ee82ee",
				wheat: "#f5deb3",
				white: "#ffffff",
				whitesmoke: "#f5f5f5",
				yellow: "#ffff00",
				yellowgreen: "#9acd32"
			};
		}));
		function inputToRGB(color) {
			let rgb = {
				r: 0,
				g: 0,
				b: 0
			};
			let a = 1;
			let s = null;
			let v = null;
			let l = null;
			let ok = false;
			let format = false;
			if (typeof color === "string") color = stringInputToObject(color);
			if (typeof color === "object") {
				if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
					rgb = rgbToRgb(color.r, color.g, color.b);
					ok = true;
					format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
				} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
					s = convertToPercentage(color.s);
					v = convertToPercentage(color.v);
					rgb = hsvToRgb(color.h, s, v);
					ok = true;
					format = "hsv";
				} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
					s = convertToPercentage(color.s);
					l = convertToPercentage(color.l);
					rgb = hslToRgb(color.h, s, l);
					ok = true;
					format = "hsl";
				} else if (isValidCSSUnit(color.c) && isValidCSSUnit(color.m) && isValidCSSUnit(color.y) && isValidCSSUnit(color.k)) {
					rgb = cmykToRgb(color.c, color.m, color.y, color.k);
					ok = true;
					format = "cmyk";
				}
				if (Object.prototype.hasOwnProperty.call(color, "a")) a = color.a;
			}
			a = boundAlpha(a);
			return {
				ok,
				format: color.format || format,
				r: Math.min(255, Math.max(rgb.r, 0)),
				g: Math.min(255, Math.max(rgb.g, 0)),
				b: Math.min(255, Math.max(rgb.b, 0)),
				a
			};
		}
		function stringInputToObject(color) {
			color = color.trim().toLowerCase();
			if (color.length === 0) return false;
			let named = false;
			if (names[color]) {
				color = names[color];
				named = true;
			} else if (color === "transparent") return {
				r: 0,
				g: 0,
				b: 0,
				a: 0,
				format: "name"
			};
			let match;
			if (typeof color === "string" && color.length <= 9 && (color.startsWith("#") || matchers.hex.test(color))) {
				match = matchers.hex8.exec(color);
				if (match) return {
					r: parseIntFromHex(match[1]),
					g: parseIntFromHex(match[2]),
					b: parseIntFromHex(match[3]),
					a: convertHexToDecimal(match[4]),
					format: named ? "name" : "hex8"
				};
				match = matchers.hex6.exec(color);
				if (match) return {
					r: parseIntFromHex(match[1]),
					g: parseIntFromHex(match[2]),
					b: parseIntFromHex(match[3]),
					format: named ? "name" : "hex"
				};
				match = matchers.hex4.exec(color);
				if (match) return {
					r: parseIntFromHex(match[1] + match[1]),
					g: parseIntFromHex(match[2] + match[2]),
					b: parseIntFromHex(match[3] + match[3]),
					a: convertHexToDecimal(match[4] + match[4]),
					format: named ? "name" : "hex8"
				};
				match = matchers.hex3.exec(color);
				if (match) return {
					r: parseIntFromHex(match[1] + match[1]),
					g: parseIntFromHex(match[2] + match[2]),
					b: parseIntFromHex(match[3] + match[3]),
					format: named ? "name" : "hex"
				};
			}
			match = matchers.rgb.exec(color);
			if (match) return {
				r: match[1],
				g: match[2],
				b: match[3]
			};
			match = matchers.rgba.exec(color);
			if (match) return {
				r: match[1],
				g: match[2],
				b: match[3],
				a: match[4]
			};
			match = matchers.hsl.exec(color);
			if (match) return {
				h: match[1],
				s: match[2],
				l: match[3]
			};
			match = matchers.hsla.exec(color);
			if (match) return {
				h: match[1],
				s: match[2],
				l: match[3],
				a: match[4]
			};
			match = matchers.hsv.exec(color);
			if (match) return {
				h: match[1],
				s: match[2],
				v: match[3]
			};
			match = matchers.hsva.exec(color);
			if (match) return {
				h: match[1],
				s: match[2],
				v: match[3],
				a: match[4]
			};
			match = matchers.cmyk.exec(color);
			if (match) return {
				c: match[1],
				m: match[2],
				y: match[3],
				k: match[4]
			};
			return false;
		}
		function isValidCSSUnit(color) {
			if (typeof color === "number") return !Number.isNaN(color);
			return matchers.CSS_UNIT.test(color);
		}
		var CSS_UNIT;
		var PERMISSIVE_MATCH3;
		var PERMISSIVE_MATCH4;
		var matchers;
		var init_format_input = __esmMin((() => {
			init_conversion();
			init_css_color_names();
			init_util();
			CSS_UNIT = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)";
			PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
			PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
			matchers = {
				hex: /^[0-9a-fA-F]+$/,
				CSS_UNIT: new RegExp(CSS_UNIT),
				rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
				rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
				hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
				hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
				hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
				hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
				cmyk: new RegExp("cmyk" + PERMISSIVE_MATCH4),
				hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			};
		}));
		var TinyColor;
		var init_module = __esmMin((() => {
			init_conversion();
			init_css_color_names();
			init_format_input();
			init_util();
			TinyColor = class TinyColor {
				constructor(color = "", opts = {}) {
					if (color instanceof TinyColor) return color;
					if (typeof color === "number") color = numberInputToObject(color);
					this.originalInput = color;
					const rgb = inputToRGB(color);
					this.originalInput = color;
					this.r = rgb.r;
					this.g = rgb.g;
					this.b = rgb.b;
					this.a = rgb.a;
					this.roundA = Math.round(100 * this.a) / 100;
					this.format = opts.format ?? rgb.format;
					this.gradientType = opts.gradientType;
					if (this.r < 1) this.r = Math.round(this.r);
					if (this.g < 1) this.g = Math.round(this.g);
					if (this.b < 1) this.b = Math.round(this.b);
					this.isValid = rgb.ok;
				}
				isDark() {
					return this.getBrightness() < 128;
				}
				isLight() {
					return !this.isDark();
				}
				getBrightness() {
					const rgb = this.toRgb();
					return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
				}
				getLuminance() {
					const rgb = this.toRgb();
					let R;
					let G;
					let B;
					const RsRGB = rgb.r / 255;
					const GsRGB = rgb.g / 255;
					const BsRGB = rgb.b / 255;
					if (RsRGB <= .03928) R = RsRGB / 12.92;
					else R = Math.pow((RsRGB + .055) / 1.055, 2.4);
					if (GsRGB <= .03928) G = GsRGB / 12.92;
					else G = Math.pow((GsRGB + .055) / 1.055, 2.4);
					if (BsRGB <= .03928) B = BsRGB / 12.92;
					else B = Math.pow((BsRGB + .055) / 1.055, 2.4);
					return .2126 * R + .7152 * G + .0722 * B;
				}
				getAlpha() {
					return this.a;
				}
				setAlpha(alpha) {
					this.a = boundAlpha(alpha);
					this.roundA = Math.round(100 * this.a) / 100;
					return this;
				}
				isMonochrome() {
					const { s } = this.toHsl();
					return s === 0;
				}
				toHsv() {
					const hsv = rgbToHsv(this.r, this.g, this.b);
					return {
						h: hsv.h * 360,
						s: hsv.s,
						v: hsv.v,
						a: this.a
					};
				}
				toHsvString() {
					const hsv = rgbToHsv(this.r, this.g, this.b);
					const h = Math.round(hsv.h * 360);
					const s = Math.round(hsv.s * 100);
					const v = Math.round(hsv.v * 100);
					return this.a === 1 ? `hsv(${h}, ${s}%, ${v}%)` : `hsva(${h}, ${s}%, ${v}%, ${this.roundA})`;
				}
				toHsl() {
					const hsl = rgbToHsl(this.r, this.g, this.b);
					return {
						h: hsl.h * 360,
						s: hsl.s,
						l: hsl.l,
						a: this.a
					};
				}
				toHslString() {
					const hsl = rgbToHsl(this.r, this.g, this.b);
					const h = Math.round(hsl.h * 360);
					const s = Math.round(hsl.s * 100);
					const l = Math.round(hsl.l * 100);
					return this.a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${this.roundA})`;
				}
				toHex(allow3Char = false) {
					return rgbToHex(this.r, this.g, this.b, allow3Char);
				}
				toHexString(allow3Char = false) {
					return "#" + this.toHex(allow3Char);
				}
				toHex8(allow4Char = false) {
					return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
				}
				toHex8String(allow4Char = false) {
					return "#" + this.toHex8(allow4Char);
				}
				toHexShortString(allowShortChar = false) {
					return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
				}
				toRgb() {
					return {
						r: Math.round(this.r),
						g: Math.round(this.g),
						b: Math.round(this.b),
						a: this.a
					};
				}
				toRgbString() {
					const r = Math.round(this.r);
					const g = Math.round(this.g);
					const b = Math.round(this.b);
					return this.a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${this.roundA})`;
				}
				toPercentageRgb() {
					const fmt = (x) => `${Math.round(bound01(x, 255) * 100)}%`;
					return {
						r: fmt(this.r),
						g: fmt(this.g),
						b: fmt(this.b),
						a: this.a
					};
				}
				toPercentageRgbString() {
					const rnd = (x) => Math.round(bound01(x, 255) * 100);
					return this.a === 1 ? `rgb(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%)` : `rgba(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%, ${this.roundA})`;
				}
				toCmyk() {
					return { ...rgbToCmyk(this.r, this.g, this.b) };
				}
				toCmykString() {
					const { c, m, y, k } = rgbToCmyk(this.r, this.g, this.b);
					return `cmyk(${c}, ${m}, ${y}, ${k})`;
				}
				toName() {
					if (this.a === 0) return "transparent";
					if (this.a < 1) return false;
					const hex = "#" + rgbToHex(this.r, this.g, this.b, false);
					for (const [key, value] of Object.entries(names)) if (hex === value) return key;
					return false;
				}
				toString(format) {
					const formatSet = Boolean(format);
					format = format ?? this.format;
					let formattedString = false;
					const hasAlpha = this.a < 1 && this.a >= 0;
					if (!formatSet && hasAlpha && (format.startsWith("hex") || format === "name")) {
						if (format === "name" && this.a === 0) return this.toName();
						return this.toRgbString();
					}
					if (format === "rgb") formattedString = this.toRgbString();
					if (format === "prgb") formattedString = this.toPercentageRgbString();
					if (format === "hex" || format === "hex6") formattedString = this.toHexString();
					if (format === "hex3") formattedString = this.toHexString(true);
					if (format === "hex4") formattedString = this.toHex8String(true);
					if (format === "hex8") formattedString = this.toHex8String();
					if (format === "name") formattedString = this.toName();
					if (format === "hsl") formattedString = this.toHslString();
					if (format === "hsv") formattedString = this.toHsvString();
					if (format === "cmyk") formattedString = this.toCmykString();
					return formattedString || this.toHexString();
				}
				toNumber() {
					return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
				}
				clone() {
					return new TinyColor(this.toString());
				}
				lighten(amount = 10) {
					const hsl = this.toHsl();
					hsl.l += amount / 100;
					hsl.l = clamp01(hsl.l);
					return new TinyColor(hsl);
				}
				brighten(amount = 10) {
					const rgb = this.toRgb();
					rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
					rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
					rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
					return new TinyColor(rgb);
				}
				darken(amount = 10) {
					const hsl = this.toHsl();
					hsl.l -= amount / 100;
					hsl.l = clamp01(hsl.l);
					return new TinyColor(hsl);
				}
				tint(amount = 10) {
					return this.mix("white", amount);
				}
				shade(amount = 10) {
					return this.mix("black", amount);
				}
				desaturate(amount = 10) {
					const hsl = this.toHsl();
					hsl.s -= amount / 100;
					hsl.s = clamp01(hsl.s);
					return new TinyColor(hsl);
				}
				saturate(amount = 10) {
					const hsl = this.toHsl();
					hsl.s += amount / 100;
					hsl.s = clamp01(hsl.s);
					return new TinyColor(hsl);
				}
				greyscale() {
					return this.desaturate(100);
				}
				spin(amount) {
					const hsl = this.toHsl();
					const hue = (hsl.h + amount) % 360;
					hsl.h = hue < 0 ? 360 + hue : hue;
					return new TinyColor(hsl);
				}
				mix(color, amount = 50) {
					const rgb1 = this.toRgb();
					const rgb2 = new TinyColor(color).toRgb();
					const p = amount / 100;
					const rgba = {
						r: (rgb2.r - rgb1.r) * p + rgb1.r,
						g: (rgb2.g - rgb1.g) * p + rgb1.g,
						b: (rgb2.b - rgb1.b) * p + rgb1.b,
						a: (rgb2.a - rgb1.a) * p + rgb1.a
					};
					return new TinyColor(rgba);
				}
				analogous(results = 6, slices = 30) {
					const hsl = this.toHsl();
					const part = 360 / slices;
					const ret = [this];
					for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
						hsl.h = (hsl.h + part) % 360;
						ret.push(new TinyColor(hsl));
					}
					return ret;
				}
				complement() {
					const hsl = this.toHsl();
					hsl.h = (hsl.h + 180) % 360;
					return new TinyColor(hsl);
				}
				monochromatic(results = 6) {
					const hsv = this.toHsv();
					const { h } = hsv;
					const { s } = hsv;
					let { v } = hsv;
					const res = [];
					const modification = 1 / results;
					while (results--) {
						res.push(new TinyColor({
							h,
							s,
							v
						}));
						v = (v + modification) % 1;
					}
					return res;
				}
				splitcomplement() {
					const hsl = this.toHsl();
					const { h } = hsl;
					return [
						this,
						new TinyColor({
							h: (h + 72) % 360,
							s: hsl.s,
							l: hsl.l
						}),
						new TinyColor({
							h: (h + 216) % 360,
							s: hsl.s,
							l: hsl.l
						})
					];
				}
				onBackground(background) {
					const fg = this.toRgb();
					const bg = new TinyColor(background).toRgb();
					const alpha = fg.a + bg.a * (1 - fg.a);
					return new TinyColor({
						r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
						g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
						b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
						a: alpha
					});
				}
				triad() {
					return this.polyad(3);
				}
				tetrad() {
					return this.polyad(4);
				}
				polyad(n) {
					const hsl = this.toHsl();
					const { h } = hsl;
					const result = [this];
					const increment = 360 / n;
					for (let i = 1; i < n; i++) result.push(new TinyColor({
						h: (h + i * increment) % 360,
						s: hsl.s,
						l: hsl.l
					}));
					return result;
				}
				equals(color) {
					const comparedColor = new TinyColor(color);
					if (this.format === "cmyk" || comparedColor.format === "cmyk") return this.toCmykString() === comparedColor.toCmykString();
					return this.toRgbString() === comparedColor.toRgbString();
				}
			};
		}));
		var init_readability = __esmMin((() => {}));
		var init_to_ms_filter = __esmMin((() => {}));
		var init_from_ratio = __esmMin((() => {}));
		var init_random = __esmMin((() => {}));
		var init_interfaces = __esmMin((() => {}));
		var init_public_api = __esmMin((() => {
			init_module();
			init_css_color_names();
			init_readability();
			init_to_ms_filter();
			init_from_ratio();
			init_format_input();
			init_random();
			init_interfaces();
			init_conversion();
		}));
		function darken(color, amount = 20) {
			return color.mix("#141414", amount).toString();
		}
		function useButtonCustomStyle(props) {
			const _disabled = useFormDisabled();
			const ns = useNamespace("button");
			return computed(() => {
				let styles = {};
				let buttonColor = props.color;
				if (buttonColor) {
					const match = buttonColor.match(/var\((.*?)\)/);
					if (match) buttonColor = window.getComputedStyle(window.document.documentElement).getPropertyValue(match[1]);
					const color = new TinyColor(buttonColor);
					const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
					if (props.plain) {
						styles = ns.cssVarBlock({
							"bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
							"text-color": buttonColor,
							"border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
							"hover-text-color": `var(${ns.cssVarName("color-white")})`,
							"hover-bg-color": buttonColor,
							"hover-border-color": buttonColor,
							"active-bg-color": activeBgColor,
							"active-text-color": `var(${ns.cssVarName("color-white")})`,
							"active-border-color": activeBgColor
						});
						if (_disabled.value) {
							styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
							styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
							styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
						}
					} else if (props.link || props.text) {
						const hoverColor = props.dark ? darken(color, 30) : color.tint(30).toString();
						styles = ns.cssVarBlock({
							"text-color": buttonColor,
							"hover-text-color": hoverColor,
							"active-text-color": activeBgColor
						});
						if (props.link) {
							styles[ns.cssVarBlockName("hover-link-text-color")] = hoverColor;
							styles[ns.cssVarBlockName("active-color")] = activeBgColor;
						}
						if (_disabled.value) {
							const disabledColor = props.dark ? darken(color, 50) : color.tint(50).toString();
							styles[ns.cssVarBlockName("disabled-bg-color")] = "transparent";
							styles[ns.cssVarBlockName("disabled-text-color")] = disabledColor;
							styles[ns.cssVarBlockName("disabled-border-color")] = "transparent";
						}
					} else {
						const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
						const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
						styles = ns.cssVarBlock({
							"bg-color": buttonColor,
							"text-color": textColor,
							"border-color": buttonColor,
							"hover-bg-color": hoverBgColor,
							"hover-text-color": textColor,
							"hover-border-color": hoverBgColor,
							"active-bg-color": activeBgColor,
							"active-border-color": activeBgColor
						});
						if (_disabled.value) {
							const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
							styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
							styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
							styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
						}
					}
				}
				return styles;
			});
		}
		var init_button_custom = __esmMin((() => {
			init_use_namespace();
			init_use_form_common_props();
			init_vue_runtime_esm_bundler();
			init_public_api();
		}));
		var button_vue_vue_type_script_setup_true_lang_default;
		var init_button_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_namespace();
			init_icon();
			init_button$1();
			init_use_button();
			init_button_custom();
			init_vue_runtime_esm_bundler();
			button_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElButton",
				__name: "button",
				props: buttonProps,
				emits: buttonEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					const buttonStyle = useButtonCustomStyle(props);
					const ns = useNamespace("button");
					const { _ref, _size, _type, _disabled, _props, _plain, _round, _text, _dashed, shouldAddSpace, handleClick } = useButton(props, emit);
					const buttonKls = computed(() => [
						ns.b(),
						ns.m(_type.value),
						ns.m(_size.value),
						ns.is("disabled", _disabled.value),
						ns.is("loading", props.loading),
						ns.is("plain", _plain.value),
						ns.is("round", _round.value),
						ns.is("circle", props.circle),
						ns.is("text", _text.value),
						ns.is("dashed", _dashed.value),
						ns.is("link", props.link),
						ns.is("has-bg", props.bg)
					]);
					__expose({
						ref: _ref,
						size: _size,
						type: _type,
						disabled: _disabled,
						shouldAddSpace
					});
					return (_ctx, _cache) => {
						return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({
							ref_key: "_ref",
							ref: _ref
						}, unref(_props), {
							class: buttonKls.value,
							style: unref(buttonStyle),
							onClick: unref(handleClick)
						}), {
							default: withCtx(() => [__props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
								key: 1,
								class: normalizeClass(unref(ns).is("loading"))
							}, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.loadingIcon)))]),
								_: 1
							}, 8, ["class"]))], 64)) : __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
								default: withCtx(() => [__props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })]),
								_: 3
							})) : createCommentVNode("v-if", true), _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
								key: 2,
								class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
							}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("v-if", true)]),
							_: 3
						}, 16, [
							"class",
							"style",
							"onClick"
						]);
					};
				}
			});
		}));
		var button_default;
		var init_button2 = __esmMin((() => {
			init_button_vue_vue_type_script_setup_true_lang();
			button_default = button_vue_vue_type_script_setup_true_lang_default;
		}));
		var buttonGroupProps;
		var init_button_group = __esmMin((() => {
			init_runtime();
			init_button$1();
			buttonGroupProps = {
				size: buttonProps.size,
				type: buttonProps.type,
				direction: {
					type: definePropType(String),
					values: ["horizontal", "vertical"],
					default: "horizontal"
				}
			};
		}));
		var button_group_vue_vue_type_script_setup_true_lang_default;
		var init_button_group_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_namespace();
			init_constants$2();
			init_button_group();
			init_vue_runtime_esm_bundler();
			button_group_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElButtonGroup",
				__name: "button-group",
				props: buttonGroupProps,
				setup(__props) {
					const props = __props;
					provide(buttonGroupContextKey, reactive({
						size: toRef(props, "size"),
						type: toRef(props, "type")
					}));
					const ns = useNamespace("button");
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", { class: normalizeClass([unref(ns).b("group"), unref(ns).bm("group", props.direction)]) }, [renderSlot(_ctx.$slots, "default")], 2);
					};
				}
			});
		}));
		var button_group_default;
		var init_button_group2 = __esmMin((() => {
			init_button_group_vue_vue_type_script_setup_true_lang();
			button_group_default = button_group_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElButton;
		var init_button = __esmMin((() => {
			init_install();
			init_button2();
			init_button_group2();
			ElButton = withInstall(button_default, { ButtonGroup: button_group_default });
			withNoopInstall(button_group_default);
		}));
		var require_dayjs_min = __commonJSMin(((exports$1, module$1) => {
			(function(t, e) {
				"object" == typeof exports$1 && "undefined" != typeof module$1 ? module$1.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
			})(exports$1, (function() {
				"use strict";
				var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
					name: "en",
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					ordinal: function(t) {
						var e = [
							"th",
							"st",
							"nd",
							"rd"
						], n = t % 100;
						return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
					}
				}, m = function(t, e, n) {
					var r = String(t);
					return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
				}, v = {
					s: m,
					z: function(t) {
						var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
						return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
					},
					m: function t(e, n) {
						if (e.date() < n.date()) return -t(n, e);
						var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
						return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
					},
					a: function(t) {
						return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
					},
					p: function(t) {
						return {
							M: c,
							y: h,
							w: o,
							d: a,
							D: d,
							h: u,
							m: s,
							s: i,
							ms: r,
							Q: f
						}[t] || String(t || "").toLowerCase().replace(/s$/, "");
					},
					u: function(t) {
						return void 0 === t;
					}
				}, g = "en", D = {};
				D[g] = M;
				var p = "$isDayjsObject", S = function(t) {
					return t instanceof _ || !(!t || !t[p]);
				}, w = function t(e, n, r) {
					var i;
					if (!e) return g;
					if ("string" == typeof e) {
						var s = e.toLowerCase();
						D[s] && (i = s), n && (D[s] = n, i = s);
						var u = e.split("-");
						if (!i && u.length > 1) return t(u[0]);
					} else {
						var a = e.name;
						D[a] = e, i = a;
					}
					return !r && i && (g = i), i || !r && g;
				}, O = function(t, e) {
					if (S(t)) return t.clone();
					var n = "object" == typeof e ? e : {};
					return n.date = t, n.args = arguments, new _(n);
				}, b = v;
				b.l = w, b.i = S, b.w = function(t, e) {
					return O(t, {
						locale: e.$L,
						utc: e.$u,
						x: e.$x,
						$offset: e.$offset
					});
				};
				var _ = function() {
					function M(t) {
						this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
					}
					var m = M.prototype;
					return m.parse = function(t) {
						this.$d = function(t) {
							var e = t.date, n = t.utc;
							if (null === e) return new Date(NaN);
							if (b.u(e)) return new Date();
							if (e instanceof Date) return new Date(e);
							if ("string" == typeof e && !/Z$/i.test(e)) {
								var r = e.match($);
								if (r) {
									var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
									return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
								}
							}
							return new Date(e);
						}(t), this.init();
					}, m.init = function() {
						var t = this.$d;
						this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
					}, m.$utils = function() {
						return b;
					}, m.isValid = function() {
						return !(this.$d.toString() === l);
					}, m.isSame = function(t, e) {
						var n = O(t);
						return this.startOf(e) <= n && n <= this.endOf(e);
					}, m.isAfter = function(t, e) {
						return O(t) < this.startOf(e);
					}, m.isBefore = function(t, e) {
						return this.endOf(e) < O(t);
					}, m.$g = function(t, e, n) {
						return b.u(t) ? this[e] : this.set(n, t);
					}, m.unix = function() {
						return Math.floor(this.valueOf() / 1e3);
					}, m.valueOf = function() {
						return this.$d.getTime();
					}, m.startOf = function(t, e) {
						var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
							var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
							return r ? i : i.endOf(a);
						}, $ = function(t, e) {
							return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
								0,
								0,
								0,
								0
							] : [
								23,
								59,
								59,
								999
							]).slice(e)), n);
						}, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
						switch (f) {
							case h: return r ? l(1, 0) : l(31, 11);
							case c: return r ? l(1, M) : l(0, M + 1);
							case o:
								var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
								return l(r ? m - D : m + (6 - D), M);
							case a:
							case d: return $(v + "Hours", 0);
							case u: return $(v + "Minutes", 1);
							case s: return $(v + "Seconds", 2);
							case i: return $(v + "Milliseconds", 3);
							default: return this.clone();
						}
					}, m.endOf = function(t) {
						return this.startOf(t, !1);
					}, m.$set = function(t, e) {
						var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
						if (o === c || o === h) {
							var y = this.clone().set(d, 1);
							y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
						} else l && this.$d[l]($);
						return this.init(), this;
					}, m.set = function(t, e) {
						return this.clone().$set(t, e);
					}, m.get = function(t) {
						return this[b.p(t)]();
					}, m.add = function(r, f) {
						var d, l = this;
						r = Number(r);
						var $ = b.p(f), y = function(t) {
							var e = O(l);
							return b.w(e.date(e.date() + Math.round(t * r)), l);
						};
						if ($ === c) return this.set(c, this.$M + r);
						if ($ === h) return this.set(h, this.$y + r);
						if ($ === a) return y(1);
						if ($ === o) return y(7);
						var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
						return b.w(m, this);
					}, m.subtract = function(t, e) {
						return this.add(-1 * t, e);
					}, m.format = function(t) {
						var e = this, n = this.$locale();
						if (!this.isValid()) return n.invalidDate || l;
						var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
							return t && (t[n] || t(e, r)) || i[n].slice(0, s);
						}, d = function(t) {
							return b.s(s % 12 || 12, t, "0");
						}, $ = f || function(t, e, n) {
							var r = t < 12 ? "AM" : "PM";
							return n ? r.toLowerCase() : r;
						};
						return r.replace(y, (function(t, r) {
							return r || function(t) {
								switch (t) {
									case "YY": return String(e.$y).slice(-2);
									case "YYYY": return b.s(e.$y, 4, "0");
									case "M": return a + 1;
									case "MM": return b.s(a + 1, 2, "0");
									case "MMM": return h(n.monthsShort, a, c, 3);
									case "MMMM": return h(c, a);
									case "D": return e.$D;
									case "DD": return b.s(e.$D, 2, "0");
									case "d": return String(e.$W);
									case "dd": return h(n.weekdaysMin, e.$W, o, 2);
									case "ddd": return h(n.weekdaysShort, e.$W, o, 3);
									case "dddd": return o[e.$W];
									case "H": return String(s);
									case "HH": return b.s(s, 2, "0");
									case "h": return d(1);
									case "hh": return d(2);
									case "a": return $(s, u, !0);
									case "A": return $(s, u, !1);
									case "m": return String(u);
									case "mm": return b.s(u, 2, "0");
									case "s": return String(e.$s);
									case "ss": return b.s(e.$s, 2, "0");
									case "SSS": return b.s(e.$ms, 3, "0");
									case "Z": return i;
								}
								return null;
							}(t) || i.replace(":", "");
						}));
					}, m.utcOffset = function() {
						return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
					}, m.diff = function(r, d, l) {
						var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
							return b.m(y, m);
						};
						switch (M) {
							case h:
								$ = D() / 12;
								break;
							case c:
								$ = D();
								break;
							case f:
								$ = D() / 3;
								break;
							case o:
								$ = (g - v) / 6048e5;
								break;
							case a:
								$ = (g - v) / 864e5;
								break;
							case u:
								$ = g / n;
								break;
							case s:
								$ = g / e;
								break;
							case i:
								$ = g / t;
								break;
							default: $ = g;
						}
						return l ? $ : b.a($);
					}, m.daysInMonth = function() {
						return this.endOf(c).$D;
					}, m.$locale = function() {
						return D[this.$L];
					}, m.locale = function(t, e) {
						if (!t) return this.$L;
						var n = this.clone(), r = w(t, e, !0);
						return r && (n.$L = r), n;
					}, m.clone = function() {
						return b.w(this.$d, this);
					}, m.toDate = function() {
						return new Date(this.valueOf());
					}, m.toJSON = function() {
						return this.isValid() ? this.toISOString() : null;
					}, m.toISOString = function() {
						return this.$d.toISOString();
					}, m.toString = function() {
						return this.$d.toUTCString();
					}, M;
				}(), Y = _.prototype;
				return O.prototype = Y, [
					["$ms", r],
					["$s", i],
					["$m", s],
					["$H", u],
					["$W", a],
					["$M", c],
					["$y", h],
					["$D", d]
				].forEach((function(t) {
					Y[t[1]] = function(e) {
						return this.$g(e, t[0], t[1]);
					};
				})), O.extend = function(t, e) {
					return t.$i || (t(e, _, O), t.$i = !0), O;
				}, O.locale = w, O.isDayjs = S, O.unix = function(t) {
					return O(1e3 * t);
				}, O.en = D[g], O.Ls = D, O.p = {}, O;
			}));
		}));
		function createDocumentHandler(el, binding) {
			let excludes = [];
			if (isArray$1(binding.arg)) excludes = binding.arg;
			else if (isElement(binding.arg)) excludes.push(binding.arg);
			return function(mouseup, mousedown) {
				const popperRef = binding.instance.popperRef;
				const mouseUpTarget = mouseup.target;
				const mouseDownTarget = mousedown?.target;
				const isBound = !binding || !binding.instance;
				const isTargetExists = !mouseUpTarget || !mouseDownTarget;
				const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
				const isSelf = el === mouseUpTarget;
				const isTargetExcluded = excludes.length && excludes.some((item) => item?.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
				const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
				if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) return;
				binding.value(mouseup, mousedown);
			};
		}
		var nodeList;
		var ClickOutside;
		var init_click_outside = __esmMin((() => {
			init_browser();
			init_types();
			nodeList = new Map();
			if (isClient) {
				let startClick;
				document.addEventListener("mousedown", (e) => startClick = e);
				document.addEventListener("mouseup", (e) => {
					if (startClick) {
						for (const handlers of nodeList.values()) for (const { documentHandler } of handlers) documentHandler(e, startClick);
						startClick = void 0;
					}
				});
			}
			ClickOutside = {
				beforeMount(el, binding) {
					if (!nodeList.has(el)) nodeList.set(el, []);
					nodeList.get(el).push({
						documentHandler: createDocumentHandler(el, binding),
						bindingFn: binding.value
					});
				},
				updated(el, binding) {
					if (!nodeList.has(el)) nodeList.set(el, []);
					const handlers = nodeList.get(el);
					const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
					const newHandler = {
						documentHandler: createDocumentHandler(el, binding),
						bindingFn: binding.value
					};
					if (oldHandlerIndex >= 0) handlers.splice(oldHandlerIndex, 1, newHandler);
					else handlers.push(newHandler);
				},
				unmounted(el) {
					nodeList.delete(el);
				}
			};
		}));
		var SCOPE;
		var vRepeatClick;
		var init_repeat_click = __esmMin((() => {
			init_types();
			SCOPE = "_RepeatClick";
			vRepeatClick = {
				beforeMount(el, binding) {
					const value = binding.value;
					const { interval = 100, delay = 600 } = isFunction$1(value) ? {} : value;
					let intervalId;
					let delayId;
					const handler = () => isFunction$1(value) ? value() : value.handler();
					const clear = () => {
						if (delayId) {
							clearTimeout(delayId);
							delayId = void 0;
						}
						if (intervalId) {
							clearInterval(intervalId);
							intervalId = void 0;
						}
					};
					const start = (evt) => {
						if (evt.button !== 0) return;
						clear();
						handler();
						document.addEventListener("mouseup", clear, {
							once: true,
							capture: true
						});
						delayId = setTimeout(() => {
							intervalId = setInterval(() => {
								handler();
							}, interval);
						}, delay);
					};
					el[SCOPE] = {
						start,
						clear
					};
					el.addEventListener("mousedown", start);
				},
				unmounted(el) {
					if (!el[SCOPE]) return;
					const { start, clear } = el[SCOPE];
					if (start) el.removeEventListener("mousedown", start);
					if (clear) {
						clear();
						document.removeEventListener("mouseup", clear, true);
					}
					el[SCOPE] = null;
				}
			};
		}));
		var cardProps;
		var init_card$1 = __esmMin((() => {
			init_runtime();
			cardProps = buildProps({
				header: {
					type: String,
					default: ""
				},
				footer: {
					type: String,
					default: ""
				},
				bodyStyle: {
					type: definePropType([
						String,
						Object,
						Array,
						Boolean
					]),
					default: ""
				},
				headerClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				bodyClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				footerClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				shadow: {
					type: String,
					values: [
						"always",
						"hover",
						"never"
					],
					default: void 0
				}
			});
		}));
		var card_vue_vue_type_script_setup_true_lang_default;
		var init_card_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_namespace();
			init_use_global_config();
			init_card$1();
			init_vue_runtime_esm_bundler();
			card_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElCard",
				__name: "card",
				props: cardProps,
				setup(__props) {
					const globalConfig = useGlobalConfig("card");
					const ns = useNamespace("card");
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", { class: normalizeClass([unref(ns).b(), unref(ns).is(`${__props.shadow || unref(globalConfig)?.shadow || "always"}-shadow`)]) }, [
							_ctx.$slots.header || __props.header ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass([unref(ns).e("header"), __props.headerClass])
							}, [renderSlot(_ctx.$slots, "header", {}, () => [createTextVNode(toDisplayString(__props.header), 1)])], 2)) : createCommentVNode("v-if", true),
							createBaseVNode("div", {
								class: normalizeClass([unref(ns).e("body"), __props.bodyClass]),
								style: normalizeStyle(__props.bodyStyle)
							}, [renderSlot(_ctx.$slots, "default")], 6),
							_ctx.$slots.footer || __props.footer ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass([unref(ns).e("footer"), __props.footerClass])
							}, [renderSlot(_ctx.$slots, "footer", {}, () => [createTextVNode(toDisplayString(__props.footer), 1)])], 2)) : createCommentVNode("v-if", true)
						], 2);
					};
				}
			});
		}));
		var card_default;
		var init_card2 = __esmMin((() => {
			init_card_vue_vue_type_script_setup_true_lang();
			card_default = card_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElCard;
		var init_card = __esmMin((() => {
			init_install();
			init_card2();
			ElCard = withInstall(card_default);
		}));
		var useWheel;
		var init_use_wheel = __esmMin((() => {
			init_browser();
			init_raf();
			useWheel = ({ atEndEdge, atStartEdge, layout }, onWheelDelta) => {
				let frameHandle;
				let offset = 0;
				const hasReachedEdge = (offset) => {
					return offset < 0 && atStartEdge.value || offset > 0 && atEndEdge.value;
				};
				const onWheel = (e) => {
					cAF(frameHandle);
					let { deltaX, deltaY } = e;
					if (e.shiftKey && deltaY !== 0) {
						deltaX = deltaY;
						deltaY = 0;
					}
					const newOffset = layout.value === "horizontal" ? deltaX : deltaY;
					if (hasReachedEdge(newOffset)) return;
					offset += newOffset;
					if (!isFirefox() && newOffset !== 0) e.preventDefault();
					frameHandle = rAF(() => {
						onWheelDelta(offset);
						offset = 0;
					});
				};
				return {
					hasReachedEdge,
					onWheel
				};
			};
		}));
		var collapse_transition_vue_vue_type_script_setup_true_lang_default;
		var init_collapse_transition_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_namespace();
			init_vue_runtime_esm_bundler();
			collapse_transition_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElCollapseTransition",
				__name: "collapse-transition",
				setup(__props) {
					const ns = useNamespace("collapse-transition");
					const reset = (el) => {
						el.style.maxHeight = "";
						el.style.overflow = el.dataset.oldOverflow;
						el.style.paddingTop = el.dataset.oldPaddingTop;
						el.style.paddingBottom = el.dataset.oldPaddingBottom;
					};
					const on = {
						beforeEnter(el) {
							if (!el.dataset) el.dataset = {};
							el.dataset.oldPaddingTop = el.style.paddingTop;
							el.dataset.oldPaddingBottom = el.style.paddingBottom;
							if (el.style.height) el.dataset.elExistsHeight = el.style.height;
							el.style.maxHeight = 0;
							el.style.paddingTop = 0;
							el.style.paddingBottom = 0;
						},
						enter(el) {
							requestAnimationFrame(() => {
								el.dataset.oldOverflow = el.style.overflow;
								if (el.dataset.elExistsHeight) el.style.maxHeight = el.dataset.elExistsHeight;
								else if (el.scrollHeight !== 0) el.style.maxHeight = `${el.scrollHeight}px`;
								else el.style.maxHeight = 0;
								el.style.paddingTop = el.dataset.oldPaddingTop;
								el.style.paddingBottom = el.dataset.oldPaddingBottom;
								el.style.overflow = "hidden";
							});
						},
						afterEnter(el) {
							el.style.maxHeight = "";
							el.style.overflow = el.dataset.oldOverflow;
						},
						enterCancelled(el) {
							reset(el);
						},
						beforeLeave(el) {
							if (!el.dataset) el.dataset = {};
							el.dataset.oldPaddingTop = el.style.paddingTop;
							el.dataset.oldPaddingBottom = el.style.paddingBottom;
							el.dataset.oldOverflow = el.style.overflow;
							el.style.maxHeight = `${el.scrollHeight}px`;
							el.style.overflow = "hidden";
						},
						leave(el) {
							if (el.scrollHeight !== 0) {
								el.style.maxHeight = 0;
								el.style.paddingTop = 0;
								el.style.paddingBottom = 0;
							}
						},
						afterLeave(el) {
							reset(el);
						},
						leaveCancelled(el) {
							reset(el);
						}
					};
					return (_ctx, _cache) => {
						return openBlock(), createBlock(Transition, mergeProps({ name: unref(ns).b() }, toHandlers(on)), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16, ["name"]);
					};
				}
			});
		}));
		var collapse_transition_default;
		var init_collapse_transition$1 = __esmMin((() => {
			init_collapse_transition_vue_vue_type_script_setup_true_lang();
			collapse_transition_default = collapse_transition_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElCollapseTransition;
		var init_collapse_transition = __esmMin((() => {
			init_install();
			init_collapse_transition$1();
			ElCollapseTransition = withInstall(collapse_transition_default);
		}));
		var colorPickerPanelProps;
		var colorPickerPanelEmits;
		var ROOT_COMMON_COLOR_INJECTION_KEY;
		var colorPickerPanelContextKey;
		var init_color_picker_panel$1 = __esmMin((() => {
			init_event$1();
			init_types();
			init_runtime();
			init_import();
			colorPickerPanelProps = buildProps({
				modelValue: {
					type: definePropType(String),
					default: void 0
				},
				border: {
					type: Boolean,
					default: true
				},
				showAlpha: Boolean,
				colorFormat: { type: definePropType(String) },
				disabled: Boolean,
				predefine: { type: definePropType(Array) },
				validateEvent: {
					type: Boolean,
					default: true
				},
				hueSliderClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				hueSliderStyle: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				}
			});
			colorPickerPanelEmits = { [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNil(val) };
			ROOT_COMMON_COLOR_INJECTION_KEY = Symbol("colorCommonPickerKey");
			colorPickerPanelContextKey = Symbol("colorPickerPanelContextKey");
		}));
		var alphaSliderProps;
		var hueSliderProps;
		var init_slider = __esmMin((() => {
			init_runtime();
			alphaSliderProps = buildProps({
				color: {
					type: definePropType(Object),
					required: true
				},
				vertical: Boolean,
				disabled: Boolean
			});
			hueSliderProps = alphaSliderProps;
		}));
		var getClientXY;
		var init_position = __esmMin((() => {
			getClientXY = (event) => {
				let clientX;
				let clientY;
				if (event.type === "touchend") {
					clientY = event.changedTouches[0].clientY;
					clientX = event.changedTouches[0].clientX;
				} else if (event.type.startsWith("touch")) {
					clientY = event.touches[0].clientY;
					clientX = event.touches[0].clientX;
				} else {
					clientY = event.clientY;
					clientX = event.clientX;
				}
				return {
					clientX,
					clientY
				};
			};
		}));
		function draggable(element, options) {
			if (!isClient) return;
			const moveFn = function(event) {
				options.drag?.(event);
			};
			const upFn = function(event) {
				document.removeEventListener("mousemove", moveFn);
				document.removeEventListener("mouseup", upFn);
				document.removeEventListener("touchmove", moveFn);
				document.removeEventListener("touchend", upFn);
				document.onselectstart = null;
				document.ondragstart = null;
				isDragging = false;
				options.end?.(event);
			};
			const downFn = function(event) {
				if (isDragging) return;
				document.onselectstart = () => false;
				document.ondragstart = () => false;
				document.addEventListener("mousemove", moveFn);
				document.addEventListener("mouseup", upFn);
				document.addEventListener("touchmove", moveFn);
				document.addEventListener("touchend", upFn);
				isDragging = true;
				options.start?.(event);
			};
			element.addEventListener("mousedown", downFn);
			element.addEventListener("touchstart", downFn, { passive: false });
		}
		var isDragging;
		var init_draggable = __esmMin((() => {
			init_browser();
			isDragging = false;
		}));
		var useSlider;
		var useSliderDOM;
		var init_use_slider = __esmMin((() => {
			init_aria$1();
			init_event();
			init_position();
			init_style$1();
			init_use_namespace();
			init_draggable();
			init_vue_runtime_esm_bundler();
			useSlider = (props, { key, minValue, maxValue }) => {
				const instance = getCurrentInstance();
				const thumb = shallowRef();
				const bar = shallowRef();
				const currentValue = computed(() => props.color.get(key));
				function handleClick(event) {
					if (props.disabled) return;
					if (event.target !== thumb.value) handleDrag(event);
					thumb.value?.focus();
				}
				function handleDrag(event) {
					if (!bar.value || !thumb.value || props.disabled) return;
					const rect = instance.vnode.el.getBoundingClientRect();
					const { clientX, clientY } = getClientXY(event);
					let value;
					if (!props.vertical) {
						let left = clientX - rect.left;
						left = Math.max(thumb.value.offsetWidth / 2, left);
						left = Math.min(left, rect.width - thumb.value.offsetWidth / 2);
						value = Math.round((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth) * maxValue);
					} else {
						let top = clientY - rect.top;
						top = Math.max(thumb.value.offsetHeight / 2, top);
						top = Math.min(top, rect.height - thumb.value.offsetHeight / 2);
						value = Math.round((top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight) * maxValue);
					}
					props.color.set(key, value);
				}
				function handleKeydown(event) {
					if (props.disabled) return;
					const { shiftKey } = event;
					const code = getEventCode(event);
					const step = shiftKey ? 10 : 1;
					const reverse = key === "hue" ? -1 : 1;
					let isPreventDefault = true;
					switch (code) {
						case EVENT_CODE.left:
						case EVENT_CODE.down:
							incrementPosition(-step * reverse);
							break;
						case EVENT_CODE.right:
						case EVENT_CODE.up:
							incrementPosition(step * reverse);
							break;
						case EVENT_CODE.home:
							props.color.set(key, key === "hue" ? maxValue : minValue);
							break;
						case EVENT_CODE.end:
							props.color.set(key, key === "hue" ? minValue : maxValue);
							break;
						case EVENT_CODE.pageDown:
							incrementPosition(-4 * reverse);
							break;
						case EVENT_CODE.pageUp:
							incrementPosition(4 * reverse);
							break;
						default: isPreventDefault = false;
					}
					isPreventDefault && event.preventDefault();
				}
				function incrementPosition(step) {
					let next = currentValue.value + step;
					next = next < minValue ? minValue : next > maxValue ? maxValue : next;
					props.color.set(key, next);
				}
				return {
					thumb,
					bar,
					currentValue,
					handleDrag,
					handleClick,
					handleKeydown
				};
			};
			useSliderDOM = (props, { namespace, maxValue, bar, thumb, currentValue, handleDrag, getBackground }) => {
				const instance = getCurrentInstance();
				const ns = useNamespace(namespace);
				const thumbLeft = ref(0);
				const thumbTop = ref(0);
				const background = ref();
				function getThumbLeft() {
					if (!thumb.value) return 0;
					if (props.vertical) return 0;
					const el = instance.vnode.el;
					const value = currentValue.value;
					if (!el) return 0;
					return Math.round(value * (el.offsetWidth - thumb.value.offsetWidth / 2) / maxValue);
				}
				function getThumbTop() {
					if (!thumb.value) return 0;
					const el = instance.vnode.el;
					if (!props.vertical) return 0;
					const value = currentValue.value;
					if (!el) return 0;
					return Math.round(value * (el.offsetHeight - thumb.value.offsetHeight / 2) / maxValue);
				}
				function update() {
					thumbLeft.value = getThumbLeft();
					thumbTop.value = getThumbTop();
					background.value = getBackground?.();
				}
				onMounted(() => {
					if (!bar.value || !thumb.value) return;
					const dragConfig = {
						drag: (event) => {
							handleDrag(event);
						},
						end: (event) => {
							handleDrag(event);
						}
					};
					draggable(bar.value, dragConfig);
					draggable(thumb.value, dragConfig);
					update();
				});
				watch(currentValue, () => update());
				watch(() => props.color.value, () => update());
				const rootKls = computed(() => [
					ns.b(),
					ns.is("vertical", props.vertical),
					ns.is("disabled", props.disabled)
				]);
				const barKls = computed(() => ns.e("bar"));
				const thumbKls = computed(() => ns.e("thumb"));
				return {
					rootKls,
					barKls,
					barStyle: computed(() => ({ background: background.value })),
					thumbKls,
					thumbStyle: computed(() => ({
						left: addUnit(thumbLeft.value),
						top: addUnit(thumbTop.value)
					})),
					thumbLeft,
					thumbTop,
					update
				};
			};
		}));
		var _hoisted_1$15;
		var minValue$1;
		var maxValue$1;
		var alpha_slider_vue_vue_type_script_setup_true_lang_default;
		var init_alpha_slider_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_locale();
			init_slider();
			init_use_slider();
			init_vue_runtime_esm_bundler();
			_hoisted_1$15 = [
				"aria-label",
				"aria-valuenow",
				"aria-valuetext",
				"aria-orientation",
				"tabindex",
				"aria-disabled"
			];
			minValue$1 = 0;
			maxValue$1 = 100;
			alpha_slider_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElColorAlphaSlider",
				__name: "alpha-slider",
				props: alphaSliderProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const { currentValue, bar, thumb, handleDrag, handleClick, handleKeydown } = useSlider(props, {
						key: "alpha",
						minValue: minValue$1,
						maxValue: maxValue$1
					});
					const { rootKls, barKls, barStyle, thumbKls, thumbStyle, update } = useSliderDOM(props, {
						namespace: "color-alpha-slider",
						maxValue: maxValue$1,
						currentValue,
						bar,
						thumb,
						handleDrag,
						getBackground
					});
					const { t } = useLocale();
					const ariaLabel = computed(() => t("el.colorpicker.alphaLabel"));
					const ariaValuetext = computed(() => {
						return t("el.colorpicker.alphaDescription", {
							alpha: currentValue.value,
							color: props.color.value
						});
					});
					function getBackground() {
						if (props.color && props.color.value) {
							const { r, g, b } = props.color.toRgb();
							return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
						}
						return "";
					}
					__expose({
						update,
						bar,
						thumb
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", { class: normalizeClass(unref(rootKls)) }, [createBaseVNode("div", {
							ref_key: "bar",
							ref: bar,
							class: normalizeClass(unref(barKls)),
							style: normalizeStyle(unref(barStyle)),
							onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClick) && unref(handleClick)(...args))
						}, null, 6), createBaseVNode("div", {
							ref_key: "thumb",
							ref: thumb,
							class: normalizeClass(unref(thumbKls)),
							style: normalizeStyle(unref(thumbStyle)),
							"aria-label": ariaLabel.value,
							"aria-valuenow": unref(currentValue),
							"aria-valuetext": ariaValuetext.value,
							"aria-orientation": __props.vertical ? "vertical" : "horizontal",
							"aria-valuemin": minValue$1,
							"aria-valuemax": maxValue$1,
							role: "slider",
							tabindex: __props.disabled ? void 0 : 0,
							"aria-disabled": __props.disabled,
							onKeydown: _cache[1] || (_cache[1] = (...args) => unref(handleKeydown) && unref(handleKeydown)(...args))
						}, null, 46, _hoisted_1$15)], 2);
					};
				}
			});
		}));
		var alpha_slider_default;
		var init_alpha_slider = __esmMin((() => {
			init_alpha_slider_vue_vue_type_script_setup_true_lang();
			alpha_slider_default = alpha_slider_vue_vue_type_script_setup_true_lang_default;
		}));
		var _hoisted_1$14;
		var minValue;
		var maxValue;
		var hue_slider_vue_vue_type_script_setup_true_lang_default;
		var init_hue_slider_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_locale();
			init_slider();
			init_use_slider();
			init_vue_runtime_esm_bundler();
			_hoisted_1$14 = [
				"aria-label",
				"aria-valuenow",
				"aria-valuetext",
				"aria-orientation",
				"tabindex",
				"aria-disabled"
			];
			minValue = 0;
			maxValue = 360;
			hue_slider_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElColorHueSlider",
				__name: "hue-slider",
				props: hueSliderProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const { currentValue, bar, thumb, handleDrag, handleClick, handleKeydown } = useSlider(props, {
						key: "hue",
						minValue,
						maxValue
					});
					const { rootKls, barKls, thumbKls, thumbStyle, thumbTop, update } = useSliderDOM(props, {
						namespace: "color-hue-slider",
						maxValue,
						currentValue,
						bar,
						thumb,
						handleDrag
					});
					const { t } = useLocale();
					const ariaLabel = computed(() => t("el.colorpicker.hueLabel"));
					const ariaValuetext = computed(() => {
						return t("el.colorpicker.hueDescription", {
							hue: currentValue.value,
							color: props.color.value
						});
					});
					__expose({
						bar,
						thumb,
						thumbTop,
						update
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", { class: normalizeClass(unref(rootKls)) }, [createBaseVNode("div", {
							ref_key: "bar",
							ref: bar,
							class: normalizeClass(unref(barKls)),
							onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClick) && unref(handleClick)(...args))
						}, null, 2), createBaseVNode("div", {
							ref_key: "thumb",
							ref: thumb,
							class: normalizeClass(unref(thumbKls)),
							style: normalizeStyle(unref(thumbStyle)),
							"aria-label": ariaLabel.value,
							"aria-valuenow": unref(currentValue),
							"aria-valuetext": ariaValuetext.value,
							"aria-orientation": __props.vertical ? "vertical" : "horizontal",
							"aria-valuemin": minValue,
							"aria-valuemax": maxValue,
							role: "slider",
							tabindex: __props.disabled ? void 0 : 0,
							"aria-disabled": __props.disabled,
							onKeydown: _cache[1] || (_cache[1] = (...args) => unref(handleKeydown) && unref(handleKeydown)(...args))
						}, null, 46, _hoisted_1$14)], 2);
					};
				}
			});
		}));
		var hue_slider_default;
		var init_hue_slider = __esmMin((() => {
			init_hue_slider_vue_vue_type_script_setup_true_lang();
			hue_slider_default = hue_slider_vue_vue_type_script_setup_true_lang_default;
		}));
		var predefineProps;
		var init_predefine$1 = __esmMin((() => {
			init_runtime();
			predefineProps = buildProps({
				colors: {
					type: definePropType(Array),
					required: true
				},
				color: {
					type: definePropType(Object),
					required: true
				},
				enableAlpha: {
					type: Boolean,
					required: true
				},
				disabled: Boolean
			});
		}));
		var Color;
		var init_color = __esmMin((() => {
			init_objects();
			init_public_api();
			Color = class {
				constructor(options = {}) {
					this._hue = 0;
					this._saturation = 100;
					this._value = 100;
					this._alpha = 100;
					this._tiny = new TinyColor();
					this._isValid = false;
					this.enableAlpha = false;
					this.format = "";
					this.value = "";
					for (const option in options) if (hasOwn(options, option)) this[option] = options[option];
					if (options.value) this.fromString(options.value);
					else this.doOnChange();
				}
				set(prop, value) {
					if (arguments.length === 1 && typeof prop === "object") {
						for (const p in prop) if (hasOwn(prop, p)) this.set(p, prop[p]);
						return;
					}
					this[`_${prop}`] = value;
					this._isValid = true;
					this.doOnChange();
				}
				get(prop) {
					if ([
						"hue",
						"saturation",
						"value",
						"alpha"
					].includes(prop)) return Math.round(this[`_${prop}`]);
					return this[`_${prop}`];
				}
				toRgb() {
					return this._isValid ? this._tiny.toRgb() : {
						r: 255,
						g: 255,
						b: 255,
						a: 0
					};
				}
				fromString(value) {
					const color = new TinyColor(value);
					this._isValid = color.isValid;
					if (color.isValid) {
						const { h, s, v, a } = color.toHsv();
						this._hue = h;
						this._saturation = s * 100;
						this._value = v * 100;
						this._alpha = a * 100;
					} else {
						this._hue = 0;
						this._saturation = 100;
						this._value = 100;
						this._alpha = 100;
					}
					this.doOnChange();
				}
				clear() {
					this._isValid = false;
					this.value = "";
					this._hue = 0;
					this._saturation = 100;
					this._value = 100;
					this._alpha = 100;
				}
				compare(color) {
					const compareColor = new TinyColor({
						h: color._hue,
						s: color._saturation / 100,
						v: color._value / 100,
						a: color._alpha / 100
					});
					return this._tiny.equals(compareColor);
				}
				doOnChange() {
					const { _hue, _saturation, _value, _alpha, format, enableAlpha } = this;
					let _format = format || (enableAlpha ? "rgb" : "hex");
					if (format === "hex" && enableAlpha) _format = "hex8";
					this._tiny = new TinyColor({
						h: _hue,
						s: _saturation / 100,
						v: _value / 100,
						a: _alpha / 100
					});
					this.value = this._isValid ? this._tiny.toString(_format) : "";
				}
			};
		}));
		var usePredefine;
		var usePredefineDOM;
		var init_use_predefine = __esmMin((() => {
			init_use_namespace();
			init_color_picker_panel$1();
			init_color();
			init_vue_runtime_esm_bundler();
			usePredefine = (props) => {
				const { currentColor } = inject(colorPickerPanelContextKey);
				const rgbaColors = ref(parseColors(props.colors, props.color));
				watch(() => currentColor.value, (val) => {
					const color = new Color({
						value: val,
						enableAlpha: props.enableAlpha
					});
					rgbaColors.value.forEach((item) => {
						item.selected = color.compare(item);
					});
				});
				watchEffect(() => {
					rgbaColors.value = parseColors(props.colors, props.color);
				});
				function handleSelect(index) {
					props.color.fromString(props.colors[index]);
				}
				function parseColors(colors, color) {
					return colors.map((value) => {
						const c = new Color({
							value,
							enableAlpha: props.enableAlpha
						});
						c.selected = c.compare(color);
						return c;
					});
				}
				return {
					rgbaColors,
					handleSelect
				};
			};
			usePredefineDOM = (props) => {
				const ns = useNamespace("color-predefine");
				const rootKls = computed(() => [ns.b(), ns.is("disabled", props.disabled)]);
				const colorsKls = computed(() => ns.e("colors"));
				function colorSelectorKls(item) {
					return [
						ns.e("color-selector"),
						ns.is("alpha", item.get("alpha") < 100),
						{ selected: item.selected }
					];
				}
				return {
					rootKls,
					colorsKls,
					colorSelectorKls
				};
			};
		}));
		var _hoisted_1$13;
		var predefine_vue_vue_type_script_setup_true_lang_default;
		var init_predefine_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_locale();
			init_predefine$1();
			init_use_predefine();
			init_vue_runtime_esm_bundler();
			_hoisted_1$13 = [
				"disabled",
				"aria-label",
				"onClick"
			];
			predefine_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElColorPredefine",
				__name: "predefine",
				props: predefineProps,
				setup(__props) {
					const props = __props;
					const { rgbaColors, handleSelect } = usePredefine(props);
					const { rootKls, colorsKls, colorSelectorKls } = usePredefineDOM(props);
					const { t } = useLocale();
					const ariaLabel = (value) => {
						return t("el.colorpicker.predefineDescription", { value });
					};
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", { class: normalizeClass(unref(rootKls)) }, [createBaseVNode("div", { class: normalizeClass(unref(colorsKls)) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(rgbaColors), (item, index) => {
							return openBlock(), createElementBlock("button", {
								key: __props.colors[index],
								type: "button",
								disabled: __props.disabled,
								"aria-label": ariaLabel(item.value),
								class: normalizeClass(unref(colorSelectorKls)(item)),
								onClick: ($event) => unref(handleSelect)(index)
							}, [createBaseVNode("div", { style: normalizeStyle({ backgroundColor: item.value }) }, null, 4)], 10, _hoisted_1$13);
						}), 128))], 2)], 2);
					};
				}
			});
		}));
		var predefine_default;
		var init_predefine = __esmMin((() => {
			init_predefine_vue_vue_type_script_setup_true_lang();
			predefine_default = predefine_vue_vue_type_script_setup_true_lang_default;
		}));
		var svPanelProps;
		var init_sv_panel$1 = __esmMin((() => {
			init_runtime();
			svPanelProps = buildProps({
				color: {
					type: definePropType(Object),
					required: true
				},
				disabled: Boolean
			});
		}));
		var useSvPanel;
		var useSvPanelDOM;
		var init_use_sv_panel = __esmMin((() => {
			init_aria$1();
			init_event();
			init_position();
			init_style$1();
			init_use_namespace();
			init_draggable();
			init_vue_runtime_esm_bundler();
			useSvPanel = (props) => {
				const instance = getCurrentInstance();
				const cursorRef = ref();
				const cursorTop = ref(0);
				const cursorLeft = ref(0);
				const background = ref("hsl(0, 100%, 50%)");
				const saturation = computed(() => props.color.get("saturation"));
				const brightness = computed(() => props.color.get("value"));
				const hue = computed(() => props.color.get("hue"));
				function handleClick(event) {
					if (props.disabled) return;
					if (event.target !== cursorRef.value) handleDrag(event);
					cursorRef.value?.focus({ preventScroll: true });
				}
				function handleDrag(event) {
					if (props.disabled) return;
					const rect = instance.vnode.el.getBoundingClientRect();
					const { clientX, clientY } = getClientXY(event);
					let left = clientX - rect.left;
					let top = clientY - rect.top;
					left = Math.max(0, left);
					left = Math.min(left, rect.width);
					top = Math.max(0, top);
					top = Math.min(top, rect.height);
					cursorLeft.value = left;
					cursorTop.value = top;
					props.color.set({
						saturation: left / rect.width * 100,
						value: 100 - top / rect.height * 100
					});
				}
				function handleKeydown(event) {
					if (props.disabled) return;
					const { shiftKey } = event;
					const code = getEventCode(event);
					const step = shiftKey ? 10 : 1;
					let isPreventDefault = true;
					switch (code) {
						case EVENT_CODE.left:
							incrementSaturation(-step);
							break;
						case EVENT_CODE.right:
							incrementSaturation(step);
							break;
						case EVENT_CODE.up:
							incrementBrightness(step);
							break;
						case EVENT_CODE.down:
							incrementBrightness(-step);
							break;
						default: isPreventDefault = false;
					}
					isPreventDefault && event.preventDefault();
				}
				function incrementSaturation(step) {
					let next = saturation.value + step;
					next = next < 0 ? 0 : next > 100 ? 100 : next;
					props.color.set("saturation", next);
				}
				function incrementBrightness(step) {
					let next = brightness.value + step;
					next = next < 0 ? 0 : next > 100 ? 100 : next;
					props.color.set("value", next);
				}
				return {
					cursorRef,
					cursorTop,
					cursorLeft,
					background,
					saturation,
					brightness,
					hue,
					handleClick,
					handleDrag,
					handleKeydown
				};
			};
			useSvPanelDOM = (props, { cursorTop, cursorLeft, background, handleDrag }) => {
				const instance = getCurrentInstance();
				const ns = useNamespace("color-svpanel");
				function update() {
					const saturation = props.color.get("saturation");
					const brightness = props.color.get("value");
					const { clientWidth: width, clientHeight: height } = instance.vnode.el;
					cursorLeft.value = saturation * width / 100;
					cursorTop.value = (100 - brightness) * height / 100;
					background.value = `hsl(${props.color.get("hue")}, 100%, 50%)`;
				}
				onMounted(() => {
					draggable(instance.vnode.el, {
						drag: (event) => {
							handleDrag(event);
						},
						end: (event) => {
							handleDrag(event);
						}
					});
					update();
				});
				watch([
					() => props.color.get("hue"),
					() => props.color.get("value"),
					() => props.color.value
				], () => update());
				return {
					rootKls: computed(() => ns.b()),
					cursorKls: computed(() => ns.e("cursor")),
					rootStyle: computed(() => ({ backgroundColor: background.value })),
					cursorStyle: computed(() => ({
						top: addUnit(cursorTop.value),
						left: addUnit(cursorLeft.value)
					})),
					update
				};
			};
		}));
		var _hoisted_1$12;
		var sv_panel_vue_vue_type_script_setup_true_lang_default;
		var init_sv_panel_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_locale();
			init_sv_panel$1();
			init_use_sv_panel();
			init_vue_runtime_esm_bundler();
			_hoisted_1$12 = [
				"tabindex",
				"aria-disabled",
				"aria-label",
				"aria-valuenow",
				"aria-valuetext"
			];
			sv_panel_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElSvPanel",
				__name: "sv-panel",
				props: svPanelProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const { cursorRef, cursorTop, cursorLeft, background, saturation, brightness, handleClick, handleDrag, handleKeydown } = useSvPanel(props);
					const { rootKls, cursorKls, rootStyle, cursorStyle, update } = useSvPanelDOM(props, {
						cursorTop,
						cursorLeft,
						background,
						handleDrag
					});
					const { t } = useLocale();
					const ariaLabel = computed(() => t("el.colorpicker.svLabel"));
					const ariaValuetext = computed(() => {
						return t("el.colorpicker.svDescription", {
							saturation: saturation.value,
							brightness: brightness.value,
							color: props.color.value
						});
					});
					__expose({ update });
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							class: normalizeClass(unref(rootKls)),
							style: normalizeStyle(unref(rootStyle)),
							onClick: _cache[1] || (_cache[1] = (...args) => unref(handleClick) && unref(handleClick)(...args))
						}, [createBaseVNode("div", {
							ref_key: "cursorRef",
							ref: cursorRef,
							class: normalizeClass(unref(cursorKls)),
							style: normalizeStyle(unref(cursorStyle)),
							tabindex: __props.disabled ? void 0 : 0,
							"aria-disabled": __props.disabled,
							role: "slider",
							"aria-valuemin": "0,0",
							"aria-valuemax": "100,100",
							"aria-label": ariaLabel.value,
							"aria-valuenow": `${unref(saturation)},${unref(brightness)}`,
							"aria-valuetext": ariaValuetext.value,
							onKeydown: _cache[0] || (_cache[0] = (...args) => unref(handleKeydown) && unref(handleKeydown)(...args))
						}, null, 46, _hoisted_1$12)], 6);
					};
				}
			});
		}));
		var sv_panel_default;
		var init_sv_panel = __esmMin((() => {
			init_sv_panel_vue_vue_type_script_setup_true_lang();
			sv_panel_default = sv_panel_vue_vue_type_script_setup_true_lang_default;
		}));
		var useCommonColor;
		var init_use_common_color = __esmMin((() => {
			init_event$1();
			init_color();
			init_vue_runtime_esm_bundler();
			useCommonColor = (props, emit) => {
				const color = reactive(new Color({
					enableAlpha: props.showAlpha,
					format: props.colorFormat || "",
					value: props.modelValue
				}));
				watch(() => [props.colorFormat, props.showAlpha], () => {
					color.enableAlpha = props.showAlpha;
					color.format = props.colorFormat || color.format;
					color.doOnChange();
					emit(UPDATE_MODEL_EVENT, color.value);
				});
				return { color };
			};
		}));
		var color_picker_panel_vue_vue_type_script_setup_true_lang_default;
		var init_color_picker_panel_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_event$1();
			init_functions();
			init_use_namespace();
			init_use_form_common_props();
			init_use_form_item();
			init_input();
			init_color_picker_panel$1();
			init_alpha_slider();
			init_hue_slider();
			init_predefine();
			init_sv_panel();
			init_use_common_color();
			init_vue_runtime_esm_bundler();
			color_picker_panel_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElColorPickerPanel",
				__name: "color-picker-panel",
				props: colorPickerPanelProps,
				emits: colorPickerPanelEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					const ns = useNamespace("color-picker-panel");
					const { formItem } = useFormItem();
					const disabled = useFormDisabled();
					const hueRef = ref();
					const svRef = ref();
					const alphaRef = ref();
					const inputRef = ref();
					const customInput = ref("");
					const { color } = inject(ROOT_COMMON_COLOR_INJECTION_KEY, () => useCommonColor(props, emit), true);
					function handleConfirm() {
						color.fromString(customInput.value);
						if (color.value !== customInput.value) customInput.value = color.value;
					}
					function handleFocusout() {
						if (props.validateEvent) formItem?.validate?.("blur").catch(NOOP);
					}
					function update() {
						hueRef.value?.update();
						svRef.value?.update();
						alphaRef.value?.update();
					}
					onMounted(() => {
						if (props.modelValue) customInput.value = color.value;
						nextTick(update);
					});
					watch(() => props.modelValue, (newVal) => {
						if (newVal !== color.value) newVal ? color.fromString(newVal) : color.clear();
					});
					watch(() => color.value, (val) => {
						emit(UPDATE_MODEL_EVENT, val);
						customInput.value = val;
						if (props.validateEvent) formItem?.validate("change").catch(NOOP);
					});
					provide(colorPickerPanelContextKey, { currentColor: computed(() => color.value) });
					__expose({
						color,
						inputRef,
						update
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							class: normalizeClass([
								unref(ns).b(),
								unref(ns).is("disabled", unref(disabled)),
								unref(ns).is("border", __props.border)
							]),
							onFocusout: handleFocusout
						}, [
							createBaseVNode("div", { class: normalizeClass(unref(ns).e("wrapper")) }, [createVNode(hue_slider_default, {
								ref_key: "hueRef",
								ref: hueRef,
								color: unref(color),
								vertical: "",
								disabled: unref(disabled),
								class: normalizeClass(["hue-slider", __props.hueSliderClass]),
								style: normalizeStyle(__props.hueSliderStyle)
							}, null, 8, [
								"color",
								"disabled",
								"class",
								"style"
							]), createVNode(sv_panel_default, {
								ref_key: "svRef",
								ref: svRef,
								color: unref(color),
								disabled: unref(disabled)
							}, null, 8, ["color", "disabled"])], 2),
							__props.showAlpha ? (openBlock(), createBlock(alpha_slider_default, {
								key: 0,
								ref_key: "alphaRef",
								ref: alphaRef,
								color: unref(color),
								disabled: unref(disabled)
							}, null, 8, ["color", "disabled"])) : createCommentVNode("v-if", true),
							__props.predefine ? (openBlock(), createBlock(predefine_default, {
								key: 1,
								ref: "predefine",
								"enable-alpha": __props.showAlpha,
								color: unref(color),
								colors: __props.predefine,
								disabled: unref(disabled)
							}, null, 8, [
								"enable-alpha",
								"color",
								"colors",
								"disabled"
							])) : createCommentVNode("v-if", true),
							createBaseVNode("div", { class: normalizeClass(unref(ns).e("footer")) }, [createVNode(unref(ElInput), {
								ref_key: "inputRef",
								ref: inputRef,
								modelValue: customInput.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => customInput.value = $event),
								"validate-event": false,
								size: "small",
								disabled: unref(disabled),
								onChange: handleConfirm
							}, null, 8, ["modelValue", "disabled"]), renderSlot(_ctx.$slots, "footer")], 2)
						], 34);
					};
				}
			});
		}));
		var color_picker_panel_default;
		var init_color_picker_panel2 = __esmMin((() => {
			init_color_picker_panel_vue_vue_type_script_setup_true_lang();
			color_picker_panel_default = color_picker_panel_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElColorPickerPanel;
		var init_color_picker_panel = __esmMin((() => {
			init_install();
			init_color_picker_panel2();
			ElColorPickerPanel = withInstall(color_picker_panel_default);
		}));
		var colorPickerProps;
		var colorPickerEmits;
		var init_color_picker$1 = __esmMin((() => {
			init_event$1();
			init_types();
			init_runtime();
			init_use_size();
			init_use_empty_values();
			init_use_aria();
			init_content();
			init_import();
			colorPickerProps = buildProps({
				persistent: {
					type: Boolean,
					default: true
				},
				modelValue: {
					type: definePropType(String),
					default: void 0
				},
				id: String,
				showAlpha: Boolean,
				colorFormat: { type: definePropType(String) },
				disabled: {
					type: Boolean,
					default: void 0
				},
				clearable: {
					type: Boolean,
					default: true
				},
				size: useSizeProp,
				popperClass: useTooltipContentProps.popperClass,
				popperStyle: useTooltipContentProps.popperStyle,
				tabindex: {
					type: [String, Number],
					default: 0
				},
				teleported: useTooltipContentProps.teleported,
				appendTo: useTooltipContentProps.appendTo,
				predefine: { type: definePropType(Array) },
				validateEvent: {
					type: Boolean,
					default: true
				},
				...useEmptyValuesProps,
				...useAriaProps(["ariaLabel"])
			});
			colorPickerEmits = {
				[UPDATE_MODEL_EVENT]: (val) => isString(val) || isNil(val),
				[CHANGE_EVENT]: (val) => isString(val) || isNil(val),
				activeChange: (val) => isString(val) || isNil(val),
				focus: (evt) => evt instanceof FocusEvent,
				blur: (evt) => evt instanceof FocusEvent,
				clear: () => true
			};
		}));
		var _hoisted_1$11;
		var color_picker_vue_vue_type_script_setup_true_lang_default;
		var init_color_picker_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_aria$1();
			init_event$1();
			init_event();
			init_functions();
			init_use_locale();
			init_use_namespace();
			init_use_focus_controller();
			init_use_empty_values();
			init_icon();
			init_use_form_common_props();
			init_use_form_item();
			init_tooltip();
			init_button();
			init_click_outside();
			init_color_picker_panel$1();
			init_color();
			init_use_common_color();
			init_color_picker_panel();
			init_color_picker$1();
			init_dist$2();
			init_import();
			init_dist();
			init_vue_runtime_esm_bundler();
			_hoisted_1$11 = [
				"id",
				"aria-label",
				"aria-labelledby",
				"aria-description",
				"aria-disabled",
				"tabindex"
			];
			color_picker_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElColorPicker",
				__name: "color-picker",
				props: colorPickerProps,
				emits: colorPickerEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					const { t } = useLocale();
					const ns = useNamespace("color");
					const { formItem } = useFormItem();
					const colorSize = useFormSize();
					const colorDisabled = useFormDisabled();
					const { valueOnClear, isEmptyValue } = useEmptyValues(props, null);
					const commonColor = useCommonColor(props, emit);
					const { inputId: buttonId, isLabeledByFormItem } = useFormItemInputId(props, { formItemContext: formItem });
					const popper = ref();
					const triggerRef = ref();
					const pickerPanelRef = ref();
					const showPicker = ref(false);
					const showPanelColor = ref(false);
					let shouldActiveChange = true;
					const { isFocused, handleFocus, handleBlur } = useFocusController(triggerRef, {
						disabled: colorDisabled,
						beforeBlur(event) {
							return popper.value?.isFocusInsideContent(event);
						},
						afterBlur() {
							setShowPicker(false);
							resetColor();
							if (props.validateEvent) formItem?.validate?.("blur").catch(NOOP);
						}
					});
					const color = reactiveComputed(() => pickerPanelRef.value?.color ?? commonColor.color);
					const panelProps = computed(() => pick(props, Object.keys(colorPickerPanelProps)));
					const displayedColor = computed(() => {
						if (!props.modelValue && !showPanelColor.value) return "transparent";
						return displayedRgb(color, props.showAlpha);
					});
					const currentColor = computed(() => {
						return !props.modelValue && !showPanelColor.value ? "" : color.value;
					});
					const buttonAriaLabel = computed(() => {
						return !isLabeledByFormItem.value ? props.ariaLabel || t("el.colorpicker.defaultLabel") : void 0;
					});
					const buttonAriaLabelledby = computed(() => {
						return isLabeledByFormItem.value ? formItem?.labelId : void 0;
					});
					const btnKls = computed(() => {
						return [
							ns.b("picker"),
							ns.is("disabled", colorDisabled.value),
							ns.bm("picker", colorSize.value),
							ns.is("focused", isFocused.value)
						];
					});
					function displayedRgb(color, showAlpha) {
						const { r, g, b, a } = color.toRgb();
						return showAlpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
					}
					function setShowPicker(value) {
						showPicker.value = value;
					}
					const debounceSetShowPicker = debounce(setShowPicker, 100, { leading: true });
					function show() {
						if (colorDisabled.value) return;
						setShowPicker(true);
					}
					function hide() {
						debounceSetShowPicker(false);
						resetColor();
					}
					function resetColor() {
						nextTick(() => {
							if (props.modelValue) color.fromString(props.modelValue);
							else {
								color.value = "";
								nextTick(() => {
									showPanelColor.value = false;
								});
							}
						});
					}
					function handleTrigger() {
						if (colorDisabled.value) return;
						if (showPicker.value) resetColor();
						debounceSetShowPicker(!showPicker.value);
					}
					function confirmValue() {
						const value = isEmptyValue(color.value) ? valueOnClear.value : color.value;
						emit(UPDATE_MODEL_EVENT, value);
						emit(CHANGE_EVENT, value);
						if (props.validateEvent) formItem?.validate("change").catch(NOOP);
						debounceSetShowPicker(false);
						nextTick(() => {
							const newColor = new Color({
								enableAlpha: props.showAlpha,
								format: props.colorFormat || "",
								value: props.modelValue
							});
							if (!color.compare(newColor)) resetColor();
						});
					}
					function clear() {
						debounceSetShowPicker(false);
						emit(UPDATE_MODEL_EVENT, valueOnClear.value);
						emit(CHANGE_EVENT, valueOnClear.value);
						if (props.modelValue !== valueOnClear.value && props.validateEvent) formItem?.validate("change").catch(NOOP);
						resetColor();
						emit("clear");
					}
					function handleShowTooltip() {
						pickerPanelRef?.value?.inputRef?.focus();
					}
					function handleClickOutside() {
						if (!showPicker.value) return;
						hide();
						isFocused.value && focus();
					}
					function handleEsc(event) {
						event.preventDefault();
						event.stopPropagation();
						setShowPicker(false);
						resetColor();
					}
					function handleKeyDown(event) {
						switch (getEventCode(event)) {
							case EVENT_CODE.enter:
							case EVENT_CODE.numpadEnter:
							case EVENT_CODE.space:
								event.preventDefault();
								event.stopPropagation();
								show();
								break;
							case EVENT_CODE.esc: handleEsc(event);
						}
					}
					function focus() {
						triggerRef.value.focus();
					}
					function blur() {
						triggerRef.value.blur();
					}
					watch(() => currentColor.value, (val) => {
						shouldActiveChange && emit("activeChange", val);
						shouldActiveChange = true;
					});
					watch(() => color.value, () => {
						if (!props.modelValue && !showPanelColor.value) showPanelColor.value = true;
					});
					watch(() => props.modelValue, (newVal) => {
						if (!newVal) showPanelColor.value = false;
						else if (newVal && newVal !== color.value) {
							shouldActiveChange = false;
							color.fromString(newVal);
						}
					});
					watch(() => showPicker.value, () => {
						pickerPanelRef.value && nextTick(pickerPanelRef.value.update);
					});
					provide(ROOT_COMMON_COLOR_INJECTION_KEY, commonColor);
					__expose({
						color,
						show,
						hide,
						focus,
						blur
					});
					return (_ctx, _cache) => {
						return openBlock(), createBlock(unref(ElTooltip), {
							ref_key: "popper",
							ref: popper,
							visible: showPicker.value,
							"show-arrow": false,
							"fallback-placements": [
								"bottom",
								"top",
								"right",
								"left"
							],
							offset: 0,
							"gpu-acceleration": false,
							"popper-class": [unref(ns).be("picker", "panel"), __props.popperClass],
							"popper-style": __props.popperStyle,
							"stop-popper-mouse-event": false,
							pure: "",
							loop: "",
							role: "dialog",
							effect: "light",
							trigger: "click",
							teleported: __props.teleported,
							transition: `${unref(ns).namespace.value}-zoom-in-top`,
							persistent: __props.persistent,
							"append-to": __props.appendTo,
							onShow: handleShowTooltip,
							onHide: _cache[2] || (_cache[2] = ($event) => setShowPicker(false))
						}, {
							content: withCtx(() => [withDirectives((openBlock(), createBlock(unref(ElColorPickerPanel), mergeProps({
								ref_key: "pickerPanelRef",
								ref: pickerPanelRef
							}, panelProps.value, {
								border: false,
								"validate-event": false,
								onKeydown: withKeys(handleEsc, ["esc"])
							}), {
								footer: withCtx(() => [createBaseVNode("div", null, [__props.clearable ? (openBlock(), createBlock(unref(ElButton), {
									key: 0,
									class: normalizeClass(unref(ns).be("footer", "link-btn")),
									text: "",
									size: "small",
									onClick: clear
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("el.colorpicker.clear")), 1)]),
									_: 1
								}, 8, ["class"])) : createCommentVNode("v-if", true), createVNode(unref(ElButton), {
									plain: "",
									size: "small",
									class: normalizeClass(unref(ns).be("footer", "btn")),
									onClick: confirmValue
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("el.colorpicker.confirm")), 1)]),
									_: 1
								}, 8, ["class"])])]),
								_: 1
							}, 16)), [[
								unref(ClickOutside),
								handleClickOutside,
								triggerRef.value
							]])]),
							default: withCtx(() => [createBaseVNode("div", mergeProps({
								id: unref(buttonId),
								ref_key: "triggerRef",
								ref: triggerRef
							}, _ctx.$attrs, {
								class: btnKls.value,
								role: "button",
								"aria-label": buttonAriaLabel.value,
								"aria-labelledby": buttonAriaLabelledby.value,
								"aria-description": unref(t)("el.colorpicker.description", { color: __props.modelValue || "" }),
								"aria-disabled": unref(colorDisabled),
								tabindex: unref(colorDisabled) ? void 0 : __props.tabindex,
								onKeydown: handleKeyDown,
								onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
								onBlur: _cache[1] || (_cache[1] = (...args) => unref(handleBlur) && unref(handleBlur)(...args))
							}), [createBaseVNode("div", {
								class: normalizeClass(unref(ns).be("picker", "trigger")),
								onClick: handleTrigger
							}, [createBaseVNode("span", { class: normalizeClass([unref(ns).be("picker", "color"), unref(ns).is("alpha", __props.showAlpha)]) }, [createBaseVNode("span", {
								class: normalizeClass(unref(ns).be("picker", "color-inner")),
								style: normalizeStyle({ backgroundColor: displayedColor.value })
							}, [withDirectives(createVNode(unref(ElIcon), { class: normalizeClass([unref(ns).be("picker", "icon"), unref(ns).is("icon-arrow-down")]) }, {
								default: withCtx(() => [createVNode(unref(arrow_down_default))]),
								_: 1
							}, 8, ["class"]), [[vShow, __props.modelValue || showPanelColor.value]]), withDirectives(createVNode(unref(ElIcon), { class: normalizeClass([unref(ns).be("picker", "empty"), unref(ns).is("icon-close")]) }, {
								default: withCtx(() => [createVNode(unref(close_default))]),
								_: 1
							}, 8, ["class"]), [[vShow, !__props.modelValue && !showPanelColor.value]])], 6)], 2)], 2)], 16, _hoisted_1$11)]),
							_: 1
						}, 8, [
							"visible",
							"popper-class",
							"popper-style",
							"teleported",
							"transition",
							"persistent",
							"append-to"
						]);
					};
				}
			});
		}));
		var color_picker_default;
		var init_color_picker2 = __esmMin((() => {
			init_color_picker_vue_vue_type_script_setup_true_lang();
			color_picker_default = color_picker_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElColorPicker;
		var init_color_picker = __esmMin((() => {
			init_install();
			init_color_picker2();
			ElColorPicker = withInstall(color_picker_default);
		}));
		var dialogContentProps;
		var dialogContentEmits;
		var dialogContentPropsDefaults;
		var init_dialog_content = __esmMin((() => {
			init_runtime();
			init_icon$2();
			dialogContentProps = buildProps({
				center: Boolean,
				alignCenter: {
					type: Boolean,
					default: void 0
				},
				closeIcon: { type: iconPropType },
				draggable: {
					type: Boolean,
					default: void 0
				},
				overflow: {
					type: Boolean,
					default: void 0
				},
				fullscreen: Boolean,
				headerClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				bodyClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				footerClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				showClose: {
					type: Boolean,
					default: true
				},
				title: {
					type: String,
					default: ""
				},
				ariaLevel: {
					type: String,
					default: "2"
				}
			});
			dialogContentEmits = { close: () => true };
			dialogContentPropsDefaults = {
				alignCenter: void 0,
				draggable: void 0,
				overflow: void 0,
				showClose: true,
				title: "",
				ariaLevel: "2",
				headerClass: void 0,
				bodyClass: void 0,
				footerClass: void 0
			};
		}));
		var dialogProps;
		var dialogEmits;
		var init_dialog$2 = __esmMin((() => {
			init_event$1();
			init_types();
			init_runtime();
			init_dialog_content();
			dialogProps = buildProps({
				...dialogContentProps,
				appendToBody: Boolean,
				appendTo: {
					type: definePropType([String, Object]),
					default: "body"
				},
				beforeClose: { type: definePropType(Function) },
				destroyOnClose: Boolean,
				closeOnClickModal: {
					type: Boolean,
					default: true
				},
				closeOnPressEscape: {
					type: Boolean,
					default: true
				},
				lockScroll: {
					type: Boolean,
					default: true
				},
				modal: {
					type: Boolean,
					default: true
				},
				modalPenetrable: Boolean,
				openDelay: {
					type: Number,
					default: 0
				},
				closeDelay: {
					type: Number,
					default: 0
				},
				top: { type: String },
				modelValue: Boolean,
				modalClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				width: { type: [String, Number] },
				zIndex: { type: Number },
				trapFocus: Boolean,
				headerAriaLevel: {
					type: String,
					default: "2"
				},
				transition: {
					type: definePropType([String, Object]),
					default: void 0
				}
			});
			dialogEmits = {
				open: () => true,
				opened: () => true,
				close: () => true,
				closed: () => true,
				[UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
				openAutoFocus: () => true,
				closeAutoFocus: () => true
			};
			({ ...dialogContentPropsDefaults });
		}));
		var overlayProps;
		var overlayEmits;
		var BLOCK;
		var overlay_default;
		var init_overlay$1 = __esmMin((() => {
			init_runtime();
			init_use_namespace();
			init_use_same_target();
			init_vue_runtime_esm_bundler();
			overlayProps = buildProps({
				mask: {
					type: Boolean,
					default: true
				},
				customMaskEvent: Boolean,
				overlayClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: void 0
				},
				zIndex: { type: definePropType([String, Number]) }
			});
			overlayEmits = { click: (evt) => evt instanceof MouseEvent };
			BLOCK = "overlay";
			overlay_default = defineComponent({
				name: "ElOverlay",
				props: overlayProps,
				emits: overlayEmits,
				setup(props, { slots, emit }) {
					const ns = useNamespace(BLOCK);
					const onMaskClick = (e) => {
						emit("click", e);
					};
					const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
					return () => {
						return props.mask ? createVNode("div", {
							class: [ns.b(), props.overlayClass],
							style: { zIndex: props.zIndex },
							onClick,
							onMousedown,
							onMouseup
						}, [renderSlot(slots, "default")], 14, [
							"onClick",
							"onMouseup",
							"onMousedown"
						]) : h("div", {
							class: props.overlayClass,
							style: {
								zIndex: props.zIndex,
								position: "fixed",
								top: "0px",
								right: "0px",
								bottom: "0px",
								left: "0px"
							}
						}, [renderSlot(slots, "default")]);
					};
				}
			});
		}));
		var ElOverlay;
		var init_overlay = __esmMin((() => {
			init_overlay$1();
			ElOverlay = overlay_default;
		}));
		var dialogInjectionKey;
		var DEFAULT_DIALOG_TRANSITION;
		var init_constants$1 = __esmMin((() => {
			dialogInjectionKey = Symbol("dialogInjectionKey");
			DEFAULT_DIALOG_TRANSITION = "dialog-fade";
		}));
		var COMPONENT_NAME$4;
		var useDialog;
		var init_use_dialog = __esmMin((() => {
			init_event$1();
			init_browser();
			init_types();
			init_error();
			init_style$1();
			init_use_lockscreen();
			init_use_id();
			init_use_z_index();
			init_use_global_config();
			init_constants$1();
			init_dist$2();
			init_vue_runtime_esm_bundler();
			COMPONENT_NAME$4 = "ElDialog";
			useDialog = (props, targetRef) => {
				const emit = getCurrentInstance().emit;
				const { nextZIndex } = useZIndex();
				let lastPosition = "";
				const titleId = useId();
				const bodyId = useId();
				const visible = ref(false);
				const closed = ref(false);
				const rendered = ref(false);
				const zIndex = ref(props.zIndex ?? nextZIndex());
				const closing = ref(false);
				let openTimer = void 0;
				let closeTimer = void 0;
				const config = useGlobalConfig();
				const namespace = computed(() => config.value?.namespace ?? "el");
				const globalConfig = computed(() => config.value?.dialog);
				const style = computed(() => {
					const style = {};
					const varPrefix = `--${namespace.value}-dialog`;
					if (!props.fullscreen) {
						if (props.top) style[`${varPrefix}-margin-top`] = props.top;
						const width = addUnit(props.width);
						if (width) style[`${varPrefix}-width`] = width;
					}
					return style;
				});
				const _draggable = computed(() => (props.draggable ?? globalConfig.value?.draggable ?? false) && !props.fullscreen);
				const _alignCenter = computed(() => props.alignCenter ?? globalConfig.value?.alignCenter ?? false);
				const _overflow = computed(() => props.overflow ?? globalConfig.value?.overflow ?? false);
				const penetrable = computed(() => props.modalPenetrable && !props.modal && !props.fullscreen);
				const overlayDialogStyle = computed(() => {
					if (_alignCenter.value) return { display: "flex" };
					return {};
				});
				const transitionConfig = computed(() => {
					const transition = props.transition ?? globalConfig.value?.transition ?? "dialog-fade";
					const baseConfig = {
						name: transition,
						onAfterEnter: afterEnter,
						onBeforeLeave: beforeLeave,
						onAfterLeave: afterLeave
					};
					if (isObject$2(transition)) {
						const config = { ...transition };
						const _mergeHook = (userHook, defaultHook) => {
							return (el) => {
								if (isArray$1(userHook)) userHook.forEach((fn) => {
									if (isFunction$1(fn)) fn(el);
								});
								else if (isFunction$1(userHook)) userHook(el);
								defaultHook();
							};
						};
						config.onAfterEnter = _mergeHook(config.onAfterEnter, afterEnter);
						config.onBeforeLeave = _mergeHook(config.onBeforeLeave, beforeLeave);
						config.onAfterLeave = _mergeHook(config.onAfterLeave, afterLeave);
						if (!config.name) {
							config.name = DEFAULT_DIALOG_TRANSITION;
							debugWarn(COMPONENT_NAME$4, `transition.name is missing when using object syntax, fallback to '${DEFAULT_DIALOG_TRANSITION}'`);
						}
						return config;
					}
					return baseConfig;
				});
				function afterEnter() {
					emit("opened");
				}
				function afterLeave() {
					emit("closed");
					emit(UPDATE_MODEL_EVENT, false);
					if (props.destroyOnClose) rendered.value = false;
					closing.value = false;
				}
				function beforeLeave() {
					closing.value = true;
					emit("close");
				}
				function open() {
					closeTimer?.();
					openTimer?.();
					if (props.openDelay && props.openDelay > 0) ({stop: openTimer} = useTimeoutFn(() => doOpen(), props.openDelay));
					else doOpen();
				}
				function close() {
					openTimer?.();
					closeTimer?.();
					if (props.closeDelay && props.closeDelay > 0) ({stop: closeTimer} = useTimeoutFn(() => doClose(), props.closeDelay));
					else doClose();
				}
				function handleClose() {
					function hide(shouldCancel) {
						if (shouldCancel) return;
						closed.value = true;
						visible.value = false;
					}
					if (props.beforeClose) props.beforeClose(hide);
					else close();
				}
				function onModalClick() {
					if (props.closeOnClickModal) handleClose();
				}
				function doOpen() {
					if (!isClient) return;
					visible.value = true;
				}
				function doClose() {
					visible.value = false;
				}
				function onOpenAutoFocus() {
					emit("openAutoFocus");
				}
				function onCloseAutoFocus() {
					emit("closeAutoFocus");
				}
				function onFocusoutPrevented(event) {
					if (event.detail?.focusReason === "pointer") event.preventDefault();
				}
				if (props.lockScroll) useLockscreen(visible);
				function onCloseRequested() {
					if (props.closeOnPressEscape) handleClose();
				}
				function bringToFront() {
					if (!visible.value || !penetrable.value || props.zIndex !== void 0) return;
					zIndex.value = nextZIndex();
				}
				watch(() => props.zIndex, () => {
					zIndex.value = props.zIndex ?? nextZIndex();
				});
				watch(() => props.modelValue, (val) => {
					if (val) {
						closed.value = false;
						closing.value = false;
						open();
						rendered.value = true;
						zIndex.value = props.zIndex ?? nextZIndex();
						nextTick(() => {
							emit("open");
							if (targetRef.value) {
								targetRef.value.parentElement.scrollTop = 0;
								targetRef.value.parentElement.scrollLeft = 0;
								targetRef.value.scrollTop = 0;
							}
						});
					} else if (visible.value) close();
				});
				watch(() => props.fullscreen, (val) => {
					if (!targetRef.value) return;
					if (val) {
						lastPosition = targetRef.value.style.transform;
						targetRef.value.style.transform = "";
					} else targetRef.value.style.transform = lastPosition;
				});
				onMounted(() => {
					if (props.modelValue) {
						visible.value = true;
						rendered.value = true;
						open();
					}
				});
				return {
					afterEnter,
					afterLeave,
					beforeLeave,
					handleClose,
					onModalClick,
					close,
					doClose,
					onOpenAutoFocus,
					onCloseAutoFocus,
					onCloseRequested,
					onFocusoutPrevented,
					bringToFront,
					titleId,
					bodyId,
					closed,
					style,
					overlayDialogStyle,
					rendered,
					visible,
					zIndex,
					transitionConfig,
					_draggable,
					_alignCenter,
					_overflow,
					closing,
					penetrable
				};
			};
		}));
		var composeRefs;
		var init_refs = __esmMin((() => {
			composeRefs = (...refs) => {
				return (el) => {
					refs.forEach((ref) => {
						ref.value = el;
					});
				};
			};
		}));
		var _hoisted_1$10;
		var _hoisted_2$7;
		var _hoisted_3$5;
		var dialog_content_vue_vue_type_script_setup_true_lang_default;
		var init_dialog_content_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_icon$2();
			init_refs();
			init_use_draggable();
			init_use_locale();
			init_icon();
			init_tokens();
			init_dialog_content();
			init_constants$1();
			init_vue_runtime_esm_bundler();
			_hoisted_1$10 = ["aria-level"];
			_hoisted_2$7 = ["aria-label"];
			_hoisted_3$5 = ["id"];
			dialog_content_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElDialogContent",
				__name: "dialog-content",
				props: dialogContentProps,
				emits: dialogContentEmits,
				setup(__props, { expose: __expose }) {
					const { t } = useLocale();
					const { Close } = CloseComponents;
					const props = __props;
					const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
					const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
					const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
					const draggable = computed(() => !!props.draggable);
					const overflow = computed(() => !!props.overflow);
					const { resetPosition, updatePosition, isDragging } = useDraggable(dialogRef, headerRef, draggable, overflow);
					const dialogKls = computed(() => [
						ns.b(),
						ns.is("fullscreen", props.fullscreen),
						ns.is("draggable", draggable.value),
						ns.is("dragging", isDragging.value),
						ns.is("align-center", !!props.alignCenter),
						{ [ns.m("center")]: props.center }
					]);
					__expose({
						resetPosition,
						updatePosition
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							ref: unref(composedDialogRef),
							class: normalizeClass(dialogKls.value),
							style: normalizeStyle(unref(style)),
							tabindex: "-1"
						}, [
							createBaseVNode("header", {
								ref_key: "headerRef",
								ref: headerRef,
								class: normalizeClass([
									unref(ns).e("header"),
									__props.headerClass,
									{ "show-close": __props.showClose }
								])
							}, [renderSlot(_ctx.$slots, "header", {}, () => [createBaseVNode("span", {
								role: "heading",
								"aria-level": __props.ariaLevel,
								class: normalizeClass(unref(ns).e("title"))
							}, toDisplayString(__props.title), 11, _hoisted_1$10)]), __props.showClose ? (openBlock(), createElementBlock("button", {
								key: 0,
								"aria-label": unref(t)("el.dialog.close"),
								class: normalizeClass(unref(ns).e("headerbtn")),
								type: "button",
								onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
							}, [createVNode(unref(ElIcon), { class: normalizeClass(unref(ns).e("close")) }, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.closeIcon || unref(Close))))]),
								_: 1
							}, 8, ["class"])], 10, _hoisted_2$7)) : createCommentVNode("v-if", true)], 2),
							createBaseVNode("div", {
								id: unref(bodyId),
								class: normalizeClass([unref(ns).e("body"), __props.bodyClass])
							}, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_3$5),
							_ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
								key: 0,
								class: normalizeClass([unref(ns).e("footer"), __props.footerClass])
							}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("v-if", true)
						], 6);
					};
				}
			});
		}));
		var dialog_content_default;
		var init_dialog_content2 = __esmMin((() => {
			init_dialog_content_vue_vue_type_script_setup_true_lang();
			dialog_content_default = dialog_content_vue_vue_type_script_setup_true_lang_default;
		}));
		var _hoisted_1$9;
		var dialog_vue_vue_type_script_setup_true_lang_default;
		var init_dialog_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_use_deprecated();
			init_use_namespace();
			init_use_same_target();
			init_focus_trap();
			init_dialog$2();
			init_overlay();
			init_constants$1();
			init_dialog_content2();
			init_use_dialog();
			init_vue_runtime_esm_bundler();
			_hoisted_1$9 = [
				"aria-label",
				"aria-labelledby",
				"aria-describedby"
			];
			dialog_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElDialog",
				inheritAttrs: false,
				__name: "dialog",
				props: dialogProps,
				emits: dialogEmits,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const slots = useSlots();
					useDeprecated({
						scope: "el-dialog",
						from: "the title slot",
						replacement: "the header slot",
						version: "3.0.0",
						ref: "https://element-plus.org/en-US/component/dialog.html#slots"
					}, computed(() => !!slots.title));
					const ns = useNamespace("dialog");
					const dialogRef = ref();
					const headerRef = ref();
					const dialogContentRef = ref();
					const { visible, titleId, bodyId, style, overlayDialogStyle, rendered, transitionConfig, zIndex, _draggable, _alignCenter, _overflow, penetrable, handleClose, onModalClick, onOpenAutoFocus, onCloseAutoFocus, onCloseRequested, onFocusoutPrevented, bringToFront, closing } = useDialog(props, dialogRef);
					provide(dialogInjectionKey, {
						dialogRef,
						headerRef,
						bodyId,
						ns,
						rendered,
						style
					});
					const overlayEvent = useSameTarget(onModalClick);
					const resetPosition = () => {
						dialogContentRef.value?.resetPosition();
					};
					__expose({
						visible,
						dialogContentRef,
						resetPosition,
						handleClose
					});
					return (_ctx, _cache) => {
						return openBlock(), createBlock(Teleport, {
							to: __props.appendTo,
							disabled: __props.appendTo !== "body" ? false : !__props.appendToBody
						}, [createVNode(Transition, mergeProps(unref(transitionConfig), { persisted: "" }), {
							default: withCtx(() => [withDirectives(createVNode(unref(ElOverlay), {
								"custom-mask-event": "",
								mask: __props.modal,
								"overlay-class": [
									__props.modalClass ?? "",
									`${unref(ns).namespace.value}-modal-dialog`,
									unref(ns).is("penetrable", unref(penetrable))
								],
								"z-index": unref(zIndex)
							}, {
								default: withCtx(() => [createBaseVNode("div", {
									role: "dialog",
									"aria-modal": "true",
									"aria-label": __props.title || void 0,
									"aria-labelledby": !__props.title ? unref(titleId) : void 0,
									"aria-describedby": unref(bodyId),
									class: normalizeClass([`${unref(ns).namespace.value}-overlay-dialog`, unref(ns).is("closing", unref(closing))]),
									style: normalizeStyle(unref(overlayDialogStyle)),
									onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
									onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
									onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
								}, [createVNode(unref(focus_trap_default$1), {
									loop: "",
									trapped: unref(visible),
									"focus-start-el": "container",
									onFocusAfterTrapped: unref(onOpenAutoFocus),
									onFocusAfterReleased: unref(onCloseAutoFocus),
									onFocusoutPrevented: unref(onFocusoutPrevented),
									onReleaseRequested: unref(onCloseRequested)
								}, {
									default: withCtx(() => [unref(rendered) ? (openBlock(), createBlock(dialog_content_default, mergeProps({
										key: 0,
										ref_key: "dialogContentRef",
										ref: dialogContentRef
									}, _ctx.$attrs, {
										center: __props.center,
										"align-center": unref(_alignCenter),
										"close-icon": __props.closeIcon,
										draggable: unref(_draggable),
										overflow: unref(_overflow),
										fullscreen: __props.fullscreen,
										"header-class": __props.headerClass,
										"body-class": __props.bodyClass,
										"footer-class": __props.footerClass,
										"show-close": __props.showClose,
										title: __props.title,
										"aria-level": __props.headerAriaLevel,
										onClose: unref(handleClose),
										onMousedown: unref(bringToFront)
									}), createSlots({
										header: withCtx(() => [!_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
											key: 0,
											close: unref(handleClose),
											titleId: unref(titleId),
											titleClass: unref(ns).e("title")
										}) : renderSlot(_ctx.$slots, "title", { key: 1 })]),
										default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
										_: 2
									}, [_ctx.$slots.footer ? {
										name: "footer",
										fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
										key: "0"
									} : void 0]), 1040, [
										"center",
										"align-center",
										"close-icon",
										"draggable",
										"overflow",
										"fullscreen",
										"header-class",
										"body-class",
										"footer-class",
										"show-close",
										"title",
										"aria-level",
										"onClose",
										"onMousedown"
									])) : createCommentVNode("v-if", true)]),
									_: 3
								}, 8, [
									"trapped",
									"onFocusAfterTrapped",
									"onFocusAfterReleased",
									"onFocusoutPrevented",
									"onReleaseRequested"
								])], 46, _hoisted_1$9)]),
								_: 3
							}, 8, [
								"mask",
								"overlay-class",
								"z-index"
							]), [[vShow, unref(visible)]])]),
							_: 3
						}, 16)], 8, ["to", "disabled"]);
					};
				}
			});
		}));
		var dialog_default;
		var init_dialog2 = __esmMin((() => {
			init_dialog_vue_vue_type_script_setup_true_lang();
			dialog_default = dialog_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElDialog;
		var init_dialog$1 = __esmMin((() => {
			init_install();
			init_dialog2();
			ElDialog = withInstall(dialog_default);
		}));
		var inputNumberProps;
		var inputNumberEmits;
		var init_input_number$1 = __esmMin((() => {
			init_event$1();
			init_types();
			init_runtime();
			init_use_size();
			init_use_aria();
			init_import();
			inputNumberProps = buildProps({
				id: {
					type: String,
					default: void 0
				},
				step: {
					type: Number,
					default: 1
				},
				stepStrictly: Boolean,
				max: {
					type: Number,
					default: Number.MAX_SAFE_INTEGER
				},
				min: {
					type: Number,
					default: Number.MIN_SAFE_INTEGER
				},
				modelValue: { type: [Number, null] },
				readonly: Boolean,
				disabled: {
					type: Boolean,
					default: void 0
				},
				size: useSizeProp,
				controls: {
					type: Boolean,
					default: true
				},
				controlsPosition: {
					type: String,
					default: "",
					values: ["", "right"]
				},
				valueOnClear: {
					type: definePropType([
						String,
						Number,
						null
					]),
					validator: (val) => val === null || isNumber(val) || ["min", "max"].includes(val),
					default: null
				},
				name: String,
				placeholder: String,
				precision: {
					type: Number,
					validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
				},
				validateEvent: {
					type: Boolean,
					default: true
				},
				...useAriaProps(["ariaLabel"]),
				inputmode: {
					type: definePropType(String),
					default: void 0
				},
				align: {
					type: definePropType(String),
					default: "center"
				},
				disabledScientific: Boolean,
				formatter: { type: Function },
				parser: { type: Function },
				tabindex: {
					type: [String, Number],
					default: 0
				}
			});
			inputNumberEmits = {
				[CHANGE_EVENT]: (cur, prev) => prev !== cur,
				blur: (e) => e instanceof FocusEvent,
				focus: (e) => e instanceof FocusEvent,
				[INPUT_EVENT]: (val) => isNumber(val) || isNil(val),
				[UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isNil(val)
			};
		}));
		var _hoisted_1$8;
		var _hoisted_2$6;
		var input_number_vue_vue_type_script_setup_true_lang_default;
		var init_input_number_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_aria$1();
			init_event$1();
			init_event();
			init_types();
			init_error();
			init_functions();
			init_use_locale();
			init_use_namespace();
			init_icon();
			init_use_form_common_props();
			init_use_form_item();
			init_input();
			init_repeat_click();
			init_input_number$1();
			init_import();
			init_dist();
			init_vue_runtime_esm_bundler();
			_hoisted_1$8 = ["aria-label"];
			_hoisted_2$6 = ["aria-label"];
			input_number_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElInputNumber",
				__name: "input-number",
				props: inputNumberProps,
				emits: inputNumberEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					const { t } = useLocale();
					const ns = useNamespace("input-number");
					const input = ref();
					const data = reactive({
						currentValue: props.modelValue,
						userInput: null
					});
					const { formItem } = useFormItem();
					const minDisabled = computed(() => isNumber(props.modelValue) && props.modelValue <= props.min);
					const maxDisabled = computed(() => isNumber(props.modelValue) && props.modelValue >= props.max);
					const numPrecision = computed(() => {
						const stepPrecision = getPrecision(props.step);
						if (!isUndefined(props.precision)) {
							if (stepPrecision > props.precision) debugWarn("InputNumber", "precision should not be less than the decimal places of step");
							return props.precision;
						} else return Math.max(getPrecision(props.modelValue), stepPrecision);
					});
					const controlsAtRight = computed(() => {
						return props.controls && props.controlsPosition === "right";
					});
					const inputNumberSize = useFormSize();
					const inputNumberDisabled = useFormDisabled();
					const displayValue = computed(() => {
						if (data.userInput !== null) return data.userInput;
						let currentValue = data.currentValue;
						if (isNil(currentValue)) return "";
						if (isNumber(currentValue)) {
							if (Number.isNaN(currentValue)) return "";
							if (!isUndefined(props.precision)) currentValue = currentValue.toFixed(props.precision);
						}
						return currentValue;
					});
					const toPrecision = (num, pre) => {
						if (isUndefined(pre)) pre = numPrecision.value;
						if (pre === 0) return Math.round(num);
						let snum = String(num);
						const pointPos = snum.indexOf(".");
						if (pointPos === -1) return num;
						if (!snum.replace(".", "").split("")[pointPos + pre]) return num;
						const length = snum.length;
						if (snum.charAt(length - 1) === "5") snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
						return Number.parseFloat(Number(snum).toFixed(pre));
					};
					const getPrecision = (value) => {
						if (isNil(value)) return 0;
						const valueString = value.toString();
						const dotPosition = valueString.indexOf(".");
						let precision = 0;
						if (dotPosition !== -1) precision = valueString.length - dotPosition - 1;
						return precision;
					};
					const ensurePrecision = (val, coefficient = 1) => {
						if (!isNumber(val)) return data.currentValue;
						if (val >= Number.MAX_SAFE_INTEGER && coefficient === 1) {
							debugWarn("InputNumber", "The value has reached the maximum safe integer limit.");
							return val;
						} else if (val <= Number.MIN_SAFE_INTEGER && coefficient === -1) {
							debugWarn("InputNumber", "The value has reached the minimum safe integer limit.");
							return val;
						}
						return toPrecision(val + props.step * coefficient);
					};
					const handleKeydown = (event) => {
						const code = getEventCode(event);
						const key = getEventKey(event);
						if (props.disabledScientific && ["e", "E"].includes(key)) {
							event.preventDefault();
							return;
						}
						switch (code) {
							case EVENT_CODE.up:
								event.preventDefault();
								increase();
								break;
							case EVENT_CODE.down:
								event.preventDefault();
								decrease();
						}
					};
					const increase = () => {
						if (props.readonly || inputNumberDisabled.value || maxDisabled.value) return;
						const value = Number(displayValue.value) || 0;
						const newVal = ensurePrecision(value);
						setCurrentValue(newVal);
						emit(INPUT_EVENT, data.currentValue);
						setCurrentValueToModelValue();
					};
					const decrease = () => {
						if (props.readonly || inputNumberDisabled.value || minDisabled.value) return;
						const value = Number(displayValue.value) || 0;
						const newVal = ensurePrecision(value, -1);
						setCurrentValue(newVal);
						emit(INPUT_EVENT, data.currentValue);
						setCurrentValueToModelValue();
					};
					const verifyValue = (value, update) => {
						const { max, min, step, precision, stepStrictly, valueOnClear } = props;
						if (max < min) throwError("InputNumber", "min should not be greater than max.");
						let newVal = !value ? Number(value) : Number.parseFloat(String(value));
						if (isNil(value) || Number.isNaN(newVal)) return null;
						if (value === "") {
							if (valueOnClear === null) return null;
							newVal = isString(valueOnClear) ? {
								min,
								max
							}[valueOnClear] : valueOnClear;
						}
						if (stepStrictly) {
							newVal = toPrecision(Math.round(toPrecision(newVal / step)) * step, precision);
							if (newVal !== value) update && emit("update:modelValue", newVal);
						}
						if (!isUndefined(precision)) newVal = toPrecision(newVal, precision);
						if (newVal > max || newVal < min) {
							newVal = newVal > max ? max : min;
							update && emit("update:modelValue", newVal);
						}
						return newVal;
					};
					const setCurrentValue = (value, emitChange = true) => {
						const oldVal = data.currentValue;
						const newVal = verifyValue(value);
						if (!emitChange) {
							emit(UPDATE_MODEL_EVENT, newVal);
							return;
						}
						data.userInput = null;
						if (oldVal === newVal && value) return;
						emit(UPDATE_MODEL_EVENT, newVal);
						if (oldVal !== newVal) emit(CHANGE_EVENT, newVal, oldVal);
						if (props.validateEvent) formItem?.validate?.("change").catch(NOOP);
						data.currentValue = newVal;
					};
					const handleInput = (value) => {
						data.userInput = value;
						let newVal = value === "" ? null : Number.parseFloat(value);
						if (Number.isNaN(newVal)) newVal = null;
						emit(INPUT_EVENT, newVal);
						setCurrentValue(newVal, false);
					};
					const handleInputChange = (value) => {
						const newVal = value !== "" ? Number.parseFloat(value) : "";
						if (isNumber(newVal) && !Number.isNaN(newVal) || props.formatter && Number.isNaN(newVal) || newVal === "") setCurrentValue(newVal);
						setCurrentValueToModelValue();
						data.userInput = null;
					};
					const focus = () => {
						input.value?.focus?.();
					};
					const blur = () => {
						input.value?.blur?.();
					};
					const handleFocus = (event) => {
						emit("focus", event);
					};
					const handleBlur = (event) => {
						data.userInput = null;
						if (data.currentValue === null && input.value?.input) input.value.input.value = props.formatter?.("") ?? "";
						emit("blur", event);
						if (props.validateEvent) formItem?.validate?.("blur").catch(NOOP);
					};
					const setCurrentValueToModelValue = () => {
						if (data.currentValue !== props.modelValue) data.currentValue = props.modelValue;
					};
					const handleWheel = (e) => {
						if (document.activeElement === e.target) e.preventDefault();
					};
					watch(() => props.modelValue, (value, oldValue) => {
						const newValue = verifyValue(value, true);
						if (data.userInput === null && newValue !== oldValue) data.currentValue = newValue;
					}, { immediate: true });
					watch(() => props.precision, () => {
						data.currentValue = verifyValue(props.modelValue);
					});
					onMounted(() => {
						const { min, max, modelValue } = props;
						const innerInput = input.value?.input;
						innerInput.setAttribute("role", "spinbutton");
						if (Number.isFinite(max)) innerInput.setAttribute("aria-valuemax", String(max));
						else innerInput.removeAttribute("aria-valuemax");
						if (Number.isFinite(min)) innerInput.setAttribute("aria-valuemin", String(min));
						else innerInput.removeAttribute("aria-valuemin");
						innerInput.setAttribute("aria-valuenow", data.currentValue || data.currentValue === 0 ? String(data.currentValue) : "");
						innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
						if (!isNumber(modelValue) && modelValue != null) {
							let val = Number(modelValue);
							if (Number.isNaN(val)) val = null;
							emit(UPDATE_MODEL_EVENT, val);
						}
						innerInput.addEventListener("wheel", handleWheel, { passive: false });
					});
					onUpdated(() => {
						(input.value?.input)?.setAttribute("aria-valuenow", `${data.currentValue ?? ""}`);
					});
					__expose({
						focus,
						blur
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							class: normalizeClass([
								unref(ns).b(),
								unref(ns).m(unref(inputNumberSize)),
								unref(ns).is("disabled", unref(inputNumberDisabled)),
								unref(ns).is("without-controls", !__props.controls),
								unref(ns).is("controls-right", controlsAtRight.value),
								unref(ns).is(__props.align, !!__props.align)
							]),
							onDragstart: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"]))
						}, [
							__props.controls ? withDirectives((openBlock(), createElementBlock("span", {
								key: 0,
								role: "button",
								"aria-label": unref(t)("el.inputNumber.decrease"),
								class: normalizeClass([unref(ns).e("decrease"), unref(ns).is("disabled", minDisabled.value)]),
								onKeydown: withKeys(decrease, ["enter"])
							}, [renderSlot(_ctx.$slots, "decrease-icon", {}, () => [createVNode(unref(ElIcon), null, {
								default: withCtx(() => [controlsAtRight.value ? (openBlock(), createBlock(unref(arrow_down_default), { key: 0 })) : (openBlock(), createBlock(unref(minus_default), { key: 1 }))]),
								_: 1
							})])], 42, _hoisted_1$8)), [[unref(vRepeatClick), decrease]]) : createCommentVNode("v-if", true),
							__props.controls ? withDirectives((openBlock(), createElementBlock("span", {
								key: 1,
								role: "button",
								"aria-label": unref(t)("el.inputNumber.increase"),
								class: normalizeClass([unref(ns).e("increase"), unref(ns).is("disabled", maxDisabled.value)]),
								onKeydown: withKeys(increase, ["enter"])
							}, [renderSlot(_ctx.$slots, "increase-icon", {}, () => [createVNode(unref(ElIcon), null, {
								default: withCtx(() => [controlsAtRight.value ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(plus_default), { key: 1 }))]),
								_: 1
							})])], 42, _hoisted_2$6)), [[unref(vRepeatClick), increase]]) : createCommentVNode("v-if", true),
							createVNode(unref(ElInput), {
								id: __props.id,
								ref_key: "input",
								ref: input,
								type: __props.formatter ? "text" : "number",
								step: __props.step,
								"model-value": displayValue.value,
								placeholder: __props.placeholder,
								readonly: __props.readonly,
								disabled: unref(inputNumberDisabled),
								size: unref(inputNumberSize),
								max: __props.max,
								min: __props.min,
								name: __props.name,
								"aria-label": __props.ariaLabel,
								"validate-event": false,
								inputmode: __props.inputmode,
								formatter: __props.formatter,
								parser: __props.parser,
								tabindex: __props.tabindex,
								onKeydown: handleKeydown,
								onBlur: handleBlur,
								onFocus: handleFocus,
								onInput: handleInput,
								onChange: handleInputChange
							}, createSlots({ _: 2 }, [_ctx.$slots.prefix ? {
								name: "prefix",
								fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")]),
								key: "0"
							} : void 0, _ctx.$slots.suffix ? {
								name: "suffix",
								fn: withCtx(() => [renderSlot(_ctx.$slots, "suffix")]),
								key: "1"
							} : void 0]), 1032, [
								"id",
								"type",
								"step",
								"model-value",
								"placeholder",
								"readonly",
								"disabled",
								"size",
								"max",
								"min",
								"name",
								"aria-label",
								"inputmode",
								"formatter",
								"parser",
								"tabindex"
							])
						], 34);
					};
				}
			});
		}));
		var input_number_default;
		var init_input_number2 = __esmMin((() => {
			init_input_number_vue_vue_type_script_setup_true_lang();
			input_number_default = input_number_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElInputNumber;
		var init_input_number = __esmMin((() => {
			init_install();
			init_input_number2();
			ElInputNumber = withInstall(input_number_default);
		}));
		var isValidComponentSize;
		var init_validator = __esmMin((() => {
			init_size();
			isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
		}));
		var switchProps;
		var switchEmits;
		var init_switch$1 = __esmMin((() => {
			init_event$1();
			init_types();
			init_runtime();
			init_icon$2();
			init_validator();
			init_use_aria();
			switchProps = buildProps({
				modelValue: {
					type: [
						Boolean,
						String,
						Number
					],
					default: false
				},
				disabled: {
					type: Boolean,
					default: void 0
				},
				loading: Boolean,
				size: {
					type: String,
					validator: isValidComponentSize
				},
				width: {
					type: [String, Number],
					default: ""
				},
				inlinePrompt: Boolean,
				inactiveActionIcon: { type: iconPropType },
				activeActionIcon: { type: iconPropType },
				activeIcon: { type: iconPropType },
				inactiveIcon: { type: iconPropType },
				activeText: {
					type: String,
					default: ""
				},
				inactiveText: {
					type: String,
					default: ""
				},
				activeValue: {
					type: [
						Boolean,
						String,
						Number
					],
					default: true
				},
				inactiveValue: {
					type: [
						Boolean,
						String,
						Number
					],
					default: false
				},
				name: {
					type: String,
					default: ""
				},
				validateEvent: {
					type: Boolean,
					default: true
				},
				beforeChange: { type: definePropType(Function) },
				id: String,
				tabindex: { type: [String, Number] },
				...useAriaProps(["ariaLabel"])
			});
			switchEmits = {
				[UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
				[CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
				[INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
			};
		}));
		var _hoisted_1$7;
		var _hoisted_2$5;
		var _hoisted_3$4;
		var _hoisted_4$4;
		var _hoisted_5$4;
		var COMPONENT_NAME$3;
		var switch_vue_vue_type_script_setup_true_lang_default;
		var init_switch_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_event$1();
			init_types();
			init_error();
			init_style$1();
			init_functions();
			init_use_namespace();
			init_icon();
			init_use_form_common_props();
			init_use_form_item();
			init_switch$1();
			init_dist();
			init_vue_runtime_esm_bundler();
			_hoisted_1$7 = [
				"id",
				"aria-checked",
				"aria-disabled",
				"aria-label",
				"name",
				"true-value",
				"false-value",
				"disabled",
				"tabindex"
			];
			_hoisted_2$5 = ["aria-hidden"];
			_hoisted_3$4 = { key: 1 };
			_hoisted_4$4 = { key: 1 };
			_hoisted_5$4 = ["aria-hidden"];
			COMPONENT_NAME$3 = "ElSwitch";
			switch_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: COMPONENT_NAME$3,
				__name: "switch",
				props: switchProps,
				emits: switchEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const props = __props;
					const emit = __emit;
					const { formItem } = useFormItem();
					const switchSize = useFormSize();
					const ns = useNamespace("switch");
					const { inputId } = useFormItemInputId(props, { formItemContext: formItem });
					const switchDisabled = useFormDisabled(computed(() => {
						if (props.loading) return true;
					}));
					const isControlled = ref(props.modelValue !== false);
					const input = shallowRef();
					const switchKls = computed(() => [
						ns.b(),
						ns.m(switchSize.value),
						ns.is("disabled", switchDisabled.value),
						ns.is("checked", checked.value)
					]);
					const labelLeftKls = computed(() => [
						ns.e("label"),
						ns.em("label", "left"),
						ns.is("active", !checked.value)
					]);
					const labelRightKls = computed(() => [
						ns.e("label"),
						ns.em("label", "right"),
						ns.is("active", checked.value)
					]);
					const coreStyle = computed(() => ({ width: addUnit(props.width) }));
					watch(() => props.modelValue, () => {
						isControlled.value = true;
					});
					const actualValue = computed(() => {
						return isControlled.value ? props.modelValue : false;
					});
					const checked = computed(() => actualValue.value === props.activeValue);
					if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
						debugWarn(COMPONENT_NAME$3, "model-value must be active-value or inactive-value");
						emit(UPDATE_MODEL_EVENT, props.inactiveValue);
						emit(CHANGE_EVENT, props.inactiveValue);
						emit(INPUT_EVENT, props.inactiveValue);
					}
					watch(checked, (val) => {
						input.value.checked = val;
						if (props.validateEvent) formItem?.validate?.("change").catch(NOOP);
					});
					const handleChange = () => {
						const val = checked.value ? props.inactiveValue : props.activeValue;
						emit(UPDATE_MODEL_EVENT, val);
						emit(CHANGE_EVENT, val);
						emit(INPUT_EVENT, val);
						nextTick(() => {
							input.value.checked = checked.value;
						});
					};
					const switchValue = () => {
						if (switchDisabled.value) return;
						const { beforeChange } = props;
						if (!beforeChange) {
							handleChange();
							return;
						}
						const shouldChange = beforeChange();
						if (![isPromise(shouldChange), isBoolean(shouldChange)].includes(true)) throwError(COMPONENT_NAME$3, "beforeChange must return type `Promise<boolean>` or `boolean`");
						if (isPromise(shouldChange)) shouldChange.then((result) => {
							if (result) handleChange();
						}).catch((e) => {
							debugWarn(COMPONENT_NAME$3, `some error occurred: ${e}`);
						});
						else if (shouldChange) handleChange();
					};
					const focus = () => {
						input.value?.focus?.();
					};
					onMounted(() => {
						input.value.checked = checked.value;
					});
					__expose({
						focus,
						checked
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							class: normalizeClass(switchKls.value),
							onClick: withModifiers(switchValue, ["prevent"])
						}, [
							createBaseVNode("input", {
								id: unref(inputId),
								ref_key: "input",
								ref: input,
								class: normalizeClass(unref(ns).e("input")),
								type: "checkbox",
								role: "switch",
								"aria-checked": checked.value,
								"aria-disabled": unref(switchDisabled),
								"aria-label": __props.ariaLabel,
								name: __props.name,
								"true-value": __props.activeValue,
								"false-value": __props.inactiveValue,
								disabled: unref(switchDisabled),
								tabindex: __props.tabindex,
								onChange: handleChange,
								onKeydown: withKeys(switchValue, ["enter"])
							}, null, 42, _hoisted_1$7),
							!__props.inlinePrompt && (__props.inactiveIcon || __props.inactiveText || _ctx.$slots.inactive) ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(labelLeftKls.value)
							}, [renderSlot(_ctx.$slots, "inactive", {}, () => [__props.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.inactiveIcon)))]),
								_: 1
							})) : createCommentVNode("v-if", true), !__props.inactiveIcon && __props.inactiveText ? (openBlock(), createElementBlock("span", {
								key: 1,
								"aria-hidden": checked.value
							}, toDisplayString(__props.inactiveText), 9, _hoisted_2$5)) : createCommentVNode("v-if", true)])], 2)) : createCommentVNode("v-if", true),
							createBaseVNode("span", {
								class: normalizeClass(unref(ns).e("core")),
								style: normalizeStyle(coreStyle.value)
							}, [__props.inlinePrompt ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(unref(ns).e("inner"))
							}, [!checked.value ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(unref(ns).e("inner-wrapper"))
							}, [renderSlot(_ctx.$slots, "inactive", {}, () => [__props.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.inactiveIcon)))]),
								_: 1
							})) : createCommentVNode("v-if", true), !__props.inactiveIcon && __props.inactiveText ? (openBlock(), createElementBlock("span", _hoisted_3$4, toDisplayString(__props.inactiveText), 1)) : createCommentVNode("v-if", true)])], 2)) : (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(unref(ns).e("inner-wrapper"))
							}, [renderSlot(_ctx.$slots, "active", {}, () => [__props.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.activeIcon)))]),
								_: 1
							})) : createCommentVNode("v-if", true), !__props.activeIcon && __props.activeText ? (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(__props.activeText), 1)) : createCommentVNode("v-if", true)])], 2))], 2)) : createCommentVNode("v-if", true), createBaseVNode("div", { class: normalizeClass(unref(ns).e("action")) }, [__props.loading ? (openBlock(), createBlock(unref(ElIcon), {
								key: 0,
								class: normalizeClass(unref(ns).is("loading"))
							}, {
								default: withCtx(() => [createVNode(unref(loading_default))]),
								_: 1
							}, 8, ["class"])) : checked.value ? renderSlot(_ctx.$slots, "active-action", { key: 1 }, () => [__props.activeActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.activeActionIcon)))]),
								_: 1
							})) : createCommentVNode("v-if", true)]) : !checked.value ? renderSlot(_ctx.$slots, "inactive-action", { key: 2 }, () => [__props.inactiveActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.inactiveActionIcon)))]),
								_: 1
							})) : createCommentVNode("v-if", true)]) : createCommentVNode("v-if", true)], 2)], 6),
							!__props.inlinePrompt && (__props.activeIcon || __props.activeText || _ctx.$slots.active) ? (openBlock(), createElementBlock("span", {
								key: 1,
								class: normalizeClass(labelRightKls.value)
							}, [renderSlot(_ctx.$slots, "active", {}, () => [__props.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
								default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.activeIcon)))]),
								_: 1
							})) : createCommentVNode("v-if", true), !__props.activeIcon && __props.activeText ? (openBlock(), createElementBlock("span", {
								key: 1,
								"aria-hidden": !checked.value
							}, toDisplayString(__props.activeText), 9, _hoisted_5$4)) : createCommentVNode("v-if", true)])], 2)) : createCommentVNode("v-if", true)
						], 2);
					};
				}
			});
		}));
		var switch_default;
		var init_switch2 = __esmMin((() => {
			init_switch_vue_vue_type_script_setup_true_lang();
			switch_default = switch_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElSwitch;
		var init_switch = __esmMin((() => {
			init_install();
			init_switch2();
			ElSwitch = withInstall(switch_default);
		}));
		var tabsRootContextKey;
		var init_constants = __esmMin((() => {
			tabsRootContextKey = Symbol("tabsRootContextKey");
		}));
		var tabBarProps;
		var init_tab_bar = __esmMin((() => {
			init_runtime();
			init_typescript();
			tabBarProps = buildProps({
				tabs: {
					type: definePropType(Array),
					default: () => mutable([])
				},
				tabRefs: {
					type: definePropType(Object),
					default: () => mutable({})
				}
			});
		}));
		var COMPONENT_NAME$2;
		var tab_bar_vue_vue_type_script_setup_true_lang_default;
		var init_tab_bar_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_types();
			init_raf();
			init_strings();
			init_error();
			init_use_namespace();
			init_constants();
			init_tab_bar();
			init_dist$2();
			init_vue_runtime_esm_bundler();
			COMPONENT_NAME$2 = "ElTabBar";
			tab_bar_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: COMPONENT_NAME$2,
				__name: "tab-bar",
				props: tabBarProps,
				setup(__props, { expose: __expose }) {
					const props = __props;
					const rootTabs = inject(tabsRootContextKey);
					if (!rootTabs) throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
					const ns = useNamespace("tabs");
					const barRef = ref();
					const barStyle = ref();
					const barReady = ref(false);
					const mergedBarStyle = computed(() => {
						if (barReady.value) return barStyle.value;
						return {
							...barStyle.value,
							transition: "none"
						};
					});
					const barVisible = computed(() => isUndefined(rootTabs.props.defaultValue) || Boolean(barStyle.value?.transform));
					const getBarStyle = () => {
						let offset = 0;
						let tabSize = 0;
						const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
						const sizeDir = sizeName === "width" ? "x" : "y";
						const position = sizeDir === "x" ? "left" : "top";
						props.tabs.every((tab) => {
							if (isUndefined(tab.paneName)) return false;
							const $el = props.tabRefs[tab.paneName];
							if (!$el) return false;
							if (!tab.active) return true;
							offset = $el[`offset${capitalize(position)}`];
							tabSize = $el[`client${capitalize(sizeName)}`];
							const tabStyles = window.getComputedStyle($el);
							if (sizeName === "width") {
								tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
								offset += Number.parseFloat(tabStyles.paddingLeft);
							}
							return false;
						});
						return {
							[sizeName]: `${tabSize}px`,
							transform: `translate${capitalize(sizeDir)}(${offset}px)`
						};
					};
					const update = () => {
						barStyle.value = getBarStyle();
						if (!barReady.value) rAF(() => rAF(() => {
							barReady.value = true;
						}));
					};
					const tabObservers = [];
					const observerTabs = () => {
						tabObservers.forEach((observer) => observer.stop());
						tabObservers.length = 0;
						Object.values(props.tabRefs).forEach((tab) => {
							tabObservers.push(useResizeObserver(tab, update));
						});
					};
					watch(() => props.tabs, async () => {
						await nextTick();
						update();
						observerTabs();
					}, { immediate: true });
					const barObserver = useResizeObserver(barRef, () => update());
					onBeforeUnmount(() => {
						tabObservers.forEach((observer) => observer.stop());
						tabObservers.length = 0;
						barObserver.stop();
					});
					__expose({
						ref: barRef,
						update
					});
					return (_ctx, _cache) => {
						return openBlock(), createElementBlock("div", {
							ref_key: "barRef",
							ref: barRef,
							class: normalizeClass([
								unref(ns).e("active-bar"),
								unref(ns).is(unref(rootTabs).props.tabPosition),
								unref(ns).is("hidden", !barVisible.value)
							]),
							style: normalizeStyle(mergedBarStyle.value)
						}, null, 6);
					};
				}
			});
		}));
		var tab_bar_default;
		var init_tab_bar2 = __esmMin((() => {
			init_tab_bar_vue_vue_type_script_setup_true_lang();
			tab_bar_default = tab_bar_vue_vue_type_script_setup_true_lang_default;
		}));
		var TOUCH_SCROLL_THRESHOLD;
		var useTabNavTouch;
		var init_use_tab_nav_touch = __esmMin((() => {
			init_position();
			init_import();
			init_vue_runtime_esm_bundler();
			TOUCH_SCROLL_THRESHOLD = 5;
			useTabNavTouch = ({ scrollable, navOffset, navSize, navContainerSize, isHorizontal }) => {
				const isTouchScrolling = ref(false);
				const maxOffset = computed(() => Math.max(navSize.value - navContainerSize.value, 0));
				let touchState;
				let isMainAxisTouch;
				const handleTouchStart = (event) => {
					if (!scrollable.value || event.touches.length !== 1) return;
					const { clientX, clientY } = getClientXY(event);
					touchState = {
						startX: clientX,
						startY: clientY,
						startOffset: navOffset.value
					};
					isMainAxisTouch = void 0;
				};
				const handleTouchMove = (event) => {
					if (!touchState || !scrollable.value) return;
					if (event.touches.length !== 1) {
						handleTouchEnd();
						return;
					}
					const { clientX, clientY } = getClientXY(event);
					const deltaX = touchState.startX - clientX;
					const deltaY = touchState.startY - clientY;
					const mainAxisDelta = isHorizontal.value ? deltaX : deltaY;
					const crossAxisDelta = isHorizontal.value ? deltaY : deltaX;
					const mainAxisDistance = Math.abs(mainAxisDelta);
					const crossAxisDistance = Math.abs(crossAxisDelta);
					if (isUndefined$1(isMainAxisTouch)) {
						if (Math.max(mainAxisDistance, crossAxisDistance) <= TOUCH_SCROLL_THRESHOLD) return;
						isMainAxisTouch = mainAxisDistance > crossAxisDistance;
					}
					if (!isMainAxisTouch) return;
					const nextOffset = clamp(touchState.startOffset + mainAxisDelta, 0, maxOffset.value);
					if (maxOffset.value <= 0 || nextOffset === navOffset.value || !event.cancelable) return;
					event.preventDefault();
					isTouchScrolling.value = true;
					navOffset.value = nextOffset;
				};
				const handleTouchEnd = () => {
					touchState = void 0;
					isMainAxisTouch = void 0;
					isTouchScrolling.value = false;
				};
				return {
					isTouchScrolling,
					handleTouchStart,
					handleTouchMove,
					handleTouchEnd
				};
			};
		}));
		var tabNavProps;
		var tabNavEmits;
		var COMPONENT_NAME$1;
		var TabNav;
		var init_tab_nav = __esmMin((() => {
			init_aria$1();
			init_event();
			init_raf();
			init_error();
			init_runtime();
			init_typescript();
			init_numbers();
			init_use_namespace();
			init_icon();
			init_use_wheel();
			init_constants();
			init_tab_bar2();
			init_use_tab_nav_touch();
			init_dist$2();
			init_import();
			init_dist();
			init_vue_runtime_esm_bundler();
			tabNavProps = buildProps({
				panes: {
					type: definePropType(Array),
					default: () => mutable([])
				},
				currentName: {
					type: [String, Number],
					default: ""
				},
				editable: Boolean,
				type: {
					type: String,
					values: [
						"card",
						"border-card",
						""
					],
					default: ""
				},
				stretch: Boolean,
				tabindex: {
					type: [String, Number],
					default: void 0
				}
			});
			tabNavEmits = {
				tabClick: (tab, tabName, ev) => ev instanceof Event,
				tabRemove: (tab, ev) => ev instanceof Event
			};
			COMPONENT_NAME$1 = "ElTabNav";
			TabNav = defineComponent({
				name: COMPONENT_NAME$1,
				props: tabNavProps,
				emits: tabNavEmits,
				setup(props, { expose, emit }) {
					const rootTabs = inject(tabsRootContextKey);
					if (!rootTabs) throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
					const ns = useNamespace("tabs");
					const visibility = useDocumentVisibility();
					const focused = useWindowFocus();
					const navScroll$ = ref();
					const nav$ = ref();
					const el$ = ref();
					const tabRefsMap = ref({});
					const tabBarRef = ref();
					const scrollable = ref(false);
					const navOffset = ref(0);
					const isFocus = ref(false);
					const focusable = ref(true);
					const isWheelScrolling = ref(false);
					const tracker = shallowRef();
					const isHorizontal = computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition));
					const sizeName = computed(() => isHorizontal.value ? "width" : "height");
					const navStyle = computed(() => {
						const dir = sizeName.value === "width" ? "X" : "Y";
						return {
							transition: isWheelScrolling.value || isTouchScrolling.value ? "none" : void 0,
							transform: `translate${dir}(-${navOffset.value}px)`
						};
					});
					const { width: navContainerWidth, height: navContainerHeight } = useElementSize(navScroll$);
					const { width: navWidth, height: navHeight } = useElementSize(nav$, {
						width: 0,
						height: 0
					}, { box: "border-box" });
					const navContainerSize = computed(() => isHorizontal.value ? navContainerWidth.value : navContainerHeight.value);
					const navSize = computed(() => isHorizontal.value ? navWidth.value : navHeight.value);
					const { onWheel } = useWheel({
						atStartEdge: computed(() => navOffset.value <= 0),
						atEndEdge: computed(() => navSize.value - navOffset.value <= navContainerSize.value),
						layout: computed(() => isHorizontal.value ? "horizontal" : "vertical")
					}, (offset) => {
						navOffset.value = clamp(navOffset.value + offset, 0, navSize.value - navContainerSize.value);
					});
					const handleWheel = (event) => {
						isWheelScrolling.value = true;
						onWheel(event);
						rAF(() => {
							isWheelScrolling.value = false;
						});
					};
					const { isTouchScrolling, handleTouchStart, handleTouchMove, handleTouchEnd } = useTabNavTouch({
						scrollable,
						navOffset,
						navSize,
						navContainerSize,
						isHorizontal
					});
					const scrollPrev = () => {
						if (!navScroll$.value) return;
						const containerSize = navScroll$.value.getBoundingClientRect()[sizeName.value];
						const currentOffset = navOffset.value;
						if (!currentOffset) return;
						const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
						navOffset.value = newOffset;
					};
					const scrollNext = () => {
						if (!navScroll$.value || !nav$.value) return;
						const navSize = nav$.value.getBoundingClientRect()[sizeName.value];
						const containerSize = navScroll$.value.getBoundingClientRect()[sizeName.value];
						const currentOffset = navOffset.value;
						if (!isGreaterThan(navSize - currentOffset, containerSize)) return;
						const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
						navOffset.value = newOffset;
					};
					const scrollToActiveTab = async () => {
						const nav = nav$.value;
						if (!scrollable.value || !el$.value || !navScroll$.value || !nav) return;
						await nextTick();
						const activeTab = tabRefsMap.value[props.currentName];
						if (!activeTab) return;
						const navScroll = navScroll$.value;
						const activeTabBounding = activeTab.getBoundingClientRect();
						const navScrollBounding = navScroll.getBoundingClientRect();
						const navScrollLeft = navScrollBounding.left + 1;
						const navScrollRight = navScrollBounding.right - 1;
						const navBounding = nav.getBoundingClientRect();
						const maxOffset = isHorizontal.value ? navBounding.width - navScrollBounding.width : navBounding.height - navScrollBounding.height;
						const currentOffset = navOffset.value;
						let newOffset = currentOffset;
						if (isHorizontal.value) {
							if (activeTabBounding.left < navScrollLeft) newOffset = currentOffset - (navScrollLeft - activeTabBounding.left);
							if (activeTabBounding.right > navScrollRight) newOffset = currentOffset + activeTabBounding.right - navScrollRight;
						} else {
							if (activeTabBounding.top < navScrollBounding.top) newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
							if (activeTabBounding.bottom > navScrollBounding.bottom) newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
						}
						newOffset = Math.max(newOffset, 0);
						navOffset.value = Math.min(newOffset, maxOffset);
					};
					const update = () => {
						if (!nav$.value || !navScroll$.value) return;
						props.stretch && tabBarRef.value?.update();
						const navSize = nav$.value.getBoundingClientRect()[sizeName.value];
						const containerSize = navScroll$.value.getBoundingClientRect()[sizeName.value];
						const currentOffset = navOffset.value;
						if (containerSize < navSize) {
							scrollable.value = scrollable.value || {};
							scrollable.value.prev = currentOffset;
							scrollable.value.next = isGreaterThan(navSize, currentOffset + containerSize);
							if (isGreaterThan(containerSize, navSize - currentOffset)) navOffset.value = navSize - containerSize;
						} else {
							scrollable.value = false;
							if (currentOffset > 0) navOffset.value = 0;
						}
					};
					const changeTab = (event) => {
						const code = getEventCode(event);
						let step = 0;
						switch (code) {
							case EVENT_CODE.left:
							case EVENT_CODE.up:
								step = -1;
								break;
							case EVENT_CODE.right:
							case EVENT_CODE.down:
								step = 1;
								break;
							default: return;
						}
						const tabList = Array.from(event.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
						let nextIndex = tabList.indexOf(event.target) + step;
						if (nextIndex < 0) nextIndex = tabList.length - 1;
						else if (nextIndex >= tabList.length) nextIndex = 0;
						tabList[nextIndex].focus({ preventScroll: true });
						tabList[nextIndex].click();
						setFocus();
					};
					const setFocus = () => {
						if (focusable.value) isFocus.value = true;
					};
					const removeFocus = () => isFocus.value = false;
					const setRefs = (el, key) => {
						tabRefsMap.value[key] = el;
					};
					const focusActiveTab = async () => {
						await nextTick();
						tabRefsMap.value[props.currentName]?.focus({ preventScroll: true });
					};
					watch(visibility, (visibility) => {
						if (visibility === "hidden") focusable.value = false;
						else if (visibility === "visible") setTimeout(() => focusable.value = true, 50);
					});
					watch(focused, (focused) => {
						if (focused) setTimeout(() => focusable.value = true, 50);
						else focusable.value = false;
					});
					useResizeObserver(el$, () => {
						rAF(update);
					});
					onMounted(() => setTimeout(() => scrollToActiveTab(), 0));
					onUpdated(() => update());
					expose({
						scrollToActiveTab,
						removeFocus,
						focusActiveTab,
						tabListRef: nav$,
						tabBarRef,
						scheduleRender: () => triggerRef(tracker)
					});
					return () => {
						const scrollBtn = scrollable.value ? [createVNode("span", {
							"class": [ns.e("nav-prev"), ns.is("disabled", !scrollable.value.prev)],
							"onClick": scrollPrev
						}, [createVNode(ElIcon, null, { default: () => [createVNode(arrow_left_default, null, null)] })]), createVNode("span", {
							"class": [ns.e("nav-next"), ns.is("disabled", !scrollable.value.next)],
							"onClick": scrollNext
						}, [createVNode(ElIcon, null, { default: () => [createVNode(arrow_right_default, null, null)] })])] : null;
						const tabs = props.panes.map((pane, index) => {
							const uid = pane.uid;
							const disabled = pane.props.disabled;
							const tabName = pane.props.name ?? pane.index ?? `${index}`;
							const closable = !disabled && (pane.isClosable || pane.props.closable !== false && props.editable);
							pane.index = `${index}`;
							const btnClose = closable ? createVNode(ElIcon, {
								"class": "is-icon-close",
								"onClick": (ev) => emit("tabRemove", pane, ev)
							}, { default: () => [createVNode(close_default, null, null)] }) : null;
							const tabLabelContent = pane.slots.label?.() || pane.props.label;
							const tabindex = !disabled && pane.active ? props.tabindex ?? rootTabs.props.tabindex : -1;
							return createVNode("div", {
								"ref": (el) => setRefs(el, tabName),
								"class": [
									ns.e("item"),
									ns.is(rootTabs.props.tabPosition),
									ns.is("active", pane.active),
									ns.is("disabled", disabled),
									ns.is("closable", closable),
									ns.is("focus", isFocus.value)
								],
								"id": `tab-${tabName}`,
								"key": `tab-${uid}`,
								"aria-controls": `pane-${tabName}`,
								"role": "tab",
								"aria-selected": pane.active,
								"tabindex": tabindex,
								"onFocus": () => setFocus(),
								"onBlur": () => removeFocus(),
								"onClick": (ev) => {
									removeFocus();
									emit("tabClick", pane, tabName, ev);
								},
								"onKeydown": (ev) => {
									const code = getEventCode(ev);
									if (closable && (code === EVENT_CODE.delete || code === EVENT_CODE.backspace)) emit("tabRemove", pane, ev);
								}
							}, [...[tabLabelContent, btnClose]]);
						});
						tracker.value;
						return createVNode("div", {
							"ref": el$,
							"class": [
								ns.e("nav-wrap"),
								ns.is("scrollable", !!scrollable.value),
								ns.is(rootTabs.props.tabPosition)
							]
						}, [scrollBtn, createVNode("div", {
							"class": ns.e("nav-scroll"),
							"ref": navScroll$
						}, [props.panes.length > 0 ? createVNode("div", {
							"class": [
								ns.e("nav"),
								ns.is(rootTabs.props.tabPosition),
								ns.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))
							],
							"ref": nav$,
							"style": navStyle.value,
							"role": "tablist",
							"onKeydown": changeTab,
							"onWheel": handleWheel,
							"onTouchstart": handleTouchStart,
							"onTouchmove": handleTouchMove,
							"onTouchend": handleTouchEnd,
							"onTouchcancel": handleTouchEnd
						}, [...[!props.type ? createVNode(tab_bar_default, {
							"ref": tabBarRef,
							"tabs": [...props.panes],
							"tabRefs": tabRefsMap.value
						}, null) : null, tabs]]) : null])]);
					};
				}
			});
		}));
		var tabsProps;
		var isPaneName;
		var tabsEmits;
		var Tabs;
		var init_tabs$1 = __esmMin((() => {
			init_aria$1();
			init_event$1();
			init_event();
			init_types();
			init_runtime();
			init_use_namespace();
			init_use_ordered_children();
			init_icon();
			init_constants();
			init_tab_nav();
			init_import();
			init_dist();
			init_vue_runtime_esm_bundler();
			tabsProps = buildProps({
				type: {
					type: String,
					values: [
						"card",
						"border-card",
						""
					],
					default: ""
				},
				closable: Boolean,
				addable: Boolean,
				modelValue: { type: [String, Number] },
				defaultValue: { type: [String, Number] },
				editable: Boolean,
				tabPosition: {
					type: String,
					values: [
						"top",
						"right",
						"bottom",
						"left"
					],
					default: "top"
				},
				beforeLeave: {
					type: definePropType(Function),
					default: () => true
				},
				stretch: Boolean,
				tabindex: {
					type: [String, Number],
					default: 0
				}
			});
			isPaneName = (value) => isString(value) || isNumber(value);
			tabsEmits = {
				[UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
				tabClick: (pane, ev) => ev instanceof Event,
				tabChange: (name) => isPaneName(name),
				edit: (paneName, action) => ["remove", "add"].includes(action),
				tabRemove: (name) => isPaneName(name),
				tabAdd: () => true
			};
			Tabs = defineComponent({
				name: "ElTabs",
				props: tabsProps,
				emits: tabsEmits,
				setup(props, { emit, slots, expose }) {
					const ns = useNamespace("tabs");
					const isVertical = computed(() => ["left", "right"].includes(props.tabPosition));
					const { children: panes, addChild: registerPane, removeChild: unregisterPane, ChildrenSorter: PanesSorter } = useOrderedChildren(getCurrentInstance(), "ElTabPane");
					const nav$ = ref();
					const currentName = ref((isUndefined(props.modelValue) ? props.defaultValue : props.modelValue) ?? "0");
					const setCurrentName = async (value, trigger = false) => {
						if (currentName.value === value || isUndefined(value)) return;
						try {
							let canLeave;
							if (props.beforeLeave) {
								const result = props.beforeLeave(value, currentName.value);
								canLeave = result instanceof Promise ? await result : result;
							} else canLeave = true;
							if (canLeave !== false) {
								const isFocusInsidePane = panes.value.find((item) => item.paneName === currentName.value)?.isFocusInsidePane();
								currentName.value = value;
								if (trigger) {
									emit(UPDATE_MODEL_EVENT, value);
									emit("tabChange", value);
								}
								nav$.value?.removeFocus?.();
								if (isFocusInsidePane) nav$.value?.focusActiveTab();
							}
						} catch {}
					};
					const handleTabClick = (tab, tabName, event) => {
						if (tab.props.disabled) return;
						emit("tabClick", tab, event);
						setCurrentName(tabName, true);
					};
					const handleTabRemove = (pane, ev) => {
						if (pane.props.disabled || isUndefined(pane.props.name)) return;
						ev.stopPropagation();
						emit("edit", pane.props.name, "remove");
						emit("tabRemove", pane.props.name);
					};
					const handleTabAdd = () => {
						emit("edit", void 0, "add");
						emit("tabAdd");
					};
					const handleKeydown = (event) => {
						const code = getEventCode(event);
						if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter].includes(code)) handleTabAdd();
					};
					const swapChildren = (vnode) => {
						const actualFirstChild = vnode.el.firstChild;
						const firstChild = ["bottom", "right"].includes(props.tabPosition) ? vnode.children[0].el : vnode.children[1].el;
						if (actualFirstChild !== firstChild) actualFirstChild.before(firstChild);
					};
					watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
					watch(currentName, async () => {
						await nextTick();
						nav$.value?.scrollToActiveTab();
					});
					provide(tabsRootContextKey, {
						props,
						currentName,
						registerPane,
						unregisterPane,
						nav$
					});
					expose({
						currentName,
						get tabNavRef() {
							return omit(nav$.value, ["scheduleRender"]);
						}
					});
					return () => {
						const addSlot = slots["add-icon"];
						const newButton = props.editable || props.addable ? createVNode("div", {
							"class": [ns.e("new-tab"), isVertical.value && ns.e("new-tab-vertical")],
							"tabindex": props.tabindex,
							"onClick": handleTabAdd,
							"onKeydown": handleKeydown
						}, [addSlot ? renderSlot(slots, "add-icon") : createVNode(ElIcon, { "class": ns.is("icon-plus") }, { default: () => [createVNode(plus_default, null, null)] })]) : null;
						const tabNav = () => createVNode(TabNav, {
							"ref": nav$,
							"currentName": currentName.value,
							"editable": props.editable,
							"type": props.type,
							"panes": panes.value,
							"stretch": props.stretch,
							"onTabClick": handleTabClick,
							"onTabRemove": handleTabRemove
						}, null);
						const header = createVNode("div", { "class": [
							ns.e("header"),
							isVertical.value && ns.e("header-vertical"),
							ns.is(props.tabPosition)
						] }, [createVNode(PanesSorter, null, {
							default: tabNav,
							$stable: true
						}), newButton]);
						const panels = createVNode("div", { "class": ns.e("content") }, [renderSlot(slots, "default")]);
						return createVNode("div", {
							"class": [
								ns.b(),
								ns.m(props.tabPosition),
								{
									[ns.m("card")]: props.type === "card",
									[ns.m("border-card")]: props.type === "border-card"
								}
							],
							"onVnodeMounted": swapChildren,
							"onVnodeUpdated": swapChildren
						}, [panels, header]);
					};
				}
			});
		}));
		var tabPaneProps;
		var init_tab_pane = __esmMin((() => {
			init_runtime();
			tabPaneProps = buildProps({
				label: {
					type: String,
					default: ""
				},
				name: { type: [String, Number] },
				closable: {
					type: Boolean,
					default: void 0
				},
				disabled: Boolean,
				lazy: Boolean
			});
		}));
		var _hoisted_1$6;
		var COMPONENT_NAME;
		var tab_pane_vue_vue_type_script_setup_true_lang_default;
		var init_tab_pane_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_error();
			init_use_namespace();
			init_constants();
			init_tab_pane();
			init_vue_runtime_esm_bundler();
			_hoisted_1$6 = [
				"id",
				"aria-hidden",
				"aria-labelledby"
			];
			COMPONENT_NAME = "ElTabPane";
			tab_pane_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: COMPONENT_NAME,
				__name: "tab-pane",
				props: tabPaneProps,
				setup(__props) {
					const props = __props;
					const instance = getCurrentInstance();
					const slots = useSlots();
					const tabsRoot = inject(tabsRootContextKey);
					if (!tabsRoot) throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
					const ns = useNamespace("tab-pane");
					const paneRef = ref();
					const index = ref();
					const isClosable = computed(() => props.closable ?? tabsRoot.props.closable);
					const active = computed(() => tabsRoot.currentName.value === (props.name ?? index.value));
					const loaded = ref(active.value);
					const paneName = computed(() => props.name ?? index.value);
					const shouldBeRender = computed(() => !props.lazy || loaded.value || active.value);
					const isFocusInsidePane = () => {
						return paneRef.value?.contains(document.activeElement);
					};
					watch(active, (val) => {
						if (val) loaded.value = true;
					});
					const pane = reactive({
						uid: instance.uid,
						getVnode: () => instance.vnode,
						slots,
						props,
						paneName,
						active,
						index,
						isClosable,
						isFocusInsidePane
					});
					tabsRoot.registerPane(pane);
					onBeforeUnmount(() => {
						tabsRoot.unregisterPane(pane);
					});
					onBeforeUpdate(() => {
						if (slots.label) tabsRoot.nav$.value?.scheduleRender();
					});
					return (_ctx, _cache) => {
						return shouldBeRender.value ? withDirectives((openBlock(), createElementBlock("div", {
							key: 0,
							id: `pane-${paneName.value}`,
							ref_key: "paneRef",
							ref: paneRef,
							class: normalizeClass(unref(ns).b()),
							role: "tabpanel",
							"aria-hidden": !active.value,
							"aria-labelledby": `tab-${paneName.value}`
						}, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$6)), [[vShow, active.value]]) : createCommentVNode("v-if", true);
					};
				}
			});
		}));
		var tab_pane_default;
		var init_tab_pane2 = __esmMin((() => {
			init_tab_pane_vue_vue_type_script_setup_true_lang();
			tab_pane_default = tab_pane_vue_vue_type_script_setup_true_lang_default;
		}));
		var ElTabs;
		var ElTabPane;
		var init_tabs = __esmMin((() => {
			init_install();
			init_tabs$1();
			init_tab_pane2();
			ElTabs = withInstall(Tabs, { TabPane: tab_pane_default });
			ElTabPane = withNoopInstall(tab_pane_default);
		}));
		var messageTypes;
		var messagePlacement;
		var messageDefaults;
		var messageProps;
		var messageEmits;
		var init_message$2 = __esmMin((() => {
			init_browser();
			init_runtime();
			init_icon$2();
			init_typescript();
			messageTypes = [
				"primary",
				"success",
				"info",
				"warning",
				"error"
			];
			messagePlacement = [
				"top",
				"top-left",
				"top-right",
				"bottom",
				"bottom-left",
				"bottom-right"
			];
			messageDefaults = mutable({
				customClass: "",
				dangerouslyUseHTMLString: false,
				duration: 3e3,
				icon: void 0,
				id: "",
				message: "",
				onClose: void 0,
				showClose: false,
				type: "info",
				plain: false,
				offset: 16,
				placement: void 0,
				zIndex: 0,
				grouping: false,
				repeatNum: 1,
				appendTo: isClient ? document.body : void 0
			});
			messageProps = buildProps({
				customClass: {
					type: definePropType([
						String,
						Array,
						Object,
						Boolean
					]),
					default: messageDefaults.customClass
				},
				dangerouslyUseHTMLString: {
					type: Boolean,
					default: messageDefaults.dangerouslyUseHTMLString
				},
				duration: {
					type: Number,
					default: messageDefaults.duration
				},
				icon: {
					type: iconPropType,
					default: messageDefaults.icon
				},
				id: {
					type: String,
					default: messageDefaults.id
				},
				message: {
					type: definePropType([
						String,
						Object,
						Function
					]),
					default: messageDefaults.message
				},
				onClose: {
					type: definePropType(Function),
					default: messageDefaults.onClose
				},
				showClose: {
					type: Boolean,
					default: messageDefaults.showClose
				},
				type: {
					type: String,
					values: messageTypes,
					default: messageDefaults.type
				},
				plain: {
					type: Boolean,
					default: messageDefaults.plain
				},
				offset: {
					type: Number,
					default: messageDefaults.offset
				},
				placement: {
					type: String,
					values: messagePlacement,
					default: messageDefaults.placement
				},
				zIndex: {
					type: Number,
					default: messageDefaults.zIndex
				},
				grouping: {
					type: Boolean,
					default: messageDefaults.grouping
				},
				repeatNum: {
					type: Number,
					default: messageDefaults.repeatNum
				}
			});
			messageEmits = { destroy: () => true };
		}));
		var placementInstances;
		var getOrCreatePlacementInstances;
		var getInstance;
		var getLastOffset;
		var getOffsetOrSpace;
		var init_instance = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			placementInstances = shallowReactive({});
			getOrCreatePlacementInstances = (placement) => {
				if (!placementInstances[placement]) placementInstances[placement] = shallowReactive([]);
				return placementInstances[placement];
			};
			getInstance = (id, placement) => {
				const instances = placementInstances[placement] || [];
				const idx = instances.findIndex((instance) => instance.id === id);
				const current = instances[idx];
				let prev;
				if (idx > 0) prev = instances[idx - 1];
				return {
					current,
					prev
				};
			};
			getLastOffset = (id, placement) => {
				const { prev } = getInstance(id, placement);
				if (!prev) return 0;
				return prev.vm.exposed.bottom.value;
			};
			getOffsetOrSpace = (id, offset, placement) => {
				return (placementInstances[placement] || []).findIndex((instance) => instance.id === id) > 0 ? 16 : offset;
			};
		}));
		var _hoisted_1$5;
		var _hoisted_2$4;
		var message_vue_vue_type_script_setup_true_lang_default;
		var init_message_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_aria$1();
			init_event();
			init_icon$2();
			init_icon();
			init_badge();
			init_use_global_config();
			init_message$2();
			init_instance();
			init_dist$2();
			init_vue_runtime_esm_bundler();
			_hoisted_1$5 = ["id"];
			_hoisted_2$4 = ["innerHTML"];
			message_vue_vue_type_script_setup_true_lang_default = defineComponent({
				name: "ElMessage",
				__name: "message",
				props: messageProps,
				emits: messageEmits,
				setup(__props, { expose: __expose, emit: __emit }) {
					const { Close } = TypeComponents;
					const props = __props;
					const emit = __emit;
					const isStartTransition = ref(false);
					const { ns, zIndex } = useGlobalComponentSettings("message");
					const { currentZIndex, nextZIndex } = zIndex;
					const messageRef = ref();
					const visible = ref(false);
					const height = ref(0);
					let stopTimer = void 0;
					const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
					const typeClass = computed(() => {
						const type = props.type;
						return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
					});
					const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
					const placement = computed(() => props.placement || "top");
					const lastOffset = computed(() => getLastOffset(props.id, placement.value));
					const offset = computed(() => {
						return Math.max(getOffsetOrSpace(props.id, props.offset, placement.value) + lastOffset.value, props.offset);
					});
					const bottom = computed(() => height.value + offset.value);
					const horizontalClass = computed(() => {
						if (placement.value.includes("left")) return ns.is("left");
						if (placement.value.includes("right")) return ns.is("right");
						return ns.is("center");
					});
					const verticalProperty = computed(() => placement.value.startsWith("top") ? "top" : "bottom");
					const customStyle = computed(() => ({
						[verticalProperty.value]: `${offset.value}px`,
						zIndex: currentZIndex.value
					}));
					function startTimer() {
						if (props.duration === 0) return;
						({stop: stopTimer} = useTimeoutFn(() => {
							close();
						}, props.duration));
					}
					function clearTimer() {
						stopTimer?.();
					}
					function close() {
						visible.value = false;
						nextTick(() => {
							if (!isStartTransition.value) {
								props.onClose?.();
								emit("destroy");
							}
						});
					}
					function keydown(event) {
						if (getEventCode(event) === EVENT_CODE.esc) close();
					}
					onMounted(() => {
						startTimer();
						nextZIndex();
						visible.value = true;
					});
					watch(() => props.repeatNum, () => {
						clearTimer();
						startTimer();
					});
					useEventListener(document, "keydown", keydown);
					useResizeObserver(messageRef, () => {
						height.value = messageRef.value.getBoundingClientRect().height;
					});
					__expose({
						visible,
						bottom,
						close
					});
					return (_ctx, _cache) => {
						return openBlock(), createBlock(Transition, {
							name: unref(ns).b("fade"),
							onBeforeEnter: _cache[0] || (_cache[0] = ($event) => isStartTransition.value = true),
							onBeforeLeave: __props.onClose,
							onAfterLeave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("destroy")),
							persisted: ""
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("div", {
								id: __props.id,
								ref_key: "messageRef",
								ref: messageRef,
								class: normalizeClass([
									unref(ns).b(),
									{ [unref(ns).m(__props.type)]: __props.type },
									unref(ns).is("closable", __props.showClose),
									unref(ns).is("plain", __props.plain),
									unref(ns).is("bottom", verticalProperty.value === "bottom"),
									horizontalClass.value,
									__props.customClass
								]),
								style: normalizeStyle(customStyle.value),
								role: "alert",
								onMouseenter: clearTimer,
								onMouseleave: startTimer
							}, [
								__props.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
									key: 0,
									value: __props.repeatNum,
									type: badgeType.value,
									class: normalizeClass(unref(ns).e("badge"))
								}, null, 8, [
									"value",
									"type",
									"class"
								])) : createCommentVNode("v-if", true),
								iconComponent.value ? (openBlock(), createBlock(unref(ElIcon), {
									key: 1,
									class: normalizeClass([unref(ns).e("icon"), typeClass.value])
								}, {
									default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(iconComponent.value)))]),
									_: 1
								}, 8, ["class"])) : createCommentVNode("v-if", true),
								!__props.dangerouslyUseHTMLString || _ctx.$slots.default ? (openBlock(), createElementBlock("p", {
									key: 2,
									class: normalizeClass(unref(ns).e("content"))
								}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.message), 1)])], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "), createBaseVNode("p", {
									class: normalizeClass(unref(ns).e("content")),
									innerHTML: __props.message
								}, null, 10, _hoisted_2$4)], 2112)),
								__props.showClose ? (openBlock(), createBlock(unref(ElIcon), {
									key: 4,
									class: normalizeClass(unref(ns).e("closeBtn")),
									onClick: withModifiers(close, ["stop"])
								}, {
									default: withCtx(() => [createVNode(unref(Close))]),
									_: 1
								}, 8, ["class"])) : createCommentVNode("v-if", true)
							], 46, _hoisted_1$5), [[vShow, visible.value]])]),
							_: 3
						}, 8, ["name", "onBeforeLeave"]);
					};
				}
			});
		}));
		var message_default;
		var init_message2 = __esmMin((() => {
			init_message_vue_vue_type_script_setup_true_lang();
			message_default = message_vue_vue_type_script_setup_true_lang_default;
		}));
		function closeAll(type) {
			for (const placement in placementInstances) if (hasOwn(placementInstances, placement)) {
				const instances = [...placementInstances[placement]];
				for (const instance of instances) if (!type || type === instance.props.type) instance.handler.close();
			}
		}
		function closeAllByPlacement(placement) {
			if (!placementInstances[placement]) return;
			[...placementInstances[placement]].forEach((instance) => instance.handler.close());
		}
		var seed;
		var normalizeAppendTo;
		var normalizePlacement;
		var normalizeOptions;
		var closeMessage;
		var createMessage;
		var message;
		var init_method = __esmMin((() => {
			init_browser();
			init_types();
			init_objects();
			init_error();
			init_config_provider();
			init_message$2();
			init_instance();
			init_message2();
			init_vue_runtime_esm_bundler();
			seed = 1;
			normalizeAppendTo = (normalized) => {
				if (!normalized.appendTo) normalized.appendTo = document.body;
				else if (isString(normalized.appendTo)) {
					let appendTo = document.querySelector(normalized.appendTo);
					if (!isElement(appendTo)) {
						debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
						appendTo = document.body;
					}
					normalized.appendTo = appendTo;
				}
			};
			normalizePlacement = (normalized) => {
				if (!normalized.placement && isString(messageConfig.placement) && messageConfig.placement) normalized.placement = messageConfig.placement;
				if (!normalized.placement) normalized.placement = "top";
				if (!messagePlacement.includes(normalized.placement)) {
					debugWarn("ElMessage", `Invalid placement: ${normalized.placement}. Falling back to 'top'.`);
					normalized.placement = "top";
				}
			};
			normalizeOptions = (params) => {
				const options = !params || isString(params) || isVNode(params) || isFunction$1(params) ? { message: params } : params;
				const normalized = {
					...messageDefaults,
					...options
				};
				normalizeAppendTo(normalized);
				normalizePlacement(normalized);
				if (isBoolean(messageConfig.grouping) && !normalized.grouping) normalized.grouping = messageConfig.grouping;
				if (isNumber(messageConfig.duration) && normalized.duration === 3e3) normalized.duration = messageConfig.duration;
				if (isNumber(messageConfig.offset) && normalized.offset === 16) normalized.offset = messageConfig.offset;
				if (isBoolean(messageConfig.showClose) && !normalized.showClose) normalized.showClose = messageConfig.showClose;
				if (isBoolean(messageConfig.plain) && !normalized.plain) normalized.plain = messageConfig.plain;
				return normalized;
			};
			closeMessage = (instance) => {
				const placement = instance.props.placement || "top";
				const instances = placementInstances[placement];
				const idx = instances.indexOf(instance);
				if (idx === -1) return;
				instances.splice(idx, 1);
				const { handler } = instance;
				handler.close();
			};
			createMessage = ({ appendTo, ...options }, context) => {
				const id = `message_${seed++}`;
				const userOnClose = options.onClose;
				const container = document.createElement("div");
				const props = {
					...options,
					id,
					onClose: () => {
						userOnClose?.();
						closeMessage(instance);
					},
					onDestroy: () => {
						render(null, container);
					}
				};
				const vnode = createVNode(message_default, props, isFunction$1(props.message) || isVNode(props.message) ? { default: isFunction$1(props.message) ? props.message : () => props.message } : null);
				vnode.appContext = context || message._context;
				render(vnode, container);
				appendTo.appendChild(container.firstElementChild);
				const vm = vnode.component;
				const instance = {
					id,
					vnode,
					vm,
					handler: { close: () => {
						vm.exposed.close();
					} },
					props: vnode.component.props
				};
				return instance;
			};
			message = (options = {}, context) => {
				if (!isClient) return { close: () => void 0 };
				const normalized = normalizeOptions(options);
				const instances = getOrCreatePlacementInstances(normalized.placement || "top");
				if (normalized.grouping && instances.length) {
					const instance = instances.find(({ vnode: vm }) => vm.props?.message === normalized.message);
					if (instance) {
						instance.props.repeatNum += 1;
						instance.props.type = normalized.type;
						return instance.handler;
					}
				}
				if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) return { close: () => void 0 };
				const instance = createMessage(normalized, context);
				instances.push(instance);
				return instance.handler;
			};
			messageTypes.forEach((type) => {
				message[type] = (options = {}, appContext) => {
					const normalized = normalizeOptions(options);
					return message({
						...normalized,
						type
					}, appContext);
				};
			});
			message.closeAll = closeAll;
			message.closeAllByPlacement = closeAllByPlacement;
			message._context = null;
		}));
		var ElMessage;
		var init_message$1 = __esmMin((() => {
			init_install();
			init_method();
			ElMessage = withInstallFunction(message, "$message");
		}));
		var init_es = __esmMin((() => {
			init_icon();
			init_alert();
			init_form();
			init_input();
			init_button();
			init_card();
			init_collapse_transition();
			init_color_picker();
			init_dialog$1();
			init_input_number();
			init_switch();
			init_tabs();
			init_message$1();
			require_dayjs_min();
		}));
		var init_base$1 = __esmMin((() => {}));
		var init_base = __esmMin((() => {
			init_base$1();
			_css(":root{--el-color-white:#fff;--el-color-black:#000;--el-color-primary-rgb:64, 158, 255;--el-color-success-rgb:103, 194, 58;--el-color-warning-rgb:230, 162, 60;--el-color-danger-rgb:245, 108, 108;--el-color-error-rgb:245, 108, 108;--el-color-info-rgb:144, 147, 153;--el-font-size-extra-large:20px;--el-font-size-large:18px;--el-font-size-medium:16px;--el-font-size-base:14px;--el-font-size-small:13px;--el-font-size-extra-small:12px;--el-font-family:\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"微软雅黑\", Arial, sans-serif;--el-font-weight-primary:500;--el-font-line-height-primary:24px;--el-index-normal:1;--el-index-top:1000;--el-index-popper:2000;--el-border-radius-base:4px;--el-border-radius-small:2px;--el-border-radius-round:20px;--el-border-radius-circle:100%;--el-transition-duration:.3s;--el-transition-duration-fast:.2s;--el-transition-function-ease-in-out-bezier:cubic-bezier(.645, .045, .355, 1);--el-transition-function-fast-bezier:cubic-bezier(.23, 1, .32, 1);--el-transition-all:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);--el-transition-fade:opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-md-fade:transform var(--el-transition-duration) var(--el-transition-function-fast-bezier), opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-fade-linear:opacity var(--el-transition-duration-fast) linear;--el-transition-border:border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-box-shadow:box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-color:color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-component-size-large:40px;--el-component-size:32px;--el-component-size-small:24px;--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;--el-color-primary:#409eff;--el-color-primary-light-3:#79bbff;--el-color-primary-light-5:#a0cfff;--el-color-primary-light-7:#c6e2ff;--el-color-primary-light-8:#d9ecff;--el-color-primary-light-9:#ecf5ff;--el-color-primary-dark-2:#337ecc;--el-color-success:#67c23a;--el-color-success-light-3:#95d475;--el-color-success-light-5:#b3e19d;--el-color-success-light-7:#d1edc4;--el-color-success-light-8:#e1f3d8;--el-color-success-light-9:#f0f9eb;--el-color-success-dark-2:#529b2e;--el-color-warning:#e6a23c;--el-color-warning-light-3:#eebe77;--el-color-warning-light-5:#f3d19e;--el-color-warning-light-7:#f8e3c5;--el-color-warning-light-8:#faecd8;--el-color-warning-light-9:#fdf6ec;--el-color-warning-dark-2:#b88230;--el-color-danger:#f56c6c;--el-color-danger-light-3:#f89898;--el-color-danger-light-5:#fab6b6;--el-color-danger-light-7:#fcd3d3;--el-color-danger-light-8:#fde2e2;--el-color-danger-light-9:#fef0f0;--el-color-danger-dark-2:#c45656;--el-color-error:#f56c6c;--el-color-error-light-3:#f89898;--el-color-error-light-5:#fab6b6;--el-color-error-light-7:#fcd3d3;--el-color-error-light-8:#fde2e2;--el-color-error-light-9:#fef0f0;--el-color-error-dark-2:#c45656;--el-color-info:#909399;--el-color-info-light-3:#b1b3b8;--el-color-info-light-5:#c8c9cc;--el-color-info-light-7:#dedfe0;--el-color-info-light-8:#e9e9eb;--el-color-info-light-9:#f4f4f5;--el-color-info-dark-2:#73767a;--el-bg-color:#fff;--el-bg-color-page:#f2f3f5;--el-bg-color-overlay:#fff;--el-text-color-primary:#303133;--el-text-color-regular:#606266;--el-text-color-secondary:#909399;--el-text-color-placeholder:#a8abb2;--el-text-color-disabled:#c0c4cc;--el-border-color:#dcdfe6;--el-border-color-light:#e4e7ed;--el-border-color-lighter:#ebeef5;--el-border-color-extra-light:#f2f6fc;--el-border-color-dark:#d4d7de;--el-border-color-darker:#cdd0d6;--el-fill-color:#f0f2f5;--el-fill-color-light:#f5f7fa;--el-fill-color-lighter:#fafafa;--el-fill-color-extra-light:#fafcff;--el-fill-color-dark:#ebedf0;--el-fill-color-darker:#e6e8eb;--el-fill-color-blank:#fff;--el-box-shadow:0px 12px 32px 4px #0000000a, 0px 8px 20px #00000014;--el-box-shadow-light:0px 0px 12px #0000001f;--el-box-shadow-lighter:0px 0px 6px #0000001f;--el-box-shadow-dark:0px 16px 48px 16px #00000014, 0px 12px 32px #0000001f, 0px 8px 16px -8px #00000029;--el-disabled-bg-color:var(--el-fill-color-light);--el-disabled-text-color:var(--el-text-color-placeholder);--el-disabled-border-color:var(--el-border-color-light);--el-overlay-color:#000c;--el-overlay-color-light:#000000b3;--el-overlay-color-lighter:#00000080;--el-mask-color:#ffffffe6;--el-mask-color-extra-light:#ffffff4d;--el-border-width:1px;--el-border-style:solid;--el-border-color-hover:var(--el-text-color-disabled);--el-border:var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-svg-monochrome-grey:var(--el-border-color)}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:top;transform:scaleY(1)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:bottom;transform:scaleY(1)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:0 0;transform:scale(1)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out, var(--el-transition-duration) padding-left ease-in-out, var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.el-icon{--color:inherit;fill:currentColor;width:1em;height:1em;color:var(--color);line-height:1em;font-size:inherit;justify-content:center;align-items:center;display:inline-flex;position:relative}.el-icon.is-loading{animation:2s linear infinite rotating}.el-icon svg{width:1em;height:1em}");
		}));
		var init_css$18 = __esmMin((() => {
			init_base();
		}));
		var init_el_badge$1 = __esmMin((() => {}));
		var init_el_badge = __esmMin((() => {
			init_el_badge$1();
			_css(".el-badge{--el-badge-bg-color:var(--el-color-danger);--el-badge-radius:10px;--el-badge-font-size:12px;--el-badge-padding:6px;--el-badge-size:18px;vertical-align:middle;width:fit-content;display:inline-block;position:relative}.el-badge__content{background-color:var(--el-badge-bg-color);border-radius:var(--el-badge-radius);color:var(--el-color-white);font-size:var(--el-badge-font-size);height:var(--el-badge-size);padding:0 var(--el-badge-padding);white-space:nowrap;border:1px solid var(--el-bg-color);justify-content:center;align-items:center;display:inline-flex}.el-badge__content.is-fixed{top:0;right:calc(1px + var(--el-badge-size) / 2);z-index:var(--el-index-normal);position:absolute;transform:translateY(-50%)translate(100%)}.el-badge__content.is-fixed.is-dot{right:5px}.el-badge__content.is-dot{border-radius:50%;width:8px;height:8px;padding:0;right:0}.el-badge__content.is-hide-zero{display:none}.el-badge__content--primary{background-color:var(--el-color-primary)}.el-badge__content--success{background-color:var(--el-color-success)}.el-badge__content--warning{background-color:var(--el-color-warning)}.el-badge__content--info{background-color:var(--el-color-info)}.el-badge__content--danger{background-color:var(--el-color-danger)}");
		}));
		var init_css$17 = __esmMin((() => {
			init_css$18();
			init_el_badge();
		}));
		var init_el_message$1 = __esmMin((() => {}));
		var init_el_message = __esmMin((() => {
			init_el_message$1();
			_css(".el-message{--el-message-bg-color:var(--el-color-info-light-9);--el-message-border-color:var(--el-border-color-lighter);--el-message-padding:11px 15px;--el-message-close-size:16px;--el-message-close-icon-color:var(--el-text-color-placeholder);--el-message-close-hover-color:var(--el-text-color-secondary);box-sizing:border-box;border-radius:var(--el-border-radius-base);border-width:var(--el-border-width);border-style:var(--el-border-style);border-color:var(--el-message-border-color);background-color:var(--el-message-bg-color);width:max-content;max-width:calc(100% - 32px);transition:opacity var(--el-transition-duration), transform .4s, top .4s, bottom .4s;padding:var(--el-message-padding);align-items:center;gap:8px;display:flex;position:fixed}.el-message.is-left{left:16px}.el-message.is-right{right:16px}.el-message.is-center{left:50%;transform:translate(-50%)}.el-message.is-plain{background-color:var(--el-bg-color-overlay);border-color:var(--el-bg-color-overlay);box-shadow:var(--el-box-shadow-light)}.el-message p{margin:0}.el-message--primary{--el-message-bg-color:var(--el-color-primary-light-9);--el-message-border-color:var(--el-color-primary-light-8);--el-message-text-color:var(--el-color-primary)}.el-message--primary .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--primary{color:var(--el-message-text-color)}.el-message--success{--el-message-bg-color:var(--el-color-success-light-9);--el-message-border-color:var(--el-color-success-light-8);--el-message-text-color:var(--el-color-success)}.el-message--success .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--success{color:var(--el-message-text-color)}.el-message--info{--el-message-bg-color:var(--el-color-info-light-9);--el-message-border-color:var(--el-color-info-light-8);--el-message-text-color:var(--el-color-info)}.el-message--info .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--info{color:var(--el-message-text-color)}.el-message--warning{--el-message-bg-color:var(--el-color-warning-light-9);--el-message-border-color:var(--el-color-warning-light-8);--el-message-text-color:var(--el-color-warning)}.el-message--warning .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--warning{color:var(--el-message-text-color)}.el-message--error{--el-message-bg-color:var(--el-color-error-light-9);--el-message-border-color:var(--el-color-error-light-8);--el-message-text-color:var(--el-color-error)}.el-message--error .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--error{color:var(--el-message-text-color)}.el-message .el-message__badge{position:absolute;top:-8px;right:-8px}.el-message__content{padding:0;font-size:14px;line-height:1}.el-message__content:focus{outline-width:0}.el-message .el-message__closeBtn{cursor:pointer;color:var(--el-message-close-icon-color);font-size:var(--el-message-close-size)}.el-message .el-message__closeBtn:focus{outline-width:0}.el-message .el-message__closeBtn:hover{color:var(--el-message-close-hover-color)}.el-message-fade-enter-from,.el-message-fade-leave-to{opacity:0}.el-message-fade-enter-from.is-left,.el-message-fade-enter-from.is-right,.el-message-fade-leave-to.is-left,.el-message-fade-leave-to.is-right{transform:translateY(-100%)}.el-message-fade-enter-from.is-left.is-bottom,.el-message-fade-enter-from.is-right.is-bottom,.el-message-fade-leave-to.is-left.is-bottom,.el-message-fade-leave-to.is-right.is-bottom{transform:translateY(100%)}.el-message-fade-enter-from.is-center,.el-message-fade-leave-to.is-center{transform:translate(-50%,-100%)}.el-message-fade-enter-from.is-center.is-bottom,.el-message-fade-leave-to.is-center.is-bottom{transform:translate(-50%,100%)}");
		}));
		var init_css$16 = __esmMin((() => {
			init_css$18();
			init_css$17();
			init_el_message();
		}));
		var init_el_button$1 = __esmMin((() => {}));
		var init_el_button = __esmMin((() => {
			init_el_button$1();
			_css(".el-button{--el-button-font-weight:var(--el-font-weight-primary);--el-button-border-color:var(--el-border-color);--el-button-bg-color:var(--el-fill-color-blank);--el-button-text-color:var(--el-text-color-regular);--el-button-disabled-text-color:var(--el-disabled-text-color);--el-button-disabled-bg-color:var(--el-fill-color-blank);--el-button-disabled-border-color:var(--el-border-color-light);--el-button-divide-border-color:#ffffff80;--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-7);--el-button-active-text-color:var(--el-button-hover-text-color);--el-button-active-border-color:var(--el-color-primary);--el-button-active-bg-color:var(--el-button-hover-bg-color);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-hover-link-text-color:var(--el-text-color-secondary);--el-button-active-color:var(--el-text-color-primary);white-space:nowrap;cursor:pointer;height:32px;color:var(--el-button-text-color);text-align:center;box-sizing:border-box;line-height:1;font-weight:var(--el-button-font-weight);-webkit-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;background-color:var(--el-button-bg-color);border:var(--el-border);border-color:var(--el-button-border-color);outline:none;justify-content:center;align-items:center;transition:all .1s;display:inline-flex}.el-button:hover{color:var(--el-button-hover-text-color);border-color:var(--el-button-hover-border-color);background-color:var(--el-button-hover-bg-color);outline:none}.el-button:active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button:focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset,outline}.el-button>span{align-items:center;display:inline-flex}.el-button+.el-button{margin-left:12px}.el-button{font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base);padding:8px 15px}.el-button.is-round{padding:8px 15px}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon]+span{margin-left:6px}.el-button [class*=el-icon] svg{vertical-align:bottom}.el-button.is-plain{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary)}.el-button.is-active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button.is-disabled,.el-button.is-disabled:hover{color:var(--el-button-disabled-text-color);cursor:not-allowed;background-image:none;background-color:var(--el-button-disabled-bg-color);border-color:var(--el-button-disabled-border-color)}.el-button.is-loading{pointer-events:none;position:relative}.el-button.is-loading:before{z-index:1;pointer-events:none;content:\"\";border-radius:inherit;background-color:var(--el-mask-color-extra-light);position:absolute;inset:-1px}.el-button.is-round{border-radius:var(--el-border-radius-round)}.el-button.is-dashed{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary);border-style:dashed}.el-button.is-circle{border-radius:50%;width:32px;padding:8px}.el-button.is-text{color:var(--el-button-text-color);background-color:#0000;border:0 solid #0000}.el-button.is-text.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important}.el-button.is-text:not(.is-disabled):hover{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled):focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset,outline}.el-button.is-text:not(.is-disabled):active{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled).is-has-bg:hover{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg:active{background-color:var(--el-fill-color-dark)}.el-button__text--expand{letter-spacing:.3em;margin-right:-.3em}.el-button.is-link{color:var(--el-button-text-color);background:0 0;border-color:#0000;height:auto;padding:2px}.el-button.is-link:hover{color:var(--el-button-hover-link-text-color)}.el-button.is-link.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important;border-color:#0000!important}.el-button.is-link:not(.is-disabled):hover{background-color:#0000;border-color:#0000}.el-button.is-link:not(.is-disabled):active{color:var(--el-button-active-color);background-color:#0000;border-color:#0000}.el-button--text{color:var(--el-color-primary);background:0 0;border-color:#0000;padding-left:0;padding-right:0}.el-button--text.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important;border-color:#0000!important}.el-button--text:not(.is-disabled):hover{color:var(--el-color-primary-light-3);background-color:#0000;border-color:#0000}.el-button--text:not(.is-disabled):active{color:var(--el-color-primary-dark-2);background-color:#0000;border-color:#0000}.el-button__link--expand{letter-spacing:.3em;margin-right:-.3em}.el-button--primary{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-primary);--el-button-border-color:var(--el-color-primary);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-active-color:var(--el-color-primary-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-primary-light-5);--el-button-hover-bg-color:var(--el-color-primary-light-3);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-bg-color:var(--el-color-primary-dark-2);--el-button-active-border-color:var(--el-color-primary-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-primary-light-5);--el-button-disabled-border-color:var(--el-color-primary-light-5)}.el-button--primary.is-plain,.el-button--primary.is-text,.el-button--primary.is-link{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-primary);--el-button-hover-border-color:var(--el-color-primary);--el-button-active-text-color:var(--el-color-white)}.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:hover,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-text.is-disabled,.el-button--primary.is-text.is-disabled:hover,.el-button--primary.is-text.is-disabled:focus,.el-button--primary.is-text.is-disabled:active,.el-button--primary.is-link.is-disabled,.el-button--primary.is-link.is-disabled:hover,.el-button--primary.is-link.is-disabled:focus,.el-button--primary.is-link.is-disabled:active{color:var(--el-color-primary-light-5);background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8)}.el-button--primary.is-dashed{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-text-color:var(--el-color-primary-dark-2);--el-button-active-bg-color:var(--el-color-primary-light-9);--el-button-active-border-color:var(--el-color-primary-dark-2)}.el-button--primary.is-dashed.is-disabled,.el-button--primary.is-dashed.is-disabled:hover,.el-button--primary.is-dashed.is-disabled:focus,.el-button--primary.is-dashed.is-disabled:active{color:var(--el-color-primary-light-5);background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8)}.el-button--success{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-success);--el-button-border-color:var(--el-color-success);--el-button-outline-color:var(--el-color-success-light-5);--el-button-active-color:var(--el-color-success-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-success-light-5);--el-button-hover-bg-color:var(--el-color-success-light-3);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-bg-color:var(--el-color-success-dark-2);--el-button-active-border-color:var(--el-color-success-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-success-light-5);--el-button-disabled-border-color:var(--el-color-success-light-5)}.el-button--success.is-plain,.el-button--success.is-text,.el-button--success.is-link{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-success);--el-button-hover-border-color:var(--el-color-success);--el-button-active-text-color:var(--el-color-white)}.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:hover,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-text.is-disabled,.el-button--success.is-text.is-disabled:hover,.el-button--success.is-text.is-disabled:focus,.el-button--success.is-text.is-disabled:active,.el-button--success.is-link.is-disabled,.el-button--success.is-link.is-disabled:hover,.el-button--success.is-link.is-disabled:focus,.el-button--success.is-link.is-disabled:active{color:var(--el-color-success-light-5);background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8)}.el-button--success.is-dashed{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-success);--el-button-hover-bg-color:var(--el-color-success-light-9);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-text-color:var(--el-color-success-dark-2);--el-button-active-bg-color:var(--el-color-success-light-9);--el-button-active-border-color:var(--el-color-success-dark-2)}.el-button--success.is-dashed.is-disabled,.el-button--success.is-dashed.is-disabled:hover,.el-button--success.is-dashed.is-disabled:focus,.el-button--success.is-dashed.is-disabled:active{color:var(--el-color-success-light-5);background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8)}.el-button--warning{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-warning);--el-button-border-color:var(--el-color-warning);--el-button-outline-color:var(--el-color-warning-light-5);--el-button-active-color:var(--el-color-warning-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-warning-light-5);--el-button-hover-bg-color:var(--el-color-warning-light-3);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-bg-color:var(--el-color-warning-dark-2);--el-button-active-border-color:var(--el-color-warning-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-warning-light-5);--el-button-disabled-border-color:var(--el-color-warning-light-5)}.el-button--warning.is-plain,.el-button--warning.is-text,.el-button--warning.is-link{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-warning);--el-button-hover-border-color:var(--el-color-warning);--el-button-active-text-color:var(--el-color-white)}.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:hover,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-text.is-disabled,.el-button--warning.is-text.is-disabled:hover,.el-button--warning.is-text.is-disabled:focus,.el-button--warning.is-text.is-disabled:active,.el-button--warning.is-link.is-disabled,.el-button--warning.is-link.is-disabled:hover,.el-button--warning.is-link.is-disabled:focus,.el-button--warning.is-link.is-disabled:active{color:var(--el-color-warning-light-5);background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8)}.el-button--warning.is-dashed{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-warning);--el-button-hover-bg-color:var(--el-color-warning-light-9);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-text-color:var(--el-color-warning-dark-2);--el-button-active-bg-color:var(--el-color-warning-light-9);--el-button-active-border-color:var(--el-color-warning-dark-2)}.el-button--warning.is-dashed.is-disabled,.el-button--warning.is-dashed.is-disabled:hover,.el-button--warning.is-dashed.is-disabled:focus,.el-button--warning.is-dashed.is-disabled:active{color:var(--el-color-warning-light-5);background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8)}.el-button--danger{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-danger);--el-button-border-color:var(--el-color-danger);--el-button-outline-color:var(--el-color-danger-light-5);--el-button-active-color:var(--el-color-danger-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-danger-light-5);--el-button-hover-bg-color:var(--el-color-danger-light-3);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-bg-color:var(--el-color-danger-dark-2);--el-button-active-border-color:var(--el-color-danger-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-danger-light-5);--el-button-disabled-border-color:var(--el-color-danger-light-5)}.el-button--danger.is-plain,.el-button--danger.is-text,.el-button--danger.is-link{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-danger);--el-button-hover-border-color:var(--el-color-danger);--el-button-active-text-color:var(--el-color-white)}.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:hover,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-text.is-disabled,.el-button--danger.is-text.is-disabled:hover,.el-button--danger.is-text.is-disabled:focus,.el-button--danger.is-text.is-disabled:active,.el-button--danger.is-link.is-disabled,.el-button--danger.is-link.is-disabled:hover,.el-button--danger.is-link.is-disabled:focus,.el-button--danger.is-link.is-disabled:active{color:var(--el-color-danger-light-5);background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8)}.el-button--danger.is-dashed{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-danger);--el-button-hover-bg-color:var(--el-color-danger-light-9);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-text-color:var(--el-color-danger-dark-2);--el-button-active-bg-color:var(--el-color-danger-light-9);--el-button-active-border-color:var(--el-color-danger-dark-2)}.el-button--danger.is-dashed.is-disabled,.el-button--danger.is-dashed.is-disabled:hover,.el-button--danger.is-dashed.is-disabled:focus,.el-button--danger.is-dashed.is-disabled:active{color:var(--el-color-danger-light-5);background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8)}.el-button--info{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-info);--el-button-border-color:var(--el-color-info);--el-button-outline-color:var(--el-color-info-light-5);--el-button-active-color:var(--el-color-info-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-info-light-5);--el-button-hover-bg-color:var(--el-color-info-light-3);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-bg-color:var(--el-color-info-dark-2);--el-button-active-border-color:var(--el-color-info-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-info-light-5);--el-button-disabled-border-color:var(--el-color-info-light-5)}.el-button--info.is-plain,.el-button--info.is-text,.el-button--info.is-link{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-info);--el-button-hover-border-color:var(--el-color-info);--el-button-active-text-color:var(--el-color-white)}.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:hover,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-text.is-disabled,.el-button--info.is-text.is-disabled:hover,.el-button--info.is-text.is-disabled:focus,.el-button--info.is-text.is-disabled:active,.el-button--info.is-link.is-disabled,.el-button--info.is-link.is-disabled:hover,.el-button--info.is-link.is-disabled:focus,.el-button--info.is-link.is-disabled:active{color:var(--el-color-info-light-5);background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8)}.el-button--info.is-dashed{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-info);--el-button-hover-bg-color:var(--el-color-info-light-9);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-text-color:var(--el-color-info-dark-2);--el-button-active-bg-color:var(--el-color-info-light-9);--el-button-active-border-color:var(--el-color-info-dark-2)}.el-button--info.is-dashed.is-disabled,.el-button--info.is-dashed.is-disabled:hover,.el-button--info.is-dashed.is-disabled:focus,.el-button--info.is-dashed.is-disabled:active{color:var(--el-color-info-light-5);background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8)}.el-button--large{--el-button-size:40px;height:var(--el-button-size)}.el-button--large [class*=el-icon]+span{margin-left:8px}.el-button--large{font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base);padding:12px 19px}.el-button--large.is-round{padding:12px 19px}.el-button--large.is-circle{width:var(--el-button-size);padding:12px}.el-button--small{--el-button-size:24px;height:var(--el-button-size)}.el-button--small [class*=el-icon]+span{margin-left:4px}.el-button--small{border-radius:calc(var(--el-border-radius-base) - 1px);padding:5px 11px;font-size:12px}.el-button--small.is-round{padding:5px 11px}.el-button--small.is-circle{width:var(--el-button-size);padding:5px}");
		}));
		var init_css$15 = __esmMin((() => {
			init_css$18();
			init_el_button();
		}));
		var style_default;
		var init_style = __esmMin((() => {
			style_default = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-800:oklch(43.8% .218 303.724);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.mt-1{margin-top:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.ml-4{margin-left:calc(var(--spacing) * 4)}.ml-6{margin-left:calc(var(--spacing) * 6)}.block{display:block}.flex{display:flex}.h-2{height:calc(var(--spacing) * 2)}.h-\\[400px\\]{height:400px}.h-full{height:100%}.max-h-32{max-height:calc(var(--spacing) * 32)}.w-2{width:calc(var(--spacing) * 2)}.w-32{width:calc(var(--spacing) * 32)}.flex-1{flex:1}.rotate-90{rotate:90deg}.cursor-pointer{cursor:pointer}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)))}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-b-xl{border-bottom-right-radius:var(--radius-xl);border-bottom-left-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-blue-200{border-color:var(--color-blue-200)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\/50{background-color:#f9fafb80}@supports (color:color-mix(in lab, red, red)){.bg-gray-50\\/50{background-color:color-mix(in oklab, var(--color-gray-50) 50%, transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-500{background-color:var(--color-green-500)}.bg-purple-100{background-color:var(--color-purple-100)}.bg-purple-500{background-color:var(--color-purple-500)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-50{--tw-gradient-to:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-5{padding-inline:calc(var(--spacing) * 5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-all{word-break:break-all}.text-blue-500{color:var(--color-blue-500)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-purple-800{color:var(--color-purple-800)}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media (hover:hover){.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-green-200:hover{background-color:var(--color-green-200)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}}:host{all:initial;color:#303133;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;font-size:14px;line-height:1.5}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:\"*\";inherits:false}";
		}));
		function createMountPoint() {
			root ??= createRoot();
			const css = collectedCss().filter((text) => !written.has(text));
			if (css.length > 0) {
				for (const text of css) written.add(text);
				root.append(createStyle(`@layer components{${css.join("").replaceAll(":root", ":host")}}`));
			}
			return root.appendChild(document.createElement("div"));
		}
		function addPanelStyle() {
			const style = createStyle(collectedCss().join(""));
			document.head.append(style);
			return style;
		}
		function createRoot() {
			const host = document.createElement(UI_TAG);
			const shadowRoot = host.attachShadow({ mode: "closed" });
			shadowRoot.append(createStyle(style_default));
			document.documentElement.append(host);
			return shadowRoot;
		}
		function collectedCss() {
			return globalThis[Symbol.for("color-visited/css")] ?? [];
		}
		function createStyle(css) {
			const style = document.createElement("style");
			style.textContent = css;
			return style;
		}
		var root;
		var written;
		var init_root = __esmMin((() => {
			init_shortcut();
			init_style();
			written = new Set();
		}));
		var message_exports = __exportAll({ showMessage: () => showMessage });
		function showMessage(message, type, action) {
			const notification = ElMessage({
				message: action ? () => h("span", { style: {
					display: "flex",
					alignItems: "center",
					gap: "12px"
				} }, [message, h(ElButton, {
					link: true,
					type: type === "error" ? "danger" : type,
					onClickOnce: () => {
						notification.close();
						action.onClick();
					}
				}, () => action.text)]) : message,
				type,
				duration: action ? 5e3 : 2e3,
				showClose: true,
				grouping: true,
				offset: 20,
				appendTo: container
			});
		}
		var container;
		var init_message = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			init_es();
			init_css$16();
			init_css$15();
			init_root();
			container = createMountPoint();
		}));
		function notify(message, type, action) {
			Promise.resolve().then(() => (init_message(), message_exports)).then(({ showMessage }) => showMessage(message, type, action)).catch((error) => console.error("[color-visited] 显示通知失败", error));
		}
		var init_notify = __esmMin((() => {}));
		init_log();
		init_settings();
		init_shortcut();
		init_storage();
		init_sites();
		init_notify();
		var MARK = "data-color-visited";
		function activate(site, settings) {
			const { color, expirationTime, debug } = settings.general;
			const isTarget = (url) => site.links.some((pattern) => pattern.test(url));
			const updateLinks = (links, reason) => {
				let checked = 0;
				let marked = 0;
				for (const link of links) {
					if (!(link instanceof HTMLAnchorElement)) continue;
					const url = normalizeUrl(link);
					if (link.toggleAttribute(MARK, isTarget(url) && isVisited(url, expirationTime))) marked++;
					checked++;
				}
				if (checked > 0) log.debug(`${reason}：检查了 ${checked} 个链接，标记了 ${marked} 个`);
			};
			const style = injectLinkStyle(color);
			if (debug) log.debug(describeStorage());
			updateLinks(document.querySelectorAll("a[href]"), `按 ${site.name} 的规则染色`);
			const observer = new MutationObserver((mutations) => updateLinks(linksIn(mutations), "页面有变化"));
			observer.observe(document.documentElement, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter: ["href"]
			});
			const unsubscribe = onLinksChange((urls) => {
				const changed = new Set(urls);
				const links = [...document.querySelectorAll("a[href]")].filter((link) => link instanceof HTMLAnchorElement && changed.has(normalizeUrl(link)));
				updateLinks(links, `${urls.length} 条访问记录有变化`);
			});
			const onClick = (event) => {
				if (event.type === "auxclick" && event.button !== 1) return;
				const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
				if (!(link instanceof HTMLAnchorElement)) return;
				const url = normalizeUrl(link);
				if (!isTarget(url)) return;
				recordVisit(url);
				log.debug(`记下访问：${url}`);
			};
			const onKeydown = (event) => {
				if (isTyping(event) || !matchesShortcut(event, settings.batch)) return;
				event.preventDefault();
				if (!event.repeat) batchMark(isTarget, expirationTime);
			};
			const ac = new AbortController();
			document.addEventListener("click", onClick, {
				capture: true,
				signal: ac.signal
			});
			document.addEventListener("auxclick", onClick, {
				capture: true,
				signal: ac.signal
			});
			document.addEventListener("keydown", onKeydown, { signal: ac.signal });
			return () => {
				ac.abort();
				observer.disconnect();
				unsubscribe();
				style.remove();
				for (const link of document.querySelectorAll(`a[${MARK}]`)) link.removeAttribute(MARK);
			};
		}
		function* linksIn(mutations) {
			for (const mutation of mutations) {
				if (mutation.type === "attributes") {
					yield mutation.target;
					continue;
				}
				for (const node of mutation.addedNodes) {
					if (!(node instanceof Element)) continue;
					if (node.matches("a[href]")) yield node;
					yield* node.querySelectorAll("a[href]");
				}
			}
		}
		function injectLinkStyle(color) {
			const linkColor = CSS.supports("color", color) ? color : createDefaultSettings().general.color;
			const link = `a[${MARK}]`;
			const style = document.createElement("style");
			style.id = "color-visited-style";
			style.textContent = `@layer color-visited {
  ${link}, ${link}::before, ${link}::after, ${link} *, ${link} *::before, ${link} *::after {
    color: ${linkColor} !important;
  }
  ${link} img, ${link} [style*="background-image"], ${link} [style*="background:"] {
    filter: opacity(0.1) !important;
  }
}`;
			document.head.append(style);
			return style;
		}
		function describeStorage() {
			const links = loadLinks();
			const kb = new TextEncoder().encode(JSON.stringify(links)).length / 1024;
			return `存储里有 ${Object.keys(links).length} 条访问记录，约 ${kb.toFixed(1)} KB`;
		}
		function batchMark(isTarget, expirationTime) {
			const now = Date.now();
			const newLinks = {};
			for (const link of document.querySelectorAll("a[href]")) {
				if (!(link instanceof HTMLAnchorElement)) continue;
				const url = normalizeUrl(link);
				if (!Object.hasOwn(newLinks, url) && isTarget(url) && !isVisited(url, expirationTime)) newLinks[url] = now;
			}
			const count = Object.keys(newLinks).length;
			if (count === 0) {
				notify("没有找到新的符合规则的链接可添加", "info");
				return;
			}
			mergeLinks(newLinks);
			notify(`已批量添加 ${count} 个链接到已访问记录`, "success", {
				text: "撤销",
				onClick: () => undoBatchMark(newLinks)
			});
		}
		function undoBatchMark(newLinks) {
			const deletedCount = deleteLinksIfUnchanged(newLinks).length;
			const keptCount = Object.keys(newLinks).length - deletedCount;
			notify(`已撤销 ${deletedCount} 个链接` + (keptCount > 0 ? `，${keptCount} 个点开过的保留` : ""), "success");
		}
		init_log();
		init_settings();
		init_sites();
		function startPage() {
			let dispose = null;
			const refresh = () => {
				dispose?.();
				dispose = null;
				try {
					const settings = getSettings();
					const site = findActiveSite(location.href, settings.preset);
					if (site) dispose = activate(site, settings);
					else log.debug(`${location.href} 不属于任何启用了的站点，不染色`);
				} catch (error) {
					console.error("[color-visited] 激活页面失败", error);
				}
			};
			watchUrl(refresh);
			onSettingsChange(refresh);
			refresh();
		}
		function watchUrl(onChange) {
			let href = location.href;
			new MutationObserver(() => {
				if (location.href === href) return;
				href = location.href;
				onChange();
			}).observe(document.documentElement, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter: ["href"]
			});
		}
		async function encode(links) {
			const json = JSON.stringify(group(links));
			const compressed = await gzip(json);
			return JSON.stringify({
				syncVersion: "v3",
				encoding: ENCODING,
				payload: toBase64(compressed),
				itemCount: Object.keys(links).length,
				updatedAt: Date.now(),
				originalBytes: new TextEncoder().encode(json).length,
				compressedBytes: compressed.length
			});
		}
		async function decode(text) {
			if (text.trim() === "") return notSyncData("内容为空");
			let data;
			try {
				data = JSON.parse(text);
			} catch {
				return notSyncData("不是 JSON");
			}
			if (!isRecord(data)) return notSyncData("不是 JSON 对象");
			if ("syncVersion" in data) return pickLinks(await unpack(data));
			if ("visitedLinks" in data) return pickLinks(data.visitedLinks);
			if (Object.entries(data).some(([key, value]) => isLinkEntry(key, value))) return pickLinks(data);
			return notSyncData("没有访问记录");
		}
		async function unpack({ syncVersion, encoding, payload }) {
			if (syncVersion !== "v2" && syncVersion !== "v3") throw new Error(`云端数据来自更新版本的脚本（syncVersion=${String(syncVersion)}），请升级脚本后再同步`);
			if (encoding !== ENCODING) throw invalid(`encoding 不是 ${ENCODING}`);
			if (typeof payload !== "string") throw invalid("payload 不是字符串");
			let json;
			try {
				json = JSON.parse(await gunzip(fromBase64(payload)));
			} catch (error) {
				throw invalid("payload 不是 gzip 之后再 base64 的 JSON", error);
			}
			return syncVersion === "v3" ? ungroup(json) : json;
		}
		function pickLinks(entries) {
			if (!isRecord(entries)) throw invalid("记录不是对象");
			const all = Object.entries(entries);
			const links = {};
			let dropped = 0;
			for (const [key, value] of all) if (isLinkEntry(key, value)) links[key] = value;
			else dropped++;
			if (all.length > 0 && dropped === all.length) throw invalid(`${dropped} 条记录都不是「URL → 时间戳」`);
			return {
				links,
				dropped
			};
		}
		function originOf(key) {
			return key.includes("://") ? key : `https://${key}`;
		}
		function splitUrl(url) {
			try {
				const { protocol, host } = new URL(url);
				const key = protocol === "https:" ? host : `${protocol}//${host}`;
				const origin = originOf(key);
				if (url.startsWith(`${origin}/`)) return [key, url.slice(origin.length)];
			} catch {}
			return [RAW_GROUP, url];
		}
		function byFirst([a], [b]) {
			return a < b ? -1 : a > b ? 1 : 0;
		}
		function group(links) {
			const groups = new Map();
			for (const [url, time] of Object.entries(links)) {
				const [key, text] = splitUrl(url);
				const entries = groups.get(key);
				if (entries) entries.push([text, time]);
				else groups.set(key, [[text, time]]);
			}
			const payload = {};
			for (const [key, entries] of [...groups].sort(byFirst)) {
				let previous = "";
				payload[key] = entries.sort(byFirst).map(([text, time]) => {
					let prefix = 0;
					while (prefix < text.length && text[prefix] === previous[prefix]) prefix++;
					previous = text;
					return [
						prefix,
						text.slice(prefix),
						time
					];
				});
			}
			return payload;
		}
		function ungroup(payload) {
			if (!isRecord(payload)) throw invalid("payload 不是对象");
			const entries = {};
			for (const [key, records] of Object.entries(payload)) {
				if (!Array.isArray(records)) throw invalid(`分组 ${key} 不是数组`);
				let text = "";
				for (const [index, record] of records.entries()) {
					if (!isV3Record(record, text)) throw invalid(`分组 ${key} 的第 ${index + 1} 条记录无效`);
					text = text.slice(0, record[0]) + record[1];
					if (key === RAW_GROUP) entries[text] = record[2];
					else if (text.startsWith("/")) entries[originOf(key) + text] = record[2];
					else throw invalid(`分组 ${key} 的第 ${index + 1} 条记录还原出的路径不以 / 开头`);
				}
			}
			return entries;
		}
		function isV3Record(record, previous) {
			return Array.isArray(record) && record.length === 3 && Number.isInteger(record[0]) && record[0] >= 0 && record[0] <= previous.length && typeof record[1] === "string";
		}
		async function gzip(text) {
			const stream = new Response(text).body.pipeThrough(new CompressionStream("gzip"));
			return new Uint8Array(await new Response(stream).arrayBuffer());
		}
		function gunzip(bytes) {
			return new Response(new Response(bytes).body.pipeThrough(new DecompressionStream("gzip"))).text();
		}
		function toBase64(bytes) {
			let binary = "";
			for (let i = 0; i < bytes.length; i += 32768) binary += String.fromCharCode(...bytes.subarray(i, i + 32768));
			return btoa(binary);
		}
		function fromBase64(base64) {
			return Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
		}
		function isRecord(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}
		function notSyncData(reason) {
			return {
				links: {},
				dropped: 0,
				notSyncData: reason
			};
		}
		function invalid(reason, cause) {
			return new Error(`云端数据格式不对：${reason}`, { cause });
		}
		var ENCODING;
		var RAW_GROUP;
		var init_codec = __esmMin((() => {
			init_storage();
			ENCODING = "gzip-base64-json";
			RAW_GROUP = "@raw";
		}));
		function request(action, token, method, url, body) {
			return new Promise((resolve, reject) => {
				const fail = (reason) => reject(new Error(`${action}: ${reason}`));
				_GM_xmlhttpRequest({
					method,
					url,
					headers: {
						Authorization: `Bearer ${token}`,
						Accept: "application/vnd.github.v3+json",
						...body && { "Content-Type": "application/json" }
					},
					data: body && JSON.stringify(body),
					onload: (response) => {
						const hint = STATUS_HINTS[response.status];
						if (response.status >= 200 && response.status < 300) resolve(response);
						else fail(hint ? `${response.status}（${hint}）` : String(response.status));
					},
					onerror: () => fail("网络错误")
				});
			});
		}
		async function readUser(token) {
			const response = await request("令牌验证失败", token, "GET", `${API}/user`);
			const scopes = /^x-oauth-scopes:(.*)$/im.exec(response.responseHeaders)?.[1];
			const { login } = JSON.parse(response.responseText);
			return {
				login,
				scopes: scopes?.split(",").map((scope) => scope.trim())
			};
		}
		async function readGist(token, gistId) {
			const response = await request("获取 Gist 失败", token, "GET", `${API}/gists/${gistId}`);
			const gist = JSON.parse(response.responseText);
			const first = Object.entries(gist.files)[0];
			if (!first) throw new Error("获取 Gist 失败: Gist 里没有文件");
			const [fileName, file] = first;
			const content = file.truncated ? (await request("获取 Gist 原始内容失败", token, "GET", file.raw_url)).responseText : file.content;
			return {
				owner: gist.owner?.login,
				fileName,
				content,
				truncated: file.truncated
			};
		}
		async function writeGist(token, gistId, fileName, content) {
			await request("更新 Gist 失败", token, "PATCH", `${API}/gists/${gistId}`, { files: { [fileName]: { content } } });
		}
		var API;
		var STATUS_HINTS;
		var init_github = __esmMin((() => {
			init_client();
			API = "https://api.github.com";
			STATUS_HINTS = {
				401: "令牌无效或已过期",
				403: "令牌权限不足，或触发了 GitHub API 限流",
				404: "Gist 不存在、ID 填写有误，或令牌无权访问"
			};
		}));
		function normalizeGistId(input) {
			return (input.trim().split(/[?#]/)[0].split("/").filter((segment) => segment !== "").pop() ?? "").replace(/\.git$/, "");
		}
		function errorMessage(error) {
			return error instanceof Error ? error.message : String(error);
		}
		async function decodeGist(gist) {
			const cloud = await decode(gist.content);
			if (cloud.notSyncData && gist.truncated) throw new Error(`Gist 文件超过 1 MB，从 raw_url 取到的完整内容认不出来（${cloud.notSyncData}），为避免误覆盖，云端数据保持不变`);
			if (cloud.dropped > 0) console.warn(`[color-visited] 云端数据里有 ${cloud.dropped} 条不是访问记录，已经丢掉。多半是其他设备上旧版本的脚本混进去的，请升级那边的脚本`);
			return cloud;
		}
		function pickUnexpired(links, cutoff) {
			const unexpired = {};
			for (const url in links) if (links[url] >= cutoff) unexpired[url] = links[url];
			return unexpired;
		}
		function sameLinks(a, b) {
			const urls = Object.keys(a);
			return urls.length === Object.keys(b).length && urls.every((url) => a[url] === b[url]);
		}
		async function syncWithCloud(settings, expirationTime) {
			const token = settings.githubToken;
			const gistId = normalizeGistId(settings.gistId);
			if (!token) throw new Error("GitHub 令牌未设置");
			if (!gistId) throw new Error("Gist ID 未设置，请先创建 Gist 并在设置中填入 ID");
			const gist = await readGist(token, gistId);
			const cloud = await decodeGist(gist);
			const cutoff = Date.now() - expirationTime;
			const cloudLinks = pickUnexpired(cloud.links, cutoff);
			mergeLinks(cloudLinks);
			const merged = pickUnexpired(loadLinks(), cutoff);
			const initialized = cloud.notSyncData !== void 0;
			const upload = initialized || !sameLinks(cloudLinks, merged);
			if (upload) await writeGist(token, gistId, gist.fileName, await encode(merged));
			setLastSyncTime(Date.now());
			if (initialized) log.debug(`云端内容不是同步数据（${cloud.notSyncData}），已写成同步格式`);
			else log.debug(upload ? "同步完成，已上传" : "同步完成，和云端一致，没有上传");
			return { initialized };
		}
		async function runSync({ manual }) {
			try {
				const { sync, general } = getSettings();
				const { initialized } = await syncWithCloud(sync, general.expirationTime);
				if (initialized) notify("已初始化云端同步数据", "success");
				else if (manual) notify("同步完成", "success");
			} catch (error) {
				console.warn("[color-visited] 同步失败", error);
				notify(`同步失败: ${errorMessage(error)}`, "error");
			}
		}
		function autoSync() {
			if (getSettings().sync.enabled && Date.now() - getLastSyncTime() >= 6e5) runSync({ manual: false });
		}
		async function testConnection(token, gistId) {
			try {
				const user = await readUser(token);
				if (user.scopes && !user.scopes.includes("gist")) return {
					level: "error",
					message: "令牌缺少 gist 权限，请重新创建令牌并勾选 \"gist\""
				};
				const id = normalizeGistId(gistId);
				if (!id) return {
					level: "warning",
					message: "令牌有效，还需要填写 Gist ID"
				};
				const gist = await readGist(token, id);
				if (gist.owner && gist.owner.toLowerCase() !== user.login.toLowerCase()) return {
					level: "error",
					message: `这不是当前令牌账号的 Gist（所有者为 ${gist.owner}，当前账号为 ${user.login}），无法写入`
				};
				const cloud = await decodeGist(gist);
				if (cloud.notSyncData) return {
					level: "warning",
					message: `连接成功。Gist 当前内容不是同步数据（${cloud.notSyncData}），首次同步时会被替换为同步格式`
				};
				return {
					level: "success",
					message: `连接成功，云端已有 ${Object.keys(cloud.links).length} 条同步数据`
				};
			} catch (error) {
				console.warn("[color-visited] 测试连接失败", error);
				return {
					level: "error",
					message: errorMessage(error)
				};
			}
		}
		var AUTO_SYNC_INTERVAL;
		var init_sync = __esmMin((() => {
			init_log();
			init_settings();
			init_storage();
			init_codec();
			init_github();
			init_notify();
			AUTO_SYNC_INTERVAL = 6e5;
		}));
		var init_el_overlay$1 = __esmMin((() => {}));
		var init_el_overlay = __esmMin((() => {
			init_el_overlay$1();
			_css(".el-overlay{z-index:2000;background-color:var(--el-overlay-color-lighter);height:100%;position:fixed;inset:0;overflow:auto}.el-overlay .el-overlay-root{height:0}");
		}));
		var init_css$14 = __esmMin((() => {
			init_css$18();
			init_el_overlay();
		}));
		var init_el_dialog$1 = __esmMin((() => {}));
		var init_el_dialog = __esmMin((() => {
			init_el_dialog$1();
			_css(":root{--el-popup-modal-bg-color:var(--el-color-black);--el-popup-modal-opacity:.5}.v-modal-enter{animation:v-modal-in var(--el-transition-duration-fast) ease}.v-modal-leave{animation:v-modal-out var(--el-transition-duration-fast) ease forwards}@keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{width:100%;height:100%;opacity:var(--el-popup-modal-opacity);background:var(--el-popup-modal-bg-color);position:fixed;top:0;left:0}.el-popup-parent--hidden{overflow:hidden}.el-dialog{--el-dialog-width:50%;--el-dialog-margin-top:15vh;--el-dialog-bg-color:var(--el-bg-color);--el-dialog-box-shadow:var(--el-box-shadow);--el-dialog-title-font-size:var(--el-font-size-large);--el-dialog-content-font-size:14px;--el-dialog-font-line-height:var(--el-font-line-height-primary);--el-dialog-padding-primary:16px;--el-dialog-border-radius:var(--el-border-radius-base);margin:var(--el-dialog-margin-top,15vh) auto 50px;background:var(--el-dialog-bg-color);border-radius:var(--el-dialog-border-radius);box-shadow:var(--el-dialog-box-shadow);box-sizing:border-box;padding:var(--el-dialog-padding-primary);width:var(--el-dialog-width,50%);overflow-wrap:break-word;position:relative}.el-dialog:focus{outline:none!important}.el-dialog.is-align-center{margin:auto}.el-dialog.is-fullscreen{--el-dialog-width:100%;--el-dialog-margin-top:0;border-radius:0;height:100%;margin-bottom:0;overflow:auto}.el-dialog__wrapper{margin:0;position:fixed;inset:0;overflow:auto}.el-dialog.is-draggable .el-dialog__header{cursor:move;-webkit-user-select:none;user-select:none}.el-dialog__header{padding-bottom:var(--el-dialog-padding-primary)}.el-dialog__header.show-close{padding-right:calc(var(--el-dialog-padding-primary) + var(--el-message-close-size,16px))}.el-dialog__headerbtn{cursor:pointer;width:48px;height:48px;font-size:var(--el-message-close-size,16px);background:0 0;border:none;outline:none;padding:0;position:absolute;top:0;right:0}.el-dialog__headerbtn .el-dialog__close{color:var(--el-color-info);font-size:inherit}.el-dialog__headerbtn:focus .el-dialog__close,.el-dialog__headerbtn:hover .el-dialog__close{color:var(--el-color-primary)}.el-dialog__title{line-height:var(--el-dialog-font-line-height);font-size:var(--el-dialog-title-font-size);color:var(--el-text-color-primary)}.el-dialog__body{color:var(--el-text-color-regular);font-size:var(--el-dialog-content-font-size)}.el-dialog__footer{padding-top:var(--el-dialog-padding-primary);text-align:right;box-sizing:border-box}.el-dialog--center{text-align:center}.el-dialog--center .el-dialog__body{text-align:initial}.el-dialog--center .el-dialog__footer{text-align:inherit}.el-modal-dialog.is-penetrable{pointer-events:none}.el-modal-dialog.is-penetrable .el-dialog{pointer-events:auto}.el-overlay-dialog{position:fixed;inset:0;overflow:auto}.el-overlay-dialog.is-closing .el-dialog{pointer-events:none}.dialog-fade-enter-active{animation:modal-fade-in var(--el-transition-duration)}.dialog-fade-enter-active .el-overlay-dialog{animation:dialog-fade-in var(--el-transition-duration)}.dialog-fade-leave-active{animation:modal-fade-out var(--el-transition-duration)}.dialog-fade-leave-active .el-overlay-dialog{animation:dialog-fade-out var(--el-transition-duration)}@keyframes dialog-fade-in{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translate(0)}}@keyframes dialog-fade-out{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translateY(-20px)}}@keyframes modal-fade-in{0%{opacity:0}to{opacity:1}}@keyframes modal-fade-out{0%{opacity:1}to{opacity:0}}");
		}));
		var init_css$13 = __esmMin((() => {
			init_css$18();
			init_css$14();
			init_el_dialog();
		}));
		var init_el_tabs$1 = __esmMin((() => {}));
		var init_el_tabs = __esmMin((() => {
			init_el_tabs$1();
			_css(".el-tabs{--el-tabs-header-height:40px;display:flex}.el-tabs__header{justify-content:space-between;align-items:center;margin:0 0 15px;padding:0;display:flex;position:relative}.el-tabs__header-vertical{flex-direction:column}.el-tabs__active-bar{background-color:var(--el-color-primary);z-index:1;height:2px;transition:width var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier), transform var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);list-style:none;position:absolute;bottom:0;left:0}.el-tabs__active-bar.is-bottom{bottom:auto}.el-tabs__active-bar.is-hidden{visibility:hidden}.el-tabs__active-bar.is-hidden~.is-active:after{content:\"\";z-index:1;background-color:var(--el-color-primary);height:2px;position:absolute;bottom:0;left:20px;right:20px}.el-tabs__active-bar.is-hidden.is-bottom~.is-active:after{top:0;bottom:auto}.el-tabs__active-bar.is-hidden.is-left~.is-active:after,.el-tabs__active-bar.is-hidden.is-right~.is-active:after{width:2px;height:auto;top:0;bottom:0}.el-tabs__active-bar.is-hidden.is-left~.is-active:after{left:auto;right:0}.el-tabs__active-bar.is-hidden.is-right~.is-active:after{left:0;right:auto}.el-tabs__active-bar.is-hidden.is-top~.is-active:nth-child(2):after,.el-tabs__active-bar.is-hidden.is-bottom~.is-active:nth-child(2):after{left:0}.el-tabs__active-bar.is-hidden.is-top~.is-active:last-child:after,.el-tabs__active-bar.is-hidden.is-bottom~.is-active:last-child:after{right:0}.el-tabs__new-tab{border:1px solid var(--el-border-color);text-align:center;width:20px;height:20px;color:var(--el-text-color-primary);cursor:pointer;border-radius:3px;flex-shrink:0;justify-content:center;align-items:center;margin:10px 0 10px 10px;font-size:12px;line-height:20px;transition:all .15s;display:flex}.el-tabs__new-tab .is-icon-plus{height:inherit;width:inherit;transform:scale(.8)}.el-tabs__new-tab .is-icon-plus svg{vertical-align:middle}.el-tabs__new-tab:hover{color:var(--el-color-primary)}.el-tabs__new-tab-vertical{margin-left:0}.el-tabs__nav-wrap{flex:auto;margin-bottom:-1px;position:relative;overflow:hidden}.el-tabs__nav-wrap:after{content:\"\";background-color:var(--el-border-color-light);width:100%;height:2px;z-index:var(--el-index-normal);position:absolute;bottom:0;left:0}.el-tabs__nav-wrap.is-bottom:after{top:0;bottom:auto}.el-tabs__nav-wrap.is-scrollable{box-sizing:border-box;padding:0 20px}.el-tabs__nav-scroll{overflow:hidden}.el-tabs__nav-next,.el-tabs__nav-prev{cursor:pointer;color:var(--el-text-color-secondary);text-align:center;width:20px;font-size:12px;line-height:44px;position:absolute}.el-tabs__nav-next.is-disabled,.el-tabs__nav-prev.is-disabled{color:var(--el-text-color-disabled);cursor:not-allowed}.el-tabs__nav-next{right:0}.el-tabs__nav-prev{left:0}.el-tabs__nav{white-space:nowrap;transition:transform var(--el-transition-duration);float:left;z-index:calc(var(--el-index-normal) + 1);display:flex;position:relative}.el-tabs__nav.is-stretch{min-width:100%;display:flex}.el-tabs__nav.is-stretch>*{text-align:center;flex:1}.el-tabs__item{height:var(--el-tabs-header-height);box-sizing:border-box;font-size:var(--el-font-size-base);color:var(--el-text-color-primary);justify-content:center;align-items:center;padding:0 20px;font-weight:500;list-style:none;display:flex;position:relative}.el-tabs__item:focus,.el-tabs__item:focus:active{outline:none}.el-tabs__item:focus-visible{box-shadow:0 0 2px 2px var(--el-color-primary) inset;border-radius:3px}.el-tabs__item .is-icon-close{text-align:center;transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);border-radius:50%;margin-left:5px}.el-tabs__item .is-icon-close:before{display:inline-block;transform:scale(.9)}.el-tabs__item .is-icon-close:hover{background-color:var(--el-text-color-placeholder);color:#fff}.el-tabs__item.is-active{color:var(--el-color-primary)}.el-tabs__item:hover{color:var(--el-color-primary);cursor:pointer}.el-tabs__item.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-tabs__content{flex-grow:1;position:relative;overflow:hidden}.el-tabs--top>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:0}.el-tabs--top>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom>.el-tabs__header .el-tabs__item:last-child{padding-right:0}.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:20px}.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child{padding-right:20px}.el-tabs--card>.el-tabs__header{border-bottom:1px solid var(--el-border-color-light);height:var(--el-tabs-header-height);box-sizing:border-box}.el-tabs--card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--card>.el-tabs__header .el-tabs__nav{border:1px solid var(--el-border-color-light);box-sizing:border-box;border-bottom:none;border-radius:4px 4px 0 0}.el-tabs--card>.el-tabs__header .el-tabs__active-bar{display:none}.el-tabs--card>.el-tabs__header .el-tabs__item .is-icon-close{transform-origin:100%;width:0;height:14px;font-size:12px;position:relative;right:-2px;overflow:hidden}.el-tabs--card>.el-tabs__header .el-tabs__item{border-bottom:1px solid #0000;border-left:1px solid var(--el-border-color-light);transition:color var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier), padding var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);margin-top:-1px}.el-tabs--card>.el-tabs__header .el-tabs__item:first-child{border-left:none}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover{padding-left:13px;padding-right:13px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover .is-icon-close{width:14px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{border-bottom-color:var(--el-bg-color)}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{padding-left:20px;padding-right:20px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable .is-icon-close{width:14px}.el-tabs--border-card{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color)}.el-tabs--border-card>.el-tabs__content{padding:15px}.el-tabs--border-card>.el-tabs__header{background-color:var(--el-fill-color-light);border-bottom:1px solid var(--el-border-color-light);margin:0}.el-tabs--border-card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--border-card>.el-tabs__header .el-tabs__item{transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);color:var(--el-text-color-secondary);border:1px solid #0000;margin-top:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item:first-child,.el-tabs--border-card>.el-tabs__header .el-tabs__item+.el-tabs__item{margin-left:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{color:var(--el-color-primary);background-color:var(--el-bg-color-overlay);border-right-color:var(--el-border-color);border-left-color:var(--el-border-color)}.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{color:var(--el-color-primary)}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-disabled{color:var(--el-disabled-text-color)}.el-tabs--border-card>.el-tabs__header .is-scrollable .el-tabs__item:first-child{margin-left:0}.el-tabs--bottom{flex-direction:column}.el-tabs--bottom .el-tabs__header.is-bottom{margin-top:10px;margin-bottom:0}.el-tabs--bottom.el-tabs--border-card .el-tabs__header.is-bottom{border-bottom:0;border-top:1px solid var(--el-border-color)}.el-tabs--bottom.el-tabs--border-card .el-tabs__nav-wrap.is-bottom{margin-top:-1px;margin-bottom:0}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom:not(.is-active){border:1px solid #0000}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom{margin:0 -1px -1px}.el-tabs--card>.el-tabs__header.is-left,.el-tabs--card>.el-tabs__header.is-right,.el-tabs--border-card>.el-tabs__header.is-left,.el-tabs--border-card>.el-tabs__header.is-right{border-bottom:none}.el-tabs--left,.el-tabs--right{overflow:hidden}.el-tabs--left .el-tabs__header.is-left,.el-tabs--left .el-tabs__header.is-right,.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--left .el-tabs__nav-scroll,.el-tabs--right .el-tabs__header.is-left,.el-tabs--right .el-tabs__header.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-scroll{height:100%}.el-tabs--left .el-tabs__active-bar.is-left,.el-tabs--left .el-tabs__active-bar.is-right,.el-tabs--right .el-tabs__active-bar.is-left,.el-tabs--right .el-tabs__active-bar.is-right{width:2px;height:auto;top:0;bottom:auto}.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right{margin-bottom:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{text-align:center;cursor:pointer;width:100%;height:30px;line-height:30px}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i{transform:rotate(90deg)}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev.is-disabled,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next.is-disabled,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev.is-disabled,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next.is-disabled{cursor:not-allowed}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev{top:0;left:auto}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{bottom:0;right:auto}.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable{padding:30px 0}.el-tabs--left .el-tabs__nav-wrap.is-left:after,.el-tabs--left .el-tabs__nav-wrap.is-right:after,.el-tabs--right .el-tabs__nav-wrap.is-left:after,.el-tabs--right .el-tabs__nav-wrap.is-right:after{width:2px;height:100%;top:0;bottom:auto}.el-tabs--left .el-tabs__nav.is-left,.el-tabs--left .el-tabs__nav.is-right,.el-tabs--right .el-tabs__nav.is-left,.el-tabs--right .el-tabs__nav.is-right{flex-direction:column}.el-tabs--left .el-tabs__item.is-left,.el-tabs--right .el-tabs__item.is-left{justify-content:flex-end}.el-tabs--left .el-tabs__item.is-right,.el-tabs--right .el-tabs__item.is-right{justify-content:flex-start}.el-tabs--left{flex-direction:row}.el-tabs--left .el-tabs__header.is-left{margin-bottom:0;margin-right:10px}.el-tabs--left .el-tabs__nav-wrap.is-left{margin-right:-1px}.el-tabs--left .el-tabs__nav-wrap.is-left:after,.el-tabs--left .el-tabs__active-bar.is-left{left:auto;right:0}.el-tabs--left .el-tabs__item.is-left{text-align:right}.el-tabs--left.el-tabs--card .el-tabs__active-bar.is-left{display:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left{border-left:none;border-right:1px solid var(--el-border-color-light);border-bottom:none;border-top:1px solid var(--el-border-color-light);text-align:left}.el-tabs--left.el-tabs--card .el-tabs__item.is-left:first-child{border-right:1px solid var(--el-border-color-light);border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{border:1px solid var(--el-border-color-light);border-bottom:none;border-left:none;border-right-color:#fff}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:first-child{border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:last-child{border-bottom:none}.el-tabs--left.el-tabs--card .el-tabs__nav{border-bottom:1px solid var(--el-border-color-light);border-right:none;border-radius:4px 0 0 4px}.el-tabs--left.el-tabs--card .el-tabs__new-tab{float:none}.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left{border-right:1px solid var(--el-border-color)}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left{border:1px solid #0000;margin:-1px 0 -1px -1px}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active{border-color:#d1dbe5 #0000}.el-tabs--left>.el-tabs__content+.el-tabs__header{order:-1}.el-tabs--right .el-tabs__header.is-right{margin-bottom:0;margin-left:10px}.el-tabs--right .el-tabs__nav-wrap.is-right{margin-left:-1px}.el-tabs--right .el-tabs__nav-wrap.is-right:after{left:0;right:auto}.el-tabs--right .el-tabs__active-bar.is-right{left:0}.el-tabs--right.el-tabs--card .el-tabs__active-bar.is-right{display:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right{border-bottom:none;border-top:1px solid var(--el-border-color-light)}.el-tabs--right.el-tabs--card .el-tabs__item.is-right:first-child{border-left:1px solid var(--el-border-color-light);border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active{border:1px solid var(--el-border-color-light);border-bottom:none;border-left-color:#fff;border-right:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:first-child{border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:last-child{border-bottom:none}.el-tabs--right.el-tabs--card .el-tabs__nav{border-bottom:1px solid var(--el-border-color-light);border-left:none;border-radius:0 4px 4px 0}.el-tabs--right.el-tabs--border-card .el-tabs__header.is-right{border-left:1px solid var(--el-border-color)}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right{border:1px solid #0000;margin:-1px -1px -1px 0}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right.is-active{border-color:#d1dbe5 #0000}.el-tabs--top{flex-direction:column}.el-tabs--top>.el-tabs__content+.el-tabs__header{order:-1}.slideInRight-transition,.slideInLeft-transition{display:inline-block}.slideInRight-enter{animation:slideInRight-enter var(--el-transition-duration)}.slideInRight-leave{animation:slideInRight-leave var(--el-transition-duration);position:absolute;left:0;right:0}.slideInLeft-enter{animation:slideInLeft-enter var(--el-transition-duration)}.slideInLeft-leave{animation:slideInLeft-leave var(--el-transition-duration);position:absolute;left:0;right:0}@keyframes slideInRight-enter{0%{opacity:0;transform-origin:0 0;transform:translate(100%)}to{opacity:1;transform-origin:0 0;transform:translate(0)}}@keyframes slideInRight-leave{0%{transform-origin:0 0;opacity:1;transform:translate(0)}to{transform-origin:0 0;opacity:0;transform:translate(100%)}}@keyframes slideInLeft-enter{0%{opacity:0;transform-origin:0 0;transform:translate(-100%)}to{opacity:1;transform-origin:0 0;transform:translate(0)}}@keyframes slideInLeft-leave{0%{transform-origin:0 0;opacity:1;transform:translate(0)}to{transform-origin:0 0;opacity:0;transform:translate(-100%)}}");
		}));
		var init_css$12 = __esmMin((() => {
			init_css$18();
			init_el_tabs();
		}));
		var init_el_tab_pane$1 = __esmMin((() => {}));
		var init_el_tab_pane = __esmMin((() => {
			init_el_tab_pane$1();
		}));
		var init_css$11 = __esmMin((() => {
			init_css$18();
			init_el_tab_pane();
		}));
		function toDraft(settings) {
			return {
				general: { ...settings.general },
				preset: Object.fromEntries(SITES.map(({ id }) => [id, isSiteEnabled(settings.preset, id)])),
				batch: { ...settings.batch },
				sync: { ...settings.sync }
			};
		}
		function resetGroup(draft, group) {
			draft[group] = toDraft(createDefaultSettings())[group];
		}
		function toDays(expirationTime) {
			return Math.round(expirationTime / DAY);
		}
		function fromDays(days, fallback) {
			return days == null || days < 1 || !Number.isInteger(days) ? fallback : days * DAY;
		}
		var DAY;
		var init_draft = __esmMin((() => {
			init_settings();
			init_sites();
			DAY = 864e5;
		}));
		var init_el_form$1 = __esmMin((() => {}));
		var init_el_form = __esmMin((() => {
			init_el_form$1();
			_css(".el-form{--el-form-label-font-size:var(--el-font-size-base);--el-form-inline-content-width:220px}.el-form--inline .el-form-item{vertical-align:middle;margin-right:32px;display:inline-flex}.el-form--inline .el-form-item:last-child{margin-right:0}.el-form--inline.el-form--label-top{flex-wrap:wrap;display:flex}.el-form--inline.el-form--label-top .el-form-item{display:block}");
		}));
		var init_css$10 = __esmMin((() => {
			init_css$18();
			init_el_form();
		}));
		var init_el_switch$1 = __esmMin((() => {}));
		var init_el_switch = __esmMin((() => {
			init_el_switch$1();
			_css(".el-switch{--el-switch-on-color:var(--el-color-primary);--el-switch-off-color:var(--el-border-color);vertical-align:middle;align-items:center;height:32px;font-size:14px;line-height:20px;display:inline-flex;position:relative}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);cursor:pointer;vertical-align:middle;height:20px;color:var(--el-text-color-primary);font-size:14px;font-weight:500;display:inline-block}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{font-size:14px;line-height:1;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{opacity:0;width:0;height:0;margin:0;position:absolute}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{border:1px solid var(--el-switch-border-color,var(--el-switch-off-color));box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;min-width:40px;height:20px;transition:border-color var(--el-transition-duration), background-color var(--el-transition-duration);border-radius:10px;outline:none;align-items:center;display:inline-flex;position:relative}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);justify-content:center;align-items:center;height:16px;padding:0 4px 0 18px;display:flex;overflow:hidden}.el-switch__core .el-switch__inner-wrapper{color:var(--el-color-white);-webkit-user-select:none;user-select:none;text-overflow:ellipsis;white-space:nowrap;align-items:center;font-size:12px;display:flex;overflow:hidden}.el-switch__core .el-switch__action{border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);background-color:var(--el-color-white);width:16px;height:16px;color:var(--el-switch-off-color);justify-content:center;align-items:center;display:flex;position:absolute;left:1px}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color,var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{color:var(--el-switch-on-color);left:calc(100% - 17px)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{height:40px;font-size:14px;line-height:24px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{border-radius:12px;min-width:50px;height:24px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{height:24px;font-size:12px;line-height:16px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{border-radius:8px;min-width:30px;height:16px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}");
		}));
		var init_css$9 = __esmMin((() => {
			init_css$18();
			init_el_switch();
		}));
		var init_el_input$1 = __esmMin((() => {}));
		var init_el_input = __esmMin((() => {
			init_el_input$1();
			_css(".el-textarea{--el-input-text-color:var(--el-text-color-regular);--el-input-border:var(--el-border);--el-input-hover-border:var(--el-border-color-hover);--el-input-focus-border:var(--el-color-primary);--el-input-transparent-border:0 0 0 1px transparent inset;--el-input-border-color:var(--el-border-color);--el-input-border-radius:var(--el-border-radius-base);--el-input-bg-color:var(--el-fill-color-blank);--el-input-icon-color:var(--el-text-color-placeholder);--el-input-placeholder-color:var(--el-text-color-placeholder);--el-input-hover-border-color:var(--el-border-color-hover);--el-input-clear-hover-color:var(--el-text-color-secondary);--el-input-focus-border-color:var(--el-color-primary);--el-input-width:100%;vertical-align:bottom;width:100%;font-size:var(--el-font-size-base);display:inline-block;position:relative}.el-textarea__inner{cursor:auto;resize:vertical;box-sizing:border-box;width:100%;line-height:1.5;font-size:inherit;color:var(--el-input-text-color,var(--el-text-color-regular));background-color:var(--el-input-bg-color,var(--el-fill-color-blank));-webkit-appearance:none;box-shadow:0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;border-radius:var(--el-input-border-radius,var(--el-border-radius-base));transition:var(--el-transition-box-shadow);background-image:none;border:none;padding:5px 11px;font-family:inherit;display:block;position:relative;overflow-y:auto}.el-textarea__inner.is-clearable{padding:5px 26px 5px 11px}.el-textarea__inner::placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-textarea__inner:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-textarea__inner:focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset;outline:none}.el-textarea__clear{color:var(--el-input-icon-color);cursor:pointer;font-size:14px;position:absolute;top:15px;right:11px;transform:translateY(-50%)}.el-textarea__clear:hover{color:var(--el-input-clear-hover-color)}.el-textarea .el-input__count{color:var(--el-color-info);background:var(--el-fill-color-blank);font-size:12px;line-height:14px;position:absolute;bottom:5px;right:10px}.el-textarea .el-input__count.is-outside{top:100%;right:0;bottom:unset;background:0 0;padding-top:2px;line-height:1;position:absolute}.el-textarea.is-disabled .el-textarea__inner{box-shadow:0 0 0 1px var(--el-disabled-border-color) inset;background-color:var(--el-disabled-bg-color);color:var(--el-disabled-text-color);cursor:not-allowed}.el-textarea.is-disabled .el-textarea__inner::placeholder{color:var(--el-text-color-placeholder)}.el-textarea.is-exceed .el-textarea__inner{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-textarea.is-exceed .el-input__count{color:var(--el-color-danger)}.el-input{--el-input-text-color:var(--el-text-color-regular);--el-input-border:var(--el-border);--el-input-hover-border:var(--el-border-color-hover);--el-input-focus-border:var(--el-color-primary);--el-input-transparent-border:0 0 0 1px transparent inset;--el-input-border-color:var(--el-border-color);--el-input-border-radius:var(--el-border-radius-base);--el-input-bg-color:var(--el-fill-color-blank);--el-input-icon-color:var(--el-text-color-placeholder);--el-input-placeholder-color:var(--el-text-color-placeholder);--el-input-hover-border-color:var(--el-border-color-hover);--el-input-clear-hover-color:var(--el-text-color-secondary);--el-input-focus-border-color:var(--el-color-primary);--el-input-width:100%;--el-input-height:var(--el-component-size);font-size:var(--el-font-size-base);width:var(--el-input-width);line-height:var(--el-input-height);box-sizing:border-box;vertical-align:middle;display:inline-flex;position:relative}.el-input::-webkit-scrollbar{z-index:11;width:6px}.el-input::-webkit-scrollbar:horizontal{height:6px}.el-input::-webkit-scrollbar-thumb{background:var(--el-text-color-disabled);border-radius:5px;width:6px}.el-input::-webkit-scrollbar-corner{background:var(--el-fill-color-blank)}.el-input::-webkit-scrollbar-track{background:var(--el-fill-color-blank)}.el-input::-webkit-scrollbar-track-piece{background:var(--el-fill-color-blank);width:6px}.el-input .el-input__clear,.el-input .el-input__password{color:var(--el-input-icon-color);cursor:pointer;font-size:14px}.el-input .el-input__clear:hover,.el-input .el-input__password:hover{color:var(--el-input-clear-hover-color)}.el-input .el-input__count{height:100%;color:var(--el-color-info);align-items:center;font-size:12px;display:inline-flex}.el-input .el-input__count .el-input__count-inner{background:var(--el-fill-color-blank);line-height:initial;padding-left:8px;display:inline-block}.el-input .el-input__count.is-outside{height:unset;padding-top:2px;position:absolute;top:100%;right:0}.el-input .el-input__count.is-outside .el-input__count-inner{background:0 0;padding-left:0;line-height:1}.el-input__wrapper{background-color:var(--el-input-bg-color,var(--el-fill-color-blank));border-radius:var(--el-input-border-radius,var(--el-border-radius-base));cursor:text;transition:var(--el-transition-box-shadow);box-shadow:0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;background-image:none;flex-grow:1;justify-content:center;align-items:center;padding:1px 11px;display:inline-flex;transform:translateZ(0)}.el-input__wrapper:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-input__wrapper.is-focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset}.el-input{--el-input-inner-height:calc(var(--el-input-height,32px) - 2px)}.el-input__inner{-webkit-appearance:none;width:100%;color:var(--el-input-text-color,var(--el-text-color-regular));font-size:inherit;height:var(--el-input-inner-height);line-height:var(--el-input-inner-height);box-sizing:border-box;background:0 0;border:none;outline:none;flex-grow:1;padding:0}.el-input__inner:focus{outline:none}.el-input__inner::placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-input__inner[type=password]::-ms-reveal{display:none}.el-input__inner[type=number]{line-height:1}.el-input__prefix{white-space:nowrap;height:100%;line-height:var(--el-input-inner-height);text-align:center;color:var(--el-input-icon-color,var(--el-text-color-placeholder));transition:all var(--el-transition-duration);pointer-events:none;flex-wrap:nowrap;flex-shrink:0;display:inline-flex}.el-input__prefix-inner{pointer-events:all;justify-content:center;align-items:center;display:inline-flex}.el-input__prefix-inner>:last-child{margin-right:8px}.el-input__prefix-inner>:first-child,.el-input__prefix-inner>:first-child.el-input__icon{margin-left:0}.el-input__suffix{white-space:nowrap;height:100%;line-height:var(--el-input-inner-height);text-align:center;color:var(--el-input-icon-color,var(--el-text-color-placeholder));transition:all var(--el-transition-duration);pointer-events:none;flex-wrap:nowrap;flex-shrink:0;display:inline-flex}.el-input__suffix-inner{pointer-events:all;justify-content:center;align-items:center;display:inline-flex}.el-input__suffix-inner>:first-child{margin-left:8px}.el-input .el-input__icon{height:inherit;line-height:inherit;transition:all var(--el-transition-duration);justify-content:center;align-items:center;margin-left:8px;display:flex}.el-input .el-input__clear{transition:color var(--el-transition-duration)}.el-input__validateIcon{pointer-events:none}.el-input.is-active .el-input__wrapper{box-shadow:0 0 0 1px var(--el-input-focus-color, ) inset}.el-input.is-disabled{cursor:not-allowed}.el-input.is-disabled .el-input__wrapper{background-color:var(--el-disabled-bg-color);cursor:not-allowed;box-shadow:0 0 0 1px var(--el-disabled-border-color) inset}.el-input.is-disabled .el-input__inner{color:var(--el-disabled-text-color);-webkit-text-fill-color:var(--el-disabled-text-color);cursor:not-allowed}.el-input.is-disabled .el-input__inner::placeholder{color:var(--el-text-color-placeholder)}.el-input.is-disabled .el-input__icon{cursor:not-allowed}.el-input.is-disabled .el-input__prefix-inner,.el-input.is-disabled .el-input__suffix-inner{pointer-events:none}.el-input.is-exceed .el-input__wrapper{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-input.is-exceed .el-input__suffix .el-input__count{color:var(--el-color-danger)}.el-input--large{--el-input-height:var(--el-component-size-large);font-size:14px}.el-input--large .el-input__wrapper{padding:1px 15px}.el-input--large{--el-input-inner-height:calc(var(--el-input-height,40px) - 2px)}.el-input--small{--el-input-height:var(--el-component-size-small);font-size:12px}.el-input--small .el-input__wrapper{padding:1px 7px}.el-input--small{--el-input-inner-height:calc(var(--el-input-height,24px) - 2px)}.el-input-group{align-items:stretch;width:100%;display:inline-flex}.el-input-group__append,.el-input-group__prepend{background-color:var(--el-fill-color-light);color:var(--el-color-info);border-radius:var(--el-input-border-radius);white-space:nowrap;justify-content:center;align-items:center;min-height:100%;padding:0 20px;display:inline-flex;position:relative}.el-input-group__append:focus,.el-input-group__prepend:focus{outline:none}.el-input-group__append .el-select,.el-input-group__append .el-button,.el-input-group__prepend .el-select,.el-input-group__prepend .el-button{flex:1;margin:0 -20px;display:inline-block}.el-input-group__append button.el-button,.el-input-group__append button.el-button:hover,.el-input-group__append div.el-select .el-select__wrapper,.el-input-group__append div.el-select:hover .el-select__wrapper,.el-input-group__prepend button.el-button,.el-input-group__prepend button.el-button:hover,.el-input-group__prepend div.el-select .el-select__wrapper,.el-input-group__prepend div.el-select:hover .el-select__wrapper{color:inherit;background-color:#0000;border-color:#0000}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input{font-size:inherit}.el-input-group__prepend{box-shadow:1px 0 0 0 var(--el-input-border-color) inset, 0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group__append{box-shadow:0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset, -1px 0 0 0 var(--el-input-border-color) inset;border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.el-input-group--prepend>.el-input__wrapper{border-top-left-radius:0;border-bottom-left-radius:0}.el-input-group--prepend .el-input-group__prepend .el-select .el-select__wrapper{box-shadow:1px 0 0 0 var(--el-input-border-color) inset, 0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset;border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group--append>.el-input__wrapper{border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group--append .el-input-group__append .el-select .el-select__wrapper{box-shadow:0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset, -1px 0 0 0 var(--el-input-border-color) inset;border-top-left-radius:0;border-bottom-left-radius:0}.el-input-hidden{display:none!important}");
		}));
		var init_css$8 = __esmMin((() => {
			init_css$18();
			init_el_input();
		}));
		var init_el_input_number$1 = __esmMin((() => {}));
		var init_el_input_number = __esmMin((() => {
			init_el_input_number$1();
			_css(".el-input-number{vertical-align:middle;width:150px;line-height:30px;display:inline-flex;position:relative}.el-input-number .el-input__wrapper{padding-left:42px;padding-right:42px}.el-input-number .el-input__inner{-webkit-appearance:none;-moz-appearance:textfield;text-align:center;line-height:1}.el-input-number .el-input__inner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.el-input-number .el-input__inner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.el-input-number.is-left .el-input__inner{text-align:left}.el-input-number.is-right .el-input__inner{text-align:right}.el-input-number.is-center .el-input__inner{text-align:center}.el-input-number__increase,.el-input-number__decrease{z-index:1;background:var(--el-fill-color-light);width:32px;height:auto;color:var(--el-text-color-regular);cursor:pointer;-webkit-user-select:none;user-select:none;justify-content:center;align-items:center;font-size:13px;display:flex;position:absolute;top:1px;bottom:1px}.el-input-number__increase:hover,.el-input-number__decrease:hover{color:var(--el-color-primary)}.el-input-number__increase:hover~.el-input:not(.is-disabled) .el-input__wrapper,.el-input-number__decrease:hover~.el-input:not(.is-disabled) .el-input__wrapper{box-shadow:0 0 0 1px var(--el-input-focus-border-color,var(--el-color-primary)) inset}.el-input-number__increase.is-disabled,.el-input-number__decrease.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-input-number__increase{border-radius:0 var(--el-border-radius-base) var(--el-border-radius-base) 0;border-left:var(--el-border);right:1px}.el-input-number__decrease{border-radius:var(--el-border-radius-base) 0 0 var(--el-border-radius-base);border-right:var(--el-border);left:1px}.el-input-number.is-disabled .el-input-number__increase,.el-input-number.is-disabled .el-input-number__decrease{border-color:var(--el-disabled-border-color);color:var(--el-disabled-border-color)}.el-input-number.is-disabled .el-input-number__increase:hover,.el-input-number.is-disabled .el-input-number__decrease:hover{color:var(--el-disabled-border-color);cursor:not-allowed}.el-input-number--large{width:180px;line-height:38px}.el-input-number--large .el-input-number__increase,.el-input-number--large .el-input-number__decrease{width:40px;font-size:14px}.el-input-number--large.is-controls-right .el-input--large .el-input__wrapper{padding-right:47px}.el-input-number--large .el-input--large .el-input__wrapper{padding-left:47px;padding-right:47px}.el-input-number--small{width:120px;line-height:22px}.el-input-number--small .el-input-number__increase,.el-input-number--small .el-input-number__decrease{width:24px;font-size:12px}.el-input-number--small.is-controls-right .el-input--small .el-input__wrapper{padding-right:31px}.el-input-number--small .el-input--small .el-input__wrapper{padding-left:31px;padding-right:31px}.el-input-number--small .el-input-number__increase [class*=el-icon],.el-input-number--small .el-input-number__decrease [class*=el-icon]{transform:scale(.9)}.el-input-number.is-without-controls .el-input__wrapper{padding-left:15px;padding-right:15px}.el-input-number.is-controls-right .el-input__wrapper{padding-left:15px;padding-right:42px}.el-input-number.is-controls-right .el-input-number__increase,.el-input-number.is-controls-right .el-input-number__decrease{--el-input-number-controls-height:15px;height:var(--el-input-number-controls-height);line-height:var(--el-input-number-controls-height)}.el-input-number.is-controls-right .el-input-number__increase [class*=el-icon],.el-input-number.is-controls-right .el-input-number__decrease [class*=el-icon]{transform:scale(.8)}.el-input-number.is-controls-right .el-input-number__increase{border-radius:0 var(--el-border-radius-base) 0 0;border-bottom:var(--el-border);bottom:auto;left:auto}.el-input-number.is-controls-right .el-input-number__decrease{border-right:none;border-left:var(--el-border);border-radius:0 0 var(--el-border-radius-base) 0;top:auto;left:auto;right:1px}.el-input-number.is-controls-right[class*=large] [class*=increase],.el-input-number.is-controls-right[class*=large] [class*=decrease]{--el-input-number-controls-height:19px}.el-input-number.is-controls-right[class*=small] [class*=increase],.el-input-number.is-controls-right[class*=small] [class*=decrease]{--el-input-number-controls-height:11px}");
		}));
		var init_css$7 = __esmMin((() => {
			init_css$18();
			init_css$8();
			init_el_input_number();
		}));
		var init_el_form_item$1 = __esmMin((() => {}));
		var init_el_form_item = __esmMin((() => {
			init_el_form_item$1();
			_css(".el-form-item{--el-form-item-margin-bottom:18px;--font-size:14px;margin-bottom:var(--el-form-item-margin-bottom);display:flex}.el-form-item .el-form-item{margin-bottom:0}.el-form-item .el-input__validateIcon{display:none}.el-form-item--large{--font-size:14px;--el-form-label-font-size:var(--font-size);--el-form-item-margin-bottom:22px}.el-form-item--large .el-form-item__label{height:40px;line-height:40px}.el-form-item--large .el-form-item__content{line-height:40px}.el-form-item--large .el-form-item__error{padding-top:4px}.el-form-item--default{--font-size:14px;--el-form-label-font-size:var(--font-size);--el-form-item-margin-bottom:18px}.el-form-item--default .el-form-item__label{height:32px;line-height:32px}.el-form-item--default .el-form-item__content{line-height:32px}.el-form-item--default .el-form-item__error{padding-top:2px}.el-form-item--small{--font-size:12px;--el-form-label-font-size:var(--font-size);--el-form-item-margin-bottom:18px}.el-form-item--small .el-form-item__label{height:24px;line-height:24px}.el-form-item--small .el-form-item__content{line-height:24px}.el-form-item--small .el-form-item__error{padding-top:2px}.el-form-item--label-left .el-form-item__label{text-align:left;justify-content:flex-start}.el-form-item--label-right .el-form-item__label{text-align:right;justify-content:flex-end}.el-form-item--label-top{display:block}.el-form-item--label-top .el-form-item__label{text-align:left;width:fit-content;height:auto;margin-bottom:8px;padding-right:0;line-height:22px;display:block}.el-form-item__label-wrap{display:flex}.el-form-item__label{font-size:var(--el-form-label-font-size);color:var(--el-text-color-regular);box-sizing:border-box;flex:none;align-items:flex-start;height:32px;padding:0 12px 0 0;line-height:32px;display:inline-flex}.el-form-item__content{line-height:32px;font-size:var(--font-size);flex-wrap:wrap;flex:1;align-items:center;min-width:0;display:flex;position:relative}.el-form-item__content .el-input-group{vertical-align:top}.el-form-item__error{color:var(--el-color-danger);padding-top:2px;font-size:12px;line-height:1;position:absolute;top:100%;left:0}.el-form-item__error--inline{margin-left:10px;display:inline-block;position:relative;top:auto;left:auto}.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label:before,.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label-wrap>.el-form-item__label:before{content:\"*\";color:var(--el-color-danger);margin-right:4px}.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label:after,.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label-wrap>.el-form-item__label:after{content:\"*\";color:var(--el-color-danger);margin-left:4px}.el-form-item.is-error .el-form-item__content .el-input__wrapper,.el-form-item.is-error .el-form-item__content .el-input__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-input__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-input__wrapper.is-focus,.el-form-item.is-error .el-form-item__content .el-textarea__inner,.el-form-item.is-error .el-form-item__content .el-textarea__inner:hover,.el-form-item.is-error .el-form-item__content .el-textarea__inner:focus,.el-form-item.is-error .el-form-item__content .el-textarea__inner.is-focus,.el-form-item.is-error .el-form-item__content .el-select__wrapper,.el-form-item.is-error .el-form-item__content .el-select__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-select__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-select__wrapper.is-focus,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper.is-focus,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field:hover,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field:focus,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field.is-focus,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field:after,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field:hover:after,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field:focus:after,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field.is-focus:after{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-form-item.is-error .el-form-item__content .el-input-group__append .el-input__wrapper,.el-form-item.is-error .el-form-item__content .el-input-group__prepend .el-input__wrapper{box-shadow:inset 0 0 0 1px #0000}.el-form-item.is-error .el-form-item__content .el-input-group__append .el-input__validateIcon,.el-form-item.is-error .el-form-item__content .el-input-group__prepend .el-input__validateIcon{display:none}.el-form-item.is-error .el-form-item__content .el-input__validateIcon{color:var(--el-color-danger)}.el-form-item--feedback .el-input__validateIcon{display:inline-flex}");
		}));
		var init_css$6 = __esmMin((() => {
			init_css$18();
			init_el_form_item();
		}));
		var init_el_color_picker_panel$1 = __esmMin((() => {}));
		var init_el_color_picker_panel = __esmMin((() => {
			init_el_color_picker_panel$1();
			_css(".el-color-picker-panel{--el-colorpicker-bg-color:var(--el-bg-color-overlay);--el-fill-color-blank:var(--el-colorpicker-bg-color);box-sizing:content-box;background:var(--el-colorpicker-bg-color);width:300px;padding:12px}.el-color-picker-panel.is-border{border:solid 1px var(--el-border-color-lighter);border-radius:4px}.el-color-picker-panel__wrapper{margin-bottom:6px}.el-color-picker-panel__footer{text-align:right;justify-content:space-between;margin-top:12px;display:flex}.el-color-picker-panel__footer .el-input{color:#000;width:160px;font-size:12px;line-height:26px}.el-color-picker-panel.is-disabled .el-color-svpanel,.el-color-picker-panel.is-disabled .el-color-hue-slider{cursor:not-allowed;opacity:.3}.el-color-picker-panel.is-disabled .el-color-hue-slider__thumb{cursor:not-allowed}.el-color-picker-panel.is-disabled .el-color-alpha-slider,.el-color-picker-panel.is-disabled .el-color-predefine .el-color-predefine__color-selector{cursor:not-allowed;opacity:.3}.el-color-predefine{width:280px;margin-top:8px;font-size:12px;display:flex}.el-color-predefine__colors{flex-wrap:wrap;flex:1;gap:8px;display:flex}.el-color-predefine__color-selector{border-radius:var(--el-border-radius-base);cursor:pointer;border:none;outline:none;width:20px;height:20px;padding:0;overflow:hidden}.el-color-predefine__color-selector.selected{box-shadow:0 0 3px 2px var(--el-color-primary)}.el-color-predefine__color-selector:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:2px}.el-color-predefine__color-selector>div{height:100%;display:flex}.el-color-predefine__color-selector.is-alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)}.el-color-hue-slider{box-sizing:border-box;float:right;background-color:red;width:280px;height:12px;padding:0 2px;position:relative}.el-color-hue-slider__bar{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);height:100%;position:relative}.el-color-hue-slider__thumb{cursor:pointer;box-sizing:border-box;border:1px solid var(--el-border-color-lighter);z-index:1;background:#fff;border-radius:1px;width:4px;height:100%;position:absolute;top:0;left:0;box-shadow:0 0 2px #0009}.el-color-hue-slider__thumb:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:1px}.el-color-hue-slider.is-vertical{width:12px;height:180px;padding:2px 0}.el-color-hue-slider.is-vertical .el-color-hue-slider__bar{background:linear-gradient(red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.el-color-hue-slider.is-vertical .el-color-hue-slider__thumb{width:100%;height:4px;top:0;left:0}.el-color-svpanel{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);width:280px;height:180px;position:relative}.el-color-svpanel__cursor{cursor:pointer;border-radius:50%;width:4px;height:4px;position:absolute;transform:translate(-2px,-2px);box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px #0000004d,0 0 1px 2px #0006}.el-color-svpanel__cursor:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:2px}.el-color-alpha-slider{box-sizing:border-box;background-image:linear-gradient(45deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(45deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%);background-position:0 0,6px 0,6px -6px,0 6px;background-size:12px 12px;width:280px;height:12px;position:relative}.el-color-alpha-slider.is-disabled .el-color-alpha-slider__thumb{cursor:not-allowed}.el-color-alpha-slider__bar{background:linear-gradient(to right, #fff0 0%, var(--el-bg-color) 100%);height:100%;position:relative}.el-color-alpha-slider__thumb{cursor:pointer;box-sizing:border-box;border:1px solid var(--el-border-color-lighter);z-index:1;background:#fff;border-radius:1px;width:4px;height:100%;position:absolute;top:0;left:0;box-shadow:0 0 2px #0009}.el-color-alpha-slider__thumb:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:1px}.el-color-alpha-slider.is-vertical{width:20px;height:180px}.el-color-alpha-slider.is-vertical .el-color-alpha-slider__bar{background:linear-gradient(#fff0 0%,#fff 100%)}.el-color-alpha-slider.is-vertical .el-color-alpha-slider__thumb{width:100%;height:4px;top:0;left:0}.el-color-picker-panel{--el-color-picker-alpha-bg-a:#ccc;--el-color-picker-alpha-bg-b:transparent}.dark .el-color-picker-panel{--el-color-picker-alpha-bg-a:#333}");
		}));
		var init_css$5 = __esmMin((() => {
			init_css$18();
			init_css$8();
			init_el_color_picker_panel();
		}));
		var init_el_color_picker$1 = __esmMin((() => {}));
		var init_el_color_picker = __esmMin((() => {
			init_el_color_picker$1();
			_css(".el-color-picker{outline:none;width:32px;height:32px;line-height:normal;display:inline-block;position:relative}.el-color-picker:hover:not(:-webkit-any(.is-disabled,.is-focused)) .el-color-picker__trigger{border-color:var(--el-border-color-hover)}.el-color-picker:hover:not(:is(.is-disabled,.is-focused)) .el-color-picker__trigger{border-color:var(--el-border-color-hover)}.el-color-picker:focus-visible:not(.is-disabled) .el-color-picker__trigger{outline:2px solid var(--el-color-primary);outline-offset:1px}.el-color-picker.is-focused .el-color-picker__trigger{border-color:var(--el-color-primary)}.el-color-picker.is-disabled .el-color-picker__trigger{cursor:not-allowed;background-color:var(--el-fill-color-light)}.el-color-picker.is-disabled .el-color-picker__color{opacity:.3}.el-color-picker--large{width:40px;height:40px}.el-color-picker--small{width:24px;height:24px}.el-color-picker--small .el-color-picker__icon,.el-color-picker--small .el-color-picker__empty{transform:scale(.8)}.el-color-picker__trigger{box-sizing:border-box;border:1px solid var(--el-border-color);cursor:pointer;border-radius:4px;justify-content:center;align-items:center;width:100%;height:100%;padding:4px;font-size:0;display:inline-flex;position:relative}.el-color-picker__color{box-sizing:border-box;border:1px solid var(--el-text-color-secondary);border-radius:var(--el-border-radius-small);text-align:center;width:100%;height:100%;display:block;position:relative}.el-color-picker__color.is-alpha{background-image:linear-gradient(45deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(45deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%);background-position:0 0,6px 0,6px -6px,0 6px;background-size:12px 12px}.el-color-picker__color-inner{justify-content:center;align-items:center;width:100%;height:100%;display:inline-flex}.el-color-picker .el-color-picker__empty{color:var(--el-text-color-secondary);font-size:12px}.el-color-picker .el-color-picker__icon{color:#fff;justify-content:center;align-items:center;font-size:12px;display:inline-flex}.el-color-picker__panel{border-radius:var(--el-border-radius-base);box-shadow:var(--el-box-shadow-light);background-color:#fff}.el-color-picker__panel.el-popper{border:1px solid var(--el-border-color-lighter)}.el-color-picker,.el-color-picker__panel{--el-color-picker-alpha-bg-a:#ccc;--el-color-picker-alpha-bg-b:transparent}.dark .el-color-picker,.dark .el-color-picker__panel{--el-color-picker-alpha-bg-a:#333}");
		}));
		var init_css$4 = __esmMin((() => {
			init_css$18();
			init_css$8();
			init_css$15();
			init_css$5();
			init_el_color_picker();
		}));
		var _hoisted_1$4;
		var _hoisted_2$3;
		var _hoisted_3$3;
		var _hoisted_4$3;
		var _hoisted_5$3;
		var GeneralTab_vue_vue_type_script_setup_true_lang_default;
		var init_GeneralTab_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_es();
			init_css$18();
			init_css$10();
			init_css$9();
			init_css$7();
			init_css$6();
			init_css$8();
			init_css$4();
			init_vue_runtime_esm_bundler();
			init_draft();
			_hoisted_1$4 = { class: "space-y-6" };
			_hoisted_2$3 = { class: "flex items-center gap-3" };
			_hoisted_3$3 = { class: "space-y-2" };
			_hoisted_4$3 = { class: "flex items-center gap-2" };
			_hoisted_5$3 = { class: "space-y-2" };
			GeneralTab_vue_vue_type_script_setup_true_lang_default = defineComponent({
				__name: "GeneralTab",
				props: mergeModels({ savedExpirationTime: {} }, {
					"modelValue": { required: true },
					"modelModifiers": {}
				}),
				emits: ["update:modelValue"],
				setup(__props) {
					const props = __props;
					const general = useModel(__props, "modelValue");
					const colorPresets = [
						"rgba(0,0,0,0)",
						"#f1f5f9",
						"#e2e8f0",
						"#cbd5e1",
						"#94a3b8",
						"#64748b",
						"#475569",
						"#334155",
						"#1e293b",
						"#0f172a"
					];
					const expirationDays = computed({
						get: () => toDays(general.value.expirationTime),
						set: (days) => {
							general.value.expirationTime = fromDays(days, props.savedExpirationTime);
						}
					});
					return (_ctx, _cache) => {
						const _component_el_color_picker = ElColorPicker;
						const _component_el_input = ElInput;
						const _component_el_form_item = ElFormItem;
						const _component_el_input_number = ElInputNumber;
						const _component_el_switch = ElSwitch;
						const _component_el_form = ElForm;
						return openBlock(), createElementBlock("div", _hoisted_1$4, [_cache[7] || (_cache[7] = createBaseVNode("div", { class: "border-b pb-4" }, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "常规设置"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "自定义链接颜色和行为设置")], -1)), createVNode(_component_el_form, {
							"label-width": "120px",
							class: "space-y-6"
						}, {
							default: withCtx(() => [
								createVNode(_component_el_form_item, { label: "链接颜色" }, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_2$3, [createVNode(_component_el_color_picker, {
										modelValue: general.value.color,
										"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => general.value.color = $event),
										"show-alpha": "",
										predefine: colorPresets,
										size: "large"
									}, null, 8, ["modelValue"]), createVNode(_component_el_input, {
										modelValue: general.value.color,
										"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => general.value.color = $event),
										class: "flex-1",
										placeholder: "请输入颜色值",
										clearable: ""
									}, null, 8, ["modelValue"])])]),
									_: 1
								}),
								createVNode(_component_el_form_item, { label: "过期时间" }, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_3$3, [createBaseVNode("div", _hoisted_4$3, [createVNode(_component_el_input_number, {
										modelValue: expirationDays.value,
										"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => expirationDays.value = $event),
										max: 3650,
										"controls-position": "right",
										size: "large",
										class: "w-32"
									}, null, 8, ["modelValue"]), _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-sm text-gray-600" }, "天", -1))]), _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-xs text-gray-500" }, "设置已访问链接的记录保留时间", -1))])]),
									_: 1
								}),
								createVNode(_component_el_form_item, { label: "调试模式" }, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_5$3, [createVNode(_component_el_switch, {
										modelValue: general.value.debug,
										"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => general.value.debug = $event),
										size: "large",
										"inline-prompt": ""
									}, null, 8, ["modelValue"]), _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-xs text-gray-500" }, "开启后将在控制台显示详细调试信息", -1))])]),
									_: 1
								})
							]),
							_: 1
						})]);
					};
				}
			});
		}));
		var GeneralTab_default;
		var init_GeneralTab = __esmMin((() => {
			init_GeneralTab_vue_vue_type_script_setup_true_lang();
			init_GeneralTab_vue_vue_type_script_setup_true_lang();
			GeneralTab_default = GeneralTab_vue_vue_type_script_setup_true_lang_default;
		}));
		var init_el_collapse_transition$1 = __esmMin((() => {}));
		var init_el_collapse_transition = __esmMin((() => {
			init_el_collapse_transition$1();
			_css(".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:top;transform:scaleY(1)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:bottom;transform:scaleY(1)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:0 0;transform:scale(1)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out, var(--el-transition-duration) padding-left ease-in-out, var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}");
		}));
		var init_css$3 = __esmMin((() => {
			init_css$18();
			init_el_collapse_transition();
		}));
		var init_css$2 = __esmMin((() => {
			init_css$18();
		}));
		var _hoisted_1$3;
		var _hoisted_2$2;
		var _hoisted_3$2;
		var _hoisted_4$2;
		var _hoisted_5$2;
		var _hoisted_6$2;
		var _hoisted_7$1;
		var _hoisted_8$1;
		var _hoisted_9$1;
		var _hoisted_10;
		var _hoisted_11;
		var _hoisted_12;
		var _hoisted_13;
		var _hoisted_14;
		var _hoisted_15;
		var _hoisted_16;
		var _hoisted_17;
		var _hoisted_18;
		var _hoisted_19;
		var _hoisted_20;
		var _hoisted_21;
		var _hoisted_22;
		var _hoisted_23;
		var _hoisted_24;
		var _hoisted_25;
		var _hoisted_26;
		var PresetTab_vue_vue_type_script_setup_true_lang_default;
		var init_PresetTab_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_es();
			init_css$18();
			init_css$3();
			init_css$9();
			init_css$2();
			init_vue_runtime_esm_bundler();
			init_dist();
			init_sites();
			_hoisted_1$3 = { class: "space-y-4 h-full overflow-y-auto" };
			_hoisted_2$2 = { class: "border-b pb-3" };
			_hoisted_3$2 = { class: "flex items-start justify-between" };
			_hoisted_4$2 = { class: "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 ml-6" };
			_hoisted_5$2 = { class: "flex items-center justify-between" };
			_hoisted_6$2 = { class: "text-right" };
			_hoisted_7$1 = { class: "text-lg font-bold text-green-600" };
			_hoisted_8$1 = { class: "flex space-x-2 ml-4" };
			_hoisted_9$1 = { class: "space-y-2" };
			_hoisted_10 = { class: "p-5" };
			_hoisted_11 = { class: "flex items-center justify-between" };
			_hoisted_12 = ["onClick"];
			_hoisted_13 = { class: "flex-1" };
			_hoisted_14 = { class: "flex items-center space-x-3" };
			_hoisted_15 = { class: "font-semibold text-gray-900 text-lg" };
			_hoisted_16 = { class: "text-sm text-gray-500 mt-1" };
			_hoisted_17 = { class: "border-t border-gray-100" };
			_hoisted_18 = { class: "px-5 py-3 bg-gray-50/50 rounded-b-xl space-y-3" };
			_hoisted_19 = {
				key: 0,
				class: "bg-white rounded-lg border border-gray-200 p-4 mb-3"
			};
			_hoisted_20 = { class: "flex items-center space-x-2 mb-3" };
			_hoisted_21 = { class: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full" };
			_hoisted_22 = { class: "space-y-2 max-h-32 overflow-y-auto" };
			_hoisted_23 = {
				key: 1,
				class: "bg-white rounded-lg border border-gray-200 p-4"
			};
			_hoisted_24 = { class: "flex items-center space-x-2 mb-3" };
			_hoisted_25 = { class: "bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full" };
			_hoisted_26 = { class: "space-y-2 max-h-32 overflow-y-auto" };
			PresetTab_vue_vue_type_script_setup_true_lang_default = defineComponent({
				__name: "PresetTab",
				props: {
					"modelValue": { required: true },
					"modelModifiers": {}
				},
				emits: ["update:modelValue"],
				setup(__props) {
					const preset = useModel(__props, "modelValue");
					const enabledCount = computed(() => SITES.filter(({ id }) => preset.value[id]).length);
					const setAll = (enabled) => {
						for (const { id } of SITES) preset.value[id] = enabled;
					};
					const expanded = ref(new Set());
					const toggleExpanded = (id) => {
						if (expanded.value.has(id)) expanded.value.delete(id);
						else expanded.value.add(id);
					};
					return (_ctx, _cache) => {
						const _component_el_icon = ElIcon;
						const _component_el_switch = ElSwitch;
						const _component_el_collapse_transition = ElCollapseTransition;
						return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$2, [createBaseVNode("div", _hoisted_3$2, [_cache[4] || (_cache[4] = createBaseVNode("div", null, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "预设网站管理"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "控制脚本在哪些网站生效，点击网站名称展开查看详情")], -1)), createBaseVNode("div", _hoisted_4$2, [createBaseVNode("div", _hoisted_5$2, [createBaseVNode("div", _hoisted_6$2, [_cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-sm text-gray-500" }, "已启用", -1)), createBaseVNode("div", _hoisted_7$1, toDisplayString(enabledCount.value) + " / " + toDisplayString(unref(SITES).length), 1)]), createBaseVNode("div", _hoisted_8$1, [createBaseVNode("button", {
							onClick: _cache[0] || (_cache[0] = ($event) => setAll(true)),
							class: "px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
						}, " 全部启用 "), createBaseVNode("button", {
							onClick: _cache[1] || (_cache[1] = ($event) => setAll(false)),
							class: "px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
						}, " 全部禁用 ")])])])])]), createBaseVNode("div", _hoisted_9$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(SITES), (site) => {
							return openBlock(), createElementBlock("div", {
								key: site.id,
								class: "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
							}, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", {
								class: "flex items-center flex-1 cursor-pointer",
								onClick: ($event) => toggleExpanded(site.id)
							}, [createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("h4", _hoisted_15, toDisplayString(site.name), 1), createVNode(_component_el_icon, { class: normalizeClass(["transition-all duration-200", expanded.value.has(site.id) ? "rotate-90 text-blue-500" : "text-gray-400"]) }, {
								default: withCtx(() => [createVNode(unref(arrow_right_default))]),
								_: 1
							}, 8, ["class"])]), createBaseVNode("p", _hoisted_16, toDisplayString(site.pages.length) + " 种生效范围 · " + toDisplayString(site.links.length) + " 种可染色链接 ", 1)])], 8, _hoisted_12), createBaseVNode("div", {
								class: "flex items-center ml-4",
								onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
							}, [createVNode(_component_el_switch, {
								modelValue: preset.value[site.id],
								"onUpdate:modelValue": ($event) => preset.value[site.id] = $event
							}, null, 8, ["modelValue", "onUpdate:modelValue"])])])]), createVNode(_component_el_collapse_transition, null, {
								default: withCtx(() => [withDirectives(createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [createBaseVNode("div", null, [site.pages.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [
									_cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }, null, -1)),
									_cache[6] || (_cache[6] = createBaseVNode("span", { class: "font-medium text-gray-900 text-sm" }, "在下面这些页面中生效", -1)),
									createBaseVNode("span", _hoisted_21, toDisplayString(site.pages.length) + " 个 ", 1)
								]), createBaseVNode("div", _hoisted_22, [(openBlock(true), createElementBlock(Fragment, null, renderList(site.pages, (page, index) => {
									return openBlock(), createElementBlock("div", {
										key: index,
										class: "text-xs text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-md border border-gray-200 break-all hover:bg-gray-100 transition-colors"
									}, toDisplayString(page.source), 1);
								}), 128))])])) : createCommentVNode("", true), site.links.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [
									_cache[7] || (_cache[7] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-purple-500" }, null, -1)),
									_cache[8] || (_cache[8] = createBaseVNode("span", { class: "font-medium text-gray-900 text-sm" }, "对下面这些链接染色", -1)),
									createBaseVNode("span", _hoisted_25, toDisplayString(site.links.length) + " 个 ", 1)
								]), createBaseVNode("div", _hoisted_26, [(openBlock(true), createElementBlock(Fragment, null, renderList(site.links, (pattern, index) => {
									return openBlock(), createElementBlock("div", {
										key: index,
										class: "text-xs text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-md border border-gray-200 break-all hover:bg-gray-100 transition-colors"
									}, toDisplayString(pattern.source), 1);
								}), 128))])])) : createCommentVNode("", true)])])], 512), [[vShow, expanded.value.has(site.id)]])]),
								_: 2
							}, 1024)]);
						}), 128))])]);
					};
				}
			});
		}));
		var PresetTab_default;
		var init_PresetTab = __esmMin((() => {
			init_PresetTab_vue_vue_type_script_setup_true_lang();
			init_PresetTab_vue_vue_type_script_setup_true_lang();
			PresetTab_default = PresetTab_vue_vue_type_script_setup_true_lang_default;
		}));
		var init_el_alert$1 = __esmMin((() => {}));
		var init_el_alert = __esmMin((() => {
			init_el_alert$1();
			_css(".el-alert{--el-alert-padding:8px 16px;--el-alert-border-radius-base:var(--el-border-radius-base);--el-alert-title-font-size:14px;--el-alert-title-with-description-font-size:16px;--el-alert-description-font-size:14px;--el-alert-close-font-size:16px;--el-alert-close-customed-font-size:14px;--el-alert-icon-size:16px;--el-alert-icon-large-size:28px;width:100%;padding:var(--el-alert-padding);box-sizing:border-box;border-radius:var(--el-alert-border-radius-base);background-color:var(--el-color-white);opacity:1;transition:opacity var(--el-transition-duration-fast);align-items:center;margin:0;display:flex;position:relative;overflow:hidden}.el-alert.is-light .el-alert__close-btn{color:var(--el-text-color-placeholder)}.el-alert.is-dark .el-alert__close-btn,.el-alert.is-dark .el-alert__description{color:var(--el-color-white)}.el-alert.is-center{justify-content:center}.el-alert--primary{--el-alert-bg-color:var(--el-color-primary-light-9)}.el-alert--primary.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-primary)}.el-alert--primary.is-light .el-alert__description{color:var(--el-color-primary)}.el-alert--primary.is-dark{background-color:var(--el-color-primary);color:var(--el-color-white)}.el-alert--success{--el-alert-bg-color:var(--el-color-success-light-9)}.el-alert--success.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-success)}.el-alert--success.is-light .el-alert__description{color:var(--el-color-success)}.el-alert--success.is-dark{background-color:var(--el-color-success);color:var(--el-color-white)}.el-alert--info{--el-alert-bg-color:var(--el-color-info-light-9)}.el-alert--info.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-info)}.el-alert--info.is-light .el-alert__description{color:var(--el-color-info)}.el-alert--info.is-dark{background-color:var(--el-color-info);color:var(--el-color-white)}.el-alert--warning{--el-alert-bg-color:var(--el-color-warning-light-9)}.el-alert--warning.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-warning)}.el-alert--warning.is-light .el-alert__description{color:var(--el-color-warning)}.el-alert--warning.is-dark{background-color:var(--el-color-warning);color:var(--el-color-white)}.el-alert--error{--el-alert-bg-color:var(--el-color-error-light-9)}.el-alert--error.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-error)}.el-alert--error.is-light .el-alert__description{color:var(--el-color-error)}.el-alert--error.is-dark{background-color:var(--el-color-error);color:var(--el-color-white)}.el-alert__content{flex-direction:column;gap:4px;display:flex}.el-alert .el-alert__icon{font-size:var(--el-alert-icon-size);width:var(--el-alert-icon-size);margin-right:8px}.el-alert .el-alert__icon.is-big{font-size:var(--el-alert-icon-large-size);width:var(--el-alert-icon-large-size);margin-right:12px}.el-alert__title{font-size:var(--el-alert-title-font-size);line-height:24px}.el-alert__title.with-description{font-size:var(--el-alert-title-with-description-font-size)}.el-alert .el-alert__description{font-size:var(--el-alert-description-font-size);margin:0}.el-alert .el-alert__close-btn{font-size:var(--el-alert-close-font-size);opacity:1;cursor:pointer;position:absolute;top:12px;right:16px}.el-alert .el-alert__close-btn.is-customed{font-style:normal;font-size:var(--el-alert-close-customed-font-size);line-height:24px;top:8px}.el-alert-fade-enter-from,.el-alert-fade-leave-active{opacity:0}");
		}));
		var init_css$1 = __esmMin((() => {
			init_css$18();
			init_el_alert();
		}));
		var _hoisted_1$2;
		var ShortcutTab_vue_vue_type_script_setup_true_lang_default;
		var init_ShortcutTab_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_es();
			init_css$18();
			init_css$10();
			init_css$1();
			init_css$6();
			init_css$8();
			init_vue_runtime_esm_bundler();
			init_shortcut();
			_hoisted_1$2 = { class: "space-y-6" };
			ShortcutTab_vue_vue_type_script_setup_true_lang_default = defineComponent({
				__name: "ShortcutTab",
				props: mergeModels({
					recording: { type: Boolean },
					changed: { type: Boolean }
				}, {
					"modelValue": { required: true },
					"modelModifiers": {}
				}),
				emits: ["update:modelValue"],
				setup(__props) {
					const props = __props;
					const shortcut = useModel(__props, "modelValue");
					watchEffect((onCleanup) => {
						if (!props.recording) return;
						const record = (event) => {
							if (!isRecordable(event)) return;
							event.preventDefault();
							event.stopPropagation();
							shortcut.value = toShortcut(event);
						};
						document.addEventListener("keydown", record, true);
						onCleanup(() => document.removeEventListener("keydown", record, true));
					});
					return (_ctx, _cache) => {
						const _component_el_input = ElInput;
						const _component_el_form_item = ElFormItem;
						const _component_el_alert = ElAlert;
						const _component_el_form = ElForm;
						return openBlock(), createElementBlock("div", _hoisted_1$2, [_cache[0] || (_cache[0] = createBaseVNode("div", { class: "border-b pb-4" }, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "批量染色快捷键设置"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "按下快捷键，对当前页面上所有符合规则的链接进行染色")], -1)), createVNode(_component_el_form, {
							"label-width": "120px",
							class: "space-y-6"
						}, {
							default: withCtx(() => [createVNode(_component_el_form_item, { label: "当前快捷键" }, {
								default: withCtx(() => [createVNode(_component_el_input, {
									"model-value": unref(formatShortcut)(shortcut.value),
									readonly: "",
									size: "large",
									class: "font-mono"
								}, null, 8, ["model-value"])]),
								_: 1
							}), createVNode(_component_el_form_item, null, {
								default: withCtx(() => [createVNode(_component_el_alert, {
									title: __props.changed ? "已记录新快捷键，点击保存应用设置" : "请按下您想要使用的快捷键组合...",
									type: __props.changed ? "success" : "info",
									"show-icon": "",
									closable: false
								}, null, 8, ["title", "type"])]),
								_: 1
							})]),
							_: 1
						})]);
					};
				}
			});
		}));
		var ShortcutTab_default;
		var init_ShortcutTab = __esmMin((() => {
			init_ShortcutTab_vue_vue_type_script_setup_true_lang();
			init_ShortcutTab_vue_vue_type_script_setup_true_lang();
			ShortcutTab_default = ShortcutTab_vue_vue_type_script_setup_true_lang_default;
		}));
		var init_el_card$1 = __esmMin((() => {}));
		var init_el_card = __esmMin((() => {
			init_el_card$1();
			_css(".el-card{--el-card-border-color:var(--el-border-color-light);--el-card-border-radius:4px;--el-card-padding:20px;--el-card-bg-color:var(--el-fill-color-blank);border-radius:var(--el-card-border-radius);border:1px solid var(--el-card-border-color);background-color:var(--el-card-bg-color);color:var(--el-text-color-primary);transition:var(--el-transition-duration);flex-direction:column;display:flex;overflow:hidden}.el-card.is-always-shadow,.el-card.is-hover-shadow:hover,.el-card.is-hover-shadow:focus{box-shadow:var(--el-box-shadow-light)}.el-card__header{padding:calc(var(--el-card-padding) - 2px) var(--el-card-padding);border-bottom:1px solid var(--el-card-border-color);box-sizing:border-box}.el-card__body{padding:var(--el-card-padding);flex-grow:1;overflow:auto}.el-card__footer{padding:calc(var(--el-card-padding) - 2px) var(--el-card-padding);border-top:1px solid var(--el-card-border-color);box-sizing:border-box}");
		}));
		var init_css = __esmMin((() => {
			init_css$18();
			init_el_card();
		}));
		var _hoisted_1$1;
		var _hoisted_2$1;
		var _hoisted_3$1;
		var _hoisted_4$1;
		var _hoisted_5$1;
		var _hoisted_6$1;
		var _hoisted_7;
		var _hoisted_8;
		var _hoisted_9;
		var SyncTab_vue_vue_type_script_setup_true_lang_default;
		var init_SyncTab_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_es();
			init_css$18();
			init_css$15();
			init_css();
			init_css$8();
			init_css$9();
			init_vue_runtime_esm_bundler();
			init_storage();
			init_sync();
			init_notify();
			_hoisted_1$1 = { class: "space-y-6" };
			_hoisted_2$1 = { class: "space-y-4" };
			_hoisted_3$1 = { class: "flex items-center justify-between" };
			_hoisted_4$1 = { class: "text-sm space-y-2" };
			_hoisted_5$1 = { class: "flex justify-between" };
			_hoisted_6$1 = { class: "text-gray-900" };
			_hoisted_7 = { class: "flex justify-between" };
			_hoisted_8 = { class: "text-gray-900" };
			_hoisted_9 = { class: "flex justify-center pt-2" };
			SyncTab_vue_vue_type_script_setup_true_lang_default = defineComponent({
				__name: "SyncTab",
				props: mergeModels({ changed: { type: Boolean } }, {
					"modelValue": { required: true },
					"modelModifiers": {}
				}),
				emits: ["update:modelValue"],
				setup(__props) {
					const sync = useModel(__props, "modelValue");
					const autoSyncMinutes = AUTO_SYNC_INTERVAL / 6e4;
					const testingConnection = ref(false);
					const checkConnection = async () => {
						testingConnection.value = true;
						const { level, message } = await testConnection(sync.value.githubToken, sync.value.gistId);
						notify(message, level);
						testingConnection.value = false;
					};
					const syncing = ref(false);
					const syncNow = async () => {
						syncing.value = true;
						await runSync({ manual: true });
						syncing.value = false;
					};
					const lastSyncTime = ref(getLastSyncTime());
					onUnmounted(onLastSyncTimeChange((time) => {
						lastSyncTime.value = time;
					}));
					return (_ctx, _cache) => {
						const _component_el_switch = ElSwitch;
						const _component_el_input = ElInput;
						const _component_el_card = ElCard;
						const _component_el_button = ElButton;
						return openBlock(), createElementBlock("div", _hoisted_1$1, [_cache[14] || (_cache[14] = createBaseVNode("div", { class: "border-b pb-4" }, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "数据同步设置"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "通过 GitHub Gist 同步已访问链接数据，实现多设备同步")], -1)), createBaseVNode("div", _hoisted_2$1, [
							createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", null, [_cache[4] || (_cache[4] = createBaseVNode("label", { class: "text-sm font-medium text-gray-900" }, "启用数据同步", -1)), createBaseVNode("p", { class: "text-sm text-gray-500" }, "开启后加载页面时自动同步，" + toDisplayString(autoSyncMinutes) + " 分钟内最多一次")]), createVNode(_component_el_switch, {
								modelValue: sync.value.enabled,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sync.value.enabled = $event)
							}, null, 8, ["modelValue"])]),
							createBaseVNode("div", null, [
								_cache[5] || (_cache[5] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-900 mb-2" }, " GitHub 个人访问令牌 ", -1)),
								createVNode(_component_el_input, {
									modelValue: sync.value.githubToken,
									"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sync.value.githubToken = $event),
									type: "password",
									placeholder: "请输入 GitHub Personal Access Token",
									"show-password": "",
									disabled: !sync.value.enabled
								}, null, 8, ["modelValue", "disabled"]),
								_cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, " 需要创建具有 \"gist\" 权限的个人访问令牌 ", -1))
							]),
							createBaseVNode("div", null, [
								_cache[7] || (_cache[7] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-900 mb-2" }, " Gist ID ", -1)),
								createVNode(_component_el_input, {
									modelValue: sync.value.gistId,
									"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sync.value.gistId = $event),
									placeholder: "请输入 Gist ID，或直接粘贴 Gist 网址",
									disabled: !sync.value.enabled,
									onBlur: _cache[3] || (_cache[3] = ($event) => sync.value.gistId = unref(normalizeGistId)(sync.value.gistId))
								}, null, 8, ["modelValue", "disabled"]),
								_cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, " 新建一个 Gist，文件名和内容随意，首次同步时内容会被替换为同步数据 ", -1))
							]),
							createVNode(_component_el_card, {
								class: "bg-blue-50",
								shadow: "never"
							}, {
								header: withCtx(() => [..._cache[9] || (_cache[9] = [createBaseVNode("span", { class: "text-sm font-medium text-blue-800" }, "设置步骤", -1)])]),
								default: withCtx(() => [_cache[10] || (_cache[10] = createBaseVNode("ol", { class: "text-xs text-blue-700 space-y-1 list-decimal list-inside" }, [
									createBaseVNode("li", null, "到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建令牌，权限选择 \"gist\""),
									createBaseVNode("li", null, "新建一个专用的 Gist（文件名和内容随意，首次同步时会被替换为同步数据），复制网址中的 ID 部分，或直接粘贴整个网址"),
									createBaseVNode("li", null, "将令牌和 Gist ID 填入上方输入框")
								], -1))]),
								_: 1
							}),
							createVNode(_component_el_card, { shadow: "never" }, {
								header: withCtx(() => [..._cache[11] || (_cache[11] = [createBaseVNode("span", { class: "text-sm font-medium text-gray-800" }, "同步状态", -1)])]),
								default: withCtx(() => [createBaseVNode("div", _hoisted_4$1, [createBaseVNode("div", _hoisted_5$1, [_cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-gray-600" }, "当前 Gist ID:", -1)), createBaseVNode("span", _hoisted_6$1, toDisplayString(sync.value.gistId || "未设置"), 1)]), createBaseVNode("div", _hoisted_7, [_cache[13] || (_cache[13] = createBaseVNode("span", { class: "text-gray-600" }, "最后同步时间:", -1)), createBaseVNode("span", _hoisted_8, toDisplayString(lastSyncTime.value ? new Date(lastSyncTime.value).toLocaleString() : "从未同步"), 1)])])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_9, [createVNode(_component_el_button, {
								type: "primary",
								loading: testingConnection.value,
								disabled: !sync.value.enabled || !sync.value.githubToken,
								onClick: checkConnection
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(testingConnection.value ? "测试中..." : "测试连接"), 1)]),
								_: 1
							}, 8, ["loading", "disabled"]), createVNode(_component_el_button, {
								loading: syncing.value,
								disabled: !sync.value.enabled || __props.changed,
								onClick: syncNow
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(syncing.value ? "同步中..." : "立即同步"), 1)]),
								_: 1
							}, 8, ["loading", "disabled"])])
						])]);
					};
				}
			});
		}));
		var SyncTab_default;
		var init_SyncTab = __esmMin((() => {
			init_SyncTab_vue_vue_type_script_setup_true_lang();
			init_SyncTab_vue_vue_type_script_setup_true_lang();
			SyncTab_default = SyncTab_vue_vue_type_script_setup_true_lang_default;
		}));
		var _hoisted_1;
		var _hoisted_2;
		var _hoisted_3;
		var _hoisted_4;
		var _hoisted_5;
		var _hoisted_6;
		var SettingsDialog_vue_vue_type_script_setup_true_lang_default;
		var init_SettingsDialog_vue_vue_type_script_setup_true_lang = __esmMin((() => {
			init_es();
			init_css$18();
			init_css$13();
			init_css$15();
			init_css$12();
			init_css$11();
			init_vue_runtime_esm_bundler();
			init_settings();
			init_draft();
			init_GeneralTab();
			init_PresetTab();
			init_ShortcutTab();
			init_SyncTab();
			_hoisted_1 = { class: "h-[400px] overflow-y-auto" };
			_hoisted_2 = { class: "p-6 h-full overflow-y-auto" };
			_hoisted_3 = { class: "p-6 h-full overflow-y-auto" };
			_hoisted_4 = { class: "p-6 h-full overflow-y-auto" };
			_hoisted_5 = { class: "p-6 h-full overflow-y-auto" };
			_hoisted_6 = { class: "flex justify-end gap-3" };
			SettingsDialog_vue_vue_type_script_setup_true_lang_default = defineComponent({
				__name: "SettingsDialog",
				emits: ["closed"],
				setup(__props, { emit: __emit }) {
					const emit = __emit;
					const saved = shallowRef(getSettings());
					const draft = ref(toDraft(saved.value));
					const changes = computed(() => diffSettings(saved.value, draft.value));
					const tab = ref("general");
					const save = () => {
						saveSettings(changes.value);
						saved.value = getSettings();
						draft.value = toDraft(saved.value);
					};
					return (_ctx, _cache) => {
						const _component_el_tab_pane = ElTabPane;
						const _component_el_tabs = ElTabs;
						const _component_el_button = ElButton;
						const _component_el_dialog = ElDialog;
						return openBlock(), createBlock(_component_el_dialog, {
							"model-value": true,
							width: "900px",
							"close-on-click-modal": false,
							"close-on-press-escape": false,
							onClosed: _cache[6] || (_cache[6] = ($event) => emit("closed"))
						}, {
							header: withCtx(() => [..._cache[7] || (_cache[7] = [createBaseVNode("span", { class: "text-lg font-semibold" }, "设置", -1)])]),
							footer: withCtx(() => [createBaseVNode("div", _hoisted_6, [createVNode(_component_el_button, {
								onClick: _cache[5] || (_cache[5] = ($event) => unref(resetGroup)(draft.value, tab.value)),
								size: "large",
								plain: ""
							}, {
								default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" 重置为默认 ", -1)])]),
								_: 1
							}), createVNode(_component_el_button, {
								type: "primary",
								size: "large",
								onClick: save,
								disabled: Object.keys(changes.value).length === 0
							}, {
								default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode(" 保存设置 ", -1)])]),
								_: 1
							}, 8, ["disabled"])])]),
							default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(_component_el_tabs, {
								modelValue: tab.value,
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => tab.value = $event),
								"tab-position": "left",
								class: "h-full",
								stretch: ""
							}, {
								default: withCtx(() => [
									createVNode(_component_el_tab_pane, {
										label: "常规设置",
										name: "general",
										class: "h-full"
									}, {
										default: withCtx(() => [createBaseVNode("div", _hoisted_2, [createVNode(GeneralTab_default, {
											modelValue: draft.value.general,
											"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => draft.value.general = $event),
											"saved-expiration-time": saved.value.general.expirationTime
										}, null, 8, ["modelValue", "saved-expiration-time"])])]),
										_: 1
									}),
									createVNode(_component_el_tab_pane, {
										label: "预设网站",
										name: "preset",
										class: "h-full"
									}, {
										default: withCtx(() => [createBaseVNode("div", _hoisted_3, [createVNode(PresetTab_default, {
											modelValue: draft.value.preset,
											"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => draft.value.preset = $event)
										}, null, 8, ["modelValue"])])]),
										_: 1
									}),
									createVNode(_component_el_tab_pane, {
										label: "批量染色快捷键",
										name: "batch",
										class: "h-full"
									}, {
										default: withCtx(() => [createBaseVNode("div", _hoisted_4, [createVNode(ShortcutTab_default, {
											modelValue: draft.value.batch,
											"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => draft.value.batch = $event),
											recording: tab.value === "batch",
											changed: !!changes.value.batch
										}, null, 8, [
											"modelValue",
											"recording",
											"changed"
										])])]),
										_: 1
									}),
									createVNode(_component_el_tab_pane, {
										label: "数据同步",
										name: "sync",
										class: "h-full"
									}, {
										default: withCtx(() => [createBaseVNode("div", _hoisted_5, [createVNode(SyncTab_default, {
											modelValue: draft.value.sync,
											"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => draft.value.sync = $event),
											changed: !!changes.value.sync
										}, null, 8, ["modelValue", "changed"])])]),
										_: 1
									})
								]),
								_: 1
							}, 8, ["modelValue"])])]),
							_: 1
						});
					};
				}
			});
		}));
		var SettingsDialog_default;
		var init_SettingsDialog = __esmMin((() => {
			init_SettingsDialog_vue_vue_type_script_setup_true_lang();
			init_SettingsDialog_vue_vue_type_script_setup_true_lang();
			SettingsDialog_default = SettingsDialog_vue_vue_type_script_setup_true_lang_default;
		}));
		var dialog_exports = __exportAll({ openSettings: () => openSettings$1 });
		function openSettings$1() {
			if (isOpen) return;
			isOpen = true;
			const container = createMountPoint();
			const panelStyle = addPanelStyle();
			const app = createApp(SettingsDialog_default, { onClosed: () => {
				app.unmount();
				container.remove();
				panelStyle.remove();
				isOpen = false;
			} });
			app.mount(container);
		}
		var isOpen;
		var init_dialog = __esmMin((() => {
			init_vue_runtime_esm_bundler();
			init_SettingsDialog();
			init_root();
			isOpen = false;
		}));
		init_client();
		init_settings();
		init_storage();
		init_sync();
		function run(step) {
			try {
				step();
			} catch (error) {
				console.error("[color-visited] 启动失败", error);
			}
		}
		function openSettings() {
			Promise.resolve().then(() => (init_dialog(), dialog_exports)).then((dialog) => dialog.openSettings()).catch((error) => console.error("[color-visited] 打开设置失败", error));
		}
		run(() => _GM_registerMenuCommand("设置", openSettings));
		run(migrateLegacyLinks);
		run(() => deleteExpiredLinks(getSettings().general.expirationTime));
		run(autoSync);
		run(startPage);
	}))();
})();
