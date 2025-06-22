<template>
  <el-dialog
    v-model="visible"
    title="设置批量记录快捷键"
    width="400px"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @closed="handleClosed"
  >
    <el-form :model="formData" label-width="120px">
      <el-form-item label="当前快捷键">
        <el-input
          v-model="currentShortcutDisplay"
          readonly
          style="text-align: center; font-weight: bold;"
        />
      </el-form-item>
      
      <el-form-item>
        <el-alert
          :title="hintText"
          type="info"
          show-icon
          :closable="false"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleReset" type="primary" plain>
          重置为默认
        </el-button>
        <el-button @click="handleCancel">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="handleSave"
          :disabled="!hasNewKeyPress"
        >
          保存
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type { BatchKeySettings } from '@/core/eventBus'

interface Props {
  modelValue: boolean
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  isMac: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'save', settings: BatchKeySettings): void
  (e: 'reset'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

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
    visible.value = false
    ElMessage.success('批量记录快捷键设置已保存！')
  }
}

const handleCancel = () => {
  visible.value = false
}

const handleReset = () => {
  emit('reset')
  visible.value = false
  ElMessage.success('批量记录快捷键已重置为默认！')
}

const handleClosed = () => {
  // 重置状态
  formData.value = { ...props.currentSettings }
  newSettings.value = { ...props.currentSettings }
  hasNewKeyPress.value = false
}

// 监听 props.currentSettings 变化，同步更新 formData
watch(() => props.currentSettings, (newSettings) => {
  formData.value = { ...newSettings }
}, { immediate: true, deep: true })

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: space-between;
}
</style>