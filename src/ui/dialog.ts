import { createApp } from 'vue'
import { provideGlobalConfig } from 'element-plus'
import SettingsDialog from '@/ui/SettingsDialog.vue'
import { addPanelStyle, createMountPoint, ELEMENT_PLUS_CONFIG } from '@/ui/root'

let isOpen = false

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
  provideGlobalConfig(ELEMENT_PLUS_CONFIG, app)
  app.mount(container)
}
