// 旧的设置对话框（App.vue、components/）还靠事件总线收发设置，这里把它接到内核上：
// 打开时按 getSettings() 发出 dialog:show-settings，settings:save 交给 saveSettings，sync:request 交给 runSync
import { createApp } from 'vue'
import App from '@/App.vue'
import { eventBus } from '@/core/eventBus'
import { getSettings, saveSettings } from '@/core/settings'
import { isMac } from '@/core/shortcut'
import { runSync } from '@/core/sync'
import { isSiteEnabled, SITES } from '@/shared/sites'

export function openLegacySettings(): void {
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

// 在 Shadow DOM 里挂上旧的设置对话框，接上它的事件
export function mountLegacyDialog(): void {
  eventBus.on('settings:save', (event) => {
    if (event.type === 'general') saveSettings({ general: event.settings })
    else if (event.type === 'preset') saveSettings({ preset: event.states })
    else if (event.type === 'batch-key') saveSettings({ batch: event.settings })
    else saveSettings({ sync: event.settings })
  })
  eventBus.on('sync:request', ({ onSettled }) => {
    runSync({ manual: true }).finally(onSettled)
  })

  const container = document.createElement('div')
  container.id = 'color-visited-root'
  const shadowRoot = container.attachShadow({ mode: 'open' })
  const appMountPoint = document.createElement('div')
  shadowRoot.appendChild(appMountPoint)

  const injectStyles = async () => {
    try {
      const elementPlusLink = document.createElement('link')
      elementPlusLink.rel = 'stylesheet'
      elementPlusLink.href = 'https://unpkg.com/element-plus/dist/index.css'
      shadowRoot.appendChild(elementPlusLink)

      const tailwindStyles = document.createElement('style')
      const tailwindModule = await import('@/styles/tailwind.css?inline')
      tailwindStyles.textContent = tailwindModule.default
      shadowRoot.appendChild(tailwindStyles)

      const customStyles = document.createElement('style')
      const stylesModule = await import('@/styles/index.css?inline')
      customStyles.textContent = stylesModule.default
      shadowRoot.appendChild(customStyles)
    } catch (error) {
      console.warn('Failed to inject styles:', error)
    }
  }
  injectStyles()

  createApp(App).mount(appMountPoint)
  document.body.appendChild(container)
}
