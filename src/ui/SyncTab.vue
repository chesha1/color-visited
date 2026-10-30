<template>
  <div class="space-y-4">
    <div class="divide-y divide-(--el-border-color-lighter) rounded-lg border border-(--el-border-color-lighter)">
      <SettingRow title="启用数据同步">
        <template #description>
          通过 GitHub Gist 在多台设备间同步；加载页面时自动同步，{{ autoSyncMinutes }} 分钟内最多一次
        </template>
        <el-switch
          v-model="sync.enabled"
          aria-label="启用数据同步"
        />
      </SettingRow>

      <SettingRow title="GitHub 个人访问令牌">
        <template #description>
          只要 gist 权限，<a
            href="https://github.com/settings/tokens/new?scopes=gist&description=color-visited"
            target="_blank"
            rel="noopener noreferrer"
            class="text-(--el-color-primary) hover:underline"
          >去 GitHub 创建 ↗</a>
        </template>
        <el-input
          v-model="sync.githubToken"
          type="password"
          placeholder="请输入 GitHub Personal Access Token"
          aria-label="GitHub 个人访问令牌"
          show-password
          :disabled="!sync.enabled"
          class="w-[320px] max-w-full"
        />
      </SettingRow>

      <SettingRow title="Gist ID">
        <template #description>
          新建一个专用的 Gist，文件名和内容随意，首次同步时内容会被替换为同步数据
        </template>
        <el-input
          v-model="sync.gistId"
          placeholder="请输入 Gist ID，或直接粘贴 Gist 网址"
          aria-label="Gist ID"
          :disabled="!sync.enabled"
          class="w-[320px] max-w-full"
          @blur="sync.gistId = normalizeGistId(sync.gistId)"
        />
      </SettingRow>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-3">
      <span class="text-xs text-(--el-text-color-secondary)">
        上次同步：{{ lastSyncTime ? new Date(lastSyncTime).toLocaleString() : '从未同步' }}
      </span>
      <div class="ml-auto flex shrink-0">
        <el-button
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
import SettingRow from '@/ui/SettingRow.vue'

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

// 立即同步：不受自动同步间隔的限制，用存储里的同步设置马上同步一次，结果由通知提示，上次同步时间会自己刷新。
// 同步设置有没保存的修改时不能点（没改过时，开关的状态就是存储里的），免得以为是按刚填的令牌或 Gist ID 同步的
const syncing = ref(false)
const syncNow = async () => {
  syncing.value = true
  await runSync({ manual: true })
  syncing.value = false
}

// 上次同步时间不是设置：直接读存储，并跟着存储变化，任何标签页同步完都会刷新显示
const lastSyncTime = ref(getLastSyncTime())
onUnmounted(onLastSyncTimeChange((time) => {
  lastSyncTime.value = time
}))
</script>
