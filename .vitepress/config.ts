import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "charles",
  description: "专注于 Vue/React 进阶与AI互联网实践",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术干货', link: '/articles/vue-optimization' },
      { text: '项目作品集', link: '/projects/' }, // 重点展示这个
      { text: '关于我', link: '/about' }
    ],
    sidebar: {
      '/articles/': [
        {
          text: 'Vue 进阶',
          items: [
            { text: 'Vue3 响应式原理深度拆解', link: '/articles/vue-optimization' },
            { text: '大屏可视化性能优化方案', link: '/articles/big-screen' }
          ]
        }
      ]
    },
    socialLinks: [
   { icon: 'github', link: 'https://github.com/Charles' }
    ]
  }
})
