<template>
  <!-- 每次打开都新建一个应用，关闭动画结束后整个卸载（见 dialog.ts），所以一直是显示的。
       只有右上角的关闭按钮会关，没保存的修改跟着丢掉：点背景不关；按 Esc 也不关，录快捷键时要能录到 Esc -->
  <el-dialog
    :model-value="true"
    title="color-visited 设置"
    width="min(680px, 100vw - 32px)"
    align-center
    class="flex max-h-[calc(100vh-32px)] flex-col rounded-lg"
    header-class="shrink-0"
    body-class="flex min-h-0 flex-col"
    footer-class="shrink-0"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @closed="emit('closed')"
  >
    <!-- 每个 tab 编辑设置的一个分组，name 就是分组名 -->
    <el-tabs
      v-model="tab"
      class="min-h-0 [&>.el-tabs\_\_content]:h-[400px] [&>.el-tabs\_\_header]:shrink-0"
    >
      <el-tab-pane
        name="general"
        class="h-full p-6 overflow-y-auto [scrollbar-width:thin]"
      >
        <template #label>
          <span class="flex items-center gap-2">
            常规设置
            <span
              v-if="changes.general"
              class="size-1.5 rounded-full bg-(--el-color-primary)"
              role="img"
              aria-label="有未保存的修改"
            />
          </span>
        </template>
        <GeneralTab
          v-model="draft.general"
          :saved-expiration-time="saved.general.expirationTime"
        />
      </el-tab-pane>
      <el-tab-pane
        name="preset"
        class="h-full p-6 overflow-y-auto [scrollbar-width:thin]"
      >
        <template #label>
          <span class="flex items-center gap-2">
            预设网站
            <span
              v-if="changes.preset"
              class="size-1.5 rounded-full bg-(--el-color-primary)"
              role="img"
              aria-label="有未保存的修改"
            />
          </span>
        </template>
        <PresetTab v-model="draft.preset" />
      </el-tab-pane>
      <el-tab-pane
        name="batch"
        class="h-full p-6 overflow-y-auto [scrollbar-width:thin]"
      >
        <template #label>
          <span class="flex items-center gap-2">
            快捷键
            <span
              v-if="changes.batch"
              class="size-1.5 rounded-full bg-(--el-color-primary)"
              role="img"
              aria-label="有未保存的修改"
            />
          </span>
        </template>
        <ShortcutTab
          v-model="draft.batch"
          :recording="tab === 'batch'"
        />
      </el-tab-pane>
      <el-tab-pane
        name="sync"
        class="h-full p-6 overflow-y-auto [scrollbar-width:thin]"
      >
        <template #label>
          <span class="flex items-center gap-2">
            数据同步
            <span
              v-if="changes.sync"
              class="size-1.5 rounded-full bg-(--el-color-primary)"
              role="img"
              aria-label="有未保存的修改"
            />
          </span>
        </template>
        <SyncTab
          v-model="draft.sync"
          :changed="!!changes.sync"
        />
      </el-tab-pane>
    </el-tabs>

    <template #footer>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <el-button
          text
          @click="resetGroup(draft, tab)"
        >
          恢复本页默认值
        </el-button>
        <div class="ml-auto flex items-center gap-3">
          <span
            v-if="hasChanges"
            class="text-xs text-(--el-text-color-secondary)"
            role="status"
          >有未保存的修改</span>
          <el-button
            type="primary"
            :disabled="!hasChanges"
            @click="save"
          >
            保存
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import { diffSettings, getSettings, saveSettings, type Settings } from '@/core/settings'
import { resetGroup } from '@/ui/draft'
import GeneralTab from '@/ui/GeneralTab.vue'
import PresetTab from '@/ui/PresetTab.vue'
import ShortcutTab from '@/ui/ShortcutTab.vue'
import SyncTab from '@/ui/SyncTab.vue'

const emit = defineEmits<{ closed: [] }>()

const saved = shallowRef(getSettings())
const draft = ref(getSettings())
const changes = computed(() => diffSettings(saved.value, draft.value))
const hasChanges = computed(() => Object.keys(changes.value).length > 0)

const tab = ref<keyof Settings>('general')

// 保存后对话框不关，显示存储里的最新值
const save = () => {
  saveSettings(changes.value)
  saved.value = getSettings()
  draft.value = getSettings()
}
</script>
