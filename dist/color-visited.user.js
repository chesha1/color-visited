// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      2.21.1
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
// @include      /^https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/
// @include      /^https:\/\/space\.bilibili\.com\/\d+\/video/
// @include      /^https:\/\/space\.bilibili\.com\/\d+\/upload.*/
// @include      /^https:\/\/www\.bilibili\.com\/video\/BV.*/
// @include      /^https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/
// @include      /^https:\/\/www\.bloomberg\.com\/?$/
// @include      /^https:\/\/www\.bloomberg\.com\/.*/
// @include      /^https:\/\/www\.economist\.com\/?$/
// @include      /^https:\/\/www\.economist\.com\/.*/
// @include      /^https:\/\/www\.chiphell\.com\/forum-.*/
// @include      /^https:\/\/www\.douban\.com\/group\/.*/
// @include      /^https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/
// @include      /^https:\/\/e-hentai\.org\/?$/
// @include      /^https:\/\/exhentai\.org\/?$/
// @include      /^https:\/\/e-hentai\.org\/toplist\.php\?tl=\d+/
// @include      /^https:\/\/exhentai\.org\/toplist\.php\?tl=\d+/
// @include      /^https:\/\/e-hentai\.org\/\?f_search=.*/
// @include      /^https:\/\/exhentai\.org\/\?f_search=.*/
// @include      /^https:\/\/e-hentai\.org\/popular/
// @include      /^https:\/\/exhentai\.org\/popular/
// @include      /^https:\/\/e-hentai\.org\/watched.*/
// @include      /^https:\/\/exhentai\.org\/watched.*/
// @include      /^https:\/\/e-hentai\.org\/tag\/.*/
// @include      /^https:\/\/exhentai\.org\/tag\/.*/
// @include      /^https:\/\/www\.hacg\.me\/wp\/$/
// @include      /^https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/
// @include      /^https:\/\/hanime1\.me\/$/
// @include      /^https:\/\/hanime1\.me\/search.*/
// @include      /^https:\/\/news\.ycombinator\.com\/.*/
// @include      /^https:\/\/news\.ycombinator\.com\/newest.*/
// @include      /^https:\/\/news\.ycombinator\.com\/front.*/
// @include      /^https:\/\/news\.ycombinator\.com\/show.*/
// @include      /^https:\/\/hostloc\.com\/forum-.*/
// @include      /^https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/
// @include      /^https:\/\/juejin\.cn\/(\?sort=.*)?$/
// @include      /^https:\/\/juejin\.cn\/(hot|following|backend|frontend|android|ios|ai|freebie|career|article).*/
// @include      /^https:\/\/linux\.do\/?$/
// @include      /^https:\/\/linux\.do\/(latest|new|top|hot|categories)/
// @include      /^https:\/\/linux\.do\/c\/.*/
// @include      /^https:\/\/www\.uscardforum\.com\/?$/
// @include      /^https:\/\/www\.uscardforum\.com\/c\/.*/
// @include      /^https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/
// @include      /^https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/
// @include      /^https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/
// @include      /^https:\/\/www\.nodeseek\.com\/?$/
// @include      /^https:\/\/www\.nodeseek\.com\/categories\/.*/
// @include      /^https:\/\/www\.nodeseek\.com\/page-\d+/
// @include      /^https:\/\/www\.pixiv\.net\/$/
// @include      /^https:\/\/www\.pixiv\.net\/illustration.*/
// @include      /^https:\/\/www\.pixiv\.net\/manga.*/
// @include      /^https:\/\/www\.pixiv\.net\/novel.*/
// @include      /^https:\/\/www\.pixiv\.net\/novel\/ranking\.php.*/
// @include      /^https:\/\/www\.pixiv\.net\/tags\/.*/
// @include      /^https:\/\/www\.pixiv\.net\/new_illust(_r18)?\.php.*/
// @include      /^https:\/\/www\.pixiv\.net\/bookmark_new_illust(_r18)?\.php.*/
// @include      /^https:\/\/www\.pixiv\.net\/following\/watchlist\/.*/
// @include      /^https:\/\/www\.pixiv\.net\/mypixiv_new_illust\.php.*/
// @include      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/model\/.*/
// @include      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/pornstar\/.*/
// @include      /^https:\/\/www\.reddit\.com\/r\/[^/]+\/?$/
// @include      /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/?)?([?#].*)?$/
// @include      /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/)?posts\/?([?#].*)?$/
// @include      /^https:\/\/seekingalpha\.com\/$/
// @include      /^https:\/\/seekingalpha\.com\/symbol\/.*/
// @include      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/
// @include      /^https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/
// @include      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/
// @include      /^https:\/\/www\.techflowpost\.com\/$/
// @include      /^https:\/\/tieba\.baidu\.com\/f\?[^#]*kw=.*/
// @include      /^https:\/\/tieba\.baidu\.com\/hottopic.*/
// @include      /^https:\/\/www\.txrjy\.com\/forum.*/
// @include      /^https:\/\/51cg1\.com\/?$/
// @include      /^https:\/\/51cg1\.com\/page\/\d+\/?$/
// @include      /^https:\/\/www\.v2ex\.com\/$/
// @include      /^https:\/\/www\.v2ex\.com\/\?tab.*/
// @include      /^https:\/\/www\.v2ex\.com\/go\/.*/
// @include      /^https:\/\/www\.1point3acres\.com\/?$/
// @include      /^https:\/\/www\.1point3acres\.com\/.*/
// @include      /^https:\/\/1point3acres\.com\/.*/
// @include      /^https:\/\/www\.zhihu\.com\/$/
// @include      /^https:\/\/www\.zhihu\.com\/hot$/
// @include      /^https:\/\/www\.zhihu\.com\/people\/.*/
// @require      https://cdn.jsdelivr.net/npm/systemjs@6.15.1/dist/system.min.js
// @require      https://cdn.jsdelivr.net/npm/systemjs@6.15.1/dist/extras/named-register.min.js
// @require      data:application/javascript,%3B(typeof%20System!%3D'undefined')%26%26(System%3Dnew%20System.constructor())%3B
// @connect      gist.githubusercontent.com
// @grant        GM_addStyle
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

System.register("./___monkey.entry.js", [],(function(exports,module){'use strict';return{execute:(function(){const s = new Set;
const _css = async (t) => {
  if (s.has(t)) return;
  s.add(t);
  ((c) => {
	if (typeof GM_addStyle === "function") GM_addStyle(c);
	else (document.head || document.documentElement).appendChild(document.createElement("style")).append(c);
})(t);
};/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
	const map = /* @__PURE__ */ Object.create(null);
	for (const key of str.split(",")) map[key] = 1;
	return (val) => val in map;
}
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var NOOP = () => {};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
	const i = arr.indexOf(el);
	if (i > -1) arr.splice(i, 1);
};
var hasOwnProperty$15 = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty$15.call(val, key);
var isArray$1 = Array.isArray;
var isMap$1 = (val) => toTypeString(val) === "[object Map]";
var isSet$1 = (val) => toTypeString(val) === "[object Set]";
var isDate = (val) => toTypeString(val) === "[object Date]";
var isFunction$1 = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isSymbol$1 = (val) => typeof val === "symbol";
var isObject$2 = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return (isObject$2(val) || isFunction$1(val)) && isFunction$1(val.then) && isFunction$1(val.catch);
};
var objectToString$1 = Object.prototype.toString;
var toTypeString = (value) => objectToString$1.call(value);
var toRawType = (value) => {
	return toTypeString(value).slice(8, -1);
};
var isPlainObject$2 = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var cacheStringFunction$1 = (fn) => {
	const cache = /* @__PURE__ */ Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
};
var camelizeRE$1 = /-\w/g;
var camelize$1 = cacheStringFunction$1((str) => {
	return str.replace(camelizeRE$1, (c) => c.slice(1).toUpperCase());
});
var hyphenateRE$1 = /\B([A-Z])/g;
var hyphenate$1 = cacheStringFunction$1((str) => str.replace(hyphenateRE$1, "-$1").toLowerCase());
var capitalize$1 = cacheStringFunction$1((str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = cacheStringFunction$1((str) => {
	return str ? `on${capitalize$1(str)}` : ``;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
	for (let i = 0; i < fns.length; i++) fns[i](...arg);
};
var def = (obj, key, value, writable = false) => {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: false,
		writable,
		value
	});
};
var looseToNumber$1 = (val) => {
	const n = parseFloat(val);
	return isNaN(n) ? val : n;
};
var toNumber$1 = (val) => {
	const n = isString(val) ? Number(val) : NaN;
	return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
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
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
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
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
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
	if (!seen) seen = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
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
var isRef$1 = (val) => {
	return !!(val && val["__v_isRef"] === true);
};
var toDisplayString = (val) => {
	return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject$2(val) && (val.toString === objectToString$1 || !isFunction$1(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
	if (isRef$1(val)) return replacer(_key, val.value);
	else if (isMap$1(val)) return { [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
		entries[stringifySymbol(key, i) + " =>"] = val2;
		return entries;
	}, {}) };
	else if (isSet$1(val)) return { [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v)) };
	else if (isSymbol$1(val)) return stringifySymbol(val);
	else if (isObject$2(val) && !isArray$1(val) && !isPlainObject$2(val)) return String(val);
	return val;
};
var stringifySymbol = (v, i = "") => {
	var _a;
	return isSymbol$1(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var activeEffectScope;
var EffectScope = class {
	constructor(detached = false) {
		this.detached = detached;
		/**
		* @internal
		*/
		this._active = true;
		/**
		* @internal track `on` calls, allow `on` call multiple times
		*/
		this._on = 0;
		/**
		* @internal
		*/
		this.effects = [];
		/**
		* @internal
		*/
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
	/**
	* Resumes the effect scope, including all child scopes and effects.
	*/
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
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	on() {
		if (++this._on === 1) {
			this.prevScope = activeEffectScope;
			activeEffectScope = this;
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
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
function getCurrentScope() {
	return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
	if (activeEffectScope) activeEffectScope.cleanups.push(fn);
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
	constructor(fn) {
		this.fn = fn;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 5;
		/**
		* @internal
		*/
		this.next = void 0;
		/**
		* @internal
		*/
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
	/**
	* @internal
	*/
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
	/**
	* @internal
	*/
	runIfDirty() {
		if (isDirty(this)) this.run();
	}
	get dirty() {
		return isDirty(this);
	}
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
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
var shouldTrack = true;
var trackStack = [];
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
var globalVersion = 0;
var Link = class {
	constructor(sub, dep) {
		this.sub = sub;
		this.dep = dep;
		this.version = dep.version;
		this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
};
var Dep = class {
	constructor(computed) {
		this.computed = computed;
		this.version = 0;
		/**
		* Link between this dep and the current active effect
		*/
		this.activeLink = void 0;
		/**
		* Doubly linked list representing the subscribing effects (tail)
		*/
		this.subs = void 0;
		/**
		* For object property deps cleanup
		*/
		this.map = void 0;
		this.key = void 0;
		/**
		* Subscriber counter
		*/
		this.sc = 0;
		/**
		* @internal
		*/
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
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol("");
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
function track(target, type, key) {
	if (shouldTrack && activeSub) {
		let depsMap = targetMap.get(target);
		if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
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
	const raw = /* @__PURE__ */ toRaw(array);
	if (raw === array) return raw;
	track(raw, "iterate", ARRAY_ITERATE_KEY);
	if (/* @__PURE__ */ isShallow(array)) return raw;
	if (!/* @__PURE__ */ isReadonly(array)) return raw.map(toReactive$1);
	return /* @__PURE__ */ isReactive(array) ? raw.map((item) => toReadonly(toReactive$1(item))) : raw.map(toReadonly);
}
function shallowReadArray(arr) {
	track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
	return arr;
}
function toWrapped(target, item) {
	if (/* @__PURE__ */ isReadonly(target)) return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive$1(item)) : toReadonly(item);
	return toReactive$1(item);
}
var arrayInstrumentations = {
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
function iterator(self, method, wrapValue) {
	const arr = shallowReadArray(self);
	const iter = arr[method]();
	if (arr !== self && !/* @__PURE__ */ isShallow(self)) {
		iter._next = iter.next;
		iter.next = () => {
			const result = iter._next();
			if (!result.done) result.value = wrapValue(result.value);
			return result;
		};
	}
	return iter;
}
var arrayProto = Array.prototype;
function apply$1(self, method, fn, thisArg, wrappedRetFn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
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
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
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
	const arr = /* @__PURE__ */ toRaw(self);
	track(arr, "iterate", ARRAY_ITERATE_KEY);
	const res = arr[method](...args);
	if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
		args[0] = /* @__PURE__ */ toRaw(args[0]);
		return arr[method](...args);
	}
	return res;
}
function noTracking(self, method, args = []) {
	pauseTracking();
	startBatch();
	const res = (/* @__PURE__ */ toRaw(self))[method].apply(self, args);
	endBatch();
	resetTracking();
	return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1));
function hasOwnProperty$14(key) {
	if (!isSymbol$1(key)) key = String(key);
	const obj = /* @__PURE__ */ toRaw(this);
	track(obj, "has", key);
	return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
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
		const res = Reflect.get(target, key, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
		if (!isReadonly2) track(target, "get", key);
		if (isShallow2) return res;
		if (/* @__PURE__ */ isRef(res)) {
			const value = targetIsArray && isIntegerKey(key) ? res : res.value;
			return isReadonly2 && isObject$2(value) ? /* @__PURE__ */ readonly(value) : value;
		}
		if (isObject$2(res)) return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
		return res;
	}
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(false, isShallow2);
	}
	set(target, key, value, receiver) {
		let oldValue = target[key];
		const isArrayWithIntegerKey = isArray$1(target) && isIntegerKey(key);
		if (!this._isShallow) {
			const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
			if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
				oldValue = /* @__PURE__ */ toRaw(oldValue);
				value = /* @__PURE__ */ toRaw(value);
			}
			if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
				if (isOldValueReadonly) return true;
				else {
					oldValue.value = value;
					return true;
				}
			}
		}
		const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
		const result = Reflect.set(target, key, value, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (target === /* @__PURE__ */ toRaw(receiver) && result) {
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value);
		}
		return result;
	}
	deleteProperty(target, key) {
		const hadKey = hasOwn(target, key);
		target[key];
		const result = Reflect.deleteProperty(target, key);
		if (result && hadKey) trigger(target, "delete", key, void 0);
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
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
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
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
	return function(...args) {
		const target = this["__v_raw"];
		const rawTarget = /* @__PURE__ */ toRaw(target);
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
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
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
			!readonly && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
			return target.size;
		},
		has(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
				track(rawTarget, "has", rawKey);
			}
			return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
		},
		forEach(callback, thisArg) {
			const observed = this;
			const target = observed["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
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
			const target = /* @__PURE__ */ toRaw(this);
			const proto = getProto(target);
			const rawValue = /* @__PURE__ */ toRaw(value);
			const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
			if (!(proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue))) {
				target.add(valueToAdd);
				trigger(target, "add", valueToAdd, valueToAdd);
			}
			return this;
		},
		set(key, value) {
			if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) value = /* @__PURE__ */ toRaw(value);
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			const oldValue = get.call(target, key);
			target.set(key, value);
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value);
			return this;
		},
		delete(key) {
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			get ? get.call(target, key) : void 0;
			const result = target.delete(key);
			if (hadKey) trigger(target, "delete", key, void 0);
			return result;
		},
		clear() {
			const target = /* @__PURE__ */ toRaw(this);
			const hadItems = target.size !== 0;
			const result = target.clear();
			if (hadItems) trigger(target, "clear", void 0, void 0);
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
var mutableCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, false) };
var shallowCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, true) };
var readonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, false) };
var shallowReadonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, true) };
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
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
// @__NO_SIDE_EFFECTS__
function reactive(target) {
	if (/* @__PURE__ */ isReadonly(target)) return target;
	return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
// @__NO_SIDE_EFFECTS__
function shallowReactive(target) {
	return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
// @__NO_SIDE_EFFECTS__
function readonly(target) {
	return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
// @__NO_SIDE_EFFECTS__
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
// @__NO_SIDE_EFFECTS__
function isReactive(value) {
	if (/* @__PURE__ */ isReadonly(value)) return /* @__PURE__ */ isReactive(value["__v_raw"]);
	return !!(value && value["__v_isReactive"]);
}
// @__NO_SIDE_EFFECTS__
function isReadonly(value) {
	return !!(value && value["__v_isReadonly"]);
}
// @__NO_SIDE_EFFECTS__
function isShallow(value) {
	return !!(value && value["__v_isShallow"]);
}
// @__NO_SIDE_EFFECTS__
function isProxy(value) {
	return value ? !!value["__v_raw"] : false;
}
// @__NO_SIDE_EFFECTS__
function toRaw(observed) {
	const raw = observed && observed["__v_raw"];
	return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
	if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
	return value;
}
var toReactive$1 = (value) => isObject$2(value) ? /* @__PURE__ */ reactive(value) : value;
var toReadonly = (value) => isObject$2(value) ? /* @__PURE__ */ readonly(value) : value;
// @__NO_SIDE_EFFECTS__
function isRef(r) {
	return r ? r["__v_isRef"] === true : false;
}
// @__NO_SIDE_EFFECTS__
function ref(value) {
	return createRef(value, false);
}
// @__NO_SIDE_EFFECTS__
function shallowRef(value) {
	return createRef(value, true);
}
function createRef(rawValue, shallow) {
	if (/* @__PURE__ */ isRef(rawValue)) return rawValue;
	return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
	constructor(value, isShallow2) {
		this.dep = new Dep();
		this["__v_isRef"] = true;
		this["__v_isShallow"] = false;
		this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
		this._value = isShallow2 ? value : toReactive$1(value);
		this["__v_isShallow"] = isShallow2;
	}
	get value() {
		this.dep.track();
		return this._value;
	}
	set value(newValue) {
		const oldValue = this._rawValue;
		const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
		newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
		if (hasChanged(newValue, oldValue)) {
			this._rawValue = newValue;
			this._value = useDirectValue ? newValue : toReactive$1(newValue);
			this.dep.trigger();
		}
	}
};
function triggerRef(ref2) {
	if (ref2.dep) ref2.dep.trigger();
}
function unref(ref2) {
	return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
	return isFunction$1(source) ? source() : unref(source);
}
var shallowUnwrapHandlers = {
	get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
	set: (target, key, value, receiver) => {
		const oldValue = target[key];
		if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
			oldValue.value = value;
			return true;
		} else return Reflect.set(target, key, value, receiver);
	}
};
function proxyRefs(objectWithRefs) {
	return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
// @__NO_SIDE_EFFECTS__
function toRefs(object) {
	const ret = isArray$1(object) ? new Array(object.length) : {};
	for (const key in object) ret[key] = propertyToRef(object, key);
	return ret;
}
var ObjectRefImpl = class {
	constructor(_object, key, _defaultValue) {
		this._object = _object;
		this._defaultValue = _defaultValue;
		this["__v_isRef"] = true;
		this._value = void 0;
		this._key = isSymbol$1(key) ? key : String(key);
		this._raw = /* @__PURE__ */ toRaw(_object);
		let shallow = true;
		let obj = _object;
		if (!isArray$1(_object) || isSymbol$1(this._key) || !isIntegerKey(this._key)) do
			shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
		while (shallow && (obj = obj["__v_raw"]));
		this._shallow = shallow;
	}
	get value() {
		let val = this._object[this._key];
		if (this._shallow) val = unref(val);
		return this._value = val === void 0 ? this._defaultValue : val;
	}
	set value(newVal) {
		if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
			const nestedRef = this._object[this._key];
			if (/* @__PURE__ */ isRef(nestedRef)) {
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
var GetterRefImpl = class {
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
// @__NO_SIDE_EFFECTS__
function toRef(source, key, defaultValue) {
	if (/* @__PURE__ */ isRef(source)) return source;
	else if (isFunction$1(source)) return new GetterRefImpl(source);
	else if (isObject$2(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
	else return /* @__PURE__ */ ref(source);
}
function propertyToRef(source, key, defaultValue) {
	return new ObjectRefImpl(source, key, defaultValue);
}
var ComputedRefImpl = class {
	constructor(fn, setter, isSSR) {
		this.fn = fn;
		this.setter = setter;
		/**
		* @internal
		*/
		this._value = void 0;
		/**
		* @internal
		*/
		this.dep = new Dep(this);
		/**
		* @internal
		*/
		this.__v_isRef = true;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 16;
		/**
		* @internal
		*/
		this.globalVersion = globalVersion - 1;
		/**
		* @internal
		*/
		this.next = void 0;
		this.effect = this;
		this["__v_isReadonly"] = !setter;
		this.isSSR = isSSR;
	}
	/**
	* @internal
	*/
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
// @__NO_SIDE_EFFECTS__
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
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
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
		if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
		return traverse(source2);
	};
	let effect;
	let getter;
	let cleanup;
	let boundCleanup;
	let forceTrigger = false;
	let isMultiSource = false;
	if (/* @__PURE__ */ isRef(source)) {
		getter = () => source.value;
		forceTrigger = /* @__PURE__ */ isShallow(source);
	} else if (/* @__PURE__ */ isReactive(source)) {
		getter = () => reactiveGetter(source);
		forceTrigger = true;
	} else if (isArray$1(source)) {
		isMultiSource = true;
		forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
		getter = () => source.map((s) => {
			if (/* @__PURE__ */ isRef(s)) return s.value;
			else if (/* @__PURE__ */ isReactive(s)) return reactiveGetter(s);
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
	seen = seen || /* @__PURE__ */ new Map();
	if ((seen.get(value) || 0) >= depth) return value;
	seen.set(value, depth);
	depth--;
	if (/* @__PURE__ */ isRef(value)) traverse(value.value, depth, seen);
	else if (isArray$1(value)) for (let i = 0; i < value.length; i++) traverse(value[i], depth, seen);
	else if (isSet$1(value) || isMap$1(value)) value.forEach((v) => {
		traverse(v, depth, seen);
	});
	else if (isPlainObject$2(value)) {
		for (const key in value) traverse(value[key], depth, seen);
		for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
	}
	return value;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
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
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
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
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
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
		flushPostFlushCbs();
		currentFlushPromise = null;
		if (queue.length || pendingPostFlushCbs.length) flushJobs();
	}
}
var currentRenderingInstance = null;
var currentScopeId = null;
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
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
	{
		const ctx = inject(ssrContextKey);
		return ctx;
	}
};
function watchEffect(effect, options) {
	return doWatch(effect, null, options);
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
var pendingMounts = /* @__PURE__ */ new WeakMap();
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select) => {
	const targetSelector = props && props.to;
	if (isString(targetSelector)) {
		if (!select) return null;
		else return select(targetSelector);
	} else return targetSelector;
};
var TeleportImpl = {
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
				if (parentComponent && parentComponent.isCE) (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
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
var Teleport = TeleportImpl;
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
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
var enterCbKey$1 = /* @__PURE__ */ Symbol("_enterCb");
function useTransitionState() {
	const state = {
		isMounted: false,
		isLeaving: false,
		isUnmounting: false,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	onMounted(() => {
		state.isMounted = true;
	});
	onBeforeUnmount(() => {
		state.isUnmounting = true;
	});
	return state;
}
var TransitionHookValidator = [Function, Array];
var BaseTransitionPropsValidators = {
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
var recursiveGetSubtree = (instance) => {
	const subTree = instance.subTree;
	return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
var BaseTransitionImpl = {
	name: `BaseTransition`,
	props: BaseTransitionPropsValidators,
	setup(props, { slots }) {
		const instance = getCurrentInstance();
		const state = useTransitionState();
		return () => {
			const children = slots.default && getTransitionRawChildren(slots.default(), true);
			const child = children && children.length ? findNonCommentChild(children) : instance.subTree ? createCommentVNode() : void 0;
			if (!child) return;
			const rawProps = /* @__PURE__ */ toRaw(props);
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
var BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
	const { leavingVNodes } = state;
	let leavingVNodesCache = leavingVNodes.get(vnode.type);
	if (!leavingVNodesCache) {
		leavingVNodesCache = /* @__PURE__ */ Object.create(null);
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
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
	return isFunction$1(options) ? /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))() : options;
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
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
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
	const rawSetupState = /* @__PURE__ */ toRaw(setupState);
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
		} else if (/* @__PURE__ */ isRef(oldRef)) {
			const oldRawRefAtom = oldRawRef;
			if (canSetRef(oldRef, oldRawRefAtom.k)) oldRef.value = null;
			if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
		}
	}
	if (isFunction$1(ref)) callWithErrorHandling(ref, owner, 12, [value, refs]);
	else {
		const _isString = isString(ref);
		const _isRef = /* @__PURE__ */ isRef(ref);
		if (_isString || _isRef) {
			const doSet = () => {
				if (rawRef.f) {
					const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef() || !rawRef.k ? ref.value : refs[rawRef.k];
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
getGlobalThis().requestIdleCallback;
getGlobalThis().cancelIdleCallback;
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
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
var createHook = (lifecycle) => (hook, target = currentInstance) => {
	if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
	injectHook("ec", hook, target);
}
var COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
	return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
	if (isString(component)) return resolveAsset(COMPONENTS, component, false) || component;
	else return component || NULL_DYNAMIC_COMPONENT;
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
	const instance = currentRenderingInstance || currentInstance;
	if (instance) {
		const Component = instance.type;
		{
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
	const cached = cache;
	const sourceIsArray = isArray$1(source);
	if (sourceIsArray || isString(source)) {
		const sourceIsReactiveArray = sourceIsArray && /* @__PURE__ */ isReactive(source);
		let needsWrap = false;
		let isReadonlySource = false;
		if (sourceIsReactiveArray) {
			needsWrap = !/* @__PURE__ */ isShallow(source);
			isReadonlySource = /* @__PURE__ */ isReadonly(source);
			source = shallowReadArray(source);
		}
		ret = new Array(source.length);
		for (let i = 0, l = source.length; i < l; i++) ret[i] = renderItem(needsWrap ? isReadonlySource ? toReadonly(toReactive$1(source[i])) : toReactive$1(source[i]) : source[i], i, void 0, cached);
	} else if (typeof source === "number") {
		ret = new Array(source);
		for (let i = 0; i < source; i++) ret[i] = renderItem(i + 1, i, void 0, cached);
	} else if (isObject$2(source)) {
		if (source[Symbol.iterator]) ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached));
		else {
			const keys = Object.keys(source);
			ret = new Array(keys.length);
			for (let i = 0, l = keys.length; i < l; i++) {
				const key = keys[i];
				ret[i] = renderItem(source[key], key, i, cached);
			}
		}
	} else ret = [];
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
		const slotProps = props;
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
	if (rendered.scopeId) rendered.slotScopeIds = [rendered.scopeId + "-s"];
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
	for (const key in obj) ret[toHandlerKey(key)] = obj[key];
	return ret;
}
var getPublicInstance = (i) => {
	if (!i) return null;
	if (isStatefulComponent(i)) return getComponentPublicInstance(i);
	return getPublicInstance(i.parent);
};
var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
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
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
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
function useSlots() {
	return getContext().slots;
}
function useAttrs$1() {
	return getContext().attrs;
}
function getContext(calledFunctionName) {
	const i = getCurrentInstance();
	return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
	return isArray$1(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
var shouldCacheAccess = true;
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
		if (!isObject$2(data)) ; else instance.data = /* @__PURE__ */ reactive(data);
	}
	shouldCacheAccess = true;
	if (computedOptions) for (const key in computedOptions) {
		const opt = computedOptions[key];
		const c = computed({
			get: isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP,
			set: !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : NOOP
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
		if (/* @__PURE__ */ isRef(injected)) Object.defineProperty(ctx, key, {
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
	for (const key in from) if (asMixin && key === "expose") ; else {
		const strat = internalOptionMergeStrats[key] || strats && strats[key];
		to[key] = strat ? strat(to[key], from[key]) : from[key];
	}
	return to;
}
var internalOptionMergeStrats = {
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
	return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
	if (to) {
		if (isArray$1(to) && isArray$1(from)) return [.../* @__PURE__ */ new Set([...to, ...from])];
		return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
	} else return from;
}
function mergeWatchOptions(to, from) {
	if (!to) return from;
	if (!from) return to;
	const merged = extend(/* @__PURE__ */ Object.create(null), to);
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
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var uid$1 = 0;
function createAppAPI(render, hydrate) {
	return function createApp(rootComponent, rootProps = null) {
		if (!isFunction$1(rootComponent)) rootComponent = extend({}, rootComponent);
		if (rootProps != null && !isObject$2(rootProps)) rootProps = null;
		const context = createAppContext();
		const installedPlugins = /* @__PURE__ */ new WeakSet();
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
				if (installedPlugins.has(plugin)) ; else if (plugin && isFunction$1(plugin.install)) {
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
					render(vnode, rootContainer, namespace);
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
var currentApp = null;
var getModelModifiers = (props, modelName) => {
	return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize$1(modelName)}Modifiers`] || props[`${hyphenate$1(modelName)}Modifiers`];
};
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
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
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
var getFunctionalFallthrough = (attrs) => {
	let res;
	for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
	return res;
};
var filterModelListeners = (attrs, props) => {
	const res = {};
	for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
	return res;
};
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
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
	const props = {};
	const attrs = createInternalObject();
	instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	setFullProps(instance, rawProps, props, attrs);
	for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
	if (isStateful) instance.props = isSSR ? props : /* @__PURE__ */ shallowReactive(props);
	else if (!instance.type.props) instance.props = attrs;
	else instance.props = props;
	instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
	const { props, attrs, vnode: { patchFlag } } = instance;
	const rawCurrentProps = /* @__PURE__ */ toRaw(props);
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
		const rawCurrentProps = /* @__PURE__ */ toRaw(props);
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
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
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
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot = (key, rawSlot, ctx) => {
	if (rawSlot._n) return rawSlot;
	const normalized = withCtx((...args) => {
		return normalizeSlotValue(rawSlot(...args));
	}, ctx);
	normalized._c = false;
	return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
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
var normalizeVNodeSlots = (instance, children) => {
	const normalized = normalizeSlotValue(children);
	instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
	for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
};
var initSlots = (instance, children, optimized) => {
	const slots = instance.slots = createInternalObject();
	if (instance.vnode.shapeFlag & 32) {
		const type = children._;
		if (type) {
			assignSlots(slots, children, optimized);
			if (optimized) def(slots, "_", type, true);
		} else normalizeObjectSlots(children, slots);
	} else if (children) normalizeVNodeSlots(instance, children);
};
var updateSlots = (instance, children, optimized) => {
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
var queuePostRenderEffect = queueEffectWithSuspense;
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
				{
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
			const keyToNewIndexMap = /* @__PURE__ */ new Map();
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
	return {
		render,
		hydrate,
		createApp: createAppAPI(render)
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
var isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
	if (suspense && suspense.pendingBranch) {
		if (isArray$1(fn)) suspense.effects.push(...fn);
		else suspense.effects.push(fn);
	} else queuePostFlushCb(fn);
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
	blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
	blockStack.pop();
	currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
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
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({ ref, ref_key, ref_for }) => {
	if (typeof ref === "number") ref = "" + ref;
	return ref != null ? isString(ref) || /* @__PURE__ */ isRef(ref) || isFunction$1(ref) ? {
		i: currentRenderingInstance,
		r: ref,
		k: ref_key,
		f: !!ref_for
	} : ref : null;
};
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
var createVNode = _createVNode;
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
			if (/* @__PURE__ */ isProxy(style) && !isArray$1(style)) style = extend({}, style);
			props.style = normalizeStyle(style);
		}
	}
	const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$2(type) ? 4 : isFunction$1(type) ? 2 : 0;
	return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
	if (!props) return null;
	return /* @__PURE__ */ isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
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
var emptyAppContext = createAppContext();
var uid = 0;
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
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
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
var setCurrentInstance = (instance) => {
	const prev = currentInstance;
	internalSetCurrentInstance(instance);
	instance.scope.on();
	return () => {
		instance.scope.off();
		internalSetCurrentInstance(prev);
	};
};
var unsetCurrentInstance = () => {
	currentInstance && currentInstance.scope.off();
	internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
	return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
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
	instance.accessCache = /* @__PURE__ */ Object.create(null);
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
		} else handleSetupResult(instance, setupResult);
	} else finishComponentSetup(instance);
}
function handleSetupResult(instance, setupResult, isSSR) {
	if (isFunction$1(setupResult)) {
		if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
		else instance.render = setupResult;
	} else if (isObject$2(setupResult)) instance.setupState = proxyRefs(setupResult);
	finishComponentSetup(instance);
}
function finishComponentSetup(instance, isSSR, skipOptions) {
	const Component = instance.type;
	if (!instance.render) instance.render = Component.render || NOOP;
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
var attrsProxyHandlers = { get(target, key) {
	track(target, "get", "");
	return target[key];
} };
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
var computed = (getterOrOptions, debugOptions) => {
	return /* @__PURE__ */ computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
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
var version = "3.5.43";
var warn = NOOP;
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var policy = void 0;
var tt$1 = typeof window !== "undefined" && window.trustedTypes;
if (tt$1) try {
	policy = /* @__PURE__ */ tt$1.createPolicy("vue", { createHTML: (val) => val });
} catch (e) {}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
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
var TRANSITION = "transition";
var ANIMATION = "animation";
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
var DOMTransitionPropsValidators = {
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
var TransitionPropsValidators = /* @__PURE__ */ extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
var decorate$1 = (t) => {
	t.displayName = "Transition";
	t.props = TransitionPropsValidators;
	return t;
};
var Transition = /* @__PURE__ */ decorate$1((props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots));
var callHook = (hook, args = []) => {
	if (isArray$1(hook)) hook.forEach((h2) => h2(...args));
	else if (hook) hook(...args);
};
var hasExplicitCallback = (hook) => {
	return hook ? isArray$1(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
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
	(el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
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
var endId = 0;
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
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var vShow = {
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
function setDisplay(el, value) {
	el.style.display = value ? el[vShowOriginalDisplay] : "none";
	el[vShowHidden] = !value;
}
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol("");
var displayRE = /(?:^|;)\s*display\s*:/;
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
var importantRE = /\s*!important$/;
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
var prefixes = [
	"Webkit",
	"Moz",
	"ms"
];
var prefixCache = {};
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
var xlinkNS = "http://www.w3.org/1999/xlink";
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
var veiKey = /* @__PURE__ */ Symbol("_vei");
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
var optionsModifierRE = /(Once|Passive|Capture)$/;
var optionsModifierEventRE = /^on:?(?:Once|Passive|Capture)$/;
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
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
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
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
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
var positionMap = /* @__PURE__ */ new WeakMap();
var newPositionMap = /* @__PURE__ */ new WeakMap();
var moveCbKey = /* @__PURE__ */ Symbol("_moveCb");
var enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
var decorate = (t) => {
	delete t.props.mode;
	return t;
};
var TransitionGroup = /* @__PURE__ */ decorate({
	name: "TransitionGroup",
	props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
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
			const rawProps = /* @__PURE__ */ toRaw(props);
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
var systemModifiers = [
	"ctrl",
	"shift",
	"alt",
	"meta"
];
var modifierGuards = {
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
var withModifiers = (fn, modifiers) => {
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
var keyNames = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
};
var withKeys = (fn, modifiers) => {
	const cache = fn._withKeys || (fn._withKeys = {});
	const cacheKey = modifiers.join(".");
	return cache[cacheKey] || (cache[cacheKey] = ((event) => {
		if (!("key" in event)) return;
		const eventKey = hyphenate$1(event.key);
		if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) return fn(event);
	}));
};
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
function ensureRenderer() {
	return renderer || (renderer = createRenderer(rendererOptions));
}
var render = ((...args) => {
	ensureRenderer().render(...args);
});
var createApp = ((...args) => {
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
function resolveRootNamespace(container) {
	if (container instanceof SVGElement) return "svg";
	if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function normalizeContainer(container) {
	if (isString(container)) return document.querySelector(container);
	return container;
}
var EVENT_CODE = {
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
var UPDATE_MODEL_EVENT = "update:modelValue";
var CHANGE_EVENT = "change";
var INPUT_EVENT = "input";
var componentSizes = [
	"",
	"default",
	"small",
	"large"
];
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function("return this")();
/** Built-in value references. */
var Symbol$1 = root.Symbol;
/** Used for built-in method references. */
var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$13 = objectProto$4.hasOwnProperty;
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString$1 = objectProto$4.toString;
/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
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
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString = Object.prototype.toString;
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
/** `Object#toString` result references. */
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
/** `Object#toString` result references. */
var symbolTag$3 = "[object Symbol]";
/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
/**
* A specialized version of `_.map` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
*/
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
/**
* Checks if `value` is classified as an `Array` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array, else `false`.
* @example
*
* _.isArray([1, 2, 3]);
* // => true
*
* _.isArray(document.body.children);
* // => false
*
* _.isArray('abc');
* // => false
*
* _.isArray(_.noop);
* // => false
*/
var isArray = Array.isArray;
/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
/**
* The base implementation of `_.toString` which doesn't convert nullish
* values to empty strings.
*
* @private
* @param {*} value The value to process.
* @returns {string} Returns the string.
*/
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray(value)) return arrayMap(value, baseToString) + "";
	if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;
/**
* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
* character of `string`.
*
* @private
* @param {string} string The string to inspect.
* @returns {number} Returns the index of the last non-whitespace character.
*/
function trimmedEndIndex(string) {
	var index = string.length;
	while (index-- && reWhitespace.test(string.charAt(index)));
	return index;
}
/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;
/**
* The base implementation of `_.trim`.
*
* @private
* @param {string} string The string to trim.
* @returns {string} Returns the trimmed string.
*/
function baseTrim(string) {
	return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject$1(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
/** Used as references for various `Number` constants. */
var NAN = NaN;
/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;
/**
* Converts `value` to a number.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to process.
* @returns {number} Returns the number.
* @example
*
* _.toNumber(3.2);
* // => 3.2
*
* _.toNumber(Number.MIN_VALUE);
* // => 5e-324
*
* _.toNumber(Infinity);
* // => Infinity
*
* _.toNumber('3.2');
* // => 3.2
*/
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
/**
* This method returns the first argument it receives.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Util
* @param {*} value Any value.
* @returns {*} Returns `value`.
* @example
*
* var object = { 'a': 1 };
*
* console.log(_.identity(object) === object);
* // => true
*/
function identity(value) {
	return value;
}
/** `Object#toString` result references. */
var asyncTag = "[object AsyncFunction]";
var funcTag$2 = "[object Function]";
var genTag$1 = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction(value) {
	if (!isObject$1(value)) return false;
	var tag = baseGetTag(value);
	return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
/** Used to detect overreaching core-js shims. */
var coreJsData = root["__core-js_shared__"];
/** Used to detect methods masquerading as native. */
var maskSrcKey = function() {
	var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
	return uid ? "Symbol(src)_1." + uid : "";
}();
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
/** Used to resolve the decompiled source of functions. */
var funcToString$2 = Function.prototype.toString;
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
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
/**
* Used to match `RegExp`
* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
*/
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
var objectProto$3 = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$3.hasOwnProperty;
/** Used to detect if a method is native. */
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$12).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject$1(value) || isMasked(value)) return false;
	return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
}
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue$1(object, key) {
	return object == null ? void 0 : object[key];
}
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = getValue$1(object, key);
	return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
/** Built-in value references. */
var objectCreate = Object.create;
/**
* The base implementation of `_.create` without support for assigning
* properties to the created object.
*
* @private
* @param {Object} proto The object to inherit from.
* @returns {Object} Returns the new object.
*/
var baseCreate = function() {
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
/**
* A faster alternative to `Function#apply`, this function invokes `func`
* with the `this` binding of `thisArg` and the arguments of `args`.
*
* @private
* @param {Function} func The function to invoke.
* @param {*} thisArg The `this` binding of `func`.
* @param {Array} args The arguments to invoke `func` with.
* @returns {*} Returns the result of `func`.
*/
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
/**
* Copies the values of `source` to `array`.
*
* @private
* @param {Array} source The array to copy values from.
* @param {Array} [array=[]] The array to copy values to.
* @returns {Array} Returns `array`.
*/
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
/**
* Creates a function that'll short out and invoke `identity` instead
* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
* milliseconds.
*
* @private
* @param {Function} func The function to restrict.
* @returns {Function} Returns the new shortable function.
*/
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
/**
* Creates a function that returns `value`.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {*} value The value to return from the new function.
* @returns {Function} Returns the new constant function.
* @example
*
* var objects = _.times(2, _.constant({ 'a': 1 }));
*
* console.log(objects);
* // => [{ 'a': 1 }, { 'a': 1 }]
*
* console.log(objects[0] === objects[1]);
* // => true
*/
function constant(value) {
	return function() {
		return value;
	};
}
var defineProperty = function() {
	try {
		var func = getNative(Object, "defineProperty");
		func({}, "", {});
		return func;
	} catch (e) {}
}();
/**
* Sets the `toString` method of `func` to return `string`.
*
* @private
* @param {Function} func The function to modify.
* @param {Function} string The `toString` result.
* @returns {Function} Returns `func`.
*/
var setToString = shortOut(!defineProperty ? identity : function(func, string) {
	return defineProperty(func, "toString", {
		"configurable": true,
		"enumerable": false,
		"value": constant(string),
		"writable": true
	});
});
/**
* A specialized version of `_.forEach` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns `array`.
*/
function arrayEach(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (iteratee(array[index], index, array) === false) break;
	return array;
}
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
* Checks if `value` is a valid array-like index.
*
* @private
* @param {*} value The value to check.
* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
*/
function isIndex(value, length) {
	var type = typeof value;
	length = length == null ? MAX_SAFE_INTEGER$1 : length;
	return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
* The base implementation of `assignValue` and `assignMergeValue` without
* value checks.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && defineProperty) defineProperty(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
/**
* Performs a
* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* comparison between two values to determine if they are equivalent.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.eq(object, object);
* // => true
*
* _.eq(object, other);
* // => false
*
* _.eq('a', 'a');
* // => true
*
* _.eq('a', Object('a'));
* // => false
*
* _.eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
/** Used to check objects for own properties. */
var hasOwnProperty$11 = Object.prototype.hasOwnProperty;
/**
* Assigns `value` to `key` of `object` if the existing value is not equivalent
* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* for equality comparisons.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$11.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
}
/**
* Copies properties of `source` to `object`.
*
* @private
* @param {Object} source The object to copy properties from.
* @param {Array} props The property identifiers to copy.
* @param {Object} [object={}] The object to copy properties to.
* @param {Function} [customizer] The function to customize copied values.
* @returns {Object} Returns `object`.
*/
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) baseAssignValue(object, key, newValue);
		else assignValue(object, key, newValue);
	}
	return object;
}
var nativeMax$1 = Math.max;
/**
* A specialized version of `baseRest` which transforms the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @param {Function} transform The rest array transform.
* @returns {Function} Returns the new function.
*/
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
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
	return value != null && isLength(value.length) && !isFunction(value);
}
/** Used for built-in method references. */
var objectProto$2 = Object.prototype;
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
}
/**
* The base implementation of `_.times` without support for iteratee shorthands
* or max array length checks.
*
* @private
* @param {number} n The number of times to invoke `iteratee`.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the array of results.
*/
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
/** `Object#toString` result references. */
var argsTag$3 = "[object Arguments]";
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$1.hasOwnProperty;
/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;
/**
* Checks if `value` is likely an `arguments` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*  else `false`.
* @example
*
* _.isArguments(function() { return arguments; }());
* // => true
*
* _.isArguments([1, 2, 3]);
* // => false
*/
var isArguments = baseIsArguments(function() {
	return arguments;
}()) ? baseIsArguments : function(value) {
	return isObjectLike(value) && hasOwnProperty$10.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer$1 = freeModule$2 && freeModule$2.exports === freeExports$2 ? root.Buffer : void 0;
/**
* Checks if `value` is a buffer.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
* @example
*
* _.isBuffer(new Buffer(2));
* // => true
*
* _.isBuffer(new Uint8Array(2));
* // => false
*/
var isBuffer = (Buffer$1 ? Buffer$1.isBuffer : void 0) || stubFalse;
/** `Object#toString` result references. */
var argsTag$2 = "[object Arguments]";
var arrayTag$2 = "[object Array]";
var boolTag$3 = "[object Boolean]";
var dateTag$3 = "[object Date]";
var errorTag$2 = "[object Error]";
var funcTag$1 = "[object Function]";
var mapTag$5 = "[object Map]";
var numberTag$3 = "[object Number]";
var objectTag$4 = "[object Object]";
var regexpTag$3 = "[object RegExp]";
var setTag$5 = "[object Set]";
var stringTag$3 = "[object String]";
var weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]";
var dataViewTag$4 = "[object DataView]";
var float32Tag$2 = "[object Float32Array]";
var float64Tag$2 = "[object Float64Array]";
var int8Tag$2 = "[object Int8Array]";
var int16Tag$2 = "[object Int16Array]";
var int32Tag$2 = "[object Int32Array]";
var uint8Tag$2 = "[object Uint8Array]";
var uint8ClampedTag$2 = "[object Uint8ClampedArray]";
var uint16Tag$2 = "[object Uint16Array]";
var uint32Tag$2 = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
/** Detect free variable `process` from Node.js. */
var freeProcess = freeModule$1 && freeModule$1.exports === freeExports$1 && freeGlobal.process;
/** Used to access faster Node.js helpers. */
var nodeUtil = function() {
	try {
		var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
		if (types) return types;
		return freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch (e) {}
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
* Checks if `value` is classified as a typed array.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
* @example
*
* _.isTypedArray(new Uint8Array);
* // => true
*
* _.isTypedArray([]);
* // => false
*/
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/** Used to check objects for own properties. */
var hasOwnProperty$9 = Object.prototype.hasOwnProperty;
/**
* Creates an array of the enumerable property names of the array-like `value`.
*
* @private
* @param {*} value The value to query.
* @param {boolean} inherited Specify returning inherited property names.
* @returns {Array} Returns the array of property names.
*/
function arrayLikeKeys(value, inherited) {
	var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$9.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
	return result;
}
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
var nativeKeys = overArg(Object.keys, Object);
/** Used to check objects for own properties. */
var hasOwnProperty$8 = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
	if (!isPrototype(object)) return nativeKeys(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty$8.call(object, key) && key != "constructor") result.push(key);
	return result;
}
/**
* Creates an array of the own enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects. See the
* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* for more details.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keys(new Foo);
* // => ['a', 'b'] (iteration order is not guaranteed)
*
* _.keys('hi');
* // => ['0', '1']
*/
function keys(object) {
	return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
* This function is like
* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* except that it includes inherited enumerable properties.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
/** Used to check objects for own properties. */
var hasOwnProperty$7 = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeysIn(object) {
	if (!isObject$1(object)) return nativeKeysIn(object);
	var isProto = isPrototype(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$7.call(object, key)))) result.push(key);
	return result;
}
/**
* Creates an array of the own and inherited enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keysIn(new Foo);
* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
*/
function keysIn(object) {
	return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
/**
* Checks if `value` is a property name and not a property path.
*
* @private
* @param {*} value The value to check.
* @param {Object} [object] The object to query keys on.
* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
*/
function isKey(value, object) {
	if (isArray(value)) return false;
	var type = typeof value;
	if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
	return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
/**
* Removes all key-value entries from the hash.
*
* @private
* @name clear
* @memberOf Hash
*/
function hashClear() {
	this.__data__ = nativeCreate ? nativeCreate(null) : {};
	this.size = 0;
}
/**
* Removes `key` and its value from the hash.
*
* @private
* @name delete
* @memberOf Hash
* @param {Object} hash The hash to modify.
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
/** Used to check objects for own properties. */
var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
/**
* Gets the hash value for `key`.
*
* @private
* @name get
* @memberOf Hash
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function hashGet(key) {
	var data = this.__data__;
	if (nativeCreate) {
		var result = data[key];
		return result === HASH_UNDEFINED$2 ? void 0 : result;
	}
	return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
/** Used to check objects for own properties. */
var hasOwnProperty$5 = Object.prototype.hasOwnProperty;
/**
* Checks if a hash value for `key` exists.
*
* @private
* @name has
* @memberOf Hash
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function hashHas(key) {
	var data = this.__data__;
	return nativeCreate ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
/**
* Sets the hash `key` to `value`.
*
* @private
* @name set
* @memberOf Hash
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the hash instance.
*/
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
	return this;
}
/**
* Creates a hash object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
* Removes all key-value entries from the list cache.
*
* @private
* @name clear
* @memberOf ListCache
*/
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
/**
* Gets the index at which the `key` is found in `array` of key-value pairs.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} key The key to search for.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq(array[length][0], key)) return length;
	return -1;
}
/** Built-in value references. */
var splice = Array.prototype.splice;
/**
* Removes `key` and its value from the list cache.
*
* @private
* @name delete
* @memberOf ListCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function listCacheDelete(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
/**
* Gets the list cache value for `key`.
*
* @private
* @name get
* @memberOf ListCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function listCacheGet(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	return index < 0 ? void 0 : data[index][1];
}
/**
* Checks if a list cache value for `key` exists.
*
* @private
* @name has
* @memberOf ListCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function listCacheHas(key) {
	return assocIndexOf(this.__data__, key) > -1;
}
/**
* Sets the list cache `key` to `value`.
*
* @private
* @name set
* @memberOf ListCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the list cache instance.
*/
function listCacheSet(key, value) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
/**
* Creates an list cache object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
/**
* Removes all key-value entries from the map.
*
* @private
* @name clear
* @memberOf MapCache
*/
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new Hash(),
		"map": new (Map$1 || ListCache)(),
		"string": new Hash()
	};
}
/**
* Checks if `value` is suitable for use as unique object key.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
*/
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
* Gets the data for `map`.
*
* @private
* @param {Object} map The map to query.
* @param {string} key The reference key.
* @returns {*} Returns the map data.
*/
function getMapData(map, key) {
	var data = map.__data__;
	return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
* Removes `key` and its value from the map.
*
* @private
* @name delete
* @memberOf MapCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function mapCacheDelete(key) {
	var result = getMapData(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
/**
* Gets the map value for `key`.
*
* @private
* @name get
* @memberOf MapCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function mapCacheGet(key) {
	return getMapData(this, key).get(key);
}
/**
* Checks if a map value for `key` exists.
*
* @private
* @name has
* @memberOf MapCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function mapCacheHas(key) {
	return getMapData(this, key).has(key);
}
/**
* Sets the map `key` to `value`.
*
* @private
* @name set
* @memberOf MapCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the map cache instance.
*/
function mapCacheSet(key, value) {
	var data = getMapData(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
/**
* Creates a map cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/** Error message constants. */
var FUNC_ERROR_TEXT$1 = "Expected a function";
/**
* Creates a function that memoizes the result of `func`. If `resolver` is
* provided, it determines the cache key for storing the result based on the
* arguments provided to the memoized function. By default, the first argument
* provided to the memoized function is used as the map cache key. The `func`
* is invoked with the `this` binding of the memoized function.
*
* **Note:** The cache is exposed as the `cache` property on the memoized
* function. Its creation may be customized by replacing the `_.memoize.Cache`
* constructor with one whose instances implement the
* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
* method interface of `clear`, `delete`, `get`, `has`, and `set`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to have its output memoized.
* @param {Function} [resolver] The function to resolve the cache key.
* @returns {Function} Returns the new memoized function.
* @example
*
* var object = { 'a': 1, 'b': 2 };
* var other = { 'c': 3, 'd': 4 };
*
* var values = _.memoize(_.values);
* values(object);
* // => [1, 2]
*
* values(other);
* // => [3, 4]
*
* object.a = 2;
* values(object);
* // => [1, 2]
*
* // Modify the result cache.
* values.cache.set(object, ['a', 'b']);
* values(object);
* // => ['a', 'b']
*
* // Replace `_.memoize.Cache`.
* _.memoize.Cache = WeakMap;
*/
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
memoize.Cache = MapCache;
/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;
/**
* A specialized version of `_.memoize` which clears the memoized function's
* cache when it exceeds `MAX_MEMOIZE_SIZE`.
*
* @private
* @param {Function} func The function to have its output memoized.
* @returns {Function} Returns the new memoized function.
*/
function memoizeCapped(func) {
	var result = memoize(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;
/**
* Converts `string` to a property path array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the property path array.
*/
var stringToPath = memoizeCapped(function(string) {
	var result = [];
	if (string.charCodeAt(0) === 46) result.push("");
	string.replace(rePropName, function(match, number, quote, subString) {
		result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
	});
	return result;
});
/**
* Converts `value` to a string. An empty string is returned for `null`
* and `undefined` values. The sign of `-0` is preserved.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.toString(null);
* // => ''
*
* _.toString(-0);
* // => '-0'
*
* _.toString([1, 2, 3]);
* // => '1,2,3'
*/
function toString$1(value) {
	return value == null ? "" : baseToString(value);
}
/**
* Casts `value` to a path array if it's not one.
*
* @private
* @param {*} value The value to inspect.
* @param {Object} [object] The object to query keys on.
* @returns {Array} Returns the cast property path array.
*/
function castPath(value, object) {
	if (isArray(value)) return value;
	return isKey(value, object) ? [value] : stringToPath(toString$1(value));
}
/**
* Converts `value` to a string key if it's not a string or symbol.
*
* @private
* @param {*} value The value to inspect.
* @returns {string|symbol} Returns the key.
*/
function toKey(value) {
	if (typeof value == "string" || isSymbol(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
/**
* The base implementation of `_.get` without support for default values.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @returns {*} Returns the resolved value.
*/
function baseGet(object, path) {
	path = castPath(path, object);
	var index = 0, length = path.length;
	while (object != null && index < length) object = object[toKey(path[index++])];
	return index && index == length ? object : void 0;
}
/**
* Gets the value at `path` of `object`. If the resolved value is
* `undefined`, the `defaultValue` is returned in its place.
*
* @static
* @memberOf _
* @since 3.7.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @param {*} [defaultValue] The value returned for `undefined` resolved values.
* @returns {*} Returns the resolved value.
* @example
*
* var object = { 'a': [{ 'b': { 'c': 3 } }] };
*
* _.get(object, 'a[0].b.c');
* // => 3
*
* _.get(object, ['a', '0', 'b', 'c']);
* // => 3
*
* _.get(object, 'a.b.c', 'default');
* // => 'default'
*/
function get(object, path, defaultValue) {
	var result = object == null ? void 0 : baseGet(object, path);
	return result === void 0 ? defaultValue : result;
}
/**
* Appends the elements of `values` to `array`.
*
* @private
* @param {Array} array The array to modify.
* @param {Array} values The values to append.
* @returns {Array} Returns `array`.
*/
function arrayPush(array, values) {
	var index = -1, length = values.length, offset = array.length;
	while (++index < length) array[offset + index] = values[index];
	return array;
}
/** Built-in value references. */
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
/**
* Checks if `value` is a flattenable `arguments` object or array.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
*/
function isFlattenable(value) {
	return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/**
* The base implementation of `_.flatten` with support for restricting flattening.
*
* @private
* @param {Array} array The array to flatten.
* @param {number} depth The maximum recursion depth.
* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
* @param {Array} [result=[]] The initial result value.
* @returns {Array} Returns the new flattened array.
*/
function baseFlatten(array, depth, predicate, isStrict, result) {
	var index = -1, length = array.length;
	predicate || (predicate = isFlattenable);
	result || (result = []);
	while (++index < length) {
		var value = array[index];
		if (predicate(value)) {
			arrayPush(result, value);
		} else result[result.length] = value;
	}
	return result;
}
/**
* Flattens `array` a single level deep.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Array
* @param {Array} array The array to flatten.
* @returns {Array} Returns the new flattened array.
* @example
*
* _.flatten([1, [2, [3, [4]], 5]]);
* // => [1, 2, [3, [4]], 5]
*/
function flatten(array) {
	return (array == null ? 0 : array.length) ? baseFlatten(array) : [];
}
/**
* A specialized version of `baseRest` which flattens the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @returns {Function} Returns the new function.
*/
function flatRest(func) {
	return setToString(overRest(func, void 0, flatten), func + "");
}
/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);
/** `Object#toString` result references. */
var objectTag$3 = "[object Object]";
/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject$1(value) {
	if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) return false;
	var proto = getPrototype(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty$4.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/**
* The base implementation of `_.slice` without an iteratee call guard.
*
* @private
* @param {Array} array The array to slice.
* @param {number} [start=0] The start position.
* @param {number} [end=array.length] The end position.
* @returns {Array} Returns the slice of `array`.
*/
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
/**
* Casts `value` as an array if it's not one.
*
* @static
* @memberOf _
* @since 4.4.0
* @category Lang
* @param {*} value The value to inspect.
* @returns {Array} Returns the cast array.
* @example
*
* _.castArray(1);
* // => [1]
*
* _.castArray({ 'a': 1 });
* // => [{ 'a': 1 }]
*
* _.castArray('abc');
* // => ['abc']
*
* _.castArray(null);
* // => [null]
*
* _.castArray(undefined);
* // => [undefined]
*
* _.castArray();
* // => []
*
* var array = [1, 2, 3];
* console.log(_.castArray(array) === array);
* // => true
*/
function castArray$1() {
	if (!arguments.length) return [];
	var value = arguments[0];
	return isArray(value) ? value : [value];
}
/**
* The base implementation of `_.clamp` which doesn't coerce arguments.
*
* @private
* @param {number} number The number to clamp.
* @param {number} [lower] The lower bound.
* @param {number} upper The upper bound.
* @returns {number} Returns the clamped number.
*/
function baseClamp(number, lower, upper) {
	if (number === number) {
		if (upper !== void 0) number = number <= upper ? number : upper;
		if (lower !== void 0) number = number >= lower ? number : lower;
	}
	return number;
}
/**
* Clamps `number` within the inclusive `lower` and `upper` bounds.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Number
* @param {number} number The number to clamp.
* @param {number} [lower] The lower bound.
* @param {number} upper The upper bound.
* @returns {number} Returns the clamped number.
* @example
*
* _.clamp(-10, -5, 5);
* // => -5
*
* _.clamp(10, -5, 5);
* // => 5
*/
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
/**
* Removes all key-value entries from the stack.
*
* @private
* @name clear
* @memberOf Stack
*/
function stackClear() {
	this.__data__ = new ListCache();
	this.size = 0;
}
/**
* Removes `key` and its value from the stack.
*
* @private
* @name delete
* @memberOf Stack
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
/**
* Gets the stack value for `key`.
*
* @private
* @name get
* @memberOf Stack
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function stackGet(key) {
	return this.__data__.get(key);
}
/**
* Checks if a stack value for `key` exists.
*
* @private
* @name has
* @memberOf Stack
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function stackHas(key) {
	return this.__data__.has(key);
}
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/**
* Sets the stack `key` to `value`.
*
* @private
* @name set
* @memberOf Stack
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the stack cache instance.
*/
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
/**
* Creates a stack cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Stack(entries) {
	var data = this.__data__ = new ListCache(entries);
	this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
* The base implementation of `_.assign` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssign(object, source) {
	return object && copyObject(source, keys(source), object);
}
/**
* The base implementation of `_.assignIn` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssignIn(object, source) {
	return object && copyObject(source, keysIn(source), object);
}
/** Detect free variable `exports`. */
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
/**
* Creates a clone of  `buffer`.
*
* @private
* @param {Buffer} buffer The buffer to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Buffer} Returns the cloned buffer.
*/
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
/**
* A specialized version of `_.filter` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
*/
function arrayFilter(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) result[resIndex++] = value;
	}
	return result;
}
/**
* This method returns a new empty array.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {Array} Returns the new empty array.
* @example
*
* var arrays = _.times(2, _.stubArray);
*
* console.log(arrays);
* // => [[], []]
*
* console.log(arrays[0] === arrays[1]);
* // => false
*/
function stubArray() {
	return [];
}
/** Built-in value references. */
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
* Creates an array of the own enumerable symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of symbols.
*/
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	if (object == null) return [];
	object = Object(object);
	return arrayFilter(nativeGetSymbols(object), function(symbol) {
		return propertyIsEnumerable.call(object, symbol);
	});
};
/**
* Copies own symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbols(source, object) {
	return copyObject(source, getSymbols(source), object);
}
/**
* Creates an array of the own and inherited enumerable symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of symbols.
*/
var getSymbolsIn = !Object.getOwnPropertySymbols ? stubArray : function(object) {
	var result = [];
	while (object) {
		arrayPush(result, getSymbols(object));
		object = getPrototype(object);
	}
	return result;
};
/**
* Copies own and inherited symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbolsIn(source, object) {
	return copyObject(source, getSymbolsIn(source), object);
}
/**
* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
* `keysFunc` and `symbolsFunc` to get the enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Function} keysFunc The function to get the keys of `object`.
* @param {Function} symbolsFunc The function to get the symbols of `object`.
* @returns {Array} Returns the array of property names and symbols.
*/
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	var result = keysFunc(object);
	return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
* Creates an array of own enumerable property names and symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeys(object) {
	return baseGetAllKeys(object, keys, getSymbols);
}
/**
* Creates an array of own and inherited enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeysIn(object) {
	return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
/** `Object#toString` result references. */
var mapTag$4 = "[object Map]";
var objectTag$2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag$4 = "[object Set]";
var weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView);
var mapCtorString = toSource(Map$1);
var promiseCtorString = toSource(Promise$1);
var setCtorString = toSource(Set$1);
var weakMapCtorString = toSource(WeakMap$1);
/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
var getTag = baseGetTag;
if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) getTag = function(value) {
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
var _getTag_default = getTag;
/** Used to check objects for own properties. */
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
/**
* Initializes an array clone.
*
* @private
* @param {Array} array The array to clone.
* @returns {Array} Returns the initialized clone.
*/
function initCloneArray(array) {
	var length = array.length, result = new array.constructor(length);
	if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
		result.index = array.index;
		result.input = array.input;
	}
	return result;
}
/** Built-in value references. */
var Uint8Array$1 = root.Uint8Array;
/**
* Creates a clone of `arrayBuffer`.
*
* @private
* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
* @returns {ArrayBuffer} Returns the cloned array buffer.
*/
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
	return result;
}
/**
* Creates a clone of `dataView`.
*
* @private
* @param {Object} dataView The data view to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned data view.
*/
function cloneDataView(dataView, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
* Creates a clone of `regexp`.
*
* @private
* @param {Object} regexp The regexp to clone.
* @returns {Object} Returns the cloned regexp.
*/
function cloneRegExp(regexp) {
	var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	result.lastIndex = regexp.lastIndex;
	return result;
}
/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
/**
* Creates a clone of the `symbol` object.
*
* @private
* @param {Object} symbol The symbol object to clone.
* @returns {Object} Returns the cloned symbol object.
*/
function cloneSymbol(symbol) {
	return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
/**
* Creates a clone of `typedArray`.
*
* @private
* @param {Object} typedArray The typed array to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned typed array.
*/
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/** `Object#toString` result references. */
var boolTag$2 = "[object Boolean]";
var dateTag$2 = "[object Date]";
var mapTag$3 = "[object Map]";
var numberTag$2 = "[object Number]";
var regexpTag$2 = "[object RegExp]";
var setTag$3 = "[object Set]";
var stringTag$2 = "[object String]";
var symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]";
var dataViewTag$2 = "[object DataView]";
var float32Tag$1 = "[object Float32Array]";
var float64Tag$1 = "[object Float64Array]";
var int8Tag$1 = "[object Int8Array]";
var int16Tag$1 = "[object Int16Array]";
var int32Tag$1 = "[object Int32Array]";
var uint8Tag$1 = "[object Uint8Array]";
var uint8ClampedTag$1 = "[object Uint8ClampedArray]";
var uint16Tag$1 = "[object Uint16Array]";
var uint32Tag$1 = "[object Uint32Array]";
/**
* Initializes an object clone based on its `toStringTag`.
*
* **Note:** This function only supports cloning values with tags of
* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
*
* @private
* @param {Object} object The object to clone.
* @param {string} tag The `toStringTag` of the object to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the initialized clone.
*/
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
/**
* Initializes an object clone.
*
* @private
* @param {Object} object The object to clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneObject(object) {
	return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
/** `Object#toString` result references. */
var mapTag$2 = "[object Map]";
/**
* The base implementation of `_.isMap` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a map, else `false`.
*/
function baseIsMap(value) {
	return isObjectLike(value) && _getTag_default(value) == mapTag$2;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
* Checks if `value` is classified as a `Map` object.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a map, else `false`.
* @example
*
* _.isMap(new Map);
* // => true
*
* _.isMap(new WeakMap);
* // => false
*/
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
/** `Object#toString` result references. */
var setTag$2 = "[object Set]";
/**
* The base implementation of `_.isSet` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a set, else `false`.
*/
function baseIsSet(value) {
	return isObjectLike(value) && _getTag_default(value) == setTag$2;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
* Checks if `value` is classified as a `Set` object.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a set, else `false`.
* @example
*
* _.isSet(new Set);
* // => true
*
* _.isSet(new WeakSet);
* // => false
*/
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$2 = 1;
var CLONE_FLAT_FLAG$1 = 2;
var CLONE_SYMBOLS_FLAG$2 = 4;
/** `Object#toString` result references. */
var argsTag$1 = "[object Arguments]";
var arrayTag$1 = "[object Array]";
var boolTag$1 = "[object Boolean]";
var dateTag$1 = "[object Date]";
var errorTag$1 = "[object Error]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var mapTag$1 = "[object Map]";
var numberTag$1 = "[object Number]";
var objectTag$1 = "[object Object]";
var regexpTag$1 = "[object RegExp]";
var setTag$1 = "[object Set]";
var stringTag$1 = "[object String]";
var symbolTag$1 = "[object Symbol]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]";
var dataViewTag$1 = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
* The base implementation of `_.clone` and `_.cloneDeep` which tracks
* traversed objects.
*
* @private
* @param {*} value The value to clone.
* @param {boolean} bitmask The bitmask flags.
*  1 - Deep clone
*  2 - Flatten inherited properties
*  4 - Clone symbols
* @param {Function} [customizer] The function to customize cloning.
* @param {string} [key] The key of `value`.
* @param {Object} [object] The parent object of `value`.
* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
* @returns {*} Returns the cloned value.
*/
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
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;
var CLONE_SYMBOLS_FLAG$1 = 4;
/**
* This method is like `_.clone` except that it recursively clones `value`.
*
* @static
* @memberOf _
* @since 1.0.0
* @category Lang
* @param {*} value The value to recursively clone.
* @returns {*} Returns the deep cloned value.
* @see _.clone
* @example
*
* var objects = [{ 'a': 1 }, { 'b': 2 }];
*
* var deep = _.cloneDeep(objects);
* console.log(deep[0] === objects[0]);
* // => false
*/
function cloneDeep(value) {
	return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
* Adds `value` to the array cache.
*
* @private
* @name add
* @memberOf SetCache
* @alias push
* @param {*} value The value to cache.
* @returns {Object} Returns the cache instance.
*/
function setCacheAdd(value) {
	this.__data__.set(value, HASH_UNDEFINED);
	return this;
}
/**
* Checks if `value` is in the array cache.
*
* @private
* @name has
* @memberOf SetCache
* @param {*} value The value to search for.
* @returns {boolean} Returns `true` if `value` is found, else `false`.
*/
function setCacheHas(value) {
	return this.__data__.has(value);
}
/**
*
* Creates an array cache object to store unique values.
*
* @private
* @constructor
* @param {Array} [values] The values to cache.
*/
function SetCache(values) {
	var index = -1, length = values == null ? 0 : values.length;
	this.__data__ = new MapCache();
	while (++index < length) this.add(values[index]);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
* A specialized version of `_.some` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {boolean} Returns `true` if any element passes the predicate check,
*  else `false`.
*/
function arraySome(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (predicate(array[index], index, array)) return true;
	return false;
}
/**
* Checks if a `cache` value for `key` exists.
*
* @private
* @param {Object} cache The cache to query.
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function cacheHas(cache, key) {
	return cache.has(key);
}
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;
/**
* A specialized version of `baseIsEqualDeep` for arrays with support for
* partial deep comparisons.
*
* @private
* @param {Array} array The array to compare.
* @param {Array} other The other array to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `array` and `other` objects.
* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
*/
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
/**
* Converts `map` to its key-value pairs.
*
* @private
* @param {Object} map The map to convert.
* @returns {Array} Returns the key-value pairs.
*/
function mapToArray(map) {
	var index = -1, result = Array(map.size);
	map.forEach(function(value, key) {
		result[++index] = [key, value];
	});
	return result;
}
/**
* Converts `set` to an array of its values.
*
* @private
* @param {Object} set The set to convert.
* @returns {Array} Returns the values.
*/
function setToArray(set) {
	var index = -1, result = Array(set.size);
	set.forEach(function(value) {
		result[++index] = value;
	});
	return result;
}
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;
var COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
/**
* A specialized version of `baseIsEqualDeep` for comparing objects of
* the same `toStringTag`.
*
* **Note:** This function only supports comparing values with tags of
* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {string} tag The `toStringTag` of the objects to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
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
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;
/** Used to check objects for own properties. */
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
/**
* A specialized version of `baseIsEqualDeep` for objects with support for
* partial deep comparisons.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
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
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var objectTag = "[object Object]";
/** Used to check objects for own properties. */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
/**
* A specialized version of `baseIsEqual` for arrays and objects which performs
* deep comparisons and tracks traversed objects enabling objects with circular
* references to be compared.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} [stack] Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
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
/**
* The base implementation of `_.isEqual` which supports partial comparisons
* and tracks traversed objects.
*
* @private
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @param {boolean} bitmask The bitmask flags.
*  1 - Unordered comparison
*  2 - Partial comparison
* @param {Function} [customizer] The function to customize comparisons.
* @param {Object} [stack] Tracks traversed `value` and `other` objects.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
*/
function baseIsEqual(value, other, bitmask, customizer, stack) {
	if (value === other) return true;
	if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
	return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
* The base implementation of `_.hasIn` without support for deep paths.
*
* @private
* @param {Object} [object] The object to query.
* @param {Array|string} key The key to check.
* @returns {boolean} Returns `true` if `key` exists, else `false`.
*/
function baseHasIn(object, key) {
	return object != null && key in Object(object);
}
/**
* Checks if `path` exists on `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @param {Function} hasFunc The function to check properties.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
*/
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
/**
* Checks if `path` is a direct or inherited property of `object`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
* @example
*
* var object = _.create({ 'a': _.create({ 'b': 2 }) });
*
* _.hasIn(object, 'a');
* // => true
*
* _.hasIn(object, 'a.b');
* // => true
*
* _.hasIn(object, ['a', 'b']);
* // => true
*
* _.hasIn(object, 'b');
* // => false
*/
function hasIn(object, path) {
	return object != null && hasPath(object, path, baseHasIn);
}
/**
* Gets the timestamp of the number of milliseconds that have elapsed since
* the Unix epoch (1 January 1970 00:00:00 UTC).
*
* @static
* @memberOf _
* @since 2.4.0
* @category Date
* @returns {number} Returns the timestamp.
* @example
*
* _.defer(function(stamp) {
*   console.log(_.now() - stamp);
* }, _.now());
* // => Logs the number of milliseconds it took for the deferred invocation.
*/
var now = function() {
	return root.Date.now();
};
/** Error message constants. */
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
/**
* Creates a debounced function that delays invoking `func` until after `wait`
* milliseconds have elapsed since the last time the debounced function was
* invoked. The debounced function comes with a `cancel` method to cancel
* delayed `func` invocations and a `flush` method to immediately invoke them.
* Provide `options` to indicate whether `func` should be invoked on the
* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
* with the last arguments provided to the debounced function. Subsequent
* calls to the debounced function return the result of the last `func`
* invocation.
*
* **Note:** If `leading` and `trailing` options are `true`, `func` is
* invoked on the trailing edge of the timeout only if the debounced function
* is invoked more than once during the `wait` timeout.
*
* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
* until to the next tick, similar to `setTimeout` with a timeout of `0`.
*
* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
* for details over the differences between `_.debounce` and `_.throttle`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to debounce.
* @param {number} [wait=0] The number of milliseconds to delay.
* @param {Object} [options={}] The options object.
* @param {boolean} [options.leading=false]
*  Specify invoking on the leading edge of the timeout.
* @param {number} [options.maxWait]
*  The maximum time `func` is allowed to be delayed before it's invoked.
* @param {boolean} [options.trailing=true]
*  Specify invoking on the trailing edge of the timeout.
* @returns {Function} Returns the new debounced function.
* @example
*
* // Avoid costly calculations while the window size is in flux.
* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
*
* // Invoke `sendMail` when clicked, debouncing subsequent calls.
* jQuery(element).on('click', _.debounce(sendMail, 300, {
*   'leading': true,
*   'trailing': false
* }));
*
* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
* var source = new EventSource('/stream');
* jQuery(source).on('message', debounced);
*
* // Cancel the trailing debounced invocation.
* jQuery(window).on('popstate', debounced.cancel);
*/
function debounce(func, wait, options) {
	var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
	if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
	wait = toNumber(wait) || 0;
	if (isObject$1(options)) {
		leading = true;
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
/**
* Gets the last element of `array`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Array
* @param {Array} array The array to query.
* @returns {*} Returns the last element of `array`.
* @example
*
* _.last([1, 2, 3]);
* // => 3
*/
function last(array) {
	var length = array == null ? 0 : array.length;
	return length ? array[length - 1] : void 0;
}
/**
* The inverse of `_.toPairs`; this method returns an object composed
* from key-value `pairs`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Array
* @param {Array} pairs The key-value pairs.
* @returns {Object} Returns the new object.
* @example
*
* _.fromPairs([['a', 1], ['b', 2]]);
* // => { 'a': 1, 'b': 2 }
*/
function fromPairs(pairs) {
	var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
	while (++index < length) {
		var pair = pairs[index];
		baseAssignValue(result, pair[0], pair[1]);
	}
	return result;
}
/**
* Gets the parent value at `path` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Array} path The path to get the parent value of.
* @returns {*} Returns the parent value.
*/
function parent(object, path) {
	return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
/**
* Performs a deep comparison between two values to determine if they are
* equivalent.
*
* **Note:** This method supports comparing arrays, array buffers, booleans,
* date objects, error objects, maps, numbers, `Object` objects, regexes,
* sets, strings, symbols, and typed arrays. `Object` objects are compared
* by their own, not inherited, enumerable properties. Functions and DOM
* nodes are compared by strict equality, i.e. `===`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.isEqual(object, other);
* // => true
*
* object === other;
* // => false
*/
function isEqual(value, other) {
	return baseIsEqual(value, other);
}
/**
* Checks if `value` is `null` or `undefined`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is nullish, else `false`.
* @example
*
* _.isNil(null);
* // => true
*
* _.isNil(void 0);
* // => true
*
* _.isNil(NaN);
* // => false
*/
function isNil(value) {
	return value == null;
}
/**
* Checks if `value` is `undefined`.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
* @example
*
* _.isUndefined(void 0);
* // => true
*
* _.isUndefined(null);
* // => false
*/
function isUndefined$1(value) {
	return value === void 0;
}
/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.unset`.
*
* @private
* @param {Object} object The object to modify.
* @param {Array|string} path The property path to unset.
* @returns {boolean} Returns `true` if the property is deleted, else `false`.
*/
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
/**
* Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
* objects.
*
* @private
* @param {*} value The value to inspect.
* @param {string} key The key of the property to inspect.
* @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
*/
function customOmitClone(value) {
	return isPlainObject$1(value) ? void 0 : value;
}
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
/**
* The opposite of `_.pick`; this method creates an object composed of the
* own and inherited enumerable property paths of `object` that are not omitted.
*
* **Note:** This method is considerably slower than `_.pick`.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The source object.
* @param {...(string|string[])} [paths] The property paths to omit.
* @returns {Object} Returns the new object.
* @example
*
* var object = { 'a': 1, 'b': '2', 'c': 3 };
*
* _.omit(object, ['a', 'c']);
* // => { 'b': '2' }
*/
var omit = flatRest(function(object, paths) {
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
/**
* The base implementation of `_.set`.
*
* @private
* @param {Object} object The object to modify.
* @param {Array|string} path The path of the property to set.
* @param {*} value The value to set.
* @param {Function} [customizer] The function to customize path creation.
* @returns {Object} Returns `object`.
*/
function baseSet(object, path, value, customizer) {
	if (!isObject$1(object)) return object;
	path = castPath(path, object);
	var index = -1, length = path.length, lastIndex = length - 1, nested = object;
	while (nested != null && ++index < length) {
		var key = toKey(path[index]), newValue = value;
		if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
		if (index != lastIndex) {
			var objValue = nested[key];
			newValue = void 0;
			if (newValue === void 0) newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
		}
		assignValue(nested, key, newValue);
		nested = nested[key];
	}
	return object;
}
/**
* The base implementation of  `_.pickBy` without support for iteratee shorthands.
*
* @private
* @param {Object} object The source object.
* @param {string[]} paths The property paths to pick.
* @param {Function} predicate The function invoked per property.
* @returns {Object} Returns the new object.
*/
function basePickBy(object, paths, predicate) {
	var index = -1, length = paths.length, result = {};
	while (++index < length) {
		var path = paths[index], value = baseGet(object, path);
		if (predicate(value, path)) baseSet(result, castPath(path, object), value);
	}
	return result;
}
/**
* The base implementation of `_.pick` without support for individual
* property identifiers.
*
* @private
* @param {Object} object The source object.
* @param {string[]} paths The property paths to pick.
* @returns {Object} Returns the new object.
*/
function basePick(object, paths) {
	return basePickBy(object, paths, function(value, path) {
		return hasIn(object, path);
	});
}
/**
* Creates an object composed of the picked `object` properties.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The source object.
* @param {...(string|string[])} [paths] The property paths to pick.
* @returns {Object} Returns the new object.
* @example
*
* var object = { 'a': 1, 'b': '2', 'c': 3 };
*
* _.pick(object, ['a', 'c']);
* // => { 'a': 1, 'c': 3 }
*/
var pick = flatRest(function(object, paths) {
	return object == null ? {} : basePick(object, paths);
});
/**
* Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
* it's created. Arrays are created for missing index properties while objects
* are created for all other missing properties. Use `_.setWith` to customize
* `path` creation.
*
* **Note:** This method mutates `object`.
*
* @static
* @memberOf _
* @since 3.7.0
* @category Object
* @param {Object} object The object to modify.
* @param {Array|string} path The path of the property to set.
* @param {*} value The value to set.
* @returns {Object} Returns `object`.
* @example
*
* var object = { 'a': [{ 'b': { 'c': 3 } }] };
*
* _.set(object, 'a[0].b.c', 4);
* console.log(object.a[0].b.c);
* // => 4
*
* _.set(object, ['x', '0', 'y', 'z'], 5);
* console.log(object.x[0].y.z);
* // => 5
*/
function set(object, path, value) {
	return object == null ? object : baseSet(object, path, value);
}
var isUndefined = (val) => val === void 0;
var isBoolean = (val) => typeof val === "boolean";
var isNumber = (val) => typeof val === "number";
var isElement = (e) => {
	if (typeof Element === "undefined") return false;
	return e instanceof Element;
};
var isStringNumber = (val) => {
	if (!isString(val)) return false;
	return !Number.isNaN(Number(val));
};
var keysOf = (arr) => Object.keys(arr);
var getProp = (obj, path, defaultValue) => {
	return {
		get value() {
			return get(obj, path, defaultValue);
		},
		set value(val) {
			set(obj, path, val);
		}
	};
};
var epPropKey = "__epPropKey";
var definePropType = (val) => val;
var isEpProp = (val) => isObject$2(val) && !!val["__epPropKey"];
/**
* @description Build prop. It can better optimize prop types
* @description 生成 prop，能更好地优化类型
* @example
// limited options
// the type will be PropType<'light' | 'dark'>
buildProp({
type: String,
values: ['light', 'dark'],
} as const)
* @example
// limited options and other types
// the type will be PropType<'small' | 'large' | number>
buildProp({
type: [String, Number],
values: ['small', 'large'],
validator: (val: unknown): val is number => typeof val === 'number',
} as const)
@link see more: https://github.com/element-plus/element-plus/pull/3341
*/
var buildProp = (prop, key) => {
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
var buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
var ElementPlusError = class extends Error {
	constructor(m) {
		super(m);
		this.name = "ElementPlusError";
	}
};
function throwError(scope, m) {
	throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
	{
		const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
		console.warn(error);
	}
}
var DEFAULT_EXCLUDE_KEYS = ["class", "style"];
var LISTENER_PREFIX = /^on[A-Z]/;
var useAttrs = (params = {}) => {
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
/**
*
* @deprecated This function will be removed in future version.
*
* Note: If you are using Vue 3.4+, you can straight use computed instead.
* Because in Vue 3.4+, if computed new value does not change,
* computed, effect, watch, watchEffect, render dependencies will not be triggered.
* refer: https://github.com/vuejs/core/pull/5912
*
* @param fn effect function
* @param options WatchOptionsBase
* @returns readonly shallowRef
*/
function computedEager(fn, options) {
	var _options$flush;
	const result = /* @__PURE__ */ shallowRef();
	watchEffect(() => {
		result.value = fn();
	}, {
		...options,
		flush: (_options$flush = void 0 ) !== null && _options$flush !== void 0 ? _options$flush : "sync"
	});
	return /* @__PURE__ */ readonly(result);
}
/**
* Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
*
* @param fn
*/
function tryOnScopeDispose(fn, failSilently) {
	if (getCurrentScope()) {
		onScopeDispose(fn, failSilently);
		return true;
	}
	return false;
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {};
var isIOS = /* #__PURE__ */ getIsIOS();
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
/**
* Create an EventFilter that debounce the events
*/
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop;
	let lastResolve = noop;
	const _pending = /* @__PURE__ */ shallowRef(false);
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
		isPending: /* @__PURE__ */ shallowReadonly(_pending)
	});
}
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
	return getCurrentInstance();
}
/**
* Converts ref to reactive.
*
* @see https://vueuse.org/toReactive
* @param objectRef A ref of object
*/
function toReactive(objectRef) {
	if (!/* @__PURE__ */ isRef(objectRef)) return /* @__PURE__ */ reactive(objectRef);
	return /* @__PURE__ */ reactive(new Proxy({}, {
		get(_, p, receiver) {
			return unref(Reflect.get(objectRef.value, p, receiver));
		},
		set(_, p, value) {
			if (/* @__PURE__ */ isRef(objectRef.value[p]) && !/* @__PURE__ */ isRef(value)) objectRef.value[p].value = value;
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
/**
* Computed reactive object.
*/
function reactiveComputed(fn) {
	return toReactive(computed(fn));
}
/**
* Debounce execution of a function.
*
* @see https://vueuse.org/useDebounceFn
* @param  fn          A function to be executed after delay milliseconds debounced.
* @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
* @param  options     Options
*
* @return A new, debounced, function with isPending, cancel, and flush properties.
*/
function useDebounceFn(fn, ms = 200, options = {}) {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
/**
* Debounce updates of a ref.
*
* @return A new debounced ref.
*/
function refDebounced(value, ms = 200, options = {}) {
	const debounced = /* @__PURE__ */ ref(toValue(value));
	const updater = useDebounceFn(() => {
		debounced.value = value.value;
	}, ms, options);
	watch(value, () => updater());
	return /* @__PURE__ */ shallowReadonly(debounced);
}
/**
* Call onMounted() if it's inside a component lifecycle, if not, just call the function
*
* @param fn
* @param sync if set to false, it will run in the nextTick() of Vue
* @param target
*/
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget()) onMounted(fn, target);
	else if (sync) fn();
	else nextTick(fn);
}
/**
* Wrapper for `setTimeout` with controls.
*
* @param cb
* @param interval
* @param options
*/
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	const isPending = /* @__PURE__ */ shallowRef(false);
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
		isPending: /* @__PURE__ */ shallowReadonly(isPending),
		start,
		stop
	};
}
/**
* Shorthand for watching value with {immediate: true}
*
* @see https://vueuse.org/watchImmediate
*/
function watchImmediate(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
/**
* Get the dom element of a ref of element or Vue component instance
*
* @param elRef
*/
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
var _iOSWorkaround = false;
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
	/**
	* Determines if the given target has multiple root elements.
	* Referenced from: https://github.com/vuejs/test-utils/blob/ccb460be55f9f6be05ab708500a41ec8adf6f4bc/src/vue-wrapper.ts#L21
	*/
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
/**
* Mounted state in ref.
*
* @see https://vueuse.org/useMounted
*
* @__NO_SIDE_EFFECTS__
*/
function useMounted() {
	const isMounted = /* @__PURE__ */ shallowRef(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
/* @__NO_SIDE_EFFECTS__ */
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
/**
* Reactively track `document.visibilityState`.
*
* @see https://vueuse.org/useDocumentVisibility
*
* @__NO_SIDE_EFFECTS__
*/
function useDocumentVisibility(options = {}) {
	const { document = defaultDocument } = options;
	if (!document) return /* @__PURE__ */ shallowRef("visible");
	const visibility = /* @__PURE__ */ shallowRef(document.visibilityState);
	useEventListener(document, "visibilitychange", () => {
		visibility.value = document.visibilityState;
	}, { passive: true });
	return visibility;
}
/**
* Reports changes to the dimensions of an Element's content or the border-box
*
* @see https://vueuse.org/useResizeObserver
* @param target
* @param callback
* @param options
*/
function useResizeObserver(target, callback, options = {}) {
	const { window = defaultWindow, ...observerOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window && "ResizeObserver" in window);
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
/**
* Reactive size of an HTML element.
*
* @see https://vueuse.org/useElementSize
*/
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window = defaultWindow, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _unrefElement;
		return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
	});
	const width = /* @__PURE__ */ shallowRef(initialSize.width);
	const height = /* @__PURE__ */ shallowRef(initialSize.height);
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
/**
* Reactively track window focus with `window.onfocus` and `window.onblur`.
*
* @see https://vueuse.org/useWindowFocus
*
* @__NO_SIDE_EFFECTS__
*/
function useWindowFocus(options = {}) {
	const { window = defaultWindow } = options;
	if (!window) return /* @__PURE__ */ shallowRef(false);
	const focused = /* @__PURE__ */ shallowRef(window.document.hasFocus());
	const listenerOptions = { passive: true };
	useEventListener(window, "blur", () => {
		focused.value = false;
	}, listenerOptions);
	useEventListener(window, "focus", () => {
		focused.value = true;
	}, listenerOptions);
	return focused;
}
var useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
	watch(() => unref(condition), (val) => {
		if (val) debugWarn(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`);
	}, { immediate: true });
};
var isShadowRoot = (e) => {
	if (typeof ShadowRoot === "undefined") return false;
	return e instanceof ShadowRoot;
};
var isHTMLElement = (e) => {
	if (typeof Element === "undefined") return false;
	return e instanceof Element;
};
/**
* @desc Determine if target element is focusable
* @param element {HTMLElement}
* @returns {Boolean} true if it is focusable
*/
var isFocusable = (element) => {
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
var focusElement = (el, options) => {
	if (!el || !el.focus) return;
	let cleanup = false;
	if (isHTMLElement(el) && !isFocusable(el) && !el.getAttribute("tabindex")) {
		el.setAttribute("tabindex", "-1");
		cleanup = true;
	}
	el.focus(options);
	if (isHTMLElement(el) && cleanup) el.removeAttribute("tabindex");
};
var isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
var isAndroid = () => isClient && /android/i.test(window.navigator.userAgent);
var capitalize = (str) => capitalize$1(str);
var SCOPE$3 = "utils/dom/style";
var classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
var hasClass = (el, cls) => {
	if (!el || !cls) return false;
	if (cls.includes(" ")) throw new Error("className should not contain space.");
	return el.classList.contains(cls);
};
var addClass = (el, cls) => {
	if (!el || !cls.trim()) return;
	el.classList.add(...classNameToArray(cls));
};
var removeClass = (el, cls) => {
	if (!el || !cls.trim()) return;
	el.classList.remove(...classNameToArray(cls));
};
var getStyle = (element, styleName) => {
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
function addUnit(value, defaultUnit = "px") {
	if (!value && value !== 0) return "";
	if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`;
	else if (isString(value)) return value;
	debugWarn(SCOPE$3, "binding value must be a string or number");
}
var useDraggable = (targetRef, dragRef, draggable, overflow) => {
	const transform = {
		offsetX: 0,
		offsetY: 0
	};
	const isDragging = /* @__PURE__ */ ref(false);
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
var en_default = {
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
var buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
var translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`);
var buildLocaleContext = (locale) => {
	return {
		lang: computed(() => unref(locale).name),
		locale: /* @__PURE__ */ isRef(locale) ? locale : /* @__PURE__ */ ref(locale),
		t: buildTranslator(locale)
	};
};
var localeContextKey = Symbol("localeContextKey");
var useLocale = (localeOverrides) => {
	const locale = localeOverrides || inject(localeContextKey, /* @__PURE__ */ ref());
	return buildLocaleContext(computed(() => locale.value || en_default));
};
var statePrefix = "is-";
var _bem = (namespace, block, blockSuffix, element, modifier) => {
	let cls = `${namespace}-${block}`;
	if (blockSuffix) cls += `-${blockSuffix}`;
	if (element) cls += `__${element}`;
	if (modifier) cls += `--${modifier}`;
	return cls;
};
var namespaceContextKey = Symbol("namespaceContextKey");
var useGetDerivedNamespace = (namespaceOverrides) => {
	const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, /* @__PURE__ */ ref("el")) : /* @__PURE__ */ ref("el"));
	return computed(() => {
		return unref(derivedNamespace) || "el";
	});
};
var useNamespace = (block, namespaceOverrides) => {
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
var rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
var cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
var scrollBarWidth;
var getScrollBarWidth = (namespace) => {
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
/**
* Hook that monitoring the ref value to lock or unlock the screen.
* When the trigger became true, it assumes modal is now opened and vice versa.
* @param trigger {Ref<boolean>}
*/
var useLockscreen = (trigger, options = {}) => {
	if (!/* @__PURE__ */ isRef(trigger)) throwError("[useLockscreen]", "You need to pass a ref param to this function");
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
var composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
	const handleEvent = (event) => {
		const shouldPrevent = theirsHandler?.(event);
		if (checkForDefaultPrevented === false || !shouldPrevent) return oursHandler?.(event);
	};
	return handleEvent;
};
var getEventCode = (event) => {
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
var getEventKey = (event) => {
	let key = event.key && event.key !== "Unidentified" ? event.key : "";
	if (!key && event.type === "keyup" && isAndroid()) {
		const target = event.target;
		key = target.value.charAt(target.selectionStart - 1);
	}
	return key;
};
var _prop = buildProp({
	type: definePropType(Boolean),
	default: null
});
var _event = buildProp({ type: definePropType(Function) });
var createModelToggleComposable = (name) => {
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
var useProp = (name) => {
	const vm = getCurrentInstance();
	return computed(() => (vm?.proxy?.$props)?.[name]);
};
var W = "bottom";
var T = "right";
var P = "left";
var me = "auto";
var Q = [
	"top",
	W,
	T,
	P
];
var Y = "start";
var Ye = "clippingParents";
var je = "viewport";
var ee = "popper";
var Ge = "reference";
var De = Q.reduce(function(e, t) {
	return e.concat([t + "-" + Y, t + "-end"]);
}, []);
var Ee = [].concat(Q, [me]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Y,
		t + "-end"
	]);
}, []);
var it = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
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
	if (typeof ShadowRoot == "undefined") return false;
	return e instanceof B(e).ShadowRoot || e instanceof ShadowRoot;
}
function Tt(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(n) {
		var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
		!R(a) || !V(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(c) {
			var s = o[c];
			s === false ? a.removeAttribute(c) : a.setAttribute(c, s === true ? "" : s);
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
var ke = {
	name: "applyStyles",
	enabled: true,
	phase: "write",
	fn: Tt,
	effect: Bt,
	requires: ["computeStyles"]
};
function C(e) {
	return e.split("-")[0];
}
var J = Math.max;
var ve = Math.min;
var te = Math.round;
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
	t === void 0 && (t = false), n === void 0 && (n = false);
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
	if (e.contains(t)) return true;
	if (n && Ae(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return true;
			r = r.parentNode || r.host;
		} while (r);
	}
	return false;
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
var Vt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ut(typeof e != "number" ? e : pt(e, Q));
};
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
var lt = {
	name: "arrow",
	enabled: true,
	phase: "main",
	fn: Ct,
	effect: qt,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
function re(e) {
	return e.split("-")[1];
}
var It = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
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
	var A = Object.assign({ position: s }, f && It), H = u === true ? Nt({
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
	var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, a = n.adaptive, c = a === void 0 ? true : a, s = n.roundOffsets, i = s === void 0 ? true : s, f = {
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
		adaptive: false,
		roundOffsets: i
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var We = {
	name: "computeStyles",
	enabled: true,
	phase: "beforeWrite",
	fn: Ft,
	data: {}
};
var ge = { passive: true };
function Ut(e) {
	var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? true : o, c = r.resize, s = c === void 0 ? true : c, i = B(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && f.forEach(function(u) {
		u.addEventListener("scroll", n.update, ge);
	}), s && i.addEventListener("resize", n.update, ge), function() {
		a && f.forEach(function(u) {
			u.removeEventListener("scroll", n.update, ge);
		}), s && i.removeEventListener("resize", n.update, ge);
	};
}
var Te = {
	name: "eventListeners",
	enabled: true,
	phase: "write",
	fn: function() {},
	effect: Ut,
	data: {}
};
var _t = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function be(e) {
	return e.replace(/left|right|bottom|top/g, function(t) {
		return _t[t];
	});
}
var zt = {
	start: "end",
	end: "start"
};
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
	var n = ne(e, false, t === "fixed");
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
	var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, c = a === void 0 ? e.strategy : a, s = n.boundary, i = s === void 0 ? Ye : s, f = n.rootBoundary, u = f === void 0 ? je : f, m = n.elementContext, h = m === void 0 ? ee : m, l = n.altBoundary, g = l === void 0 ? false : l, p = n.padding, y = p === void 0 ? 0 : p, b = ut(typeof y != "number" ? y : pt(y, Q)), x = h === "popper" ? Ge : ee, O = e.rects.popper, d = e.elements[g ? x : h], v = Kt(G(d) ? d : d.contextElement || N(e.elements.popper), i, u, c), w = ne(e.elements.reference), $ = yt({
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
		for (var o = n.mainAxis, a = o === void 0 ? true : o, c = n.altAxis, s = c === void 0 ? true : c, i = n.fallbackPlacements, f = n.padding, u = n.boundary, m = n.rootBoundary, h = n.altBoundary, l = n.flipVariations, g = l === void 0 ? true : l, p = n.allowedAutoPlacements, y = t.options.placement, x = C(y) === y, O = i || (x || !g ? [be(y)] : Zt(y)), d = [y].concat(O).reduce(function(z, q) {
			return z.concat(C(q) === "auto" ? Qt(t, {
				placement: q,
				boundary: u,
				rootBoundary: m,
				padding: f,
				flipVariations: g,
				allowedAutoPlacements: p
			}) : q);
		}, []), v = t.rects.reference, w = t.rects.popper, $ = /* @__PURE__ */ new Map(), j = true, D = d[0], E = 0; E < d.length; E++) {
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
				D = A, j = false;
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
		t.placement !== D && (t.modifiersData[r]._skip = true, t.placement = D, t.reset = true);
	}
}
var gt = {
	name: "flip",
	enabled: true,
	phase: "main",
	fn: en,
	requiresIfExists: ["offset"],
	data: { _skip: false }
};
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
	var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, c = oe(t, { elementContext: "reference" }), s = oe(t, { altBoundary: true }), i = bt(c, r), f = bt(s, o, a), u = wt(i), m = wt(f);
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
var xt = {
	name: "hide",
	enabled: true,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: tn
};
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
var Ot = {
	name: "offset",
	enabled: true,
	phase: "main",
	requires: ["popperOffsets"],
	fn: rn
};
function on(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = yt({
		reference: t.rects.reference,
		element: t.rects.popper,
		placement: t.placement
	});
}
var Ve = {
	name: "popperOffsets",
	enabled: true,
	phase: "read",
	fn: on,
	data: {}
};
function an(e) {
	return e === "x" ? "y" : "x";
}
function sn(e) {
	var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? true : o, c = n.altAxis, s = c === void 0 ? false : c, i = n.boundary, f = n.rootBoundary, u = n.altBoundary, m = n.padding, h = n.tether, l = h === void 0 ? true : h, g = n.tetherOffset, p = g === void 0 ? 0 : g, y = oe(t, {
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
var $t = {
	name: "preventOverflow",
	enabled: true,
	phase: "main",
	fn: sn,
	requiresIfExists: ["offset"]
};
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
	n === void 0 && (n = false);
	var r = R(t), o = R(t) && un(t), a = N(t), c = ne(e, o, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, i = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((V(t) !== "body" || He(a)) && (s = cn(t)), R(t) ? (i = ne(t, true), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = Re(a))), {
		x: c.left + s.scrollLeft - i.x,
		y: c.top + s.scrollTop - i.y,
		width: c.width,
		height: c.height
	};
}
function ln(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
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
var jt = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
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
		}, u = [], m = false, h = {
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
						}, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(j) {
							return f.modifiersData[j.name] = Object.assign({}, j.data);
						});
						for (var x = 0; x < f.orderedModifiers.length; x++) {
							if (f.reset === true) {
								f.reset = false, x = -1;
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
				g(), m = true;
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
we();
we({ defaultModifiers: [
	Te,
	Ve,
	We,
	ke
] });
var wn = we({ defaultModifiers: [
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
var usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
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
	const instanceRef = /* @__PURE__ */ shallowRef();
	const states = /* @__PURE__ */ ref({
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
function deriveState(state) {
	const elements = Object.keys(state.elements);
	return {
		styles: fromPairs(elements.map((element) => [element, state.styles[element] || {}])),
		attributes: fromPairs(elements.map((element) => [element, state.attributes[element]]))
	};
}
var useSameTarget = (handleClick) => {
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
var defaultIdInjection = {
	prefix: Math.floor(Math.random() * 1e4),
	current: 0
};
var ID_INJECTION_KEY = Symbol("elIdInjection");
var useIdInjection = () => {
	return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
var useId = (deterministicId) => {
	const idInjection = useIdInjection();
	if (!isClient && idInjection === defaultIdInjection) debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
	const namespace = useGetDerivedNamespace();
	return computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
};
var registeredEscapeHandlers = [];
var cachedHandler = (event) => {
	if (getEventCode(event) === EVENT_CODE.esc) registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
};
var useEscapeKeydown = (handler) => {
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
var usePopperContainerId = () => {
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
var createContainer = (id) => {
	const container = document.createElement("div");
	container.id = id;
	document.body.appendChild(container);
	return container;
};
var usePopperContainer = () => {
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
/**
* @deprecated Removed after 3.0.0, Use `UseDelayedToggleProps` instead.
*/
var useDelayedToggleProps = buildProps({
	/**
	* @description delay of appearance, in millisecond, not valid in controlled mode
	*/
	showAfter: {
		type: Number,
		default: 0
	},
	/**
	* @description delay of disappear, in millisecond, not valid in controlled mode
	*/
	hideAfter: {
		type: Number,
		default: 200
	},
	/**
	* @description disappear automatically, in millisecond, not valid in controlled mode
	*/
	autoClose: {
		type: Number,
		default: 0
	}
});
var useDelayedToggle = ({ showAfter, hideAfter, autoClose, open, close }) => {
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
var FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
var useForwardRef = (forwardRef) => {
	const setForwardRef = ((el) => {
		forwardRef.value = el;
	});
	provide(FORWARD_REF_INJECTION_KEY, { setForwardRef });
};
var useForwardRefDirective = (setForwardRef) => {
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
var initial = { current: 0 };
var zIndex = /* @__PURE__ */ ref(0);
var defaultInitialZIndex = 2e3;
var ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
var zIndexContextKey = Symbol("zIndexContextKey");
var useZIndex = (zIndexOverrides) => {
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
function isComment(node) {
	return isVNode(node) && node.type === Comment;
}
var flattedChildren = (children) => {
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
var getOrderedChildren = (vm, childComponentName, children) => {
	return flattedChildren(vm.subTree).filter((n) => isVNode(n) && n.type?.name === childComponentName && !!n.component).map((n) => n.component.uid).map((uid) => children[uid]).filter((p) => !!p);
};
var useOrderedChildren = (vm, childComponentName) => {
	const children = /* @__PURE__ */ shallowRef({});
	const orderedChildren = /* @__PURE__ */ shallowRef([]);
	const nodesMap = /* @__PURE__ */ new WeakMap();
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
		ChildrenSorter: /* @__PURE__ */ defineComponent({ setup(_, { slots }) {
			return () => {
				sortChildren();
				return slots.default ? h(IsolatedRenderer, { render: slots.default }) : null;
			};
		} })
	};
};
var useSizeProp = buildProp({
	type: String,
	values: componentSizes,
	required: false
});
var SIZE_INJECTION_KEY = Symbol("size");
var useGlobalSize = () => {
	const injectedSize = inject(SIZE_INJECTION_KEY, {});
	return computed(() => {
		return unref(injectedSize.size) || "";
	});
};
function useFocusController(target, { disabled, beforeFocus, afterFocus, beforeBlur, afterBlur } = {}) {
	const { emit } = getCurrentInstance();
	const wrapperRef = /* @__PURE__ */ shallowRef();
	const isFocused = /* @__PURE__ */ ref(false);
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
		/** Avoid using wrapperRef and handleFocus/handleBlur together */
		wrapperRef,
		handleFocus,
		handleBlur
	};
}
function useComposition({ afterComposition, emit }) {
	const isComposing = /* @__PURE__ */ ref(false);
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
var emptyValuesContextKey = Symbol("emptyValuesContextKey");
var SCOPE$2 = "use-empty-values";
var DEFAULT_EMPTY_VALUES = [
	"",
	void 0,
	null
];
/**
* @deprecated Removed after 3.0.0, Use `UseEmptyValuesProps` instead.
*/
var useEmptyValuesProps = buildProps({
	/**
	* @description empty values supported by the component
	*/
	emptyValues: Array,
	/**
	* @description return value when cleared, if you want to set `undefined`, use `() => undefined`
	*/
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
var useEmptyValues = (props, defaultValue) => {
	const config = getCurrentInstance() ? inject(emptyValuesContextKey, /* @__PURE__ */ ref({})) : /* @__PURE__ */ ref({});
	const emptyValues = computed(() => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES);
	const valueOnClear = computed(() => {
		if (isFunction$1(props.valueOnClear)) return props.valueOnClear();
		else if (props.valueOnClear !== void 0) return props.valueOnClear;
		else if (isFunction$1(config.value.valueOnClear)) return config.value.valueOnClear();
		else if (config.value.valueOnClear !== void 0) return config.value.valueOnClear;
		return defaultValue ;
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
/**
* @deprecated Removed after 3.0.0, Use `AriaProps` instead.
*/
var ariaProps = buildProps({
	/**
	* @description native `aria-label` attribute
	*/
	ariaLabel: String,
	/**
	* @description native `aria-orientation` attribute
	*/
	ariaOrientation: {
		type: String,
		values: [
			"horizontal",
			"vertical",
			"undefined"
		]
	},
	/**
	* @description native `aria-controls` attribute
	*/
	ariaControls: String
});
var useAriaProps = (arias) => {
	return pick(ariaProps, arias);
};
var withPropsDefaultsSetter = (target) => {
	const _p = target.props;
	const props = isArray$1(_p) ? fromPairs(_p.map((key) => [key, {}])) : _p;
	target.setPropsDefaults = (defaults) => {
		if (!props) return;
		for (const [key, value] of Object.entries(defaults)) {
			const prop = props[key];
			if (!hasOwn(props, key)) continue;
			if (isPlainObject$1(prop)) {
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
var withInstall = (main, extra) => {
	main.install = (app) => {
		for (const comp of [main, ...Object.values(extra ?? {})]) app.component(comp.name, comp);
	};
	if (extra) for (const [key, comp] of Object.entries(extra)) main[key] = comp;
	withPropsDefaultsSetter(main);
	return main;
};
var withInstallFunction = (fn, name) => {
	fn.install = (app) => {
		fn._context = app._context;
		app.config.globalProperties[name] = fn;
	};
	return fn;
};
var withNoopInstall = (component) => {
	component.install = NOOP;
	withPropsDefaultsSetter(component);
	return component;
};
/*! Element Plus Icons Vue v2.3.2 */
var arrow_down_default = /* @__PURE__ */ defineComponent({
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
var arrow_left_default = /* @__PURE__ */ defineComponent({
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
var arrow_right_default = /* @__PURE__ */ defineComponent({
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
var arrow_up_default = /* @__PURE__ */ defineComponent({
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
var circle_check_default = /* @__PURE__ */ defineComponent({
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
var circle_close_filled_default = /* @__PURE__ */ defineComponent({
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
var circle_close_default = /* @__PURE__ */ defineComponent({
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
var close_default = /* @__PURE__ */ defineComponent({
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
var hide_default = /* @__PURE__ */ defineComponent({
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
var info_filled_default = /* @__PURE__ */ defineComponent({
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
var loading_default = /* @__PURE__ */ defineComponent({
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
var minus_default = /* @__PURE__ */ defineComponent({
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
var plus_default = /* @__PURE__ */ defineComponent({
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
var success_filled_default = /* @__PURE__ */ defineComponent({
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
var view_default = /* @__PURE__ */ defineComponent({
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
var warning_filled_default = /* @__PURE__ */ defineComponent({
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
var iconPropType = definePropType([
	String,
	Object,
	Function
]);
var CloseComponents = { Close: close_default };
var TypeComponents = {
	Close: close_default};
var TypeComponentsMap = {
	primary: info_filled_default,
	success: success_filled_default,
	warning: warning_filled_default,
	error: circle_close_filled_default,
	info: info_filled_default
};
var ValidateComponentsMap = {
	validating: loading_default,
	success: circle_check_default,
	error: circle_close_default
};
/**
* @deprecated Removed after 3.0.0, Use `AlertProps` instead.
*/
var alertProps = buildProps({
	/**
	* @description alert title.
	*/
	title: {
		type: String,
		default: ""
	},
	description: {
		type: String,
		default: ""
	},
	/**
	* @description alert type.
	*/
	type: {
		type: String,
		values: keysOf(TypeComponentsMap),
		default: "info"
	},
	/**
	* @description whether alert can be dismissed.
	*/
	closable: {
		type: Boolean,
		default: true
	},
	/**
	* @description text for replacing x button
	*/
	closeText: {
		type: String,
		default: ""
	},
	/**
	* @description whether show icon
	*/
	showIcon: Boolean,
	/**
	* @description should content be placed in center.
	*/
	center: Boolean,
	effect: {
		type: String,
		values: ["light", "dark"],
		default: "light"
	}
});
var alertEmits = { close: (evt) => evt instanceof MouseEvent };
var ElIcon = withInstall(/* @__PURE__ */ defineComponent({
	name: "ElIcon",
	inheritAttrs: false,
	__name: "icon",
	props: buildProps({
		/**
		* @description SVG icon size, size x size
		*/
		size: { type: definePropType([Number, String]) },
		/**
		* @description SVG tag's fill attribute
		*/
		color: { type: String }
	}),
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
}));
var ElAlert = withInstall(/* @__PURE__ */ defineComponent({
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
		const visible = /* @__PURE__ */ ref(true);
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
}));
/**
* @deprecated Removed after 3.0.0, Use `PopperProps` instead.
*/
var popperProps = buildProps({ role: {
	type: String,
	values: [
		"dialog",
		"grid",
		"group",
		"listbox",
		"menu",
		"navigation",
		"tooltip",
		"tree"
	],
	default: "tooltip"
} });
var POPPER_INJECTION_KEY = Symbol("popper");
var POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
var arrow_default = /* @__PURE__ */ defineComponent({
	name: "ElPopperArrow",
	inheritAttrs: false,
	__name: "arrow",
	setup(__props, { expose: __expose }) {
		const ns = useNamespace("popper");
		const { arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
		onBeforeUnmount(() => {
			arrowRef.value = void 0;
		});
		__expose({ 
		/**
		* @description Arrow element
		*/
arrowRef });
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
/**
* @deprecated Removed after 3.0.0, Use `PopperTriggerProps` instead.
*/
var popperTriggerProps = buildProps({
	/** @description Indicates the reference element to which the popper is attached */
	virtualRef: { type: definePropType(Object) },
	/** @description Indicates whether virtual triggering is enabled */
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
var NAME = "ElOnlyChild";
var OnlyChild = /* @__PURE__ */ defineComponent({
	name: NAME,
	setup(_, { slots, attrs }) {
		const forwardRefDirective = useForwardRefDirective(inject(FORWARD_REF_INJECTION_KEY)?.setForwardRef ?? NOOP);
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
function findFirstLegitChild(node) {
	if (!node) return [null, 0];
	const children = node;
	const len = children.filter((c) => c.type !== Comment).length;
	for (const child of children) {
		/**
		* when user uses h(Fragment, [text]) to render plain string,
		* this switch case just cannot handle, when the value is primitives
		* we should just return the wrapped string
		*/
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
	return createVNode("span", { "class": useNamespace("only-child").e("content") }, [s]);
}
var trigger_default$1 = /* @__PURE__ */ defineComponent({
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
		__expose({ 
		/**
		* @description trigger element
		*/
triggerRef });
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
/**
* @deprecated Removed after 3.0.0, Use `PopperArrowProps` instead.
*/
var popperArrowProps = buildProps({ arrowOffset: {
	type: Number,
	default: 5
} });
/**
* @deprecated Removed after 3.0.0, Use `PopperContentProps` instead.
*/
var popperContentProps = buildProps({
	...buildProps({
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
		/**
		* @description offset of the Tooltip
		*/
		offset: {
			type: Number,
			default: 12
		},
		/**
		* @description position of Tooltip
		*/
		placement: {
			type: String,
			values: Ee,
			default: "bottom"
		},
		/**
		* @description [popper.js](https://popper.js.org/docs/v2/) parameters
		*/
		popperOptions: {
			type: definePropType(Object),
			default: () => ({})
		},
		strategy: {
			type: String,
			values: ["fixed", "absolute"],
			default: "absolute"
		}
	}),
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
var popperContentEmits = {
	mouseenter: (evt) => evt instanceof MouseEvent,
	mouseleave: (evt) => evt instanceof MouseEvent,
	focus: () => true,
	blur: () => true,
	close: () => true
};
/**
* @deprecated Removed after 3.0.0, Use `FormProps` instead.
*/
var formProps = buildProps({
	...buildProps({
		/**
		* @description Control the size of components in this form.
		*/
		size: {
			type: String,
			values: componentSizes
		},
		/**
		* @description Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
		*/
		disabled: Boolean
	}),
	/**
	* @description Data of form component.
	*/
	model: Object,
	/**
	* @description Validation rules of form.
	*/
	rules: { type: definePropType(Object) },
	/**
	* @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
	*/
	labelPosition: {
		type: String,
		values: [
			"left",
			"right",
			"top"
		],
		default: "right"
	},
	/**
	* @description Position of asterisk.
	*/
	requireAsteriskPosition: {
		type: String,
		values: ["left", "right"],
		default: "left"
	},
	/**
	* @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
	*/
	labelWidth: {
		type: [String, Number],
		default: ""
	},
	/**
	* @description Suffix of the label.
	*/
	labelSuffix: {
		type: String,
		default: ""
	},
	/**
	* @description Whether the form is inline.
	*/
	inline: Boolean,
	/**
	* @description Whether to display the error message inline with the form item.
	*/
	inlineMessage: Boolean,
	/**
	* @description Whether to display an icon indicating the validation result.
	*/
	statusIcon: Boolean,
	/**
	* @description Whether to show the error message.
	*/
	showMessage: {
		type: Boolean,
		default: true
	},
	/**
	* @description Whether to trigger validation when the `rules` prop is changed.
	*/
	validateOnRuleChange: {
		type: Boolean,
		default: true
	},
	/**
	* @description Whether to hide required fields should have a red asterisk (star) beside their labels.
	*/
	hideRequiredAsterisk: Boolean,
	/**
	* @description When validation fails, scroll to the first error form entry.
	*/
	scrollToError: Boolean,
	/**
	* @description When validation fails, it scrolls to the first error item based on the scrollIntoView option.
	*/
	scrollIntoViewOptions: {
		type: definePropType([Object, Boolean]),
		default: true
	}
});
var formEmits = { validate: (prop, isValid, message) => (isArray$1(prop) || isString(prop)) && isBoolean(isValid) && isString(message) };
var formContextKey = Symbol("formContextKey");
var formItemContextKey = Symbol("formItemContextKey");
var useFormSize = (fallback, ignore = {}) => {
	const emptyRef = /* @__PURE__ */ ref(void 0);
	const size = ignore.prop ? emptyRef : useProp("size");
	const globalConfig = ignore.global ? emptyRef : useGlobalSize();
	const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
	const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
	return computed(() => size.value || unref(fallback) || formItem?.size || form?.size || globalConfig.value || "");
};
var useFormDisabled = (fallback) => {
	const disabled = useProp("disabled");
	const form = inject(formContextKey, void 0);
	return computed(() => {
		return disabled.value ?? unref(fallback) ?? form?.disabled ?? false;
	});
};
var useFormItem = () => {
	return {
		form: inject(formContextKey, void 0),
		formItem: inject(formItemContextKey, void 0)
	};
};
var useFormItemInputId = (props, { formItemContext, disableIdGeneration, disableIdManagement }) => {
	if (!disableIdGeneration) disableIdGeneration = /* @__PURE__ */ ref(false);
	if (!disableIdManagement) disableIdManagement = /* @__PURE__ */ ref(false);
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
	const inputId = /* @__PURE__ */ ref();
	let idUnwatch = void 0;
	const isLabeledByFormItem = computed(() => {
		return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && formItemContext.inputIds?.length <= 1);
	});
	onMounted(() => {
		idUnwatch = watch([/* @__PURE__ */ toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration]) => {
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
/**
* @deprecated Removed after 3.0.0, Use `FormItemProps` instead.
*/
var formItemProps = buildProps({
	/**
	* @description Label text.
	*/
	label: String,
	/**
	* @description Width of label, e.g. `'50px'`. `'auto'` is supported.
	*/
	labelWidth: { type: [String, Number] },
	/**
	* @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required. The default is extend from `form label-position`.
	*/
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
	/**
	* @description  A key of `model`. It could be an array of property paths (e.g `['a', 'b', '0']`). In the use of `validate` and `resetFields` method, the attribute is required.
	*/
	prop: { type: definePropType([String, Array]) },
	/**
	* @description Whether the field is required or not, will be determined by validation rules if omitted.
	*/
	required: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
	*/
	rules: { type: definePropType([Object, Array]) },
	/**
	* @description Field error message, set its value and the field will validate error and show this message immediately.
	*/
	error: String,
	/**
	* @description Validation state of formItem.
	*/
	validateStatus: {
		type: String,
		values: [
			"",
			"error",
			"validating",
			"success"
		]
	},
	/**
	* @description Same as for in native label.
	*/
	for: String,
	/**
	* @description Inline style validate message.
	*/
	inlineMessage: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description Whether to show the error message.
	*/
	showMessage: {
		type: Boolean,
		default: true
	},
	/**
	* @description Control the size of components in this form-item.
	*/
	size: {
		type: String,
		values: componentSizes
	}
});
/** like `_.castArray`, except falsy value returns empty array. */
var castArray = (arr) => {
	if (!arr && arr !== 0) return [];
	return isArray$1(arr) ? arr : [arr];
};
var SCOPE$1 = "ElForm";
function useFormLabelWidth() {
	const potentialLabelWidthArr = /* @__PURE__ */ ref([]);
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
var filterFields = (fields, props) => {
	const normalized = castArray$1(props).map((prop) => isArray$1(prop) ? prop.join(".") : prop);
	return normalized.length > 0 ? fields.filter((field) => field.propString && normalized.includes(field.propString)) : fields;
};
var COMPONENT_NAME$7 = "ElForm";
var form_default = /* @__PURE__ */ defineComponent({
	name: COMPONENT_NAME$7,
	__name: "form",
	props: formProps,
	emits: formEmits,
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const formRef = /* @__PURE__ */ ref();
		const fields = /* @__PURE__ */ reactive([]);
		const initialValues = /* @__PURE__ */ new Map();
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
		provide(formContextKey, /* @__PURE__ */ reactive({
			.../* @__PURE__ */ toRefs(props),
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
			/**
			* @description Validate the whole form. Receives a callback or returns `Promise`.
			*/
			validate,
			/**
			* @description Validate specified fields.
			*/
			validateField,
			/**
			* @description Reset specified fields and remove validation result.
			*/
			resetFields,
			/**
			* @description Clear validation message for specified fields.
			*/
			clearValidate,
			/**
			* @description Scroll to the specified fields.
			*/
			scrollToField,
			/**
			* @description Get a field context.
			*/
			getField,
			/**
			* @description All fields context.
			*/
			fields,
			/**
			* @description Set initial values for form fields. When `resetFields` is called, fields will reset to these values.
			*/
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
var COMPONENT_NAME$6 = "ElLabelWrap";
var form_label_wrap_default = /* @__PURE__ */ defineComponent({
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
		const el = /* @__PURE__ */ ref();
		const computedWidth = /* @__PURE__ */ ref(0);
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
	var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
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
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {};
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
var AsyncValidationError = /*#__PURE__*/ function(_Error) {
	_inheritsLoose(AsyncValidationError, _Error);
	function AsyncValidationError(errors, fields) {
		var _this = _Error.call(this, "Async Validation Error") || this;
		_this.errors = errors;
		_this.fields = fields;
		return _this;
	}
	return AsyncValidationError;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
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
var required$1 = function required(rule, value, source, errors, options, type) {
	if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) errors.push(format(options.messages.required, rule.fullField));
};
/**
*  Rule for validating whitespace.
*
*  @param rule The validation rule.
*  @param value The value of the field on the source object.
*  @param source The source object being validated.
*  @param errors An array of errors that this rule may add
*  validation errors to.
*  @param options The validation options.
*  @param options.messages The validation messages.
*/
var whitespace = function whitespace(rule, value, source, errors, options) {
	if (/^\s+$/.test(value) || value === "") errors.push(format(options.messages.whitespace, rule.fullField));
};
var urlReg;
var getUrlRegex = (function() {
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
var pattern$2 = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
	hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
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
var type$1 = function type(rule, value, source, errors, options) {
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
var range = function range(rule, value, source, errors, options) {
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
var ENUM$1 = "enum";
var rules = {
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
var string = function string(rule, value, callback, source, options) {
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
var method = function method(rule, value, callback, source, options) {
	var errors = [];
	if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
		if (isEmptyValue(value) && !rule.required) return callback();
		rules.required(rule, value, source, errors, options);
		if (value !== void 0) rules.type(rule, value, source, errors, options);
	}
	callback(errors);
};
var number = function number(rule, value, callback, source, options) {
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
var _boolean = function _boolean(rule, value, callback, source, options) {
	var errors = [];
	if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
		if (isEmptyValue(value) && !rule.required) return callback();
		rules.required(rule, value, source, errors, options);
		if (value !== void 0) rules.type(rule, value, source, errors, options);
	}
	callback(errors);
};
var regexp = function regexp(rule, value, callback, source, options) {
	var errors = [];
	if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
		if (isEmptyValue(value) && !rule.required) return callback();
		rules.required(rule, value, source, errors, options);
		if (!isEmptyValue(value)) rules.type(rule, value, source, errors, options);
	}
	callback(errors);
};
var integer = function integer(rule, value, callback, source, options) {
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
var floatFn = function floatFn(rule, value, callback, source, options) {
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
var array = function array(rule, value, callback, source, options) {
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
var object = function object(rule, value, callback, source, options) {
	var errors = [];
	if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
		if (isEmptyValue(value) && !rule.required) return callback();
		rules.required(rule, value, source, errors, options);
		if (value !== void 0) rules.type(rule, value, source, errors, options);
	}
	callback(errors);
};
var ENUM = "enum";
var enumerable = function enumerable(rule, value, callback, source, options) {
	var errors = [];
	if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
		if (isEmptyValue(value) && !rule.required) return callback();
		rules.required(rule, value, source, errors, options);
		if (value !== void 0) rules[ENUM](rule, value, source, errors, options);
	}
	callback(errors);
};
var pattern = function pattern(rule, value, callback, source, options) {
	var errors = [];
	if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
		if (isEmptyValue(value, "string") && !rule.required) return callback();
		rules.required(rule, value, source, errors, options);
		if (!isEmptyValue(value, "string")) rules.pattern(rule, value, source, errors, options);
	}
	callback(errors);
};
var date = function date(rule, value, callback, source, options) {
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
var required = function required(rule, value, callback, source, options) {
	var errors = [];
	var type = Array.isArray(value) ? "array" : typeof value;
	rules.required(rule, value, source, errors, options, type);
	callback(errors);
};
var type = function type(rule, value, callback, source, options) {
	var ruleType = rule.type;
	var errors = [];
	if (rule.required || !rule.required && source.hasOwnProperty(rule.field)) {
		if (isEmptyValue(value, ruleType) && !rule.required) return callback();
		rules.required(rule, value, source, errors, options, ruleType);
		if (!isEmptyValue(value, ruleType)) rules.type(rule, value, source, errors, options);
	}
	callback(errors);
};
var validators = {
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
var messages = newMessages();
/**
*  Encapsulates a validation schema.
*
*  @param descriptor An object declaring validation rules
*  for this schema.
*/
var Schema = /*#__PURE__*/ function() {
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
var _hoisted_1$19 = ["role", "aria-labelledby"];
var form_item_default = /* @__PURE__ */ defineComponent({
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
		const inputIds = /* @__PURE__ */ ref([]);
		const validateState = /* @__PURE__ */ ref("");
		const validateStateDebounced = refDebounced(validateState, 100);
		const validateMessage = /* @__PURE__ */ ref("");
		const formItemRef = /* @__PURE__ */ ref();
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
		const context = /* @__PURE__ */ reactive({
			.../* @__PURE__ */ toRefs(props),
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
			/**
			* @description Form item size.
			*/
			size: _size,
			/**
			* @description Validation message.
			*/
			validateMessage,
			/**
			* @description Validation state.
			*/
			validateState,
			/**
			* @description Validate form item.
			*/
			validate,
			/**
			* @description Remove validation status of the field.
			*/
			clearValidate,
			/**
			* @description Reset current field and remove validation result.
			*/
			resetField,
			/**
			* @description Set initial value for this field. When `resetField` is called, the field will reset to this value.
			*/
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
			}, 8, ["name"])], 6)], 10, _hoisted_1$19);
		};
	}
});
var ElForm = withInstall(form_default, { FormItem: form_item_default });
var ElFormItem = withNoopInstall(form_item_default);
var FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
var FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
var FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
var FOCUS_AFTER_TRAPPED_OPTS = {
	cancelable: true,
	bubbles: false
};
var FOCUSOUT_PREVENTED_OPTS = {
	cancelable: true,
	bubbles: false
};
var ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
var ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
var FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
var focusReason = /* @__PURE__ */ ref();
var lastUserFocusTimestamp = /* @__PURE__ */ ref(0);
var lastAutomatedFocusTimestamp = /* @__PURE__ */ ref(0);
var focusReasonUserCount = 0;
var obtainAllFocusableElements = (element) => {
	const nodes = [];
	const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
};
var getVisibleElement = (elements, container) => {
	for (const element of elements) if (!isHidden(element, container)) return element;
};
var isHidden = (element, container) => {
	if (getComputedStyle(element).visibility === "hidden") return true;
	while (element) {
		if (container && element === container) return false;
		if (getComputedStyle(element).display === "none") return true;
		element = element.parentElement;
	}
	return false;
};
var getEdges = (container) => {
	const focusable = obtainAllFocusableElements(container);
	return [getVisibleElement(focusable, container), getVisibleElement(focusable.reverse(), container)];
};
var isSelectable = (element) => {
	return element instanceof HTMLInputElement && "select" in element;
};
var tryFocus = (element, shouldSelect) => {
	if (element) {
		const prevFocusedElement = document.activeElement;
		focusElement(element, { preventScroll: true });
		lastAutomatedFocusTimestamp.value = window.performance.now();
		if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) element.select();
	}
};
function removeFromStack(list, item) {
	const copy = [...list];
	const idx = list.indexOf(item);
	if (idx !== -1) copy.splice(idx, 1);
	return copy;
}
var createFocusableStack = () => {
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
var focusFirstDescendant = (elements, shouldSelect = false) => {
	const prevFocusedElement = document.activeElement;
	for (const element of elements) {
		tryFocus(element, shouldSelect);
		if (document.activeElement !== prevFocusedElement) return;
	}
};
var focusableStack = createFocusableStack();
var isFocusCausedByUserEvent = () => {
	return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
var notifyFocusReasonPointer = () => {
	focusReason.value = "pointer";
	lastUserFocusTimestamp.value = window.performance.now();
};
var notifyFocusReasonKeydown = () => {
	focusReason.value = "keyboard";
	lastUserFocusTimestamp.value = window.performance.now();
};
var useFocusReason = () => {
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
var createFocusOutPreventedEvent = (detail) => {
	return new CustomEvent(FOCUSOUT_PREVENTED, {
		...FOCUSOUT_PREVENTED_OPTS,
		detail
	});
};
var focus_trap_vue_vue_type_script_lang_default = /* @__PURE__ */ defineComponent({
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
		const forwardRef = /* @__PURE__ */ ref();
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
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var focus_trap_default$1 = /* @__PURE__ */ _plugin_vue_export_helper_default(focus_trap_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
var buildPopperOptions = (props, modifiers = []) => {
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
var unwrapMeasurableEl = ($el) => {
	if (!isClient) return;
	return unrefElement($el);
};
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
var DEFAULT_ARROW_OFFSET = 0;
var usePopperContent = (props) => {
	const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
	const arrowRef = /* @__PURE__ */ ref();
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
var usePopperContentDOM = (props, { attributes, styles, role }) => {
	const { nextZIndex } = useZIndex();
	const ns = useNamespace("popper");
	const contentAttrs = computed(() => unref(attributes).popper);
	const contentZIndex = /* @__PURE__ */ ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
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
var usePopperContentFocusTrap = (props, emit) => {
	const trapped = /* @__PURE__ */ ref(false);
	const focusStartRef = /* @__PURE__ */ ref();
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
var content_default$1 = /* @__PURE__ */ defineComponent({
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
			/**
			* @description popper content element
			*/
			popperContentRef: contentRef,
			/**
			* @description popperjs instance
			*/
			popperInstanceRef: instanceRef,
			/**
			* @description method for updating popper
			*/
			updatePopper,
			/**
			* @description content style
			*/
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
var ElPopper = withInstall(/* @__PURE__ */ defineComponent({
	name: "ElPopper",
	inheritAttrs: false,
	__name: "popper",
	props: popperProps,
	setup(__props, { expose: __expose }) {
		const props = __props;
		const popperProvides = {
			/**
			* @description trigger element
			*/
			triggerRef: /* @__PURE__ */ ref(),
			/**
			* @description popperjs instance
			*/
			popperInstanceRef: /* @__PURE__ */ ref(),
			/**
			* @description popper content element
			*/
			contentRef: /* @__PURE__ */ ref(),
			/**
			* @description popper reference element
			*/
			referenceRef: /* @__PURE__ */ ref(),
			/**
			* @description role determines how aria attributes are distributed
			*/
			role: computed(() => props.role)
		};
		__expose(popperProvides);
		provide(POPPER_INJECTION_KEY, popperProvides);
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
}));
/**
* @deprecated Removed after 3.0.0, Use `ElTooltipContentProps` instead.
*/
var useTooltipContentProps = buildProps({
	...useDelayedToggleProps,
	...popperContentProps,
	/**
	* @description which element the tooltip CONTENT appends to
	*/
	appendTo: { type: definePropType([String, Object]) },
	/**
	* @description display content, can be overridden by `slot#content`
	*/
	content: {
		type: String,
		default: ""
	},
	/**
	* @description whether `content` is treated as HTML string
	*/
	rawContent: Boolean,
	/**
	* @description when tooltip inactive and `persistent` is `false` , popconfirm will be destroyed
	*/
	persistent: Boolean,
	/**
	* @description visibility of Tooltip
	*/
	visible: {
		type: definePropType(Boolean),
		default: null
	},
	/**
	* @description animation name
	*/
	transition: String,
	/**
	* @description whether tooltip content is teleported, if `true` it will be teleported to where `append-to` sets
	*/
	teleported: {
		type: Boolean,
		default: true
	},
	/**
	* @description whether Tooltip is disabled
	*/
	disabled: Boolean,
	...useAriaProps(["ariaLabel"])
});
/**
* @deprecated Removed after 3.0.0, Use `UseTooltipTriggerProps` instead.
*/
var useTooltipTriggerProps = buildProps({
	...popperTriggerProps,
	/**
	* @description whether Tooltip is disabled
	*/
	disabled: Boolean,
	/**
	* @description How should the tooltip be triggered (to show), not valid in controlled mode
	*/
	trigger: {
		type: definePropType([String, Array]),
		default: "hover"
	},
	/**
	* @description When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of tooltip through the keyboard, not valid in controlled mode
	*/
	triggerKeys: {
		type: definePropType(Array),
		default: () => [
			EVENT_CODE.enter,
			EVENT_CODE.numpadEnter,
			EVENT_CODE.space
		]
	},
	/**
	* @description when triggering tooltips through hover, whether to focus the trigger element, which improves accessibility
	*/
	focusOnTarget: Boolean
});
var { useModelToggleProps: useTooltipModelToggleProps, useModelToggleEmits: useTooltipModelToggleEmits, useModelToggle: useTooltipModelToggle } = createModelToggleComposable("visible");
/**
* @deprecated Removed after 3.0.0, Use `UseTooltipProps` instead.
*/
var useTooltipProps = buildProps({
	...popperProps,
	...useTooltipModelToggleProps,
	...useTooltipContentProps,
	...useTooltipTriggerProps,
	...popperArrowProps,
	/**
	* @description whether the tooltip content has an arrow
	*/
	showArrow: {
		type: Boolean,
		default: true
	}
});
var tooltipEmits = [
	...useTooltipModelToggleEmits,
	"before-show",
	"before-hide",
	"show",
	"hide",
	"open",
	"close"
];
var TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
var isTriggerType = (trigger, type) => {
	if (isArray$1(trigger)) return trigger.includes(type);
	return trigger === type;
};
var whenTrigger = (trigger, type, handler) => {
	return (e) => {
		isTriggerType(unref(trigger), type) && handler(e);
	};
};
var trigger_default = /* @__PURE__ */ defineComponent({
	name: "ElTooltipTrigger",
	__name: "trigger",
	props: useTooltipTriggerProps,
	setup(__props, { expose: __expose }) {
		const props = __props;
		const ns = useNamespace("tooltip");
		const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
		const triggerRef = /* @__PURE__ */ ref(null);
		const stopWhenControlledOrDisabled = () => {
			if (unref(controlled) || props.disabled) return true;
		};
		const trigger = /* @__PURE__ */ toRef(props, "trigger");
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
		__expose({ 
		/**
		* @description trigger element
		*/
triggerRef });
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
var content_default = /* @__PURE__ */ defineComponent({
	name: "ElTooltipContent",
	inheritAttrs: false,
	__name: "content",
	props: useTooltipContentProps,
	setup(__props, { expose: __expose }) {
		const props = __props;
		const { selector } = usePopperContainerId();
		const ns = useNamespace("tooltip");
		const contentRef = /* @__PURE__ */ ref();
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
		const ariaHidden = /* @__PURE__ */ ref(true);
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
			/**
			* @description el-popper-content component instance
			*/
			contentRef,
			/**
			* @description validate current focus event is trigger inside el-popper-content
			*/
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
var _hoisted_1$18 = ["innerHTML"];
var _hoisted_2$10 = { key: 1 };
var ElTooltip = withInstall(/* @__PURE__ */ defineComponent({
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
		const popperRef = /* @__PURE__ */ ref();
		const contentRef = /* @__PURE__ */ ref();
		const updatePopper = () => {
			const popperComponent = unref(popperRef);
			if (popperComponent) popperComponent.popperInstanceRef?.update();
		};
		const open = /* @__PURE__ */ ref(false);
		const toggleReason = /* @__PURE__ */ ref();
		const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
			indicator: open,
			toggleReason
		});
		const { onOpen, onClose } = useDelayedToggle({
			showAfter: /* @__PURE__ */ toRef(props, "showAfter"),
			hideAfter: /* @__PURE__ */ toRef(props, "hideAfter"),
			autoClose: /* @__PURE__ */ toRef(props, "autoClose"),
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
			open: /* @__PURE__ */ readonly(open),
			trigger: /* @__PURE__ */ toRef(props, "trigger"),
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
			/**
			* @description el-popper component instance
			*/
			popperRef,
			/**
			* @description el-tooltip-content component instance
			*/
			contentRef,
			/**
			* @description validate current focus event is trigger inside el-tooltip-content
			*/
			isFocusInsideContent,
			/**
			* @description update el-popper component instance
			*/
			updatePopper,
			/**
			* @description expose onOpen function to mange el-tooltip open state
			*/
			onOpen,
			/**
			* @description expose onClose function to manage el-tooltip close state
			*/
			onClose,
			/**
			* @description expose hide function
			*/
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
					}, null, 8, _hoisted_1$18)) : (openBlock(), createElementBlock("span", _hoisted_2$10, toDisplayString(__props.content), 1))]), __props.showArrow ? (openBlock(), createBlock(unref(arrow_default), { key: 0 })) : createCommentVNode("v-if", true)]),
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
}));
var mutable = (val) => val;
/**
* @deprecated Removed after 3.0.0, Use `InputProps` instead.
*/
var inputProps = buildProps({
	/**
	* @description native input id
	*/
	id: {
		type: String,
		default: void 0
	},
	/**
	* @description input box size
	*/
	size: useSizeProp,
	/**
	* @description whether to disable
	*/
	disabled: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description binding value
	*/
	modelValue: {
		type: definePropType([
			String,
			Number,
			Object
		]),
		default: ""
	},
	/**
	* @description v-model modifiers, reference [Vue modifiers](https://vuejs.org/guide/essentials/forms.html#modifiers)
	*/
	modelModifiers: {
		type: definePropType(Object),
		default: () => ({})
	},
	/**
	* @description same as `maxlength` in native input
	*/
	maxlength: { type: [String, Number] },
	/**
	* @description same as `minlength` in native input
	*/
	minlength: { type: [String, Number] },
	/**
	* @description type of input, see more in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
	*/
	type: {
		type: definePropType(String),
		default: "text"
	},
	/**
	* @description control the resizability
	*/
	resize: {
		type: String,
		values: [
			"none",
			"both",
			"horizontal",
			"vertical"
		]
	},
	/**
	* @description whether textarea has an adaptive height
	*/
	autosize: {
		type: definePropType([Boolean, Object]),
		default: false
	},
	/**
	* @description native input autocomplete
	*/
	autocomplete: {
		type: definePropType(String),
		default: "off"
	},
	/**
	* @description format content
	*/
	formatter: { type: Function },
	/**
	* @description parse content
	*/
	parser: { type: Function },
	/**
	* @description placeholder
	*/
	placeholder: { type: String },
	/**
	* @description native input form
	*/
	form: { type: String },
	/**
	* @description native input readonly
	*/
	readonly: Boolean,
	/**
	* @description whether to show clear button
	*/
	clearable: Boolean,
	/**
	* @description custom clear icon component
	*/
	clearIcon: {
		type: iconPropType,
		default: circle_close_default
	},
	/**
	* @description toggleable password input
	*/
	showPassword: Boolean,
	/**
	* @description word count
	*/
	showWordLimit: Boolean,
	/**
	* @description word count position, valid when `show-word-limit` is true
	*/
	wordLimitPosition: {
		type: String,
		values: ["inside", "outside"],
		default: "inside"
	},
	/**
	* @description suffix icon
	*/
	suffixIcon: { type: iconPropType },
	/**
	* @description prefix icon
	*/
	prefixIcon: { type: iconPropType },
	/**
	* @description container role, internal properties provided for use by the picker component
	*/
	containerRole: {
		type: String,
		default: void 0
	},
	/**
	* @description input tabindex
	*/
	tabindex: {
		type: [String, Number],
		default: 0
	},
	/**
	* @description whether to trigger form validation
	*/
	validateEvent: {
		type: Boolean,
		default: true
	},
	/**
	* @description input or textarea element style
	*/
	inputStyle: {
		type: definePropType([
			Object,
			Array,
			String,
			Boolean
		]),
		default: () => mutable({})
	},
	/**
	* @description Count graphemes of input value. If it's set, native maxlength and minlength won't be used.
	*/
	countGraphemes: { type: definePropType(Function) },
	/**
	* @description native input autofocus
	*/
	autofocus: Boolean,
	rows: {
		type: Number,
		default: 2
	},
	...useAriaProps(["ariaLabel"]),
	/**
	* @description native input mode for virtual keyboards
	*/
	inputmode: {
		type: definePropType(String),
		default: void 0
	},
	/**
	* @description same as `name` in native input
	*/
	name: String
});
var inputEmits = {
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
var hiddenTextarea = void 0;
var HIDDEN_STYLE = {
	height: "0",
	visibility: "hidden",
	overflow: isFirefox() ? "" : "hidden",
	position: "absolute",
	"z-index": "-1000",
	top: "0",
	right: "0"
};
var CONTEXT_STYLE = [
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
var looseToNumber = (val) => {
	const n = Number.parseFloat(val);
	return Number.isNaN(n) ? val : n;
};
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
var _hoisted_1$17 = [
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
var _hoisted_2$9 = ["aria-label"];
var _hoisted_3$6 = [
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
var _hoisted_4$5 = ["aria-label"];
var COMPONENT_NAME$5 = "ElInput";
var ElInput = withInstall(/* @__PURE__ */ defineComponent({
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
		const input = /* @__PURE__ */ shallowRef();
		const textarea = /* @__PURE__ */ shallowRef();
		const hovering = /* @__PURE__ */ ref(false);
		const passwordVisible = /* @__PURE__ */ ref(false);
		const countStyle = /* @__PURE__ */ ref();
		const clearIconStyle = /* @__PURE__ */ ref();
		const textareaCalcStyle = /* @__PURE__ */ shallowRef(props.inputStyle);
		const saveValue = /* @__PURE__ */ ref("");
		let passwordFocusValue;
		const textareaHeight = /* @__PURE__ */ ref();
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
				countStyle.value = { 
				/** right: 100% - (width - right(10)) */
right: `calc(100% - ${width - 10}px)` };
				clearIconStyle.value = { 
				/** right: 100% - (width - right(11)) */
right: `calc(100% - ${width - 11}px)` };
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
			/** @description HTML input element */
			input,
			/** @description HTML textarea element */
			textarea,
			/** @description HTML element, input or textarea */
			ref: _ref,
			/** @description style of textarea. */
			textareaStyle,
			/** @description from props (used on unit test) */
			autosize: /* @__PURE__ */ toRef(props, "autosize"),
			/** @description is input composing */
			isComposing,
			/** @description whether the password is visible */
			passwordVisible,
			/** @description HTML input element native method */
			focus,
			/** @description HTML input element native method */
			blur,
			/** @description HTML input element native method */
			select,
			/** @description clear input value */
			clear,
			/** @description resize textarea. */
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
					}), null, 16, _hoisted_1$17),
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
						}, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("count-inner")) }, toDisplayString(textLength.value) + " / " + toDisplayString(maxlength.value), 3)], 10, _hoisted_2$9)) : createCommentVNode("v-if", true),
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
}));
/**
* Due to browser rendering and calculation precision loss issues,
* boundary checks cannot be based solely on value equality;
* a certain range of fluctuation is permissible.
*/
function isGreaterThan(a, b, epsilon = .03) {
	return a - b > epsilon;
}
var ElBadge = withInstall(/* @__PURE__ */ defineComponent({
	name: "ElBadge",
	__name: "badge",
	props: buildProps({
		/**
		* @description display value.
		*/
		value: {
			type: [String, Number],
			default: ""
		},
		/**
		* @description maximum value, shows `{max}+` when exceeded. Only works if value is a number.
		*/
		max: {
			type: Number,
			default: 99
		},
		/**
		* @description if a little dot is displayed.
		*/
		isDot: Boolean,
		/**
		* @description hidden badge.
		*/
		hidden: Boolean,
		/**
		* @description badge type.
		*/
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
		/**
		* @description whether to show badge when value is zero.
		*/
		showZero: {
			type: Boolean,
			default: true
		},
		/**
		* @description customize dot background color
		*/
		color: String,
		/**
		* @description CSS style of badge
		*/
		badgeStyle: {
			type: definePropType([
				String,
				Object,
				Array,
				Boolean
			]),
			default: void 0
		},
		/**
		* @description set offset of the badge
		*/
		offset: {
			type: definePropType(Array),
			default: () => [0, 0]
		},
		/**
		* @description custom class name of badge
		*/
		badgeClass: {
			type: definePropType([
				String,
				Array,
				Object,
				Boolean
			]),
			default: void 0
		}
	}),
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
		__expose({ 
		/** @description badge content */
content });
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
}));
/**
* @deprecated Removed after 3.0.0, Use `ButtonProps` instead.
*/
var buttonProps = buildProps({
	/**
	* @description button size
	*/
	size: useSizeProp,
	/**
	* @description disable the button
	*/
	disabled: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description button type
	*/
	type: {
		type: String,
		values: [
			"default",
			"primary",
			"success",
			"warning",
			"info",
			"danger",
			"text",
			""
		],
		default: ""
	},
	/**
	* @description icon component
	*/
	icon: { type: iconPropType },
	/**
	* @description native button type
	*/
	nativeType: {
		type: String,
		values: [
			"button",
			"submit",
			"reset"
		],
		default: "button"
	},
	/**
	* @description determine whether it's loading
	*/
	loading: Boolean,
	/**
	* @description customize loading icon component
	*/
	loadingIcon: {
		type: iconPropType,
		default: () => loading_default
	},
	/**
	* @description determine whether it's a plain button
	*/
	plain: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description determine whether it's a text button
	*/
	text: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description determine whether it's a link button
	*/
	link: Boolean,
	/**
	* @description determine whether the text button background color is always on
	*/
	bg: Boolean,
	/**
	* @description native button autofocus
	*/
	autofocus: Boolean,
	/**
	* @description determine whether it's a round button
	*/
	round: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description determine whether it's a circle button
	*/
	circle: Boolean,
	/**
	* @description determine whether it's a dashed button
	*/
	dashed: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description custom button color, automatically calculate `hover` and `active` color
	*/
	color: String,
	/**
	* @description dark mode, which automatically converts `color` to dark mode colors
	*/
	dark: Boolean,
	/**
	* @description automatically insert a space between two chinese characters
	*/
	autoInsertSpace: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description custom element tag
	*/
	tag: {
		type: definePropType([String, Object]),
		default: "button"
	}
});
var buttonEmits = { click: (evt) => evt instanceof MouseEvent };
var configProviderContextKey = Symbol();
var globalConfig = /* @__PURE__ */ ref();
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
var provideGlobalConfig = (config, app, global = false) => {
	const inSetup = !!getCurrentInstance();
	const oldConfig = inSetup ? useGlobalConfig() : void 0;
	const provideFn = (inSetup ? provide : void 0);
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
var mergeConfig = (a, b) => {
	const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
	const obj = {};
	for (const key of keys) obj[key] = b[key] !== void 0 ? b[key] : a[key];
	return obj;
};
buildProps({
	/**
	* @description Controlling if the users want a11y features
	*/
	a11y: {
		type: Boolean,
		default: true
	},
	/**
	* @description Locale Object
	*/
	locale: { type: definePropType(Object) },
	/**
	* @description global component size
	*/
	size: useSizeProp,
	/**
	* @description button related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#button-attribute)
	*/
	button: { type: definePropType(Object) },
	/**
	* @description card related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#card-attribute)
	*/
	card: { type: definePropType(Object) },
	/**
	* @description dialog related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#dialog-attribute)
	*/
	dialog: { type: definePropType(Object) },
	/**
	* @description link related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#link-attribute)
	*/
	link: { type: definePropType(Object) },
	/**
	* @description features at experimental stage to be added, all features are default to be set to false, [see the following table](https://element-plus.org/en-US/component/config-provider.html#experimental-features)                                                                            | ^[object]
	*/
	experimentalFeatures: { type: definePropType(Object) },
	/**
	* @description Controls if we should handle keyboard navigation
	*/
	keyboardNavigation: {
		type: Boolean,
		default: true
	},
	/**
	* @description message related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#message-attribute)
	*/
	message: { type: definePropType(Object) },
	/**
	* @description global Initial zIndex
	*/
	zIndex: Number,
	/**
	* @description global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
	*/
	namespace: {
		type: String,
		default: "el"
	},
	/**
	* @description table related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#table-attribute)
	*/
	table: { type: definePropType(Object) },
	...useEmptyValuesProps
});
var messageConfig = { placement: "top" };
var buttonGroupContextKey = Symbol("buttonGroupContextKey");
var useButton = (props, emit) => {
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
	const _ref = /* @__PURE__ */ ref();
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
/**
* Take input from [0, n] and return it as [0, 1]
* @hidden
*/
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
/**
* Force a number between 0 and 1
* @hidden
*/
function clamp01(val) {
	return Math.min(1, Math.max(0, val));
}
/**
* Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
* <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
* @hidden
*/
function isOnePointZero(n) {
	return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
/**
* Check to see if string passed in is a percentage
* @hidden
*/
function isPercentage(n) {
	return typeof n === "string" && n.indexOf("%") !== -1;
}
/**
* Return a valid alpha value [0,1] with all invalid values being set to 1
* @hidden
*/
function boundAlpha(a) {
	a = parseFloat(a);
	if (isNaN(a) || a < 0 || a > 1) a = 1;
	return a;
}
/**
* Replace a decimal with it's percentage value
* @hidden
*/
function convertToPercentage(n) {
	if (Number(n) <= 1) return `${Number(n) * 100}%`;
	return n;
}
/**
* Force a hex value to have 2 characters
* @hidden
*/
function pad2(c) {
	return c.length === 1 ? "0" + c : String(c);
}
/**
* Handle bounds / percentage checking to conform to CSS color spec
* <http://www.w3.org/TR/css3-color/>
* *Assumes:* r, g, b in [0, 255] or [0, 1]
* *Returns:* { r, g, b } in [0, 255]
*/
function rgbToRgb(r, g, b) {
	return {
		r: bound01(r, 255) * 255,
		g: bound01(g, 255) * 255,
		b: bound01(b, 255) * 255
	};
}
/**
* Converts an RGB color value to HSL.
* *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
* *Returns:* { h, s, l } in [0,1]
*/
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
/**
* Converts an HSL color value to RGB.
*
* *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
* *Returns:* { r, g, b } in the set [0, 255]
*/
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
/**
* Converts an RGB color value to HSV
*
* *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
* *Returns:* { h, s, v } in [0,1]
*/
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
/**
* Converts an HSV color value to RGB.
*
* *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
* *Returns:* { r, g, b } in the set [0, 255]
*/
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
/**
* Converts an RGB color to hex
*
* *Assumes:* r, g, and b are contained in the set [0, 255]
* *Returns:* a 3 or 6 character hex
*/
function rgbToHex(r, g, b, allow3Char) {
	const rHex = pad2(Math.round(r).toString(16));
	const gHex = pad2(Math.round(g).toString(16));
	const bHex = pad2(Math.round(b).toString(16));
	if (allow3Char && rHex.startsWith(rHex.charAt(1)) && gHex.startsWith(gHex.charAt(1)) && bHex.startsWith(bHex.charAt(1))) return rHex.charAt(0) + gHex.charAt(0) + bHex.charAt(0);
	return rHex + gHex + bHex;
}
/**
* Converts an RGBA color plus alpha transparency to hex
*
* *Assumes:* r, g, b are contained in the set [0, 255] and a in [0, 1]
* *Returns:* a 4 or 8 character rgba hex
*/
function rgbaToHex(r, g, b, a, allow4Char) {
	const rHex = pad2(Math.round(r).toString(16));
	const gHex = pad2(Math.round(g).toString(16));
	const bHex = pad2(Math.round(b).toString(16));
	const aHex = pad2(convertDecimalToHex(a));
	if (allow4Char && rHex.startsWith(rHex.charAt(1)) && gHex.startsWith(gHex.charAt(1)) && bHex.startsWith(bHex.charAt(1)) && aHex.startsWith(aHex.charAt(1))) return rHex.charAt(0) + gHex.charAt(0) + bHex.charAt(0) + aHex.charAt(0);
	return rHex + gHex + bHex + aHex;
}
/**
* Converts CMYK to RBG
* Assumes c, m, y, k are in the set [0, 100]
*/
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
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
	return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
	return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
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
/**
* @hidden
*/
var names = {
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
/**
* Given a string or object, convert that input to RGB
*
* Possible string inputs:
* ```
* "red"
* "#f00" or "f00"
* "#ff0000" or "ff0000"
* "#ff000000" or "ff000000"
* "rgb 255 0 0" or "rgb (255, 0, 0)"
* "rgb 1.0 0 0" or "rgb (1, 0, 0)"
* "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
* "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
* "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
* "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
* "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
* "cmyk(0, 20, 0, 0)" or "cmyk 0 20 0 0"
* ```
*/
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
var CSS_UNIT = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
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
/**
* Permissive string parsing.  Take in a number of formats, and output an object
* based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}` or `{c, m, y, k}` or `{c, m, y, k, a}`
*/
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
/**
* Check to see if it looks like a CSS unit
* (see `matchers` above for definition).
*/
function isValidCSSUnit(color) {
	if (typeof color === "number") return !Number.isNaN(color);
	return matchers.CSS_UNIT.test(color);
}
var TinyColor = class TinyColor {
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
	/**
	* Returns the perceived brightness of the color, from 0-255.
	*/
	getBrightness() {
		const rgb = this.toRgb();
		return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
	}
	/**
	* Returns the perceived luminance of a color, from 0-1.
	*/
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
	/**
	* Returns the alpha value of a color, from 0-1.
	*/
	getAlpha() {
		return this.a;
	}
	/**
	* Sets the alpha value on the current color.
	*
	* @param alpha - The new alpha value. The accepted range is 0-1.
	*/
	setAlpha(alpha) {
		this.a = boundAlpha(alpha);
		this.roundA = Math.round(100 * this.a) / 100;
		return this;
	}
	/**
	* Returns whether the color is monochrome.
	*/
	isMonochrome() {
		const { s } = this.toHsl();
		return s === 0;
	}
	/**
	* Returns the object as a HSVA object.
	*/
	toHsv() {
		const hsv = rgbToHsv(this.r, this.g, this.b);
		return {
			h: hsv.h * 360,
			s: hsv.s,
			v: hsv.v,
			a: this.a
		};
	}
	/**
	* Returns the hsva values interpolated into a string with the following format:
	* "hsva(xxx, xxx, xxx, xx)".
	*/
	toHsvString() {
		const hsv = rgbToHsv(this.r, this.g, this.b);
		const h = Math.round(hsv.h * 360);
		const s = Math.round(hsv.s * 100);
		const v = Math.round(hsv.v * 100);
		return this.a === 1 ? `hsv(${h}, ${s}%, ${v}%)` : `hsva(${h}, ${s}%, ${v}%, ${this.roundA})`;
	}
	/**
	* Returns the object as a HSLA object.
	*/
	toHsl() {
		const hsl = rgbToHsl(this.r, this.g, this.b);
		return {
			h: hsl.h * 360,
			s: hsl.s,
			l: hsl.l,
			a: this.a
		};
	}
	/**
	* Returns the hsla values interpolated into a string with the following format:
	* "hsla(xxx, xxx, xxx, xx)".
	*/
	toHslString() {
		const hsl = rgbToHsl(this.r, this.g, this.b);
		const h = Math.round(hsl.h * 360);
		const s = Math.round(hsl.s * 100);
		const l = Math.round(hsl.l * 100);
		return this.a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${this.roundA})`;
	}
	/**
	* Returns the hex value of the color.
	* @param allow3Char will shorten hex value to 3 char if possible
	*/
	toHex(allow3Char = false) {
		return rgbToHex(this.r, this.g, this.b, allow3Char);
	}
	/**
	* Returns the hex value of the color -with a # prefixed.
	* @param allow3Char will shorten hex value to 3 char if possible
	*/
	toHexString(allow3Char = false) {
		return "#" + this.toHex(allow3Char);
	}
	/**
	* Returns the hex 8 value of the color.
	* @param allow4Char will shorten hex value to 4 char if possible
	*/
	toHex8(allow4Char = false) {
		return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
	}
	/**
	* Returns the hex 8 value of the color -with a # prefixed.
	* @param allow4Char will shorten hex value to 4 char if possible
	*/
	toHex8String(allow4Char = false) {
		return "#" + this.toHex8(allow4Char);
	}
	/**
	* Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
	* @param allowShortChar will shorten hex value to 3 or 4 char if possible
	*/
	toHexShortString(allowShortChar = false) {
		return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
	}
	/**
	* Returns the object as a RGBA object.
	*/
	toRgb() {
		return {
			r: Math.round(this.r),
			g: Math.round(this.g),
			b: Math.round(this.b),
			a: this.a
		};
	}
	/**
	* Returns the RGBA values interpolated into a string with the following format:
	* "RGBA(xxx, xxx, xxx, xx)".
	*/
	toRgbString() {
		const r = Math.round(this.r);
		const g = Math.round(this.g);
		const b = Math.round(this.b);
		return this.a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${this.roundA})`;
	}
	/**
	* Returns the object as a RGBA object.
	*/
	toPercentageRgb() {
		const fmt = (x) => `${Math.round(bound01(x, 255) * 100)}%`;
		return {
			r: fmt(this.r),
			g: fmt(this.g),
			b: fmt(this.b),
			a: this.a
		};
	}
	/**
	* Returns the RGBA relative values interpolated into a string
	*/
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
	/**
	* The 'real' name of the color -if there is one.
	*/
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
	/**
	* Lighten the color a given amount. Providing 100 will always return white.
	* @param amount - valid between 1-100
	*/
	lighten(amount = 10) {
		const hsl = this.toHsl();
		hsl.l += amount / 100;
		hsl.l = clamp01(hsl.l);
		return new TinyColor(hsl);
	}
	/**
	* Brighten the color a given amount, from 0 to 100.
	* @param amount - valid between 1-100
	*/
	brighten(amount = 10) {
		const rgb = this.toRgb();
		rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
		rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
		rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
		return new TinyColor(rgb);
	}
	/**
	* Darken the color a given amount, from 0 to 100.
	* Providing 100 will always return black.
	* @param amount - valid between 1-100
	*/
	darken(amount = 10) {
		const hsl = this.toHsl();
		hsl.l -= amount / 100;
		hsl.l = clamp01(hsl.l);
		return new TinyColor(hsl);
	}
	/**
	* Mix the color with pure white, from 0 to 100.
	* Providing 0 will do nothing, providing 100 will always return white.
	* @param amount - valid between 1-100
	*/
	tint(amount = 10) {
		return this.mix("white", amount);
	}
	/**
	* Mix the color with pure black, from 0 to 100.
	* Providing 0 will do nothing, providing 100 will always return black.
	* @param amount - valid between 1-100
	*/
	shade(amount = 10) {
		return this.mix("black", amount);
	}
	/**
	* Desaturate the color a given amount, from 0 to 100.
	* Providing 100 will is the same as calling greyscale
	* @param amount - valid between 1-100
	*/
	desaturate(amount = 10) {
		const hsl = this.toHsl();
		hsl.s -= amount / 100;
		hsl.s = clamp01(hsl.s);
		return new TinyColor(hsl);
	}
	/**
	* Saturate the color a given amount, from 0 to 100.
	* @param amount - valid between 1-100
	*/
	saturate(amount = 10) {
		const hsl = this.toHsl();
		hsl.s += amount / 100;
		hsl.s = clamp01(hsl.s);
		return new TinyColor(hsl);
	}
	/**
	* Completely desaturates a color into greyscale.
	* Same as calling `desaturate(100)`
	*/
	greyscale() {
		return this.desaturate(100);
	}
	/**
	* Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	* Values outside of this range will be wrapped into this range.
	*/
	spin(amount) {
		const hsl = this.toHsl();
		const hue = (hsl.h + amount) % 360;
		hsl.h = hue < 0 ? 360 + hue : hue;
		return new TinyColor(hsl);
	}
	/**
	* Mix the current color a given amount with another color, from 0 to 100.
	* 0 means no mixing (return current color).
	*/
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
	/**
	* taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
	*/
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
	/**
	* Compute how the color would appear on a background
	*/
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
	/**
	* Alias for `polyad(3)`
	*/
	triad() {
		return this.polyad(3);
	}
	/**
	* Alias for `polyad(4)`
	*/
	tetrad() {
		return this.polyad(4);
	}
	/**
	* Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
	* monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
	*/
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
	/**
	* compare color vs current color
	*/
	equals(color) {
		const comparedColor = new TinyColor(color);
		/**
		* RGB and CMYK do not have the same color gamut, so a CMYK conversion will never be 100%.
		* This means we need to compare CMYK to CMYK to ensure accuracy of the equals function.
		*/
		if (this.format === "cmyk" || comparedColor.format === "cmyk") return this.toCmykString() === comparedColor.toCmykString();
		return this.toRgbString() === comparedColor.toRgbString();
	}
};
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
var button_default = /* @__PURE__ */ defineComponent({
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
			/** @description button html element */
			ref: _ref,
			/** @description button size */
			size: _size,
			/** @description button type */
			type: _type,
			/** @description button disabled */
			disabled: _disabled,
			/** @description whether adding space */
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
var button_group_default = /* @__PURE__ */ defineComponent({
	name: "ElButtonGroup",
	__name: "button-group",
	props: {
		/**
		* @description control the size of buttons in this button-group
		*/
		size: buttonProps.size,
		/**
		* @description control the type of buttons in this button-group
		*/
		type: buttonProps.type,
		/**
		* @description display direction
		*/
		direction: {
			type: definePropType(String),
			values: ["horizontal", "vertical"],
			default: "horizontal"
		}
	},
	setup(__props) {
		const props = __props;
		provide(buttonGroupContextKey, /* @__PURE__ */ reactive({
			size: /* @__PURE__ */ toRef(props, "size"),
			type: /* @__PURE__ */ toRef(props, "type")
		}));
		const ns = useNamespace("button");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([unref(ns).b("group"), unref(ns).bm("group", props.direction)]) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ElButton = withInstall(button_default, { ButtonGroup: button_group_default });
withNoopInstall(button_group_default);
var nodeList = /* @__PURE__ */ new Map();
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
var ClickOutside = {
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
var SCOPE = "_RepeatClick";
var vRepeatClick = {
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
/**
* @deprecated Removed after 3.0.0, Use `TagProps` instead.
*/
var tagProps = buildProps({
	/**
	* @description type of Tag
	*/
	type: {
		type: String,
		values: [
			"primary",
			"success",
			"info",
			"warning",
			"danger"
		],
		default: "primary"
	},
	/**
	* @description whether Tag can be removed
	*/
	closable: Boolean,
	/**
	* @description whether to disable animations
	*/
	disableTransitions: Boolean,
	/**
	* @description whether Tag has a highlighted border
	*/
	hit: Boolean,
	/**
	* @description background color of the Tag
	*/
	color: String,
	/**
	* @description size of Tag
	*/
	size: {
		type: String,
		values: componentSizes
	},
	/**
	* @description theme of Tag
	*/
	effect: {
		type: String,
		values: [
			"dark",
			"light",
			"plain"
		],
		default: "light"
	},
	/**
	* @description whether Tag is rounded
	*/
	round: Boolean
});
var tagEmits = {
	close: (evt) => evt instanceof MouseEvent,
	click: (evt) => evt instanceof MouseEvent
};
var _hoisted_1$16 = ["aria-label"];
var _hoisted_2$8 = ["aria-label"];
var ElTag = withInstall(/* @__PURE__ */ defineComponent({
	name: "ElTag",
	__name: "tag",
	props: tagProps,
	emits: tagEmits,
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const tagSize = useFormSize();
		const { t } = useLocale();
		const ns = useNamespace("tag");
		const containerKls = computed(() => {
			const { type, hit, effect, closable, round } = props;
			return [
				ns.b(),
				ns.is("closable", closable),
				ns.m(type || "primary"),
				ns.m(tagSize.value),
				ns.m(effect),
				ns.is("hit", hit),
				ns.is("round", round)
			];
		});
		const handleClose = (event) => {
			emit("close", event);
		};
		const handleClick = (event) => {
			emit("click", event);
		};
		const handleVNodeMounted = (vnode) => {
			if (vnode?.component?.subTree?.component?.bum) vnode.component.subTree.component.bum = null;
		};
		return (_ctx, _cache) => {
			return __props.disableTransitions ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(containerKls.value),
				style: normalizeStyle({ backgroundColor: __props.color }),
				onClick: handleClick
			}, [createBaseVNode("span", { class: normalizeClass(unref(ns).e("content")) }, [renderSlot(_ctx.$slots, "default")], 2), __props.closable ? (openBlock(), createElementBlock("button", {
				key: 0,
				"aria-label": unref(t)("el.tag.close"),
				class: normalizeClass(unref(ns).e("close")),
				type: "button",
				onClick: withModifiers(handleClose, ["stop"])
			}, [createVNode(unref(ElIcon), null, {
				default: withCtx(() => [createVNode(unref(close_default))]),
				_: 1
			})], 10, _hoisted_1$16)) : createCommentVNode("v-if", true)], 6)) : (openBlock(), createBlock(Transition, {
				key: 1,
				name: `${unref(ns).namespace.value}-zoom-in-center`,
				appear: "",
				onVnodeMounted: handleVNodeMounted
			}, {
				default: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(containerKls.value),
					style: normalizeStyle({ backgroundColor: __props.color }),
					onClick: handleClick
				}, [createBaseVNode("span", { class: normalizeClass(unref(ns).e("content")) }, [renderSlot(_ctx.$slots, "default")], 2), __props.closable ? (openBlock(), createElementBlock("button", {
					key: 0,
					"aria-label": unref(t)("el.tag.close"),
					class: normalizeClass(unref(ns).e("close")),
					type: "button",
					onClick: withModifiers(handleClose, ["stop"])
				}, [createVNode(unref(ElIcon), null, {
					default: withCtx(() => [createVNode(unref(close_default))]),
					_: 1
				})], 10, _hoisted_2$8)) : createCommentVNode("v-if", true)], 6)]),
				_: 3
			}, 8, ["name"]));
		};
	}
}));
var ElCard = withInstall(/* @__PURE__ */ defineComponent({
	name: "ElCard",
	__name: "card",
	props: buildProps({
		/**
		* @description title of the card. Also accepts a DOM passed by `slot#header`
		*/
		header: {
			type: String,
			default: ""
		},
		/**
		* @description content of footer. Also accepts a DOM passed by `slot#footer`
		*/
		footer: {
			type: String,
			default: ""
		},
		/**
		* @description CSS style of card body
		*/
		bodyStyle: {
			type: definePropType([
				String,
				Object,
				Array,
				Boolean
			]),
			default: ""
		},
		/**
		* @description custom class name of card footer
		*/
		headerClass: {
			type: definePropType([
				String,
				Array,
				Object,
				Boolean
			]),
			default: void 0
		},
		/**
		* @description custom class name of card body
		*/
		bodyClass: {
			type: definePropType([
				String,
				Array,
				Object,
				Boolean
			]),
			default: void 0
		},
		/**
		* @description custom class name of card footer
		*/
		footerClass: {
			type: definePropType([
				String,
				Array,
				Object,
				Boolean
			]),
			default: void 0
		},
		/**
		* @description when to show card shadows
		*/
		shadow: {
			type: String,
			values: [
				"always",
				"hover",
				"never"
			],
			default: void 0
		}
	}),
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
}));
var useWheel = ({ atEndEdge, atStartEdge, layout }, onWheelDelta) => {
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
var ElCollapseTransition = withInstall(/* @__PURE__ */ defineComponent({
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
}));
/**
* @deprecated Removed after 3.0.0, Use `ColorPickerPanelProps` instead.
*/
var colorPickerPanelProps = buildProps({
	/**
	* @description binding value
	*/
	modelValue: {
		type: definePropType(String),
		default: void 0
	},
	/**
	* @description whether the color picker is bordered
	*/
	border: {
		type: Boolean,
		default: true
	},
	/**
	* @description whether to display the alpha slider
	*/
	showAlpha: Boolean,
	/**
	* @description color format of v-model
	*/
	colorFormat: { type: definePropType(String) },
	/**
	* @description whether to disable the color picker
	*/
	disabled: Boolean,
	/**
	* @description predefined color options
	*/
	predefine: { type: definePropType(Array) },
	/**
	* @description whether to trigger form validation
	*/
	validateEvent: {
		type: Boolean,
		default: true
	},
	/**
	* @description class names will be passed to <hue-slider />
	*/
	hueSliderClass: {
		type: definePropType([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	/**
	* @description styles will be passed to <hue-slider />
	*/
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
var colorPickerPanelEmits = { [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNil(val) };
var ROOT_COMMON_COLOR_INJECTION_KEY = Symbol("colorCommonPickerKey");
var colorPickerPanelContextKey = Symbol("colorPickerPanelContextKey");
/**
* @deprecated Removed after 3.0.0, Use `AlphaSliderProps` instead.
*/
var alphaSliderProps = buildProps({
	color: {
		type: definePropType(Object),
		required: true
	},
	vertical: Boolean,
	disabled: Boolean
});
/**
* @deprecated Removed after 3.0.0, Use `HueSliderProps` instead.
*/
var hueSliderProps = alphaSliderProps;
var getClientXY = (event) => {
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
var isDragging = false;
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
var useSlider = (props, { key, minValue, maxValue }) => {
	const instance = getCurrentInstance();
	const thumb = /* @__PURE__ */ shallowRef();
	const bar = /* @__PURE__ */ shallowRef();
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
var useSliderDOM = (props, { namespace, maxValue, bar, thumb, currentValue, handleDrag, getBackground }) => {
	const instance = getCurrentInstance();
	const ns = useNamespace(namespace);
	const thumbLeft = /* @__PURE__ */ ref(0);
	const thumbTop = /* @__PURE__ */ ref(0);
	const background = /* @__PURE__ */ ref();
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
var _hoisted_1$15 = [
	"aria-label",
	"aria-valuenow",
	"aria-valuetext",
	"aria-orientation",
	"tabindex",
	"aria-disabled"
];
var minValue$1 = 0;
var maxValue$1 = 100;
var alpha_slider_default = /* @__PURE__ */ defineComponent({
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
			/**
			* @description update alpha slider manually
			* @type {Function}
			*/
			update,
			/**
			* @description bar element ref
			* @type {HTMLElement}
			*/
			bar,
			/**
			* @description thumb element ref
			* @type {HTMLElement}
			*/
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
var _hoisted_1$14 = [
	"aria-label",
	"aria-valuenow",
	"aria-valuetext",
	"aria-orientation",
	"tabindex",
	"aria-disabled"
];
var minValue = 0;
var maxValue = 360;
var hue_slider_default = /* @__PURE__ */ defineComponent({
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
			/**
			* @description bar element ref
			*/
			bar,
			/**
			* @description thumb element ref
			*/
			thumb,
			/**
			* @description thumb top position, only for vertical slider
			*/
			thumbTop,
			/**
			* @description update hue slider manually
			*/
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
/**
* @deprecated Removed after 3.0.0, Use `PredefineProps` instead.
*/
var predefineProps = buildProps({
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
var Color = class {
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
var usePredefine = (props) => {
	const { currentColor } = inject(colorPickerPanelContextKey);
	const rgbaColors = /* @__PURE__ */ ref(parseColors(props.colors, props.color));
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
var usePredefineDOM = (props) => {
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
var _hoisted_1$13 = [
	"disabled",
	"aria-label",
	"onClick"
];
var predefine_default = /* @__PURE__ */ defineComponent({
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
/**
* @deprecated Removed after 3.0.0, Use `SvPanelProps` instead.
*/
var svPanelProps = buildProps({
	color: {
		type: definePropType(Object),
		required: true
	},
	disabled: Boolean
});
var useSvPanel = (props) => {
	const instance = getCurrentInstance();
	const cursorRef = /* @__PURE__ */ ref();
	const cursorTop = /* @__PURE__ */ ref(0);
	const cursorLeft = /* @__PURE__ */ ref(0);
	const background = /* @__PURE__ */ ref("hsl(0, 100%, 50%)");
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
var useSvPanelDOM = (props, { cursorTop, cursorLeft, background, handleDrag }) => {
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
var _hoisted_1$12 = [
	"tabindex",
	"aria-disabled",
	"aria-label",
	"aria-valuenow",
	"aria-valuetext"
];
var sv_panel_default = /* @__PURE__ */ defineComponent({
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
		__expose({ 
		/**
		* @description update sv panel manually
		*/
update });
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
var useCommonColor = (props, emit) => {
	const color = /* @__PURE__ */ reactive(new Color({
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
var ElColorPickerPanel = withInstall(/* @__PURE__ */ defineComponent({
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
		const hueRef = /* @__PURE__ */ ref();
		const svRef = /* @__PURE__ */ ref();
		const alphaRef = /* @__PURE__ */ ref();
		const inputRef = /* @__PURE__ */ ref();
		const customInput = /* @__PURE__ */ ref("");
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
			/**
			* @description current color object
			*/
			color,
			/**
			* @description custom input ref
			*/
			inputRef,
			/**
			* @description update sub components
			*/
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
}));
/**
* @deprecated Removed after 3.0.0, Use `ColorPickerProps` instead.
*/
var colorPickerProps = buildProps({
	/**
	* @description when color-picker inactive and persistent is false, the color panel will be destroyed
	*/
	persistent: {
		type: Boolean,
		default: true
	},
	/**
	* @description binding value
	*/
	modelValue: {
		type: definePropType(String),
		default: void 0
	},
	/**
	* @description ColorPicker id
	*/
	id: String,
	/**
	* @description whether to display the alpha slider
	*/
	showAlpha: Boolean,
	/**
	* @description color format of v-model
	*/
	colorFormat: { type: definePropType(String) },
	/**
	* @description whether to disable the ColorPicker
	*/
	disabled: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description whether to show clear button
	*/
	clearable: {
		type: Boolean,
		default: true
	},
	/**
	* @description size of ColorPicker
	*/
	size: useSizeProp,
	/**
	* @description custom class name for ColorPicker's dropdown
	*/
	popperClass: useTooltipContentProps.popperClass,
	/**
	* @description custom style for ColorPicker's dropdown
	*/
	popperStyle: useTooltipContentProps.popperStyle,
	/**
	* @description ColorPicker tabindex
	*/
	tabindex: {
		type: [String, Number],
		default: 0
	},
	/**
	* @description whether color-picker popper is teleported to the body
	*/
	teleported: useTooltipContentProps.teleported,
	/**
	* @description which color-picker panel appends to
	*/
	appendTo: useTooltipContentProps.appendTo,
	/**
	* @description predefined color options
	*/
	predefine: { type: definePropType(Array) },
	/**
	* @description whether to trigger form validation
	*/
	validateEvent: {
		type: Boolean,
		default: true
	},
	...useEmptyValuesProps,
	...useAriaProps(["ariaLabel"])
});
var colorPickerEmits = {
	[UPDATE_MODEL_EVENT]: (val) => isString(val) || isNil(val),
	[CHANGE_EVENT]: (val) => isString(val) || isNil(val),
	activeChange: (val) => isString(val) || isNil(val),
	focus: (evt) => evt instanceof FocusEvent,
	blur: (evt) => evt instanceof FocusEvent,
	clear: () => true
};
var _hoisted_1$11 = [
	"id",
	"aria-label",
	"aria-labelledby",
	"aria-description",
	"aria-disabled",
	"tabindex"
];
var ElColorPicker = withInstall(/* @__PURE__ */ defineComponent({
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
		const popper = /* @__PURE__ */ ref();
		const triggerRef = /* @__PURE__ */ ref();
		const pickerPanelRef = /* @__PURE__ */ ref();
		const showPicker = /* @__PURE__ */ ref(false);
		const showPanelColor = /* @__PURE__ */ ref(false);
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
			/**
			* @description current color object
			*/
			color,
			/**
			* @description manually show ColorPicker
			*/
			show,
			/**
			* @description manually hide ColorPicker
			*/
			hide,
			/**
			* @description focus the input element
			*/
			focus,
			/**
			* @description blur the input element
			*/
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
}));
/**
* @deprecated Removed after 3.0.0, Use `DialogContentProps` instead.
*/
var dialogContentProps = buildProps({
	/**
	* @description whether to align the header and footer in center
	*/
	center: Boolean,
	/**
	* @description whether to align the dialog both horizontally and vertically
	*/
	alignCenter: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description custom close icon, default is Close
	*/
	closeIcon: { type: iconPropType },
	/**
	* @description enable dragging feature for Dialog
	*/
	draggable: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description draggable Dialog can overflow the viewport
	*/
	overflow: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description whether the Dialog takes up full screen
	*/
	fullscreen: Boolean,
	/**
	* @description custom class names for header wrapper
	*/
	headerClass: {
		type: definePropType([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	/**
	* @description custom class names for body wrapper
	*/
	bodyClass: {
		type: definePropType([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	/**
	* @description custom class names for footer wrapper
	*/
	footerClass: {
		type: definePropType([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	/**
	* @description whether to show a close button
	*/
	showClose: {
		type: Boolean,
		default: true
	},
	/**
	* @description title of Dialog. Can also be passed with a named slot (see the following table)
	*/
	title: {
		type: String,
		default: ""
	},
	/**
	* @description header's aria-level attribute
	*/
	ariaLevel: {
		type: String,
		default: "2"
	}
});
var dialogContentEmits = { close: () => true };
/**
* @deprecated Removed after 3.0.0, Use `DialogProps` instead.
*/
var dialogProps = buildProps({
	...dialogContentProps,
	/**
	* @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true`
	*/
	appendToBody: Boolean,
	/**
	* @description which element the Dialog appends to
	*/
	appendTo: {
		type: definePropType([String, Object]),
		default: "body"
	},
	/**
	* @description callback before Dialog closes, and it will prevent Dialog from closing, use done to close the dialog
	*/
	beforeClose: { type: definePropType(Function) },
	/**
	* @description destroy elements in Dialog when closed
	*/
	destroyOnClose: Boolean,
	/**
	* @description whether the Dialog can be closed by clicking the mask
	*/
	closeOnClickModal: {
		type: Boolean,
		default: true
	},
	/**
	* @description whether the Dialog can be closed by pressing ESC
	*/
	closeOnPressEscape: {
		type: Boolean,
		default: true
	},
	/**
	* @description whether scroll of body is disabled while Dialog is displayed
	*/
	lockScroll: {
		type: Boolean,
		default: true
	},
	/**
	* @description whether a mask is displayed
	*/
	modal: {
		type: Boolean,
		default: true
	},
	/**
	* @description whether the mask is penetrable
	*/
	modalPenetrable: Boolean,
	/**
	* @description the Time(milliseconds) before open
	*/
	openDelay: {
		type: Number,
		default: 0
	},
	/**
	* @description the Time(milliseconds) before close
	*/
	closeDelay: {
		type: Number,
		default: 0
	},
	/**
	* @description value for `margin-top` of Dialog CSS, default is 15vh
	*/
	top: { type: String },
	/**
	* @description visibility of Dialog
	*/
	modelValue: Boolean,
	/**
	* @description custom class names for mask
	*/
	modalClass: {
		type: definePropType([
			String,
			Array,
			Object,
			Boolean
		]),
		default: void 0
	},
	/**
	* @description width of Dialog, default is 50%
	*/
	width: { type: [String, Number] },
	/**
	* @description same as z-index in native CSS, z-order of dialog
	*/
	zIndex: { type: Number },
	trapFocus: Boolean,
	/**
	* @description header's aria-level attribute
	*/
	headerAriaLevel: {
		type: String,
		default: "2"
	},
	/**
	* @description custom transition configuration for dialog animation, it can be a string (transition name) or an object with Vue transition props
	*/
	transition: {
		type: definePropType([String, Object]),
		default: void 0
	}
});
var dialogEmits = {
	open: () => true,
	opened: () => true,
	close: () => true,
	closed: () => true,
	[UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
	openAutoFocus: () => true,
	closeAutoFocus: () => true
};
var overlayProps = buildProps({
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
var overlayEmits = { click: (evt) => evt instanceof MouseEvent };
var BLOCK = "overlay";
var ElOverlay = /* @__PURE__ */ defineComponent({
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
var dialogInjectionKey = Symbol("dialogInjectionKey");
var DEFAULT_DIALOG_TRANSITION = "dialog-fade";
var COMPONENT_NAME$4 = "ElDialog";
var useDialog = (props, targetRef) => {
	const emit = getCurrentInstance().emit;
	const { nextZIndex } = useZIndex();
	let lastPosition = "";
	const titleId = useId();
	const bodyId = useId();
	const visible = /* @__PURE__ */ ref(false);
	const closed = /* @__PURE__ */ ref(false);
	const rendered = /* @__PURE__ */ ref(false);
	const zIndex = /* @__PURE__ */ ref(props.zIndex ?? nextZIndex());
	const closing = /* @__PURE__ */ ref(false);
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
var composeRefs = (...refs) => {
	return (el) => {
		refs.forEach((ref) => {
			ref.value = el;
		});
	};
};
var _hoisted_1$10 = ["aria-level"];
var _hoisted_2$7 = ["aria-label"];
var _hoisted_3$5 = ["id"];
var dialog_content_default = /* @__PURE__ */ defineComponent({
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
		const { resetPosition, updatePosition, isDragging } = useDraggable(dialogRef, headerRef, draggable, computed(() => !!props.overflow));
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
var _hoisted_1$9 = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
];
var ElDialog = withInstall(/* @__PURE__ */ defineComponent({
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
		const dialogRef = /* @__PURE__ */ ref();
		const headerRef = /* @__PURE__ */ ref();
		const dialogContentRef = /* @__PURE__ */ ref();
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
			/** @description whether the dialog is visible */
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
}));
/**
* @deprecated Removed after 3.0.0, Use `InputNumberProps` instead.
*/
var inputNumberProps = buildProps({
	/**
	* @description same as `id` in native input
	*/
	id: {
		type: String,
		default: void 0
	},
	/**
	* @description incremental step
	*/
	step: {
		type: Number,
		default: 1
	},
	/**
	* @description whether input value can only be multiple of step
	*/
	stepStrictly: Boolean,
	/**
	* @description the maximum allowed value
	*/
	max: {
		type: Number,
		default: Number.MAX_SAFE_INTEGER
	},
	/**
	* @description the minimum allowed value
	*/
	min: {
		type: Number,
		default: Number.MIN_SAFE_INTEGER
	},
	/**
	* @description binding value
	*/
	modelValue: { type: [Number, null] },
	/**
	* @description same as `readonly` in native input
	*/
	readonly: Boolean,
	/**
	* @description whether the component is disabled
	*/
	disabled: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description size of the component
	*/
	size: useSizeProp,
	/**
	* @description whether to enable the control buttons
	*/
	controls: {
		type: Boolean,
		default: true
	},
	/**
	* @description position of the control buttons
	*/
	controlsPosition: {
		type: String,
		default: "",
		values: ["", "right"]
	},
	/**
	* @description value should be set when input box is cleared
	*/
	valueOnClear: {
		type: definePropType([
			String,
			Number,
			null
		]),
		validator: (val) => val === null || isNumber(val) || ["min", "max"].includes(val),
		default: null
	},
	/**
	* @description same as `name` in native input
	*/
	name: String,
	/**
	* @description same as `placeholder` in native input
	*/
	placeholder: String,
	/**
	* @description precision of input value
	*/
	precision: {
		type: Number,
		validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
	},
	/**
	* @description whether to trigger form validation
	*/
	validateEvent: {
		type: Boolean,
		default: true
	},
	...useAriaProps(["ariaLabel"]),
	/**
	* @description native input mode for virtual keyboards
	*/
	inputmode: {
		type: definePropType(String),
		default: void 0
	},
	/**
	* @description alignment for the inner input text
	*/
	align: {
		type: definePropType(String),
		default: "center"
	},
	/**
	* @description whether to disable scientific notation input (e.g. 'e', 'E')
	*/
	disabledScientific: Boolean,
	/**
	* @description specifies the format of the value presented in the input
	*/
	formatter: { type: Function },
	/**
	* @description specifies the value extracted from the formatted input
	*/
	parser: { type: Function },
	/**
	* @description same as `tabindex` in native input
	*/
	tabindex: {
		type: [String, Number],
		default: 0
	}
});
var inputNumberEmits = {
	[CHANGE_EVENT]: (cur, prev) => prev !== cur,
	blur: (e) => e instanceof FocusEvent,
	focus: (e) => e instanceof FocusEvent,
	[INPUT_EVENT]: (val) => isNumber(val) || isNil(val),
	[UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isNil(val)
};
var _hoisted_1$8 = ["aria-label"];
var _hoisted_2$6 = ["aria-label"];
var ElInputNumber = withInstall(/* @__PURE__ */ defineComponent({
	name: "ElInputNumber",
	__name: "input-number",
	props: inputNumberProps,
	emits: inputNumberEmits,
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useLocale();
		const ns = useNamespace("input-number");
		const input = /* @__PURE__ */ ref();
		const data = /* @__PURE__ */ reactive({
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
			/** @description get focus the input component */
			focus,
			/** @description remove focus the input component */
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
}));
var isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
/**
* @deprecated Removed after 3.0.0, Use `SwitchProps` instead.
*/
var switchProps = buildProps({
	/**
	* @description binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type
	*/
	modelValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: false
	},
	/**
	* @description whether Switch is disabled
	*/
	disabled: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description whether Switch is in loading state
	*/
	loading: Boolean,
	/**
	* @description size of Switch
	*/
	size: {
		type: String,
		validator: isValidComponentSize
	},
	/**
	* @description width of Switch
	*/
	width: {
		type: [String, Number],
		default: ""
	},
	/**
	* @description whether icon or text is displayed inside dot, only the first character will be rendered for text
	*/
	inlinePrompt: Boolean,
	/**
	* @description component of the icon displayed in action when in `off` state
	*/
	inactiveActionIcon: { type: iconPropType },
	/**
	* @description component of the icon displayed in action when in `on` state
	*/
	activeActionIcon: { type: iconPropType },
	/**
	* @description component of the icon displayed when in `on` state, overrides `active-text`
	*/
	activeIcon: { type: iconPropType },
	/**
	* @description component of the icon displayed when in `off` state, overrides `inactive-text`
	*/
	inactiveIcon: { type: iconPropType },
	/**
	* @description text displayed when in `on` state
	*/
	activeText: {
		type: String,
		default: ""
	},
	/**
	* @description text displayed when in `off` state
	*/
	inactiveText: {
		type: String,
		default: ""
	},
	/**
	* @description switch value when in `on` state
	*/
	activeValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: true
	},
	/**
	* @description switch value when in `off` state
	*/
	inactiveValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: false
	},
	/**
	* @description input name of Switch
	*/
	name: {
		type: String,
		default: ""
	},
	/**
	* @description whether to trigger form validation
	*/
	validateEvent: {
		type: Boolean,
		default: true
	},
	/**
	* @description before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching
	*/
	beforeChange: { type: definePropType(Function) },
	/**
	* @description id for input
	*/
	id: String,
	/**
	* @description tabindex for input
	*/
	tabindex: { type: [String, Number] },
	...useAriaProps(["ariaLabel"])
});
var switchEmits = {
	[UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
	[CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
	[INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
};
var _hoisted_1$7 = [
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
var _hoisted_2$5 = ["aria-hidden"];
var _hoisted_3$4 = { key: 1 };
var _hoisted_4$4 = { key: 1 };
var _hoisted_5$4 = ["aria-hidden"];
var COMPONENT_NAME$3 = "ElSwitch";
var ElSwitch = withInstall(/* @__PURE__ */ defineComponent({
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
		const isControlled = /* @__PURE__ */ ref(props.modelValue !== false);
		const input = /* @__PURE__ */ shallowRef();
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
			/**
			*  @description manual focus to the switch component
			**/
			focus,
			/**
			* @description whether Switch is checked
			*/
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
}));
var tabsRootContextKey = Symbol("tabsRootContextKey");
/**
* @deprecated Removed after 3.0.0, Use `TabBarProps` instead.
*/
var tabBarProps = buildProps({
	tabs: {
		type: definePropType(Array),
		default: () => mutable([])
	},
	tabRefs: {
		type: definePropType(Object),
		default: () => mutable({})
	}
});
var COMPONENT_NAME$2 = "ElTabBar";
var tab_bar_default = /* @__PURE__ */ defineComponent({
	name: COMPONENT_NAME$2,
	__name: "tab-bar",
	props: tabBarProps,
	setup(__props, { expose: __expose }) {
		const props = __props;
		const rootTabs = inject(tabsRootContextKey);
		if (!rootTabs) throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
		const ns = useNamespace("tabs");
		const barRef = /* @__PURE__ */ ref();
		const barStyle = /* @__PURE__ */ ref();
		const barReady = /* @__PURE__ */ ref(false);
		const mergedBarStyle = computed(() => {
			if (barReady.value) return barStyle.value;
			return {
				...barStyle.value,
				transition: "none"
			};
		});
		/**
		* when defaultValue is not set, the bar is always shown.
		*
		* when defaultValue is set, the bar will be hidden until style is calculated
		* to avoid the bar showing in the wrong position on initial render.
		*/
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
			/** @description tab root html element */
			ref: barRef,
			/** @description method to manually update tab bar style, return the updated style */
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
var TOUCH_SCROLL_THRESHOLD = 5;
var useTabNavTouch = ({ scrollable, navOffset, navSize, navContainerSize, isHorizontal }) => {
	const isTouchScrolling = /* @__PURE__ */ ref(false);
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
var tabNavProps = buildProps({
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
	/**
	* @description tab-nav tabindex
	*/
	tabindex: {
		type: [String, Number],
		default: void 0
	}
});
var tabNavEmits = {
	tabClick: (tab, tabName, ev) => ev instanceof Event,
	tabRemove: (tab, ev) => ev instanceof Event
};
var COMPONENT_NAME$1 = "ElTabNav";
var TabNav = /* @__PURE__ */ defineComponent({
	name: COMPONENT_NAME$1,
	props: tabNavProps,
	emits: tabNavEmits,
	setup(props, { expose, emit }) {
		const rootTabs = inject(tabsRootContextKey);
		if (!rootTabs) throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
		const ns = useNamespace("tabs");
		const visibility = useDocumentVisibility();
		const focused = useWindowFocus();
		const navScroll$ = /* @__PURE__ */ ref();
		const nav$ = /* @__PURE__ */ ref();
		const el$ = /* @__PURE__ */ ref();
		const tabRefsMap = /* @__PURE__ */ ref({});
		const tabBarRef = /* @__PURE__ */ ref();
		const scrollable = /* @__PURE__ */ ref(false);
		const navOffset = /* @__PURE__ */ ref(0);
		const isFocus = /* @__PURE__ */ ref(false);
		const focusable = /* @__PURE__ */ ref(true);
		const isWheelScrolling = /* @__PURE__ */ ref(false);
		const tracker = /* @__PURE__ */ shallowRef();
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
var tabsProps = buildProps({
	/**
	* @description type of Tab
	*/
	type: {
		type: String,
		values: [
			"card",
			"border-card",
			""
		],
		default: ""
	},
	/**
	* @description whether Tab is closable
	*/
	closable: Boolean,
	/**
	* @description whether Tab is addable
	*/
	addable: Boolean,
	/**
	* @description binding value, name of the selected tab
	*/
	modelValue: { type: [String, Number] },
	/**
	* @description initial value when `model-value` is not set
	*/
	defaultValue: { type: [String, Number] },
	/**
	* @description whether Tab is addable and closable
	*/
	editable: Boolean,
	/**
	* @description position of tabs
	*/
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
	/**
	* @description hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented
	*/
	beforeLeave: {
		type: definePropType(Function),
		default: () => true
	},
	/**
	* @description whether width of tab automatically fits its container
	*/
	stretch: Boolean,
	/**
	* @description tabs tabindex
	*/
	tabindex: {
		type: [String, Number],
		default: 0
	}
});
var isPaneName = (value) => isString(value) || isNumber(value);
var Tabs = /* @__PURE__ */ defineComponent({
	name: "ElTabs",
	props: tabsProps,
	emits: {
		[UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
		tabClick: (pane, ev) => ev instanceof Event,
		tabChange: (name) => isPaneName(name),
		edit: (paneName, action) => ["remove", "add"].includes(action),
		tabRemove: (name) => isPaneName(name),
		tabAdd: () => true
	},
	setup(props, { emit, slots, expose }) {
		const ns = useNamespace("tabs");
		const isVertical = computed(() => ["left", "right"].includes(props.tabPosition));
		const { children: panes, addChild: registerPane, removeChild: unregisterPane, ChildrenSorter: PanesSorter } = useOrderedChildren(getCurrentInstance(), "ElTabPane");
		const nav$ = /* @__PURE__ */ ref();
		const currentName = /* @__PURE__ */ ref((isUndefined(props.modelValue) ? props.defaultValue : props.modelValue) ?? "0");
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
/**
* @deprecated Removed after 3.0.0, Use `TabPaneProps` instead.
*/
var tabPaneProps = buildProps({
	/**
	* @description title of the tab
	*/
	label: {
		type: String,
		default: ""
	},
	/**
	* @description identifier corresponding to the name of Tabs, representing the alias of the tab-pane, the default is ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '0'
	*/
	name: { type: [String, Number] },
	/**
	* @description whether Tab is closable
	*/
	closable: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description whether Tab is disabled
	*/
	disabled: Boolean,
	/**
	* @description whether Tab is lazily rendered
	*/
	lazy: Boolean
});
var _hoisted_1$6 = [
	"id",
	"aria-hidden",
	"aria-labelledby"
];
var COMPONENT_NAME = "ElTabPane";
var tab_pane_default = /* @__PURE__ */ defineComponent({
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
		const paneRef = /* @__PURE__ */ ref();
		const index = /* @__PURE__ */ ref();
		const isClosable = computed(() => props.closable ?? tabsRoot.props.closable);
		const active = computed(() => tabsRoot.currentName.value === (props.name ?? index.value));
		const loaded = /* @__PURE__ */ ref(active.value);
		const paneName = computed(() => props.name ?? index.value);
		const shouldBeRender = computed(() => !props.lazy || loaded.value || active.value);
		const isFocusInsidePane = () => {
			return paneRef.value?.contains(document.activeElement);
		};
		watch(active, (val) => {
			if (val) loaded.value = true;
		});
		const pane = /* @__PURE__ */ reactive({
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
var ElTabs = withInstall(Tabs, { TabPane: tab_pane_default });
var ElTabPane = withNoopInstall(tab_pane_default);
var messageTypes = [
	"primary",
	"success",
	"info",
	"warning",
	"error"
];
var messagePlacement = [
	"top",
	"top-left",
	"top-right",
	"bottom",
	"bottom-left",
	"bottom-right"
];
var messageDefaults = mutable({
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
/**
* @deprecated Removed after 3.0.0, Use `MessageProps` instead.
*/
var messageProps = buildProps({
	/**
	* @description custom class name for Message
	*/
	customClass: {
		type: definePropType([
			String,
			Array,
			Object,
			Boolean
		]),
		default: messageDefaults.customClass
	},
	/**
	* @description whether `message` is treated as HTML string
	*/
	dangerouslyUseHTMLString: {
		type: Boolean,
		default: messageDefaults.dangerouslyUseHTMLString
	},
	/**
	* @description display duration, millisecond. If set to 0, it will not turn off automatically
	*/
	duration: {
		type: Number,
		default: messageDefaults.duration
	},
	/**
	* @description custom icon component, overrides `type`
	*/
	icon: {
		type: iconPropType,
		default: messageDefaults.icon
	},
	/**
	* @description message dom id
	*/
	id: {
		type: String,
		default: messageDefaults.id
	},
	/**
	* @description message text
	*/
	message: {
		type: definePropType([
			String,
			Object,
			Function
		]),
		default: messageDefaults.message
	},
	/**
	* @description callback function when closed with the message instance as the parameter
	*/
	onClose: {
		type: definePropType(Function),
		default: messageDefaults.onClose
	},
	/**
	* @description whether to show a close button
	*/
	showClose: {
		type: Boolean,
		default: messageDefaults.showClose
	},
	/**
	* @description message type
	*/
	type: {
		type: String,
		values: messageTypes,
		default: messageDefaults.type
	},
	/**
	* @description whether message is plain
	*/
	plain: {
		type: Boolean,
		default: messageDefaults.plain
	},
	/**
	* @description set the distance to the top of viewport
	*/
	offset: {
		type: Number,
		default: messageDefaults.offset
	},
	/**
	* @description message placement position
	*/
	placement: {
		type: String,
		values: messagePlacement,
		default: messageDefaults.placement
	},
	/**
	* @description message element zIndex value
	*/
	zIndex: {
		type: Number,
		default: messageDefaults.zIndex
	},
	/**
	* @description merge messages with the same content, type of VNode message is not supported
	*/
	grouping: {
		type: Boolean,
		default: messageDefaults.grouping
	},
	/**
	* @description The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
	*/
	repeatNum: {
		type: Number,
		default: messageDefaults.repeatNum
	}
});
var messageEmits = { destroy: () => true };
var placementInstances = /* @__PURE__ */ shallowReactive({});
var getOrCreatePlacementInstances = (placement) => {
	if (!placementInstances[placement]) placementInstances[placement] = /* @__PURE__ */ shallowReactive([]);
	return placementInstances[placement];
};
var getInstance = (id, placement) => {
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
var getLastOffset = (id, placement) => {
	const { prev } = getInstance(id, placement);
	if (!prev) return 0;
	return prev.vm.exposed.bottom.value;
};
var getOffsetOrSpace = (id, offset, placement) => {
	return (placementInstances[placement] || []).findIndex((instance) => instance.id === id) > 0 ? 16 : offset;
};
var _hoisted_1$5 = ["id"];
var _hoisted_2$4 = ["innerHTML"];
var message_default = /* @__PURE__ */ defineComponent({
	name: "ElMessage",
	__name: "message",
	props: messageProps,
	emits: messageEmits,
	setup(__props, { expose: __expose, emit: __emit }) {
		const { Close } = TypeComponents;
		const props = __props;
		const emit = __emit;
		const isStartTransition = /* @__PURE__ */ ref(false);
		const { ns, zIndex } = useGlobalComponentSettings("message");
		const { currentZIndex, nextZIndex } = zIndex;
		const messageRef = /* @__PURE__ */ ref();
		const visible = /* @__PURE__ */ ref(false);
		const height = /* @__PURE__ */ ref(0);
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
var seed = 1;
var normalizeAppendTo = (normalized) => {
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
var normalizePlacement = (normalized) => {
	if (!normalized.placement && isString(messageConfig.placement) && messageConfig.placement) normalized.placement = messageConfig.placement;
	if (!normalized.placement) normalized.placement = "top";
	if (!messagePlacement.includes(normalized.placement)) {
		debugWarn("ElMessage", `Invalid placement: ${normalized.placement}. Falling back to 'top'.`);
		normalized.placement = "top";
	}
};
var normalizeOptions = (params) => {
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
var closeMessage = (instance) => {
	const instances = placementInstances[instance.props.placement || "top"];
	const idx = instances.indexOf(instance);
	if (idx === -1) return;
	instances.splice(idx, 1);
	const { handler } = instance;
	handler.close();
};
var createMessage = ({ appendTo, ...options }, context) => {
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
var message = (options = {}, context) => {
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
		return message({
			...normalizeOptions(options),
			type
		}, appContext);
	};
});
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
message.closeAll = closeAll;
message.closeAllByPlacement = closeAllByPlacement;
message._context = null;
var ElMessage = withInstallFunction(message, "$message");
_css(":root{--el-color-white:#fff;--el-color-black:#000;--el-color-primary-rgb:64, 158, 255;--el-color-success-rgb:103, 194, 58;--el-color-warning-rgb:230, 162, 60;--el-color-danger-rgb:245, 108, 108;--el-color-error-rgb:245, 108, 108;--el-color-info-rgb:144, 147, 153;--el-font-size-extra-large:20px;--el-font-size-large:18px;--el-font-size-medium:16px;--el-font-size-base:14px;--el-font-size-small:13px;--el-font-size-extra-small:12px;--el-font-family:\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"微软雅黑\", Arial, sans-serif;--el-font-weight-primary:500;--el-font-line-height-primary:24px;--el-index-normal:1;--el-index-top:1000;--el-index-popper:2000;--el-border-radius-base:4px;--el-border-radius-small:2px;--el-border-radius-round:20px;--el-border-radius-circle:100%;--el-transition-duration:.3s;--el-transition-duration-fast:.2s;--el-transition-function-ease-in-out-bezier:cubic-bezier(.645, .045, .355, 1);--el-transition-function-fast-bezier:cubic-bezier(.23, 1, .32, 1);--el-transition-all:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);--el-transition-fade:opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-md-fade:transform var(--el-transition-duration) var(--el-transition-function-fast-bezier), opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-fade-linear:opacity var(--el-transition-duration-fast) linear;--el-transition-border:border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-box-shadow:box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-color:color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-component-size-large:40px;--el-component-size:32px;--el-component-size-small:24px;--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;--el-color-primary:#409eff;--el-color-primary-light-3:#79bbff;--el-color-primary-light-5:#a0cfff;--el-color-primary-light-7:#c6e2ff;--el-color-primary-light-8:#d9ecff;--el-color-primary-light-9:#ecf5ff;--el-color-primary-dark-2:#337ecc;--el-color-success:#67c23a;--el-color-success-light-3:#95d475;--el-color-success-light-5:#b3e19d;--el-color-success-light-7:#d1edc4;--el-color-success-light-8:#e1f3d8;--el-color-success-light-9:#f0f9eb;--el-color-success-dark-2:#529b2e;--el-color-warning:#e6a23c;--el-color-warning-light-3:#eebe77;--el-color-warning-light-5:#f3d19e;--el-color-warning-light-7:#f8e3c5;--el-color-warning-light-8:#faecd8;--el-color-warning-light-9:#fdf6ec;--el-color-warning-dark-2:#b88230;--el-color-danger:#f56c6c;--el-color-danger-light-3:#f89898;--el-color-danger-light-5:#fab6b6;--el-color-danger-light-7:#fcd3d3;--el-color-danger-light-8:#fde2e2;--el-color-danger-light-9:#fef0f0;--el-color-danger-dark-2:#c45656;--el-color-error:#f56c6c;--el-color-error-light-3:#f89898;--el-color-error-light-5:#fab6b6;--el-color-error-light-7:#fcd3d3;--el-color-error-light-8:#fde2e2;--el-color-error-light-9:#fef0f0;--el-color-error-dark-2:#c45656;--el-color-info:#909399;--el-color-info-light-3:#b1b3b8;--el-color-info-light-5:#c8c9cc;--el-color-info-light-7:#dedfe0;--el-color-info-light-8:#e9e9eb;--el-color-info-light-9:#f4f4f5;--el-color-info-dark-2:#73767a;--el-bg-color:#fff;--el-bg-color-page:#f2f3f5;--el-bg-color-overlay:#fff;--el-text-color-primary:#303133;--el-text-color-regular:#606266;--el-text-color-secondary:#909399;--el-text-color-placeholder:#a8abb2;--el-text-color-disabled:#c0c4cc;--el-border-color:#dcdfe6;--el-border-color-light:#e4e7ed;--el-border-color-lighter:#ebeef5;--el-border-color-extra-light:#f2f6fc;--el-border-color-dark:#d4d7de;--el-border-color-darker:#cdd0d6;--el-fill-color:#f0f2f5;--el-fill-color-light:#f5f7fa;--el-fill-color-lighter:#fafafa;--el-fill-color-extra-light:#fafcff;--el-fill-color-dark:#ebedf0;--el-fill-color-darker:#e6e8eb;--el-fill-color-blank:#fff;--el-box-shadow:0px 12px 32px 4px #0000000a, 0px 8px 20px #00000014;--el-box-shadow-light:0px 0px 12px #0000001f;--el-box-shadow-lighter:0px 0px 6px #0000001f;--el-box-shadow-dark:0px 16px 48px 16px #00000014, 0px 12px 32px #0000001f, 0px 8px 16px -8px #00000029;--el-disabled-bg-color:var(--el-fill-color-light);--el-disabled-text-color:var(--el-text-color-placeholder);--el-disabled-border-color:var(--el-border-color-light);--el-overlay-color:#000c;--el-overlay-color-light:#000000b3;--el-overlay-color-lighter:#00000080;--el-mask-color:#ffffffe6;--el-mask-color-extra-light:#ffffff4d;--el-border-width:1px;--el-border-style:solid;--el-border-color-hover:var(--el-text-color-disabled);--el-border:var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-svg-monochrome-grey:var(--el-border-color)}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:top;transform:scaleY(1)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:bottom;transform:scaleY(1)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:0 0;transform:scale(1)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out, var(--el-transition-duration) padding-left ease-in-out, var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.el-icon{--color:inherit;fill:currentColor;width:1em;height:1em;color:var(--color);line-height:1em;font-size:inherit;justify-content:center;align-items:center;display:inline-flex;position:relative}.el-icon.is-loading{animation:2s linear infinite rotating}.el-icon svg{width:1em;height:1em}");
_css(".el-overlay{z-index:2000;background-color:var(--el-overlay-color-lighter);height:100%;position:fixed;inset:0;overflow:auto}.el-overlay .el-overlay-root{height:0}");
_css(":root{--el-popup-modal-bg-color:var(--el-color-black);--el-popup-modal-opacity:.5}.v-modal-enter{animation:v-modal-in var(--el-transition-duration-fast) ease}.v-modal-leave{animation:v-modal-out var(--el-transition-duration-fast) ease forwards}@keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{width:100%;height:100%;opacity:var(--el-popup-modal-opacity);background:var(--el-popup-modal-bg-color);position:fixed;top:0;left:0}.el-popup-parent--hidden{overflow:hidden}.el-dialog{--el-dialog-width:50%;--el-dialog-margin-top:15vh;--el-dialog-bg-color:var(--el-bg-color);--el-dialog-box-shadow:var(--el-box-shadow);--el-dialog-title-font-size:var(--el-font-size-large);--el-dialog-content-font-size:14px;--el-dialog-font-line-height:var(--el-font-line-height-primary);--el-dialog-padding-primary:16px;--el-dialog-border-radius:var(--el-border-radius-base);margin:var(--el-dialog-margin-top,15vh) auto 50px;background:var(--el-dialog-bg-color);border-radius:var(--el-dialog-border-radius);box-shadow:var(--el-dialog-box-shadow);box-sizing:border-box;padding:var(--el-dialog-padding-primary);width:var(--el-dialog-width,50%);overflow-wrap:break-word;position:relative}.el-dialog:focus{outline:none!important}.el-dialog.is-align-center{margin:auto}.el-dialog.is-fullscreen{--el-dialog-width:100%;--el-dialog-margin-top:0;border-radius:0;height:100%;margin-bottom:0;overflow:auto}.el-dialog__wrapper{margin:0;position:fixed;inset:0;overflow:auto}.el-dialog.is-draggable .el-dialog__header{cursor:move;-webkit-user-select:none;user-select:none}.el-dialog__header{padding-bottom:var(--el-dialog-padding-primary)}.el-dialog__header.show-close{padding-right:calc(var(--el-dialog-padding-primary) + var(--el-message-close-size,16px))}.el-dialog__headerbtn{cursor:pointer;width:48px;height:48px;font-size:var(--el-message-close-size,16px);background:0 0;border:none;outline:none;padding:0;position:absolute;top:0;right:0}.el-dialog__headerbtn .el-dialog__close{color:var(--el-color-info);font-size:inherit}.el-dialog__headerbtn:focus .el-dialog__close,.el-dialog__headerbtn:hover .el-dialog__close{color:var(--el-color-primary)}.el-dialog__title{line-height:var(--el-dialog-font-line-height);font-size:var(--el-dialog-title-font-size);color:var(--el-text-color-primary)}.el-dialog__body{color:var(--el-text-color-regular);font-size:var(--el-dialog-content-font-size)}.el-dialog__footer{padding-top:var(--el-dialog-padding-primary);text-align:right;box-sizing:border-box}.el-dialog--center{text-align:center}.el-dialog--center .el-dialog__body{text-align:initial}.el-dialog--center .el-dialog__footer{text-align:inherit}.el-modal-dialog.is-penetrable{pointer-events:none}.el-modal-dialog.is-penetrable .el-dialog{pointer-events:auto}.el-overlay-dialog{position:fixed;inset:0;overflow:auto}.el-overlay-dialog.is-closing .el-dialog{pointer-events:none}.dialog-fade-enter-active{animation:modal-fade-in var(--el-transition-duration)}.dialog-fade-enter-active .el-overlay-dialog{animation:dialog-fade-in var(--el-transition-duration)}.dialog-fade-leave-active{animation:modal-fade-out var(--el-transition-duration)}.dialog-fade-leave-active .el-overlay-dialog{animation:dialog-fade-out var(--el-transition-duration)}@keyframes dialog-fade-in{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translate(0)}}@keyframes dialog-fade-out{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translateY(-20px)}}@keyframes modal-fade-in{0%{opacity:0}to{opacity:1}}@keyframes modal-fade-out{0%{opacity:1}to{opacity:0}}");
_css(".el-button{--el-button-font-weight:var(--el-font-weight-primary);--el-button-border-color:var(--el-border-color);--el-button-bg-color:var(--el-fill-color-blank);--el-button-text-color:var(--el-text-color-regular);--el-button-disabled-text-color:var(--el-disabled-text-color);--el-button-disabled-bg-color:var(--el-fill-color-blank);--el-button-disabled-border-color:var(--el-border-color-light);--el-button-divide-border-color:#ffffff80;--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-7);--el-button-active-text-color:var(--el-button-hover-text-color);--el-button-active-border-color:var(--el-color-primary);--el-button-active-bg-color:var(--el-button-hover-bg-color);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-hover-link-text-color:var(--el-text-color-secondary);--el-button-active-color:var(--el-text-color-primary);white-space:nowrap;cursor:pointer;height:32px;color:var(--el-button-text-color);text-align:center;box-sizing:border-box;line-height:1;font-weight:var(--el-button-font-weight);-webkit-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;background-color:var(--el-button-bg-color);border:var(--el-border);border-color:var(--el-button-border-color);outline:none;justify-content:center;align-items:center;transition:all .1s;display:inline-flex}.el-button:hover{color:var(--el-button-hover-text-color);border-color:var(--el-button-hover-border-color);background-color:var(--el-button-hover-bg-color);outline:none}.el-button:active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button:focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset,outline}.el-button>span{align-items:center;display:inline-flex}.el-button+.el-button{margin-left:12px}.el-button{font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base);padding:8px 15px}.el-button.is-round{padding:8px 15px}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon]+span{margin-left:6px}.el-button [class*=el-icon] svg{vertical-align:bottom}.el-button.is-plain{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary)}.el-button.is-active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button.is-disabled,.el-button.is-disabled:hover{color:var(--el-button-disabled-text-color);cursor:not-allowed;background-image:none;background-color:var(--el-button-disabled-bg-color);border-color:var(--el-button-disabled-border-color)}.el-button.is-loading{pointer-events:none;position:relative}.el-button.is-loading:before{z-index:1;pointer-events:none;content:\"\";border-radius:inherit;background-color:var(--el-mask-color-extra-light);position:absolute;inset:-1px}.el-button.is-round{border-radius:var(--el-border-radius-round)}.el-button.is-dashed{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary);border-style:dashed}.el-button.is-circle{border-radius:50%;width:32px;padding:8px}.el-button.is-text{color:var(--el-button-text-color);background-color:#0000;border:0 solid #0000}.el-button.is-text.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important}.el-button.is-text:not(.is-disabled):hover{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled):focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset,outline}.el-button.is-text:not(.is-disabled):active{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled).is-has-bg:hover{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg:active{background-color:var(--el-fill-color-dark)}.el-button__text--expand{letter-spacing:.3em;margin-right:-.3em}.el-button.is-link{color:var(--el-button-text-color);background:0 0;border-color:#0000;height:auto;padding:2px}.el-button.is-link:hover{color:var(--el-button-hover-link-text-color)}.el-button.is-link.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important;border-color:#0000!important}.el-button.is-link:not(.is-disabled):hover{background-color:#0000;border-color:#0000}.el-button.is-link:not(.is-disabled):active{color:var(--el-button-active-color);background-color:#0000;border-color:#0000}.el-button--text{color:var(--el-color-primary);background:0 0;border-color:#0000;padding-left:0;padding-right:0}.el-button--text.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important;border-color:#0000!important}.el-button--text:not(.is-disabled):hover{color:var(--el-color-primary-light-3);background-color:#0000;border-color:#0000}.el-button--text:not(.is-disabled):active{color:var(--el-color-primary-dark-2);background-color:#0000;border-color:#0000}.el-button__link--expand{letter-spacing:.3em;margin-right:-.3em}.el-button--primary{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-primary);--el-button-border-color:var(--el-color-primary);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-active-color:var(--el-color-primary-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-primary-light-5);--el-button-hover-bg-color:var(--el-color-primary-light-3);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-bg-color:var(--el-color-primary-dark-2);--el-button-active-border-color:var(--el-color-primary-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-primary-light-5);--el-button-disabled-border-color:var(--el-color-primary-light-5)}.el-button--primary.is-plain,.el-button--primary.is-text,.el-button--primary.is-link{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-primary);--el-button-hover-border-color:var(--el-color-primary);--el-button-active-text-color:var(--el-color-white)}.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:hover,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-text.is-disabled,.el-button--primary.is-text.is-disabled:hover,.el-button--primary.is-text.is-disabled:focus,.el-button--primary.is-text.is-disabled:active,.el-button--primary.is-link.is-disabled,.el-button--primary.is-link.is-disabled:hover,.el-button--primary.is-link.is-disabled:focus,.el-button--primary.is-link.is-disabled:active{color:var(--el-color-primary-light-5);background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8)}.el-button--primary.is-dashed{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-text-color:var(--el-color-primary-dark-2);--el-button-active-bg-color:var(--el-color-primary-light-9);--el-button-active-border-color:var(--el-color-primary-dark-2)}.el-button--primary.is-dashed.is-disabled,.el-button--primary.is-dashed.is-disabled:hover,.el-button--primary.is-dashed.is-disabled:focus,.el-button--primary.is-dashed.is-disabled:active{color:var(--el-color-primary-light-5);background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8)}.el-button--success{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-success);--el-button-border-color:var(--el-color-success);--el-button-outline-color:var(--el-color-success-light-5);--el-button-active-color:var(--el-color-success-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-success-light-5);--el-button-hover-bg-color:var(--el-color-success-light-3);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-bg-color:var(--el-color-success-dark-2);--el-button-active-border-color:var(--el-color-success-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-success-light-5);--el-button-disabled-border-color:var(--el-color-success-light-5)}.el-button--success.is-plain,.el-button--success.is-text,.el-button--success.is-link{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-success);--el-button-hover-border-color:var(--el-color-success);--el-button-active-text-color:var(--el-color-white)}.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:hover,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-text.is-disabled,.el-button--success.is-text.is-disabled:hover,.el-button--success.is-text.is-disabled:focus,.el-button--success.is-text.is-disabled:active,.el-button--success.is-link.is-disabled,.el-button--success.is-link.is-disabled:hover,.el-button--success.is-link.is-disabled:focus,.el-button--success.is-link.is-disabled:active{color:var(--el-color-success-light-5);background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8)}.el-button--success.is-dashed{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-success);--el-button-hover-bg-color:var(--el-color-success-light-9);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-text-color:var(--el-color-success-dark-2);--el-button-active-bg-color:var(--el-color-success-light-9);--el-button-active-border-color:var(--el-color-success-dark-2)}.el-button--success.is-dashed.is-disabled,.el-button--success.is-dashed.is-disabled:hover,.el-button--success.is-dashed.is-disabled:focus,.el-button--success.is-dashed.is-disabled:active{color:var(--el-color-success-light-5);background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8)}.el-button--warning{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-warning);--el-button-border-color:var(--el-color-warning);--el-button-outline-color:var(--el-color-warning-light-5);--el-button-active-color:var(--el-color-warning-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-warning-light-5);--el-button-hover-bg-color:var(--el-color-warning-light-3);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-bg-color:var(--el-color-warning-dark-2);--el-button-active-border-color:var(--el-color-warning-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-warning-light-5);--el-button-disabled-border-color:var(--el-color-warning-light-5)}.el-button--warning.is-plain,.el-button--warning.is-text,.el-button--warning.is-link{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-warning);--el-button-hover-border-color:var(--el-color-warning);--el-button-active-text-color:var(--el-color-white)}.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:hover,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-text.is-disabled,.el-button--warning.is-text.is-disabled:hover,.el-button--warning.is-text.is-disabled:focus,.el-button--warning.is-text.is-disabled:active,.el-button--warning.is-link.is-disabled,.el-button--warning.is-link.is-disabled:hover,.el-button--warning.is-link.is-disabled:focus,.el-button--warning.is-link.is-disabled:active{color:var(--el-color-warning-light-5);background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8)}.el-button--warning.is-dashed{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-warning);--el-button-hover-bg-color:var(--el-color-warning-light-9);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-text-color:var(--el-color-warning-dark-2);--el-button-active-bg-color:var(--el-color-warning-light-9);--el-button-active-border-color:var(--el-color-warning-dark-2)}.el-button--warning.is-dashed.is-disabled,.el-button--warning.is-dashed.is-disabled:hover,.el-button--warning.is-dashed.is-disabled:focus,.el-button--warning.is-dashed.is-disabled:active{color:var(--el-color-warning-light-5);background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8)}.el-button--danger{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-danger);--el-button-border-color:var(--el-color-danger);--el-button-outline-color:var(--el-color-danger-light-5);--el-button-active-color:var(--el-color-danger-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-danger-light-5);--el-button-hover-bg-color:var(--el-color-danger-light-3);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-bg-color:var(--el-color-danger-dark-2);--el-button-active-border-color:var(--el-color-danger-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-danger-light-5);--el-button-disabled-border-color:var(--el-color-danger-light-5)}.el-button--danger.is-plain,.el-button--danger.is-text,.el-button--danger.is-link{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-danger);--el-button-hover-border-color:var(--el-color-danger);--el-button-active-text-color:var(--el-color-white)}.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:hover,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-text.is-disabled,.el-button--danger.is-text.is-disabled:hover,.el-button--danger.is-text.is-disabled:focus,.el-button--danger.is-text.is-disabled:active,.el-button--danger.is-link.is-disabled,.el-button--danger.is-link.is-disabled:hover,.el-button--danger.is-link.is-disabled:focus,.el-button--danger.is-link.is-disabled:active{color:var(--el-color-danger-light-5);background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8)}.el-button--danger.is-dashed{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-danger);--el-button-hover-bg-color:var(--el-color-danger-light-9);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-text-color:var(--el-color-danger-dark-2);--el-button-active-bg-color:var(--el-color-danger-light-9);--el-button-active-border-color:var(--el-color-danger-dark-2)}.el-button--danger.is-dashed.is-disabled,.el-button--danger.is-dashed.is-disabled:hover,.el-button--danger.is-dashed.is-disabled:focus,.el-button--danger.is-dashed.is-disabled:active{color:var(--el-color-danger-light-5);background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8)}.el-button--info{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-info);--el-button-border-color:var(--el-color-info);--el-button-outline-color:var(--el-color-info-light-5);--el-button-active-color:var(--el-color-info-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-info-light-5);--el-button-hover-bg-color:var(--el-color-info-light-3);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-bg-color:var(--el-color-info-dark-2);--el-button-active-border-color:var(--el-color-info-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-info-light-5);--el-button-disabled-border-color:var(--el-color-info-light-5)}.el-button--info.is-plain,.el-button--info.is-text,.el-button--info.is-link{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-info);--el-button-hover-border-color:var(--el-color-info);--el-button-active-text-color:var(--el-color-white)}.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:hover,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-text.is-disabled,.el-button--info.is-text.is-disabled:hover,.el-button--info.is-text.is-disabled:focus,.el-button--info.is-text.is-disabled:active,.el-button--info.is-link.is-disabled,.el-button--info.is-link.is-disabled:hover,.el-button--info.is-link.is-disabled:focus,.el-button--info.is-link.is-disabled:active{color:var(--el-color-info-light-5);background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8)}.el-button--info.is-dashed{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-info);--el-button-hover-bg-color:var(--el-color-info-light-9);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-text-color:var(--el-color-info-dark-2);--el-button-active-bg-color:var(--el-color-info-light-9);--el-button-active-border-color:var(--el-color-info-dark-2)}.el-button--info.is-dashed.is-disabled,.el-button--info.is-dashed.is-disabled:hover,.el-button--info.is-dashed.is-disabled:focus,.el-button--info.is-dashed.is-disabled:active{color:var(--el-color-info-light-5);background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8)}.el-button--large{--el-button-size:40px;height:var(--el-button-size)}.el-button--large [class*=el-icon]+span{margin-left:8px}.el-button--large{font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base);padding:12px 19px}.el-button--large.is-round{padding:12px 19px}.el-button--large.is-circle{width:var(--el-button-size);padding:12px}.el-button--small{--el-button-size:24px;height:var(--el-button-size)}.el-button--small [class*=el-icon]+span{margin-left:4px}.el-button--small{border-radius:calc(var(--el-border-radius-base) - 1px);padding:5px 11px;font-size:12px}.el-button--small.is-round{padding:5px 11px}.el-button--small.is-circle{width:var(--el-button-size);padding:5px}");
_css(".el-tabs{--el-tabs-header-height:40px;display:flex}.el-tabs__header{justify-content:space-between;align-items:center;margin:0 0 15px;padding:0;display:flex;position:relative}.el-tabs__header-vertical{flex-direction:column}.el-tabs__active-bar{background-color:var(--el-color-primary);z-index:1;height:2px;transition:width var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier), transform var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);list-style:none;position:absolute;bottom:0;left:0}.el-tabs__active-bar.is-bottom{bottom:auto}.el-tabs__active-bar.is-hidden{visibility:hidden}.el-tabs__active-bar.is-hidden~.is-active:after{content:\"\";z-index:1;background-color:var(--el-color-primary);height:2px;position:absolute;bottom:0;left:20px;right:20px}.el-tabs__active-bar.is-hidden.is-bottom~.is-active:after{top:0;bottom:auto}.el-tabs__active-bar.is-hidden.is-left~.is-active:after,.el-tabs__active-bar.is-hidden.is-right~.is-active:after{width:2px;height:auto;top:0;bottom:0}.el-tabs__active-bar.is-hidden.is-left~.is-active:after{left:auto;right:0}.el-tabs__active-bar.is-hidden.is-right~.is-active:after{left:0;right:auto}.el-tabs__active-bar.is-hidden.is-top~.is-active:nth-child(2):after,.el-tabs__active-bar.is-hidden.is-bottom~.is-active:nth-child(2):after{left:0}.el-tabs__active-bar.is-hidden.is-top~.is-active:last-child:after,.el-tabs__active-bar.is-hidden.is-bottom~.is-active:last-child:after{right:0}.el-tabs__new-tab{border:1px solid var(--el-border-color);text-align:center;width:20px;height:20px;color:var(--el-text-color-primary);cursor:pointer;border-radius:3px;flex-shrink:0;justify-content:center;align-items:center;margin:10px 0 10px 10px;font-size:12px;line-height:20px;transition:all .15s;display:flex}.el-tabs__new-tab .is-icon-plus{height:inherit;width:inherit;transform:scale(.8)}.el-tabs__new-tab .is-icon-plus svg{vertical-align:middle}.el-tabs__new-tab:hover{color:var(--el-color-primary)}.el-tabs__new-tab-vertical{margin-left:0}.el-tabs__nav-wrap{flex:auto;margin-bottom:-1px;position:relative;overflow:hidden}.el-tabs__nav-wrap:after{content:\"\";background-color:var(--el-border-color-light);width:100%;height:2px;z-index:var(--el-index-normal);position:absolute;bottom:0;left:0}.el-tabs__nav-wrap.is-bottom:after{top:0;bottom:auto}.el-tabs__nav-wrap.is-scrollable{box-sizing:border-box;padding:0 20px}.el-tabs__nav-scroll{overflow:hidden}.el-tabs__nav-next,.el-tabs__nav-prev{cursor:pointer;color:var(--el-text-color-secondary);text-align:center;width:20px;font-size:12px;line-height:44px;position:absolute}.el-tabs__nav-next.is-disabled,.el-tabs__nav-prev.is-disabled{color:var(--el-text-color-disabled);cursor:not-allowed}.el-tabs__nav-next{right:0}.el-tabs__nav-prev{left:0}.el-tabs__nav{white-space:nowrap;transition:transform var(--el-transition-duration);float:left;z-index:calc(var(--el-index-normal) + 1);display:flex;position:relative}.el-tabs__nav.is-stretch{min-width:100%;display:flex}.el-tabs__nav.is-stretch>*{text-align:center;flex:1}.el-tabs__item{height:var(--el-tabs-header-height);box-sizing:border-box;font-size:var(--el-font-size-base);color:var(--el-text-color-primary);justify-content:center;align-items:center;padding:0 20px;font-weight:500;list-style:none;display:flex;position:relative}.el-tabs__item:focus,.el-tabs__item:focus:active{outline:none}.el-tabs__item:focus-visible{box-shadow:0 0 2px 2px var(--el-color-primary) inset;border-radius:3px}.el-tabs__item .is-icon-close{text-align:center;transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);border-radius:50%;margin-left:5px}.el-tabs__item .is-icon-close:before{display:inline-block;transform:scale(.9)}.el-tabs__item .is-icon-close:hover{background-color:var(--el-text-color-placeholder);color:#fff}.el-tabs__item.is-active{color:var(--el-color-primary)}.el-tabs__item:hover{color:var(--el-color-primary);cursor:pointer}.el-tabs__item.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-tabs__content{flex-grow:1;position:relative;overflow:hidden}.el-tabs--top>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:0}.el-tabs--top>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom>.el-tabs__header .el-tabs__item:last-child{padding-right:0}.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:20px}.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child{padding-right:20px}.el-tabs--card>.el-tabs__header{border-bottom:1px solid var(--el-border-color-light);height:var(--el-tabs-header-height);box-sizing:border-box}.el-tabs--card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--card>.el-tabs__header .el-tabs__nav{border:1px solid var(--el-border-color-light);box-sizing:border-box;border-bottom:none;border-radius:4px 4px 0 0}.el-tabs--card>.el-tabs__header .el-tabs__active-bar{display:none}.el-tabs--card>.el-tabs__header .el-tabs__item .is-icon-close{transform-origin:100%;width:0;height:14px;font-size:12px;position:relative;right:-2px;overflow:hidden}.el-tabs--card>.el-tabs__header .el-tabs__item{border-bottom:1px solid #0000;border-left:1px solid var(--el-border-color-light);transition:color var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier), padding var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);margin-top:-1px}.el-tabs--card>.el-tabs__header .el-tabs__item:first-child{border-left:none}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover{padding-left:13px;padding-right:13px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover .is-icon-close{width:14px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{border-bottom-color:var(--el-bg-color)}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{padding-left:20px;padding-right:20px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable .is-icon-close{width:14px}.el-tabs--border-card{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color)}.el-tabs--border-card>.el-tabs__content{padding:15px}.el-tabs--border-card>.el-tabs__header{background-color:var(--el-fill-color-light);border-bottom:1px solid var(--el-border-color-light);margin:0}.el-tabs--border-card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--border-card>.el-tabs__header .el-tabs__item{transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);color:var(--el-text-color-secondary);border:1px solid #0000;margin-top:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item:first-child,.el-tabs--border-card>.el-tabs__header .el-tabs__item+.el-tabs__item{margin-left:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{color:var(--el-color-primary);background-color:var(--el-bg-color-overlay);border-right-color:var(--el-border-color);border-left-color:var(--el-border-color)}.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{color:var(--el-color-primary)}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-disabled{color:var(--el-disabled-text-color)}.el-tabs--border-card>.el-tabs__header .is-scrollable .el-tabs__item:first-child{margin-left:0}.el-tabs--bottom{flex-direction:column}.el-tabs--bottom .el-tabs__header.is-bottom{margin-top:10px;margin-bottom:0}.el-tabs--bottom.el-tabs--border-card .el-tabs__header.is-bottom{border-bottom:0;border-top:1px solid var(--el-border-color)}.el-tabs--bottom.el-tabs--border-card .el-tabs__nav-wrap.is-bottom{margin-top:-1px;margin-bottom:0}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom:not(.is-active){border:1px solid #0000}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom{margin:0 -1px -1px}.el-tabs--card>.el-tabs__header.is-left,.el-tabs--card>.el-tabs__header.is-right,.el-tabs--border-card>.el-tabs__header.is-left,.el-tabs--border-card>.el-tabs__header.is-right{border-bottom:none}.el-tabs--left,.el-tabs--right{overflow:hidden}.el-tabs--left .el-tabs__header.is-left,.el-tabs--left .el-tabs__header.is-right,.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--left .el-tabs__nav-scroll,.el-tabs--right .el-tabs__header.is-left,.el-tabs--right .el-tabs__header.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-scroll{height:100%}.el-tabs--left .el-tabs__active-bar.is-left,.el-tabs--left .el-tabs__active-bar.is-right,.el-tabs--right .el-tabs__active-bar.is-left,.el-tabs--right .el-tabs__active-bar.is-right{width:2px;height:auto;top:0;bottom:auto}.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right{margin-bottom:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{text-align:center;cursor:pointer;width:100%;height:30px;line-height:30px}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i{transform:rotate(90deg)}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev.is-disabled,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next.is-disabled,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev.is-disabled,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev.is-disabled,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next.is-disabled{cursor:not-allowed}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev{top:0;left:auto}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{bottom:0;right:auto}.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable{padding:30px 0}.el-tabs--left .el-tabs__nav-wrap.is-left:after,.el-tabs--left .el-tabs__nav-wrap.is-right:after,.el-tabs--right .el-tabs__nav-wrap.is-left:after,.el-tabs--right .el-tabs__nav-wrap.is-right:after{width:2px;height:100%;top:0;bottom:auto}.el-tabs--left .el-tabs__nav.is-left,.el-tabs--left .el-tabs__nav.is-right,.el-tabs--right .el-tabs__nav.is-left,.el-tabs--right .el-tabs__nav.is-right{flex-direction:column}.el-tabs--left .el-tabs__item.is-left,.el-tabs--right .el-tabs__item.is-left{justify-content:flex-end}.el-tabs--left .el-tabs__item.is-right,.el-tabs--right .el-tabs__item.is-right{justify-content:flex-start}.el-tabs--left{flex-direction:row}.el-tabs--left .el-tabs__header.is-left{margin-bottom:0;margin-right:10px}.el-tabs--left .el-tabs__nav-wrap.is-left{margin-right:-1px}.el-tabs--left .el-tabs__nav-wrap.is-left:after,.el-tabs--left .el-tabs__active-bar.is-left{left:auto;right:0}.el-tabs--left .el-tabs__item.is-left{text-align:right}.el-tabs--left.el-tabs--card .el-tabs__active-bar.is-left{display:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left{border-left:none;border-right:1px solid var(--el-border-color-light);border-bottom:none;border-top:1px solid var(--el-border-color-light);text-align:left}.el-tabs--left.el-tabs--card .el-tabs__item.is-left:first-child{border-right:1px solid var(--el-border-color-light);border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{border:1px solid var(--el-border-color-light);border-bottom:none;border-left:none;border-right-color:#fff}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:first-child{border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:last-child{border-bottom:none}.el-tabs--left.el-tabs--card .el-tabs__nav{border-bottom:1px solid var(--el-border-color-light);border-right:none;border-radius:4px 0 0 4px}.el-tabs--left.el-tabs--card .el-tabs__new-tab{float:none}.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left{border-right:1px solid var(--el-border-color)}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left{border:1px solid #0000;margin:-1px 0 -1px -1px}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active{border-color:#d1dbe5 #0000}.el-tabs--left>.el-tabs__content+.el-tabs__header{order:-1}.el-tabs--right .el-tabs__header.is-right{margin-bottom:0;margin-left:10px}.el-tabs--right .el-tabs__nav-wrap.is-right{margin-left:-1px}.el-tabs--right .el-tabs__nav-wrap.is-right:after{left:0;right:auto}.el-tabs--right .el-tabs__active-bar.is-right{left:0}.el-tabs--right.el-tabs--card .el-tabs__active-bar.is-right{display:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right{border-bottom:none;border-top:1px solid var(--el-border-color-light)}.el-tabs--right.el-tabs--card .el-tabs__item.is-right:first-child{border-left:1px solid var(--el-border-color-light);border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active{border:1px solid var(--el-border-color-light);border-bottom:none;border-left-color:#fff;border-right:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:first-child{border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:last-child{border-bottom:none}.el-tabs--right.el-tabs--card .el-tabs__nav{border-bottom:1px solid var(--el-border-color-light);border-left:none;border-radius:0 4px 4px 0}.el-tabs--right.el-tabs--border-card .el-tabs__header.is-right{border-left:1px solid var(--el-border-color)}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right{border:1px solid #0000;margin:-1px -1px -1px 0}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right.is-active{border-color:#d1dbe5 #0000}.el-tabs--top{flex-direction:column}.el-tabs--top>.el-tabs__content+.el-tabs__header{order:-1}.slideInRight-transition,.slideInLeft-transition{display:inline-block}.slideInRight-enter{animation:slideInRight-enter var(--el-transition-duration)}.slideInRight-leave{animation:slideInRight-leave var(--el-transition-duration);position:absolute;left:0;right:0}.slideInLeft-enter{animation:slideInLeft-enter var(--el-transition-duration)}.slideInLeft-leave{animation:slideInLeft-leave var(--el-transition-duration);position:absolute;left:0;right:0}@keyframes slideInRight-enter{0%{opacity:0;transform-origin:0 0;transform:translate(100%)}to{opacity:1;transform-origin:0 0;transform:translate(0)}}@keyframes slideInRight-leave{0%{transform-origin:0 0;opacity:1;transform:translate(0)}to{transform-origin:0 0;opacity:0;transform:translate(100%)}}@keyframes slideInLeft-enter{0%{opacity:0;transform-origin:0 0;transform:translate(-100%)}to{opacity:1;transform-origin:0 0;transform:translate(0)}}@keyframes slideInLeft-leave{0%{transform-origin:0 0;opacity:1;transform:translate(0)}to{transform-origin:0 0;opacity:0;transform:translate(-100%)}}");
_css(".el-form{--el-form-label-font-size:var(--el-font-size-base);--el-form-inline-content-width:220px}.el-form--inline .el-form-item{vertical-align:middle;margin-right:32px;display:inline-flex}.el-form--inline .el-form-item:last-child{margin-right:0}.el-form--inline.el-form--label-top{flex-wrap:wrap;display:flex}.el-form--inline.el-form--label-top .el-form-item{display:block}");
_css(".el-switch{--el-switch-on-color:var(--el-color-primary);--el-switch-off-color:var(--el-border-color);vertical-align:middle;align-items:center;height:32px;font-size:14px;line-height:20px;display:inline-flex;position:relative}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);cursor:pointer;vertical-align:middle;height:20px;color:var(--el-text-color-primary);font-size:14px;font-weight:500;display:inline-block}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{font-size:14px;line-height:1;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{opacity:0;width:0;height:0;margin:0;position:absolute}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{border:1px solid var(--el-switch-border-color,var(--el-switch-off-color));box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;min-width:40px;height:20px;transition:border-color var(--el-transition-duration), background-color var(--el-transition-duration);border-radius:10px;outline:none;align-items:center;display:inline-flex;position:relative}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);justify-content:center;align-items:center;height:16px;padding:0 4px 0 18px;display:flex;overflow:hidden}.el-switch__core .el-switch__inner-wrapper{color:var(--el-color-white);-webkit-user-select:none;user-select:none;text-overflow:ellipsis;white-space:nowrap;align-items:center;font-size:12px;display:flex;overflow:hidden}.el-switch__core .el-switch__action{border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);background-color:var(--el-color-white);width:16px;height:16px;color:var(--el-switch-off-color);justify-content:center;align-items:center;display:flex;position:absolute;left:1px}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color,var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{color:var(--el-switch-on-color);left:calc(100% - 17px)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{height:40px;font-size:14px;line-height:24px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{border-radius:12px;min-width:50px;height:24px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{height:24px;font-size:12px;line-height:16px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{border-radius:8px;min-width:30px;height:16px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}");
_css(".el-textarea{--el-input-text-color:var(--el-text-color-regular);--el-input-border:var(--el-border);--el-input-hover-border:var(--el-border-color-hover);--el-input-focus-border:var(--el-color-primary);--el-input-transparent-border:0 0 0 1px transparent inset;--el-input-border-color:var(--el-border-color);--el-input-border-radius:var(--el-border-radius-base);--el-input-bg-color:var(--el-fill-color-blank);--el-input-icon-color:var(--el-text-color-placeholder);--el-input-placeholder-color:var(--el-text-color-placeholder);--el-input-hover-border-color:var(--el-border-color-hover);--el-input-clear-hover-color:var(--el-text-color-secondary);--el-input-focus-border-color:var(--el-color-primary);--el-input-width:100%;vertical-align:bottom;width:100%;font-size:var(--el-font-size-base);display:inline-block;position:relative}.el-textarea__inner{cursor:auto;resize:vertical;box-sizing:border-box;width:100%;line-height:1.5;font-size:inherit;color:var(--el-input-text-color,var(--el-text-color-regular));background-color:var(--el-input-bg-color,var(--el-fill-color-blank));-webkit-appearance:none;box-shadow:0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;border-radius:var(--el-input-border-radius,var(--el-border-radius-base));transition:var(--el-transition-box-shadow);background-image:none;border:none;padding:5px 11px;font-family:inherit;display:block;position:relative;overflow-y:auto}.el-textarea__inner.is-clearable{padding:5px 26px 5px 11px}.el-textarea__inner::placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-textarea__inner:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-textarea__inner:focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset;outline:none}.el-textarea__clear{color:var(--el-input-icon-color);cursor:pointer;font-size:14px;position:absolute;top:15px;right:11px;transform:translateY(-50%)}.el-textarea__clear:hover{color:var(--el-input-clear-hover-color)}.el-textarea .el-input__count{color:var(--el-color-info);background:var(--el-fill-color-blank);font-size:12px;line-height:14px;position:absolute;bottom:5px;right:10px}.el-textarea .el-input__count.is-outside{top:100%;right:0;bottom:unset;background:0 0;padding-top:2px;line-height:1;position:absolute}.el-textarea.is-disabled .el-textarea__inner{box-shadow:0 0 0 1px var(--el-disabled-border-color) inset;background-color:var(--el-disabled-bg-color);color:var(--el-disabled-text-color);cursor:not-allowed}.el-textarea.is-disabled .el-textarea__inner::placeholder{color:var(--el-text-color-placeholder)}.el-textarea.is-exceed .el-textarea__inner{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-textarea.is-exceed .el-input__count{color:var(--el-color-danger)}.el-input{--el-input-text-color:var(--el-text-color-regular);--el-input-border:var(--el-border);--el-input-hover-border:var(--el-border-color-hover);--el-input-focus-border:var(--el-color-primary);--el-input-transparent-border:0 0 0 1px transparent inset;--el-input-border-color:var(--el-border-color);--el-input-border-radius:var(--el-border-radius-base);--el-input-bg-color:var(--el-fill-color-blank);--el-input-icon-color:var(--el-text-color-placeholder);--el-input-placeholder-color:var(--el-text-color-placeholder);--el-input-hover-border-color:var(--el-border-color-hover);--el-input-clear-hover-color:var(--el-text-color-secondary);--el-input-focus-border-color:var(--el-color-primary);--el-input-width:100%;--el-input-height:var(--el-component-size);font-size:var(--el-font-size-base);width:var(--el-input-width);line-height:var(--el-input-height);box-sizing:border-box;vertical-align:middle;display:inline-flex;position:relative}.el-input::-webkit-scrollbar{z-index:11;width:6px}.el-input::-webkit-scrollbar:horizontal{height:6px}.el-input::-webkit-scrollbar-thumb{background:var(--el-text-color-disabled);border-radius:5px;width:6px}.el-input::-webkit-scrollbar-corner{background:var(--el-fill-color-blank)}.el-input::-webkit-scrollbar-track{background:var(--el-fill-color-blank)}.el-input::-webkit-scrollbar-track-piece{background:var(--el-fill-color-blank);width:6px}.el-input .el-input__clear,.el-input .el-input__password{color:var(--el-input-icon-color);cursor:pointer;font-size:14px}.el-input .el-input__clear:hover,.el-input .el-input__password:hover{color:var(--el-input-clear-hover-color)}.el-input .el-input__count{height:100%;color:var(--el-color-info);align-items:center;font-size:12px;display:inline-flex}.el-input .el-input__count .el-input__count-inner{background:var(--el-fill-color-blank);line-height:initial;padding-left:8px;display:inline-block}.el-input .el-input__count.is-outside{height:unset;padding-top:2px;position:absolute;top:100%;right:0}.el-input .el-input__count.is-outside .el-input__count-inner{background:0 0;padding-left:0;line-height:1}.el-input__wrapper{background-color:var(--el-input-bg-color,var(--el-fill-color-blank));border-radius:var(--el-input-border-radius,var(--el-border-radius-base));cursor:text;transition:var(--el-transition-box-shadow);box-shadow:0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;background-image:none;flex-grow:1;justify-content:center;align-items:center;padding:1px 11px;display:inline-flex;transform:translateZ(0)}.el-input__wrapper:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-input__wrapper.is-focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset}.el-input{--el-input-inner-height:calc(var(--el-input-height,32px) - 2px)}.el-input__inner{-webkit-appearance:none;width:100%;color:var(--el-input-text-color,var(--el-text-color-regular));font-size:inherit;height:var(--el-input-inner-height);line-height:var(--el-input-inner-height);box-sizing:border-box;background:0 0;border:none;outline:none;flex-grow:1;padding:0}.el-input__inner:focus{outline:none}.el-input__inner::placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-input__inner[type=password]::-ms-reveal{display:none}.el-input__inner[type=number]{line-height:1}.el-input__prefix{white-space:nowrap;height:100%;line-height:var(--el-input-inner-height);text-align:center;color:var(--el-input-icon-color,var(--el-text-color-placeholder));transition:all var(--el-transition-duration);pointer-events:none;flex-wrap:nowrap;flex-shrink:0;display:inline-flex}.el-input__prefix-inner{pointer-events:all;justify-content:center;align-items:center;display:inline-flex}.el-input__prefix-inner>:last-child{margin-right:8px}.el-input__prefix-inner>:first-child,.el-input__prefix-inner>:first-child.el-input__icon{margin-left:0}.el-input__suffix{white-space:nowrap;height:100%;line-height:var(--el-input-inner-height);text-align:center;color:var(--el-input-icon-color,var(--el-text-color-placeholder));transition:all var(--el-transition-duration);pointer-events:none;flex-wrap:nowrap;flex-shrink:0;display:inline-flex}.el-input__suffix-inner{pointer-events:all;justify-content:center;align-items:center;display:inline-flex}.el-input__suffix-inner>:first-child{margin-left:8px}.el-input .el-input__icon{height:inherit;line-height:inherit;transition:all var(--el-transition-duration);justify-content:center;align-items:center;margin-left:8px;display:flex}.el-input .el-input__clear{transition:color var(--el-transition-duration)}.el-input__validateIcon{pointer-events:none}.el-input.is-active .el-input__wrapper{box-shadow:0 0 0 1px var(--el-input-focus-color, ) inset}.el-input.is-disabled{cursor:not-allowed}.el-input.is-disabled .el-input__wrapper{background-color:var(--el-disabled-bg-color);cursor:not-allowed;box-shadow:0 0 0 1px var(--el-disabled-border-color) inset}.el-input.is-disabled .el-input__inner{color:var(--el-disabled-text-color);-webkit-text-fill-color:var(--el-disabled-text-color);cursor:not-allowed}.el-input.is-disabled .el-input__inner::placeholder{color:var(--el-text-color-placeholder)}.el-input.is-disabled .el-input__icon{cursor:not-allowed}.el-input.is-disabled .el-input__prefix-inner,.el-input.is-disabled .el-input__suffix-inner{pointer-events:none}.el-input.is-exceed .el-input__wrapper{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-input.is-exceed .el-input__suffix .el-input__count{color:var(--el-color-danger)}.el-input--large{--el-input-height:var(--el-component-size-large);font-size:14px}.el-input--large .el-input__wrapper{padding:1px 15px}.el-input--large{--el-input-inner-height:calc(var(--el-input-height,40px) - 2px)}.el-input--small{--el-input-height:var(--el-component-size-small);font-size:12px}.el-input--small .el-input__wrapper{padding:1px 7px}.el-input--small{--el-input-inner-height:calc(var(--el-input-height,24px) - 2px)}.el-input-group{align-items:stretch;width:100%;display:inline-flex}.el-input-group__append,.el-input-group__prepend{background-color:var(--el-fill-color-light);color:var(--el-color-info);border-radius:var(--el-input-border-radius);white-space:nowrap;justify-content:center;align-items:center;min-height:100%;padding:0 20px;display:inline-flex;position:relative}.el-input-group__append:focus,.el-input-group__prepend:focus{outline:none}.el-input-group__append .el-select,.el-input-group__append .el-button,.el-input-group__prepend .el-select,.el-input-group__prepend .el-button{flex:1;margin:0 -20px;display:inline-block}.el-input-group__append button.el-button,.el-input-group__append button.el-button:hover,.el-input-group__append div.el-select .el-select__wrapper,.el-input-group__append div.el-select:hover .el-select__wrapper,.el-input-group__prepend button.el-button,.el-input-group__prepend button.el-button:hover,.el-input-group__prepend div.el-select .el-select__wrapper,.el-input-group__prepend div.el-select:hover .el-select__wrapper{color:inherit;background-color:#0000;border-color:#0000}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input{font-size:inherit}.el-input-group__prepend{box-shadow:1px 0 0 0 var(--el-input-border-color) inset, 0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group__append{box-shadow:0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset, -1px 0 0 0 var(--el-input-border-color) inset;border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.el-input-group--prepend>.el-input__wrapper{border-top-left-radius:0;border-bottom-left-radius:0}.el-input-group--prepend .el-input-group__prepend .el-select .el-select__wrapper{box-shadow:1px 0 0 0 var(--el-input-border-color) inset, 0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset;border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group--append>.el-input__wrapper{border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group--append .el-input-group__append .el-select .el-select__wrapper{box-shadow:0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset, -1px 0 0 0 var(--el-input-border-color) inset;border-top-left-radius:0;border-bottom-left-radius:0}.el-input-hidden{display:none!important}");
_css(".el-input-number{vertical-align:middle;width:150px;line-height:30px;display:inline-flex;position:relative}.el-input-number .el-input__wrapper{padding-left:42px;padding-right:42px}.el-input-number .el-input__inner{-webkit-appearance:none;-moz-appearance:textfield;text-align:center;line-height:1}.el-input-number .el-input__inner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.el-input-number .el-input__inner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.el-input-number.is-left .el-input__inner{text-align:left}.el-input-number.is-right .el-input__inner{text-align:right}.el-input-number.is-center .el-input__inner{text-align:center}.el-input-number__increase,.el-input-number__decrease{z-index:1;background:var(--el-fill-color-light);width:32px;height:auto;color:var(--el-text-color-regular);cursor:pointer;-webkit-user-select:none;user-select:none;justify-content:center;align-items:center;font-size:13px;display:flex;position:absolute;top:1px;bottom:1px}.el-input-number__increase:hover,.el-input-number__decrease:hover{color:var(--el-color-primary)}.el-input-number__increase:hover~.el-input:not(.is-disabled) .el-input__wrapper,.el-input-number__decrease:hover~.el-input:not(.is-disabled) .el-input__wrapper{box-shadow:0 0 0 1px var(--el-input-focus-border-color,var(--el-color-primary)) inset}.el-input-number__increase.is-disabled,.el-input-number__decrease.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-input-number__increase{border-radius:0 var(--el-border-radius-base) var(--el-border-radius-base) 0;border-left:var(--el-border);right:1px}.el-input-number__decrease{border-radius:var(--el-border-radius-base) 0 0 var(--el-border-radius-base);border-right:var(--el-border);left:1px}.el-input-number.is-disabled .el-input-number__increase,.el-input-number.is-disabled .el-input-number__decrease{border-color:var(--el-disabled-border-color);color:var(--el-disabled-border-color)}.el-input-number.is-disabled .el-input-number__increase:hover,.el-input-number.is-disabled .el-input-number__decrease:hover{color:var(--el-disabled-border-color);cursor:not-allowed}.el-input-number--large{width:180px;line-height:38px}.el-input-number--large .el-input-number__increase,.el-input-number--large .el-input-number__decrease{width:40px;font-size:14px}.el-input-number--large.is-controls-right .el-input--large .el-input__wrapper{padding-right:47px}.el-input-number--large .el-input--large .el-input__wrapper{padding-left:47px;padding-right:47px}.el-input-number--small{width:120px;line-height:22px}.el-input-number--small .el-input-number__increase,.el-input-number--small .el-input-number__decrease{width:24px;font-size:12px}.el-input-number--small.is-controls-right .el-input--small .el-input__wrapper{padding-right:31px}.el-input-number--small .el-input--small .el-input__wrapper{padding-left:31px;padding-right:31px}.el-input-number--small .el-input-number__increase [class*=el-icon],.el-input-number--small .el-input-number__decrease [class*=el-icon]{transform:scale(.9)}.el-input-number.is-without-controls .el-input__wrapper{padding-left:15px;padding-right:15px}.el-input-number.is-controls-right .el-input__wrapper{padding-left:15px;padding-right:42px}.el-input-number.is-controls-right .el-input-number__increase,.el-input-number.is-controls-right .el-input-number__decrease{--el-input-number-controls-height:15px;height:var(--el-input-number-controls-height);line-height:var(--el-input-number-controls-height)}.el-input-number.is-controls-right .el-input-number__increase [class*=el-icon],.el-input-number.is-controls-right .el-input-number__decrease [class*=el-icon]{transform:scale(.8)}.el-input-number.is-controls-right .el-input-number__increase{border-radius:0 var(--el-border-radius-base) 0 0;border-bottom:var(--el-border);bottom:auto;left:auto}.el-input-number.is-controls-right .el-input-number__decrease{border-right:none;border-left:var(--el-border);border-radius:0 0 var(--el-border-radius-base) 0;top:auto;left:auto;right:1px}.el-input-number.is-controls-right[class*=large] [class*=increase],.el-input-number.is-controls-right[class*=large] [class*=decrease]{--el-input-number-controls-height:19px}.el-input-number.is-controls-right[class*=small] [class*=increase],.el-input-number.is-controls-right[class*=small] [class*=decrease]{--el-input-number-controls-height:11px}");
_css(".el-form-item{--el-form-item-margin-bottom:18px;--font-size:14px;margin-bottom:var(--el-form-item-margin-bottom);display:flex}.el-form-item .el-form-item{margin-bottom:0}.el-form-item .el-input__validateIcon{display:none}.el-form-item--large{--font-size:14px;--el-form-label-font-size:var(--font-size);--el-form-item-margin-bottom:22px}.el-form-item--large .el-form-item__label{height:40px;line-height:40px}.el-form-item--large .el-form-item__content{line-height:40px}.el-form-item--large .el-form-item__error{padding-top:4px}.el-form-item--default{--font-size:14px;--el-form-label-font-size:var(--font-size);--el-form-item-margin-bottom:18px}.el-form-item--default .el-form-item__label{height:32px;line-height:32px}.el-form-item--default .el-form-item__content{line-height:32px}.el-form-item--default .el-form-item__error{padding-top:2px}.el-form-item--small{--font-size:12px;--el-form-label-font-size:var(--font-size);--el-form-item-margin-bottom:18px}.el-form-item--small .el-form-item__label{height:24px;line-height:24px}.el-form-item--small .el-form-item__content{line-height:24px}.el-form-item--small .el-form-item__error{padding-top:2px}.el-form-item--label-left .el-form-item__label{text-align:left;justify-content:flex-start}.el-form-item--label-right .el-form-item__label{text-align:right;justify-content:flex-end}.el-form-item--label-top{display:block}.el-form-item--label-top .el-form-item__label{text-align:left;width:fit-content;height:auto;margin-bottom:8px;padding-right:0;line-height:22px;display:block}.el-form-item__label-wrap{display:flex}.el-form-item__label{font-size:var(--el-form-label-font-size);color:var(--el-text-color-regular);box-sizing:border-box;flex:none;align-items:flex-start;height:32px;padding:0 12px 0 0;line-height:32px;display:inline-flex}.el-form-item__content{line-height:32px;font-size:var(--font-size);flex-wrap:wrap;flex:1;align-items:center;min-width:0;display:flex;position:relative}.el-form-item__content .el-input-group{vertical-align:top}.el-form-item__error{color:var(--el-color-danger);padding-top:2px;font-size:12px;line-height:1;position:absolute;top:100%;left:0}.el-form-item__error--inline{margin-left:10px;display:inline-block;position:relative;top:auto;left:auto}.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label:before,.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label-wrap>.el-form-item__label:before{content:\"*\";color:var(--el-color-danger);margin-right:4px}.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label:after,.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label-wrap>.el-form-item__label:after{content:\"*\";color:var(--el-color-danger);margin-left:4px}.el-form-item.is-error .el-form-item__content .el-input__wrapper,.el-form-item.is-error .el-form-item__content .el-input__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-input__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-input__wrapper.is-focus,.el-form-item.is-error .el-form-item__content .el-textarea__inner,.el-form-item.is-error .el-form-item__content .el-textarea__inner:hover,.el-form-item.is-error .el-form-item__content .el-textarea__inner:focus,.el-form-item.is-error .el-form-item__content .el-textarea__inner.is-focus,.el-form-item.is-error .el-form-item__content .el-select__wrapper,.el-form-item.is-error .el-form-item__content .el-select__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-select__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-select__wrapper.is-focus,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper.is-focus,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field:hover,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field:focus,.el-form-item.is-error .el-form-item__content :not(.el-input-otp--underlined) .el-input-otp__input-field.is-focus,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field:after,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field:hover:after,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field:focus:after,.el-form-item.is-error .el-form-item__content .el-input-otp--underlined .el-input-otp__input-field.is-focus:after{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-form-item.is-error .el-form-item__content .el-input-group__append .el-input__wrapper,.el-form-item.is-error .el-form-item__content .el-input-group__prepend .el-input__wrapper{box-shadow:inset 0 0 0 1px #0000}.el-form-item.is-error .el-form-item__content .el-input-group__append .el-input__validateIcon,.el-form-item.is-error .el-form-item__content .el-input-group__prepend .el-input__validateIcon{display:none}.el-form-item.is-error .el-form-item__content .el-input__validateIcon{color:var(--el-color-danger)}.el-form-item--feedback .el-input__validateIcon{display:inline-flex}");
_css(".el-color-picker-panel{--el-colorpicker-bg-color:var(--el-bg-color-overlay);--el-fill-color-blank:var(--el-colorpicker-bg-color);box-sizing:content-box;background:var(--el-colorpicker-bg-color);width:300px;padding:12px}.el-color-picker-panel.is-border{border:solid 1px var(--el-border-color-lighter);border-radius:4px}.el-color-picker-panel__wrapper{margin-bottom:6px}.el-color-picker-panel__footer{text-align:right;justify-content:space-between;margin-top:12px;display:flex}.el-color-picker-panel__footer .el-input{color:#000;width:160px;font-size:12px;line-height:26px}.el-color-picker-panel.is-disabled .el-color-svpanel,.el-color-picker-panel.is-disabled .el-color-hue-slider{cursor:not-allowed;opacity:.3}.el-color-picker-panel.is-disabled .el-color-hue-slider__thumb{cursor:not-allowed}.el-color-picker-panel.is-disabled .el-color-alpha-slider,.el-color-picker-panel.is-disabled .el-color-predefine .el-color-predefine__color-selector{cursor:not-allowed;opacity:.3}.el-color-predefine{width:280px;margin-top:8px;font-size:12px;display:flex}.el-color-predefine__colors{flex-wrap:wrap;flex:1;gap:8px;display:flex}.el-color-predefine__color-selector{border-radius:var(--el-border-radius-base);cursor:pointer;border:none;outline:none;width:20px;height:20px;padding:0;overflow:hidden}.el-color-predefine__color-selector.selected{box-shadow:0 0 3px 2px var(--el-color-primary)}.el-color-predefine__color-selector:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:2px}.el-color-predefine__color-selector>div{height:100%;display:flex}.el-color-predefine__color-selector.is-alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)}.el-color-hue-slider{box-sizing:border-box;float:right;background-color:red;width:280px;height:12px;padding:0 2px;position:relative}.el-color-hue-slider__bar{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);height:100%;position:relative}.el-color-hue-slider__thumb{cursor:pointer;box-sizing:border-box;border:1px solid var(--el-border-color-lighter);z-index:1;background:#fff;border-radius:1px;width:4px;height:100%;position:absolute;top:0;left:0;box-shadow:0 0 2px #0009}.el-color-hue-slider__thumb:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:1px}.el-color-hue-slider.is-vertical{width:12px;height:180px;padding:2px 0}.el-color-hue-slider.is-vertical .el-color-hue-slider__bar{background:linear-gradient(red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.el-color-hue-slider.is-vertical .el-color-hue-slider__thumb{width:100%;height:4px;top:0;left:0}.el-color-svpanel{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);width:280px;height:180px;position:relative}.el-color-svpanel__cursor{cursor:pointer;border-radius:50%;width:4px;height:4px;position:absolute;transform:translate(-2px,-2px);box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px #0000004d,0 0 1px 2px #0006}.el-color-svpanel__cursor:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:2px}.el-color-alpha-slider{box-sizing:border-box;background-image:linear-gradient(45deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(45deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%);background-position:0 0,6px 0,6px -6px,0 6px;background-size:12px 12px;width:280px;height:12px;position:relative}.el-color-alpha-slider.is-disabled .el-color-alpha-slider__thumb{cursor:not-allowed}.el-color-alpha-slider__bar{background:linear-gradient(to right, #fff0 0%, var(--el-bg-color) 100%);height:100%;position:relative}.el-color-alpha-slider__thumb{cursor:pointer;box-sizing:border-box;border:1px solid var(--el-border-color-lighter);z-index:1;background:#fff;border-radius:1px;width:4px;height:100%;position:absolute;top:0;left:0;box-shadow:0 0 2px #0009}.el-color-alpha-slider__thumb:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:1px}.el-color-alpha-slider.is-vertical{width:20px;height:180px}.el-color-alpha-slider.is-vertical .el-color-alpha-slider__bar{background:linear-gradient(#fff0 0%,#fff 100%)}.el-color-alpha-slider.is-vertical .el-color-alpha-slider__thumb{width:100%;height:4px;top:0;left:0}.el-color-picker-panel{--el-color-picker-alpha-bg-a:#ccc;--el-color-picker-alpha-bg-b:transparent}.dark .el-color-picker-panel{--el-color-picker-alpha-bg-a:#333}");
_css(".el-color-picker{outline:none;width:32px;height:32px;line-height:normal;display:inline-block;position:relative}.el-color-picker:hover:not(:-webkit-any(.is-disabled,.is-focused)) .el-color-picker__trigger{border-color:var(--el-border-color-hover)}.el-color-picker:hover:not(:is(.is-disabled,.is-focused)) .el-color-picker__trigger{border-color:var(--el-border-color-hover)}.el-color-picker:focus-visible:not(.is-disabled) .el-color-picker__trigger{outline:2px solid var(--el-color-primary);outline-offset:1px}.el-color-picker.is-focused .el-color-picker__trigger{border-color:var(--el-color-primary)}.el-color-picker.is-disabled .el-color-picker__trigger{cursor:not-allowed;background-color:var(--el-fill-color-light)}.el-color-picker.is-disabled .el-color-picker__color{opacity:.3}.el-color-picker--large{width:40px;height:40px}.el-color-picker--small{width:24px;height:24px}.el-color-picker--small .el-color-picker__icon,.el-color-picker--small .el-color-picker__empty{transform:scale(.8)}.el-color-picker__trigger{box-sizing:border-box;border:1px solid var(--el-border-color);cursor:pointer;border-radius:4px;justify-content:center;align-items:center;width:100%;height:100%;padding:4px;font-size:0;display:inline-flex;position:relative}.el-color-picker__color{box-sizing:border-box;border:1px solid var(--el-text-color-secondary);border-radius:var(--el-border-radius-small);text-align:center;width:100%;height:100%;display:block;position:relative}.el-color-picker__color.is-alpha{background-image:linear-gradient(45deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-a) 25%, var(--el-color-picker-alpha-bg-b) 25%), linear-gradient(45deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%), linear-gradient(135deg, var(--el-color-picker-alpha-bg-b) 75%, var(--el-color-picker-alpha-bg-a) 75%);background-position:0 0,6px 0,6px -6px,0 6px;background-size:12px 12px}.el-color-picker__color-inner{justify-content:center;align-items:center;width:100%;height:100%;display:inline-flex}.el-color-picker .el-color-picker__empty{color:var(--el-text-color-secondary);font-size:12px}.el-color-picker .el-color-picker__icon{color:#fff;justify-content:center;align-items:center;font-size:12px;display:inline-flex}.el-color-picker__panel{border-radius:var(--el-border-radius-base);box-shadow:var(--el-box-shadow-light);background-color:#fff}.el-color-picker__panel.el-popper{border:1px solid var(--el-border-color-lighter)}.el-color-picker,.el-color-picker__panel{--el-color-picker-alpha-bg-a:#ccc;--el-color-picker-alpha-bg-b:transparent}.dark .el-color-picker,.dark .el-color-picker__panel{--el-color-picker-alpha-bg-a:#333}");
var PRESET_RULES = {
	"36kr": {
		pages: [
			/^https:\/\/36kr\.com\/$/,
			/^https:\/\/36kr\.com\/motif\/\d+$/,
			/^https:\/\/36kr\.com\/newsflashes\/$/,
			/^https:\/\/36kr\.com\/information\/.*/,
			/^https:\/\/36kr\.com\/topics\/\d+$/
		],
		patterns: [/^https:\/\/36kr\.com\/p\/\d+$/, /^https:\/\/36kr\.com\/newsflashes\/\d+$/]
	},
	"bahamut": {
		pages: [/^https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/],
		patterns: [/^https:\/\/forum\.gamer\.com\.tw\/C\.php\?bsn=.*/]
	},
	"bilibili": {
		pages: [
			/^https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/,
			/^https:\/\/space\.bilibili\.com\/\d+\/video/,
			/^https:\/\/space\.bilibili\.com\/\d+\/upload.*/,
			/^https:\/\/www\.bilibili\.com\/video\/BV.*/,
			/^https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/
		],
		patterns: [/^https:\/\/www\.bilibili\.com\/video\/BV.*/]
	},
	"bloomberg": {
		pages: [/^https:\/\/www\.bloomberg\.com\/?$/, /^https:\/\/www\.bloomberg\.com\/.*/],
		patterns: [/^https:\/\/www\.bloomberg\.com\/news\/articles.*/]
	},
	"The Economist": {
		pages: [/^https:\/\/www\.economist\.com\/?$/, /^https:\/\/www\.economist\.com\/.*/],
		patterns: [/^https:\/\/www\.economist\.com\/.+\/\d{4}\/\d{2}\/\d{2}\/.*$/]
	},
	"chiphell": {
		pages: [/^https:\/\/www\.chiphell\.com\/forum-.*/],
		patterns: [/^https:\/\/www\.chiphell\.com\/thread-.*/]
	},
	"douban": {
		pages: [/^https:\/\/www\.douban\.com\/group\/.*/],
		patterns: [/^https:\/\/www\.douban\.com\/group\/topic\/\d+\//]
	},
	"e-hentai-forums": {
		pages: [/^https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/],
		patterns: [/^https:\/\/forums\.e-hentai\.org\/index\.php\?showtopic=\d+/]
	},
	"ehentai": {
		pages: [
			/^https:\/\/e-hentai\.org\/?$/,
			/^https:\/\/exhentai\.org\/?$/,
			/^https:\/\/e-hentai\.org\/toplist\.php\?tl=\d+/,
			/^https:\/\/exhentai\.org\/toplist\.php\?tl=\d+/,
			/^https:\/\/e-hentai\.org\/\?f_search=.*/,
			/^https:\/\/exhentai\.org\/\?f_search=.*/,
			/^https:\/\/e-hentai\.org\/popular/,
			/^https:\/\/exhentai\.org\/popular/,
			/^https:\/\/e-hentai\.org\/watched.*/,
			/^https:\/\/exhentai\.org\/watched.*/,
			/^https:\/\/e-hentai\.org\/tag\/.*/,
			/^https:\/\/exhentai\.org\/tag\/.*/
		],
		patterns: [/^https:\/\/e-hentai\.org\/g\/\d+\/\w+\//, /^https:\/\/exhentai\.org\/g\/\d+\/\w+\//]
	},
	"hacg": {
		pages: [/^https:\/\/www\.hacg\.me\/wp\/$/, /^https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/],
		patterns: [/^https:\/\/www\.hacg\.me\/wp\/\d+\.html/]
	},
	"hanime1": {
		pages: [/^https:\/\/hanime1\.me\/$/, /^https:\/\/hanime1\.me\/search.*/],
		patterns: [/^https:\/\/hanime1\.me\/watch\?v=\d+/]
	},
	"Hacker News": {
		pages: [
			/^https:\/\/news\.ycombinator\.com\/.*/,
			/^https:\/\/news\.ycombinator\.com\/newest.*/,
			/^https:\/\/news\.ycombinator\.com\/front.*/,
			/^https:\/\/news\.ycombinator\.com\/show.*/
		],
		patterns: [/^(?!https:\/\/news\.ycombinator\.com).*/]
	},
	"hostloc": {
		pages: [/^https:\/\/hostloc\.com\/forum-.*/],
		patterns: [/^https:\/\/hostloc\.com\/thread.*/]
	},
	"hupu": {
		pages: [/^https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/],
		patterns: [/^https:\/\/bbs\.hupu\.com\/\d+\.html/]
	},
	"juejin": {
		pages: [/^https:\/\/juejin\.cn\/(\?sort=.*)?$/, /^https:\/\/juejin\.cn\/(hot|following|backend|frontend|android|ios|ai|freebie|career|article).*/],
		patterns: [/^https:\/\/juejin\.cn\/post\/.*/]
	},
	"linuxdo": {
		pages: [
			/^https:\/\/linux\.do\/?$/,
			/^https:\/\/linux\.do\/(latest|new|top|hot|categories)/,
			/^https:\/\/linux\.do\/c\/.*/
		],
		patterns: [/^https:\/\/linux\.do\/t\/topic\/.*/]
	},
	"美卡论坛": {
		pages: [/^https:\/\/www\.uscardforum\.com\/?$/, /^https:\/\/www\.uscardforum\.com\/c\/.*/],
		patterns: [/^https:\/\/www\.uscardforum\.com\/t\/topic\/\d+/]
	},
	"nga": {
		pages: [
			/^https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/,
			/^https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/,
			/^https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/
		],
		patterns: [
			/^https:\/\/bbs\.nga\.cn\/read\.php\?tid.*/,
			/^https:\/\/ngabbs\.com\/read\.php\?tid.*/,
			/^https:\/\/nga\.178\.com\/read\.php\?tid.*/
		]
	},
	"nodeseek": {
		pages: [
			/^https:\/\/www\.nodeseek\.com\/?$/,
			/^https:\/\/www\.nodeseek\.com\/categories\/.*/,
			/^https:\/\/www\.nodeseek\.com\/page-\d+/
		],
		patterns: [/^https:\/\/www\.nodeseek\.com\/post-.*/]
	},
	"pixiv": {
		pages: [
			/^https:\/\/www\.pixiv\.net\/$/,
			/^https:\/\/www\.pixiv\.net\/illustration.*/,
			/^https:\/\/www\.pixiv\.net\/manga.*/,
			/^https:\/\/www\.pixiv\.net\/novel.*/,
			/^https:\/\/www\.pixiv\.net\/novel\/ranking\.php.*/,
			/^https:\/\/www\.pixiv\.net\/tags\/.*/,
			/^https:\/\/www\.pixiv\.net\/new_illust(_r18)?\.php.*/,
			/^https:\/\/www\.pixiv\.net\/bookmark_new_illust(_r18)?\.php.*/,
			/^https:\/\/www\.pixiv\.net\/following\/watchlist\/.*/,
			/^https:\/\/www\.pixiv\.net\/mypixiv_new_illust\.php.*/
		],
		patterns: [/^https:\/\/www\.pixiv\.net\/artworks\/\d+/, /^https:\/\/www\.pixiv\.net\/novel\/show\.php\?id=\d+/]
	},
	"pornhub": {
		pages: [/^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/model\/.*/, /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/pornstar\/.*/],
		patterns: [/^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/view_video\.php\?viewkey=.*/]
	},
	"reddit": {
		pages: [/^https:\/\/www\.reddit\.com\/r\/[^/]+\/?$/],
		patterns: [/^https:\/\/www\.reddit\.com\/r\/[^/]+\/comments\/.*/]
	},
	"sankaku": {
		pages: [/^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/?)?([?#].*)?$/, /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/)?posts\/?([?#].*)?$/],
		patterns: [/^https:\/\/chan\.sankakucomplex\.com\/posts\/[A-Za-z0-9]{11}$/]
	},
	"Seeking Alpha": {
		pages: [/^https:\/\/seekingalpha\.com\/$/, /^https:\/\/seekingalpha\.com\/symbol\/.*/],
		patterns: [/^https:\/\/seekingalpha\.com\/article\/.*/, /^https:\/\/seekingalpha\.com\/news\/.*/]
	},
	"south-plus": {
		pages: [
			/^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/,
			/^https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/,
			/^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/
		],
		patterns: [/^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/read\.php\?tid-.*/, /^https:\/\/bbs\.imoutolove\.me\/read\.php\?tid-.*/]
	},
	"techflow": {
		pages: [/^https:\/\/www\.techflowpost\.com\/$/],
		patterns: [/^https:\/\/www\.techflowpost\.com\/article\/.*/]
	},
	"tieba": {
		pages: [/^https:\/\/tieba\.baidu\.com\/f\?[^#]*kw=.*/, /^https:\/\/tieba\.baidu\.com\/hottopic.*/],
		patterns: [/^https:\/\/tieba\.baidu\.com\/p\/\d+/]
	},
	"通信人家园": {
		pages: [/^https:\/\/www\.txrjy\.com\/forum.*/],
		patterns: [/^https:\/\/www\.txrjy\.com\/thread.*/]
	},
	"51吃瓜网": {
		pages: [/^https:\/\/51cg1\.com\/?$/, /^https:\/\/51cg1\.com\/page\/\d+\/?$/],
		patterns: [/^https:\/\/51cg1\.com\/archives\/\d+\/?$/]
	},
	"v2ex": {
		pages: [
			/^https:\/\/www\.v2ex\.com\/$/,
			/^https:\/\/www\.v2ex\.com\/\?tab.*/,
			/^https:\/\/www\.v2ex\.com\/go\/.*/
		],
		patterns: [/^https:\/\/www\.v2ex\.com\/t\/.*/]
	},
	"一亩三分地": {
		pages: [
			/^https:\/\/www\.1point3acres\.com\/?$/,
			/^https:\/\/www\.1point3acres\.com\/.*/,
			/^https:\/\/1point3acres\.com\/.*/
		],
		patterns: [/^https:\/\/www\.1point3acres\.com\/bbs\/thread-.*/]
	},
	"zhihu": {
		pages: [
			/^https:\/\/www\.zhihu\.com\/$/,
			/^https:\/\/www\.zhihu\.com\/hot$/,
			/^https:\/\/www\.zhihu\.com\/people\/.*/
		],
		patterns: [
			/^https:\/\/www\.zhihu\.com\/question\/\d+\/answer\/\d+$/,
			/^https:\/\/www\.zhihu\.com\/question\/\d+$/,
			/^https:\/\/zhuanlan\.zhihu\.com\/p\/\d+/
		]
	}
};
var browserNavigator = typeof navigator === "undefined" ? void 0 : navigator;
var isMac = (() => {
	if (!browserNavigator) return false;
	if (browserNavigator.userAgentData) return browserNavigator.userAgentData.platform === "macOS";
	return /Mac|iPod|iPhone|iPad/.test(browserNavigator.userAgent);
})();
function getBaseUrl({ href: url, hostname: domain }) {
	if (domain === "www.v2ex.com") return url.split("?")[0].split("#")[0];
	if (domain === "linux.do") return url.replace(/(\/\d+)\/\d+$/, "$1");
	if (domain === "www.bilibili.com") return url.split("?")[0];
	if (domain === "tieba.baidu.com") return url.split("?")[0];
	if (domain === "www.douban.com") return url.split("?")[0];
	if (domain === "ngabbs.com") return url.split("&")[0];
	if (domain === "bbs.nga.cn") return url.split("&")[0];
	if (domain === "nga.178.com") return url.split("&")[0];
	if (domain === "chan.sankakucomplex.com") return url.split(/[?#]/)[0].replace(/\.com\/[a-z]{2}\/posts\//, ".com/posts/");
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
	const sizeInMB = (sizeInBytes / 1048576).toFixed(2);
	let sizeText;
	if (sizeInBytes < 1024) sizeText = `${sizeInBytes} bytes`;
	else if (sizeInBytes < 1048576) sizeText = `${sizeInKB} KB`;
	else sizeText = `${sizeInMB} MB`;
	const itemCount = Object.keys(visitedLinks).length;
	console.log(`visitedLinks storage size: ${itemCount} items, ${sizeText}`);
}
var DEFAULT_SETTINGS = {
	general: {
		color: "rgba(0,0,0,0)",
		expirationTime: 31536e6,
		debug: false
	},
	get batchKey() {
		return {
			ctrlKey: !isMac,
			shiftKey: true,
			altKey: false,
			metaKey: isMac,
			code: "KeyV"
		};
	},
	get presetStates() {
		return Object.keys(PRESET_RULES).reduce((acc, key) => {
			acc[key] = true;
			return acc;
		}, {});
	},
	sync: {
		enabled: false,
		githubToken: "",
		gistId: ""
	}
};
var _hoisted_1$4 = { class: "space-y-6" };
var _hoisted_2$3 = { class: "flex items-center gap-3" };
var _hoisted_3$3 = { class: "space-y-2" };
var _hoisted_4$3 = { class: "flex items-center gap-2" };
var _hoisted_5$3 = { class: "space-y-2" };
var GeneralSettings_default = /* @__PURE__ */ defineComponent({
	__name: "GeneralSettings",
	props: { currentSettings: {} },
	emits: ["save"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const formData = /* @__PURE__ */ ref({ ...props.currentSettings });
		const savedSettings = /* @__PURE__ */ ref({ ...props.currentSettings });
		const hasChanges = computed(() => {
			return JSON.stringify(formData.value) !== JSON.stringify(savedSettings.value);
		});
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
			get: () => Math.round(formData.value.expirationTime / 864e5),
			set: (days) => {
				formData.value.expirationTime = days == null || days < 1 || !Number.isInteger(days) ? savedSettings.value.expirationTime : days * 1e3 * 60 * 60 * 24;
			}
		});
		const handleSave = () => {
			emit("save", { ...formData.value });
			savedSettings.value = { ...formData.value };
		};
		const handleReset = () => {
			formData.value = { ...DEFAULT_SETTINGS.general };
		};
		watch(() => props.currentSettings, (newSettings) => {
			formData.value = { ...newSettings };
			savedSettings.value = { ...newSettings };
		}, {
			immediate: true,
			deep: true
		});
		__expose({
			save: handleSave,
			reset: handleReset,
			getFormData: () => ({ ...formData.value }),
			hasChanges
		});
		return (_ctx, _cache) => {
			const _component_el_color_picker = ElColorPicker;
			const _component_el_input = ElInput;
			const _component_el_form_item = ElFormItem;
			const _component_el_input_number = ElInputNumber;
			const _component_el_switch = ElSwitch;
			const _component_el_form = ElForm;
			return openBlock(), createElementBlock("div", _hoisted_1$4, [_cache[7] || (_cache[7] = createBaseVNode("div", { class: "border-b pb-4" }, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "常规设置"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "自定义链接颜色和行为设置")], -1)), createVNode(_component_el_form, {
				model: formData.value,
				"label-width": "120px",
				class: "space-y-6"
			}, {
				default: withCtx(() => [
					createVNode(_component_el_form_item, { label: "链接颜色" }, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_2$3, [createVNode(_component_el_color_picker, {
							modelValue: formData.value.color,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.color = $event),
							"show-alpha": "",
							predefine: colorPresets,
							size: "large"
						}, null, 8, ["modelValue"]), createVNode(_component_el_input, {
							modelValue: formData.value.color,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.color = $event),
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
							modelValue: formData.value.debug,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.debug = $event),
							size: "large",
							"inline-prompt": ""
						}, null, 8, ["modelValue"]), _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-xs text-gray-500" }, "开启后将在控制台显示详细调试信息", -1))])]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["model"])]);
		};
	}
});
_css(".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:top;transform:scaleY(1)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:bottom;transform:scaleY(1)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:0 0;transform:scale(1)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out, var(--el-transition-duration) padding-left ease-in-out, var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}");
var _hoisted_1$3 = { class: "space-y-4 h-full overflow-y-auto" };
var _hoisted_2$2 = { class: "border-b pb-3" };
var _hoisted_3$2 = { class: "flex items-start justify-between" };
var _hoisted_4$2 = { class: "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 ml-6" };
var _hoisted_5$2 = { class: "flex items-center justify-between" };
var _hoisted_6$2 = { class: "text-right" };
var _hoisted_7$1 = { class: "text-lg font-bold text-green-600" };
var _hoisted_8$1 = { class: "flex space-x-2 ml-4" };
var _hoisted_9$1 = { class: "space-y-2" };
var _hoisted_10$1 = { class: "p-5" };
var _hoisted_11$1 = { class: "flex items-center justify-between" };
var _hoisted_12 = ["onClick"];
var _hoisted_13 = { class: "flex-1" };
var _hoisted_14 = { class: "flex items-center space-x-3" };
var _hoisted_15 = { class: "font-semibold text-gray-900 capitalize text-lg" };
var _hoisted_16 = { class: "text-sm text-gray-500 mt-1" };
var _hoisted_17 = {
	key: 0,
	class: "text-xs text-gray-400 mt-1"
};
var _hoisted_18 = { class: "border-t border-gray-100" };
var _hoisted_19 = { class: "px-5 py-3 bg-gray-50/50 rounded-b-xl space-y-3" };
var _hoisted_20 = {
	key: 0,
	class: "bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4"
};
var _hoisted_21 = { class: "flex items-start space-x-2" };
var _hoisted_22 = { class: "text-sm text-blue-800" };
var _hoisted_23 = {
	key: 1,
	class: "bg-white rounded-lg border border-gray-200 p-4 mb-3"
};
var _hoisted_24 = { class: "flex items-center space-x-2 mb-3" };
var _hoisted_25 = { class: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full" };
var _hoisted_26 = { class: "space-y-2 max-h-32 overflow-y-auto" };
var _hoisted_27 = {
	key: 2,
	class: "bg-white rounded-lg border border-gray-200 p-4"
};
var _hoisted_28 = { class: "flex items-center space-x-2 mb-3" };
var _hoisted_29 = { class: "bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full" };
var _hoisted_30 = { class: "space-y-2 max-h-32 overflow-y-auto" };
var PresetSettings_default = /* @__PURE__ */ defineComponent({
	__name: "PresetSettings",
	props: { currentPresetSettings: {} },
	emits: ["save"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const presetRules = PRESET_RULES;
		const expandedSites = /* @__PURE__ */ ref(/* @__PURE__ */ new Set());
		const presetSettings = /* @__PURE__ */ ref({ ...props.currentPresetSettings });
		const savedPresetSettings = /* @__PURE__ */ ref({ ...props.currentPresetSettings });
		const hasChanges = computed(() => {
			return JSON.stringify(presetSettings.value) !== JSON.stringify(savedPresetSettings.value);
		});
		const updatePresetState = (siteName, enabled) => {
			const isEnabled = Boolean(enabled);
			presetSettings.value[siteName] = isEnabled;
		};
		const toggleAllPresets = (enabled) => {
			Object.keys(presetSettings.value).forEach((siteName) => {
				presetSettings.value[siteName] = enabled;
			});
		};
		const handleSave = () => {
			emit("save", { ...presetSettings.value });
			savedPresetSettings.value = { ...presetSettings.value };
		};
		const handleReset = () => {
			const defaultStates = {};
			Object.keys(PRESET_RULES).forEach((key) => {
				defaultStates[key] = true;
			});
			presetSettings.value = { ...defaultStates };
		};
		const toggleExpanded = (siteName) => {
			if (expandedSites.value.has(siteName)) expandedSites.value.delete(siteName);
			else expandedSites.value.add(siteName);
		};
		const formatRegex = (regex) => {
			if (regex instanceof RegExp) return regex.source;
			return regex;
		};
		watch(() => props.currentPresetSettings, (newStates) => {
			presetSettings.value = { ...newStates };
			savedPresetSettings.value = { ...newStates };
		}, {
			immediate: true,
			deep: true
		});
		__expose({
			save: handleSave,
			reset: handleReset,
			getFormData: () => ({ ...presetSettings.value }),
			hasChanges
		});
		return (_ctx, _cache) => {
			const _component_ArrowRight = resolveComponent("ArrowRight");
			const _component_el_icon = ElIcon;
			const _component_el_switch = ElSwitch;
			const _component_el_collapse_transition = ElCollapseTransition;
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$2, [createBaseVNode("div", _hoisted_3$2, [_cache[4] || (_cache[4] = createBaseVNode("div", null, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "预设网站管理"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "控制脚本在哪些网站生效，点击网站名称展开查看详情")], -1)), createBaseVNode("div", _hoisted_4$2, [createBaseVNode("div", _hoisted_5$2, [createBaseVNode("div", _hoisted_6$2, [_cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-sm text-gray-500" }, "已启用", -1)), createBaseVNode("div", _hoisted_7$1, toDisplayString(Object.values(presetSettings.value).filter(Boolean).length) + " / " + toDisplayString(Object.keys(presetSettings.value).length), 1)]), createBaseVNode("div", _hoisted_8$1, [createBaseVNode("button", {
				onClick: _cache[0] || (_cache[0] = ($event) => toggleAllPresets(true)),
				class: "px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
			}, " 全部启用 "), createBaseVNode("button", {
				onClick: _cache[1] || (_cache[1] = ($event) => toggleAllPresets(false)),
				class: "px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
			}, " 全部禁用 ")])])])])]), createBaseVNode("div", _hoisted_9$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(presetRules), (rule, siteName) => {
				return openBlock(), createElementBlock("div", {
					key: siteName,
					class: "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
				}, [createBaseVNode("div", _hoisted_10$1, [createBaseVNode("div", _hoisted_11$1, [createBaseVNode("div", {
					class: "flex items-center flex-1 cursor-pointer",
					onClick: ($event) => toggleExpanded(siteName)
				}, [createBaseVNode("div", _hoisted_13, [
					createBaseVNode("div", _hoisted_14, [createBaseVNode("h4", _hoisted_15, toDisplayString(siteName), 1), createVNode(_component_el_icon, { class: normalizeClass(["text-gray-400 transition-all duration-200", { "rotate-90 text-blue-500": expandedSites.value.has(siteName) }]) }, {
						default: withCtx(() => [createVNode(_component_ArrowRight)]),
						_: 1
					}, 8, ["class"])]),
					createBaseVNode("p", _hoisted_16, toDisplayString(rule.pages.length) + " 种生效范围 · " + toDisplayString(rule.patterns.length) + " 种可染色链接 ", 1),
					rule.description ? (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString(rule.description), 1)) : createCommentVNode("", true)
				])], 8, _hoisted_12), createBaseVNode("div", {
					class: "flex items-center ml-4",
					onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
				}, [createVNode(_component_el_switch, {
					modelValue: presetSettings.value[siteName],
					"onUpdate:modelValue": ($event) => presetSettings.value[siteName] = $event,
					onChange: ($event) => updatePresetState(siteName, $event),
					size: "default",
					"active-color": "#10b981",
					"inactive-color": "#d1d5db"
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"onChange"
				])])])]), createVNode(_component_el_collapse_transition, null, {
					default: withCtx(() => [withDirectives(createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [createBaseVNode("div", null, [
						rule.description ? (openBlock(), createElementBlock("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [_cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" }, null, -1)), createBaseVNode("p", _hoisted_22, toDisplayString(rule.description), 1)])])) : createCommentVNode("", true),
						rule.pages.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [
							_cache[6] || (_cache[6] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }, null, -1)),
							_cache[7] || (_cache[7] = createBaseVNode("span", { class: "font-medium text-gray-900 text-sm" }, "在下面这些页面中生效", -1)),
							createBaseVNode("span", _hoisted_25, toDisplayString(rule.pages.length) + " 个 ", 1)
						]), createBaseVNode("div", _hoisted_26, [(openBlock(true), createElementBlock(Fragment, null, renderList(rule.pages, (page, index) => {
							return openBlock(), createElementBlock("div", {
								key: index,
								class: "text-xs text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-md border border-gray-200 break-all hover:bg-gray-100 transition-colors"
							}, toDisplayString(formatRegex(page)), 1);
						}), 128))])])) : createCommentVNode("", true),
						rule.patterns.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, [
							_cache[8] || (_cache[8] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-purple-500" }, null, -1)),
							_cache[9] || (_cache[9] = createBaseVNode("span", { class: "font-medium text-gray-900 text-sm" }, "对下面这些链接染色", -1)),
							createBaseVNode("span", _hoisted_29, toDisplayString(rule.patterns.length) + " 个 ", 1)
						]), createBaseVNode("div", _hoisted_30, [(openBlock(true), createElementBlock(Fragment, null, renderList(rule.patterns, (pattern, index) => {
							return openBlock(), createElementBlock("div", {
								key: index,
								class: "text-xs text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-md border border-gray-200 break-all hover:bg-gray-100 transition-colors"
							}, toDisplayString(formatRegex(pattern)), 1);
						}), 128))])])) : createCommentVNode("", true)
					])])], 512), [[vShow, expandedSites.value.has(siteName)]])]),
					_: 2
				}, 1024)]);
			}), 128))])]);
		};
	}
});
_css(".el-alert{--el-alert-padding:8px 16px;--el-alert-border-radius-base:var(--el-border-radius-base);--el-alert-title-font-size:14px;--el-alert-title-with-description-font-size:16px;--el-alert-description-font-size:14px;--el-alert-close-font-size:16px;--el-alert-close-customed-font-size:14px;--el-alert-icon-size:16px;--el-alert-icon-large-size:28px;width:100%;padding:var(--el-alert-padding);box-sizing:border-box;border-radius:var(--el-alert-border-radius-base);background-color:var(--el-color-white);opacity:1;transition:opacity var(--el-transition-duration-fast);align-items:center;margin:0;display:flex;position:relative;overflow:hidden}.el-alert.is-light .el-alert__close-btn{color:var(--el-text-color-placeholder)}.el-alert.is-dark .el-alert__close-btn,.el-alert.is-dark .el-alert__description{color:var(--el-color-white)}.el-alert.is-center{justify-content:center}.el-alert--primary{--el-alert-bg-color:var(--el-color-primary-light-9)}.el-alert--primary.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-primary)}.el-alert--primary.is-light .el-alert__description{color:var(--el-color-primary)}.el-alert--primary.is-dark{background-color:var(--el-color-primary);color:var(--el-color-white)}.el-alert--success{--el-alert-bg-color:var(--el-color-success-light-9)}.el-alert--success.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-success)}.el-alert--success.is-light .el-alert__description{color:var(--el-color-success)}.el-alert--success.is-dark{background-color:var(--el-color-success);color:var(--el-color-white)}.el-alert--info{--el-alert-bg-color:var(--el-color-info-light-9)}.el-alert--info.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-info)}.el-alert--info.is-light .el-alert__description{color:var(--el-color-info)}.el-alert--info.is-dark{background-color:var(--el-color-info);color:var(--el-color-white)}.el-alert--warning{--el-alert-bg-color:var(--el-color-warning-light-9)}.el-alert--warning.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-warning)}.el-alert--warning.is-light .el-alert__description{color:var(--el-color-warning)}.el-alert--warning.is-dark{background-color:var(--el-color-warning);color:var(--el-color-white)}.el-alert--error{--el-alert-bg-color:var(--el-color-error-light-9)}.el-alert--error.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-error)}.el-alert--error.is-light .el-alert__description{color:var(--el-color-error)}.el-alert--error.is-dark{background-color:var(--el-color-error);color:var(--el-color-white)}.el-alert__content{flex-direction:column;gap:4px;display:flex}.el-alert .el-alert__icon{font-size:var(--el-alert-icon-size);width:var(--el-alert-icon-size);margin-right:8px}.el-alert .el-alert__icon.is-big{font-size:var(--el-alert-icon-large-size);width:var(--el-alert-icon-large-size);margin-right:12px}.el-alert__title{font-size:var(--el-alert-title-font-size);line-height:24px}.el-alert__title.with-description{font-size:var(--el-alert-title-with-description-font-size)}.el-alert .el-alert__description{font-size:var(--el-alert-description-font-size);margin:0}.el-alert .el-alert__close-btn{font-size:var(--el-alert-close-font-size);opacity:1;cursor:pointer;position:absolute;top:12px;right:16px}.el-alert .el-alert__close-btn.is-customed{font-style:normal;font-size:var(--el-alert-close-customed-font-size);line-height:24px;top:8px}.el-alert-fade-enter-from,.el-alert-fade-leave-active{opacity:0}");
function toShortcut({ ctrlKey, shiftKey, altKey, metaKey, code }) {
	return {
		ctrlKey,
		shiftKey,
		altKey,
		metaKey,
		code
	};
}
function matchesShortcut(event, shortcut) {
	const pressed = toShortcut(event);
	return Object.keys(pressed).every((k) => pressed[k] === shortcut[k]);
}
var _hoisted_1$2 = { class: "space-y-6" };
var ShortcutSettings_default = /* @__PURE__ */ defineComponent({
	__name: "ShortcutSettings",
	props: {
		currentSettings: {},
		isMac: { type: Boolean },
		visible: { type: Boolean },
		isActive: { type: Boolean }
	},
	emits: ["save"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const formData = /* @__PURE__ */ ref({ ...props.currentSettings });
		const savedSettings = /* @__PURE__ */ ref({ ...props.currentSettings });
		const newSettings = /* @__PURE__ */ ref({ ...props.currentSettings });
		const hasNewKeyPress = /* @__PURE__ */ ref(false);
		const isResetMode = /* @__PURE__ */ ref(false);
		const hintText = computed(() => {
			if (hasNewKeyPress.value) return isResetMode.value ? "已设置为默认快捷键，点击保存应用设置" : "已记录新快捷键，点击保存应用设置";
			return "请按下您想要使用的快捷键组合...";
		});
		const currentShortcutDisplay = computed(() => {
			const settings = hasNewKeyPress.value ? newSettings.value : formData.value;
			const shortcutText = [];
			if (settings.metaKey) shortcutText.push(props.isMac ? "⌘ Command" : "Win");
			if (settings.ctrlKey) shortcutText.push(props.isMac ? "⌃ Control" : "Ctrl");
			if (settings.altKey) shortcutText.push(props.isMac ? "⌥ Option" : "Alt");
			if (settings.shiftKey) shortcutText.push(props.isMac ? "⇧ Shift" : "Shift");
			if (settings.code) shortcutText.push({
				"ArrowUp": "↑",
				"ArrowDown": "↓",
				"ArrowLeft": "←",
				"ArrowRight": "→",
				"Enter": "⏎",
				"Backspace": "⌫",
				"Delete": "⌦",
				"Escape": "Esc"
			}[settings.code] || settings.code.replace(/^(Key|Digit)/, ""));
			return shortcutText.length > 0 ? shortcutText.join(" + ") : "未设置";
		});
		const handleKeyDown = (e) => {
			if (/^(Control|Shift|Alt|Meta)(Left|Right)$/.test(e.code)) return;
			if ([
				"",
				"Tab",
				"CapsLock",
				"NumLock",
				"ScrollLock",
				"Insert",
				"PrintScreen",
				"Pause"
			].includes(e.code)) return;
			e.preventDefault();
			e.stopPropagation();
			newSettings.value = toShortcut(e);
			console.log("快捷键记录:", newSettings.value);
			hasNewKeyPress.value = true;
			isResetMode.value = false;
		};
		const handleSave = () => {
			if (hasNewKeyPress.value) {
				emit("save", { ...newSettings.value });
				formData.value = { ...newSettings.value };
				savedSettings.value = { ...newSettings.value };
				hasNewKeyPress.value = false;
				isResetMode.value = false;
			}
		};
		const handleReset = () => {
			newSettings.value = { ...DEFAULT_SETTINGS.batchKey };
			hasNewKeyPress.value = true;
			isResetMode.value = true;
		};
		watch(() => props.currentSettings, (currentSettings) => {
			formData.value = { ...currentSettings };
			savedSettings.value = { ...currentSettings };
			if (!hasNewKeyPress.value) newSettings.value = { ...currentSettings };
			isResetMode.value = false;
		}, {
			immediate: true,
			deep: true
		});
		watch([() => props.visible, () => props.isActive], ([isVisible, isActive]) => {
			console.log("对话框状态变化:", {
				isVisible,
				isActive
			});
			if (isVisible && isActive) {
				console.log("添加键盘监听器");
				document.addEventListener("keydown", handleKeyDown, true);
			} else {
				console.log("移除键盘监听器");
				document.removeEventListener("keydown", handleKeyDown, true);
				if (!isVisible) {
					hasNewKeyPress.value = false;
					isResetMode.value = false;
				}
			}
		}, { immediate: true });
		onUnmounted(() => {
			document.removeEventListener("keydown", handleKeyDown, true);
		});
		__expose({
			save: handleSave,
			reset: handleReset,
			getFormData: () => hasNewKeyPress.value ? { ...newSettings.value } : { ...formData.value },
			hasChanges: computed(() => {
				if (hasNewKeyPress.value) return JSON.stringify(newSettings.value) !== JSON.stringify(savedSettings.value);
				return false;
			})
		});
		return (_ctx, _cache) => {
			const _component_el_input = ElInput;
			const _component_el_form_item = ElFormItem;
			const _component_el_alert = ElAlert;
			const _component_el_form = ElForm;
			return openBlock(), createElementBlock("div", _hoisted_1$2, [_cache[1] || (_cache[1] = createBaseVNode("div", { class: "border-b pb-4" }, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "批量染色快捷键设置"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "按下快捷键，对当前页面上所有符合规则的链接进行染色")], -1)), createVNode(_component_el_form, {
				model: formData.value,
				"label-width": "120px",
				class: "space-y-6"
			}, {
				default: withCtx(() => [createVNode(_component_el_form_item, { label: "当前快捷键" }, {
					default: withCtx(() => [createVNode(_component_el_input, {
						modelValue: currentShortcutDisplay.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentShortcutDisplay.value = $event),
						readonly: "",
						size: "large",
						class: "font-mono"
					}, null, 8, ["modelValue"])]),
					_: 1
				}), createVNode(_component_el_form_item, null, {
					default: withCtx(() => [createVNode(_component_el_alert, {
						title: hintText.value,
						type: hasNewKeyPress.value ? "success" : "info",
						"show-icon": "",
						closable: false
					}, null, 8, ["title", "type"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["model"])]);
		};
	}
});
_css(".el-tag{--el-tag-font-size:12px;--el-tag-border-radius:4px;--el-tag-border-radius-rounded:9999px;background-color:var(--el-tag-bg-color);border-color:var(--el-tag-border-color);color:var(--el-tag-text-color);vertical-align:middle;height:24px;font-size:var(--el-tag-font-size);border-radius:var(--el-tag-border-radius);box-sizing:border-box;white-space:nowrap;--el-icon-size:14px;--el-tag-bg-color:var(--el-color-primary-light-9);--el-tag-border-color:var(--el-color-primary-light-8);--el-tag-hover-color:var(--el-color-primary);border-style:solid;border-width:1px;justify-content:center;align-items:center;padding:0 9px;line-height:1;display:inline-flex}.el-tag.el-tag--primary{--el-tag-bg-color:var(--el-color-primary-light-9);--el-tag-border-color:var(--el-color-primary-light-8);--el-tag-hover-color:var(--el-color-primary)}.el-tag.el-tag--success{--el-tag-bg-color:var(--el-color-success-light-9);--el-tag-border-color:var(--el-color-success-light-8);--el-tag-hover-color:var(--el-color-success)}.el-tag.el-tag--warning{--el-tag-bg-color:var(--el-color-warning-light-9);--el-tag-border-color:var(--el-color-warning-light-8);--el-tag-hover-color:var(--el-color-warning)}.el-tag.el-tag--danger{--el-tag-bg-color:var(--el-color-danger-light-9);--el-tag-border-color:var(--el-color-danger-light-8);--el-tag-hover-color:var(--el-color-danger)}.el-tag.el-tag--error{--el-tag-bg-color:var(--el-color-error-light-9);--el-tag-border-color:var(--el-color-error-light-8);--el-tag-hover-color:var(--el-color-error)}.el-tag.el-tag--info{--el-tag-bg-color:var(--el-color-info-light-9);--el-tag-border-color:var(--el-color-info-light-8);--el-tag-hover-color:var(--el-color-info)}.el-tag.is-hit{border-color:var(--el-color-primary)}.el-tag.is-round{border-radius:var(--el-tag-border-radius-rounded)}.el-tag .el-tag__close{color:var(--el-tag-text-color);flex-shrink:0}.el-tag .el-tag__close:hover{color:var(--el-color-white);background-color:var(--el-tag-hover-color)}.el-tag.el-tag--primary{--el-tag-text-color:var(--el-color-primary)}.el-tag.el-tag--success{--el-tag-text-color:var(--el-color-success)}.el-tag.el-tag--warning{--el-tag-text-color:var(--el-color-warning)}.el-tag.el-tag--danger{--el-tag-text-color:var(--el-color-danger)}.el-tag.el-tag--error{--el-tag-text-color:var(--el-color-error)}.el-tag.el-tag--info{--el-tag-text-color:var(--el-color-info)}.el-tag .el-icon{cursor:pointer;font-size:calc(var(--el-icon-size) - 2px);height:var(--el-icon-size);width:var(--el-icon-size);border-radius:50%}.el-tag .el-tag__close{background-color:#0000;border:none;border-radius:50%;outline:none;margin-left:6px;padding:0;overflow:hidden}.el-tag .el-tag__close:focus-visible{outline:2px solid var(--el-color-primary);outline-offset:2px}.el-tag .el-tag__close .el-icon{display:flex}.el-tag--dark{--el-tag-text-color:var(--el-color-white);--el-tag-bg-color:var(--el-color-primary);--el-tag-border-color:var(--el-color-primary);--el-tag-hover-color:var(--el-color-primary-light-3)}.el-tag--dark.el-tag--primary{--el-tag-bg-color:var(--el-color-primary);--el-tag-border-color:var(--el-color-primary);--el-tag-hover-color:var(--el-color-primary-light-3)}.el-tag--dark.el-tag--success{--el-tag-bg-color:var(--el-color-success);--el-tag-border-color:var(--el-color-success);--el-tag-hover-color:var(--el-color-success-light-3)}.el-tag--dark.el-tag--warning{--el-tag-bg-color:var(--el-color-warning);--el-tag-border-color:var(--el-color-warning);--el-tag-hover-color:var(--el-color-warning-light-3)}.el-tag--dark.el-tag--danger{--el-tag-bg-color:var(--el-color-danger);--el-tag-border-color:var(--el-color-danger);--el-tag-hover-color:var(--el-color-danger-light-3)}.el-tag--dark.el-tag--error{--el-tag-bg-color:var(--el-color-error);--el-tag-border-color:var(--el-color-error);--el-tag-hover-color:var(--el-color-error-light-3)}.el-tag--dark.el-tag--info{--el-tag-bg-color:var(--el-color-info);--el-tag-border-color:var(--el-color-info);--el-tag-hover-color:var(--el-color-info-light-3)}.el-tag--dark.el-tag--primary,.el-tag--dark.el-tag--success,.el-tag--dark.el-tag--warning,.el-tag--dark.el-tag--danger,.el-tag--dark.el-tag--error,.el-tag--dark.el-tag--info{--el-tag-text-color:var(--el-color-white)}.el-tag--plain,.el-tag--plain.el-tag--primary{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-primary-light-5);--el-tag-hover-color:var(--el-color-primary)}.el-tag--plain.el-tag--success{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-success-light-5);--el-tag-hover-color:var(--el-color-success)}.el-tag--plain.el-tag--warning{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-warning-light-5);--el-tag-hover-color:var(--el-color-warning)}.el-tag--plain.el-tag--danger{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-danger-light-5);--el-tag-hover-color:var(--el-color-danger)}.el-tag--plain.el-tag--error{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-error-light-5);--el-tag-hover-color:var(--el-color-error)}.el-tag--plain.el-tag--info{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-info-light-5);--el-tag-hover-color:var(--el-color-info)}.el-tag.is-closable{padding-right:5px}.el-tag--large{--el-icon-size:16px;height:32px;padding:0 11px}.el-tag--large .el-tag__close{margin-left:8px}.el-tag--large.is-closable{padding-right:7px}.el-tag--small{--el-icon-size:12px;height:20px;padding:0 7px}.el-tag--small .el-tag__close{margin-left:4px}.el-tag--small.is-closable{padding-right:3px}.el-tag--small .el-icon-close{transform:scale(.8)}.el-tag.el-tag--primary.is-hit{border-color:var(--el-color-primary)}.el-tag.el-tag--success.is-hit{border-color:var(--el-color-success)}.el-tag.el-tag--warning.is-hit{border-color:var(--el-color-warning)}.el-tag.el-tag--danger.is-hit{border-color:var(--el-color-danger)}.el-tag.el-tag--error.is-hit{border-color:var(--el-color-error)}.el-tag.el-tag--info.is-hit{border-color:var(--el-color-info)}");
_css(".el-card{--el-card-border-color:var(--el-border-color-light);--el-card-border-radius:4px;--el-card-padding:20px;--el-card-bg-color:var(--el-fill-color-blank);border-radius:var(--el-card-border-radius);border:1px solid var(--el-card-border-color);background-color:var(--el-card-bg-color);color:var(--el-text-color-primary);transition:var(--el-transition-duration);flex-direction:column;display:flex;overflow:hidden}.el-card.is-always-shadow,.el-card.is-hover-shadow:hover,.el-card.is-hover-shadow:focus{box-shadow:var(--el-box-shadow-light)}.el-card__header{padding:calc(var(--el-card-padding) - 2px) var(--el-card-padding);border-bottom:1px solid var(--el-card-border-color);box-sizing:border-box}.el-card__body{padding:var(--el-card-padding);flex-grow:1;overflow:auto}.el-card__footer{padding:calc(var(--el-card-padding) - 2px) var(--el-card-padding);border-top:1px solid var(--el-card-border-color);box-sizing:border-box}");
var _GM_addValueChangeListener = /* @__PURE__ */ (() => typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0)();
var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
var _GM_deleteValues = /* @__PURE__ */ (() => typeof GM_deleteValues != "undefined" ? GM_deleteValues : void 0)();
var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
var _GM_listValues = /* @__PURE__ */ (() => typeof GM_listValues != "undefined" ? GM_listValues : void 0)();
var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
var _GM_removeValueChangeListener = /* @__PURE__ */ (() => typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0)();
var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
var _GM_setValues = /* @__PURE__ */ (() => typeof GM_setValues != "undefined" ? GM_setValues : void 0)();
var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
var LEGACY_LINKS_KEY = "visitedLinks";
function isLinkKey(key) {
	return key.includes(":");
}
function setLinks(links) {
	if (_GM_setValues) _GM_setValues(links);
	else for (const url in links) _GM_setValue(url, links[url]);
}
function deleteLinks(urls) {
	if (_GM_deleteValues) _GM_deleteValues(urls);
	else for (const url of urls) _GM_deleteValue(url);
}
function isVisited(url) {
	return _GM_getValue(url) !== void 0;
}
function recordVisit(url) {
	if (isVisited(url)) return false;
	_GM_setValue(url, Date.now());
	return true;
}
function loadLinks() {
	const links = {};
	for (const key of _GM_listValues()) if (isLinkKey(key)) links[key] = _GM_getValue(key);
	return links;
}
function mergeLinks(links) {
	const updates = {};
	for (const [url, time] of Object.entries(links)) {
		if (!isLinkKey(url) || !Number.isFinite(time)) continue;
		const current = _GM_getValue(url);
		if (current === void 0 || current < time) updates[url] = time;
	}
	const count = Object.keys(updates).length;
	if (count > 0) setLinks(updates);
	return count;
}
function deleteExpiredLinks(expirationTime) {
	const now = Date.now();
	const links = loadLinks();
	const expiredUrls = Object.keys(links).filter((url) => now - links[url] > expirationTime);
	if (expiredUrls.length > 0) deleteLinks(expiredUrls);
}
function migrateLegacyLinks() {
	const legacyLinks = _GM_getValue(LEGACY_LINKS_KEY);
	if (!legacyLinks) return;
	const mergedCount = mergeLinks(legacyLinks);
	_GM_deleteValue(LEGACY_LINKS_KEY);
	console.log(`已把 ${mergedCount} 条访问记录迁移为逐条存储`);
}
var LAST_SYNC_TIME_KEY = "lastSyncTime";
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
function mitt_default(n) {
	return {
		all: n = n || /* @__PURE__ */ new Map(),
		on: function(t, e) {
			var i = n.get(t);
			i ? i.push(e) : n.set(t, [e]);
		},
		off: function(t, e) {
			var i = n.get(t);
			i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
		},
		emit: function(t, e) {
			var i = n.get(t);
			i && i.slice().map(function(n) {
				n(e);
			}), (i = n.get("*")) && i.slice().map(function(n) {
				n(t, e);
			});
		}
	};
}
var eventBus = mitt_default();
var GITHUB_ACCEPT_HEADER = "application/vnd.github.v3+json";
var SYNC_STORAGE_VERSION = "v3";
var SYNC_STORAGE_ENCODING = "gzip-base64-json";
var V3_RAW_GROUP_KEY = "@raw";
var textEncoder = new TextEncoder();
var KNOWN_SYNC_POLLUTION_KEYS = [
	"syncVersion",
	"encoding",
	"payload",
	"itemCount",
	"updatedAt",
	"originalBytes",
	"compressedBytes"
];
var GITHUB_HTTP_STATUS_HINTS = {
	401: "令牌无效或已过期",
	403: "令牌权限不足，或触发了 GitHub API 限流",
	404: "Gist 不存在、ID 填写有误，或令牌无权访问"
};
var compressionSupportCache = /* @__PURE__ */ new Map();
var knownSyncPollutionKeySet = new Set(KNOWN_SYNC_POLLUTION_KEYS);
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isVisitedLinksData(value) {
	if (!isPlainObject(value)) return false;
	return Object.values(value).every((timestamp) => typeof timestamp === "number" && Number.isFinite(timestamp));
}
function extractVisitedLinksFromUnknown(value) {
	if (isVisitedLinksData(value)) return value;
	if (!isPlainObject(value) || !("visitedLinks" in value)) return null;
	const { visitedLinks } = value;
	return isVisitedLinksData(visitedLinks) ? visitedLinks : null;
}
function isSyncData(value) {
	if (!isPlainObject(value) || !("visitedLinks" in value)) return false;
	const { visitedLinks, lastSyncTime } = value;
	return isVisitedLinksData(visitedLinks) && (!("lastSyncTime" in value) || typeof lastSyncTime === "number" && Number.isFinite(lastSyncTime));
}
function isSyncStorageVersion(value) {
	return value === "v2" || value === "v3";
}
function isCompressedSyncEnvelope(value) {
	if (!isPlainObject(value)) return false;
	const isKnownEncoding = value.encoding === "gzip-base64-json" || value.encoding === "zstd-base64-json";
	return isSyncStorageVersion(value.syncVersion) && isKnownEncoding && typeof value.payload === "string" && typeof value.itemCount === "number" && typeof value.updatedAt === "number" && typeof value.originalBytes === "number" && typeof value.compressedBytes === "number";
}
function getCompressionFormat(encoding) {
	if (encoding === "gzip-base64-json") return "gzip";
	return "zstd";
}
function getEncodingDisplayName(encoding) {
	return encoding === "gzip-base64-json" ? "gzip" : "Zstandard（zstd）";
}
function getErrorMessage(error) {
	return error instanceof Error ? error.message : String(error);
}
function getValueTypeLabel(value) {
	if (value === null) return "null";
	if (Array.isArray(value)) return "array";
	return typeof value;
}
function getObjectKeyPreview(value, limit = 5) {
	const keys = Object.keys(value);
	if (keys.length === 0) return "(empty)";
	if (keys.length <= limit) return keys.join(", ");
	return `${keys.slice(0, limit).join(", ")} 等 ${keys.length} 个键`;
}
function getInvalidVisitedLinksSamples(value, limit = 3) {
	const samples = [];
	for (const [url, timestamp] of Object.entries(value)) {
		if (typeof timestamp === "number" && Number.isFinite(timestamp)) continue;
		samples.push(`${url}=${String(timestamp)} (${getValueTypeLabel(timestamp)})`);
		if (samples.length >= limit) break;
	}
	return samples;
}
function getKnownSyncPollutionKeys(value, limit = KNOWN_SYNC_POLLUTION_KEYS.length) {
	const pollutionKeys = [];
	for (const key of Object.keys(value)) {
		if (!knownSyncPollutionKeySet.has(key)) continue;
		pollutionKeys.push(key);
		if (pollutionKeys.length >= limit) break;
	}
	return pollutionKeys;
}
function appendRemovedSample(samples, key, value, limit = 3) {
	if (samples.length >= limit) return;
	samples.push(`${key}=${String(value)} (${getValueTypeLabel(value)})`);
}
function describeVisitedLinksCandidate(value) {
	if (!isPlainObject(value)) return `类型是 ${getValueTypeLabel(value)}，不是对象`;
	const invalidSamples = getInvalidVisitedLinksSamples(value);
	const knownPollutionKeys = getKnownSyncPollutionKeys(value);
	const issues = [];
	if (invalidSamples.length > 0) issues.push(`发现非数字时间戳示例: ${invalidSamples.join("; ")}`);
	if (knownPollutionKeys.length > 0) issues.push(`命中疑似同步包污染键: ${knownPollutionKeys.join(", ")}`);
	if (issues.length === 0) return `对象共有 ${Object.keys(value).length} 个键，但未通过预期校验`;
	return issues.join("；");
}
function describeV3PathRecord(value) {
	if (!Array.isArray(value)) return `类型是 ${getValueTypeLabel(value)}，不是数组`;
	if (value.length !== 3) return `数组长度为 ${value.length}，期望为 3`;
	const [prefixLength, suffix, timestamp] = value;
	const issues = [];
	if (typeof prefixLength !== "number" || !Number.isInteger(prefixLength) || prefixLength < 0) issues.push(`prefixLength=${String(prefixLength)}`);
	if (typeof suffix !== "string") issues.push(`suffix 类型为 ${getValueTypeLabel(suffix)}`);
	if (typeof timestamp !== "number" || !Number.isFinite(timestamp)) issues.push(`timestamp=${String(timestamp)}`);
	if (issues.length === 0) return "[prefixLength, suffix, timestamp]";
	return issues.join("; ");
}
function describeV3GroupedPayloadCandidate(value) {
	if (!isPlainObject(value)) return `解压后顶层类型是 ${getValueTypeLabel(value)}，期望是 host 分组对象`;
	const groups = Object.entries(value);
	for (const [groupKey, records] of groups) {
		if (!Array.isArray(records)) return `分组 ${groupKey} 的类型是 ${getValueTypeLabel(records)}，期望是数组`;
		for (let index = 0; index < records.length; index++) {
			const record = records[index];
			const reason = describeV3PathRecord(record);
			if (reason !== "[prefixLength, suffix, timestamp]") return `分组 ${groupKey} 的第 ${index + 1} 条记录无效: ${reason}`;
		}
	}
	return `对象共有 ${groups.length} 个分组，但未通过 v3 payload 校验`;
}
function describeCompressedPayloadShape(value, syncVersion) {
	if (syncVersion === "v3") return describeV3GroupedPayloadCandidate(value);
	if (isVisitedLinksData(value)) return `已解析为 visitedLinks，共 ${Object.keys(value).length} 条记录`;
	if (!isPlainObject(value)) return `解压后顶层类型是 ${getValueTypeLabel(value)}，期望是 visitedLinks 对象或包含 visitedLinks 的对象`;
	if ("visitedLinks" in value) return `检测到 visitedLinks 字段，但其内容无效: ${describeVisitedLinksCandidate(value.visitedLinks)}`;
	return `解压后对象未通过 visitedLinks 校验: ${describeVisitedLinksCandidate(value)}`;
}
function describeCompressedEnvelopeShape(value, syncVersion) {
	const issues = [];
	if (value.syncVersion !== syncVersion) issues.push(`syncVersion=${String(value.syncVersion)}`);
	if (value.encoding !== "gzip-base64-json" && value.encoding !== "zstd-base64-json") issues.push(`encoding=${String(value.encoding)}`);
	if (typeof value.payload !== "string") issues.push(`payload 类型为 ${getValueTypeLabel(value.payload)}`);
	if (typeof value.itemCount !== "number") issues.push(`itemCount 类型为 ${getValueTypeLabel(value.itemCount)}`);
	if (typeof value.updatedAt !== "number") issues.push(`updatedAt 类型为 ${getValueTypeLabel(value.updatedAt)}`);
	if (typeof value.originalBytes !== "number") issues.push(`originalBytes 类型为 ${getValueTypeLabel(value.originalBytes)}`);
	if (typeof value.compressedBytes !== "number") issues.push(`compressedBytes 类型为 ${getValueTypeLabel(value.compressedBytes)}`);
	if (issues.length === 0) return `键: ${getObjectKeyPreview(value)}`;
	return issues.join("; ");
}
function tryRepairVisitedLinksData(value) {
	if (!isPlainObject(value)) return null;
	const candidateValue = "visitedLinks" in value ? value.visitedLinks : value;
	if (!isPlainObject(candidateValue)) return null;
	const visitedLinks = {};
	const removedSamples = [];
	const knownPollutionKeys = /* @__PURE__ */ new Set();
	let removedCount = 0;
	for (const [key, timestamp] of Object.entries(candidateValue)) {
		if (knownSyncPollutionKeySet.has(key)) {
			removedCount++;
			knownPollutionKeys.add(key);
			appendRemovedSample(removedSamples, key, timestamp);
			continue;
		}
		if (typeof timestamp === "number" && Number.isFinite(timestamp)) {
			visitedLinks[key] = timestamp;
			continue;
		}
		removedCount++;
		appendRemovedSample(removedSamples, key, timestamp);
	}
	if (Object.keys(visitedLinks).length === 0 && Object.keys(candidateValue).length > 0) return null;
	return {
		visitedLinks,
		removedCount,
		removedSamples,
		knownPollutionKeys: Array.from(knownPollutionKeys)
	};
}
function describeVisitedLinksRepairFailure(value) {
	if (!isPlainObject(value)) return `顶层类型是 ${getValueTypeLabel(value)}，期望是对象`;
	if ("visitedLinks" in value) return `检测到 visitedLinks 字段，但其内容无效: ${describeVisitedLinksCandidate(value.visitedLinks)}`;
	return `对象清洗后没有可用记录: ${describeVisitedLinksCandidate(value)}`;
}
function logVisitedLinksRepair(source, result) {
	if (result.removedCount === 0) return;
	const sampleText = result.removedSamples.length > 0 ? result.removedSamples.join("; ") : "(没有可展示的样例)";
	const pollutionHint = result.knownPollutionKeys.length > 0 ? ` 命中疑似同步包污染键: ${result.knownPollutionKeys.join(", ")}。仍有旧设备运行旧脚本时，污染可能再次出现，请升级旧设备。` : "";
	console.warn(`[同步自愈][${source}] 已清理 ${result.removedCount} 条无效记录，保留 ${Object.keys(result.visitedLinks).length} 条有效记录。样例: ${sampleText}.${pollutionHint}`);
}
function requireVisitedLinksData(value, source) {
	const result = tryRepairVisitedLinksData(value);
	if (!result) throw new Error(`${source} 数据格式无效: ${describeVisitedLinksRepairFailure(value)}`);
	logVisitedLinksRepair(source, result);
	return result;
}
function supportsCompressionEncoding(encoding) {
	const cachedSupport = compressionSupportCache.get(encoding);
	if (cachedSupport !== void 0) return cachedSupport;
	if (typeof CompressionStream === "undefined" || typeof DecompressionStream === "undefined") {
		compressionSupportCache.set(encoding, false);
		return false;
	}
	try {
		const format = getCompressionFormat(encoding);
		new CompressionStream(format);
		new DecompressionStream(format);
		compressionSupportCache.set(encoding, true);
	} catch {
		compressionSupportCache.set(encoding, false);
	}
	return compressionSupportCache.get(encoding) === true;
}
function isGzipSyncSupported() {
	return supportsCompressionEncoding(SYNC_STORAGE_ENCODING);
}
function assertCompressionEncodingSupported(encoding) {
	if (!supportsCompressionEncoding(encoding)) throw new Error(`当前浏览器不支持 ${getEncodingDisplayName(encoding)} Compression Streams，无法使用对应的同步存储格式`);
}
function getByteLength(text) {
	return textEncoder.encode(text).length;
}
function bytesToBase64(bytes) {
	const CHUNK_SIZE = 32768;
	let binary = "";
	for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
		const chunk = bytes.subarray(i, i + CHUNK_SIZE);
		binary += String.fromCharCode(...chunk);
	}
	return btoa(binary);
}
function base64ToBytes(base64) {
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}
function toBlobCompatibleBytes(bytes) {
	return Uint8Array.from(bytes);
}
async function compressText(text, encoding) {
	assertCompressionEncodingSupported(encoding);
	const format = getCompressionFormat(encoding);
	const compressedStream = new Blob([text]).stream().pipeThrough(new CompressionStream(format));
	return new Uint8Array(await new Response(compressedStream).arrayBuffer());
}
async function decompressText(compressedBytes, encoding) {
	assertCompressionEncodingSupported(encoding);
	const format = getCompressionFormat(encoding);
	const decompressedStream = new Blob([toBlobCompatibleBytes(compressedBytes)]).stream().pipeThrough(new DecompressionStream(format));
	return await new Response(decompressedStream).text();
}
function compareTextAscending(left, right) {
	if (left < right) return -1;
	if (left > right) return 1;
	return 0;
}
function getCommonPrefixLength(left, right) {
	const maxLength = Math.min(left.length, right.length);
	let index = 0;
	while (index < maxLength && left.charCodeAt(index) === right.charCodeAt(index)) index++;
	return index;
}
function getV3GroupDescriptor(url) {
	try {
		const parsedUrl = new URL(url);
		const text = `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
		return {
			groupKey: parsedUrl.protocol === "https:" ? parsedUrl.host : `${parsedUrl.protocol}//${parsedUrl.host}`,
			text
		};
	} catch {
		return {
			groupKey: V3_RAW_GROUP_KEY,
			text: url
		};
	}
}
function getOriginFromV3GroupKey(groupKey) {
	return groupKey.includes("://") ? groupKey : `https://${groupKey}`;
}
function isV3PathRecordValue(value) {
	return Array.isArray(value) && value.length === 3 && typeof value[0] === "number" && Number.isInteger(value[0]) && value[0] >= 0 && typeof value[1] === "string" && typeof value[2] === "number" && Number.isFinite(value[2]);
}
function encodeV3GroupedPayload(visitedLinks) {
	const groupedEntries = /* @__PURE__ */ new Map();
	for (const [url, timestamp] of Object.entries(visitedLinks)) {
		const { groupKey, text } = getV3GroupDescriptor(url);
		const groupEntries = groupedEntries.get(groupKey);
		if (groupEntries) {
			groupEntries.push({
				text,
				timestamp
			});
			continue;
		}
		groupedEntries.set(groupKey, [{
			text,
			timestamp
		}]);
	}
	const payload = {};
	for (const groupKey of Array.from(groupedEntries.keys()).sort(compareTextAscending)) {
		const sortedEntries = groupedEntries.get(groupKey);
		sortedEntries.sort((left, right) => compareTextAscending(left.text, right.text));
		let previousText = "";
		payload[groupKey] = sortedEntries.map(({ text, timestamp }) => {
			const prefixLength = getCommonPrefixLength(previousText, text);
			const record = [
				prefixLength,
				text.slice(prefixLength),
				timestamp
			];
			previousText = text;
			return record;
		});
	}
	return payload;
}
function decodeV3GroupedPayload(payload) {
	if (!isPlainObject(payload)) throw new Error(`同步存储 v3 数据格式无效: ${describeV3GroupedPayloadCandidate(payload)}`);
	const visitedLinks = {};
	for (const [groupKey, records] of Object.entries(payload)) {
		if (!Array.isArray(records)) throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的类型是 ${getValueTypeLabel(records)}，期望是数组`);
		let previousText = "";
		for (let index = 0; index < records.length; index++) {
			const record = records[index];
			if (!isV3PathRecordValue(record)) throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的第 ${index + 1} 条记录无效: ${describeV3PathRecord(record)}`);
			const [prefixLength, suffix, timestamp] = record;
			if (prefixLength > previousText.length) throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的第 ${index + 1} 条记录前缀长度越界`);
			const text = `${previousText.slice(0, prefixLength)}${suffix}`;
			previousText = text;
			if (groupKey === V3_RAW_GROUP_KEY) {
				visitedLinks[text] = timestamp;
				continue;
			}
			if (!text.startsWith("/")) throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的第 ${index + 1} 条记录恢复出的路径不是以 / 开头`);
			visitedLinks[`${getOriginFromV3GroupKey(groupKey)}${text}`] = timestamp;
		}
	}
	return visitedLinks;
}
function getFirstGistFile(gist) {
	const firstFile = Object.values(gist.files)[0];
	if (!firstFile) throw new Error("Gist 中没有可用文件");
	return firstFile;
}
function getFirstGistFileName(gist) {
	const fileName = Object.keys(gist.files)[0];
	if (!fileName) throw new Error("Gist 中没有可用文件名");
	return fileName;
}
function fetchGistRawContent(token, rawUrl) {
	return new Promise((resolve, reject) => {
		_GM_xmlhttpRequest({
			method: "GET",
			url: rawUrl,
			headers: { Authorization: `Bearer ${token}` },
			responseType: "text",
			onload: (response) => {
				if (response.status < 200 || response.status >= 300) {
					reject(/* @__PURE__ */ new Error(`获取 Gist 原始内容失败: ${response.status}`));
					return;
				}
				resolve(response.responseText);
			},
			onerror: () => {
				reject(/* @__PURE__ */ new Error("获取 Gist 原始内容失败: 网络错误"));
			},
			ontimeout: () => {
				reject(/* @__PURE__ */ new Error("获取 Gist 原始内容失败: 请求超时"));
			}
		});
	});
}
async function readFirstGistFileContent(token, gist) {
	const file = getFirstGistFile(gist);
	if (file.truncated) return {
		contentText: await fetchGistRawContent(token, file.raw_url),
		truncated: true
	};
	return {
		contentText: file.content ?? "",
		truncated: false
	};
}
async function serializeVisitedLinksForGist(data) {
	const visitedLinks = requireVisitedLinksData(data, "上传前数据").visitedLinks;
	const v3Payload = encodeV3GroupedPayload(visitedLinks);
	const jsonText = JSON.stringify(v3Payload);
	const compressedBytes = await compressText(jsonText, SYNC_STORAGE_ENCODING);
	const envelope = {
		syncVersion: SYNC_STORAGE_VERSION,
		encoding: SYNC_STORAGE_ENCODING,
		payload: bytesToBase64(compressedBytes),
		itemCount: Object.keys(visitedLinks).length,
		updatedAt: Date.now(),
		originalBytes: getByteLength(jsonText),
		compressedBytes: compressedBytes.length
	};
	return JSON.stringify(envelope);
}
function getCompressedEnvelopeMeta(envelope) {
	return {
		syncVersion: envelope.syncVersion,
		encoding: envelope.encoding,
		itemCount: envelope.itemCount,
		updatedAt: envelope.updatedAt,
		originalBytes: envelope.originalBytes,
		compressedBytes: envelope.compressedBytes
	};
}
function extractVisitedLinksFromV2Payload(parsed) {
	const visitedLinks = extractVisitedLinksFromUnknown(parsed);
	if (visitedLinks) return visitedLinks;
	const repairedVisitedLinks = tryRepairVisitedLinksData(parsed);
	if (repairedVisitedLinks) {
		logVisitedLinksRepair("云端 v2 解压负载", repairedVisitedLinks);
		return repairedVisitedLinks.visitedLinks;
	}
	throw new Error(`同步存储 v2 数据格式无效: ${describeCompressedPayloadShape(parsed, "v2")}`);
}
function extractVisitedLinksFromV3Payload(parsed) {
	return decodeV3GroupedPayload(parsed);
}
async function deserializeCompressedSyncEnvelope(envelope) {
	const envelopeMeta = getCompressedEnvelopeMeta(envelope);
	let compressedBytes;
	try {
		compressedBytes = base64ToBytes(envelope.payload);
	} catch (error) {
		console.warn(`同步存储 ${envelope.syncVersion} base64 解码失败:`, envelopeMeta, error);
		throw new Error(`同步存储 ${envelope.syncVersion} payload 不是合法 Base64`, { cause: error });
	}
	let decompressedText;
	try {
		decompressedText = await decompressText(compressedBytes, envelope.encoding);
	} catch (error) {
		console.warn(`同步存储 ${envelope.syncVersion} 解压失败:`, envelopeMeta, error);
		throw new Error(`同步存储 ${envelope.syncVersion} ${getEncodingDisplayName(envelope.encoding)} 解压失败`, { cause: error });
	}
	let parsed;
	try {
		parsed = JSON.parse(decompressedText);
	} catch (error) {
		console.warn(`同步存储 ${envelope.syncVersion} JSON 解析失败:`, envelopeMeta, error);
		throw new Error(`同步存储 ${envelope.syncVersion} 解压后的内容不是合法 JSON`, { cause: error });
	}
	try {
		if (envelope.syncVersion === "v2") return extractVisitedLinksFromV2Payload(parsed);
		return extractVisitedLinksFromV3Payload(parsed);
	} catch (error) {
		const reason = error instanceof Error ? error.message : `同步存储 ${envelope.syncVersion} 数据格式无效: ${describeCompressedPayloadShape(parsed, envelope.syncVersion)}`;
		console.warn(`同步存储 ${envelope.syncVersion} 数据结构无效:`, envelopeMeta, reason);
		throw error instanceof Error ? error : new Error(reason, { cause: error });
	}
}
function hasLegacyVisitedLinkRecord(value) {
	for (const key in value) {
		const timestamp = value[key];
		if ((key.startsWith("http://") || key.startsWith("https://")) && typeof timestamp === "number" && Number.isFinite(timestamp)) return true;
	}
	return false;
}
function createUninitializedSnapshot(emptyReason, truncated) {
	if (truncated) {
		console.warn("截断的 Gist 文件内容无法识别:", emptyReason);
		throw new Error(`Gist 文件超过 1MB，通过 raw_url 获取的完整内容无法识别（${emptyReason}），为避免误覆盖，云端数据保持不变`);
	}
	return {
		visitedLinks: {},
		needsInitialization: true,
		emptyReason
	};
}
async function deserializeGistContent(contentText, truncated) {
	if (contentText.trim() === "") return createUninitializedSnapshot("内容为空", truncated);
	let parsed;
	try {
		parsed = JSON.parse(contentText);
	} catch {
		return createUninitializedSnapshot("内容不是合法 JSON", truncated);
	}
	if (!isPlainObject(parsed)) return createUninitializedSnapshot(`JSON 顶层类型是 ${getValueTypeLabel(parsed)}`, truncated);
	if ("syncVersion" in parsed) {
		if (isCompressedSyncEnvelope(parsed)) return {
			visitedLinks: await deserializeCompressedSyncEnvelope(parsed),
			needsInitialization: false
		};
		if (isSyncStorageVersion(parsed.syncVersion)) {
			const reason = describeCompressedEnvelopeShape(parsed, parsed.syncVersion);
			console.warn(`同步存储 ${parsed.syncVersion} 外层包结构无效:`, reason);
			throw new Error(`同步存储 ${parsed.syncVersion} 外层包格式无效: ${reason}`);
		}
		throw new Error(`云端数据来自更新版本的脚本（syncVersion=${String(parsed.syncVersion)}），请升级脚本后再同步`);
	}
	if ("visitedLinks" in parsed || hasLegacyVisitedLinkRecord(parsed)) {
		const repairedLegacyVisitedLinks = tryRepairVisitedLinksData(parsed);
		if (!repairedLegacyVisitedLinks) throw new Error(`同步存储旧版数据格式无效: ${describeVisitedLinksRepairFailure(parsed)}`);
		logVisitedLinksRepair("云端旧版明文数据", repairedLegacyVisitedLinks);
		return {
			visitedLinks: repairedLegacyVisitedLinks.visitedLinks,
			needsInitialization: false
		};
	}
	return createUninitializedSnapshot(Object.keys(parsed).length === 0 ? "内容是空对象" : `对象中没有同步数据特征，键: ${getObjectKeyPreview(parsed)}`, truncated);
}
function areVisitedLinksEqual(left, right) {
	let leftCount = 0;
	for (const url in left) {
		leftCount++;
		if (left[url] !== right[url]) return false;
	}
	let rightCount = 0;
	for (const _url in right) rightCount++;
	return leftCount === rightCount;
}
function formatGitHubHttpError(action, status) {
	const hint = GITHUB_HTTP_STATUS_HINTS[status];
	return hint ? `${action}: ${status}（${hint}）` : `${action}: ${status}`;
}
function normalizeGistId(input) {
	return (input.trim().split(/[?#]/)[0].split("/").filter((segment) => segment !== "").pop() ?? "").replace(/\.git$/, "");
}
async function testSyncConnection(token, gistId) {
	try {
		const userResponse = await fetch("https://api.github.com/user", { headers: {
			Authorization: `token ${token}`,
			Accept: GITHUB_ACCEPT_HEADER
		} });
		if (!userResponse.ok) return {
			level: "error",
			message: formatGitHubHttpError("令牌验证失败", userResponse.status)
		};
		const oauthScopes = userResponse.headers.get("X-OAuth-Scopes");
		if (oauthScopes !== null && !oauthScopes.split(",").map((scope) => scope.trim()).includes("gist")) return {
			level: "error",
			message: "令牌缺少 gist 权限，请重新创建令牌并勾选 \"gist\""
		};
		if (!gistId) return {
			level: "warning",
			message: "令牌有效，还需要填写 Gist ID"
		};
		const user = await userResponse.json();
		const gistResponse = await fetch(`https://api.github.com/gists/${gistId}`, { headers: {
			Authorization: `token ${token}`,
			Accept: GITHUB_ACCEPT_HEADER
		} });
		if (!gistResponse.ok) return {
			level: "error",
			message: formatGitHubHttpError("获取 Gist 失败", gistResponse.status)
		};
		const gist = await gistResponse.json();
		if (gist.owner && gist.owner.login.toLowerCase() !== user.login.toLowerCase()) return {
			level: "error",
			message: `这不是当前令牌账号的 Gist（所有者为 ${gist.owner.login}，当前账号为 ${user.login}），无法写入`
		};
		const { contentText, truncated } = await readFirstGistFileContent(token, gist);
		let snapshot;
		try {
			snapshot = await deserializeGistContent(contentText, truncated);
		} catch (error) {
			return {
				level: "error",
				message: `云端同步数据无法解析：${getErrorMessage(error)}`
			};
		}
		if (snapshot.needsInitialization) return {
			level: "warning",
			message: `连接成功。Gist 当前内容不是同步数据（${snapshot.emptyReason}），首次同步时会被替换为同步格式`
		};
		return {
			level: "success",
			message: `连接成功，云端已有 ${Object.keys(snapshot.visitedLinks).length} 条同步数据`
		};
	} catch (error) {
		console.warn("测试同步连接失败:", error);
		return {
			level: "error",
			message: `连接失败: ${getErrorMessage(error)}`
		};
	}
}
async function updateGist(token, gistId, data) {
	try {
		const gistInfo = await fetch(`https://api.github.com/gists/${gistId}`, { headers: {
			Authorization: `token ${token}`,
			Accept: GITHUB_ACCEPT_HEADER
		} });
		if (!gistInfo.ok) throw new Error(formatGitHubHttpError("获取 Gist 信息失败", gistInfo.status));
		const fileName = getFirstGistFileName(await gistInfo.json());
		const serializedContent = await serializeVisitedLinksForGist(data);
		const response = await fetch(`https://api.github.com/gists/${gistId}`, {
			method: "PATCH",
			headers: {
				"Authorization": `token ${token}`,
				"Content-Type": "application/json",
				"Accept": GITHUB_ACCEPT_HEADER
			},
			body: JSON.stringify({ files: { [fileName]: { content: serializedContent } } })
		});
		if (!response.ok) throw new Error(formatGitHubHttpError("更新 Gist 失败", response.status));
	} catch (error) {
		console.warn("更新 Gist 失败:", error);
		throw error;
	}
}
async function getGist(token, gistId) {
	try {
		const response = await fetch(`https://api.github.com/gists/${gistId}`, { headers: {
			Authorization: `token ${token}`,
			Accept: GITHUB_ACCEPT_HEADER
		} });
		if (!response.ok) throw new Error(formatGitHubHttpError("获取 Gist 失败", response.status));
		const { contentText, truncated } = await readFirstGistFileContent(token, await response.json());
		return await deserializeGistContent(contentText, truncated);
	} catch (error) {
		console.warn("获取 Gist 失败:", error);
		throw error;
	}
}
async function uploadToCloud(syncSettings, data) {
	const { githubToken } = syncSettings;
	const gistId = normalizeGistId(syncSettings.gistId);
	if (!githubToken) throw new Error("GitHub 令牌未设置");
	if (!gistId) throw new Error("Gist ID 未设置，请先创建 Gist 并在设置中填入 ID");
	await updateGist(githubToken, gistId, data);
}
async function downloadFromCloud(syncSettings) {
	const { githubToken } = syncSettings;
	const gistId = normalizeGistId(syncSettings.gistId);
	if (!githubToken || !gistId) return {
		visitedLinks: {},
		needsInitialization: false
	};
	return await getGist(githubToken, gistId);
}
function extractVisitedLinks(data) {
	if (isSyncData(data)) return data.visitedLinks;
	return data;
}
function hasDataChanged(oldData, newData) {
	return !areVisitedLinksEqual(extractVisitedLinks(oldData), extractVisitedLinks(newData));
}
function pickUnexpiredLinks(links, cutoff) {
	const unexpiredLinks = {};
	for (const url in links) if (links[url] >= cutoff) unexpiredLinks[url] = links[url];
	return unexpiredLinks;
}
async function syncOnStartup(syncSettings, expirationTime) {
	try {
		console.log("开始同步数据...");
		const cloud = await downloadFromCloud(syncSettings);
		if (cloud.needsInitialization) console.log(`云端内容不是同步数据（${cloud.emptyReason}），本次同步会将其初始化为同步格式`);
		const cutoff = Date.now() - expirationTime;
		const cloudLinks = pickUnexpiredLinks(cloud.visitedLinks, cutoff);
		mergeLinks(cloudLinks);
		const mergedLinks = pickUnexpiredLinks(loadLinks(), cutoff);
		if (cloud.needsInitialization || hasDataChanged(cloudLinks, mergedLinks)) {
			await uploadToCloud(syncSettings, mergedLinks);
			console.log(cloud.needsInitialization ? "已初始化云端同步数据" : "数据已同步并上传到云端");
		} else console.log("数据已同步，无需上传");
		setLastSyncTime(Date.now());
		eventBus.emit("sync:completed");
		return { initialized: cloud.needsInitialization };
	} catch (error) {
		console.warn("同步失败，使用本地数据:", error.message);
		throw error;
	}
}
_css(".el-badge{--el-badge-bg-color:var(--el-color-danger);--el-badge-radius:10px;--el-badge-font-size:12px;--el-badge-padding:6px;--el-badge-size:18px;vertical-align:middle;width:fit-content;display:inline-block;position:relative}.el-badge__content{background-color:var(--el-badge-bg-color);border-radius:var(--el-badge-radius);color:var(--el-color-white);font-size:var(--el-badge-font-size);height:var(--el-badge-size);padding:0 var(--el-badge-padding);white-space:nowrap;border:1px solid var(--el-bg-color);justify-content:center;align-items:center;display:inline-flex}.el-badge__content.is-fixed{top:0;right:calc(1px + var(--el-badge-size) / 2);z-index:var(--el-index-normal);position:absolute;transform:translateY(-50%)translate(100%)}.el-badge__content.is-fixed.is-dot{right:5px}.el-badge__content.is-dot{border-radius:50%;width:8px;height:8px;padding:0;right:0}.el-badge__content.is-hide-zero{display:none}.el-badge__content--primary{background-color:var(--el-color-primary)}.el-badge__content--success{background-color:var(--el-color-success)}.el-badge__content--warning{background-color:var(--el-color-warning)}.el-badge__content--info{background-color:var(--el-color-info)}.el-badge__content--danger{background-color:var(--el-color-danger)}");
_css(".el-message{--el-message-bg-color:var(--el-color-info-light-9);--el-message-border-color:var(--el-border-color-lighter);--el-message-padding:11px 15px;--el-message-close-size:16px;--el-message-close-icon-color:var(--el-text-color-placeholder);--el-message-close-hover-color:var(--el-text-color-secondary);box-sizing:border-box;border-radius:var(--el-border-radius-base);border-width:var(--el-border-width);border-style:var(--el-border-style);border-color:var(--el-message-border-color);background-color:var(--el-message-bg-color);width:max-content;max-width:calc(100% - 32px);transition:opacity var(--el-transition-duration), transform .4s, top .4s, bottom .4s;padding:var(--el-message-padding);align-items:center;gap:8px;display:flex;position:fixed}.el-message.is-left{left:16px}.el-message.is-right{right:16px}.el-message.is-center{left:50%;transform:translate(-50%)}.el-message.is-plain{background-color:var(--el-bg-color-overlay);border-color:var(--el-bg-color-overlay);box-shadow:var(--el-box-shadow-light)}.el-message p{margin:0}.el-message--primary{--el-message-bg-color:var(--el-color-primary-light-9);--el-message-border-color:var(--el-color-primary-light-8);--el-message-text-color:var(--el-color-primary)}.el-message--primary .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--primary{color:var(--el-message-text-color)}.el-message--success{--el-message-bg-color:var(--el-color-success-light-9);--el-message-border-color:var(--el-color-success-light-8);--el-message-text-color:var(--el-color-success)}.el-message--success .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--success{color:var(--el-message-text-color)}.el-message--info{--el-message-bg-color:var(--el-color-info-light-9);--el-message-border-color:var(--el-color-info-light-8);--el-message-text-color:var(--el-color-info)}.el-message--info .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--info{color:var(--el-message-text-color)}.el-message--warning{--el-message-bg-color:var(--el-color-warning-light-9);--el-message-border-color:var(--el-color-warning-light-8);--el-message-text-color:var(--el-color-warning)}.el-message--warning .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--warning{color:var(--el-message-text-color)}.el-message--error{--el-message-bg-color:var(--el-color-error-light-9);--el-message-border-color:var(--el-color-error-light-8);--el-message-text-color:var(--el-color-error)}.el-message--error .el-message__content{color:var(--el-message-text-color);overflow-wrap:break-word}.el-message .el-message-icon--error{color:var(--el-message-text-color)}.el-message .el-message__badge{position:absolute;top:-8px;right:-8px}.el-message__content{padding:0;font-size:14px;line-height:1}.el-message__content:focus{outline-width:0}.el-message .el-message__closeBtn{cursor:pointer;color:var(--el-message-close-icon-color);font-size:var(--el-message-close-size)}.el-message .el-message__closeBtn:focus{outline-width:0}.el-message .el-message__closeBtn:hover{color:var(--el-message-close-hover-color)}.el-message-fade-enter-from,.el-message-fade-leave-to{opacity:0}.el-message-fade-enter-from.is-left,.el-message-fade-enter-from.is-right,.el-message-fade-leave-to.is-left,.el-message-fade-leave-to.is-right{transform:translateY(-100%)}.el-message-fade-enter-from.is-left.is-bottom,.el-message-fade-enter-from.is-right.is-bottom,.el-message-fade-leave-to.is-left.is-bottom,.el-message-fade-leave-to.is-right.is-bottom{transform:translateY(100%)}.el-message-fade-enter-from.is-center,.el-message-fade-leave-to.is-center{transform:translate(-50%,-100%)}.el-message-fade-enter-from.is-center.is-bottom,.el-message-fade-leave-to.is-center.is-bottom{transform:translate(-50%,100%)}");
function showNotification(message, type) {
	const messageType = type || (/失败|错误|error/i.test(message) ? "error" : "success");
	const container = document.querySelector("#color-visited-root");
	ElMessage({
		message,
		type: messageType,
		duration: 2e3,
		showClose: true,
		grouping: true,
		offset: 20,
		appendTo: container && container.shadowRoot || document.body
	});
}
function injectCustomStyles(color) {
	const linkColor = color || "rgba(0,0,0,0)";
	let existingStyle = document.querySelector("#color-visited-style");
	if (existingStyle) {
		existingStyle.innerHTML = generateStyleContent(linkColor);
		return;
	}
	const style = document.createElement("style");
	style.id = "color-visited-style";
	style.innerHTML = generateStyleContent(linkColor);
	document.head.appendChild(style);
}
function generateStyleContent(linkColor) {
	return `
    /* 基础选择器 */
    a.visited-link,
    a.visited-link *,
    a.visited-link *::before,
    a.visited-link *::after {
      color: ${linkColor} !important;
    }
    
    /* 高特异性选择器，覆盖可能的网站样式 */
    html a.visited-link,
    body a.visited-link,
    html body a.visited-link,
    html body div a.visited-link,
    html body a.visited-link span,
    html body a.visited-link div {
      color: ${linkColor} !important;
    }
    
    /* 处理常见的论坛结构 */
    .topic-list a.visited-link,
    .post-list a.visited-link,
    .content a.visited-link,
    .main a.visited-link,
    #main a.visited-link,
    .container a.visited-link {
      color: ${linkColor} !important;
    }

    /* 处理子元素的背景图 */
    a.visited-link [style*="background-image"],
    a.visited-link [style*="background:"] {
      filter: opacity(0.1) !important;
    }

    /* 处理子元素的图片 */
    a.visited-link img {
      filter: opacity(0.1) !important;
    }
  `;
}
function removeCustomStyles() {
	const styleElement = document.querySelector("#color-visited-style");
	if (styleElement) styleElement.remove();
}
function showSettingsDialog(state) {
	eventBus.emit("dialog:show-settings", {
		type: "settings",
		payload: {
			currentBatchKeySettings: state.batchKeySettings,
			currentGeneralSettings: state.generalSettings,
			currentPresetSettings: state.presetSettings,
			currentSyncSettings: state.syncSettings,
			isMac
		}
	});
}
var _hoisted_1$1 = { class: "space-y-6" };
var _hoisted_2$1 = { class: "space-y-4" };
var _hoisted_3$1 = { class: "flex items-center justify-between" };
var _hoisted_4$1 = { class: "text-sm space-y-2" };
var _hoisted_5$1 = { class: "flex justify-between" };
var _hoisted_6$1 = { class: "text-gray-900" };
var _hoisted_7 = { class: "flex justify-between" };
var _hoisted_8 = { class: "text-gray-900" };
var _hoisted_9 = { class: "flex items-center justify-between gap-4" };
var _hoisted_10 = { class: "w-full" };
var _hoisted_11 = { class: "flex justify-center pt-2" };
var SyncSettings_default = /* @__PURE__ */ defineComponent({
	__name: "SyncSettings",
	props: { currentSettings: {} },
	emits: ["save"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const formData = /* @__PURE__ */ ref({
			enabled: props.currentSettings.enabled,
			githubToken: props.currentSettings.githubToken,
			gistId: props.currentSettings.gistId
		});
		const savedSettings = /* @__PURE__ */ ref({ ...props.currentSettings });
		const testingConnection = /* @__PURE__ */ ref(false);
		const gzipSupportAvailable = isGzipSyncSupported();
		const lastSyncTime = /* @__PURE__ */ ref(getLastSyncTime());
		onUnmounted(onLastSyncTimeChange((time) => {
			lastSyncTime.value = time;
		}));
		const lastSyncTimeFormatted = computed(() => {
			if (!lastSyncTime.value) return "从未同步";
			return new Date(lastSyncTime.value).toLocaleString();
		});
		const hasChanges = computed(() => {
			return formData.value.enabled !== savedSettings.value.enabled || formData.value.githubToken !== savedSettings.value.githubToken || formData.value.gistId !== savedSettings.value.gistId;
		});
		const gzipSupportAlertTitle = computed(() => {
			if (gzipSupportAvailable) return "当前浏览器支持 gzip，同步存储 v3 将使用 host 分组 + 前缀差分 + 单文件 gzip 压缩格式。";
			return "当前浏览器不支持 gzip Compression Streams，启用同步后将无法使用同步存储 v3。请升级浏览器或切换到支持该能力的环境。";
		});
		const testConnection = async () => {
			if (!formData.value.githubToken) {
				showNotification("请输入 GitHub 令牌");
				return;
			}
			testingConnection.value = true;
			try {
				const result = await testSyncConnection(formData.value.githubToken, normalizeGistId(formData.value.gistId));
				showNotification(result.message, result.level);
			} catch (error) {
				showNotification("连接失败: " + error.message, "error");
			} finally {
				testingConnection.value = false;
			}
		};
		const getFormData = () => {
			return { ...formData.value };
		};
		const handleSave = () => {
			formData.value.gistId = normalizeGistId(formData.value.gistId);
			emit("save", { ...formData.value });
			savedSettings.value = { ...formData.value };
		};
		const handleReset = () => {
			formData.value = { ...DEFAULT_SETTINGS.sync };
		};
		__expose({
			save: handleSave,
			reset: handleReset,
			getFormData,
			hasChanges
		});
		watch(() => props.currentSettings, (newSettings) => {
			formData.value = {
				enabled: newSettings.enabled,
				githubToken: newSettings.githubToken,
				gistId: newSettings.gistId
			};
			savedSettings.value = { ...newSettings };
		}, {
			immediate: true,
			deep: true
		});
		return (_ctx, _cache) => {
			const _component_el_switch = ElSwitch;
			const _component_el_input = ElInput;
			const _component_el_card = ElCard;
			const _component_el_tag = ElTag;
			const _component_el_alert = ElAlert;
			const _component_el_button = ElButton;
			return openBlock(), createElementBlock("div", _hoisted_1$1, [_cache[14] || (_cache[14] = createBaseVNode("div", { class: "border-b pb-4" }, [createBaseVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, "数据同步设置"), createBaseVNode("p", { class: "text-sm text-gray-600" }, "通过 GitHub Gist 同步已访问链接数据，实现多设备同步")], -1)), createBaseVNode("div", _hoisted_2$1, [
				createBaseVNode("div", _hoisted_3$1, [_cache[3] || (_cache[3] = createBaseVNode("div", null, [createBaseVNode("label", { class: "text-sm font-medium text-gray-900" }, "启用数据同步"), createBaseVNode("p", { class: "text-sm text-gray-500" }, "开启后将通过 GitHub Gist 同步数据")], -1)), createVNode(_component_el_switch, {
					modelValue: formData.value.enabled,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.enabled = $event)
				}, null, 8, ["modelValue"])]),
				createBaseVNode("div", null, [
					_cache[4] || (_cache[4] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-900 mb-2" }, " GitHub 个人访问令牌 ", -1)),
					createVNode(_component_el_input, {
						modelValue: formData.value.githubToken,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.githubToken = $event),
						type: "password",
						placeholder: "请输入 GitHub Personal Access Token",
						"show-password": "",
						disabled: !formData.value.enabled
					}, null, 8, ["modelValue", "disabled"]),
					_cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, " 需要创建具有 \"gist\" 权限的个人访问令牌 ", -1))
				]),
				createBaseVNode("div", null, [
					_cache[6] || (_cache[6] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-900 mb-2" }, " Gist ID ", -1)),
					createVNode(_component_el_input, {
						modelValue: formData.value.gistId,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.gistId = $event),
						placeholder: "请输入 Gist ID，或直接粘贴 Gist 网址",
						disabled: !formData.value.enabled
					}, null, 8, ["modelValue", "disabled"]),
					_cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-xs text-gray-500 mt-1" }, " 新建一个 Gist，文件名和内容随意，首次同步时内容会被替换为同步数据 ", -1))
				]),
				createVNode(_component_el_card, {
					class: "bg-blue-50",
					shadow: "never"
				}, {
					header: withCtx(() => [..._cache[8] || (_cache[8] = [createBaseVNode("span", { class: "text-sm font-medium text-blue-800" }, "设置步骤", -1)])]),
					default: withCtx(() => [_cache[9] || (_cache[9] = createBaseVNode("ol", { class: "text-xs text-blue-700 space-y-1 list-decimal list-inside" }, [
						createBaseVNode("li", null, "到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建令牌，权限选择 \"gist\""),
						createBaseVNode("li", null, "新建一个专用的 Gist（文件名和内容随意，首次同步时会被替换为同步数据），复制网址中的 ID 部分，或直接粘贴整个网址"),
						createBaseVNode("li", null, "将令牌和 Gist ID 填入上方输入框")
					], -1))]),
					_: 1
				}),
				createVNode(_component_el_card, { shadow: "never" }, {
					header: withCtx(() => [..._cache[10] || (_cache[10] = [createBaseVNode("span", { class: "text-sm font-medium text-gray-800" }, "同步状态", -1)])]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_4$1, [
						createBaseVNode("div", _hoisted_5$1, [_cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-gray-600" }, "当前 Gist ID:", -1)), createBaseVNode("span", _hoisted_6$1, toDisplayString(formData.value.gistId || "未设置"), 1)]),
						createBaseVNode("div", _hoisted_7, [_cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-gray-600" }, "最后同步时间:", -1)), createBaseVNode("span", _hoisted_8, toDisplayString(lastSyncTimeFormatted.value), 1)]),
						createBaseVNode("div", _hoisted_9, [_cache[13] || (_cache[13] = createBaseVNode("span", { class: "text-gray-600" }, "gzip 支持状态:", -1)), createVNode(_component_el_tag, {
							type: unref(gzipSupportAvailable) ? "success" : "danger",
							effect: "light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(gzipSupportAvailable) ? "当前浏览器已支持" : "当前浏览器不支持"), 1)]),
							_: 1
						}, 8, ["type"])])
					])]),
					_: 1
				}),
				createBaseVNode("div", _hoisted_10, [createVNode(_component_el_alert, {
					title: gzipSupportAlertTitle.value,
					type: unref(gzipSupportAvailable) ? "success" : "warning",
					"show-icon": "",
					closable: false
				}, null, 8, ["title", "type"])]),
				createBaseVNode("div", _hoisted_11, [createVNode(_component_el_button, {
					type: "primary",
					loading: testingConnection.value,
					disabled: !formData.value.enabled || !formData.value.githubToken,
					onClick: testConnection
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(testingConnection.value ? "测试中..." : "测试连接"), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])])
			])]);
		};
	}
});
var _hoisted_1 = { class: "h-[400px] overflow-y-auto" };
var _hoisted_2 = { class: "p-6 h-full overflow-y-auto" };
var _hoisted_3 = { class: "p-6 h-full overflow-y-auto" };
var _hoisted_4 = { class: "p-6 h-full overflow-y-auto" };
var _hoisted_5 = { class: "p-6 h-full overflow-y-auto" };
var _hoisted_6 = { class: "flex justify-end gap-3" };
var SettingsDialog_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsDialog",
	props: {
		modelValue: { type: Boolean },
		currentSettings: {},
		generalSettings: {},
		currentPresetSettings: {},
		currentSyncSettings: {},
		isMac: { type: Boolean }
	},
	emits: [
		"update:modelValue",
		"save",
		"generalSave",
		"presetSave",
		"syncSave"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const visible = computed({
			get: () => props.modelValue,
			set: (value) => emit("update:modelValue", value)
		});
		const activeTab = /* @__PURE__ */ ref("general");
		const generalSettingsRef = /* @__PURE__ */ ref();
		const shortcutSettingsRef = /* @__PURE__ */ ref();
		const presetSettingsRef = /* @__PURE__ */ ref();
		const syncSettingsRef = /* @__PURE__ */ ref();
		const canSave = computed(() => {
			if (activeTab.value === "shortcut") return shortcutSettingsRef.value?.hasChanges ?? false;
			else if (activeTab.value === "general") return generalSettingsRef.value?.hasChanges ?? false;
			else if (activeTab.value === "presets") return presetSettingsRef.value?.hasChanges ?? false;
			else if (activeTab.value === "sync") return syncSettingsRef.value?.hasChanges ?? false;
			return false;
		});
		const handleSave = () => {
			if (activeTab.value === "general") generalSettingsRef.value?.save();
			else if (activeTab.value === "shortcut") shortcutSettingsRef.value?.save();
			else if (activeTab.value === "presets") presetSettingsRef.value?.save();
			else if (activeTab.value === "sync") syncSettingsRef.value?.save();
		};
		const handleReset = () => {
			if (activeTab.value === "general") generalSettingsRef.value?.reset();
			else if (activeTab.value === "shortcut") shortcutSettingsRef.value?.reset();
			else if (activeTab.value === "presets") presetSettingsRef.value?.reset();
			else if (activeTab.value === "sync") syncSettingsRef.value?.reset();
		};
		const handleClosed = () => {
			activeTab.value = "general";
		};
		return (_ctx, _cache) => {
			const _component_el_tab_pane = ElTabPane;
			const _component_el_tabs = ElTabs;
			const _component_el_button = ElButton;
			const _component_el_dialog = ElDialog;
			return openBlock(), createBlock(_component_el_dialog, {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => visible.value = $event),
				width: "900px",
				"close-on-click-modal": true,
				"close-on-press-escape": false,
				"body-style": { padding: "0" },
				onClosed: handleClosed
			}, {
				header: withCtx(() => [..._cache[6] || (_cache[6] = [createBaseVNode("span", { class: "text-lg font-semibold" }, "设置", -1)])]),
				footer: withCtx(() => [createBaseVNode("div", _hoisted_6, [createVNode(_component_el_button, {
					onClick: handleReset,
					size: "large",
					plain: ""
				}, {
					default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" 重置为默认 ", -1)])]),
					_: 1
				}), createVNode(_component_el_button, {
					type: "primary",
					size: "large",
					onClick: handleSave,
					disabled: !canSave.value
				}, {
					default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" 保存设置 ", -1)])]),
					_: 1
				}, 8, ["disabled"])])]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(_component_el_tabs, {
					modelValue: activeTab.value,
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => activeTab.value = $event),
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
							default: withCtx(() => [createBaseVNode("div", _hoisted_2, [createVNode(GeneralSettings_default, {
								"current-settings": __props.generalSettings,
								ref_key: "generalSettingsRef",
								ref: generalSettingsRef,
								onSave: _cache[0] || (_cache[0] = (settings) => emit("generalSave", settings))
							}, null, 8, ["current-settings"])])]),
							_: 1
						}),
						createVNode(_component_el_tab_pane, {
							label: "预设网站",
							name: "presets",
							class: "h-full"
						}, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_3, [createVNode(PresetSettings_default, {
								"current-preset-settings": __props.currentPresetSettings,
								ref_key: "presetSettingsRef",
								ref: presetSettingsRef,
								onSave: _cache[1] || (_cache[1] = (states) => emit("presetSave", states))
							}, null, 8, ["current-preset-settings"])])]),
							_: 1
						}),
						createVNode(_component_el_tab_pane, {
							label: "批量染色快捷键",
							name: "shortcut",
							class: "h-full"
						}, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_4, [createVNode(ShortcutSettings_default, {
								"current-settings": __props.currentSettings,
								"is-mac": __props.isMac,
								visible: visible.value,
								"is-active": activeTab.value === "shortcut",
								ref_key: "shortcutSettingsRef",
								ref: shortcutSettingsRef,
								onSave: _cache[2] || (_cache[2] = (settings) => emit("save", settings))
							}, null, 8, [
								"current-settings",
								"is-mac",
								"visible",
								"is-active"
							])])]),
							_: 1
						}),
						createVNode(_component_el_tab_pane, {
							label: "数据同步",
							name: "sync",
							class: "h-full"
						}, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_5, [createVNode(SyncSettings_default, {
								"current-settings": __props.currentSyncSettings,
								ref_key: "syncSettingsRef",
								ref: syncSettingsRef,
								onSave: _cache[3] || (_cache[3] = (settings) => emit("syncSave", settings))
							}, null, 8, ["current-settings"])])]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
var App_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	setup(__props) {
		const dialogData = /* @__PURE__ */ ref(null);
		const handleShowDialog = (event) => {
			dialogData.value = {
				...event.payload,
				visible: true
			};
		};
		const handleSettingsSave = (settings) => {
			eventBus.emit("settings:save", {
				type: "batch-key",
				settings
			});
		};
		const handleGeneralSave = (settings) => {
			eventBus.emit("settings:save", {
				type: "general",
				settings
			});
		};
		const handlePresetSave = (states) => {
			eventBus.emit("settings:save", {
				type: "preset",
				states
			});
		};
		const handleSyncSave = (settings) => {
			eventBus.emit("settings:save", {
				type: "sync",
				settings
			});
		};
		onMounted(() => {
			eventBus.on("dialog:show-settings", handleShowDialog);
		});
		onUnmounted(() => {
			eventBus.off("dialog:show-settings", handleShowDialog);
		});
		return (_ctx, _cache) => {
			return dialogData.value ? (openBlock(), createBlock(SettingsDialog_default, {
				key: 0,
				modelValue: dialogData.value.visible,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogData.value.visible = $event),
				"current-settings": dialogData.value.currentBatchKeySettings,
				"general-settings": dialogData.value.currentGeneralSettings,
				"current-preset-settings": dialogData.value.currentPresetSettings,
				"current-sync-settings": dialogData.value.currentSyncSettings,
				"is-mac": dialogData.value.isMac,
				onSave: handleSettingsSave,
				onGeneralSave: handleGeneralSave,
				onPresetSave: handlePresetSave,
				onSyncSave: handleSyncSave
			}, null, 8, [
				"modelValue",
				"current-settings",
				"general-settings",
				"current-preset-settings",
				"current-sync-settings",
				"is-mac"
			])) : createCommentVNode("", true);
		};
	}
});
function getActivePresets(state) {
	return Object.keys(state.presetSettings).filter((preset) => state.presetSettings[preset]);
}
function initializeScriptState() {
	const userSettings = _GM_getValue("userSettings", {
		general: DEFAULT_SETTINGS.general,
		preset: DEFAULT_SETTINGS.presetStates,
		batch: DEFAULT_SETTINGS.batchKey,
		sync: DEFAULT_SETTINGS.sync
	});
	let needsSave = false;
	Object.keys(PRESET_RULES).forEach((key) => {
		if (!(key in userSettings.preset)) {
			userSettings.preset[key] = true;
			needsSave = true;
		}
	});
	if (needsSave) _GM_setValue("userSettings", userSettings);
	return {
		generalSettings: userSettings.general,
		presetSettings: userSettings.preset,
		batchKeySettings: userSettings.batch,
		syncSettings: userSettings.sync,
		batchKeyHandler: null,
		linkClickHandler: null
	};
}
function saveUserSettings(state) {
	_GM_setValue("userSettings", {
		general: state.generalSettings,
		preset: state.presetSettings,
		batch: state.batchKeySettings,
		sync: state.syncSettings
	});
}
function batchAddLinks(state) {
	const startTime = performance.now();
	const newLinks = {};
	const now = Date.now();
	let addedCount = 0;
	const links = document.querySelectorAll("a[href]:not(.visited-link)");
	const linksToUpdate = [];
	if (state.generalSettings.debug) console.log(`[batchAddLinks] 开始批量处理，找到 ${links.length} 个未标记链接`);
	links.forEach((link) => {
		if (!(link instanceof HTMLAnchorElement)) return;
		const inputUrl = getBaseUrl(link);
		if (shouldColorLink(inputUrl, state) && !Object.hasOwn(newLinks, inputUrl) && !isVisited(inputUrl)) {
			newLinks[inputUrl] = now;
			linksToUpdate.push(link);
			addedCount++;
		}
	});
	if (linksToUpdate.length > 0) {
		mergeLinks(newLinks);
		if (linksToUpdate.length > 1e3) batchProcessWithTimeSlicing(linksToUpdate, () => {
			updateAllLinksStatus(state);
			const processingTime = performance.now() - startTime;
			if (state.generalSettings.debug) console.log(`[BatchAddLinks 性能] 处理 ${links.length} 个链接，添加 ${addedCount} 个，耗时 ${processingTime.toFixed(2)}ms`);
			showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
		});
		else {
			linksToUpdate.forEach((link) => {
				link.classList.add("visited-link");
			});
			updateAllLinksStatus(state);
			const processingTime = performance.now() - startTime;
			if (state.generalSettings.debug) console.log(`[BatchAddLinks 性能] 处理 ${links.length} 个链接，添加 ${addedCount} 个，耗时 ${processingTime.toFixed(2)}ms`);
			showNotification(`已批量添加 ${addedCount} 个链接到已访问记录`);
		}
	} else showNotification("没有找到新的符合规则的链接可添加");
}
function batchProcessWithTimeSlicing(linksToUpdate, onComplete) {
	const BATCH_SIZE = 200;
	let currentIndex = 0;
	function processNextBatch() {
		const startTime = performance.now();
		const endIndex = Math.min(currentIndex + BATCH_SIZE, linksToUpdate.length);
		for (let i = currentIndex; i < endIndex; i++) linksToUpdate[i].classList.add("visited-link");
		currentIndex = endIndex;
		const processingTime = performance.now() - startTime;
		if (currentIndex < linksToUpdate.length && processingTime > 5) setTimeout(processNextBatch, 0);
		else if (currentIndex < linksToUpdate.length) processNextBatch();
		else if (onComplete) onComplete();
	}
	processNextBatch();
}
function updateLinkStatus(link, state) {
	if (!(link instanceof HTMLAnchorElement)) return;
	if (link.classList.contains("visited-link")) return;
	const originalHref = link.href;
	const inputUrl = getBaseUrl(link);
	const shouldColor = shouldColorLink(inputUrl, state);
	if (state.generalSettings.debug) {
		console.log(`[updateLinkStatus] 原始href: ${originalHref}`);
		console.log(`[updateLinkStatus] 处理后URL: ${inputUrl}`);
		console.log(`[updateLinkStatus] shouldColorLink结果: ${shouldColor}`);
	}
	if (!shouldColor) return;
	const visited = isVisited(inputUrl);
	if (state.generalSettings.debug) console.log(`[updateLinkStatus] 是否已访问: ${visited}`);
	if (visited) {
		link.classList.add("visited-link");
		if (state.generalSettings.debug) console.log(`[updateLinkStatus] ${inputUrl} class added`);
	}
}
function updateAllLinksStatus(state) {
	document.querySelectorAll("a[href]:not(.visited-link)").forEach((link) => {
		updateLinkStatus(link, state);
	});
}
function removeScript(state) {
	removeCustomStyles();
	document.querySelectorAll("a.visited-link").forEach((link) => {
		link.classList.remove("visited-link");
	});
	if (state.batchKeyHandler) {
		document.removeEventListener("keydown", state.batchKeyHandler);
		state.batchKeyHandler = null;
	}
	clearLinkContext();
	if (state.linkClickHandler) {
		document.removeEventListener("click", state.linkClickHandler, true);
		document.removeEventListener("auxclick", state.linkClickHandler, true);
		state.linkClickHandler = null;
	}
}
function activateLinkFeatures(state, setupDOMObserver, setupLinkEventListeners) {
	deleteExpiredLinks(state.generalSettings.expirationTime);
	logStorageInfo(loadLinks());
	updateAllLinksStatus(state);
	setupDOMObserver(state);
	state.linkClickHandler = setupLinkEventListeners(state);
}
var globalObserver = null;
var linkContext = null;
var urlChangeCallbacks = /* @__PURE__ */ new Set();
var lastHref = location.href;
/**
* 提供链接染色所需的脚本状态。
*/
function provideLinkContext(state) {
	linkContext = state;
}
/**
* 清空链接染色上下文，但保留全局 Observer 继续监听 URL 变化。
*/
function clearLinkContext() {
	linkContext = null;
}
/**
* 注册 URL 变化回调。多次调用会自动去重。
*/
function registerUrlChangeCallback(callback) {
	urlChangeCallbacks.add(callback);
}
/**
* 确保全局 DOM 观察器已创建并开始工作，返回该单例。
*/
function ensureDOMObserver() {
	if (globalObserver) return globalObserver;
	lastHref = location.href;
	globalObserver = new MutationObserver((mutations) => {
		const state = linkContext;
		if (state) {
			let newLinksCount = 0;
			let attrLinksCount = 0;
			mutations.forEach((mutation) => {
				if (mutation.type === "childList") mutation.addedNodes.forEach((node) => {
					if (node.nodeType !== Node.ELEMENT_NODE) return;
					const element = node;
					if (element.tagName === "A" && element.hasAttribute("href") && !element.classList.contains("visited-link")) {
						updateLinkStatus(element, state);
						newLinksCount++;
					}
					const newLinks = element.querySelectorAll("a[href]:not(.visited-link)");
					newLinksCount += newLinks.length;
					newLinks.forEach((link) => {
						updateLinkStatus(link, state);
					});
				});
				else if (mutation.type === "attributes" && mutation.attributeName === "href") {
					const target = mutation.target;
					if (target.tagName === "A" && !target.classList.contains("visited-link")) {
						updateLinkStatus(target, state);
						attrLinksCount++;
					}
				}
			});
			if (state.generalSettings.debug && newLinksCount > 0) console.log(`[DOMObserver] 检测到 ${newLinksCount} 个新链接`);
			if (state.generalSettings.debug && attrLinksCount > 0) console.log(`[DOMObserver] 检测到 ${attrLinksCount} 个链接 href 属性变化`);
		}
		if (lastHref !== location.href) {
			if (linkContext?.generalSettings.debug) console.log(`[DOMObserver] URL变化: ${lastHref} -> ${location.href}`);
			lastHref = location.href;
			urlChangeCallbacks.forEach((cb) => cb());
		}
	});
	globalObserver.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ["href"]
	});
	return globalObserver;
}
var cachedCurrentPreset = null;
var cachedUrl = null;
function getEnabledPresets(state) {
	return getActivePresets(state).filter((preset) => state.presetSettings[preset] !== false);
}
function isPageActive(state) {
	const currentUrl = window.location.href;
	return getEnabledPresets(state).some((preset) => {
		return PRESET_RULES[preset]?.pages.some((pattern) => pattern.test(currentUrl)) ?? false;
	});
}
function getCurrentPagePreset(state) {
	const currentUrl = window.location.href;
	if (currentUrl === cachedUrl && cachedCurrentPreset !== null) return cachedCurrentPreset;
	const enabledPresets = getEnabledPresets(state);
	if (state.generalSettings.debug) {
		console.log(`[getCurrentPagePreset] 当前页面URL: ${currentUrl}`);
		console.log(`[getCurrentPagePreset] 启用的预设: ${enabledPresets.join(", ")}`);
	}
	for (const preset of enabledPresets) {
		const matchedPage = PRESET_RULES[preset]?.pages.find((pattern) => pattern.test(currentUrl));
		if (matchedPage) {
			if (state.generalSettings.debug) console.log(`[getCurrentPagePreset] 匹配到预设: ${preset}, 匹配模式: ${matchedPage.source}`);
			cachedUrl = currentUrl;
			cachedCurrentPreset = preset;
			return preset;
		}
	}
	if (state.generalSettings.debug) console.log(`[getCurrentPagePreset] 未匹配到任何预设`);
	cachedUrl = currentUrl;
	cachedCurrentPreset = null;
	return null;
}
function shouldColorLink(url, state) {
	const currentPreset = getCurrentPagePreset(state);
	if (state.generalSettings.debug) console.log(`[shouldColorLink] 当前预设: ${currentPreset ?? "无"}`);
	if (!currentPreset) return false;
	const presetRule = PRESET_RULES[currentPreset];
	const matchedPattern = presetRule?.patterns.find((pattern) => pattern.test(url));
	const result = matchedPattern !== void 0;
	if (state.generalSettings.debug) {
		console.log(`[shouldColorLink] 检查URL: ${url}`);
		console.log(`[shouldColorLink] 可用patterns: ${presetRule?.patterns.map((p) => p.source).join(", ")}`);
		console.log(`[shouldColorLink] 匹配结果: ${result}${matchedPattern ? `, 匹配模式: ${matchedPattern.source}` : ""}`);
	}
	return result;
}
function onUrlChange(callback) {
	registerUrlChangeCallback(() => {
		cachedCurrentPreset = null;
		cachedUrl = null;
		callback();
	});
	ensureDOMObserver();
}
function registerMenuCommand(state) {
	_GM_registerMenuCommand("设置", () => showSettingsDialog(state));
}
function isTyping(event) {
	if (event.isComposing) return true;
	const target = event.composedPath()[0];
	return target instanceof HTMLElement && (target.isContentEditable || [
		"INPUT",
		"TEXTAREA",
		"SELECT"
	].includes(target.tagName));
}
function setupBatchKeyListener(state) {
	if (state.batchKeyHandler) document.removeEventListener("keydown", state.batchKeyHandler);
	state.batchKeyHandler = function(event) {
		if (isTyping(event) || !matchesShortcut(event, state.batchKeySettings)) return;
		event.preventDefault();
		batchAddLinks(state);
	};
	document.addEventListener("keydown", state.batchKeyHandler);
}
function setupDOMObserver(state) {
	provideLinkContext(state);
	return ensureDOMObserver();
}
function createLinkClickHandler(state) {
	return function handleLinkClick(event) {
		const target = event.target;
		if (!target) return;
		const link = target.closest("a[href]");
		if (!(link instanceof HTMLAnchorElement)) return;
		const originalHref = link.href;
		const inputUrl = getBaseUrl(link);
		const shouldColor = shouldColorLink(inputUrl, state);
		if (state.generalSettings.debug) {
			console.log(`[handleLinkClick] 原始href: ${originalHref}`);
			console.log(`[handleLinkClick] 处理后URL: ${inputUrl}`);
			console.log(`[handleLinkClick] shouldColorLink结果: ${shouldColor}`);
		}
		if (!shouldColor) return;
		const isFirstVisit = recordVisit(inputUrl);
		if (state.generalSettings.debug) console.log(`[handleLinkClick] 是否首次记录: ${isFirstVisit}`);
		updateAllLinksStatus(state);
	};
}
function setupLinkEventListeners(state) {
	const handleLinkClick = createLinkClickHandler(state);
	document.addEventListener("click", handleLinkClick, true);
	document.addEventListener("auxclick", handleLinkClick, true);
	return handleLinkClick;
}
function initializeSync(state) {
	if (state.syncSettings.enabled) syncOnStartup(state.syncSettings, state.generalSettings.expirationTime).then(({ initialized }) => {
		if (initialized) showNotification("已初始化云端同步数据", "success");
	}).catch((error) => {
		console.warn("后台同步失败:", error.message);
		showNotification(`同步失败: ${error.message}`);
	});
}
function setupGlobalEventListeners(state) {
	window.addEventListener("preset-states-updated", (event) => {
		const { presetSettings: newPresetSettings } = event.detail;
		state.presetSettings = newPresetSettings;
		saveUserSettings(state);
		setupPage(state);
	});
	onUrlChange(() => {
		setupPage(state);
	});
	eventBus.on("sync:completed", () => {
		console.log("同步完成，增量更新链接状态...");
		if (isPageActive(state)) updateAllLinksStatus(state);
	});
	eventBus.on("settings:save", (event) => {
		if (event.type === "general") state.generalSettings = event.settings;
		else if (event.type === "preset") state.presetSettings = event.states;
		else if (event.type === "batch-key") state.batchKeySettings = event.settings;
		else state.syncSettings = event.settings;
		saveUserSettings(state);
		setupPage(state);
	});
}
function setupPage(state) {
	try {
		removeScript(state);
		if (isPageActive(state)) {
			injectCustomStyles(state.generalSettings.color);
			activateLinkFeatures(state, setupDOMObserver, setupLinkEventListeners);
			setupBatchKeyListener(state);
		}
	} catch (error) {
		console.error("[setupPage] 页面初始化失败:", error);
	}
}
function startScript(state) {
	registerMenuCommand(state);
	initializeSync(state);
	setupGlobalEventListeners(state);
	setupPage(state);
}
function startColorVisitedScript() {
	console.log("Color Visited Script has started!");
	migrateLegacyLinks();
	startScript(initializeScriptState());
}
startColorVisitedScript();
var createIsolatedApp = () => {
	const container = document.createElement("div");
	container.id = "color-visited-root";
	const shadowRoot = container.attachShadow({ mode: "open" });
	const appMountPoint = document.createElement("div");
	shadowRoot.appendChild(appMountPoint);
	const injectStyles = async () => {
		try {
			const elementPlusLink = document.createElement("link");
			elementPlusLink.rel = "stylesheet";
			elementPlusLink.href = "https://unpkg.com/element-plus/dist/index.css";
			shadowRoot.appendChild(elementPlusLink);
			const tailwindStyles = document.createElement("style");
			tailwindStyles.textContent = (await module.import('./tailwind-D1Muhbdk-CzKGMDs5.js')).default;
			shadowRoot.appendChild(tailwindStyles);
			const customStyles = document.createElement("style");
			customStyles.textContent = (await module.import('./styles-C9P86--M-DSYxnqMl.js')).default;
			shadowRoot.appendChild(customStyles);
		} catch (error) {
			console.warn("Failed to inject styles:", error);
		}
	};
	injectStyles();
	createApp(App_default).mount(appMountPoint);
	document.body.appendChild(container);
	return container;
};
createIsolatedApp();})}}));
System.register("./tailwind-D1Muhbdk-CzKGMDs5.js", [],(function(exports){'use strict';return{execute:(function(){var tailwind_default = exports("default","/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-800:oklch(43.8% .218 303.724);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.ml-4{margin-left:calc(var(--spacing) * 4)}.ml-6{margin-left:calc(var(--spacing) * 6)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.table{display:table}.h-1{height:var(--spacing)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-\\[400px\\]{height:400px}.h-full{height:100%}.max-h-32{max-height:calc(var(--spacing) * 32)}.w-1{width:var(--spacing)}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-2{width:calc(var(--spacing) * 2)}.w-32{width:calc(var(--spacing) * 32)}.w-full{width:100%}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.rotate-90{rotate:90deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)))}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-b-xl{border-bottom-right-radius:var(--radius-xl);border-bottom-left-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-blue-200{border-color:var(--color-blue-200)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-400{background-color:var(--color-blue-400)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\/50{background-color:#f9fafb80}@supports (color:color-mix(in lab, red, red)){.bg-gray-50\\/50{background-color:color-mix(in oklab, var(--color-gray-50) 50%, transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-500{background-color:var(--color-green-500)}.bg-purple-100{background-color:var(--color-purple-100)}.bg-purple-500{background-color:var(--color-purple-500)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-50{--tw-gradient-to:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-5{padding-inline:calc(var(--spacing) * 5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-all{word-break:break-all}.text-blue-500{color:var(--color-blue-500)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-purple-800{color:var(--color-purple-800)}.capitalize{text-transform:capitalize}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media (hover:hover){.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-green-200:hover{background-color:var(--color-green-200)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}");
})}}));
System.register("./styles-C9P86--M-DSYxnqMl.js", [],(function(exports){'use strict';return{execute:(function(){var styles_default = exports("default",":host{all:initial;color:#303133;--el-color-primary:#409eff;--el-input-border-color:#dcdfe6;--el-input-hover-border-color:#c0c4cc;--el-input-focus-border-color:var(--el-color-primary);--el-border-color:#dcdfe6;--el-border-color-hover:#c0c4cc;--el-disabled-bg-color:#f5f7fa;--el-disabled-border-color:#e4e7ed;--el-color-danger:#f56c6c;--el-transition-duration:.3s;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;font-size:14px;line-height:1.5}");})}}));
System.import("./___monkey.entry.js", "./");
