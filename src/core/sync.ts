// ================== 同步模块 ==================

import type { SyncSettings, SyncData, VisitedLinksData } from '@/types';
import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

// 简化的同步配置 - 代码中的默认值
export const defaultSyncSettings: SyncSettings = {
  enabled: false,
  githubToken: '',
  gistId: '',
  lastSyncTime: 0,
};

// 获取同步设置
export function getSyncSettings(): SyncSettings {
  const storedSettings = GM_getValue('sync_settings', {}) as Partial<SyncSettings>;
  return {
    ...defaultSyncSettings,
    ...storedSettings,
    // 确保关键参数不为空，如果存储中为空则使用默认值
    githubToken: storedSettings.githubToken || defaultSyncSettings.githubToken,
    gistId: storedSettings.gistId || defaultSyncSettings.gistId,
  };
}

// 保存同步设置
export function saveSyncSettings(settings: SyncSettings): void {
  GM_setValue('sync_settings', settings);
}

// ================== GitHub API 模块 ==================

// 验证 GitHub 令牌
export async function validateGitHubToken(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    return response.ok;
  }
  catch (error) {
    console.warn('验证 GitHub 令牌失败:', error);
    return false;
  }
}

// 更新现有的 Gist
export async function updateGist(token: string, gistId: string, data: SyncData | VisitedLinksData): Promise<void> {
  try {
    // 先获取现有 Gist 以确定文件名
    const gistInfo = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!gistInfo.ok) {
      throw new Error(`获取 Gist 信息失败: ${gistInfo.status}`);
    }

    const gistData = await gistInfo.json();
    const fileName = Object.keys(gistData.files)[0]; // 使用第一个文件

    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        files: {
          [fileName]: {
            content: JSON.stringify(data, null, 2),
          },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`更新 Gist 失败: ${response.status}`);
    }
  }
  catch (error) {
    console.warn('更新 Gist 失败:', error);
    throw error;
  }
}

// 获取 Gist 内容
export async function getGist(token: string, gistId: string): Promise<SyncData | VisitedLinksData> {
  try {
    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      // 获取第一个文件的内容，不依赖特定文件名
      const fileName = Object.keys(result.files)[0];
      const file = result.files[fileName];
      let contentText = '';

      if (file.truncated) {
        // 当文件被截断时，需要再请求 raw_url 获取完整内容
        const rawResp = await fetch(file.raw_url);
        if (!rawResp.ok) {
          throw new Error(`获取 Gist 原始内容失败: ${rawResp.status}`);
        }
        contentText = await rawResp.text();
      }
      else {
        contentText = file.content;
      }

      // 解析 JSON 内容，若解析失败则返回空对象
      try {
        return contentText ? JSON.parse(contentText) : {};
      }
      catch (e) {
        console.warn('解析 Gist 内容失败:', e);
        return {};
      }
    }
    else {
      throw new Error(`获取 Gist 失败: ${response.status}`);
    }
  }
  catch (error) {
    console.warn('获取 Gist 失败:', error);
    throw error;
  }
}

// ================== 云端数据操作 ==================

// 上传数据到云端
export async function uploadToCloud(data: SyncData | VisitedLinksData): Promise<void> {
  const syncSettings = getSyncSettings();
  const { githubToken, gistId } = syncSettings;

  if (!githubToken) {
    throw new Error('GitHub 令牌未设置');
  }

  if (!gistId) {
    throw new Error('Gist ID 未设置，请先创建 Gist 并在设置中填入 ID');
  }

  await updateGist(githubToken, gistId, data);
}

// 从云端下载数据
export async function downloadFromCloud(): Promise<SyncData | VisitedLinksData> {
  const syncSettings = getSyncSettings();
  const { githubToken, gistId } = syncSettings;

  if (!githubToken || !gistId) {
    return {};
  }

  return await getGist(githubToken, gistId);
}

// ================== 数据合并和同步逻辑 ==================

// 提取访问链接数据
function extractVisitedLinks(data: SyncData | VisitedLinksData): VisitedLinksData {
  if (data && typeof data === 'object' && 'visitedLinks' in data && 'lastSyncTime' in data) {
    // 这是 SyncData 格式
    return (data as SyncData).visitedLinks;
  }
  // 这是直接的 VisitedLinksData 格式
  return data as VisitedLinksData;
}

// 合并本地和云端数据
export function mergeVisitedLinks(localLinks: VisitedLinksData, cloudLinks: VisitedLinksData): VisitedLinksData {
  const merged = { ...localLinks };

  // 以最新时间戳为准合并数据
  Object.keys(cloudLinks).forEach((url) => {
    if (!merged[url] || cloudLinks[url] > merged[url]) {
      merged[url] = cloudLinks[url];
    }
  });

  return merged;
}

// 检查数据是否有变化
export function hasDataChanged(oldData: VisitedLinksData | SyncData, newData: VisitedLinksData | SyncData): boolean {
  return JSON.stringify(oldData) !== JSON.stringify(newData);
}

// 启动时同步
export async function syncOnStartup(): Promise<void> {
  try {
    console.log('开始同步数据...');

    // 1. 获取本地数据
    const localLinks = GM_getValue('visitedLinks', {}) as VisitedLinksData;

    // 2. 从云端获取数据
    const cloudData = await downloadFromCloud();
    const cloudLinks = extractVisitedLinks(cloudData);

    // 3. 合并数据（以最新时间戳为准）
    const mergedLinks = mergeVisitedLinks(localLinks, cloudLinks);

    // 4. 保存到本地
    GM_setValue('visitedLinks', mergedLinks);

    // 5. 检查是否需要上传到云端
    const localChanged = hasDataChanged(localLinks, mergedLinks);
    const cloudChanged = hasDataChanged(cloudLinks, mergedLinks);

    if (localChanged || cloudChanged) {
      await uploadToCloud(mergedLinks);
      console.log('数据已同步并上传到云端');
    }
    else {
      console.log('数据已同步，无需上传');
    }

    // 6. 更新同步时间
    const syncSettings = getSyncSettings();
    syncSettings.lastSyncTime = Date.now();
    saveSyncSettings(syncSettings);
  }
  catch (error: unknown) {
    const syncError = error as Error;
    console.warn('同步失败，使用本地数据:', syncError.message);
    throw error; // 重新抛出错误，让调用者处理
  }
}