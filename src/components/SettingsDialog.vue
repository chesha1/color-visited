<template>
  <el-dialog
    v-model="visible"
    width="900px"
    :close-on-click-modal="true"
    :close-on-press-escape="false"
    :body-style="{ padding: '0' }"
    @closed="handleClosed"
  >
    <template #header>
      <span class="text-lg font-semibold">设置</span>
    </template>
    <div class="h-[400px] overflow-y-auto">
      <!-- 使用 el-tabs 纵向布局 -->
      <el-tabs
        v-model="activeTab"
        tab-position="left"
        class="h-full"
        stretch
      >
        <el-tab-pane label="常规设置" name="general" class="h-full">
          <div class="p-6 h-full overflow-y-auto">
            <GeneralSettingsComponent
              :current-settings="generalSettings"
              ref="generalSettingsRef"
              @save="(settings) => emit('generalSave', settings)"
              @reset="() => emit('generalReset')"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="预设网站" name="presets" class="h-full">
          <div class="p-6 h-full overflow-y-auto">
            <PresetSettingsComponent 
              :current-preset-settings="currentPresetSettings"
              ref="presetSettingsRef"
              @save="(states) => emit('presetSave', states)"
              @reset="() => emit('presetReset')"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="批量染色快捷键" name="shortcut" class="h-full">
          <div class="p-6 h-full overflow-y-auto">
            <ShortcutSettingsComponent
              :current-settings="currentSettings"
              :is-mac="isMac"
              :visible="visible"
              :is-active="activeTab === 'shortcut'"
              ref="shortcutSettingsRef"
              @save="(settings) => emit('save', settings)"
              @reset="() => emit('reset')"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="数据同步" name="sync" class="h-full">
          <div class="p-6 h-full overflow-y-auto">
            <SyncSettingsComponent
              :current-settings="currentSyncSettings"
              ref="syncSettingsRef"
              @save="(settings) => emit('syncSave', settings)"
              @reset="() => emit('syncReset')"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    
    <template #footer>
      <div class="flex justify-end gap-3">
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
import type { BatchKeySettings, GeneralSettings, SyncSettings } from '@/types'
import GeneralSettingsComponent from '@/components/GeneralSettings.vue'
import PresetSettingsComponent from '@/components/PresetSettings.vue'
import ShortcutSettingsComponent from '@/components/ShortcutSettings.vue'
import SyncSettingsComponent from '@/components/SyncSettings.vue'

interface Props {
  modelValue: boolean
  currentSettings: BatchKeySettings
  generalSettings: GeneralSettings
  currentPresetSettings: Record<string, boolean>
  currentSyncSettings: SyncSettings
  isMac: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'save', settings: BatchKeySettings): void
  (e: 'reset'): void
  (e: 'generalSave', settings: GeneralSettings): void
  (e: 'generalReset'): void
  (e: 'presetSave', states: Record<string, boolean>): void
  (e: 'presetReset'): void
  (e: 'syncSave', settings: SyncSettings): void
  (e: 'syncReset'): void
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
const presetSettingsRef = ref()
const syncSettingsRef = ref()

// 计算是否可以保存
const canSave = computed(() => {
  if (activeTab.value === 'shortcut') {
    return shortcutSettingsRef.value?.hasChanges ?? false
  } else if (activeTab.value === 'general') {
    return generalSettingsRef.value?.hasChanges ?? false
  } else if (activeTab.value === 'presets') {
    return presetSettingsRef.value?.hasChanges ?? false
  } else if (activeTab.value === 'sync') {
    return syncSettingsRef.value?.hasChanges ?? false
  }
  return false
})

const handleSave = () => {
  if (activeTab.value === 'general') {
    // 直接调用子组件的 save 方法，该方法会emit事件并重置状态
    generalSettingsRef.value?.save()
  } else if (activeTab.value === 'shortcut') {
    // 直接调用子组件的 save 方法，该方法会emit事件并重置状态
    shortcutSettingsRef.value?.save()
  } else if (activeTab.value === 'presets') {
    // 直接调用子组件的 save 方法，该方法会emit事件并重置状态
    presetSettingsRef.value?.save()
  } else if (activeTab.value === 'sync') {
    // 直接调用子组件的 save 方法，该方法会emit事件并重置状态
    syncSettingsRef.value?.save()
  }
}

const handleReset = () => {
  if (activeTab.value === 'general') {
    // 仅重置表单显示，实际保存需用户点击「保存设置」
    generalSettingsRef.value?.reset()
  } else if (activeTab.value === 'shortcut') {
    // 快捷键重置逻辑改为仅重置表单显示，实际保存需用户点击「保存设置」
    shortcutSettingsRef.value?.reset()
  } else if (activeTab.value === 'presets') {
    // 预设网站重置逻辑
    presetSettingsRef.value?.reset()
  } else if (activeTab.value === 'sync') {
    // 同步设置重置逻辑
    syncSettingsRef.value?.reset()
  }
}

const handleClosed = () => {
  // 重置状态
  activeTab.value = 'general'
}
</script>