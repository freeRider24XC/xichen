#!/usr/bin/env node

/**
 * 验证内容格式脚本
 * 检查文章 Frontmatter、链接有效性等
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const errors = []
const warnings = []

// 验证文章 Frontmatter
function validatePost(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  
  if (!frontmatterMatch) {
    errors.push(`${filePath}: 缺少 Frontmatter`)
    return
  }
  
  const frontmatter = frontmatterMatch[1]
  const requiredFields = ['title', 'date', 'permalink']
  
  for (const field of requiredFields) {
    if (!frontmatter.includes(`${field}:`)) {
      errors.push(`${filePath}: 缺少必需字段 "${field}"`)
    }
  }
  
  // 验证日期格式
  const dateMatch = frontmatter.match(/date:\s*(.+)/)
  if (dateMatch) {
    const date = dateMatch[1].trim()
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      warnings.push(`${filePath}: 日期格式可能不正确: ${date}`)
    }
  }
  
  // 验证 permalink 格式
  const permalinkMatch = frontmatter.match(/permalink:\s*(.+)/)
  if (permalinkMatch) {
    const permalink = permalinkMatch[1].trim()
    if (!permalink.startsWith('/article/') || !permalink.endsWith('/')) {
      warnings.push(`${filePath}: Permalink 格式建议: /article/xxx/`)
    }
  }
}

// 扫描所有文章
function scanPosts() {
  const blogDir = path.join(rootDir, 'docs', 'blog')
  const categories = ['flutter', 'vue', 'react', 'kotlin']
  
  categories.forEach(category => {
    const categoryDir = path.join(blogDir, category)
    if (!fs.existsSync(categoryDir)) return
    
    const files = fs.readdirSync(categoryDir)
    files.forEach(file => {
      if (file.endsWith('.md') && file !== 'README.md') {
        validatePost(path.join(categoryDir, file))
      }
    })
  })
}

// 验证项目数据
function validateProjects() {
  const componentPath = path.join(rootDir, 'docs', '.vuepress', 'components', 'ProjectList.vue')
  if (!fs.existsSync(componentPath)) {
    errors.push('找不到 ProjectList.vue 文件')
    return
  }
  
  const content = fs.readFileSync(componentPath, 'utf-8')
  const projectsMatch = content.match(/const projects = \[([\s\S]*?)\]/)
  
  if (!projectsMatch) {
    errors.push('无法解析项目数据')
    return
  }
  
  const projectsStr = projectsMatch[1]
  const projectRegex = /{\s*id:\s*['"]([^'"]+)['"][\s\S]*?progress:\s*(\d+)[\s\S]*?}/g
  let match
  
  while ((match = projectRegex.exec(projectsStr)) !== null) {
    const id = match[1]
    const progress = parseInt(match[2])
    
    if (progress < 0 || progress > 100) {
      errors.push(`项目 ${id}: 进度值无效 (${progress})`)
    }
  }
}

// 检查分类索引
function validateCategoryIndexes() {
  const blogDir = path.join(rootDir, 'docs', 'blog')
  const categories = ['flutter', 'vue', 'react', 'kotlin']
  
  categories.forEach(category => {
    const readmePath = path.join(blogDir, category, 'README.md')
    if (!fs.existsSync(readmePath)) {
      warnings.push(`分类 ${category} 缺少 README.md`)
      return
    }
    
    const content = fs.readFileSync(readmePath, 'utf-8')
    if (!content.includes('## 文章列表') && !content.includes('### 文章列表')) {
      warnings.push(`分类 ${category} 的 README.md 可能缺少文章列表`)
    }
  })
}

// 主函数
console.log('🔍 开始验证内容...\n')

scanPosts()
validateProjects()
validateCategoryIndexes()

// 输出结果
if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ 所有检查通过!')
  process.exit(0)
}

if (errors.length > 0) {
  console.log('❌ 发现错误:')
  errors.forEach(error => console.log(`  - ${error}`))
  console.log('')
}

if (warnings.length > 0) {
  console.log('⚠️  警告:')
  warnings.forEach(warning => console.log(`  - ${warning}`))
  console.log('')
}

if (errors.length > 0) {
  process.exit(1)
}

