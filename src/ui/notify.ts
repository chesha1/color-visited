export type NotifyType = 'success' | 'warning' | 'info' | 'error'

// 通知文字后面的操作按钮，比如批量标记后的"撤销"
export interface NotifyAction {
  text: string
  onClick: () => void
  onClose?: () => void
}

// 模块只初始化一次，之后每次 import() 拿到的都是同一个。加载或显示出错只报告，不影响染色
export function notify(message: string, type: NotifyType, action?: NotifyAction): void {
  import('@/ui/message')
    .then(({ showMessage }) => showMessage(message, type, action))
    .catch((error) => console.error('[color-visited] 显示通知失败', error))
}
