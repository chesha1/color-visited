type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    platform?: string
  }
}

const browserNavigator: NavigatorWithUserAgentData | undefined =
  typeof navigator === 'undefined' ? undefined : navigator

// 检测当前操作系统
export const isMac = (() => {
  if (!browserNavigator) {
    return false;
  }

  // 优先使用现代 API
  if (browserNavigator.userAgentData) {
    return browserNavigator.userAgentData.platform === 'macOS';
  }

  // 降级到 userAgent 检测
  return /Mac|iPod|iPhone|iPad/.test(browserNavigator.userAgent);
})();

// ================== URL 处理工具 ==================

// 去除各种查询参数等的干扰
// 传入 <a> 元素或 URL 对象，直接读它的 hostname，不自己 new URL：
// <a> 的 href 解析失败时 hostname 是空字符串，不会命中下面任何站点，链接原样返回，不会抛错
export function getBaseUrl({ href: url, hostname: domain }: Pick<URL, 'href' | 'hostname'>): string {
  if (domain === 'www.v2ex.com') return url.split('?')[0].split('#')[0];
  if (domain === 'linux.do') return url.replace(/(\/\d+)\/\d+$/, '$1');
  if (domain === 'www.bilibili.com') return url.split('?')[0];
  if (domain === 'tieba.baidu.com') return url.split('?')[0];
  if (domain === 'www.douban.com') return url.split('?')[0];
  if (domain === 'ngabbs.com') return url.split('&')[0];
  if (domain === 'bbs.nga.cn') return url.split('&')[0];
  if (domain === 'nga.178.com') return url.split('&')[0];
  // 帖子链接会带上语言前缀（如 /cn/posts/xxx、/en/posts/xxx），去掉后同一帖子在不同语言下视为同一链接
  if (domain === 'chan.sankakucomplex.com') return url.split(/[?#]/)[0].replace(/\.com\/[a-z]{2}\/posts\//, '.com/posts/');

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

// ================== 存储信息工具 ==================

// 计算存储信息的大小并显示到控制台
export function logStorageInfo(visitedLinks: Record<string, number>): void {
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
