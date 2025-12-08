# 快速参考卡片

日常维护常用命令和操作速查表。

## 🚀 常用命令

```bash
# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build

# 清理缓存并启动
pnpm docs:clean-dev

# 检查依赖更新
pnpm outdated

# 更新 VuePress
pnpm docs:update-package
```

## 📝 发布新文章

```bash
# 1. 创建文章（以 Flutter 为例）
cp docs/templates/post.md docs/blog/flutter/my-article.md

# 2. 编辑文章
# 填写 Frontmatter 和内容

# 3. 更新分类索引
# 编辑 docs/blog/flutter/README.md，添加文章链接

# 4. 预览
pnpm docs:dev

# 5. 提交
git add .
git commit -m "docs: 添加新文章《文章标题》"
git push origin main
```

## 🔧 更新项目

编辑 `docs/.vuepress/components/ProjectList.vue`:

```vue
{
  id: 'project-id',
  title: '项目名称',
  description: '项目描述',
  status: '进行中', // 或 '已完成'
  progress: 75,     // 0-100
  tech: ['Vue', 'TypeScript'],
  link: '/projects/detail.html', // 可选
}
```

## 📁 文件位置速查

| 内容类型 | 文件位置 |
|---------|---------|
| 首页内容 | `docs/README.md` |
| 博客主页 | `docs/blog/blog.md` |
| 项目列表 | `docs/.vuepress/components/ProjectList.vue` |
| 站点配置 | `docs/index.ts` |
| SEO 配置 | `docs/.vuepress/config/seo.ts` |
| 文章模板 | `docs/templates/post.md` |
| 关于我 | `docs/about.md` |
| 笔记 | `docs/notes.md` |
| 摄影 | `docs/photograph.md` |

## 🔗 重要链接

- **维护指南**: [MAINTENANCE.md](./MAINTENANCE.md)
- **内容结构**: [STRUCTURE.md](./STRUCTURE.md)
- **快速开始**: [CONTRIBUTING.md](./CONTRIBUTING.md)

## ⚡ 常见操作

### 添加新分类

1. 创建目录: `docs/blog/{新分类}/`
2. 创建 README: `docs/blog/{新分类}/README.md`
3. 更新配置: 在 `docs/index.ts` 的侧边栏中添加
4. 更新博客主页: 在 `docs/blog/blog.md` 中添加链接

### 修复构建错误

```bash
# 清理并重新构建
rm -rf node_modules .vuepress/.temp
pnpm install
pnpm docs:build
```

### 检查部署状态

访问: `https://github.com/{用户名}/{仓库名}/actions`

---

💡 **提示**: 详细说明请查看 [维护指南](./MAINTENANCE.md)
