import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "charles",
  description: "专注于 Vue/React进阶与AI互联网实践",
  base:'/my-blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "AI 探索",
        items: [
          { text: "AI 前沿动态", link: "/ai/news" },
          { text: "AI 工具推荐", link: "/ai/tools" },
          { text: "AI 教程与实践", link: "/ai/tutorials" },
        ],
      },
      { text: "技术笔记", link: "/tech/" },
      { text: "游记随笔", link: "/travel/" },
      { text: "作品展示", link: "/projects/" },
      { text: "关于我", link: "/about/" },
    ],
    sidebar: {
      "/tech/": [
        {
          text: "技术笔记",
          items: [
            { text: "文章列表", link: "/tech/" },
            {
              text: "VitePress + GitHub Pages 实现静态文档站",
              link: "/tech/vitepress-github-pages",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Charles" }],
  },
});
