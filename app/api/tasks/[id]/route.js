import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getAuthUser } from "@/app/lib/auth";
import { z } from "zod";

// 任务更新验证模式
const taskUpdateSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional().nullable(),
  status: z
    .enum(["pending", "in_progress", "completed", "cancelled"])
    .optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  dueDate: z.string().optional().nullable(),
});

/**
 * 获取单个任务
 * @route GET /api/tasks/[id]
 */
export async function GET(request, { params }) {
  try {
    // 正确处理params参数
    const id = params?.id;
    
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "无效的任务ID" }, { status: 400 });
    }

    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 查询任务
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!task) {
      return NextResponse.json({ error: "任务不存在" }, { status: 404 });
    }

    // 验证任务所属用户
    if (task.userId !== user.id) {
      return NextResponse.json({ error: "无权访问此任务" }, { status: 403 });
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error("获取任务错误:", error);
    return NextResponse.json({ error: "获取任务失败" }, { status: 500 });
  }
}

/**
 * 更新任务
 * @route PUT /api/tasks/[id]
 */
export async function PUT(request, { params }) {
  try {
    // 正确处理params参数
    const id = params?.id;
    
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "无效的任务ID" }, { status: 400 });
    }

    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 查询任务是否存在
    const existingTask = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingTask) {
      return NextResponse.json({ error: "任务不存在" }, { status: 404 });
    }

    // 验证任务所属用户
    if (existingTask.userId !== user.id) {
      return NextResponse.json({ error: "无权修改此任务" }, { status: 403 });
    }

    // 解析请求体
    const body = await request.json();

    // 验证请求数据
    const validation = taskUpdateSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "请求数据无效", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { title, description, status, priority, dueDate } = validation.data;

    // 更新任务
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(status !== undefined && { status }),
        ...(priority !== undefined && { priority }),
        ...(dueDate !== undefined && {
          dueDate: dueDate ? new Date(dueDate) : null,
        }),
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.error("更新任务错误:", error);
    return NextResponse.json({ error: "更新任务失败" }, { status: 500 });
  }
}

/**
 * 删除任务
 * @route DELETE /api/tasks/[id]
 */
export async function DELETE(request, { params }) {
  try {
    // 正确处理params参数
    const id = params?.id;
    
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "无效的任务ID" }, { status: 400 });
    }

    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 查询任务是否存在
    const existingTask = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingTask) {
      return NextResponse.json({ error: "任务不存在" }, { status: 404 });
    }

    // 验证任务所属用户
    if (existingTask.userId !== user.id) {
      return NextResponse.json({ error: "无权删除此任务" }, { status: 403 });
    }

    // 删除任务
    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ message: "任务已成功删除" });
  } catch (error) {
    console.error("删除任务错误:", error);
    return NextResponse.json({ error: "删除任务失败" }, { status: 500 });
  }
}
 