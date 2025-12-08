# 博客维护指南

本文档提供博客的日常维护、内容更新和技术管理的完整指南。

## 📋 目录

- [日常内容更新](#日常内容更新)
- [管理脚本使用](#管理脚本使用)
- [技术维护](#技术维护)
- [内容管理最佳实践](#内容管理最佳实践)
- [定期检查清单](#定期检查清单)
- [常见问题处理](#常见问题处理)

---

## 日常内容更新

### 1. 发布新文章

#### 方式一：使用管理脚本（推荐 ⭐）

```bash
# 1. 使用脚本创建新文章
pnpm run new:post "文章标题" --category flutter --tags vue,typescript

# 2. 编辑生成的文章文件
# 文件位置: docs/blog/{分类}/{文件名}.md

# 3. 在分类 README.md 中添加文章链接

# 4. 验证内容格式
pnpm run validate

# 5. 本地预览
pnpm docs:dev

# 6. 提交并推送
git add .
git commit -m "docs: 添加新文章《文章标题》"
git push origin main
```

#### 方式二：手动创建

```bash
# 1. 创建新文章文件
cp docs/templates/post.md docs/blog/{分类}/{文章名}.md

# 2. 编辑文章内容
# 填写 Frontmatter 和正文

# 3. 本地预览
pnpm docs:dev

# 4. 提交并推送
git add .
git commit -m "docs: 添加新文章《文章标题》"
git push origin main
```

#### 详细步骤

1. **选择分类目录**
   - Flutter: `docs/blog/flutter/`
   - Vue: `docs/blog/vue/`
   - React: `docs/blog/react/`
   - Kotlin: `docs/blog/kotlin/`
   - 新分类: 先创建目录和 README.md

2. **填写 Frontmatter**
   ```yaml
   ---
   title: 文章标题
   date: 2025-01-15
   tags:
     - 标签1
     - 标签2
   permalink: /article/unique-id/
   summary: 文章摘要
   ---
   ```

3. **更新分类索引**
   - 编辑对应分类的 `README.md`
   - 在文章列表中添加新文章链接

4. **本地预览**
   ```bash
   pnpm docs:dev
   # 访问 http://localhost:8080 检查效果
   ```

5. **提交发布**
   - GitHub Actions 会自动构建和部署

### 2. 更新项目进度

#### 方式一：使用管理脚本（推荐 ⭐）

```bash
# 更新项目进度
pnpm run update:project blog --progress 80

# 更新项目状态
pnpm run update:project blog --status "已完成"

# 同时更新多个字段
pnpm run update:project blog --progress 90 --status "进行中" --description "新的项目描述"
```

#### 方式二：手动编辑

编辑 `docs/.vuepress/components/ProjectList.vue`:

```vue
{
  id: 'project-id',
  title: '项目名称',
  description: '项目描述',
  status: '进行中', // 或 '已完成'、'已暂停'
  progress: 75, // 0-100
  tech: ['Vue', 'TypeScript'],
  link: '/projects/project-detail.html', // 可选
}
```

### 3. 更新笔记

直接在 `docs/notes.md` 中添加新内容，或创建子页面：

```bash
# 创建笔记子页面
docs/notes/学习笔记-2025-01.md
```

### 4. 更新摄影作品

在 `docs/photograph.md` 中添加作品链接或直接在页面中嵌入图片。

---

## 管理脚本使用

项目提供了三个管理脚本，简化内容管理流程：

### 可用脚本

1. **`pnpm run new:post`** - 创建新文章
   ```bash
   pnpm run new:post "文章标题" --category flutter --tags vue,typescript
   ```

2. **`pnpm run update:project`** - 更新项目进度
   ```bash
   pnpm run update:project blog --progress 80 --status "进行中"
   ```

3. **`pnpm run validate`** - 验证内容格式
   ```bash
   pnpm run validate
   ```

详细使用说明请参考 [scripts/README.md](../../scripts/README.md)

---

## 技术维护

### 1. 依赖更新

#### 检查更新

```bash
# 检查过时的依赖
pnpm outdated

# 查看 VuePress 更新
pnpm docs:update-package
```

#### 更新依赖

```bash
# 更新单个包
pnpm add -D package-name@latest

# 更新所有依赖（谨慎使用）
pnpm update

# 重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 版本兼容性

当前使用的版本：
- `vuepress`: `^2.0.0-rc.7`
- `@vuepress/theme-default`: `^2.0.0-rc.11`
- `@vuepress/bundler-vite`: `2.0.0-rc.14`

⚠️ **注意**: VuePress 2 仍在 RC 阶段，更新前请查看 [VuePress 更新日志](https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md)

### 2. 配置调整

#### 修改导航栏

编辑 `docs/index.ts`:

```typescript
navbar: [
  { text: '首页', link: '/' },
  { text: '项目', link: '/projects/' },
  // 添加新导航项
]
```

#### 修改侧边栏

在 `docs/index.ts` 的 `sidebar` 配置中调整。

#### 修改 SEO 配置

编辑 `docs/.vuepress/config/seo.ts`，更新 meta 标签。

### 3. 构建和部署

#### 本地构建测试

```bash
# 构建生产版本
pnpm docs:build

# 检查构建输出
ls -la docs/.vuepress/dist
```

#### 部署流程

1. 推送到 `main` 分支
2. GitHub Actions 自动触发构建
3. 部署到 GitHub Pages
4. 检查 [Actions 页面](https://github.com/your-username/your-repo/actions) 确认部署状态

#### 手动部署（如果需要）

```bash
# 构建
pnpm docs:build

# 部署到 gh-pages 分支（需要安装 gh-pages）
npx gh-pages -d docs/.vuepress/dist
```

---

## 内容管理最佳实践

### 1. 文章写作规范

- ✅ 使用统一的 Frontmatter 格式
- ✅ 文章标题清晰明确
- ✅ 添加合适的标签（3-5 个）
- ✅ 包含代码示例时添加语法高亮
- ✅ 添加相关文章链接
- ✅ 定期检查并修复死链

### 2. 文件命名规范

- 文章文件: 使用小写字母和连字符，如 `vue-router-guide.md`
- 图片文件: 放在文章同目录或 `docs/.vuepress/public/images/`
- 分类目录: 使用小写字母，如 `flutter/`、`vue/`

### 3. 版本控制

```bash
# 提交信息规范
git commit -m "docs: 添加 Flutter 状态管理文章"
git commit -m "feat: 新增项目展示功能"
git commit -m "fix: 修复侧边栏链接错误"
git commit -m "chore: 更新依赖版本"
```

### 4. 内容备份

- 定期推送到 GitHub（自动备份）
- 重要内容可以创建 Git 标签
- 考虑定期导出 Markdown 文件到其他位置

---

## 定期检查清单

### 每周检查

- [ ] 检查是否有新文章需要发布
- [ ] 更新进行中项目的进度
- [ ] 检查 GitHub Actions 部署状态

### 每月检查

- [ ] 发布至少 1-2 篇技术文章
- [ ] 更新项目列表和进度
- [ ] 检查并修复死链
- [ ] 更新"最近更新"区域
- [ ] 检查依赖更新

### 每季度检查

- [ ] 审查导航和侧边栏结构
- [ ] 更新关于我页面
- [ ] 检查 SEO 配置和 meta 标签
- [ ] 评估是否需要添加新分类
- [ ] 检查站点性能和加载速度
- [ ] 更新技能栈和项目列表

### 年度检查

- [ ] 全面审查内容结构
- [ ] 更新技术栈和工具
- [ ] 评估是否需要迁移到新版本
- [ ] 备份所有内容
- [ ] 制定下一年度的内容计划

---

## 常见问题处理

### 1. 本地开发服务器无法启动

```bash
# 清理缓存
pnpm docs:clean-dev

# 重新安装依赖
rm -rf node_modules .vuepress/.temp
pnpm install
pnpm docs:dev
```

### 2. 构建失败

```bash
# 检查错误信息
pnpm docs:build

# 常见原因：
# - TypeScript 类型错误
# - 依赖版本冲突
# - 配置文件语法错误
```

### 3. 部署失败

- 检查 GitHub Actions 日志
- 确认 `publish_dir` 路径正确
- 检查 GitHub Pages 设置
- 确认 `GITHUB_TOKEN` 权限

### 4. 搜索功能不工作

- 确认 `@vuepress/plugin-search` 已安装
- 检查 `docs/index.ts` 中插件配置
- 清理缓存后重新构建

### 5. 样式问题

- 检查主题配置
- 确认 CSS 变量使用正确
- 查看浏览器控制台错误

### 6. 链接失效

```bash
# 使用工具检查死链（需要安装）
npx markdown-link-check docs/**/*.md
```

---

## 内容规划建议

### 文章主题规划

每月可以规划以下类型的文章：

1. **技术深度文章** (1篇)
   - 深入某个技术点
   - 包含代码示例和最佳实践

2. **项目实践文章** (1篇)
   - 记录项目开发过程
   - 分享遇到的问题和解决方案

3. **学习笔记** (不定期)
   - 记录学习新技术的过程
   - 总结关键知识点

### 项目展示规划

- 定期更新项目进度（每月至少一次）
- 完成项目后及时更新状态
- 添加项目相关的技术文章链接

---

## 工具推荐

### 本地开发

- **编辑器**: VS Code + Vue 插件
- **Markdown 预览**: Markdown Preview Enhanced
- **Git 工具**: GitHub Desktop 或命令行

### 内容检查

- **拼写检查**: VS Code 拼写检查插件
- **链接检查**: `markdown-link-check`
- **格式检查**: Prettier

### 性能监控

- **Google Analytics**: 访问统计（可选）
- **Google Search Console**: SEO 监控（可选）
- **PageSpeed Insights**: 性能分析

---

## 获取帮助

- **VuePress 文档**: https://vuejs.press/
- **GitHub Issues**: 项目仓库的 Issues 页面
- **社区支持**: VuePress Discord 或 GitHub Discussions

---

**最后更新**: 2025-01-15

title: MAINTENANCE
author:
createTime: 2025/12/08 12:12:50
permalink: /article/o88hfdio/
---
