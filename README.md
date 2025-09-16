# Notion风格个人博客 - 完整代码框架

这是一个简约Notion风格的个人博客完整代码框架，包含所有必要的HTML、CSS和JavaScript文件。

## 目录结构

```
/
├── index.html         # 首页
├── about.html         # 个人介绍页
├── diary.html         # 日记板块
├── agent-study.html   # Agent学习板块
├── travel.html        # 旅行记录板块
├── editor.html        # 博客编辑器
├── css/
│   └── style.css      # 样式文件
├── js/
│   ├── main.js        # 主要交互逻辑
│   └── markdown.js    # Markdown解析功能
└── README.md          # 说明文档
```

## 功能特点

- 简约Notion风格设计
- 响应式布局，适配移动端和桌面端
- 暗色/亮色主题切换
- Markdown编辑器支持
- 多板块内容组织

## 如何使用

1. 将所有文件上传到你的网站服务器或部署平台
2. 根据需要修改各HTML文件中的内容
3. 在`editor.html`页面可以编写新文章（本地存储）
4. 可通过CSS自定义颜色和样式

## 部署指南

### GitHub Pages部署

1. 创建一个新的GitHub仓库，命名为`your-username.github.io`
2. 将所有文件推送到该仓库的main分支
3. 在仓库设置中，开启GitHub Pages，选择main分支作为源
4. 访问`https://your-username.github.io`查看网站

## 自定义指南

- 修改`css/style.css`文件可以更改网站样式
- 编辑各HTML文件可以修改页面内容
- 在`js/main.js`中可以添加新的交互功能

## 注意事项

- 编辑器功能仅在本地存储内容，刷新页面后会保留
- 如需永久保存文章，需要添加后端支持或使用静态站点生成器