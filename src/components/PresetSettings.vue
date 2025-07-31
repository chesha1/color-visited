<template>
  <div class="space-y-4 h-full overflow-y-auto">
    <!-- 头部区域和统计操作区域 -->
    <div class="border-b pb-3">
      <div class="flex items-start justify-between">
        <!-- 左侧头部区域 -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">预设网站管理</h3>
          <p class="text-sm text-gray-600">控制脚本在哪些网站生效，点击网站名称展开查看详情</p>
        </div>
        
        <!-- 右侧统计和操作区域 -->
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 ml-6">
          <div class="flex items-center justify-between">
            <div class="text-right">
              <div class="text-sm text-gray-500">已启用</div>
              <div class="text-lg font-bold text-green-600">
                {{ Object.values(presetSettings).filter(Boolean).length }} / {{ Object.keys(presetSettings).length }}
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button @click="toggleAllPresets(true)" 
                      class="px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
                全部启用
              </button>
              <button @click="toggleAllPresets(false)" 
                      class="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                全部禁用
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="space-y-2">
      <div v-for="(rule, siteName) in presetRules" :key="siteName" 
           class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <!-- 卡片头部 -->
        <div class="p-5">
          <div class="flex items-center justify-between">
            <!-- 左侧：可点击的网站信息区域 -->
            <div class="flex items-center flex-1 cursor-pointer" @click="toggleExpanded(siteName)">
              <!-- 网站信息 -->
              <div class="flex-1">
                <div class="flex items-center space-x-3">
                  <h4 class="font-semibold text-gray-900 capitalize text-lg">{{ siteName }}</h4>
                  <el-icon class="text-gray-400 transition-all duration-200" 
                           :class="{ 'rotate-90 text-blue-500': expandedSites.has(siteName) }">
                    <ArrowRight />
                  </el-icon>
                </div>
                <p class="text-sm text-gray-500 mt-1">
                  {{ rule.pages.length }} 种生效范围 · {{ rule.patterns.length }} 种可染色链接
                </p>
                <div v-if="rule.description" class="text-xs text-gray-400 mt-1">
                  {{ rule.description }}
                </div>
              </div>
            </div>
            
            <!-- 右侧：独立的开关控制区 -->
            <div class="flex items-center ml-4" @click.stop>
              <el-switch
                v-model="presetSettings[siteName]"
                @change="updatePresetState(siteName, $event)"
                size="default"
                :active-color="'#10b981'"
                :inactive-color="'#d1d5db'">
              </el-switch>
            </div>
          </div>
        </div>
        
        <!-- 展开内容区域 -->
        <el-collapse-transition>
          <div v-show="expandedSites.has(siteName)" class="border-t border-gray-100">
            <div class="px-5 py-3 bg-gray-50/50 rounded-b-xl space-y-3">
              <!-- 不需要左边距了，因为删除了图标 -->
              <div>
                <div v-if="rule.description" class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div class="flex items-start space-x-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p class="text-sm text-blue-800">{{ rule.description }}</p>
                  </div>
                </div>
                
                <div v-if="rule.pages.length > 0" class="bg-white rounded-lg border border-gray-200 p-4 mb-3">
                  <div class="flex items-center space-x-2 mb-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="font-medium text-gray-900 text-sm">在下面这些页面中生效</span>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {{ rule.pages.length }} 个
                    </span>
                  </div>
                  <div class="space-y-2 max-h-32 overflow-y-auto">
                    <div v-for="(page, index) in rule.pages" :key="index" 
                         class="text-xs text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-md border border-gray-200 break-all hover:bg-gray-100 transition-colors">
                      {{ formatRegex(page) }}
                    </div>
                  </div>
                </div>
                
                <div v-if="rule.patterns.length > 0" class="bg-white rounded-lg border border-gray-200 p-4">
                  <div class="flex items-center space-x-2 mb-3">
                    <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span class="font-medium text-gray-900 text-sm">对下面这些链接染色</span>
                    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {{ rule.patterns.length }} 个
                    </span>
                  </div>
                  <div class="space-y-2 max-h-32 overflow-y-auto">
                    <div v-for="(pattern, index) in rule.patterns" :key="index" 
                         class="text-xs text-gray-700 font-mono bg-gray-50 px-3 py-2 rounded-md border border-gray-200 break-all hover:bg-gray-100 transition-colors">
                      {{ formatRegex(pattern) }}
                    </div>
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
import { ref, computed, watch } from 'vue'
import { PRESET_RULES } from '@/core/config'
import type { PresetRules } from '@/types'

interface Props {
  currentPresetSettings: Record<string, boolean>
}

interface Emits {
  (e: 'save', states: Record<string, boolean>): void
  (e: 'reset'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const presetRules: PresetRules = PRESET_RULES
const expandedSites = ref<Set<string>>(new Set())

// 预设状态管理 - 使用本地状态，不立即保存
const presetSettings = ref<Record<string, boolean>>({ ...props.currentPresetSettings })
// 保存的状态 - 用于比较是否有变更
const savedPresetSettings = ref<Record<string, boolean>>({ ...props.currentPresetSettings })

// 检测是否有改动
const hasChanges = computed(() => {
  return JSON.stringify(presetSettings.value) !== JSON.stringify(savedPresetSettings.value)
})


// 更新预设状态 - 只更新本地状态，不立即保存
const updatePresetState = (siteName: string, enabled: boolean | string | number) => {
  const isEnabled = Boolean(enabled)
  presetSettings.value[siteName] = isEnabled
}

// 批量切换所有预设状态 - 只更新本地状态，不立即保存
const toggleAllPresets = (enabled: boolean) => {
  Object.keys(presetSettings.value).forEach(siteName => {
    presetSettings.value[siteName] = enabled
  })
}

// 保存设置
const handleSave = () => {
  emit('save', { ...presetSettings.value })
  // 更新保存的状态
  savedPresetSettings.value = { ...presetSettings.value }
}

// 重置为默认值，但仅更新界面，真正保存需用户点击「保存设置」
const handleReset = () => {
  // 生成默认预设状态（全部启用）
  const defaultStates: Record<string, boolean> = {};
  Object.keys(PRESET_RULES).forEach(key => {
    defaultStates[key] = true;
  });
  presetSettings.value = { ...defaultStates }
}

// 切换展开状态
const toggleExpanded = (siteName: string) => {
  if (expandedSites.value.has(siteName)) {
    expandedSites.value.delete(siteName)
  } else {
    expandedSites.value.add(siteName)
  }
}

// 格式化正则表达式显示
const formatRegex = (regex: string | RegExp): string => {
  if (regex instanceof RegExp) {
    return regex.source
  }
  return regex
}

// 监听 props.currentPresetSettings 变化，同步更新 presetSettings 和 savedPresetSettings
watch(() => props.currentPresetSettings, (newStates) => {
  presetSettings.value = { ...newStates }
  savedPresetSettings.value = { ...newStates }
}, { immediate: true, deep: true })

// 暴露给父组件调用的方法
defineExpose({
  save: handleSave,
  reset: handleReset,
  getFormData: () => ({ ...presetSettings.value }),
  hasChanges
})
</script>