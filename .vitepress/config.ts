import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '秦超的博客',
  description: '个人博客 - 关于我、AI、游记、技术笔记、作品',
  
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '关于我', link: '/about/' },
      { 
        text: 'AI', 
        items: [
          { text: 'AI 资讯', link: '/ai/news' },
          { text: 'AI 工具', link: '/ai/tools' },
          { text: 'AI 教程', link: '/ai/tutorials' }
        ] 
      },
      { text: '游记', link: '/travel/' },
      { text: '技术笔记', link: '/tech/' },
      { text: '作品', link: '/projects/' }
    ],
    
    // 侧边栏配置
    sidebar: {
      '/ai/': [
        { text: 'AI 资讯', link: '/ai/news' },
        { text: 'AI 工具', link: '/ai/tools' },
        { text: 'AI 教程', link: '/ai/tutorials' }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qinchaogm' }
    ],
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 秦超'
    }
  },
  
  // Vite 配置
  vite: {
    server: {
      port: 5173
    }
  }
})
