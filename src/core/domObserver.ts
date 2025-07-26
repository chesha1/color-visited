import { updateLinkStatus } from '@/core/linkManager';
import type { VisitedLinks } from '@/types';
import type { ScriptState } from '@/core/state';

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
            mutations.forEach((mutation: MutationRecord): void => {
                mutation.addedNodes.forEach((node: Node): void => {
                    if (node.nodeType !== Node.ELEMENT_NODE) return;
                    const element = node as Element;
                    element.querySelectorAll('a[href]:not(.visited-link)').forEach((link: Element): void => {
                        updateLinkStatus(link, linkContext!.visitedLinks, linkContext!.state);
                    });
                });
            });
        }

        // 2. 检测 URL 变化（针对 SPA 页面）
        if (lastHref !== location.href) {
            lastHref = location.href;
            urlChangeCallbacks.forEach((cb) => cb());
        }
    });

    globalObserver.observe(document.body, { childList: true, subtree: true });
    return globalObserver;
} 