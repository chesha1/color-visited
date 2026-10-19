// 设置对话框：每次打开都新建一个 Vue 应用，关掉就卸载，下次打开时按存储里的当前设置重新开始。
// 第一次打开设置时才执行这个模块（见 main.ts）
import { createApp } from 'vue'
import SettingsDialog from '@/ui/SettingsDialog.vue'
import { addPanelStyle, createMountPoint } from '@/ui/root'

let isOpen = false

// 对话框已经开着时什么都不做
export function openSettings(): void {
  if (isOpen) return
  isOpen = true
  const container = createMountPoint()
  // 取色面板的样式写在宿主页面上，只在对话框开着时留着
  const panelStyle = addPanelStyle()
  // 关闭动画结束后才卸载，连同挂载点和取色面板的样式一起删掉
  const app = createApp(SettingsDialog, {
    onClosed: () => {
      app.unmount()
      container.remove()
      panelStyle.remove()
      isOpen = false
    },
  })
  app.mount(container)
}
