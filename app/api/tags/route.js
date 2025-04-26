import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getAuthUser } from "@/app/lib/auth";
import { z } from "zod";

// 标签创建验证模式
const tagCreateSchema = z.object({
  name: z.string().min(1).max(50),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/)
    .default("#000000"),
});

/**
 * 获取所有标签
 * @route GET /api/tags
 */
export async function GET(request) {
  try {
    // 获取当前认证用户
    const user = getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    // 查询标签列表
    const tags = await prisma.tag.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: "asc", // 按名称排序
      },
    });

    return NextResponse.json(tags);
  } catch (error) {
    console.error("获取标签列表错误:", error);
    return NextResponse.json({ error: "获取标签列表失败" }, { status: 500 });
  }
}

/**
 * 创建新标签
 * @route POST /api/tags
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
    const validation = tagCreateSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "请求数据无效", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, color } = validation.data;

    // 检查是否存在同名标签
    const existingTag = await prisma.tag.findFirst({
      where: {
        userId: user.id,
        name,
      },
    });

    if (existingTag) {
      return NextResponse.json({ error: "已存在同名标签" }, { status: 400 });
    }

    // 创建标签
    const tag = await prisma.tag.create({
      data: {
        userId: user.id,
        name,
        color,
      },
    });

    return NextResponse.json(tag, { status: 201 });
  } catch (error) {
    console.error("创建标签错误:", error);
    return NextResponse.json({ error: "创建标签失败" }, { status: 500 });
  }
}
