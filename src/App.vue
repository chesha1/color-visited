<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SettingsDialog from '@/components/SettingsDialog.vue'
import { eventBus, type BatchKeySettings, type GeneralSettings, type SettingsDialogPayload } from '@/core/eventBus'

const dialogData = ref<{
  visible: boolean
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  currentGeneralSettings: GeneralSettings
  defaultGeneralSettings: GeneralSettings
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
    :current-settings="dialogData.currentSettings"
    :default-settings="dialogData.defaultSettings"
    :current-general-settings="dialogData.currentGeneralSettings"
    :default-general-settings="dialogData.defaultGeneralSettings"
    :is-mac="dialogData.isMac"
    @save="handleSettingsSave"
    @reset="handleSettingsReset"
    @general-save="handleGeneralSave"
    @general-reset="handleGeneralReset"
  />
</template>
