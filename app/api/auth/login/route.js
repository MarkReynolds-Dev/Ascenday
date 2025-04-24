import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { verifyPassword, generateToken } from "@/app/lib/auth";
import { z } from "zod";

// 用户登录请求体验证模式
const loginSchema = z.object({
  // 支持用户名或邮箱登录
  usernameOrEmail: z.string().min(3).max(100),
  password: z.string().min(6).max(100),
});

/**
 * 处理用户登录请求
 */
export async function POST(request) {
  try {
    // 解析请求体
    const body = await request.json();

    // 验证请求体数据
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "请求数据无效", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { usernameOrEmail, password } = validation.data;

    // 查找用户（支持用户名或邮箱登录）
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "用户名/邮箱或密码不正确" },
        { status: 401 }
      );
    }

    // 验证密码
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "用户名/邮箱或密码不正确" },
        { status: 401 }
      );
    }

    // 生成JWT令牌
    const token = generateToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    // 返回用户信息和令牌
    return NextResponse.json({
      message: "登录成功",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("登录错误:", error);
    return NextResponse.json({ error: "登录过程中发生错误" }, { status: 500 });
  }
}
