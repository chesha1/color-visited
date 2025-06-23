import { ref, onMounted, onUnmounted } from 'vue'
import { eventBus, type BatchKeySettings } from '@/core/eventBus'

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

  const handleShowDialog = (data: {
    currentSettings: BatchKeySettings;
    defaultSettings: BatchKeySettings;
    isMac: boolean;
    onSave: (settings: BatchKeySettings) => void;
    onReset: () => void;
  }) => {
    currentSettings.value = data.currentSettings
    defaultSettings.value = data.defaultSettings
    isMac.value = data.isMac
    onSaveCallback = data.onSave
    onResetCallback = data.onReset
    visible.value = true
  }

  const handleSave = (settings: BatchKeySettings) => {
    onSaveCallback?.(settings)
  }

  const handleReset = () => {
    onResetCallback?.()
  }

  // 组件挂载时注册事件监听
  onMounted(() => {
    eventBus.on('showBatchKeyDialog', handleShowDialog)
  })

  // 组件卸载时移除事件监听
  onUnmounted(() => {
    eventBus.off('showBatchKeyDialog', handleShowDialog)
  })

  return {
    visible,
    currentSettings,
    defaultSettings,
    isMac,
    handleSave,
    handleReset
  }
}