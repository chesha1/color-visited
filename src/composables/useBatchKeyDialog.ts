import { ref } from 'vue'
import type { BatchKeySettings } from '@/components/BatchKeySettingsDialog.vue'

export function useBatchKeyDialog() {
  const visible = ref(false)
  const currentSettings = ref<BatchKeySettings>({
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    key: ''
  })
  const defaultSettings = ref<BatchKeySettings>({
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    key: ''
  })
  const isMac = ref(false)

  let onSaveCallback: ((settings: BatchKeySettings) => void) | null = null
  let onResetCallback: (() => void) | null = null

  const show = (
    current: BatchKeySettings,
    defaults: BatchKeySettings,
    mac: boolean,
    onSave: (settings: BatchKeySettings) => void,
    onReset: () => void
  ) => {
    currentSettings.value = current
    defaultSettings.value = defaults
    isMac.value = mac
    onSaveCallback = onSave
    onResetCallback = onReset
    visible.value = true
  }

  const handleSave = (settings: BatchKeySettings) => {
    onSaveCallback?.(settings)
  }

  const handleReset = () => {
    onResetCallback?.()
  }

  // 注册全局方法供 core 层调用
  ;(window as any).showVueBatchKeySettingsDialog = show

  return {
    visible,
    currentSettings,
    defaultSettings,
    isMac,
    handleSave,
    handleReset
  }
}