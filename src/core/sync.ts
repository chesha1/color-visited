// ================== 同步模块 ==================

import type {
  CompressedSyncEnvelope,
  GitHubGist,
  GitHubGistFile,
  SyncData,
  SyncStorageEncoding,
  SyncSettings,
  VisitedLinksData
} from '@/types';
import { DEFAULT_SETTINGS } from '@/core/config';
import { eventBus } from '@/core/eventBus';
import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

const GITHUB_ACCEPT_HEADER = 'application/vnd.github.v3+json';
const SYNC_STORAGE_VERSION = 'v2';
const SYNC_STORAGE_ENCODING: SyncStorageEncoding = 'gzip-base64-json';
const textEncoder = new TextEncoder();

const compressionSupportCache = new Map<SyncStorageEncoding, boolean>();

function getDefaultUserSettings() {
  return {
    general: DEFAULT_SETTINGS.general,
    preset: DEFAULT_SETTINGS.presetStates,
    batch: DEFAULT_SETTINGS.batchKey,
    sync: { ...DEFAULT_SETTINGS.sync } as SyncSettings
  };
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isVisitedLinksData(value: unknown): value is VisitedLinksData {
  if (!isPlainObject(value)) {
    return false;
  }

  return Object.values(value).every(timestamp => typeof timestamp === 'number' && Number.isFinite(timestamp));
}

function extractVisitedLinksFromUnknown(value: unknown): VisitedLinksData | null {
  if (isVisitedLinksData(value)) {
    return value;
  }

  if (!isPlainObject(value) || !('visitedLinks' in value)) {
    return null;
  }

  const { visitedLinks } = value as Record<string, unknown>;
  return isVisitedLinksData(visitedLinks) ? visitedLinks : null;
}

function isSyncData(value: unknown): value is SyncData {
  if (!isPlainObject(value) || !('visitedLinks' in value)) {
    return false;
  }

  const { visitedLinks, lastSyncTime } = value as Record<string, unknown>;
  return isVisitedLinksData(visitedLinks)
    && (!('lastSyncTime' in value) || (typeof lastSyncTime === 'number' && Number.isFinite(lastSyncTime)));
}

function isCompressedSyncEnvelope(value: unknown): value is CompressedSyncEnvelope {
  if (!isPlainObject(value)) {
    return false;
  }

  const isKnownEncoding = value.encoding === 'gzip-base64-json' || value.encoding === 'zstd-base64-json';

  return value.syncVersion === SYNC_STORAGE_VERSION
    && isKnownEncoding
    && typeof value.payload === 'string'
    && typeof value.itemCount === 'number'
    && typeof value.updatedAt === 'number'
    && typeof value.originalBytes === 'number'
    && typeof value.compressedBytes === 'number';
}

function getCompressionFormat(encoding: SyncStorageEncoding): CompressionFormat {
  if (encoding === 'gzip-base64-json') {
    return 'gzip';
  }

  return 'zstd' as CompressionFormat;
}

function getEncodingDisplayName(encoding: SyncStorageEncoding): string {
  return encoding === 'gzip-base64-json' ? 'gzip' : 'Zstandard（zstd）';
}

function getValueTypeLabel(value: unknown): string {
  if (value === null) {
    return 'null';
  }

  if (Array.isArray(value)) {
    return 'array';
  }

  return typeof value;
}

function getObjectKeyPreview(value: Record<string, unknown>, limit = 5): string {
  const keys = Object.keys(value);

  if (keys.length === 0) {
    return '(empty)';
  }

  if (keys.length <= limit) {
    return keys.join(', ');
  }

  return `${keys.slice(0, limit).join(', ')} 等 ${keys.length} 个键`;
}

function getInvalidVisitedLinksSamples(value: Record<string, unknown>, limit = 3): string[] {
  const samples: string[] = [];

  for (const [url, timestamp] of Object.entries(value)) {
    if (typeof timestamp === 'number' && Number.isFinite(timestamp)) {
      continue;
    }

    samples.push(`${url}=${String(timestamp)} (${getValueTypeLabel(timestamp)})`);
    if (samples.length >= limit) {
      break;
    }
  }

  return samples;
}

function describeVisitedLinksCandidate(value: unknown): string {
  if (!isPlainObject(value)) {
    return `类型是 ${getValueTypeLabel(value)}，不是对象`;
  }

  const invalidSamples = getInvalidVisitedLinksSamples(value);
  if (invalidSamples.length === 0) {
    return `对象共有 ${Object.keys(value).length} 个键，但未通过预期校验`;
  }

  return `发现非数字时间戳示例: ${invalidSamples.join('; ')}`;
}

function describeCompressedPayloadShape(value: unknown): string {
  if (isVisitedLinksData(value)) {
    return `已解析为 visitedLinks，共 ${Object.keys(value).length} 条记录`;
  }

  if (!isPlainObject(value)) {
    return `解压后顶层类型是 ${getValueTypeLabel(value)}，期望是 visitedLinks 对象或包含 visitedLinks 的对象`;
  }

  if ('visitedLinks' in value) {
    return `检测到 visitedLinks 字段，但其内容无效: ${describeVisitedLinksCandidate((value as Record<string, unknown>).visitedLinks)}`;
  }

  return `解压后对象缺少 visitedLinks 字段，当前键: ${getObjectKeyPreview(value)}`;
}

function describeCompressedEnvelopeShape(value: Record<string, unknown>): string {
  const issues: string[] = [];

  if (value.syncVersion !== SYNC_STORAGE_VERSION) {
    issues.push(`syncVersion=${String(value.syncVersion)}`);
  }

  if (value.encoding !== 'gzip-base64-json' && value.encoding !== 'zstd-base64-json') {
    issues.push(`encoding=${String(value.encoding)}`);
  }

  if (typeof value.payload !== 'string') {
    issues.push(`payload 类型为 ${getValueTypeLabel(value.payload)}`);
  }

  if (typeof value.itemCount !== 'number') {
    issues.push(`itemCount 类型为 ${getValueTypeLabel(value.itemCount)}`);
  }

  if (typeof value.updatedAt !== 'number') {
    issues.push(`updatedAt 类型为 ${getValueTypeLabel(value.updatedAt)}`);
  }

  if (typeof value.originalBytes !== 'number') {
    issues.push(`originalBytes 类型为 ${getValueTypeLabel(value.originalBytes)}`);
  }

  if (typeof value.compressedBytes !== 'number') {
    issues.push(`compressedBytes 类型为 ${getValueTypeLabel(value.compressedBytes)}`);
  }

  if (issues.length === 0) {
    return `键: ${getObjectKeyPreview(value)}`;
  }

  return issues.join('; ');
}

function supportsCompressionEncoding(encoding: SyncStorageEncoding): boolean {
  const cachedSupport = compressionSupportCache.get(encoding);
  if (cachedSupport !== undefined) {
    return cachedSupport;
  }

  // v2 直接依赖浏览器原生 Compression Streams，避免额外引入额外的压缩运行时。
  if (typeof CompressionStream === 'undefined' || typeof DecompressionStream === 'undefined') {
    compressionSupportCache.set(encoding, false);
    return false;
  }

  try {
    const format = getCompressionFormat(encoding);
    new CompressionStream(format);
    new DecompressionStream(format);
    compressionSupportCache.set(encoding, true);
  }
  catch {
    compressionSupportCache.set(encoding, false);
  }

  return compressionSupportCache.get(encoding) === true;
}

export function isGzipSyncSupported(): boolean {
  return supportsCompressionEncoding(SYNC_STORAGE_ENCODING);
}

function assertCompressionEncodingSupported(encoding: SyncStorageEncoding): void {
  if (!supportsCompressionEncoding(encoding)) {
    throw new Error(`当前浏览器不支持 ${getEncodingDisplayName(encoding)} Compression Streams，无法使用对应的同步存储格式`);
  }
}

function getByteLength(text: string): number {
  return textEncoder.encode(text).length;
}

function bytesToBase64(bytes: Uint8Array): string {
  const CHUNK_SIZE = 0x8000;
  let binary = '';

  // Gist 文件内容必须是文本，这里把压缩后的二进制稳定转成可持久化的 base64 字符串。
  for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
    const chunk = bytes.subarray(i, i + CHUNK_SIZE);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
}

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}

function toBlobCompatibleBytes(bytes: Uint8Array): Uint8Array<ArrayBuffer> {
  return Uint8Array.from(bytes);
}

async function compressText(text: string, encoding: SyncStorageEncoding): Promise<Uint8Array> {
  assertCompressionEncodingSupported(encoding);
  const format = getCompressionFormat(encoding);
  const compressedStream = new Blob([text])
    .stream()
    .pipeThrough(new CompressionStream(format));

  return new Uint8Array(await new Response(compressedStream).arrayBuffer());
}

async function decompressText(compressedBytes: Uint8Array, encoding: SyncStorageEncoding): Promise<string> {
  assertCompressionEncodingSupported(encoding);
  const format = getCompressionFormat(encoding);
  const decompressedStream = new Blob([toBlobCompatibleBytes(compressedBytes)])
    .stream()
    .pipeThrough(new DecompressionStream(format));

  return await new Response(decompressedStream).text();
}

function getFirstGistFile(gist: GitHubGist): GitHubGistFile {
  const firstFile = Object.values(gist.files)[0];
  if (!firstFile) {
    throw new Error('Gist 中没有可用文件');
  }
  return firstFile;
}

function getFirstGistFileName(gist: GitHubGist): string {
  const fileName = Object.keys(gist.files)[0];
  if (!fileName) {
    throw new Error('Gist 中没有可用文件名');
  }
  return fileName;
}

async function serializeVisitedLinksForGist(data: SyncData | VisitedLinksData): Promise<string> {
  const visitedLinks = extractVisitedLinks(data);
  const jsonText = JSON.stringify(visitedLinks);
  const compressedBytes = await compressText(jsonText, SYNC_STORAGE_ENCODING);

  // v2 只压缩 visitedLinks 本体；Gist 里保留少量元信息，便于调试和后续迁移。
  const envelope: CompressedSyncEnvelope = {
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

async function deserializeCompressedSyncEnvelope(envelope: CompressedSyncEnvelope): Promise<VisitedLinksData> {
  const envelopeMeta = {
    encoding: envelope.encoding,
    itemCount: envelope.itemCount,
    updatedAt: envelope.updatedAt,
    originalBytes: envelope.originalBytes,
    compressedBytes: envelope.compressedBytes
  };

  let compressedBytes: Uint8Array;
  try {
    compressedBytes = base64ToBytes(envelope.payload);
  }
  catch (error) {
    console.warn('同步存储 v2 base64 解码失败:', envelopeMeta, error);
    throw new Error('同步存储 v2 payload 不是合法 Base64');
  }

  let decompressedText = '';
  try {
    decompressedText = await decompressText(compressedBytes, envelope.encoding);
  }
  catch (error) {
    console.warn('同步存储 v2 解压失败:', envelopeMeta, error);
    throw new Error(`同步存储 v2 ${getEncodingDisplayName(envelope.encoding)} 解压失败`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(decompressedText) as unknown;
  }
  catch (error) {
    console.warn('同步存储 v2 JSON 解析失败:', envelopeMeta, error);
    throw new Error('同步存储 v2 解压后的内容不是合法 JSON');
  }

  const visitedLinks = extractVisitedLinksFromUnknown(parsed);
  if (visitedLinks) {
    return visitedLinks;
  }

  const reason = describeCompressedPayloadShape(parsed);
  console.warn('同步存储 v2 数据结构无效:', envelopeMeta, reason);

  throw new Error(`同步存储 v2 数据格式无效: ${reason}`);
}

async function deserializeGistContent(contentText: string): Promise<SyncData | VisitedLinksData> {
  let parsed: unknown;

  try {
    parsed = JSON.parse(contentText);
  }
  catch (error) {
    console.warn('解析 Gist 内容失败:', error);
    return {};
  }

  if (isCompressedSyncEnvelope(parsed)) {
    return await deserializeCompressedSyncEnvelope(parsed);
  }

  if (isPlainObject(parsed) && parsed.syncVersion === SYNC_STORAGE_VERSION) {
    const reason = describeCompressedEnvelopeShape(parsed);
    console.warn('同步存储 v2 外层包结构无效:', reason);
    throw new Error(`同步存储 v2 外层包格式无效: ${reason}`);
  }

  // 继续兼容旧版明文 Gist；下一次成功上传时会自动升级成 v2 单文件 gzip 压缩包。
  if (isSyncData(parsed) || isVisitedLinksData(parsed)) {
    return parsed;
  }

  const legacyVisitedLinks = extractVisitedLinksFromUnknown(parsed);
  if (legacyVisitedLinks) {
    console.warn('读取到元信息异常的旧版同步数据，已仅提取 visitedLinks 继续兼容');
    return legacyVisitedLinks;
  }

  return {};
}

function areVisitedLinksEqual(left: VisitedLinksData, right: VisitedLinksData): boolean {
  let leftCount = 0;

  // 避免再把 10 万条记录整体 stringify 一遍，只做键值级比较。
  for (const url in left) {
    leftCount++;
    if (left[url] !== right[url]) {
      return false;
    }
  }

  let rightCount = 0;
  for (const _url in right) {
    rightCount++;
  }

  return leftCount === rightCount;
}

// 获取同步设置
export function getSyncSettings(): SyncSettings {
  const userSettings = GM_getValue('userSettings', getDefaultUserSettings());
  return userSettings.sync;
}

// 保存同步设置（仅更新sync部分，保持与其他模块兼容）
export function saveSyncSettings(settings: SyncSettings): void {
  const userSettings = GM_getValue('userSettings', getDefaultUserSettings());
  userSettings.sync = settings;
  GM_setValue('userSettings', userSettings);
}

// ================== GitHub API 模块 ==================

// 验证 GitHub 令牌
export async function validateGitHubToken(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
        Accept: GITHUB_ACCEPT_HEADER,
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
        Accept: GITHUB_ACCEPT_HEADER,
      },
    });

    if (!gistInfo.ok) {
      throw new Error(`获取 Gist 信息失败: ${gistInfo.status}`);
    }

    const gistData = await gistInfo.json() as GitHubGist;
    const fileName = getFirstGistFileName(gistData);
    // 从 v2 开始，上传内容始终写成压缩包格式，旧明文格式只负责读取兼容。
    const serializedContent = await serializeVisitedLinksForGist(data);

    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': GITHUB_ACCEPT_HEADER,
      },
      body: JSON.stringify({
        files: {
          [fileName]: {
            content: serializedContent,
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
        Accept: GITHUB_ACCEPT_HEADER,
      },
    });

    if (!response.ok) {
      throw new Error(`获取 Gist 失败: ${response.status}`);
    }

    const result = await response.json() as GitHubGist;
    const file = getFirstGistFile(result);
    let contentText = '';

    if (file.truncated) {
      // Gist API 只会内联部分大文件内容，被截断时必须转 raw_url 取完整文本。
      const rawResp = await fetch(file.raw_url);
      if (!rawResp.ok) {
        throw new Error(`获取 Gist 原始内容失败: ${rawResp.status}`);
      }
      contentText = await rawResp.text();
    }
    else {
      contentText = file.content;
    }

    return contentText ? await deserializeGistContent(contentText) : {};
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
  if (isSyncData(data)) {
    return data.visitedLinks;
  }

  return data;
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
  return !areVisitedLinksEqual(extractVisitedLinks(oldData), extractVisitedLinks(newData));
}

// 启动时同步
export async function syncOnStartup(): Promise<void> {
  try {
    console.log('开始同步数据...');

    // 1. 获取本地数据快照（同步开始时）
    const localLinksSnapshot = GM_getValue('visitedLinks', {}) as VisitedLinksData;

    // 2. 从云端获取数据（这个过程可能较慢）
    const cloudData = await downloadFromCloud();
    const cloudLinks = extractVisitedLinks(cloudData);

    // 3. 合并数据（以最新时间戳为准）
    let mergedLinks = mergeVisitedLinks(localLinksSnapshot, cloudLinks);

    // 4. 重新获取本地数据，合并同步期间用户可能新增的链接
    // 这是为了防止在网络请求期间用户点击的链接被覆盖丢失
    const currentLocalLinks = GM_getValue('visitedLinks', {}) as VisitedLinksData;
    mergedLinks = mergeVisitedLinks(mergedLinks, currentLocalLinks);

    // 5. 保存到本地
    GM_setValue('visitedLinks', mergedLinks);

    // 6. 检查是否需要上传到云端
    const localChanged = hasDataChanged(localLinksSnapshot, mergedLinks);
    const cloudChanged = hasDataChanged(cloudLinks, mergedLinks);

    if (localChanged || cloudChanged) {
      await uploadToCloud(mergedLinks);
      console.log('数据已同步并上传到云端');
    }
    else {
      console.log('数据已同步，无需上传');
    }

    // 7. 更新同步时间
    const syncSettings = getSyncSettings();
    syncSettings.lastSyncTime = Date.now();
    saveSyncSettings(syncSettings);

    // 8. 发送同步完成事件
    eventBus.emit('sync:completed');
  }
  catch (error: unknown) {
    const syncError = error as Error;
    console.warn('同步失败，使用本地数据:', syncError.message);
    throw error; // 重新抛出错误，让调用者处理
  }
}
