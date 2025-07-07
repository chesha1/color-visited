<template>
  <div class="tab-content">
    <div class="content-header">
      <h3>常规设置</h3>
      <p class="content-desc">自定义链接颜色和行为设置</p>
    </div>
    <el-form :model="formData" label-width="120px" class="settings-form">
      <el-form-item label="链接颜色" class="color-form-item">
        <div class="color-picker-container">
          <el-color-picker
            v-model="formData.color"
            show-alpha
            :predefine="colorPresets"
            size="large"
          />
          <el-input
            v-model="formData.color"
            class="color-input"
            placeholder="请输入颜色值"
            clearable
          >
          </el-input>
        </div>
      </el-form-item>
      
      <el-form-item label="过期时间" class="expiration-form-item">
        <div class="expiration-container">
          <div class="input-with-unit">
            <el-input-number
              v-model="expirationDays"
              :min="1"
              :max="3650"
              controls-position="right"
              size="large"
              class="expiration-input"
            />
            <span class="unit-text">天</span>
          </div>
          <div class="form-item-help">设置已访问链接的记录保留时间</div>
        </div>
      </el-form-item>
      
      <el-form-item label="调试模式" class="debug-form-item">
        <div class="switch-container">
          <el-switch
            v-model="formData.debug"
            size="large"
            inline-prompt
          />
          <div class="form-item-help">开启后将在控制台显示详细调试信息</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type { GeneralSettings } from '@/core/eventBus'

interface Props {
  currentSettings: GeneralSettings
  defaultSettings: GeneralSettings
}

interface Emits {
  (e: 'save', settings: GeneralSettings): void
  (e: 'reset'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const formData = ref<GeneralSettings>({ ...props.currentSettings })

const colorPresets = [
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
  ElMessage.success('常规设置已保存！')
}

// 重置为默认值，但仅更新界面，真正保存需用户点击「保存设置」
const handleReset = () => {
  formData.value = { ...props.defaultSettings }
  ElMessage.success('常规设置已重置为默认！')
}

// 监听 props.currentSettings 变化，同步更新 formData
watch(() => props.currentSettings, (newSettings) => {
  formData.value = { ...newSettings }
}, { immediate: true, deep: true })

// 暴露给父组件调用的方法
defineExpose({
  save: handleSave,
  reset: handleReset,
  getFormData: () => ({ ...formData.value })
})
</script>