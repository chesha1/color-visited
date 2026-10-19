<template>
  <div class="space-y-6">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">常规设置</h3>
      <p class="text-sm text-gray-600">自定义链接颜色和行为设置</p>
    </div>
    <el-form label-width="120px" class="space-y-6">
      <el-form-item label="链接颜色">
        <div class="flex items-center gap-3">
          <el-color-picker
            v-model="general.color"
            show-alpha
            :predefine="colorPresets"
            size="large"
          />
          <el-input
            v-model="general.color"
            class="flex-1"
            placeholder="请输入颜色值"
            clearable
          />
        </div>
      </el-form-item>

      <el-form-item label="过期时间">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <el-input-number
              v-model="expirationDays"
              :max="3650"
              controls-position="right"
              size="large"
              class="w-32"
            />
            <span class="text-sm text-gray-600">天</span>
          </div>
          <div class="text-xs text-gray-500">设置已访问链接的记录保留时间</div>
        </div>
      </el-form-item>

      <el-form-item label="调试模式">
        <div class="space-y-2">
          <el-switch
            v-model="general.debug"
            size="large"
            inline-prompt
          />
          <div class="text-xs text-gray-500">开启后将在控制台显示详细调试信息</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { GeneralSettings } from '@/core/settings'
import { fromDays, toDays } from '@/ui/draft'

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
