// 旧的设置对话框（App.vue、components/）还靠事件总线收发设置，这里把它接到内核上：
// 打开时按 getSettings() 发出 dialog:show-settings，settings:save 交给 saveSettings，sync:request 交给 runSync。
// 第一次打开设置时才执行这个模块（见 main.ts）
import { createApp } from 'vue'
import App from '@/ui/App.vue'
import { eventBus } from '@/core/eventBus'
import { getSettings, saveSettings } from '@/core/settings'
import { isMac } from '@/core/shortcut'
import { runSync } from '@/core/sync'
import { isSiteEnabled, SITES } from '@/shared/sites'
import { addPanelStyle, createMountPoint } from '@/ui/root'

let mounted = false

// 第一次调用时才挂上对话框、接上它的事件，之后每次调用都按存储里的当前设置打开它
export function openSettings(): void {
  if (!mounted) {
    mount()
    mounted = true
  }
  const { general, preset, batch, sync } = getSettings()
  eventBus.emit('dialog:show-settings', {
    type: 'settings',
    payload: {
      currentBatchKeySettings: batch,
      currentGeneralSettings: general,
      // 旧的预设页按 preset 的键列开关、数启用了几个，站点表里的每个站点都要有值
      currentPresetSettings: Object.fromEntries(SITES.map(({ id }) => [id, isSiteEnabled(preset, id)])),
      currentSyncSettings: sync,
      isMac,
    },
  })
}

// 对话框挂上之后一直留着，取色面板的样式也就一直留在宿主页面上
function mount(): void {
  createApp(App).mount(createMountPoint())
  addPanelStyle()
  eventBus.on('settings:save', (event) => {
    if (event.type === 'general') saveSettings({ general: event.settings })
    else if (event.type === 'preset') saveSettings({ preset: event.states })
    else if (event.type === 'batch-key') saveSettings({ batch: event.settings })
    else saveSettings({ sync: event.settings })
  })
  eventBus.on('sync:request', ({ onSettled }) => {
    runSync({ manual: true }).finally(onSettled)
  })
}
