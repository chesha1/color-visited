// 内存版的 GM API，在测试文件里换掉 vite-plugin-monkey 的 client：
//   vi.mock('vite-plugin-monkey/dist/client', () => import('./fakes/gm'));
// store 是所有标签页共享的那份 GM 存储，测试可以直接读写它来准备数据、检查结果。每个测试开始前调用 resetGM()

import type {
  GmAddValueChangeListenerType,
  GmDeleteValueType,
  GmDeleteValuesType,
  GmGetValueType,
  GmListValuesType,
  GmRegisterMenuCommandType,
  GmRemoveValueChangeListenerType,
  GmResponseEvent,
  GmSetValueType,
  GmSetValuesType,
  GmValueListenerId,
  GmXmlhttpRequestOption,
  GmXmlhttpRequestType,
} from 'vite-plugin-monkey/dist/client'

export const store = new Map<string, unknown>()

type ValueChangeCallback = (key: string, oldValue: unknown, newValue: unknown, remote: boolean) => void
const listeners = new Map<GmValueListenerId, { key: string, callback: ValueChangeCallback }>()
let nextListenerId = 1

// GM_getValue 返回的是副本，改了返回的对象不影响存储
function copy<T>(value: T): T {
  return typeof value === 'object' && value !== null ? structuredClone(value) : value
}

// value 为 undefined 表示删除。和真实的管理器一样，本标签页自己的写入也会回调监听，这时 remote 为 false
function write(key: string, value: unknown, remote: boolean): void {
  const oldValue = store.get(key)
  if (value === undefined) store.delete(key)
  else store.set(key, copy(value))

  for (const listener of listeners.values()) {
    if (listener.key === key) listener.callback(key, copy(oldValue), copy(value), remote)
  }
}

export const GM_getValue: GmGetValueType = <T>(key: string, defaultValue?: T): T =>
  (store.has(key) ? copy(store.get(key)) : defaultValue) as T

export const GM_setValue: GmSetValueType = (key, value) => write(key, value, false)

export const GM_deleteValue: GmDeleteValueType = (key) => write(key, undefined, false)

export const GM_listValues: GmListValuesType = () => [...store.keys()]

const setValues: GmSetValuesType = (values) => {
  for (const key in values) write(key, values[key], false)
}

const deleteValues: GmDeleteValuesType = (keys) => {
  for (const key of keys) write(key, undefined, false)
}

// 批量接口要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，更早的版本上是 undefined，见 removeBatchApi
export let GM_setValues: GmSetValuesType | undefined = setValues
export let GM_deleteValues: GmDeleteValuesType | undefined = deleteValues

export const GM_addValueChangeListener: GmAddValueChangeListenerType = (key, callback) => {
  const id = nextListenerId++
  listeners.set(id, { key, callback: callback as ValueChangeCallback })
  return id
}

export const GM_removeValueChangeListener: GmRemoveValueChangeListenerType = (id) => {
  listeners.delete(id)
}

// 注册了的菜单项：标题 → 点它时的回调。真实的管理器回调时会传入点菜单的事件，脚本用不到，这里不传
export const menuCommands = new Map<string, () => void>()

export const GM_registerMenuCommand: GmRegisterMenuCommandType = (caption, onClick) => {
  menuCommands.set(caption, onClick as () => void)
  return caption
}

export interface FakeResponse {
  status: number
  body: string
  headers?: Record<string, string>
}

export type FakeRequest = Pick<GmXmlhttpRequestOption<'text'>, 'method' | 'url' | 'headers' | 'data'>

// 收到 GM_xmlhttpRequest 的请求，返回响应；返回的 Promise reject 表示网络出错
export type FakeServer = (request: FakeRequest) => Promise<FakeResponse>

const noServer: FakeServer = () => Promise.reject(new Error('没有服务端'))
let server = noServer

// 之后 GM_xmlhttpRequest 的请求都交给 handler，比如假的 GitHub（见 github.ts）
export function serveRequests(handler: FakeServer): void {
  server = handler
}

// 回调的事件只填了同步用到的几个字段。和真实的管理器一样：响应头是一整个字符串，一行一个；回调里的 this 是事件本身
export const GM_xmlhttpRequest: GmXmlhttpRequestType = (details) => {
  server(details).then(
    ({ status, body, headers = {} }) => {
      const responseHeaders = Object.entries(headers).map(([name, value]) => `${name}: ${value}\r\n`).join('')
      const event = { status, responseText: body, responseHeaders, finalUrl: details.url } as GmResponseEvent<never, never>
      details.onload?.call(event, event)
    },
    () => {
      const event = { error: 'network error' } as never
      details.onerror?.call(event, event)
    },
  )
  return { abort() {} }
}

// 模拟其他标签页的写入：直接改共享的存储，本标签页的监听收到 remote 为 true 的回调
export function setValueFromOtherTab(key: string, value: unknown): void {
  write(key, value, true)
}

// 模拟 Tampermonkey 5.3、Violentmonkey 2.19.1 以前的版本：没有批量读写的接口
export function removeBatchApi(): void {
  GM_setValues = undefined
  GM_deleteValues = undefined
}

export function resetGM(): void {
  store.clear()
  listeners.clear()
  menuCommands.clear()
  GM_setValues = setValues
  GM_deleteValues = deleteValues
  server = noServer
}
