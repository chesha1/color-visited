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
          <p class="text-sm text-gray-500">开启后加载页面时自动同步，{{ autoSyncMinutes }} 分钟内最多一次</p>
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
          placeholder="请输入 Gist ID，或直接粘贴 Gist 网址"
          :disabled="!formData.enabled"
        />
        <p class="text-xs text-gray-500 mt-1">
          新建一个 Gist，文件名和内容随意，首次同步时内容会被替换为同步数据
        </p>
      </div>

      <!-- 帮助说明 -->
      <el-card class="bg-blue-50" shadow="never">
        <template #header>
          <span class="text-sm font-medium text-blue-800">设置步骤</span>
        </template>
        <ol class="text-xs text-blue-700 space-y-1 list-decimal list-inside">
          <li>到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建令牌，权限选择 "gist"</li>
          <li>新建一个专用的 Gist（文件名和内容随意，首次同步时会被替换为同步数据），复制网址中的 ID 部分，或直接粘贴整个网址</li>
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

      <!-- 测试连接、立即同步按钮 -->
      <div class="flex justify-center pt-2">
        <el-button
          type="primary"
          :loading="testingConnection"
          :disabled="!formData.enabled || !formData.githubToken"
          @click="checkConnection"
        >
          {{ testingConnection ? '测试中...' : '测试连接' }}
        </el-button>
        <el-button
          :loading="syncing"
          :disabled="!savedSettings.enabled || hasChanges"
          @click="syncNow"
        >
          {{ syncing ? '同步中...' : '立即同步' }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { changedFields, createDefaultSettings, type SyncSettings } from '@/core/settings'
import { eventBus } from '@/core/eventBus'
import { getLastSyncTime, onLastSyncTimeChange } from '@/core/storage'
import { AUTO_SYNC_INTERVAL, normalizeGistId, testConnection } from '@/core/sync'
import { notify } from '@/ui/notify'

interface Props {
  currentSettings: SyncSettings
}

interface Emits {
  (e: 'save', settings: Partial<SyncSettings>): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 表单数据
const formData = ref<SyncSettings>({
  enabled: props.currentSettings.enabled,
  githubToken: props.currentSettings.githubToken,
  gistId: props.currentSettings.gistId,
})
// 保存的状态 - 用于比较是否有变更
const savedSettings = ref<SyncSettings>({ ...props.currentSettings })

// 测试连接状态
const testingConnection = ref(false)

const autoSyncMinutes = AUTO_SYNC_INTERVAL / 60000

// 立即同步：不受自动同步间隔的限制，用已保存的同步设置马上同步一次，结果由通知提示，最后同步时间会自己刷新。
// 表单里有没保存的修改时不能点，免得以为是按刚填的令牌或 Gist ID 同步的
const syncing = ref(false)
const syncNow = () => {
  syncing.value = true
  eventBus.emit('sync:request', {
    onSettled: () => {
      syncing.value = false
    },
  })
}

// 最后同步时间不是表单的一部分：直接读存储，并跟着存储变化，任何标签页同步完都会刷新显示
const lastSyncTime = ref(getLastSyncTime())
onUnmounted(onLastSyncTimeChange((time) => {
  lastSyncTime.value = time
}))

// 计算属性：格式化最后同步时间
const lastSyncTimeFormatted = computed(() => {
  if (!lastSyncTime.value) {
    return '从未同步'
  }
  return new Date(lastSyncTime.value).toLocaleString()
})

// 检测是否有变更
const hasChanges = computed(() => {
  return (
    formData.value.enabled !== savedSettings.value.enabled
    || formData.value.githubToken !== savedSettings.value.githubToken
    || formData.value.gistId !== savedSettings.value.gistId
  )
})

// 测试连接
const checkConnection = async () => {
  if (!formData.value.githubToken) {
    notify('请输入 GitHub 令牌', 'warning')
    return
  }

  testingConnection.value = true

  try {
    const result = await testConnection(formData.value.githubToken, formData.value.gistId)
    notify(result.message, result.level)
  } catch (error: unknown) {
    const err = error as Error
    notify('连接失败: ' + err.message, 'error')
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
  // 保存前把 Gist 网址归一化成纯 ID，并回填到表单
  formData.value.gistId = normalizeGistId(formData.value.gistId)
  emit('save', changedFields(savedSettings.value, formData.value))
  // 更新已保存状态
  savedSettings.value = { ...formData.value }
}

// 重置表单
const handleReset = () => {
  formData.value = createDefaultSettings().sync
}

// 暴露方法给父组件
defineExpose({
  save: handleSave,
  reset: handleReset,
  getFormData,
  hasChanges,
})

// 监听 props 变化，更新表单数据和保存状态
watch(
  () => props.currentSettings,
  (newSettings) => {
    formData.value = {
      enabled: newSettings.enabled,
      githubToken: newSettings.githubToken,
      gistId: newSettings.gistId,
    }
    savedSettings.value = { ...newSettings }
  },
  { immediate: true, deep: true },
)
</script>
