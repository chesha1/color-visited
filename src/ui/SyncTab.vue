<template>
  <div class="space-y-6">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">
        数据同步设置
      </h3>
      <p class="text-sm text-gray-600">
        通过 GitHub Gist 同步已访问链接数据，实现多设备同步
      </p>
    </div>

    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900">启用数据同步</label>
          <p class="text-sm text-gray-500">
            开启后加载页面时自动同步，{{ autoSyncMinutes }} 分钟内最多一次
          </p>
        </div>
        <el-switch v-model="sync.enabled" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-900 mb-2">
          GitHub 个人访问令牌
        </label>
        <el-input
          v-model="sync.githubToken"
          type="password"
          placeholder="请输入 GitHub Personal Access Token"
          show-password
          :disabled="!sync.enabled"
        />
        <p class="text-xs text-gray-500 mt-1">
          到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建，权限选 "gist"
        </p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-900 mb-2">
          Gist ID
        </label>
        <el-input
          v-model="sync.gistId"
          placeholder="请输入 Gist ID，或直接粘贴 Gist 网址"
          :disabled="!sync.enabled"
          @blur="sync.gistId = normalizeGistId(sync.gistId)"
        />
        <p class="text-xs text-gray-500 mt-1">
          新建一个专用的 Gist，文件名和内容随意，首次同步时内容会被替换为同步数据
        </p>
      </div>

      <el-card shadow="never">
        <template #header>
          <span class="text-sm font-medium text-gray-800">同步状态</span>
        </template>
        <div class="text-sm flex justify-between">
          <span class="text-gray-600">最后同步时间:</span>
          <span class="text-gray-900">{{ lastSyncTime ? new Date(lastSyncTime).toLocaleString() : '从未同步' }}</span>
        </div>
      </el-card>

      <div class="flex justify-center pt-2">
        <el-button
          type="primary"
          :loading="testingConnection"
          :disabled="!sync.enabled || !sync.githubToken"
          @click="checkConnection"
        >
          {{ testingConnection ? '测试中...' : '测试连接' }}
        </el-button>
        <el-button
          :loading="syncing"
          :disabled="!sync.enabled || changed"
          @click="syncNow"
        >
          {{ syncing ? '同步中...' : '立即同步' }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import type { SyncSettings } from '@/core/settings'
import { getLastSyncTime, onLastSyncTimeChange } from '@/core/storage'
import { AUTO_SYNC_INTERVAL, normalizeGistId, runSync, testConnection } from '@/core/sync'
import { notify } from '@/ui/notify'

defineProps<{
  /** 同步设置改了，还没保存 */
  changed: boolean
}>()

const sync = defineModel<SyncSettings>({ required: true })

const autoSyncMinutes = AUTO_SYNC_INTERVAL / 60000

// 测试连接用输入框里的值，不用先保存
const testingConnection = ref(false)
const checkConnection = async () => {
  testingConnection.value = true
  const { level, message } = await testConnection(sync.value.githubToken, sync.value.gistId)
  notify(message, level)
  testingConnection.value = false
}

// 立即同步：不受自动同步间隔的限制，用存储里的同步设置马上同步一次，结果由通知提示，最后同步时间会自己刷新。
// 同步设置有没保存的修改时不能点（没改过时，开关的状态就是存储里的），免得以为是按刚填的令牌或 Gist ID 同步的
const syncing = ref(false)
const syncNow = async () => {
  syncing.value = true
  await runSync({ manual: true })
  syncing.value = false
}

// 最后同步时间不是设置：直接读存储，并跟着存储变化，任何标签页同步完都会刷新显示
const lastSyncTime = ref(getLastSyncTime())
onUnmounted(onLastSyncTimeChange((time) => {
  lastSyncTime.value = time
}))
</script>
