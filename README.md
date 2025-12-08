# 西辰 Knight 个人博客

基于 VuePress 2 搭建的个人博客与项目展示站点。

## 功能特性

- 📝 技术博客：记录技术文章和学习笔记
- 🚀 项目展示：展示个人项目及进度
- 📸 摄影作品：分享摄影作品
- 🔍 全文搜索：支持站点内容搜索
- 📱 响应式设计：适配各种设备
- 🚀 自动化部署：GitHub Actions 自动构建和部署

## 技术栈

- VuePress 2.0 (RC)
- TypeScript
- Vue 3
- Vite

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build
```

## 项目结构

```
docs/
├── .vuepress/          # VuePress 配置
│   ├── components/     # Vue 组件
│   ├── config/         # 配置文件
│   └── public/         # 静态资源
├── blog/               # 博客文章
├── projects/           # 项目展示
├── templates/          # 内容模板
└── index.ts           # 站点配置入口
```

## 部署

项目已配置 GitHub Actions，推送到 `main` 分支后会自动构建并部署到 GitHub Pages。

## 内容维护

- [快速开始](docs/CONTRIBUTING.md) - 内容更新快速指南
- [维护指南](docs/MAINTENANCE.md) - 完整的技术维护和内容管理指南
- [内容结构](docs/STRUCTURE.md) - 项目结构和组织规则

## License

MIT