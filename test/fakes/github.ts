// 假的 GitHub。fakeGitHub() 让 GM_xmlhttpRequest 的请求都交给它（见 gm.ts），
// 只认同步用到的四个请求：读令牌所属的账号、读 Gist、改 Gist、读 raw_url

import { vi } from 'vitest'
import { serveRequests, type FakeRequest, type FakeResponse } from './gm'

export const TOKEN = 'test-token'
export const GIST_ID = 'abc123'
export const FILE = 'visited-links.json'
/** 令牌所属账号的登录名 */
export const LOGIN = 'tester'

const USER_URL = 'https://api.github.com/user'
const GIST_URL = `https://api.github.com/gists/${GIST_ID}`
const RAW_URL_PREFIX = `https://gist.githubusercontent.com/${LOGIN}/${GIST_ID}/raw/`

export type Endpoint = 'GET user' | 'GET gist' | 'PATCH gist' | 'GET raw'

export interface FakeGitHub {
  /** Gist 里每个文件的完整内容 */
  files: Record<string, string>
  /** Gist 所有者的登录名 */
  owner: string
  /** 令牌的权限，GET /user 的响应头 X-OAuth-Scopes。只有 classic token 有这个头，设成 undefined 就是 fine-grained token */
  scopes?: string
  /** 收到的请求，按顺序记成 'GET gist' 这样；不认识的请求记成「方法 网址」，返回 404 */
  requests: string[]
  /** 文件超过这么多个字符时，读 Gist 只返回前面这部分，并标记为截断。GitHub 是 1 MB */
  truncateAt: number
  /** 让某个请求返回这个状态码；'network' 表示网络出错 */
  failures: Partial<Record<Endpoint, number | 'network'>>
  /** raw_url 返回的内容，不设就是文件的完整内容。用来模拟代理、限流换成的 HTML 页面 */
  rawContent?: string
  /** 收到请求、还没响应时调用，用来模拟同步过程中其他地方的写入 */
  onRequest?: (endpoint: Endpoint) => void
}

export function fakeGitHub(): FakeGitHub {
  const github: FakeGitHub = { files: { [FILE]: '{}' }, owner: LOGIN, scopes: 'gist', requests: [], truncateAt: 1024 * 1024, failures: {} }
  serveRequests((details) => respond(github, details))
  // 页面的 fetch 受页面 CSP 的限制，同步不能用它。换成和被 CSP 拦下时一样直接失败：哪里还在用 fetch，同步的测试就会失败
  vi.stubGlobal('fetch', () => Promise.reject(new TypeError('Failed to fetch')))
  return github
}

function toEndpoint(method: string, url: string): Endpoint | undefined {
  if (url === USER_URL && method === 'GET') return 'GET user'
  if (url === GIST_URL && method === 'GET') return 'GET gist'
  if (url === GIST_URL && method === 'PATCH') return 'PATCH gist'
  if (url.startsWith(RAW_URL_PREFIX) && method === 'GET') return 'GET raw'
  return undefined
}

function json(body: unknown, status = 200, headers: Record<string, string> = {}): FakeResponse {
  return { status, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json', ...headers } }
}

async function respond(github: FakeGitHub, { method = 'GET', url, headers, data }: FakeRequest): Promise<FakeResponse> {
  const endpoint = toEndpoint(method, url)
  github.requests.push(endpoint ?? `${method} ${url}`)
  if (!endpoint) return json({ message: 'Not Found' }, 404)

  github.onRequest?.(endpoint)

  const failure = github.failures[endpoint]
  if (failure === 'network') throw new Error('network error')
  if (failure) return json({ message: `HTTP ${failure}` }, failure)

  // 私密 Gist 的每个请求都要带令牌，raw_url 也一样
  if (!headers?.Authorization?.endsWith(TOKEN)) return json({ message: 'Bad credentials' }, 401)

  if (endpoint === 'GET user') {
    return json({ login: LOGIN }, 200, github.scopes === undefined ? {} : { 'X-OAuth-Scopes': github.scopes })
  }

  if (endpoint === 'GET raw') {
    return { status: 200, body: github.rawContent ?? github.files[url.slice(RAW_URL_PREFIX.length)] }
  }

  if (endpoint === 'PATCH gist') {
    const { files } = JSON.parse(data as string) as { files: Record<string, { content: string }> }
    for (const [name, { content }] of Object.entries(files)) github.files[name] = content
  }

  return json({
    id: GIST_ID,
    owner: { login: github.owner },
    files: Object.fromEntries(Object.entries(github.files).map(([name, content]) => [name, {
      filename: name,
      raw_url: RAW_URL_PREFIX + name,
      size: content.length,
      truncated: content.length > github.truncateAt,
      content: content.slice(0, github.truncateAt),
    }])),
  })
}
