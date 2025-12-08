# 管理脚本使用指南

本目录包含用于管理博客内容的辅助脚本。

## 📋 可用脚本

### 1. 创建新文章 (`new-post.js`)

快速创建新文章，自动生成 Frontmatter 和文件结构。

**用法**:
```bash
pnpm run new:post "文章标题" [选项]
```

**选项**:
- `--category <分类>`: 文章分类 (flutter, vue, react, kotlin)，默认为 blog
- `--tags <标签>`: 标签，用逗号分隔，如 `vue,typescript,composition-api`
- `--date <日期>`: 发布日期 (YYYY-MM-DD)，默认为今天

**示例**:
```bash
# 创建 Flutter 文章
pnpm run new:post "Flutter 状态管理实践" --category flutter --tags flutter,state-management

# 创建 Vue 文章
pnpm run new:post "Vue 3 Composition API 详解" --category vue --tags vue3,composition-api

# 指定发布日期
pnpm run new:post "React Hooks 最佳实践" --category react --date 2025-01-20
```

**生成的文件**:
- 文件位置: `docs/blog/{分类}/{文件名}.md`
- 自动生成 Frontmatter（title, date, tags, permalink, summary）
- 使用模板内容填充正文结构

**下一步**:
1. 编辑生成的文件，填写实际内容
2. 在对应分类的 `README.md` 中添加文章链接
3. 运行 `pnpm docs:dev` 预览效果

---

### 2. 更新项目进度 (`update-project.js`)

更新项目列表中的项目信息（进度、状态、描述）。

**用法**:
```bash
pnpm run update:project <项目ID> [选项]
```

**选项**:
- `--progress <0-100>`: 更新进度百分比
- `--status <状态>`: 更新状态 (进行中/已完成/已暂停)
- `--description <描述>`: 更新项目描述

**示例**:
```bash
# 更新项目进度
pnpm run update:project blog --progress 80

# 更新项目状态
pnpm run update:project blog --status "已完成"

# 同时更新多个字段
pnpm run update:project blog --progress 90 --status "进行中" --description "新的项目描述"
```

**可用的项目 ID**:
运行脚本时会显示所有可用的项目 ID，或查看 `docs/.vuepress/components/ProjectList.vue`

**注意**:
- 脚本会直接修改 `ProjectList.vue` 文件
- 建议在更新前先提交当前更改
- 更新后运行 `pnpm docs:dev` 预览效果

---

### 3. 验证内容格式 (`validate.js`)

检查文章格式、Frontmatter 完整性和项目数据有效性。

**用法**:
```bash
pnpm run validate
```

**检查项**:
- ✅ 文章 Frontmatter 必需字段（title, date, permalink）
- ✅ 日期格式 (YYYY-MM-DD)
- ✅ Permalink 格式建议
- ✅ 项目进度值有效性 (0-100)
- ✅ 分类索引页面完整性

**输出**:
- ❌ 错误: 必须修复的问题
- ⚠️ 警告: 建议改进的问题

**示例输出**:
```
🔍 开始验证内容...

❌ 发现错误:
  - docs/blog/vue/new-article.md: 缺少必需字段 "date"

⚠️  警告:
  - docs/blog/flutter/article.md: 日期格式可能不正确: 2025/01/15
  - 分类 react 的 README.md 可能缺少文章列表
```

---

## 🚀 快速开始

### 典型工作流

1. **创建新文章**
   ```bash
   pnpm run new:post "我的新文章" --category flutter --tags flutter,dart
   ```

2. **编辑文章内容**
   ```bash
   # 使用你喜欢的编辑器打开生成的文件
   code docs/blog/flutter/我的新文章.md
   ```

3. **更新分类索引**
   ```bash
   # 编辑 docs/blog/flutter/README.md，添加文章链接
   ```

4. **验证内容**
   ```bash
   pnpm run validate
   ```

5. **预览效果**
   ```bash
   pnpm docs:dev
   ```

6. **提交更改**
   ```bash
   git add .
   git commit -m "docs: 添加新文章《我的新文章》"
   git push origin main
   ```

---

## 💡 提示

### 文章命名建议

- 使用有意义的文件名
- 避免特殊字符
- 使用连字符分隔单词
- 示例: `flutter-state-management.md` ✅
- 避免: `Flutter状态管理.md` ❌

### 项目 ID 查找

查看 `docs/.vuepress/components/ProjectList.vue` 文件中的 `id` 字段：

```vue
{
  id: 'blog',  // 这就是项目 ID
  title: '个人技术博客与主页',
  // ...
}
```

### 常见问题

**Q: 脚本提示找不到文件？**
A: 确保在项目根目录运行脚本，或使用 `node scripts/script-name.js`

**Q: 更新项目后没有生效？**
A: 检查项目 ID 是否正确，运行 `pnpm docs:dev` 重新加载

**Q: 验证脚本报错但文件看起来正常？**
A: 检查 Frontmatter 格式，确保使用正确的 YAML 语法

---

## 🔧 自定义脚本

如果需要添加新功能，可以：

1. 在 `scripts/` 目录创建新脚本
2. 在 `package.json` 的 `scripts` 中添加命令
3. 确保脚本有执行权限: `chmod +x scripts/your-script.js`

---

**最后更新**: 2025-01-15

