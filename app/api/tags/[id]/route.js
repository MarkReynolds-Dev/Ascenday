import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getAuthUser } from "@/app/lib/auth";
import { z } from "zod";

// 标签更新验证模式
const tagUpdateSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/)
    .optional(),
});

/**
 * 获取单个标签
 * @route GET /api/tags/[id]
 */
export async function GET(request, { params }) {
  try {
    // 正确处理params参数
    const id = params?.id;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "无效的标签ID" }, { status: 400 });
    }

    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 查询标签
    const tag = await prisma.tag.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!tag) {
      return NextResponse.json({ error: "标签不存在" }, { status: 404 });
    }

    // 验证标签所属用户
    if (tag.userId !== user.id) {
      return NextResponse.json({ error: "无权访问此标签" }, { status: 403 });
    }

    return NextResponse.json(tag);
  } catch (error) {
    console.error("获取标签错误:", error);
    return NextResponse.json({ error: "获取标签失败" }, { status: 500 });
  }
}

/**
 * 更新标签
 * @route PUT /api/tags/[id]
 */
export async function PUT(request, { params }) {
  try {
    // 正确处理params参数
    const id = params?.id;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "无效的标签ID" }, { status: 400 });
    }

    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 查询标签是否存在
    const existingTag = await prisma.tag.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingTag) {
      return NextResponse.json({ error: "标签不存在" }, { status: 404 });
    }

    // 验证标签所属用户
    if (existingTag.userId !== user.id) {
      return NextResponse.json({ error: "无权修改此标签" }, { status: 403 });
    }

    // 解析请求体
    const body = await request.json();

    // 验证请求数据
    const validation = tagUpdateSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "请求数据无效", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, color } = validation.data;

    // 如果要更新名称，检查名称是否已存在
    if (name && name !== existingTag.name) {
      const nameExists = await prisma.tag.findFirst({
        where: {
          userId: user.id,
          name,
          id: { not: Number(id) },
        },
      });

      if (nameExists) {
        return NextResponse.json({ error: "已存在同名标签" }, { status: 400 });
      }
    }

    // 更新标签
    const updatedTag = await prisma.tag.update({
      where: {
        id: Number(id),
      },
      data: {
        ...(name !== undefined && { name }),
        ...(color !== undefined && { color }),
      },
    });

    return NextResponse.json(updatedTag);
  } catch (error) {
    console.error("更新标签错误:", error);
    return NextResponse.json({ error: "更新标签失败" }, { status: 500 });
  }
}

/**
 * 删除标签
 * @route DELETE /api/tags/[id]
 */
export async function DELETE(request, { params }) {
  try {
    // 正确处理params参数
    const id = params?.id;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "无效的标签ID" }, { status: 400 });
    }

    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 查询标签是否存在
    const existingTag = await prisma.tag.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingTag) {
      return NextResponse.json({ error: "标签不存在" }, { status: 404 });
    }

    // 验证标签所属用户
    if (existingTag.userId !== user.id) {
      return NextResponse.json({ error: "无权删除此标签" }, { status: 403 });
    }

    // 删除标签
    await prisma.tag.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ message: "标签已成功删除" });
  } catch (error) {
    console.error("删除标签错误:", error);
    return NextResponse.json({ error: "删除标签失败" }, { status: 500 });
  }
}
