# Ascenday - 个人待办与学习计划跟踪系统

> 一个高效管理日常任务和学习进度的全栈应用

## 中文说明

### 项目概述

Ascenday 是一个个人待办+学习计划跟踪系统，旨在帮助用户管理日常任务和学习进度，提高个人效率和学习成果。系统提供了待办任务管理、学习计划跟踪和数据可视化等核心功能。

### 主要功能

- **待办任务管理**：创建、编辑和管理日常任务，设置优先级和截止日期
- **学习计划跟踪**：制定学习计划，追踪学习项目进度，记录学习时间
- **数据可视化**：通过图表展示学习进度和完成情况
- **标签分类**：对任务和学习计划进行标签分类和管理
- **用户认证**：安全的用户注册和登录系统

### 技术栈

- **前端**：React 19, Next.js 15, TailwindCSS 4
- **后端**：Next.js API Routes
- **数据库**：PostgreSQL, Prisma ORM
- **UI 组件**：Radix UI, Lucide Icons
- **状态管理**：React Hooks
- **表单处理**：React Hook Form, Zod
- **认证**：NextAuth, JWT, Bcrypt

### 开始使用

1. 克隆项目

```bash
git clone https://github.com/yourusername/ascenday.git
cd ascenday
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

创建一个 `.env` 文件，参考示例：

```
DATABASE_URL="postgresql://user:password@localhost:5432/ascenday"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. 初始化数据库

```bash
npx prisma generate
npx prisma migrate dev
```

5. 启动开发服务器

```bash
npm run dev
```

6. 浏览器访问 [http://localhost:3000](http://localhost:3000)

本项目使用 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 自动优化和加载 [Geist](https://vercel.com/font)，这是 Vercel 的一种新字体。

## 学习更多

要了解更多关于 Next.js 的信息，请查阅以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 的特性和 API
- [学习 Next.js](https://nextjs.org/learn) - 一个交互式的 Next.js 教程

欢迎查看 [Next.js GitHub 仓库](https://github.com/vercel/next.js)，您的反馈和贡献将会受到欢迎！

## 部署到 Vercel

部署 Next.js 应用的最简单方法是使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)，它由 Next.js 的创建者开发。

查看我们的 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。

## English Version

# Ascenday - Personal Todo and Study Plan Tracking System

> An efficient full-stack application for managing daily tasks and study progress

### Project Overview

Ascenday is a personal todo and study plan tracking system designed to help users manage daily tasks and study progress, improve personal efficiency and learning outcomes. The system provides core features such as todo task management, study plan tracking, and data visualization.

### Main Features

- **Todo Task Management**: Create, edit, and manage daily tasks with priority and due date settings
- **Study Plan Tracking**: Create study plans, track study item progress, and record study time
- **Data Visualization**: Display study progress and completion status through charts
- **Tag Classification**: Categorize and manage tasks and study plans with tags
- **User Authentication**: Secure user registration and login system

### Tech Stack

- **Frontend**: React 19, Next.js 15, TailwindCSS 4
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL, Prisma ORM
- **UI Components**: Radix UI, Lucide Icons
- **State Management**: React Hooks
- **Form Handling**: React Hook Form, Zod
- **Authentication**: NextAuth, JWT, Bcrypt

### Getting Started

1. Clone the project

```bash
git clone https://github.com/yourusername/ascenday.git
cd ascenday
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

Create a `.env` file, reference example:

```
DATABASE_URL="postgresql://user:password@localhost:5432/ascenday"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Initialize the database

```bash
npx prisma generate
npx prisma migrate dev
```

5. Start the development server

```bash
npm run dev
```

6. Visit [http://localhost:3000](http://localhost:3000) in your browser

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
