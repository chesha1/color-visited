<template>
  <div class="space-y-6">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">常规设置</h3>
      <p class="text-sm text-gray-600">自定义链接颜色和行为设置</p>
    </div>
    <el-form :model="formData" label-width="120px" class="space-y-6">
      <el-form-item label="链接颜色">
        <div class="flex items-center gap-3">
          <el-color-picker
            v-model="formData.color"
            show-alpha
            :predefine="colorPresets"
            size="large"
          />
          <el-input
            v-model="formData.color"
            class="flex-1"
            placeholder="请输入颜色值"
            clearable
          >
          </el-input>
        </div>
      </el-form-item>
      
      <el-form-item label="过期时间">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <el-input-number
              v-model="expirationDays"
              :min="1"
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
            v-model="formData.debug"
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
import { ref, computed, watch } from 'vue'
import { DEFAULT_SETTINGS } from '@/core/config'
import type { GeneralSettings } from '@/types'

interface Props {
  currentSettings: GeneralSettings
}

interface Emits {
  (e: 'save', settings: GeneralSettings): void
  (e: 'reset'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const formData = ref<GeneralSettings>({ ...props.currentSettings })
// 保存的状态 - 用于比较是否有变更
const savedSettings = ref<GeneralSettings>({ ...props.currentSettings })

// 检测是否有改动
const hasChanges = computed(() => {
  return JSON.stringify(formData.value) !== JSON.stringify(savedSettings.value)
})

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

// 过期时间（天数）
const expirationDays = computed({
  get: () => Math.round(formData.value.expirationTime / (1000 * 60 * 60 * 24)),
  set: (days: number) => {
    formData.value.expirationTime = days * 1000 * 60 * 60 * 24
  }
})

const handleSave = () => {
  emit('save', { ...formData.value })
  // 更新已保存状态
  savedSettings.value = { ...formData.value }
}

// 重置为默认值，但仅更新界面，真正保存需用户点击「保存设置」
const handleReset = () => {
  formData.value = { ...DEFAULT_SETTINGS.general }
}

// 监听 props.currentSettings 变化，同步更新 formData 和 savedSettings
watch(() => props.currentSettings, (newSettings) => {
  formData.value = { ...newSettings }
  savedSettings.value = { ...newSettings }
}, { immediate: true, deep: true })

// 暴露给父组件调用的方法
defineExpose({
  save: handleSave,
  reset: handleReset,
  getFormData: () => ({ ...formData.value }),
  hasChanges
})
</script>