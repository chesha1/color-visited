<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BatchKeySettingsDialog from '@/components/BatchKeySettingsDialog.vue'
import { eventBus, type BatchKeySettings } from '@/core/eventBus'

const dialogData = ref<{
  visible: boolean
  currentSettings: BatchKeySettings
  defaultSettings: BatchKeySettings
  isMac: boolean
  onSave: (settings: BatchKeySettings) => void
  onReset: () => void
} | null>(null)

const handleShowDialog = (data: {
  currentSettings: BatchKeySettings;
  defaultSettings: BatchKeySettings;
  isMac: boolean;
  onSave: (settings: BatchKeySettings) => void;
  onReset: () => void;
}) => {
  dialogData.value = { ...data, visible: true }
}

onMounted(() => {
  eventBus.on('showBatchKeyDialog', handleShowDialog)
})

onUnmounted(() => {
  eventBus.off('showBatchKeyDialog', handleShowDialog)
})
</script>

<template>
  <BatchKeySettingsDialog
    v-if="dialogData"
    v-model="dialogData.visible"
    :current-settings="dialogData.currentSettings"
    :default-settings="dialogData.defaultSettings"
    :is-mac="dialogData.isMac"
    @save="dialogData.onSave"
    @reset="dialogData.onReset"
  />
</template>
