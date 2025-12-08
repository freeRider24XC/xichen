---
title: 内容维护与发布流程
author:
createTime: 2025/12/04 15:11:52
permalink: /article/fv3cpu63/
---

# 内容维护与发布流程

本文档提供快速的内容更新指南，详细维护说明请参考 [维护指南](./MAINTENANCE.md)。

## 快速开始

### 发布新文章

1. **创建文章文件**
   ```bash
   cp docs/templates/post.md docs/blog/{分类}/{文章名}.md
   ```

2. **填写 Frontmatter**
   ```yaml
   ---
   title: 文章标题
   date: 2025-01-15
   tags: [标签1, 标签2]
   permalink: /article/unique-id/
   summary: 文章摘要
   ---
   ```

3. **编写内容**
   - 按「背景 - 正文 - 总结」结构
   - 使用 Markdown 语法
   - 添加代码示例时使用语法高亮

4. **更新分类索引**
   - 编辑 `docs/blog/{分类}/README.md`
   - 添加新文章链接

5. **本地预览**
   ```bash
   pnpm docs:dev
   ```

6. **提交发布**
   ```bash
   git add .
   git commit -m "docs: 添加新文章《文章标题》"
   git push origin main
   ```

### 更新项目进度

编辑 `docs/.vuepress/components/ProjectList.vue`，更新项目数据：

```vue
{
  id: 'project-id',
  title: '项目名称',
  status: '进行中',
  progress: 75,
  // ...
}
```

## 提交与发布

1. 本地运行 `pnpm docs:dev` 预览效果
2. 使用 Git 提交到 `main` 分支
3. 推送后，GitHub Actions 会自动构建并部署

## 定期维护建议

- **每周**: 检查部署状态，更新项目进度
- **每月**: 至少更新 1 篇技术文章或项目进展
- **每季度**: 回顾导航、侧边栏与项目列表是否需要调整

## 详细文档

- [完整维护指南](./MAINTENANCE.md) - 详细的技术维护和内容管理指南
- [内容结构说明](./STRUCTURE.md) - 项目结构和组织规则



