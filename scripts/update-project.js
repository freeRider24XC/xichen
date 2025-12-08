#!/usr/bin/env node

/**
 * 更新项目进度脚本
 * 用法: node scripts/update-project.js blog --progress 80 --status "进行中"
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// 解析命令行参数
const args = process.argv.slice(2)
const projectId = args[0]
let progress = null
let status = null
let description = null

// 解析参数
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--progress' && args[i + 1]) {
    progress = parseInt(args[i + 1])
    if (isNaN(progress) || progress < 0 || progress > 100) {
      console.error('❌ 错误: 进度必须是 0-100 之间的数字')
      process.exit(1)
    }
    i++
  } else if (args[i] === '--status' && args[i + 1]) {
    status = args[i + 1]
    i++
  } else if (args[i] === '--description' && args[i + 1]) {
    description = args[i + 1]
    i++
  }
}

if (!projectId) {
  console.error('❌ 错误: 请提供项目 ID')
  console.log('\n用法:')
  console.log('  node scripts/update-project.js <项目ID> [选项]')
  console.log('\n选项:')
  console.log('  --progress <0-100>   更新进度百分比')
  console.log('  --status <状态>      更新状态 (进行中/已完成/已暂停)')
  console.log('  --description <描述> 更新项目描述')
  console.log('\n示例:')
  console.log('  node scripts/update-project.js blog --progress 80 --status "进行中"')
  process.exit(1)
}

// 读取 ProjectList.vue 文件
const componentPath = path.join(rootDir, 'docs', '.vuepress', 'components', 'ProjectList.vue')
if (!fs.existsSync(componentPath)) {
  console.error(`❌ 错误: 找不到文件: ${componentPath}`)
  process.exit(1)
}

let content = fs.readFileSync(componentPath, 'utf-8')

// 查找项目数据数组
const projectsMatch = content.match(/const projects = \[([\s\S]*?)\]/)
if (!projectsMatch) {
  console.error('❌ 错误: 无法找到项目数据')
  process.exit(1)
}

// 解析项目数据（简单解析，实际应该用更严格的解析器）
const projectsStr = projectsMatch[1]
const projectRegex = /{\s*id:\s*['"]([^'"]+)['"][\s\S]*?}/g
let found = false
let updatedProjectsStr = projectsStr

// 查找并更新项目
const lines = projectsStr.split('\n')
let inProject = false
let currentProjectId = null
const updatedLines = []
let projectBraceCount = 0

for (let i = 0; i < lines.length; i++) {
  let line = lines[i]
  
  // 检测项目开始
  if (line.includes(`id: '${projectId}'`) || line.includes(`id: "${projectId}"`)) {
    inProject = true
    currentProjectId = projectId
    found = true
    projectBraceCount = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length
  }
  
  if (inProject) {
    // 更新进度
    if (progress !== null && /progress:\s*\d+/.test(line)) {
      line = line.replace(/progress:\s*\d+/, `progress: ${progress}`)
    }
    
    // 更新状态
    if (status !== null && /status:\s*['"][^'"]*['"]/.test(line)) {
      line = line.replace(/status:\s*['"][^'"]*['"]/, `status: '${status}'`)
    }
    
    // 更新描述
    if (description !== null && /description:\s*['"][^'"]*['"]/.test(line)) {
      line = line.replace(/description:\s*['"][^'"]*['"]/, `description: '${description}'`)
    }
    
    // 计算大括号数量
    projectBraceCount += (line.match(/{/g) || []).length - (line.match(/}/g) || []).length
    
    // 检测项目结束
    if (projectBraceCount <= 0 && (line.includes('},') || line.includes('}'))) {
      inProject = false
    }
  }
  
  updatedLines.push(line)
}

if (!found) {
  console.error(`❌ 错误: 找不到项目 ID "${projectId}"`)
  console.log('\n可用的项目 ID:')
  // 提取所有项目 ID
  const allIds = projectsStr.match(/id:\s*['"]([^'"]+)['"]/g)
  if (allIds) {
    allIds.forEach(id => {
      console.log(`  - ${id.match(/['"]([^'"]+)['"]/)[1]}`)
    })
  }
  process.exit(1)
}

// 重新构建内容
const beforeProjects = content.substring(0, projectsMatch.index)
const afterProjects = content.substring(projectsMatch.index + projectsMatch[0].length)
const newProjectsStr = 'const projects = [\n' + updatedLines.join('\n') + '\n]'
const newContent = beforeProjects + newProjectsStr + afterProjects

// 写入文件
fs.writeFileSync(componentPath, newContent, 'utf-8')

console.log('✅ 项目更新成功!')
if (progress !== null) console.log(`📊 进度: ${progress}%`)
if (status !== null) console.log(`📌 状态: ${status}`)
if (description !== null) console.log(`📝 描述: ${description}`)
console.log(`\n📝 下一步:`)
console.log(`1. 运行 pnpm docs:dev 预览效果`)
console.log(`2. 提交更改: git add . && git commit -m "chore: 更新项目 ${projectId}"`)

