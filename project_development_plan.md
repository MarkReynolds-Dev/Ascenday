# Ascenday 项目开发计划

## 项目概述

Ascenday 是一个个人待办+学习计划跟踪系统，旨在帮助用户管理日常任务和学习进度，提高个人效率和学习成果。

## 数据库结构设计

### 用户表（Users）

```sql
CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 待办任务表（Tasks）

```sql
CREATE TABLE Tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status ENUM('pending', 'in_progress', 'completed', 'cancelled') DEFAULT 'pending',
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  due_date DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
```

### 学习计划表（StudyPlans）

```sql
CREATE TABLE StudyPlans (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  status ENUM('active', 'completed', 'cancelled') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
```

### 学习项目表（StudyItems）

```sql
CREATE TABLE StudyItems (
  id INT PRIMARY KEY AUTO_INCREMENT,
  plan_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  estimated_hours DECIMAL(5,2),
  actual_hours DECIMAL(5,2),
  status ENUM('not_started', 'in_progress', 'completed') DEFAULT 'not_started',
  completion_percentage INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (plan_id) REFERENCES StudyPlans(id) ON DELETE CASCADE
);
```

### 学习记录表（StudyLogs）

```sql
CREATE TABLE StudyLogs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  item_id INT NOT NULL,
  study_date DATE NOT NULL,
  hours_spent DECIMAL(5,2) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (item_id) REFERENCES StudyItems(id) ON DELETE CASCADE
);
```

### 标签表（Tags）

```sql
CREATE TABLE Tags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  color VARCHAR(7) DEFAULT '#000000',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY (user_id, name),
  FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
```

### 任务标签关联表（TaskTags）

```sql
CREATE TABLE TaskTags (
  task_id INT NOT NULL,
  tag_id INT NOT NULL,
  PRIMARY KEY (task_id, tag_id),
  FOREIGN KEY (task_id) REFERENCES Tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES Tags(id) ON DELETE CASCADE
);
```

### 学习计划标签关联表（PlanTags）

```sql
CREATE TABLE PlanTags (
  plan_id INT NOT NULL,
  tag_id INT NOT NULL,
  PRIMARY KEY (plan_id, tag_id),
  FOREIGN KEY (plan_id) REFERENCES StudyPlans(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES Tags(id) ON DELETE CASCADE
);
```

## 技术栈与依赖库

项目基于 Next.js 15 构建，使用以下技术栈：

- 前端框架：React 19
- 后端框架：Next.js API Routes
- 样式：TailwindCSS 4
- 数据库：Prisma ORM + MySQL

### 需要安装的库

以下是所有需要安装的库的合并安装命令：

```bash
npm install @prisma/client prisma bcryptjs jsonwebtoken axios react-hook-form zod @hookform/resolvers next-auth dayjs react-icons react-datepicker chart.js react-chartjs-2 tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-popover @radix-ui/react-select @radix-ui/react-label @radix-ui/react-slot @radix-ui/react-avatar
```

## 分模块开发计划

### 阶段 1：项目初始化与基础设置（2 天）

1. **环境配置**

   - 设置 Next.js 项目
   - 配置 TailwindCSS
   - 设置 Prisma 与数据库连接

2. **用户认证系统**
   - 实现用户注册
   - 实现用户登录
   - 设置身份验证中间件

### 阶段 2：待办任务系统（4 天）

1. **任务创建与管理**

   - 设计任务表单组件
   - 实现任务创建功能
   - 实现任务编辑功能
   - 实现任务删除功能

2. **任务展示与状态管理**

   - 实现任务列表视图
   - 实现任务筛选功能
   - 实现任务排序功能
   - 实现任务状态更新功能

3. **任务标签系统**
   - 设计标签管理界面
   - 实现标签创建与删除
   - 实现任务与标签关联

### 阶段 3：学习计划系统（5 天）

1. **学习计划创建与管理**

   - 设计学习计划创建表单
   - 实现学习计划的增删改功能
   - 实现学习计划详情页面

2. **学习项目跟踪**

   - 设计学习项目组件
   - 实现学习项目的创建与编辑
   - 实现进度跟踪功能

3. **学习记录系统**

   - 设计学习记录表单
   - 实现学习时长记录功能
   - 实现学习笔记添加功能

4. **学习数据可视化**
   - 实现学习时间统计
   - 创建学习进度图表
   - 设计学习计划完成度展示

### 阶段 4：系统集成与优化（3 天）

1. **界面整合**

   - 设计主页面布局
   - 优化移动端响应式设计

2. **系统优化**

   - 实现数据缓存
   - 优化数据库查询
   - 进行性能测试与调优

3. **用户体验提升**
   - 实现通知系统
     -: 添加拖拽排序功能
   - 增强搜索与过滤功能

### 阶段 5：测试与部署（2 天）

1. **测试**

   - 编写单元测试
   - 进行集成测试
   - 进行用户界面测试

2. **部署**
   - 准备生产环境
   - 部署应用程序
   - 设置自动化部署流程

## 项目结构

```
/ascenday
  /app
    /api             # API路由
    /components      # 通用组件
      /ui            # UI组件库
      /tasks         # 任务相关组件
      /study         # 学习计划相关组件
      /auth          # 认证相关组件
    /lib             # 工具函数和钩子
    /pages           # 页面组件
    /styles          # 样式文件
  /prisma
    schema.prisma    # Prisma schema
  /public            # 静态资源
```

## 项目验收标准

1. 用户能够创建、编辑和管理个人待办任务
2. 用户能够创建和跟踪学习计划
3. 系统能够提供学习进度的可视化展示
4. 界面美观，响应式，适应不同设备
5. 系统性能良好，加载速度快
6. 代码结构清晰，遵循最佳实践
