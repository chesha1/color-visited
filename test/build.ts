// 构建出来的脚本：另起一个进程构建，再在 jsdom 里执行，GM API 换成内存版（./fakes/gm）。
// 设置界面的 .vue 只有构建时才编译，对话框的行为也只能这样测

import { execFile } from 'node:child_process'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'
import * as gm from './fakes/gm'

const ROOT = path.resolve(import.meta.dirname, '..')

// 和发版时一样，另起一个进程用命令行构建。不能在测试的进程里构建：这里的 Node 带着 development 条件解析依赖，
// Vue 的模板编译器是开发版，产物会多出模板里的注释。Vitest 设的 NODE_ENV 等环境变量也不传过去
export async function buildScript(): Promise<string> {
  const outDir = await mkdtemp(path.join(tmpdir(), 'color-visited-'))
  const env = Object.fromEntries(Object.entries(process.env).filter(([name]) => !/^(NODE_ENV|TEST|VITEST.*)$/.test(name)))
  try {
    const vite = path.join(ROOT, 'node_modules/vite/bin/vite.js')
    await promisify(execFile)(process.execPath, [vite, 'build', '--outDir', outDir, '--logLevel', 'error'], { cwd: ROOT, env })
    return await readFile(path.join(outDir, 'color-visited.user.js'), 'utf8')
  } finally {
    await rm(outDir, { recursive: true, force: true })
  }
}

// 脚本建的 shadow root。closed 的从外面拿不到，所以执行产物之前换掉 attachShadow，记下它返回的
export const shadowRoots: ShadowRoot[] = []

// GM API 放在全局，间接调用 eval，在全局作用域里执行。jsdom 只有一个 JS 环境，真实的管理器会把脚本放进隔离环境（见 AGENTS.md「运行平台」）
export function runScript(script: string): void {
  const { attachShadow } = Element.prototype
  Element.prototype.attachShadow = function (init: ShadowRootInit) {
    const root = attachShadow.call(this, init)
    shadowRoots.push(root)
    return root
  }
  for (const [name, value] of Object.entries(gm)) {
    if (name.startsWith('GM_')) Object.assign(globalThis, { [name]: value })
  }
  ;(0, eval)(script)
}

// 页面上的 <style>，不含 shadow root 里的
export function pageStyles(): HTMLStyleElement[] {
  return [...document.querySelectorAll('style')]
}
