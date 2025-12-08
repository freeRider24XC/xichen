# 内容结构说明

本文档说明博客的内容组织结构和文件目录。

## 目录结构

```
docs/
├── README.md              # 首页内容
├── index.ts               # VuePress 配置文件
├── about.md               # 关于我页面
├── notes.md               # 笔记页面
├── photograph.md         # 摄影作品页面
├── get-started.md        # 快速开始（可选）
│
├── blog/                  # 技术博客目录
│   ├── blog.md           # 博客主页
│   ├── flutter/          # Flutter 分类
│   │   ├── README.md     # Flutter 分类页
│   │   └── logDebug.md   # Flutter 文章示例
│   ├── vue/              # Vue 分类
│   │   └── README.md     # Vue 分类页
│   ├── react/            # React 分类
│   │   └── README.md     # React 分类页
│   └── kotlin/           # Kotlin 分类
│       └── README.md     # Kotlin 分类页
│
├── projects/              # 项目展示目录
│   └── README.md         # 项目总览页（使用 ProjectList 组件）
│
├── templates/             # 内容模板
│   └── post.md           # 文章模板
│
└── .vuepress/             # VuePress 配置目录
    ├── components/       # Vue 组件
    │   └── ProjectList.vue  # 项目列表组件
    ├── config/           # 配置文件
    │   ├── seo.ts        # SEO 配置
    │   └── rss.md        # RSS 配置说明
    └── public/           # 静态资源
        └── robots.txt    # 搜索引擎配置
```

## 内容组织规则

### 1. 博客文章

- **位置**: `docs/blog/{分类}/`
- **命名**: 使用有意义的文件名，如 `logDebug.md`
- **Frontmatter**: 必须包含 `title`、`date`、`tags`、`permalink`
- **模板**: 参考 `docs/templates/post.md`

### 2. 项目展示

- **位置**: `docs/projects/`
- **数据**: 在 `ProjectList.vue` 组件中维护项目数据
- **字段**: `id`、`title`、`description`、`status`、`progress`、`tech`、`link`

### 3. 分类页面

- **位置**: `docs/blog/{分类}/README.md`
- **作用**: 作为分类的索引页，列出该分类下的所有文章
- **格式**: 统一的格式，包含分类介绍和文章列表

### 4. 导航结构

- **顶部导航**: 首页、项目、博客、笔记、摄影、关于我
- **侧边栏**: 根据当前页面自动显示对应的侧边栏
  - `/blog/` 显示博客分类树
  - `/projects/` 显示项目相关
  - `/notes/` 显示笔记相关

## 添加新内容

### 添加新文章

1. 复制 `docs/templates/post.md` 作为模板
2. 在对应的分类目录下创建新文件
3. 填写 Frontmatter 信息
4. 编写文章内容
5. 在分类的 `README.md` 中添加文章链接

### 添加新项目

1. 编辑 `docs/.vuepress/components/ProjectList.vue`
2. 在 `projects` 数组中添加新项目对象
3. 填写完整的项目信息

### 添加新分类

1. 在 `docs/blog/` 下创建新分类目录
2. 创建 `README.md` 作为分类索引页
3. 在 `docs/index.ts` 的侧边栏配置中添加新分类
4. 在 `docs/blog/blog.md` 中添加分类链接

## 维护建议

- 定期更新项目进度
- 每月至少发布 1-2 篇技术文章
- 保持分类页面的文章列表更新
- 定期检查链接有效性
