<template>
  <div class="space-y-6 h-full overflow-y-auto">
    <!-- 头部区域 -->
    <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">预设网站管理</h3>
          <p class="text-sm text-gray-600">管理支持的网站和链接匹配规则，控制脚本在哪些网站生效</p>
        </div>
        <div class="flex items-center space-x-4">
          <div class="text-right">
            <div class="text-sm text-gray-500">已启用</div>
            <div class="text-lg font-bold text-green-600">
              {{ Object.values(presetStates).filter(Boolean).length }} / {{ Object.keys(presetStates).length }}
            </div>
          </div>
          <div class="flex space-x-2">
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
    
    <div class="space-y-4">
      <div v-for="(rule, siteName) in presetRules" :key="siteName" 
           class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <!-- 卡片头部 -->
        <div class="p-5">
          <div class="flex items-center justify-between">
            <!-- 左侧：图标 + 可点击的网站信息区域 -->
            <div class="flex items-center space-x-4 flex-1 cursor-pointer" @click="toggleExpanded(siteName)">
              <!-- 网站图标占位符 -->
              <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-blue-500 to-purple-600">
                {{ siteName.charAt(0).toUpperCase() }}
              </div>
              
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
                  {{ rule.pages.length }} 个页面规则 · {{ rule.patterns.length }} 个链接模式
                </p>
                <div v-if="rule.description" class="text-xs text-gray-400 mt-1">
                  {{ rule.description }}
                </div>
              </div>
            </div>
            
            <!-- 右侧：独立的开关控制区 -->
            <div class="flex items-center ml-4" @click.stop>
              <el-switch
                v-model="presetStates[siteName]"
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
            <div class="px-5 py-4 bg-gray-50/50 rounded-b-xl space-y-4">
              <!-- 左侧对齐：与网站信息文本对齐，需要考虑图标宽度(40px) + 间距(16px) = 56px -->
              <div class="ml-14">
                <div v-if="rule.description" class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div class="flex items-start space-x-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p class="text-sm text-blue-800">{{ rule.description }}</p>
                  </div>
                </div>
                
                <div v-if="rule.pages.length > 0" class="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                  <div class="flex items-center space-x-2 mb-3">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="font-medium text-gray-900 text-sm">页面规则</span>
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
                    <span class="font-medium text-gray-900 text-sm">链接模式</span>
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
import { ref, onMounted } from 'vue'
import { PRESET_RULES } from '@/core/config'
import type { PresetRules } from '@/types'
import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client'

const presetRules: PresetRules = PRESET_RULES
const expandedSites = ref<Set<string>>(new Set())

// 预设状态管理
const presetStates = ref<Record<string, boolean>>({})

// 初始化预设状态 - 默认全部启用
const initializePresetStates = () => {
  const states: Record<string, boolean> = {}
  Object.keys(presetRules).forEach(siteName => {
    states[siteName] = true // 默认启用
  })
  presetStates.value = states
  
  // 从 GM storage 中加载已保存的状态
  if (typeof GM_getValue !== 'undefined') {
    const savedStates = GM_getValue('preset_states', {}) as Record<string, boolean>
    Object.keys(states).forEach(siteName => {
      if (savedStates.hasOwnProperty(siteName)) {
        states[siteName] = savedStates[siteName]
      }
    })
    presetStates.value = states
  }
}

// 更新预设状态
const updatePresetState = (siteName: string, enabled: boolean | string | number) => {
  const isEnabled = Boolean(enabled)
  presetStates.value[siteName] = isEnabled
  
  // 保存到 GM storage
  if (typeof GM_setValue !== 'undefined') {
    GM_setValue('preset_states', presetStates.value)
  }
  
  // 触发事件通知主脚本更新配置
  if (typeof window !== 'undefined' && window.dispatchEvent) {
    window.dispatchEvent(new CustomEvent('preset-states-updated', {
      detail: { presetStates: presetStates.value }
    }))
  }
}

// 批量切换所有预设状态
const toggleAllPresets = (enabled: boolean) => {
  Object.keys(presetStates.value).forEach(siteName => {
    presetStates.value[siteName] = enabled
  })
  
  // 保存到 GM storage
  if (typeof GM_setValue !== 'undefined') {
    GM_setValue('preset_states', presetStates.value)
  }
  
  // 触发事件通知主脚本更新配置
  if (typeof window !== 'undefined' && window.dispatchEvent) {
    window.dispatchEvent(new CustomEvent('preset-states-updated', {
      detail: { presetStates: presetStates.value }
    }))
  }
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

// 组件挂载时初始化
onMounted(() => {
  initializePresetStates()
})
</script>