# RSS 订阅配置说明

## 安装 RSS 插件

VuePress 2 目前没有官方的 RSS 插件，可以使用社区插件：

```bash
pnpm add -D vuepress-plugin-feed2
```

## 配置 RSS 插件

在 `docs/index.ts` 中添加：

```typescript
import { feedPlugin } from 'vuepress-plugin-feed2'

export default defineUserConfig({
  plugins: [
    feedPlugin({
      hostname: 'https://your-domain.com',
      rss: true,
      atom: true,
      json: true,
    }),
  ],
})
```

## 访问 RSS

配置完成后，可以通过以下地址访问：
- RSS: `https://your-domain.com/feed.rss`
- Atom: `https://your-domain.com/feed.atom`
- JSON: `https://your-domain.com/feed.json`

