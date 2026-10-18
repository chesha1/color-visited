import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { encode, envelope } from './helpers'
import { normalizeGistId, testConnection } from '@/core/sync'
import { fakeGitHub, FILE, GIST_ID, TOKEN, type FakeGitHub } from '../fakes/github'
import { resetGM } from '../fakes/gm'
import { DAY, NOW } from '../time'

vi.mock('vite-plugin-monkey/dist/client', () => import('../fakes/gm'))

describe('normalizeGistId：填纯 ID 或者 Gist 的网址都行', () => {
  it.each([
    ['纯 ID', 'abc123'],
    ['前后有空白', ' abc123\n'],
    ['网址', 'https://gist.github.com/tester/abc123'],
    ['网址末尾带 /', 'https://gist.github.com/tester/abc123/'],
    ['网址带查询参数和锚点，里面也有 /', 'https://gist.github.com/tester/abc123?a=b/c#file-a/b'],
    ['clone 用的地址，带 .git', 'https://gist.github.com/abc123.git'],
  ])('%s：%s', (_, input) => {
    expect(normalizeGistId(input)).toBe('abc123')
  })

  it('没填还是空的', () => {
    expect(normalizeGistId('')).toBe('')
  })
})

describe('testConnection：依次检查令牌、Gist 的所有者和内容，结果交给设置页显示', () => {
  let github: FakeGitHub

  beforeEach(async () => {
    resetGM()
    github = fakeGitHub()
    github.files[FILE] = await encode({ 'https://www.v2ex.com/t/1': NOW - DAY })
    // 失败时打一行日志，测试里不看
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('正常：显示云端有几条记录', async () => {
    expect(await testConnection(TOKEN, GIST_ID)).toEqual({ level: 'success', message: expect.stringContaining('1 条') })
    expect(github.requests).toEqual(['GET user', 'GET gist'])
  })

  it.each([
    ['classic token 的权限里有 gist，不在第一个', 'repo, gist'],
    ['fine-grained token 的响应头里没有权限，不检查', undefined],
  ])('%s：正常', async (_, scopes) => {
    github.scopes = scopes
    expect((await testConnection(TOKEN, GIST_ID)).level).toBe('success')
  })

  it('Gist ID 填的是网址：正常', async () => {
    expect((await testConnection(TOKEN, `https://gist.github.com/tester/${GIST_ID}`)).level).toBe('success')
  })

  it('令牌无效：报错', async () => {
    expect(await testConnection('wrong-token', GIST_ID)).toEqual({ level: 'error', message: expect.stringContaining('401') })
  })

  it('令牌没有 gist 权限：报错', async () => {
    github.scopes = 'repo, user'
    expect(await testConnection(TOKEN, GIST_ID)).toEqual({ level: 'error', message: expect.stringContaining('gist 权限') })
  })

  it('没填 Gist ID：提醒去填，不读 Gist', async () => {
    expect(await testConnection(TOKEN, '')).toEqual({ level: 'warning', message: expect.stringContaining('Gist ID') })
    expect(github.requests).toEqual(['GET user'])
  })

  it('Gist 不存在：报错', async () => {
    github.failures['GET gist'] = 404
    expect(await testConnection(TOKEN, GIST_ID)).toEqual({ level: 'error', message: expect.stringContaining('404') })
  })

  it('不是这个令牌的账号的 Gist：报错，写不进去', async () => {
    github.owner = 'someone-else'
    expect(await testConnection(TOKEN, GIST_ID)).toEqual({ level: 'error', message: expect.stringContaining('someone-else') })
  })

  it('内容不是同步数据：提醒首次同步时会被替换，现在不写', async () => {
    github.files[FILE] = 'hello'
    expect(await testConnection(TOKEN, GIST_ID)).toEqual({ level: 'warning', message: expect.stringContaining('首次同步') })
    expect(github.requests).not.toContain('PATCH gist')
  })

  it('云端的同步数据读不了：报错', async () => {
    github.files[FILE] = envelope({ syncVersion: 'v4' })
    expect(await testConnection(TOKEN, GIST_ID)).toEqual({ level: 'error', message: expect.stringContaining('更新版本') })
  })
})
