<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SettingsDialog from '@/components/SettingsDialog.vue'
import { eventBus } from '@/core/eventBus'
import type { BatchKeySettings, GeneralSettings, SyncSettings, SettingsDialogPayload } from '@/types'

const dialogData = ref<{
  visible: boolean
  currentBatchKeySettings: BatchKeySettings
  defaultBatchKeySettings: BatchKeySettings
  currentGeneralSettings: GeneralSettings
  defaultGeneralSettings: GeneralSettings
  currentPresetSettings: Record<string, boolean>
  currentSyncSettings: SyncSettings
  isMac: boolean
} | null>(null)

const handleShowDialog = (event: {
  type: 'settings';
  payload: SettingsDialogPayload;
}) => {
  dialogData.value = { ...event.payload, visible: true }
}

// 处理设置保存事件
const handleSettingsSave = (settings: BatchKeySettings) => {
  eventBus.emit('settings:save', {
    type: 'batch-key',
    settings
  })
}

const handleSettingsReset = () => {
  eventBus.emit('settings:reset', {
    type: 'batch-key'
  })
}

const handleGeneralSave = (settings: GeneralSettings) => {
  eventBus.emit('settings:save', {
    type: 'general',
    settings
  })
}

const handleGeneralReset = () => {
  eventBus.emit('settings:reset', {
    type: 'general'
  })
}

const handlePresetSave = (states: Record<string, boolean>) => {
  eventBus.emit('settings:save', {
    type: 'preset',
    states
  })
}

const handlePresetReset = () => {
  eventBus.emit('settings:reset', {
    type: 'preset'
  })
}

const handleSyncSave = (settings: SyncSettings) => {
  eventBus.emit('settings:save', {
    type: 'sync',
    settings
  })
}

const handleSyncReset = () => {
  eventBus.emit('settings:reset', {
    type: 'sync'
  })
}

onMounted(() => {
  eventBus.on('dialog:show-settings', handleShowDialog)
})

onUnmounted(() => {
  eventBus.off('dialog:show-settings', handleShowDialog)
})
</script>

<template>
  <SettingsDialog
    v-if="dialogData"
    v-model="dialogData.visible"
    :current-settings="dialogData.currentBatchKeySettings"
    :default-settings="dialogData.defaultBatchKeySettings"
    :general-settings="dialogData.currentGeneralSettings"
    :default-general-settings="dialogData.defaultGeneralSettings"
    :current-preset-settings="dialogData.currentPresetSettings"
    :current-sync-settings="dialogData.currentSyncSettings"
    :is-mac="dialogData.isMac"
    @save="handleSettingsSave"
    @reset="handleSettingsReset"
    @general-save="handleGeneralSave"
    @general-reset="handleGeneralReset"
    @preset-save="handlePresetSave"
    @preset-reset="handlePresetReset"
    @sync-save="handleSyncSave"
    @sync-reset="handleSyncReset"
  />
</template>
