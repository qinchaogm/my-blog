# 秦超的博客 📝

基于 VitePress 构建的个人博客。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
my-blog/
├── docs/                    # 博客内容
│   ├── index.md            # 首页
│   ├── about/              # 关于我
│   ├── ai/                 # AI 相关
│   │   ├── news.md         # AI 资讯
│   │   ├── tools.md        # AI 工具
│   │   └── tutorials.md    # AI 教程
│   ├── travel/             # 游记
│   ├── tech/               # 技术笔记
│   └── projects/           # 作品
├── .vitepress/
│   └── config.ts           # VitePress 配置
├── package.json
└── README.md
```

## 🎨 导航结构

- 关于我 `/about/`
- AI
  - AI 资讯 `/ai/news`
  - AI 工具 `/ai/tools`
  - AI 教程 `/ai/tutorials`
- 游记 `/travel/`
- 技术笔记 `/tech/`
- 作品 `/projects/`

## 🌐 部署

博客可以部署到 GitHub Pages：

```bash
# 构建
npm run build

# 部署到 GitHub Pages（需要配置）
```

## 📄 License

MIT
