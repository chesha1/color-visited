// 假的 GitHub Gist 服务端。fakeGitHub() 把全局的 fetch 换成它；GM_xmlhttpRequest 也经 fetch 转到这里（见 gm.ts），
// 所以不管同步代码用哪种方式发请求，测试看到的都是同一份请求记录。只认同步用到的三个请求：读 Gist、改 Gist、读 raw_url

import { vi } from 'vitest'

export const TOKEN = 'test-token'
export const GIST_ID = 'abc123'
export const FILE = 'visited-links.json'

const GIST_URL = `https://api.github.com/gists/${GIST_ID}`
const RAW_URL_PREFIX = `https://gist.githubusercontent.com/tester/${GIST_ID}/raw/`

export type Endpoint = 'GET gist' | 'PATCH gist' | 'GET raw'

export interface FakeGitHub {
  /** Gist 里每个文件的完整内容 */
  files: Record<string, string>
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
  const github: FakeGitHub = { files: { [FILE]: '{}' }, requests: [], truncateAt: 1024 * 1024, failures: {} }
  vi.stubGlobal('fetch', (url: string, init: RequestInit = {}) => respond(github, url, init))
  return github
}

function toEndpoint(method: string, url: string): Endpoint | undefined {
  if (url === GIST_URL && method === 'GET') return 'GET gist'
  if (url === GIST_URL && method === 'PATCH') return 'PATCH gist'
  if (url.startsWith(RAW_URL_PREFIX) && method === 'GET') return 'GET raw'
  return undefined
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
}

async function respond(github: FakeGitHub, url: string, init: RequestInit): Promise<Response> {
  const method = init.method ?? 'GET'
  const endpoint = toEndpoint(method, url)
  github.requests.push(endpoint ?? `${method} ${url}`)
  if (!endpoint) return json({ message: 'Not Found' }, 404)

  github.onRequest?.(endpoint)

  const failure = github.failures[endpoint]
  if (failure === 'network') throw new TypeError('fetch failed')
  if (failure) return json({ message: `HTTP ${failure}` }, failure)

  // 私密 Gist 的每个请求都要带令牌，raw_url 也一样
  if (!new Headers(init.headers).get('Authorization')?.endsWith(TOKEN)) return json({ message: 'Bad credentials' }, 401)

  if (endpoint === 'GET raw') {
    return new Response(github.rawContent ?? github.files[url.slice(RAW_URL_PREFIX.length)])
  }

  if (endpoint === 'PATCH gist') {
    const { files } = JSON.parse(init.body as string) as { files: Record<string, { content: string }> }
    for (const [name, { content }] of Object.entries(files)) github.files[name] = content
  }

  return json({
    id: GIST_ID,
    owner: { login: 'tester' },
    files: Object.fromEntries(Object.entries(github.files).map(([name, content]) => [name, {
      filename: name,
      raw_url: RAW_URL_PREFIX + name,
      size: content.length,
      truncated: content.length > github.truncateAt,
      content: content.slice(0, github.truncateAt),
    }])),
  })
}
