<template>
  <div class="space-y-6 h-full overflow-y-auto">
    <div class="border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">预设网站</h3>
      <p class="text-sm text-gray-600">管理支持的网站和链接模式</p>
    </div>
    
    <div class="space-y-3">
      <div v-for="(rule, siteName) in presetRules" :key="siteName" 
           class="border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
        <div class="p-4 cursor-pointer" @click="toggleExpanded(siteName)">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <h4 class="font-medium text-gray-900 capitalize">{{ siteName }}</h4>
              <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {{ rule.pages.length + rule.patterns.length }} 条规则
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <el-icon class="text-gray-400 transition-transform duration-200" 
                       :class="{ 'rotate-90': expandedSites.has(siteName) }">
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </div>
        
        <el-collapse-transition>
          <div v-show="expandedSites.has(siteName)" class="px-4 pb-4 border-t border-gray-100">
            <div class="space-y-3 text-sm pt-3">
              <div v-if="rule.description" class="text-gray-600 text-xs bg-blue-50 p-2 rounded">
                {{ rule.description }}
              </div>
              
              <div v-if="rule.pages.length > 0">
                <span class="font-medium text-gray-700 text-xs">页面规则（{{ rule.pages.length }}）：</span>
                <div class="mt-1 space-y-1 max-h-32 overflow-y-auto">
                  <div v-for="(page, index) in rule.pages" :key="index" 
                       class="text-xs text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded break-all">
                    {{ formatRegex(page) }}
                  </div>
                </div>
              </div>
              
              <div v-if="rule.patterns.length > 0">
                <span class="font-medium text-gray-700 text-xs">链接模式（{{ rule.patterns.length }}）：</span>
                <div class="mt-1 space-y-1 max-h-32 overflow-y-auto">
                  <div v-for="(pattern, index) in rule.patterns" :key="index" 
                       class="text-xs text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded break-all">
                    {{ formatRegex(pattern) }}
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
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { PRESET_RULES } from '@/core/config'
import type { PresetRules } from '@/types'

const presetRules: PresetRules = PRESET_RULES
const expandedSites = ref<Set<string>>(new Set())

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
</script>