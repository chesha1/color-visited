<template>
  <div class="tab-content">
    <div class="content-header">
      <h3>批量记录快捷键设置</h3>
      <p class="content-desc">自定义批量标记链接的快捷键组合</p>
    </div>
    <el-form :model="formData" label-width="7.5rem" class="settings-form">
      <el-form-item label="当前快捷键" class="shortcut-display-item">
        <el-input
          v-model="currentShortcutDisplay"
          readonly
          size="large"
          class="shortcut-display"
        >
          <template #prepend>
            🔑
          </template>
        </el-input>
      </el-form-item>
      
      <el-form-item class="hint-item">
        <el-alert
          :title="hintText"
          :type="hasNewKeyPress ? 'success' : 'info'"
          show-icon
          :closable="false"
          class="hint-alert"
        />
      </el-form-item>
    </el-form>
    
    <div class="tab-footer">
      <el-button @click="handleReset" size="large" plain>
        重置为默认
      </el-button>
      <el-button
        type="primary"
        size="large"
        @click="handleSave"
        :disabled="!hasNewKeyPress"
      >
        保存快捷键
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import type { BatchKeySettings } from '@/core/eventBus'

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
</script>

<style scoped>
.tab-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 内容头部 */
.content-header {
  margin-bottom: 32px;
}

.content-header h3 {
  margin: 0 0 8px 0;
  color: #1f2937;
  font-size: 24px;
  font-weight: 600;
}

.content-desc {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
}

/* 表单样式 */
.settings-form {
  flex: 1;
}

:deep(.settings-form .el-form-item) {
  margin-bottom: 28px;
}

:deep(.settings-form .el-form-item__label) {
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
}

/* 快捷键显示样式 */
.shortcut-display-item .shortcut-display {
  max-width: 400px;
}

:deep(.shortcut-display .el-input__inner) {
  text-align: center;
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  letter-spacing: 1px;
}

/* 提示信息样式 */
.hint-item {
  margin-bottom: 32px !important;
}

.hint-alert {
  border-radius: 8px;
}

/* 底部按钮区域 */
.tab-footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

:deep(.tab-footer .el-button) {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

</style>