<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SettingsDialog from '@/components/SettingsDialog.vue'
import { eventBus, type BatchKeySettings, type GeneralSettings } from '@/core/eventBus'

const dialogData = ref<{
  visible: boolean
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  currentGeneralSettings: GeneralSettings
  defaultGeneralSettings: GeneralSettings
  isMac: boolean
  onSave: (settings: BatchKeySettings) => void
  onReset: () => void
  onGeneralSave: (settings: GeneralSettings) => void
  onGeneralReset: () => void
} | null>(null)

const handleShowDialog = (data: {
  currentSettings: BatchKeySettings;
  defaultSettings: BatchKeySettings;
  currentGeneralSettings: GeneralSettings;
  defaultGeneralSettings: GeneralSettings;
  isMac: boolean;
  onSave: (settings: BatchKeySettings) => void;
  onReset: () => void;
  onGeneralSave: (settings: GeneralSettings) => void;
  onGeneralReset: () => void;
}) => {
  dialogData.value = { ...data, visible: true }
}

onMounted(() => {
  eventBus.on('showSettingsDialog', handleShowDialog)
})

onUnmounted(() => {
  eventBus.off('showSettingsDialog', handleShowDialog)
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
    @save="dialogData.onSave"
    @reset="dialogData.onReset"
    @general-save="dialogData.onGeneralSave"
    @general-reset="dialogData.onGeneralReset"
  />
</template>
