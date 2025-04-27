import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getAuthUser } from "@/app/lib/auth";

/**
 * 从任务中移除特定标签
 * @route DELETE /api/tasks/[id]/tags/[tagId]
 */
export async function DELETE(request, { params }) {
  try {
    // 正确处理params参数
    const id = params?.id;
    const tagId = params?.tagId;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "无效的任务ID" }, { status: 400 });
    }

    if (!tagId || isNaN(Number(tagId))) {
      return NextResponse.json({ error: "无效的标签ID" }, { status: 400 });
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

    // 验证关联是否存在
    const taskTag = await prisma.taskTag.findUnique({
      where: {
        taskId_tagId: {
          taskId: Number(id),
          tagId: Number(tagId),
        },
      },
    });

    if (!taskTag) {
      return NextResponse.json(
        { error: "该任务未关联此标签" },
        { status: 404 }
      );
    }

    // 删除关联
    await prisma.taskTag.delete({
      where: {
        taskId_tagId: {
          taskId: Number(id),
          tagId: Number(tagId),
        },
      },
    });

    return NextResponse.json({
      message: "已从任务中移除标签",
    });
  } catch (error) {
    console.error("移除任务标签错误:", error);
    return NextResponse.json({ error: "移除任务标签失败" }, { status: 500 });
  }
}
