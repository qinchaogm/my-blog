---
layout: doc
title: VitePress + GitHub Pages 实现静态文档站
sidebar: false
pageClass: tech-article-card
---

# VitePress + GitHub Pages 实现静态文档站 📝

这篇文章记录如何从零搭建一个基于 VitePress 的静态文档站，并部署到 GitHub Pages。
整体流程参考了网上的一些实践经验，并结合自己的项目做了简化整理。

> 适合已经会基本 Git / GitHub 的前端开发者，用来给项目或个人博客搭建文档站。

## 1. 初始化 VitePress 项目

- 使用 npm / pnpm / yarn 创建项目并安装 `vitepress`
- 在 `docs` 目录下初始化基础结构
- 配置 `.vitepress/config.ts` 的站点标题、描述、导航等

示例命令（以 npm 为例）：

```bash
npm init vitepress@latest my-blog
cd my-blog
npm install
```

本地开发时可以使用：

```bash
npm run docs:dev
```

## 2. 推送代码到 GitHub 仓库

- 在 GitHub 上新建一个仓库，例如 `my-blog`
- 本地项目执行 `git init`，提交代码后推送到 GitHub
- 确保 `docs` 目录在仓库中，并能在本地正常运行

```bash
git init
git add .
git commit -m "chore: init vitepress site"
git branch -M main
git remote add origin git@github.com:你的用户名/my-blog.git
git push -u origin main
```

## 3. 配置 VitePress 的 base 路径

如果你用的是 GitHub Pages 的项目页（`https://username.github.io/my-blog/`），
需要在 `docs/.vitepress/config.ts` 中设置：

```ts
export default defineConfig({
  base: '/my-blog/',
  // 其他配置...
})
```

这样生成的静态资源路径才会带上 `/my-blog/` 前缀，避免首页能打开但子页面 404 的问题。

## 4. 构建并部署到 GitHub Pages

### 4.1 本地构建

先在本地确认构建是否正常：

```bash
npm run docs:build
```

构建完成后，会在 `docs/.vitepress/dist` 目录生成静态资源。

### 4.2 使用 GitHub Pages 部署

常见有两种方式：

- 手动把 `dist` 内容推到 `gh-pages` 分支
- 使用 GitHub Actions 自动构建并部署

推荐使用 GitHub Actions 自动化部署，可以在仓库的
`.github/workflows/` 目录中添加一个 CI 配置文件，
让每次 push 到主分支时自动构建并部署最新文档。

## 5. 自定义域名与后续优化（可选）

- 在 GitHub Pages 设置中绑定自定义域名
- 在 DNS 服务商处配置 `CNAME` 记录
- 配置 HTTPS 访问
- 优化 VitePress 主题外观、增加侧边栏和多语言支持等

## 总结

- 用 VitePress 写文档基本就是写 Markdown，学习成本很低
- 借助 GitHub Pages 可以免费托管静态站点
- 配合 GitHub Actions 可以形成「写完 Markdown 推代码 → 自动上线」的完整闭环

后续你可以在本目录下继续新增更多技术文章，例如构建优化、工程化实践等，
并在 `tech/index.md` 中维护一个清晰的文章列表索引。

