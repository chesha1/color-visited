// ================== 工具函数模块 ==================

// ================== 操作系统检测 ==================

// 检测当前操作系统
export const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// ================== URL 处理工具 ==================

// 去除各种查询参数等的干扰
export function getBaseUrl(url: string): string {
  const domain = new URL(url).hostname;
  if (domain === 'www.v2ex.com') return url.split('?')[0].split('#')[0];
  if (domain === 'linux.do') return url.replace(/(\/\d+)\/\d+$/, '$1');
  if (domain === 'www.bilibili.com') return url.split('?')[0];
  if (domain === 'tieba.baidu.com') return url.split('?')[0];
  if (domain === 'www.douban.com') return url.split('?')[0];
  if (domain === 'ngabbs.com') return url.split('&')[0];
  if (domain === 'bbs.nga.cn') return url.split('&')[0];
  if (domain === 'nga.178.com') return url.split('&')[0];

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