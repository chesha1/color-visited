import { getSettings } from '@/core/settings'

// 调试开关打开时才打印。警告和错误直接用 console.warn、console.error。
// 参数在调用之前就算好了，算起来费事的内容，调用方先自己看一下调试开关
export const log = {
  debug(...args: unknown[]): void {
    if (getSettings().general.debug) console.log('[color-visited]', ...args)
  },
}
