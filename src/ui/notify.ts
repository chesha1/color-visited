import { h } from 'vue'
import { ElButton, ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'

export type NotifyType = 'success' | 'warning' | 'info' | 'error'

// 通知文字后面的操作按钮，比如批量标记后的"撤销"
export interface NotifyAction {
  text: string
  onClick: () => void
}

// 显示通知。带操作按钮时多显示几秒，留出点按钮的时间（鼠标停在通知上时不会消失），点了按钮就关掉通知
export function notify(message: string, type: NotifyType, action?: NotifyAction): void {
  // 挂进设置界面的 Shadow DOM 里，还没有时退回 document.body
  const container = document.querySelector('#color-visited-root')
  const appendTo = (container?.shadowRoot ?? document.body) as HTMLElement

  const notification = ElMessage({
    // message 传函数时，返回的内容渲染在通知的文字区域里
    // 文字和按钮作为 flex 子项一起垂直居中。按钮放在文字行里的话，它按西文的 x-height 对齐，中文会比按钮高出 1–2px
    message: action
      ? () => h('span', { style: { display: 'flex', alignItems: 'center', gap: '12px' } }, [
          message,
          h(ElButton, {
            link: true,
            // 和通知文字同色，靠字重区分。ElButton 没有 error，对应的是 danger
            type: type === 'error' ? 'danger' : type,
            // 只响应第一次点击：通知淡出的过程中按钮还点得到
            onClickOnce: () => {
              notification.close()
              action.onClick()
            },
          }, () => action.text),
        ])
      : message,
    type,
    duration: action ? 5000 : 2000,
    showClose: true,
    grouping: true,
    offset: 20,
    appendTo,
  })
}
