<template>
  <div class="space-y-6">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">数据同步设置</h3>
      <p class="text-sm text-gray-600">通过 GitHub Gist 同步已访问链接数据，实现多设备同步</p>
    </div>

    <div class="space-y-4">
      <!-- 启用同步开关 -->
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900">启用数据同步</label>
          <p class="text-sm text-gray-500">开启后将通过 GitHub Gist 同步数据</p>
        </div>
        <el-switch
          v-model="formData.enabled"
        />
      </div>

      <!-- GitHub 令牌输入 -->
      <div>
        <label class="block text-sm font-medium text-gray-900 mb-2">
          GitHub 个人访问令牌
        </label>
        <el-input
          v-model="formData.githubToken"
          type="password"
          placeholder="请输入 GitHub Personal Access Token"
          show-password
          :disabled="!formData.enabled"
        />
        <p class="text-xs text-gray-500 mt-1">
          需要创建具有 "gist" 权限的个人访问令牌
        </p>
      </div>

      <!-- Gist ID 输入 -->
      <div>
        <label class="block text-sm font-medium text-gray-900 mb-2">
          Gist ID
        </label>
        <el-input
          v-model="formData.gistId"
          placeholder="请输入现有 Gist 的 ID"
          :disabled="!formData.enabled"
        />
        <p class="text-xs text-gray-500 mt-1">
          手动创建一个 Gist，然后输入其 ID
        </p>
      </div>

      <!-- 帮助说明 -->
      <el-card class="bg-blue-50" shadow="never">
        <template #header>
          <span class="text-sm font-medium text-blue-800">设置步骤</span>
        </template>
        <ol class="text-xs text-blue-700 space-y-1 list-decimal list-inside">
          <li>到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建令牌，权限选择 "gist"</li>
          <li>手动创建一个 Gist（任意文件名和内容），复制 URL 中的 ID 部分</li>
          <li>将令牌和 Gist ID 填入上方输入框</li>
        </ol>
      </el-card>

      <!-- 同步状态显示 -->
      <el-card shadow="never">
        <template #header>
          <span class="text-sm font-medium text-gray-800">同步状态</span>
        </template>
        <div class="text-sm space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">当前 Gist ID:</span>
            <span class="text-gray-900">{{ formData.gistId || '未设置' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">最后同步时间:</span>
            <span class="text-gray-900">{{ lastSyncTimeFormatted }}</span>
          </div>
        </div>
      </el-card>

      <!-- 测试连接按钮 -->
      <div class="flex justify-center">
        <el-button
          type="primary"
          :loading="testingConnection"
          :disabled="!formData.enabled || !formData.githubToken"
          @click="testConnection"
        >
          {{ testingConnection ? '测试中...' : '测试连接' }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { SyncSettings } from '@/types'
import { getSyncSettings, validateGitHubToken } from '@/core/sync'
import { showNotification } from '@/core/ui'
import { DEFAULT_SETTINGS } from '@/core/config'

interface Props {
  currentSettings: SyncSettings
  defaultSettings: SyncSettings
}

interface Emits {
  (e: 'save', settings: SyncSettings): void
  (e: 'reset'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 表单数据
const formData = ref<SyncSettings>({
  enabled: props.currentSettings.enabled,
  githubToken: props.currentSettings.githubToken,
  gistId: props.currentSettings.gistId,
  lastSyncTime: props.currentSettings.lastSyncTime
})
// 保存的状态 - 用于比较是否有变更
const savedSettings = ref<SyncSettings>({ ...props.currentSettings })

// 测试连接状态
const testingConnection = ref(false)

// 计算属性：格式化最后同步时间
const lastSyncTimeFormatted = computed(() => {
  if (!formData.value.lastSyncTime) {
    return '从未同步'
  }
  return new Date(formData.value.lastSyncTime).toLocaleString()
})

// 检测是否有变更
const hasChanges = computed(() => {
  return (
    formData.value.enabled !== savedSettings.value.enabled ||
    formData.value.githubToken !== savedSettings.value.githubToken ||
    formData.value.gistId !== savedSettings.value.gistId
  )
})


// 测试连接
const testConnection = async () => {
  if (!formData.value.githubToken) {
    showNotification('请输入 GitHub 令牌')
    return
  }

  testingConnection.value = true

  try {
    const isValid = await validateGitHubToken(formData.value.githubToken)
    if (isValid) {
      showNotification('连接成功！', 'success')
    } else {
      showNotification('连接失败，请检查令牌是否正确', 'error')
    }
  } catch (error: unknown) {
    const err = error as Error;
    showNotification('连接失败: ' + err.message, 'error')
  } finally {
    testingConnection.value = false
  }
}

// 获取表单数据
const getFormData = (): SyncSettings => {
  return { ...formData.value }
}

// 保存表单数据
const handleSave = () => {
  emit('save', { ...formData.value })
  // 更新已保存状态
  savedSettings.value = { ...formData.value }
  showNotification('数据同步设置已保存！')
}

// 重置表单
const handleReset = () => {
  formData.value = { ...props.defaultSettings }
}

// 暴露方法给父组件
defineExpose({
  save: handleSave,
  reset: handleReset,
  getFormData,
  hasChanges
})

// 监听 props 变化，更新表单数据和保存状态
watch(
  () => props.currentSettings,
  (newSettings) => {
    formData.value = {
      enabled: newSettings.enabled,
      githubToken: newSettings.githubToken,
      gistId: newSettings.gistId,
      lastSyncTime: newSettings.lastSyncTime
    }
    savedSettings.value = { ...newSettings }
  },
  { immediate: true, deep: true }
)
</script>