<template>
  <el-dialog
    v-model="visible"
    width="56.25rem"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    class="settings-dialog"
    @closed="handleClosed"
  >
    <template #header>
      <span class="dialog-title">设置</span>
    </template>
    <div class="settings-panel">
      <!-- 左侧标签页导航 -->
      <div class="sidebar">
        <div
          v-for="item in menuItems"
          :key="item.index"
          :class="['color-block', { active: activeTab === item.index }]"
          @click="handleTabSelect(item.index)"
        >
          <div class="color-bar"></div>
          <span class="label">{{ item.label }}</span>
        </div>
      </div>
      
      <!-- 右侧内容区域 -->
      <div class="content">
        <!-- 常规设置 -->
        <GeneralSettingsComponent
          v-show="activeTab === 'general'"
          :current-settings="currentGeneralSettings"
          :default-settings="defaultGeneralSettings"
          ref="generalSettingsRef"
        />
        
        <!-- 预设网站 -->
        <PresetSettingsComponent
          v-show="activeTab === 'presets'"
        />
        
        <!-- 批量记录快捷键设置 -->
        <ShortcutSettingsComponent
          v-show="activeTab === 'shortcut'"
          :current-settings="currentSettings"
          :default-settings="defaultSettings"
          :is-mac="isMac"
          :visible="visible"
          ref="shortcutSettingsRef"
        />
      </div>
    </div>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleReset" size="large" plain>
          重置为默认
        </el-button>
        <el-button
          type="primary"
          size="large"
          @click="handleSave"
          :disabled="!canSave"
        >
          保存设置
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { BatchKeySettings, GeneralSettings } from '@/core/eventBus'
import GeneralSettingsComponent from './GeneralSettings.vue'
import PresetSettingsComponent from './PresetSettings.vue'
import ShortcutSettingsComponent from './ShortcutSettings.vue'

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
const generalSettingsRef = ref()
const shortcutSettingsRef = ref()

// 计算是否可以保存
const canSave = computed(() => {
  if (activeTab.value === 'shortcut') {
    return shortcutSettingsRef.value?.hasNewKeyPress ?? false
  }
  return true
})

// 侧边栏彩色区块配置
const menuItems = [
  { index: 'general', label: '常规设置', color: '#f87171' },
  { index: 'presets', label: '预设网站', color: '#34d399' },
  { index: 'shortcut', label: '批量记录快捷键', color: '#60a5fa' },
] as const

const handleSave = () => {
  if (activeTab.value === 'general') {
    // 获取常规设置的当前数据并触发保存事件
    const generalData = generalSettingsRef.value?.getFormData()
    if (generalData) {
      emit('generalSave', generalData)
    }
  } else if (activeTab.value === 'shortcut') {
    // 获取快捷键设置的当前数据并触发保存事件
    const shortcutData = shortcutSettingsRef.value?.getFormData()
    if (shortcutData) {
      emit('save', shortcutData)
    }
  }
  // 预设网站暂时没有保存逻辑
}

const handleCancel = () => {
  visible.value = false
}

const handleReset = () => {
  if (activeTab.value === 'general') {
    emit('generalReset')
  } else if (activeTab.value === 'shortcut') {
    emit('reset')
  }
  // 预设网站暂时没有重置逻辑
}


const handleTabSelect = (index: string) => {
  activeTab.value = index
}

const handleClosed = () => {
  // 重置状态
  activeTab.value = 'general'
}
</script>

<style scoped>
/* 对话框整体样式 */
:deep(.settings-dialog) {
  border-radius: 0.75rem;
  overflow: hidden;
}

:deep(.settings-dialog .el-dialog__header) {
  padding: 1.25rem 1.5rem;
  margin: 0;
  border-bottom: none;
}

:deep(.settings-dialog .el-dialog__title) {
  font-size: 1.25rem;
  font-weight: 600;
}

:deep(.settings-dialog .el-dialog__body) {
  padding: 0;
}

:deep(.settings-dialog .el-dialog__footer) {
  border-top: 0.0625rem solid #f0f0f0;
  background-color: #fafafa;
  padding: 1rem 1.5rem;
}

.dialog-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

/* 主面板布局 */
.settings-panel {
  display: flex;
  height: 35rem;
  background-color: #ffffff;
}

/* 侧边栏样式 */
.sidebar {
  width: 13.75rem;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border-right: 0.0625rem solid #e2e8f0;
}

.sidebar-menu {
  border-right: none;
  height: 100%;
  background: transparent;
}

:deep(.sidebar-menu .el-menu-item) {
  height: 3.5rem;
  line-height: 3.5rem;
  margin: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  border: none;
}

:deep(.sidebar-menu .el-menu-item.is-active) {
  background-color: var(--el-color-primary);
  color: white;
}

/* 移除标签页内文字的 hover 效果 */
:deep(.sidebar-menu .el-menu-item span:hover) {
  background-color: transparent !important;
}

/* 移除输入框内部文字 hover 时的额外框效果 */
:deep(.el-input__inner:hover) {
  outline: none !important;
  box-shadow: none !important;
}

:deep(.el-input-number__inner:hover) {
  outline: none !important;
  box-shadow: none !important;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 新侧边栏彩色区块样式 */
.color-block {
  display: flex;
  align-items: center;
  height: 3.5rem;
  margin: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.color-bar {
  width: 0.25rem;
  height: 100%;
  border-radius: 0.25rem 0 0 0.25rem;
  margin-right: 0.75rem;
  background-color: var(--el-color-primary, #409eff) !important;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.color-block .label {
  flex: 1;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #606266;
  transition: color 0.3s ease;
}

.color-block.active {
  background-color: var(--el-color-primary-light-9, #eef4ff);
}

.color-block.active .color-bar {
  opacity: 1;
}

.color-block.active .label {
  color: var(--el-color-primary, #409eff);
  font-weight: 600;
}

/* 内容区域样式 */
.content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #ffffff;
}

/* 对话框底部 */
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

:deep(.dialog-footer .el-button) {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .settings-panel {
    flex-direction: column;
    height: auto;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
  }
  
  .sidebar-menu {
    display: flex;
    height: 3.75rem;
  }
  
  :deep(.sidebar-menu .el-menu-item) {
    flex: 1;
    text-align: center;
    margin: 0.25rem;
  }
  
  .content {
    padding: 1.25rem;
  }
}
</style>