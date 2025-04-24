import { NextResponse } from "next/server";
import { withAuth } from "@/app/lib/authMiddleware";
import prisma from "@/app/lib/prisma";

/**
 * 获取当前登录用户信息
 * 此API路由受身份验证中间件保护
 */
async function handler(request) {
  try {
    // 从请求中获取用户ID（中间件已经验证过）
    const userId = request.user.id;

    // 从数据库中获取最新用户信息
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "找不到用户信息" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("获取用户信息错误:", error);
    return NextResponse.json(
      { error: "获取用户信息时发生错误" },
      { status: 500 }
    );
  }
}

// 导出使用身份验证中间件包装的处理函数
export const GET = withAuth(handler);
