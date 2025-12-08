<template>
  <div class="project-list">
    <div
      v-for="project in projects"
      :key="project.id"
      class="project-card"
    >
      <h3 class="project-title">
        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener">
          {{ project.title }}
        </a>
        <span v-else>{{ project.title }}</span>
      </h3>
      <p class="project-desc">{{ project.description }}</p>
      <div class="project-meta">
        <span class="project-status">状态：{{ project.status }}</span>
        <span class="project-progress">进度：{{ project.progress }}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: project.progress + '%' }"></div>
      </div>
      <div class="project-tags" v-if="project.tech && project.tech.length">
        <span
          v-for="tag in project.tech"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 'blog',
    title: '个人技术博客与主页',
    description: '使用 VuePress 搭建的个人博客，用来记录技术文章、项目进度和个人思考。',
    status: '进行中',
    progress: 60,
    tech: ['VuePress', 'TypeScript', 'Node.js'],
    link: '/',
  },
  {
    id: 'flutter-log',
    title: 'Flutter 调试日志工具',
    description: '一个自定义的 Flutter 日志打印工具，支持不同级别的日志输出、颜色显示和堆栈跟踪。',
    status: '已完成',
    progress: 100,
    tech: ['Flutter', 'Dart'],
    link: '/blog/flutter/logDebug.html',
  },
]
</script>

<style scoped>
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.project-card {
  padding: 16px;
  border-radius: 12px;
  background: var(--vp-c-bg-alt);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.project-title {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.project-desc {
  margin: 0 0 8px;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.progress-bar-container {
  width: 100%;
  height: 6px;
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-bar {
  height: 100%;
  background: var(--vp-c-brand);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  font-size: 0.75rem;
}
</style>


