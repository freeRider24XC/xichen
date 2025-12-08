#!/usr/bin/env node

/**
 * 创建新文章脚本
 * 用法: node scripts/new-post.js "文章标题" --category flutter --tags vue,typescript
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// 解析命令行参数
const args = process.argv.slice(2)
const title = args[0]
let category = 'blog'
let tags = []
let date = new Date().toISOString().split('T')[0]

// 解析参数
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--category' && args[i + 1]) {
    category = args[i + 1]
    i++
  } else if (args[i] === '--tags' && args[i + 1]) {
    tags = args[i + 1].split(',').map(t => t.trim())
    i++
  } else if (args[i] === '--date' && args[i + 1]) {
    date = args[i + 1]
    i++
  }
}

if (!title) {
  console.error('❌ 错误: 请提供文章标题')
  console.log('\n用法:')
  console.log('  node scripts/new-post.js "文章标题" [选项]')
  console.log('\n选项:')
  console.log('  --category <分类>    文章分类 (flutter, vue, react, kotlin)')
  console.log('  --tags <标签>        标签，用逗号分隔')
  console.log('  --date <日期>        发布日期 (YYYY-MM-DD)，默认为今天')
  console.log('\n示例:')
  console.log('  node scripts/new-post.js "Vue 3 新特性" --category vue --tags vue3,composition-api')
  process.exit(1)
}

// 验证分类
const validCategories = ['flutter', 'vue', 'react', 'kotlin']
if (!validCategories.includes(category)) {
  console.error(`❌ 错误: 无效的分类 "${category}"`)
  console.log(`有效分类: ${validCategories.join(', ')}`)
  process.exit(1)
}

// 生成文件名（中文转拼音或使用英文）
const fileName = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim()

// 生成唯一 ID（用于 permalink）
const uniqueId = Math.random().toString(36).substring(2, 10)

// 生成 permalink
const permalink = `/article/${uniqueId}/`

// 读取模板
const templatePath = path.join(rootDir, 'docs', 'templates', 'post.md')
const template = fs.readFileSync(templatePath, 'utf-8')

// 生成 Frontmatter
const frontmatter = `---
title: ${title}
date: ${date}
tags:
${tags.length > 0 ? tags.map(t => `  - ${t}`).join('\n') : '  - 待分类'}
permalink: ${permalink}
summary: 一句话概述文章核心内容
---

`

// 生成文章内容
const content = frontmatter + template.split('---').slice(2).join('---').trim()

// 确定文件路径
const categoryDir = path.join(rootDir, 'docs', 'blog', category)
const filePath = path.join(categoryDir, `${fileName}.md`)

// 确保分类目录存在
if (!fs.existsSync(categoryDir)) {
  fs.mkdirSync(categoryDir, { recursive: true })
  console.log(`📁 创建分类目录: ${category}`)
}

// 检查文件是否已存在
if (fs.existsSync(filePath)) {
  console.error(`❌ 错误: 文件已存在: ${filePath}`)
  process.exit(1)
}

// 写入文件
fs.writeFileSync(filePath, content, 'utf-8')

console.log('✅ 文章创建成功!')
console.log(`📄 文件路径: ${path.relative(rootDir, filePath)}`)
console.log(`🔗 Permalink: ${permalink}`)
console.log(`\n📝 下一步:`)
console.log(`1. 编辑文件: ${filePath}`)
console.log(`2. 填写文章内容`)
console.log(`3. 在 docs/blog/${category}/README.md 中添加文章链接`)
console.log(`4. 运行 pnpm docs:dev 预览`)

