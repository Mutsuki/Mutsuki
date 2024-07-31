# 个人网站

这是我的个人网站，使用 [Hugo](https://gohugo.io/) 构建，并托管在 GitHub 上。

## 功能

- 个人简介
- 博客文章
- 项目展示
- 联系方式

## 如何运行本地开发服务器

1. 确保已安装 [Hugo](https://gohugo.io/getting-started/installing/)。
2. 克隆此仓库：
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```
3. 进入项目目录：
    ```bash
    cd your-repo-name
    ```
4. 启动本地服务器：
    ```bash
    hugo server --bind="0.0.0.0" --baseURL=http://ip_address -D --cleanDestinationDir --gc --logLevel info --ignoreCache
    ```
5. 在浏览器中打开 `http://localhost:1313` 查看网站。

## 部署

此网站托管在 GitHub Pages 上。部署步骤如下：

1. 生成静态文件：
    ```bash
    hugo
    ```
2. 将 `public` 目录下的内容推送到 GitHub 仓库的 `gh-pages` 分支。

## 贡献

欢迎提交问题（issues）和拉取请求（pull requests）。

## 许可证

本项目采用 [MIT 许可证](LICENSE)。