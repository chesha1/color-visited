<template>
  <div class="space-y-6">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">
        批量染色快捷键设置
      </h3>
      <p class="text-sm text-gray-600">
        按下快捷键，对当前页面上所有符合规则的链接进行染色
      </p>
    </div>
    <el-form
      label-width="120px"
      class="space-y-6"
    >
      <el-form-item label="当前快捷键">
        <el-input
          :model-value="formatShortcut(shortcut)"
          readonly
          size="large"
          class="font-mono"
        />
      </el-form-item>

      <el-form-item>
        <el-alert
          :title="changed ? '已记录新快捷键，点击保存应用设置' : '请按下您想要使用的快捷键组合...'"
          :type="changed ? 'success' : 'info'"
          show-icon
          :closable="false"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { formatShortcut, isRecordable, toShortcut, type Shortcut } from '@/core/shortcut'

const props = defineProps<{
  /** 这个 tab 正显示着，按下的键都录成快捷键 */
  recording: boolean
  /** 快捷键改了，还没保存 */
  changed: boolean
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
