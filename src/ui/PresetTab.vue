<template>
  <div class="space-y-4">
    <div class="border-b pb-3 flex items-start justify-between">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          预设网站管理
        </h3>
        <p class="text-sm text-gray-600">
          控制脚本在哪些网站生效，点击网站名称展开查看详情
        </p>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 ml-6 flex items-center justify-between">
        <div class="text-right">
          <div class="text-sm text-gray-500">
            已启用
          </div>
          <div class="text-lg font-bold text-green-600">
            {{ enabledCount }} / {{ SITES.length }}
          </div>
        </div>
        <div class="flex space-x-2 ml-4">
          <button
            class="px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
            @click="setAll(true)"
          >
            全部启用
          </button>
          <button
            class="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            @click="setAll(false)"
          >
            全部禁用
          </button>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <div
        v-for="site in SITES"
        :key="site.id"
        class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div class="p-5 flex items-center justify-between">
          <div
            class="flex-1 cursor-pointer"
            @click="toggleExpanded(site.id)"
          >
            <div class="flex items-center space-x-3">
              <h4 class="font-semibold text-gray-900 text-lg">
                {{ site.name }}
              </h4>
              <el-icon
                class="transition-all duration-200"
                :class="expanded.has(site.id) ? 'rotate-90 text-blue-500' : 'text-gray-400'"
              >
                <ArrowRight />
              </el-icon>
            </div>
            <p class="text-sm text-gray-500 mt-1">
              {{ site.pages.length }} 种生效范围 · {{ site.links.length }} 种可染色链接
            </p>
          </div>
          <el-switch
            v-model="preset[site.id]"
            class="ml-4"
          />
        </div>

        <!-- el-collapse-transition 把这一层的上下内边距清零后量 scrollHeight（不含边框），展开到这个高度为止。
             边框、内边距要写在里面一层，不然展开结束时会跳一下 -->
        <el-collapse-transition>
          <div v-show="expanded.has(site.id)">
            <div class="border-t border-gray-100 px-5 py-3 bg-gray-50/50 rounded-b-xl space-y-3">
              <div
                v-for="section in sections"
                :key="section.field"
                class="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div class="flex items-center space-x-2 mb-3">
                  <div
                    class="w-2 h-2 rounded-full"
                    :class="section.dot"
                  />
                  <span class="font-medium text-gray-900 text-sm">{{ section.title }}</span>
                  <span
                    class="text-xs px-2 py-1 rounded-full"
                    :class="section.badge"
                  >
                    {{ site[section.field].length }} 个
                  </span>
                </div>
                <div class="space-y-2 max-h-32 overflow-y-auto">
                  <div
                    v-for="(pattern, index) in site[section.field]"
                    :key="index"
                    class="text-xs text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-md border border-gray-200 break-all hover:bg-gray-100 transition-colors"
                  >
                    {{ pattern.source }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
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

// 展开了详情的站点
const expanded = ref(new Set<string>())

const toggleExpanded = (id: string) => {
  if (expanded.value.has(id)) expanded.value.delete(id)
  else expanded.value.add(id)
}

// 展开后列出站点的两组规则：在哪些页面上生效、染哪些链接
const sections = [
  { field: 'pages', title: '在下面这些页面中生效', dot: 'bg-green-500', badge: 'bg-green-100 text-green-800' },
  { field: 'links', title: '对下面这些链接染色', dot: 'bg-purple-500', badge: 'bg-purple-100 text-purple-800' },
] as const
</script>
