<template>
  <div class="space-y-3">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <span class="text-sm text-(--el-text-color-secondary)">
        已启用 {{ enabledCount }} / {{ SITES.length }}
      </span>
      <div class="ml-auto flex">
        <el-button
          text
          @click="setAll(true)"
        >
          全部启用
        </el-button>
        <el-button
          text
          @click="setAll(false)"
        >
          全部禁用
        </el-button>
      </div>
    </div>

    <ul class="divide-y divide-(--el-border-color-lighter) overflow-hidden rounded-lg border border-(--el-border-color-lighter)">
      <li
        v-for="site in SITES"
        :key="site.id"
      >
        <div
          class="flex min-h-11 cursor-pointer items-center hover:bg-(--el-fill-color-light)"
          @click="toggleExpanded(site.id)"
        >
          <button
            type="button"
            class="flex min-w-0 flex-1 cursor-pointer items-center gap-3 self-stretch px-4 py-1.5 text-left text-sm text-(--el-text-color-primary) focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-(--el-color-primary)"
            :aria-expanded="expanded.has(site.id)"
            :aria-controls="`preset-rules-${encodeURIComponent(site.id)}`"
          >
            <el-icon
              class="shrink-0 text-(--el-text-color-secondary) transition-transform duration-200"
              :class="{ 'rotate-90': expanded.has(site.id) }"
              aria-hidden="true"
            >
              <ArrowRight />
            </el-icon>
            <span class="break-words">{{ site.name }}</span>
          </button>
          <el-switch
            v-model="preset[site.id]"
            :aria-label="site.name"
            class="mx-4 shrink-0"
            @click.stop
          />
        </div>

        <!-- el-collapse-transition 把这一层的上下内边距清零后量 scrollHeight（不含边框），展开到这个高度为止。
             边框、内边距要写在里面一层，不然展开结束时会跳一下 -->
        <el-collapse-transition>
          <div
            v-show="expanded.has(site.id)"
            :id="`preset-rules-${encodeURIComponent(site.id)}`"
          >
            <div class="space-y-3 border-t border-(--el-border-color-lighter) bg-(--el-fill-color-light) px-4 py-3">
              <div
                v-for="section in sections"
                :key="section.field"
                class="flex flex-wrap gap-x-4 gap-y-1 text-xs"
              >
                <div class="text-(--el-text-color-secondary)">
                  {{ section.title }}
                </div>
                <div class="min-w-0 flex-[1_1_200px] space-y-1 font-mono text-(--el-text-color-regular)">
                  <div
                    v-for="(pattern, index) in site[section.field]"
                    :key="index"
                    class="break-all"
                  >
                    {{ pattern.source }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-collapse-transition>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { SITES } from '@/shared/sites'

// 站点 id → 是否启用，站点表里的每个站点都有值（见 settings.ts 的 createDefaultSettings）
const preset = defineModel<Record<string, boolean>>({ required: true })

const enabledCount = computed(() => SITES.filter(({ id }) => preset.value[id]).length)

const setAll = (enabled: boolean) => {
  for (const { id } of SITES) preset.value[id] = enabled
}

const expanded = ref(new Set<string>())

const toggleExpanded = (id: string) => {
  if (expanded.value.has(id)) expanded.value.delete(id)
  else expanded.value.add(id)
}

const sections = [
  { field: 'pages', title: '生效页面' },
  { field: 'links', title: '染色链接' },
] as const
</script>
