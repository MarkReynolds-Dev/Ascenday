import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getAuthUser } from "@/app/lib/auth";
import { z } from "zod";

// 标签ID列表验证
const tagIdsSchema = z.object({
  tagIds: z.array(z.number().int().positive()),
});

/**
 * 获取任务的所有标签
 * @route GET /api/tasks/[id]/tags
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

    // 验证任务是否存在且属于当前用户
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!task) {
      return NextResponse.json({ error: "任务不存在" }, { status: 404 });
    }

    if (task.userId !== user.id) {
      return NextResponse.json({ error: "无权访问此任务" }, { status: 403 });
    }

    // 获取任务的所有标签
    const taskTags = await prisma.taskTag.findMany({
      where: {
        taskId: Number(id),
      },
      include: {
        tag: true,
      },
    });

    const tags = taskTags.map((taskTag) => taskTag.tag);

    return NextResponse.json(tags);
  } catch (error) {
    console.error("获取任务标签错误:", error);
    return NextResponse.json({ error: "获取任务标签失败" }, { status: 500 });
  }
}

/**
 * 更新任务的标签（替换当前所有标签）
 * @route PUT /api/tasks/[id]/tags
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

    // 验证任务是否存在且属于当前用户
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!task) {
      return NextResponse.json({ error: "任务不存在" }, { status: 404 });
    }

    if (task.userId !== user.id) {
      return NextResponse.json({ error: "无权修改此任务" }, { status: 403 });
    }

    // 解析请求体
    const body = await request.json();

    // 验证请求数据
    const validation = tagIdsSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "请求数据无效", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { tagIds } = validation.data;

    // 验证所有标签都存在且属于当前用户
    const userTags = await prisma.tag.findMany({
      where: {
        userId: user.id,
        id: {
          in: tagIds,
        },
      },
    });

    if (userTags.length !== tagIds.length) {
      return NextResponse.json(
        { error: "部分标签ID无效或不属于当前用户" },
        { status: 400 }
      );
    }

    // 删除原有的标签关联
    await prisma.taskTag.deleteMany({
      where: {
        taskId: Number(id),
      },
    });

    // 创建新的标签关联
    if (tagIds.length > 0) {
      await prisma.taskTag.createMany({
        data: tagIds.map((tagId) => ({
          taskId: Number(id),
          tagId,
        })),
      });
    }

    return NextResponse.json({
      message: "任务标签更新成功",
      tagIds,
    });
  } catch (error) {
    console.error("更新任务标签错误:", error);
    return NextResponse.json({ error: "更新任务标签失败" }, { status: 500 });
  }
}

/**
 * 添加单个标签到任务
 * @route POST /api/tasks/[id]/tags
 */
export async function POST(request, { params }) {
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

    // 验证任务是否存在且属于当前用户
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!task) {
      return NextResponse.json({ error: "任务不存在" }, { status: 404 });
    }

    if (task.userId !== user.id) {
      return NextResponse.json({ error: "无权修改此任务" }, { status: 403 });
    }

    // 解析请求体
    const body = await request.json();
    const tagId = body.tagId;

    if (!tagId || isNaN(Number(tagId))) {
      return NextResponse.json({ error: "无效的标签ID" }, { status: 400 });
    }

    // 验证标签是否存在且属于当前用户
    const tag = await prisma.tag.findUnique({
      where: {
        id: Number(tagId),
      },
    });

    if (!tag) {
      return NextResponse.json({ error: "标签不存在" }, { status: 404 });
    }

    if (tag.userId !== user.id) {
      return NextResponse.json({ error: "无权使用此标签" }, { status: 403 });
    }

    // 检查关联是否已存在
    const existingTaskTag = await prisma.taskTag.findUnique({
      where: {
        taskId_tagId: {
          taskId: Number(id),
          tagId: Number(tagId),
        },
      },
    });

    if (existingTaskTag) {
      return NextResponse.json({ message: "标签已关联到任务" });
    }

    // 创建关联
    await prisma.taskTag.create({
      data: {
        taskId: Number(id),
        tagId: Number(tagId),
      },
    });

    return NextResponse.json({
      message: "标签已添加到任务",
      tagId: Number(tagId),
    });
  } catch (error) {
    console.error("添加任务标签错误:", error);
    return NextResponse.json({ error: "添加任务标签失败" }, { status: 500 });
  }
}
