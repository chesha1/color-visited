<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SettingsDialog from '@/components/SettingsDialog.vue'
import { eventBus } from '@/core/eventBus'
import type { BatchKeySettings, GeneralSettings, SyncSettings, SettingsDialogPayload } from '@/types'

const dialogData = ref<{
  visible: boolean
  currentBatchKeySettings: BatchKeySettings
  currentGeneralSettings: GeneralSettings
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

const handleGeneralSave = (settings: GeneralSettings) => {
  eventBus.emit('settings:save', {
    type: 'general',
    settings
  })
}

const handlePresetSave = (states: Record<string, boolean>) => {
  eventBus.emit('settings:save', {
    type: 'preset',
    states
  })
}

const handleSyncSave = (settings: SyncSettings) => {
  eventBus.emit('settings:save', {
    type: 'sync',
    settings
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
    :general-settings="dialogData.currentGeneralSettings"
    :current-preset-settings="dialogData.currentPresetSettings"
    :current-sync-settings="dialogData.currentSyncSettings"
    :is-mac="dialogData.isMac"
    @save="handleSettingsSave"
    @general-save="handleGeneralSave"
    @preset-save="handlePresetSave"
    @sync-save="handleSyncSave"
  />
</template>
