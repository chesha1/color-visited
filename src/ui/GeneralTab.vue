<template>
  <div class="divide-y divide-(--el-border-color-lighter) rounded-lg border border-(--el-border-color-lighter)">
    <SettingRow title="链接颜色">
      <template #description>
        已访问的链接显示成这个颜色
      </template>
      <div class="flex items-center gap-3">
        <el-color-picker
          v-model="general.color"
          show-alpha
          :predefine="colorPresets"
          aria-label="选择链接颜色"
          class="shrink-0"
        />
        <el-input
          v-model="general.color"
          class="w-[180px] min-w-0"
          placeholder="请输入颜色值"
          aria-label="链接颜色"
          clearable
        />
      </div>
    </SettingRow>

    <SettingRow title="过期时间">
      <template #description>
        从最近一次访问算起，过期后链接恢复原样
      </template>
      <div class="flex items-center gap-2">
        <el-input-number
          v-model="expirationDays"
          :max="3650"
          controls-position="right"
          aria-label="过期时间（天）"
          class="w-32"
        />
        <span class="text-sm text-(--el-text-color-regular)">天</span>
      </div>
    </SettingRow>

    <SettingRow title="调试模式">
      <template #description>
        在控制台输出调试日志
      </template>
      <el-switch
        v-model="general.debug"
        aria-label="调试模式"
      />
    </SettingRow>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { GeneralSettings } from '@/core/settings'
import { fromDays, toDays } from '@/ui/draft'
import SettingRow from '@/ui/SettingRow.vue'

const props = defineProps<{
  /** 保存着的过期时间（ms），输入框里的天数不合法时回到它 */
  savedExpirationTime: number
}>()

const general = defineModel<GeneralSettings>({ required: true })

const colorPresets = [
  'rgba(0,0,0,0)', // 透明色，适配暗色模式
  '#f1f5f9', // slate-100
  '#e2e8f0', // slate-200
  '#cbd5e1', // slate-300
  '#94a3b8', // slate-400
  '#64748b', // slate-500
  '#475569', // slate-600
  '#334155', // slate-700
  '#1e293b', // slate-800
  '#0f172a', // slate-900
]

const expirationDays = computed({
  get: () => toDays(general.value.expirationTime),
  set: (days: number | null | undefined) => {
    general.value.expirationTime = fromDays(days, props.savedExpirationTime)
  },
})
</script>
