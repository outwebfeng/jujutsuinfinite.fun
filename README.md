# Jujutsu Infinite

一个基于 Next.js 14 构建的现代化网站，支持多语言、暗黑模式等特性。

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **包管理**: pnpm
- **国际化**: next-intl
- **UI组件**: Radix UI
- **代码规范**: ESLint + Prettier
- **Git Hooks**: Husky

## 特性

- 🌍 多语言支持 (en, tw, jp, ko, fr, es)
- 🌓 明暗主题切换
- 🚀 Edge Runtime 支持
- 📱 响应式设计
- 🔍 SEO 优化
- 🛠 TypeScript 类型安全
- 🎨 Tailwind CSS 样式
- 📦 零运行时 CSS-in-JS

## 开发要求

- Node.js 20.x
- pnpm 7.14.0+

## 快速开始

1. 克隆项目

```bash
git clone [your-repository-url]
cd jujutsuinfinite.fun
```

2. 安装依赖

```bash
pnpm install
```

3. 配置环境变量

```bash
cp .env.example .env.local
```

4. 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 构建部署

```bash
pnpm build
pnpm start
```

## 项目结构

```
├── app/                # Next.js 应用目录
├── components/         # React 组件
├── lib/               # 工具函数和配置
├── messages/          # 国际化翻译文件
├── public/            # 静态资源
└── styles/            # 全局样式
```

## 代码规范

项目使用 ESLint 和 Prettier 进行代码规范和格式化：

```bash
# 运行 lint 检查
pnpm lint

# 修复 lint 问题
pnpm lint:fix

# 格式化代码
pnpm prettier
```

## 国际化

项目支持多语言切换，语言文件位于 `messages/` 目录：

- 英语 (en) - 默认语言
- 繁体中文 (tw)
- 日语 (jp)
- 韩语 (ko)
- 法语 (fr)
- 西班牙语 (es)

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 访问网站

[https://jujutsuinfinite.fun](https://jujutsuinfinite.fun)

## 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解更多信息。











