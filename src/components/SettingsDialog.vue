<template>
  <el-dialog
    v-model="visible"
    title="设置"
    width="800px"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @closed="handleClosed"
  >
    <div class="settings-panel">
      <!-- 左侧标签页导航 -->
      <div class="sidebar">
        <el-menu
          v-model="activeTab"
          class="sidebar-menu"
          @select="handleTabSelect"
        >
          <el-menu-item index="general">
            <span>常规设置</span>
          </el-menu-item>
          <el-menu-item index="presets">
            <span>预设网站</span>
          </el-menu-item>
          <el-menu-item index="shortcut">
            <span>批量记录快捷键</span>
          </el-menu-item>
        </el-menu>
      </div>
      
      <!-- 右侧内容区域 -->
      <div class="content">
        <!-- 常规设置 -->
        <div v-show="activeTab === 'general'" class="tab-content">
          <h3>常规设置</h3>
          <el-form :model="generalFormData" label-width="120px">
            <el-form-item label="链接颜色">
              <el-color-picker
                v-model="generalFormData.color"
                show-alpha
                :predefine="colorPresets"
              />
              <el-input
                v-model="generalFormData.color"
                style="width: 200px; margin-left: 10px;"
                placeholder="请输入颜色值"
              />
            </el-form-item>
            
            <el-form-item label="过期时间">
              <el-input-number
                v-model="expirationDays"
                :min="1"
                :max="3650"
                controls-position="right"
                style="width: 200px;"
              />
              <span style="margin-left: 10px; color: #909399;">天</span>
            </el-form-item>
            
            <el-form-item label="调试模式">
              <el-switch
                v-model="generalFormData.debug"
                active-text="开启"
                inactive-text="关闭"
              />
            </el-form-item>
          </el-form>
          
          <div class="tab-footer">
            <el-button @click="handleGeneralReset" type="primary" plain>
              重置为默认
            </el-button>
            <el-button
              type="primary"
              @click="handleGeneralSave"
            >
              保存
            </el-button>
          </div>
        </div>
        
        <!-- 预设网站 -->
        <div v-show="activeTab === 'presets'" class="tab-content">
          <h3>预设网站</h3>
          <p class="placeholder">预设网站功能正在开发中...</p>
        </div>
        
        <!-- 批量记录快捷键设置 -->
        <div v-show="activeTab === 'shortcut'" class="tab-content">
          <h3>批量记录快捷键设置</h3>
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
          
          <div class="tab-footer">
            <el-button @click="handleReset" type="primary" plain>
              重置为默认
            </el-button>
            <el-button
              type="primary"
              @click="handleSave"
              :disabled="!hasNewKeyPress"
            >
              保存
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">
          关闭
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type { BatchKeySettings, GeneralSettings } from '@/core/eventBus'

interface Props {
  modelValue: boolean
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  currentGeneralSettings: GeneralSettings
  defaultGeneralSettings: GeneralSettings
  isMac: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'save', settings: BatchKeySettings): void
  (e: 'reset'): void
  (e: 'generalSave', settings: GeneralSettings): void
  (e: 'generalReset'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const activeTab = ref('general')
const formData = ref<BatchKeySettings>({ ...props.currentSettings })
const newSettings = ref<BatchKeySettings>({ ...props.currentSettings })
const hasNewKeyPress = ref(false)

// 常规设置相关状态
const generalFormData = ref<GeneralSettings>({ ...props.currentGeneralSettings })
const colorPresets = [
  '#f1f5f9', // slate-100
  '#e2e8f0', // slate-200
  '#cbd5e1', // slate-300
  '#94a3b8', // slate-400
  '#64748b', // slate-500
  '#475569', // slate-600
  '#334155', // slate-700
  '#1e293b', // slate-800
  '#0f172a', // slate-900
]

// 过期时间（天数）
const expirationDays = computed({
  get: () => Math.round(generalFormData.value.expirationTime / (1000 * 60 * 60 * 24)),
  set: (days: number) => {
    generalFormData.value.expirationTime = days * 1000 * 60 * 60 * 24
  }
})

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

// 常规设置保存
const handleGeneralSave = () => {
  emit('generalSave', { ...generalFormData.value })
  ElMessage.success('常规设置已保存！')
}

// 常规设置重置
const handleGeneralReset = () => {
  emit('generalReset')
  ElMessage.success('常规设置已重置为默认！')
}

const handleTabSelect = (index: string) => {
  activeTab.value = index
}

const handleClosed = () => {
  // 重置状态
  activeTab.value = 'general'
  formData.value = { ...props.currentSettings }
  newSettings.value = { ...props.currentSettings }
  hasNewKeyPress.value = false
  generalFormData.value = { ...props.currentGeneralSettings }
}

// 监听 props.currentSettings 变化，同步更新 formData
watch(() => props.currentSettings, (newSettings) => {
  formData.value = { ...newSettings }
}, { immediate: true, deep: true })

// 监听 props.currentGeneralSettings 变化，同步更新 generalFormData
watch(() => props.currentGeneralSettings, (newSettings) => {
  generalFormData.value = { ...newSettings }
}, { immediate: true, deep: true })

// 监听对话框显示状态，只在对话框显示时添加键盘监听器
watch(visible, (isVisible) => {
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
.settings-panel {
  display: flex;
  height: 500px;
}

.sidebar {
  width: 200px;
  border-right: 1px solid #e6e6e6;
}

.sidebar-menu {
  border-right: none;
  height: 100%;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.tab-content {
  height: 100%;
}

.tab-content h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #303133;
  font-size: 18px;
}

.tab-footer {
  margin-top: 30px;
  display: flex;
  gap: 10px;
}

.placeholder {
  color: #909399;
  text-align: center;
  margin-top: 50px;
  font-size: 14px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>