<template>
  <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3">
    <div class="min-w-0 flex-[1_1_200px] space-y-1">
      <div class="text-sm text-(--el-text-color-primary)">
        {{ title }}
      </div>
      <div class="text-xs text-(--el-text-color-secondary)">
        <slot name="description" />
      </div>
    </div>
    <div class="min-w-0 max-w-full shrink-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
