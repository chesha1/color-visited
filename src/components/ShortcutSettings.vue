<template>
  <div class="space-y-6">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">批量记录快捷键设置</h3>
      <p class="text-sm text-gray-600">自定义批量标记链接的快捷键组合</p>
    </div>
    <el-form :model="formData" label-width="120px" class="space-y-6">
      <el-form-item label="当前快捷键">
        <el-input
          v-model="currentShortcutDisplay"
          readonly
          size="large"
          class="font-mono"
        >
        </el-input>
      </el-form-item>
      
      <el-form-item>
        <el-alert
          :title="hintText"
          :type="hasNewKeyPress ? 'success' : 'info'"
          show-icon
          :closable="false"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import type { BatchKeySettings } from '@/types'

interface Props {
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  isMac: boolean
  visible: boolean
}

interface Emits {
  (e: 'save', settings: BatchKeySettings): void
  (e: 'reset'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const formData = ref<BatchKeySettings>({ ...props.currentSettings })
const newSettings = ref<BatchKeySettings>({ ...props.currentSettings })
const hasNewKeyPress = ref(false)

const hintText = computed(() => {
  return hasNewKeyPress.value 
    ? '已记录新快捷键，点击保存应用设置'
    : '请按下您想要使用的快捷键组合...'
})

const currentShortcutDisplay = computed(() => {
  const settings = hasNewKeyPress.value ? newSettings.value : formData.value
  const shortcutText: string[] = []

  if (settings.metaKey) shortcutText.push(props.isMac ? '⌘ Command' : 'Win')
  if (settings.ctrlKey) shortcutText.push(props.isMac ? '⌃ Control' : 'Ctrl')
  if (settings.altKey) shortcutText.push(props.isMac ? '⌥ Option' : 'Alt')
  if (settings.shiftKey) shortcutText.push(props.isMac ? '⇧ Shift' : 'Shift')
  shortcutText.push(settings.key)

  return shortcutText.join(' + ')
})

const handleKeyDown = (e: KeyboardEvent) => {
  // 忽略单独的修饰键按下
  if (e.key === 'Control' || e.key === 'Shift' || e.key === 'Alt' || e.key === 'Meta') {
    return
  }

  e.preventDefault()

  newSettings.value = {
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    key: e.key.toUpperCase(),
  }

  hasNewKeyPress.value = true
}

const handleSave = () => {
  if (hasNewKeyPress.value) {
    emit('save', newSettings.value)
    ElMessage.success('批量记录快捷键设置已保存！')
    // 保存后重置状态
    formData.value = { ...newSettings.value }
    hasNewKeyPress.value = false
  }
}

const handleReset = () => {
  emit('reset')
  ElMessage.success('批量记录快捷键已重置为默认！')
  hasNewKeyPress.value = false
}

// 监听 props.currentSettings 变化，同步更新 formData
watch(() => props.currentSettings, (newSettings) => {
  formData.value = { ...newSettings }
}, { immediate: true, deep: true })

// 监听对话框显示状态，只在对话框显示时添加键盘监听器
watch(() => props.visible, (isVisible) => {
  if (isVisible) {
    document.addEventListener('keydown', handleKeyDown)
  } else {
    document.removeEventListener('keydown', handleKeyDown)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})

// 暴露给父组件调用的方法和属性
defineExpose({
  save: handleSave,
  reset: handleReset,
  hasNewKeyPress,
  getFormData: () => hasNewKeyPress.value ? ({ ...newSettings.value }) : ({ ...formData.value })
})
</script>