// ================== 同步模块 ==================

import type {
  CompressedSyncEnvelope,
  CompressedSyncEnvelopeV3,
  GitHubGist,
  GitHubGistFile,
  SyncData,
  SyncStorageEncoding,
  SyncStorageVersion,
  SyncSettings,
  V3GroupedPayload,
  V3PathRecord,
  VisitedLinksData,
  VisitedLinksRepairResult
} from '@/types';
import { DEFAULT_SETTINGS } from '@/core/config';
import { eventBus } from '@/core/eventBus';
import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

const GITHUB_ACCEPT_HEADER = 'application/vnd.github.v3+json';
const SYNC_STORAGE_VERSION = 'v3' as const;
const SYNC_STORAGE_ENCODING: SyncStorageEncoding = 'gzip-base64-json';
const V3_RAW_GROUP_KEY = '@raw';
const textEncoder = new TextEncoder();
const KNOWN_SYNC_POLLUTION_KEYS = [
  'syncVersion',
  'encoding',
  'payload',
  'itemCount',
  'updatedAt',
  'originalBytes',
  'compressedBytes'
] as const;

const compressionSupportCache = new Map<SyncStorageEncoding, boolean>();
const knownSyncPollutionKeySet = new Set<string>(KNOWN_SYNC_POLLUTION_KEYS);

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

function isSyncStorageVersion(value: unknown): value is SyncStorageVersion {
  return value === 'v2' || value === 'v3';
}

function isCompressedSyncEnvelope(value: unknown): value is CompressedSyncEnvelope {
  if (!isPlainObject(value)) {
    return false;
  }

  const isKnownEncoding = value.encoding === 'gzip-base64-json' || value.encoding === 'zstd-base64-json';

  return isSyncStorageVersion(value.syncVersion)
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

// 从对象中提取常见的同步包元信息键，帮助日志快速判断是否是旧脚本误读导致的污染。
function getKnownSyncPollutionKeys(value: Record<string, unknown>, limit = KNOWN_SYNC_POLLUTION_KEYS.length): string[] {
  const pollutionKeys: string[] = [];

  for (const key of Object.keys(value)) {
    if (!knownSyncPollutionKeySet.has(key)) {
      continue;
    }

    pollutionKeys.push(key);
    if (pollutionKeys.length >= limit) {
      break;
    }
  }

  return pollutionKeys;
}

// 统一收集被清理掉的键值样例，避免每个恢复分支都手写一套日志拼接逻辑。
function appendRemovedSample(samples: string[], key: string, value: unknown, limit = 3): void {
  if (samples.length >= limit) {
    return;
  }

  samples.push(`${key}=${String(value)} (${getValueTypeLabel(value)})`);
}

// 把候选对象描述成人类可读的诊断文本，优先给出无效值和同步包污染键样例。
function describeVisitedLinksCandidate(value: unknown): string {
  if (!isPlainObject(value)) {
    return `类型是 ${getValueTypeLabel(value)}，不是对象`;
  }

  const invalidSamples = getInvalidVisitedLinksSamples(value);
  const knownPollutionKeys = getKnownSyncPollutionKeys(value);
  const issues: string[] = [];

  if (invalidSamples.length > 0) {
    issues.push(`发现非数字时间戳示例: ${invalidSamples.join('; ')}`);
  }

  if (knownPollutionKeys.length > 0) {
    issues.push(`命中疑似同步包污染键: ${knownPollutionKeys.join(', ')}`);
  }

  if (issues.length === 0) {
    return `对象共有 ${Object.keys(value).length} 个键，但未通过预期校验`;
  }

  return issues.join('；');
}

// 把单条 v3 路径记录的结构问题转成人类可读文本，供校验和报错复用。
function describeV3PathRecord(value: unknown): string {
  if (!Array.isArray(value)) {
    return `类型是 ${getValueTypeLabel(value)}，不是数组`;
  }

  if (value.length !== 3) {
    return `数组长度为 ${value.length}，期望为 3`;
  }

  const [prefixLength, suffix, timestamp] = value;
  const issues: string[] = [];

  if (typeof prefixLength !== 'number' || !Number.isInteger(prefixLength) || prefixLength < 0) {
    issues.push(`prefixLength=${String(prefixLength)}`);
  }

  if (typeof suffix !== 'string') {
    issues.push(`suffix 类型为 ${getValueTypeLabel(suffix)}`);
  }

  if (typeof timestamp !== 'number' || !Number.isFinite(timestamp)) {
    issues.push(`timestamp=${String(timestamp)}`);
  }

  if (issues.length === 0) {
    return '[prefixLength, suffix, timestamp]';
  }

  return issues.join('; ');
}

// 扫描整个 v3 payload，尽量定位到首个出问题的分组和记录，方便排查云端坏数据。
function describeV3GroupedPayloadCandidate(value: unknown): string {
  if (!isPlainObject(value)) {
    return `解压后顶层类型是 ${getValueTypeLabel(value)}，期望是 host 分组对象`;
  }

  const groups = Object.entries(value);
  for (const [groupKey, records] of groups) {
    if (!Array.isArray(records)) {
      return `分组 ${groupKey} 的类型是 ${getValueTypeLabel(records)}，期望是数组`;
    }

    for (let index = 0; index < records.length; index++) {
      const record = records[index];
      const reason = describeV3PathRecord(record);
      if (reason !== '[prefixLength, suffix, timestamp]') {
        return `分组 ${groupKey} 的第 ${index + 1} 条记录无效: ${reason}`;
      }
    }
  }

  return `对象共有 ${groups.length} 个分组，但未通过 v3 payload 校验`;
}

// 描述压缩负载长什么样，便于在报错时区分是“完全不是对象”还是“对象被污染”。
function describeCompressedPayloadShape(value: unknown, syncVersion: SyncStorageVersion): string {
  if (syncVersion === 'v3') {
    return describeV3GroupedPayloadCandidate(value);
  }

  if (isVisitedLinksData(value)) {
    return `已解析为 visitedLinks，共 ${Object.keys(value).length} 条记录`;
  }

  if (!isPlainObject(value)) {
    return `解压后顶层类型是 ${getValueTypeLabel(value)}，期望是 visitedLinks 对象或包含 visitedLinks 的对象`;
  }

  if ('visitedLinks' in value) {
    return `检测到 visitedLinks 字段，但其内容无效: ${describeVisitedLinksCandidate((value as Record<string, unknown>).visitedLinks)}`;
  }

  return `解压后对象未通过 visitedLinks 校验: ${describeVisitedLinksCandidate(value)}`;
}

// 当外层对象看起来像同步包，但字段不完整或类型不对时，统一输出诊断文本。
function describeCompressedEnvelopeShape(value: Record<string, unknown>, syncVersion: SyncStorageVersion): string {
  const issues: string[] = [];

  if (value.syncVersion !== syncVersion) {
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

// 尝试把未知输入修复成可信的 visitedLinks：
// 只保留有限数字时间戳，同时剔除旧脚本可能混入的同步包元信息键。
function tryRepairVisitedLinksData(value: unknown): VisitedLinksRepairResult | null {
  if (!isPlainObject(value)) {
    return null;
  }

  const candidateValue = 'visitedLinks' in value
    ? (value as Record<string, unknown>).visitedLinks
    : value;

  if (!isPlainObject(candidateValue)) {
    return null;
  }

  const visitedLinks: VisitedLinksData = {};
  const removedSamples: string[] = [];
  const knownPollutionKeys = new Set<string>();
  let removedCount = 0;

  for (const [key, timestamp] of Object.entries(candidateValue)) {
    if (knownSyncPollutionKeySet.has(key)) {
      removedCount++;
      knownPollutionKeys.add(key);
      appendRemovedSample(removedSamples, key, timestamp);
      continue;
    }

    if (typeof timestamp === 'number' && Number.isFinite(timestamp)) {
      visitedLinks[key] = timestamp;
      continue;
    }

    removedCount++;
    appendRemovedSample(removedSamples, key, timestamp);
  }

  if (Object.keys(visitedLinks).length === 0 && Object.keys(candidateValue).length > 0) {
    return null;
  }

  return {
    visitedLinks,
    removedCount,
    removedSamples,
    knownPollutionKeys: Array.from(knownPollutionKeys)
  };
}

// 在无法恢复时生成统一错误说明，避免不同入口抛出的错误语义不一致。
function describeVisitedLinksRepairFailure(value: unknown): string {
  if (!isPlainObject(value)) {
    return `顶层类型是 ${getValueTypeLabel(value)}，期望是对象`;
  }

  if ('visitedLinks' in value) {
    return `检测到 visitedLinks 字段，但其内容无效: ${describeVisitedLinksCandidate((value as Record<string, unknown>).visitedLinks)}`;
  }

  return `对象清洗后没有可用记录: ${describeVisitedLinksCandidate(value)}`;
}

// 只有实际删掉脏数据时才记录自愈日志，日志里带来源、数量和样例，方便排查多设备污染。
function logVisitedLinksRepair(source: string, result: VisitedLinksRepairResult): void {
  if (result.removedCount === 0) {
    return;
  }

  const sampleText = result.removedSamples.length > 0
    ? result.removedSamples.join('; ')
    : '(没有可展示的样例)';
  const pollutionHint = result.knownPollutionKeys.length > 0
    ? ` 命中疑似同步包污染键: ${result.knownPollutionKeys.join(', ')}。仍有旧设备运行旧脚本时，污染可能再次出现，请升级旧设备。`
    : '';

  console.warn(
    `[同步自愈][${source}] 已清理 ${result.removedCount} 条无效记录，保留 ${Object.keys(result.visitedLinks).length} 条有效记录。样例: ${sampleText}.${pollutionHint}`
  );
}

// 需要“必须拿到可用 visitedLinks”的入口统一走这里：
// 成功则返回清洗结果，失败则抛出带上下文的错误。
function requireVisitedLinksData(value: unknown, source: string): VisitedLinksRepairResult {
  const result = tryRepairVisitedLinksData(value);
  if (!result) {
    throw new Error(`${source} 数据格式无效: ${describeVisitedLinksRepairFailure(value)}`);
  }

  logVisitedLinksRepair(source, result);
  return result;
}

function supportsCompressionEncoding(encoding: SyncStorageEncoding): boolean {
  const cachedSupport = compressionSupportCache.get(encoding);
  if (cachedSupport !== undefined) {
    return cachedSupport;
  }

  // 同步压缩直接依赖浏览器原生 Compression Streams，避免额外引入压缩运行时。
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

function compareTextAscending(left: string, right: string): number {
  if (left < right) {
    return -1;
  }

  if (left > right) {
    return 1;
  }

  return 0;
}

function getCommonPrefixLength(left: string, right: string): number {
  const maxLength = Math.min(left.length, right.length);
  let index = 0;

  while (index < maxLength && left.charCodeAt(index) === right.charCodeAt(index)) {
    index++;
  }

  return index;
}

// 把完整 URL 拆成“分组键 + 可差分文本”；解析失败时退回 raw 分组，避免单条脏数据阻断整批同步。
function getV3GroupDescriptor(url: string): { groupKey: string; text: string } {
  try {
    const parsedUrl = new URL(url);
    const text = `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
    const groupKey = parsedUrl.protocol === 'https:'
      ? parsedUrl.host
      : `${parsedUrl.protocol}//${parsedUrl.host}`;

    return { groupKey, text };
  }
  catch {
    return {
      groupKey: V3_RAW_GROUP_KEY,
      text: url
    };
  }
}

// 把 v3 分组键还原成完整 origin，供解码阶段重建平铺 URL。
function getOriginFromV3GroupKey(groupKey: string): string {
  return groupKey.includes('://') ? groupKey : `https://${groupKey}`;
}

// 类型守卫：确认记录确实符合 [prefixLength, suffix, timestamp] 形状。
function isV3PathRecordValue(value: unknown): value is V3PathRecord {
  return Array.isArray(value)
    && value.length === 3
    && typeof value[0] === 'number'
    && Number.isInteger(value[0])
    && value[0] >= 0
    && typeof value[1] === 'string'
    && typeof value[2] === 'number'
    && Number.isFinite(value[2]);
}

// 把平铺 visitedLinks 编码成 v3 payload：先按 host 分组，再对组内路径做排序和前缀差分。
function encodeV3GroupedPayload(visitedLinks: VisitedLinksData): V3GroupedPayload {
  const groupedEntries = new Map<string, Array<{ text: string; timestamp: number }>>();

  for (const [url, timestamp] of Object.entries(visitedLinks)) {
    const { groupKey, text } = getV3GroupDescriptor(url);
    const groupEntries = groupedEntries.get(groupKey);

    if (groupEntries) {
      groupEntries.push({ text, timestamp });
      continue;
    }

    groupedEntries.set(groupKey, [{ text, timestamp }]);
  }

  const payload: V3GroupedPayload = {};

  for (const groupKey of Array.from(groupedEntries.keys()).sort(compareTextAscending)) {
    const sortedEntries = groupedEntries.get(groupKey)!;
    sortedEntries.sort((left, right) => compareTextAscending(left.text, right.text));

    let previousText = '';
    payload[groupKey] = sortedEntries.map(({ text, timestamp }) => {
      const prefixLength = getCommonPrefixLength(previousText, text);
      const record: V3PathRecord = [prefixLength, text.slice(prefixLength), timestamp];
      previousText = text;
      return record;
    });
  }

  return payload;
}

// 把 v3 payload 顺序重建回平铺 visitedLinks，保证现有运行时和合并逻辑无需感知云端格式变化。
function decodeV3GroupedPayload(payload: unknown): VisitedLinksData {
  if (!isPlainObject(payload)) {
    throw new Error(`同步存储 v3 数据格式无效: ${describeV3GroupedPayloadCandidate(payload)}`);
  }

  const visitedLinks: VisitedLinksData = {};

  for (const [groupKey, records] of Object.entries(payload)) {
    if (!Array.isArray(records)) {
      throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的类型是 ${getValueTypeLabel(records)}，期望是数组`);
    }

    let previousText = '';
    for (let index = 0; index < records.length; index++) {
      const record = records[index];

      if (!isV3PathRecordValue(record)) {
        throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的第 ${index + 1} 条记录无效: ${describeV3PathRecord(record)}`);
      }

      const [prefixLength, suffix, timestamp] = record;
      if (prefixLength > previousText.length) {
        throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的第 ${index + 1} 条记录前缀长度越界`);
      }

      const text = `${previousText.slice(0, prefixLength)}${suffix}`;
      previousText = text;

      if (groupKey === V3_RAW_GROUP_KEY) {
        visitedLinks[text] = timestamp;
        continue;
      }

      if (!text.startsWith('/')) {
        throw new Error(`同步存储 v3 数据格式无效: 分组 ${groupKey} 的第 ${index + 1} 条记录恢复出的路径不是以 / 开头`);
      }

      visitedLinks[`${getOriginFromV3GroupKey(groupKey)}${text}`] = timestamp;
    }
  }

  return visitedLinks;
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

// 上传前统一把输入收敛成干净的 visitedLinks，再编码成当前 v3 压缩包格式。
async function serializeVisitedLinksForGist(data: SyncData | VisitedLinksData): Promise<string> {
  const visitedLinks = requireVisitedLinksData(data, '上传前数据').visitedLinks;
  const v3Payload = encodeV3GroupedPayload(visitedLinks);
  const jsonText = JSON.stringify(v3Payload);
  const compressedBytes = await compressText(jsonText, SYNC_STORAGE_ENCODING);

  // v3 只重构云端 payload，页面内运行时仍继续使用平铺 visitedLinks。
  const envelope: CompressedSyncEnvelopeV3 = {
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

// 统一抽出同步包的日志元信息，避免每个失败分支重复手写同一份调试对象。
function getCompressedEnvelopeMeta(envelope: CompressedSyncEnvelope) {
  return {
    syncVersion: envelope.syncVersion,
    encoding: envelope.encoding,
    itemCount: envelope.itemCount,
    updatedAt: envelope.updatedAt,
    originalBytes: envelope.originalBytes,
    compressedBytes: envelope.compressedBytes
  };
}

// v2 payload 解压后仍应当是平铺 visitedLinks；这里只负责 v2 自身的数据层兼容和自愈。
function extractVisitedLinksFromV2Payload(parsed: unknown): VisitedLinksData {
  const visitedLinks = extractVisitedLinksFromUnknown(parsed);
  if (visitedLinks) {
    return visitedLinks;
  }

  const repairedVisitedLinks = tryRepairVisitedLinksData(parsed);
  if (repairedVisitedLinks) {
    logVisitedLinksRepair('云端 v2 解压负载', repairedVisitedLinks);
    return repairedVisitedLinks.visitedLinks;
  }

  throw new Error(`同步存储 v2 数据格式无效: ${describeCompressedPayloadShape(parsed, 'v2')}`);
}

// v3 payload 先走结构化解码，再恢复成平铺 visitedLinks。
function extractVisitedLinksFromV3Payload(parsed: unknown): VisitedLinksData {
  return decodeV3GroupedPayload(parsed);
}

// 按压缩包装格式完成 base64 解码、解压、JSON 解析，并恢复出平铺 visitedLinks。
async function deserializeCompressedSyncEnvelope(envelope: CompressedSyncEnvelope): Promise<VisitedLinksData> {
  const envelopeMeta = getCompressedEnvelopeMeta(envelope);

  let compressedBytes: Uint8Array;
  try {
    compressedBytes = base64ToBytes(envelope.payload);
  }
  catch (error) {
    console.warn(`同步存储 ${envelope.syncVersion} base64 解码失败:`, envelopeMeta, error);
    throw new Error(`同步存储 ${envelope.syncVersion} payload 不是合法 Base64`);
  }

  let decompressedText = '';
  try {
    decompressedText = await decompressText(compressedBytes, envelope.encoding);
  }
  catch (error) {
    console.warn(`同步存储 ${envelope.syncVersion} 解压失败:`, envelopeMeta, error);
    throw new Error(`同步存储 ${envelope.syncVersion} ${getEncodingDisplayName(envelope.encoding)} 解压失败`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(decompressedText) as unknown;
  }
  catch (error) {
    console.warn(`同步存储 ${envelope.syncVersion} JSON 解析失败:`, envelopeMeta, error);
    throw new Error(`同步存储 ${envelope.syncVersion} 解压后的内容不是合法 JSON`);
  }

  try {
    if (envelope.syncVersion === 'v2') {
      return extractVisitedLinksFromV2Payload(parsed);
    }

    return extractVisitedLinksFromV3Payload(parsed);
  }
  catch (error) {
    const reason = error instanceof Error
      ? error.message
      : `同步存储 ${envelope.syncVersion} 数据格式无效: ${describeCompressedPayloadShape(parsed, envelope.syncVersion)}`;
    console.warn(`同步存储 ${envelope.syncVersion} 数据结构无效:`, envelopeMeta, reason);
    throw error instanceof Error ? error : new Error(reason);
  }
}

// 读取 Gist 文本内容时同时兼容 v2/v3 压缩包和旧版明文 JSON，并把恢复逻辑统一收口在这里。
async function deserializeGistContent(contentText: string): Promise<SyncData | VisitedLinksData> {
  let parsed: unknown;

  try {
    parsed = JSON.parse(contentText);
  }
  catch (error) {
    console.warn('解析 Gist 内容失败:', error);
    throw new Error('同步存储内容不是合法 JSON');
  }

  if (isCompressedSyncEnvelope(parsed)) {
    return await deserializeCompressedSyncEnvelope(parsed);
  }

  if (isPlainObject(parsed) && isSyncStorageVersion(parsed.syncVersion)) {
    const reason = describeCompressedEnvelopeShape(parsed, parsed.syncVersion);
    console.warn(`同步存储 ${parsed.syncVersion} 外层包结构无效:`, reason);
    throw new Error(`同步存储 ${parsed.syncVersion} 外层包格式无效: ${reason}`);
  }

  const repairedLegacyVisitedLinks = tryRepairVisitedLinksData(parsed);
  if (repairedLegacyVisitedLinks) {
    logVisitedLinksRepair('云端旧版明文数据', repairedLegacyVisitedLinks);
    return repairedLegacyVisitedLinks.visitedLinks;
  }

  throw new Error(`同步存储旧版数据格式无效: ${describeVisitedLinksRepairFailure(parsed)}`);
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
    // 上传内容统一写成当前压缩包格式，旧明文格式只负责读取兼容。
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
    const localLinksSnapshotResult = requireVisitedLinksData(
      GM_getValue('visitedLinks', {}) as unknown,
      '本地启动快照'
    );
    const localLinksSnapshot = localLinksSnapshotResult.visitedLinks;
    if (localLinksSnapshotResult.removedCount > 0) {
      GM_setValue('visitedLinks', localLinksSnapshot);
    }

    // 2. 从云端获取数据（这个过程可能较慢）
    const cloudData = await downloadFromCloud();
    const cloudLinks = extractVisitedLinks(cloudData);

    // 3. 合并数据（以最新时间戳为准）
    let mergedLinks = mergeVisitedLinks(localLinksSnapshot, cloudLinks);

    // 4. 重新获取本地数据，合并同步期间用户可能新增的链接
    // 这是为了防止在网络请求期间用户点击的链接被覆盖丢失
    const currentLocalLinksResult = requireVisitedLinksData(
      GM_getValue('visitedLinks', {}) as unknown,
      '本地同步期快照'
    );
    const currentLocalLinks = currentLocalLinksResult.visitedLinks;
    if (currentLocalLinksResult.removedCount > 0) {
      GM_setValue('visitedLinks', currentLocalLinks);
    }
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
