import { defineConfig } from 'vitepress';
import markdownConfig from './config/markdown'
import headConfig from "./config/head";
import navConfig from './config/nav'
import sidebarConfig from './config/sidebar'
import selfPlugin from './config/selfPlugin'


// @ts-ignore
export default defineConfig({
  title: "Zzh's note",
  description: '~',
  lastUpdated: true,
  base: '/',
  lang: 'zh-CN',
 // cleanUrls: 'without-subfolders',
  head: headConfig,
  markdown: markdownConfig,
  themeConfig: {
    siteTitle: `ZzH's Log`,
    outlineTitle: '目录', // 右侧边栏的大纲标题文本配置
    lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
    // @ts-ignore
    outline: 'deep',
    algolia: {
      appId: '7CZ8QMJF3N',
      apiKey: 'a2e2b4b5b8a5a6577ce22b876cd4f8df',
      indexName: 'blog'
    },
    authorInfo: {
      author: 'ZzH'
    },
    commentConfig: {
      showComment: true
    },
    // 文档页脚文本配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav:navConfig,
    sidebar: sidebarConfig,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Zzh',
    },
    selfPlugin
  },
});
