// 同步的流程：读出云端的记录合并进本地，合并后和云端不一致再整份上传。
// 格式在 codec.ts，请求在 github.ts；日志只在这一层打

import { log } from '@/core/log'
import { getSettings, type SyncSettings } from '@/core/settings'
import { loadLinks, mergeLinks, setLastSyncTime, takeTurn, type VisitedLinks } from '@/core/storage'
import { decode, encode, type Decoded } from '@/core/sync/codec'
import { readGist, readUser, writeGist, type Gist } from '@/core/sync/github'
import { notify } from '@/ui/notify'

// 加载页面时自动同步的最短间隔，整个浏览器合起来算，设置页的"立即同步"不受限制。
// 每次同步都要下载、合并整份数据，有新记录时还要整份上传，不能每加载一个页面就来一次
export const AUTO_SYNC_INTERVAL = 1000 * 60 * 10

export interface ConnectionTestResult {
  /** 决定提示的样式 */
  level: 'success' | 'warning' | 'error'
  message: string
}

// 把用户填写的 Gist ID 或 Gist 网址统一成纯 ID；对纯 ID 输入没有影响，可以重复调用
export function normalizeGistId(input: string): string {
  // 先去掉查询参数和锚点，避免其中的 / 干扰路径段提取
  const path = input.trim().split(/[?#]/)[0]
  // 网址取最后一个非空路径段，兼容末尾带 / 的写法；纯 ID 只有一段
  const lastSegment = path.split('/').filter((segment) => segment !== '').pop() ?? ''
  return lastSegment.replace(/\.git$/, '')
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

// 文件超过 1 MB 时，完整内容来自 raw_url，认不出来多半是代理、限流换成了 HTML 页面，
// 而不是云端真的没有数据：不能当作空，否则紧接着就会用本地数据覆盖云端
async function decodeGist(gist: Gist): Promise<Decoded> {
  const cloud = await decode(gist.content)
  if (cloud.notSyncData && gist.truncated) {
    throw new Error(`Gist 文件超过 1 MB，从 raw_url 取到的完整内容认不出来（${cloud.notSyncData}），为避免误覆盖，云端数据保持不变`)
  }
  if (cloud.dropped > 0) {
    console.warn(`[color-visited] 云端数据里有 ${cloud.dropped} 条不是访问记录，已经丢掉。多半是其他设备上旧版本的脚本混进去的，请升级那边的脚本`)
  }
  return cloud
}

// 只保留最近一次访问不早于 cutoff 的记录，即还没过期的，和本地染色（isVisited）、过期清理（deleteExpiredLinks）的判断一致
function pickUnexpired(links: VisitedLinks, cutoff: number): VisitedLinks {
  const unexpired: VisitedLinks = {}
  for (const url in links) {
    if (links[url] >= cutoff) unexpired[url] = links[url]
  }
  return unexpired
}

function sameLinks(a: VisitedLinks, b: VisitedLinks): boolean {
  const urls = Object.keys(a)
  return urls.length === Object.keys(b).length && urls.every((url) => a[url] === b[url])
}

// 同步一次。initialized 表示这次把云端内容初始化成了同步格式，由调用方决定要不要提示。
// expirationTime 是本机设置的过期时间，过期的记录两个方向都不同步
export async function syncWithCloud(settings: SyncSettings, expirationTime: number): Promise<{ initialized: boolean }> {
  const token = settings.githubToken
  const gistId = normalizeGistId(settings.gistId)
  if (!token) throw new Error('GitHub 令牌未设置')
  if (!gistId) throw new Error('Gist ID 未设置，请先创建 Gist 并在设置中填入 ID')

  const gist = await readGist(token, gistId)
  const cloud = await decodeGist(gist)

  // 两边按同一个截止时间去掉过期的记录。否则云端的过期记录会被合并进本地，过期清理时被删掉，
  // 下次同步又被合并回来；上传时也会原样带回云端，永远删不干净
  const cutoff = Date.now() - expirationTime
  const cloudLinks = pickUnexpired(cloud.links, cutoff)

  // 合并以存储里的当前值为准，等云端响应时本标签页、其他标签页新记下的访问不会被覆盖
  mergeLinks(cloudLinks)
  const merged = pickUnexpired(loadLinks(), cutoff)

  // 合并后的数据已经包含云端的全部有效记录，和云端一致就没有要上传的；云端要初始化时，本地为空也写一份同步格式。
  // 云端只是有记录到期，不为此单独上传，它们会在下次上传时一并去掉
  const initialized = cloud.notSyncData !== undefined
  const upload = initialized || !sameLinks(cloudLinks, merged)
  if (upload) await writeGist(token, gistId, gist.fileName, await encode(merged))

  setLastSyncTime(Date.now())
  if (initialized) log.debug(`云端内容不是同步数据（${cloud.notSyncData}），已写成同步格式`)
  else log.debug(upload ? '同步完成，已上传' : '同步完成，和云端一致，没有上传')
  return { initialized }
}

// 按当前设置同步一次，结果用通知告诉用户，自动同步和设置页的"立即同步"共用，不会抛错。
// manual 表示是"立即同步"：用户在等结果，成功了也提示
export async function runSync({ manual }: { manual: boolean }): Promise<void> {
  try {
    const { sync, general } = getSettings()
    const { initialized } = await syncWithCloud(sync, general.expirationTime)
    if (initialized) notify('已初始化云端同步数据', 'success')
    else if (manual) notify('同步完成', 'success')
  } catch (error) {
    console.warn('[color-visited] 同步失败', error)
    notify(`同步失败: ${errorMessage(error)}`, 'error')
  }
}

// 加载页面时，启用了同步、而且轮到了，就在后台同步一次。失败了也占这一次：令牌过期这类失败不会自己好，
// 不能每加载一个页面就请求一次、弹一次错误。没启用时不占，开启之后下次加载页面就同步
export function autoSync(): void {
  if (getSettings().sync.enabled && takeTurn('autoSync', AUTO_SYNC_INTERVAL)) runSync({ manual: false })
}

// 测试连接：依次检查令牌、Gist 的所有者和内容，只读不写。结果交给设置页显示，不抛错
export async function testConnection(token: string, gistId: string): Promise<ConnectionTestResult> {
  try {
    const user = await readUser(token)
    if (user.scopes && !user.scopes.includes('gist')) {
      return { level: 'error', message: '令牌缺少 gist 权限，请重新创建令牌并勾选 "gist"' }
    }

    const id = normalizeGistId(gistId)
    if (!id) return { level: 'warning', message: '令牌有效，还需要填写 Gist ID' }

    const gist = await readGist(token, id)
    if (gist.owner && gist.owner.toLowerCase() !== user.login.toLowerCase()) {
      return { level: 'error', message: `这不是当前令牌账号的 Gist（所有者为 ${gist.owner}，当前账号为 ${user.login}），无法写入` }
    }

    // 内容按同步时的规则判断
    const cloud = await decodeGist(gist)
    if (cloud.notSyncData) {
      return { level: 'warning', message: `连接成功。Gist 当前内容不是同步数据（${cloud.notSyncData}），首次同步时会被替换为同步格式` }
    }
    return { level: 'success', message: `连接成功，云端已有 ${Object.keys(cloud.links).length} 条同步数据` }
  } catch (error) {
    console.warn('[color-visited] 测试连接失败', error)
    return { level: 'error', message: errorMessage(error) }
  }
}
