import { updateLinkStatus } from '@/core/linkManager';
import type { VisitedLinks, ScriptState } from '@/types';

// 全局 MutationObserver（单例）
let globalObserver: MutationObserver | null = null;

// 链接染色所需的上下文，在页面激活时注入
let linkContext: { visitedLinks: VisitedLinks; state: ScriptState } | null = null;

// URL 变化回调集合
const urlChangeCallbacks: Set<() => void> = new Set();

// 记录上一次的 URL，用于检测 SPA 场景下的地址栏变化
let lastHref: string = location.href;

/**
 * 提供链接染色所需的上下文（visitedLinks 与脚本状态）。
 * 每当页面重新初始化时都会注入最新的引用。
 */
export function provideLinkContext(visitedLinks: VisitedLinks, state: ScriptState): void {
    linkContext = { visitedLinks, state };
}

/**
 * 注册 URL 变化回调。多次调用会自动去重。
 */
export function registerUrlChangeCallback(callback: () => void): void {
    urlChangeCallbacks.add(callback);
}

/**
 * 确保全局 DOM 观察器已创建并开始工作，返回该单例。
 */
export function ensureDOMObserver(): MutationObserver {
    if (globalObserver) return globalObserver;

    globalObserver = new MutationObserver((mutations: MutationRecord[]): void => {
        // 1. 处理新增节点中的链接染色
        if (linkContext) {
            let newLinksCount = 0;
            let attrLinksCount = 0;
            mutations.forEach((mutation: MutationRecord): void => {
                // 处理新增节点
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node: Node): void => {
                        if (node.nodeType !== Node.ELEMENT_NODE) return;
                        const element = node as Element;
                        // 检查节点本身是否是链接
                        if (element.tagName === 'A' && element.hasAttribute('href') && !element.classList.contains('visited-link')) {
                            updateLinkStatus(element, linkContext!.visitedLinks, linkContext!.state);
                            newLinksCount++;
                        }
                        // 检查子节点中的链接
                        const newLinks = element.querySelectorAll('a[href]:not(.visited-link)');
                        newLinksCount += newLinks.length;
                        newLinks.forEach((link: Element): void => {
                            updateLinkStatus(link, linkContext!.visitedLinks, linkContext!.state);
                        });
                    });
                }
                // 处理 href 属性变化
                else if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
                    const target = mutation.target as Element;
                    if (target.tagName === 'A' && !target.classList.contains('visited-link')) {
                        updateLinkStatus(target, linkContext!.visitedLinks, linkContext!.state);
                        attrLinksCount++;
                    }
                }
            });
            if (linkContext.state.generalSettings.debug && newLinksCount > 0) {
                console.log(`[DOMObserver] 检测到 ${newLinksCount} 个新链接`);
            }
            if (linkContext.state.generalSettings.debug && attrLinksCount > 0) {
                console.log(`[DOMObserver] 检测到 ${attrLinksCount} 个链接 href 属性变化`);
            }
        }

        // 2. 检测 URL 变化（针对 SPA 页面）
        if (lastHref !== location.href) {
            if (linkContext?.state.generalSettings.debug) {
                console.log(`[DOMObserver] URL变化: ${lastHref} -> ${location.href}`);
            }
            lastHref = location.href;
            urlChangeCallbacks.forEach((cb) => cb());
        }
    });

    globalObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
    return globalObserver;
}

/**
 * 断开并重置全局 DOM 观察器，清空链接上下文。
 * 下次调用 ensureDOMObserver 时会重新创建。
 */
export function disconnectDOMObserver(): void {
    if (globalObserver) {
        globalObserver.disconnect();
        globalObserver = null;
    }
    linkContext = null;
} 