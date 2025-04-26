import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getAuthUser } from "@/app/lib/auth";
import { z } from "zod";

// 任务创建验证模式
const taskCreateSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional().nullable(),
  status: z
    .enum(["pending", "in_progress", "completed", "cancelled"])
    .default("pending"),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  dueDate: z.string().optional().nullable(),
});

/**
 * 获取用户的所有任务
 * @route GET /api/tasks
 */
export async function GET(request) {
  try {
    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 获取查询参数
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const priority = searchParams.get("priority");
    const search = searchParams.get("search");

    // 构建查询条件
    const where = {
      userId: user.id,
      ...(status && { status }),
      ...(priority && { priority }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    // 查询任务列表
    const tasks = await prisma.task.findMany({
      where,
      orderBy: [
        { priority: "desc" }, // 优先级高的排在前面
        { createdAt: "desc" }, // 最近创建的排在前面
      ],
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("获取任务列表错误:", error);
    return NextResponse.json({ error: "获取任务列表失败" }, { status: 500 });
  }
}

/**
 * 创建新任务
 * @route POST /api/tasks
 */
export async function POST(request) {
  try {
    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 解析请求体
    const body = await request.json();

    // 验证请求数据
    const validation = taskCreateSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "请求数据无效", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { title, description, status, priority, dueDate } = validation.data;

    // 创建任务
    const task = await prisma.task.create({
      data: {
        userId: user.id,
        title,
        description,
        status,
        priority,
        dueDate: dueDate ? new Date(dueDate) : null,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error("创建任务错误:", error);
    return NextResponse.json({ error: "创建任务失败" }, { status: 500 });
  }
}
