<template>
  <div class="space-y-3">
    <div class="rounded-lg border border-(--el-border-color-lighter) divide-y divide-(--el-border-color-lighter)">
      <SettingRow title="批量染色">
        <template #description>
          把当前页面上符合规则的链接都记为已访问，误按可以撤销
        </template>
        <div class="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap [scrollbar-width:thin]">
          <template
            v-for="(key, index) in formatShortcut(shortcut)"
            :key="index"
          >
            <span
              v-if="index"
              class="shrink-0 text-(--el-text-color-secondary)"
            >+</span>
            <kbd class="shrink-0 rounded border border-b-2 border-(--el-border-color) bg-(--el-fill-color-light) px-2 py-1 font-mono text-xs text-(--el-text-color-primary)">{{ key }}</kbd>
          </template>
        </div>
      </SettingRow>
    </div>
    <p class="text-xs text-(--el-text-color-secondary)">
      直接按下新的组合键即可替换
    </p>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { formatShortcut, isRecordable, toShortcut, type Shortcut } from '@/core/shortcut'
import SettingRow from '@/ui/SettingRow.vue'

const props = defineProps<{
  /** 这个 tab 正显示着，按下的键都录成快捷键 */
  recording: boolean
}>()

const shortcut = defineModel<Shortcut>({ required: true })

// 在 document 上捕获：焦点在哪里都录得到。录下的键不再往下传，页面上的监听器收不到，
// 录的正好是现在的批量快捷键时也不会触发批量标记
watchEffect((onCleanup) => {
  if (!props.recording) return
  const record = (event: KeyboardEvent) => {
    if (!isRecordable(event)) return
    event.preventDefault()
    event.stopPropagation()
    shortcut.value = toShortcut(event)
  }
  document.addEventListener('keydown', record, true)
  onCleanup(() => document.removeEventListener('keydown', record, true))
})
</script>
