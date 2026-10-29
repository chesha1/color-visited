import { createApp, h } from 'vue'
import { ElButton, ElMessage, provideGlobalConfig } from 'element-plus'
// 这两个组件是在代码里调用的，自动引入组件样式的 resolver 看不到，要自己引入
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/button/style/css'
import type { NotifyAction, NotifyType } from '@/ui/notify'
import { createMountPoint, ELEMENT_PLUS_CONFIG } from '@/ui/root'

const container = createMountPoint()

// 通知不属于哪个 Vue 应用，Element Plus 的配置只能经一个应用的 context 交给它（ElMessage 的第二个参数）。这个应用只用来带配置，不挂载
const configApp = createApp({})
provideGlobalConfig(ELEMENT_PLUS_CONFIG, configApp)

// 带操作按钮时多显示几秒，留出点按钮的时间（鼠标停在通知上时不会消失），点了按钮就关掉通知
export function showMessage(message: string, type: NotifyType, action?: NotifyAction): void {
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
    appendTo: container,
  }, configApp._context)
}
