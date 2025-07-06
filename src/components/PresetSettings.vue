<template>
  <div class="tab-content">
    <div class="content-header">
      <h3>预设网站</h3>
      <p class="content-desc">管理支持的网站和链接模式</p>
    </div>
    <div class="placeholder-container">
      <div class="placeholder-icon">⚙️</div>
      <p class="placeholder">预设网站功能正在开发中...</p>
      <p class="placeholder-sub">即将支持自定义网站规则配置</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.tab-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 内容头部 */
.content-header {
  margin-bottom: 32px;
}

.content-header h3 {
  margin: 0 0 8px 0;
  color: #1f2937;
  font-size: 24px;
  font-weight: 600;
}

.content-desc {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
}

/* 占位符样式 */
.placeholder-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;
}

.placeholder-icon {
  font-size: 48px;
  color: #d1d5db;
  margin-bottom: 16px;
  line-height: 1;
}

.placeholder {
  color: #6b7280;
  font-size: 16px;
  margin: 0 0 8px 0;
  font-weight: 500;
}

.placeholder-sub {
  color: #9ca3af;
  font-size: 14px;
  margin: 0;
}
</style>