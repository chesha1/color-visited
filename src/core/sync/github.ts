// 唯一发网络请求的地方。请求都交给管理器的 GM_xmlhttpRequest 去发：页面的 fetch 受页面 CSP 的限制，
// 有的网站（比如 Hacker News）上连不了 api.github.com；页面改写一下 fetch，也就拿到了令牌。
// 请求的域名都要写进 vite.config.ts 的 connect

import { GM_xmlhttpRequest, type GmResponseEvent } from 'vite-plugin-monkey/dist/client'

export interface Gist {
  /** 所有者的登录名，匿名 Gist 没有 */
  owner?: string
  /** 第一个文件的文件名。同步只读写这一个文件 */
  fileName: string
  /** 第一个文件的完整内容 */
  content: string
  /** 文件超过 1 MB，API 只返回了前面一部分，content 是另从 raw_url 取的 */
  truncated: boolean
}

// API 返回的 Gist 里用得到的字段
interface GistResponse {
  owner?: { login: string }
  files: Record<string, { content: string, truncated: boolean, raw_url: string }>
}

const API = 'https://api.github.com'

// 常见错误状态码的原因
const STATUS_HINTS: Partial<Record<number, string>> = {
  401: '令牌无效或已过期',
  403: '令牌权限不足，或触发了 GitHub API 限流',
  404: 'Gist 不存在、ID 填写有误，或令牌无权访问',
}

// 发一个带令牌的请求，不是 2xx 就抛错。action 是错误信息的开头，比如「获取 Gist 失败: 404（Gist 不存在…）」
function request(action: string, token: string, method: string, url: string, body?: object): Promise<GmResponseEvent<'text'>> {
  return new Promise((resolve, reject) => {
    const fail = (reason: string) => reject(new Error(`${action}: ${reason}`))
    GM_xmlhttpRequest({
      method,
      url,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        ...(body && { 'Content-Type': 'application/json' }),
      },
      data: body && JSON.stringify(body),
      onload: (response) => {
        const hint = STATUS_HINTS[response.status]
        if (response.status >= 200 && response.status < 300) resolve(response)
        else fail(hint ? `${response.status}（${hint}）` : String(response.status))
      },
      onerror: () => fail('网络错误'),
    })
  })
}

// 令牌所属的账号和权限。classic token 在响应头 X-OAuth-Scopes 里列出权限；fine-grained token 没有这个头，scopes 是 undefined
export async function readUser(token: string): Promise<{ login: string, scopes?: string[] }> {
  const response = await request('令牌验证失败', token, 'GET', `${API}/user`)
  // GM_xmlhttpRequest 给的响应头是一整个字符串，一行一个，名字不分大小写
  const scopes = /^x-oauth-scopes:(.*)$/im.exec(response.responseHeaders)?.[1]
  const { login } = JSON.parse(response.responseText) as { login: string }
  return { login, scopes: scopes?.split(',').map((scope) => scope.trim()) }
}

export async function readGist(token: string, gistId: string): Promise<Gist> {
  const response = await request('获取 Gist 失败', token, 'GET', `${API}/gists/${gistId}`)
  const gist = JSON.parse(response.responseText) as GistResponse
  const first = Object.entries(gist.files)[0]
  if (!first) throw new Error('获取 Gist 失败: Gist 里没有文件')

  const [fileName, file] = first
  const content = file.truncated
    ? (await request('获取 Gist 原始内容失败', token, 'GET', file.raw_url)).responseText
    : file.content
  return { owner: gist.owner?.login, fileName, content, truncated: file.truncated }
}

// PATCH 按文件名指定改哪个文件，传读取时拿到的文件名，不另建文件
export async function writeGist(token: string, gistId: string, fileName: string, content: string): Promise<void> {
  await request('更新 Gist 失败', token, 'PATCH', `${API}/gists/${gistId}`, { files: { [fileName]: { content } } })
}
