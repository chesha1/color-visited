<template>
  <el-dialog
    v-model="visible"
    width="900px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    class="settings-dialog"
    @closed="handleClosed"
  >
    <template #header>
      <span class="dialog-title">设置</span>
    </template>
    <!-- 使用 el-tabs 纵向布局 -->
    <el-tabs
      v-model="activeTab"
      tab-position="left"
      class="settings-tabs"
      stretch
    >
      <el-tab-pane label="常规设置" name="general">
        <div class="content">
          <GeneralSettingsComponent
            :current-settings="currentGeneralSettings"
            :default-settings="defaultGeneralSettings"
            ref="generalSettingsRef"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="预设网站" name="presets">
        <div class="content">
          <PresetSettingsComponent />
        </div>
      </el-tab-pane>
      <el-tab-pane label="批量记录快捷键" name="shortcut">
        <div class="content">
          <ShortcutSettingsComponent
            :current-settings="currentSettings"
            :default-settings="defaultSettings"
            :is-mac="isMac"
            :visible="visible"
            ref="shortcutSettingsRef"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
    
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
    // 仅重置表单显示，实际保存需用户点击「保存设置」
    generalSettingsRef.value?.reset()
  } else if (activeTab.value === 'shortcut') {
    // 快捷键重置逻辑保持原状，立即生效
    emit('reset')
  }
  // 预设网站暂时没有重置逻辑
}

const handleClosed = () => {
  // 重置状态
  activeTab.value = 'general'
}
</script>