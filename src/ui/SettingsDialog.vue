<template>
  <!-- 每次打开都新建一个应用，关闭动画结束后整个卸载（见 dialog.ts），所以一直是显示的。
       只有右上角的关闭按钮会关，没保存的修改跟着丢掉：点背景不关；按 Esc 也不关，录快捷键时要能录到 Esc -->
  <el-dialog
    :model-value="true"
    width="900px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @closed="emit('closed')"
  >
    <template #header>
      <span class="text-lg font-semibold">设置</span>
    </template>
    <!-- 每个 tab 编辑设置的一个分组，name 就是分组名 -->
    <el-tabs
      v-model="tab"
      tab-position="left"
      class="h-[400px]"
    >
      <el-tab-pane
        label="常规设置"
        name="general"
        class="h-full p-6 overflow-y-auto"
      >
        <GeneralTab
          v-model="draft.general"
          :saved-expiration-time="saved.general.expirationTime"
        />
      </el-tab-pane>
      <el-tab-pane
        label="预设网站"
        name="preset"
        class="h-full p-6 overflow-y-auto"
      >
        <PresetTab v-model="draft.preset" />
      </el-tab-pane>
      <el-tab-pane
        label="批量染色快捷键"
        name="batch"
        class="h-full p-6 overflow-y-auto"
      >
        <ShortcutTab
          v-model="draft.batch"
          :recording="tab === 'batch'"
          :changed="!!changes.batch"
        />
      </el-tab-pane>
      <el-tab-pane
        label="数据同步"
        name="sync"
        class="h-full p-6 overflow-y-auto"
      >
        <SyncTab
          v-model="draft.sync"
          :changed="!!changes.sync"
        />
      </el-tab-pane>
    </el-tabs>

    <template #footer>
      <div class="flex justify-end gap-3">
        <el-button
          size="large"
          plain
          @click="resetGroup(draft, tab)"
        >
          重置为默认
        </el-button>
        <el-button
          type="primary"
          size="large"
          :disabled="Object.keys(changes).length === 0"
          @click="save"
        >
          保存设置
        </el-button>
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

// 快照是打开时（或上次保存后）存储里的设置，draft 是各个 tab 编辑的副本。
// 两者各取一次 getSettings()，每次取到的都是新建的对象，改副本不会改到快照。
// 有没有改动、保存什么，都只看两者的差别
const saved = shallowRef(getSettings())
const draft = ref(getSettings())
const changes = computed(() => diffSettings(saved.value, draft.value))

const tab = ref<keyof Settings>('general')

// 所有 tab 的改动一起保存。只交出改过的字段，对话框开着时其他标签页改的别的字段不会被冲掉。
// 保存后对话框不关，显示存储里的最新值
const save = () => {
  saveSettings(changes.value)
  saved.value = getSettings()
  draft.value = getSettings()
}
</script>
