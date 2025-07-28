<template>
  <div class="space-y-6">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">批量染色快捷键设置</h3>
      <p class="text-sm text-gray-600">按下快捷键，对当前页面上所有符合规则的链接进行染色</p>
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
import type { BatchKeySettings } from '@/types'
import { showNotification } from '@/core/ui'

interface Props {
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  isMac: boolean
  visible: boolean
  isActive: boolean
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
const isResetMode = ref(false) // 标识是否处于重置模式

const hintText = computed(() => {
  if (hasNewKeyPress.value) {
    return isResetMode.value 
      ? '已设置为默认快捷键，点击保存应用设置'
      : '已记录新快捷键，点击保存应用设置'
  }
  return '请按下您想要使用的快捷键组合...'
})

const currentShortcutDisplay = computed(() => {
  const settings = hasNewKeyPress.value ? newSettings.value : formData.value
  const shortcutText: string[] = []

  if (settings.metaKey) shortcutText.push(props.isMac ? '⌘ Command' : 'Win')
  if (settings.ctrlKey) shortcutText.push(props.isMac ? '⌃ Control' : 'Ctrl')
  if (settings.altKey) shortcutText.push(props.isMac ? '⌥ Option' : 'Alt')
  if (settings.shiftKey) shortcutText.push(props.isMac ? '⇧ Shift' : 'Shift')
  
  // 改进键名显示
  let keyDisplay = settings.key
  if (settings.key) {
    // 特殊键名映射
    const keyMap: Record<string, string> = {
      'ArrowUp': '↑',
      'ArrowDown': '↓',
      'ArrowLeft': '←',
      'ArrowRight': '→',
      'Enter': '⏎',
      'Backspace': '⌫',
      'Delete': '⌦',
      'Escape': 'Esc',
      ' ': 'Space'
    }
    keyDisplay = keyMap[settings.key] || settings.key
  }
  
  if (keyDisplay) {
    shortcutText.push(keyDisplay)
  }

  return shortcutText.length > 0 ? shortcutText.join(' + ') : '未设置'
})

const handleKeyDown = (e: KeyboardEvent) => {
  // 忽略单独的修饰键按下
  if (e.key === 'Control' || e.key === 'Shift' || e.key === 'Alt' || e.key === 'Meta') {
    return
  }

  // 忽略一些不适合作为快捷键的键
  const ignoredKeys = ['Tab', 'CapsLock', 'NumLock', 'ScrollLock', 'Insert', 'PrintScreen', 'Pause']
  if (ignoredKeys.includes(e.key)) {
    return
  }

  e.preventDefault()
  e.stopPropagation()

  // 处理特殊键名
  let keyName = e.key
  if (e.key.length === 1) {
    keyName = e.key.toUpperCase()
  } else {
    // 对于功能键，保持原始名称
    keyName = e.key
  }

  console.log('快捷键记录:', {
    key: keyName,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    code: e.code
  })

  newSettings.value = {
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    key: keyName,
  }

  hasNewKeyPress.value = true
  isResetMode.value = false // 手动按键时取消重置模式
}

const handleSave = () => {
  if (hasNewKeyPress.value) {
    if (isResetMode.value) {
      // 如果是重置模式，发送重置事件
      emit('reset')
      showNotification('批量染色快捷键已重置为默认！')
    } else {
      // 否则正常保存
      emit('save', newSettings.value)
      showNotification('批量染色快捷键设置已保存！')
    }
    
    // 保存后重置状态
    formData.value = { ...newSettings.value }
    hasNewKeyPress.value = false
    isResetMode.value = false
  }
}

const handleReset = () => {
  // 仅重置界面显示为默认值，不立即生效
  newSettings.value = { ...props.defaultSettings }
  hasNewKeyPress.value = true // 标记为有新的按键设置，需要保存
  isResetMode.value = true // 标记为重置模式
}

// 监听 props.currentSettings 变化，同步更新 formData
watch(() => props.currentSettings, (currentSettings) => {
  formData.value = { ...currentSettings }
  // 当外部设置变化时，也重置新设置状态
  if (!hasNewKeyPress.value) {
    newSettings.value = { ...currentSettings }
  }
  // 重置模式标识
  isResetMode.value = false
}, { immediate: true, deep: true })

// 监听对话框显示状态和标签页激活状态，只在快捷键设置标签页激活时添加键盘监听器
watch([() => props.visible, () => props.isActive], ([isVisible, isActive]) => {
  console.log('对话框状态变化:', { isVisible, isActive })
  
  if (isVisible && isActive) {
    console.log('添加键盘监听器')
    document.addEventListener('keydown', handleKeyDown, true)
  } else {
    console.log('移除键盘监听器')
    document.removeEventListener('keydown', handleKeyDown, true)
    // 当对话框关闭或切换到其他标签页时，重置新按键状态
    if (!isVisible) {
      hasNewKeyPress.value = false
      isResetMode.value = false
    }
  }
}, { immediate: true })

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown, true)
})

// 暴露给父组件调用的方法和属性
defineExpose({
  save: handleSave,
  reset: handleReset,
  hasNewKeyPress,
  getFormData: () => hasNewKeyPress.value ? ({ ...newSettings.value }) : ({ ...formData.value })
})
</script>