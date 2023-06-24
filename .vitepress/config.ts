import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Windows 11 用户手册",
  description: "Windows 11 用户手册",
  cleanUrls: true,
  lang: 'zh-CN',
  themeConfig: {
    outlineTitle: '在此页中',
    returnToTopLabel: '返回页首',
    langMenuLabel: '切换语言',
    footer: {
      message: 'Microsoft 和 Windows 是 Microsoft Corporation 在美国和/或其他国家/地区的注册商标或商标。本项目与 Microsoft Corporation 无关。本项目的内容不代表 Microsoft Corporation 的最终观点。',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开箱体验', link: '/getting-start/oobe' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '开箱体验', link: '/getting-start/oobe' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiCaoZ/Windows-11-User-Manual' }
    ]
  }
})
