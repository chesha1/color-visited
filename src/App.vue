<script setup lang="ts">
import BatchKeySettingsDialog from '@/components/BatchKeySettingsDialog.vue'
import { useBatchKeyDialog } from '@/composables/useBatchKeyDialog'

const {
  visible,
  currentSettings,
  defaultSettings,
  isMac,
  handleSave,
  handleReset
} = useBatchKeyDialog()
</script>

<template>
  <BatchKeySettingsDialog
    v-model="visible"
    :current-settings="currentSettings"
    :default-settings="defaultSettings"
    :is-mac="isMac"
    @save="handleSave"
    @reset="handleReset"
  />
</template>
