import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { seoHead } from './.vuepress/config/seo'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '西辰 Knight',
  description: '西辰 Knight 的个人博客与项目展示',
  head: seoHead,
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' },
      { text: '博客', link: '/blog/' },
      { text: '笔记', link: '/notes/' },
      { text: '摄影', link: '/photograph.html' },
      { text: '关于我', link: '/about.html' },
    ],
    footer: {
      message: '基于 VuePress 构建',
      copyright: 'Copyright © 2025 西辰 Knight | <a href="https://github.com/freeRider24XC" target="_blank">GitHub</a>',
    },
    sidebar: {
      '/projects/': [
        {
          text: '项目',
          children: ['/projects/README.md'],
        },
      ],
      '/blog/': [
        {
          text: '技术博客',
          children: [
            '/blog/blog.md',
            {
              text: 'Flutter',
              children: [
                '/blog/flutter/README.md',
                '/blog/flutter/logDebug.md',
              ],
            },
            {
              text: 'Vue',
              children: ['/blog/vue/README.md'],
            },
            {
              text: 'React',
              children: ['/blog/react/README.md'],
            },
            {
              text: 'Kotlin',
              children: ['/blog/kotlin/README.md'],
            },
          ],
        },
      ],
      '/notes/': [
        {
          text: '笔记',
          children: ['/notes.md'],
        },
      ],
      '/': [
        {
          text: '指南',
          children: ['/get-started.md'],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }),
  ],
})

