import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { hashPassword } from "@/app/lib/auth";
import { z } from "zod";

// 用户注册请求体验证模式
const registerSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  verificationCode: z.string().length(6, "验证码应为6位数字"),
});

/**
 * 处理用户注册请求
 */
export async function POST(request) {
  try {
    // 解析请求体
    const body = await request.json();

    // 验证请求体数据
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "请求数据无效", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { username, email, password, verificationCode } = validation.data;

    // 检查用户名是否已存在
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return NextResponse.json({ error: "用户名已存在" }, { status: 400 });
    }

    // 检查邮箱是否已存在
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return NextResponse.json({ error: "邮箱已被注册" }, { status: 400 });
    }

    // 验证邮箱验证码
    const verificationRecord = await prisma.verificationCode.findFirst({
      where: {
        email: email,
      },
    });

    // 验证码不存在或已过期
    if (!verificationRecord || verificationRecord.expiresAt < new Date()) {
      return NextResponse.json(
        { error: "验证码不存在或已过期，请重新获取" },
        { status: 400 }
      );
    }

    // 验证码不匹配
    if (verificationRecord.code !== verificationCode) {
      return NextResponse.json(
        { error: "验证码错误，请重新输入" },
        { status: 400 }
      );
    }

    // 对密码进行哈希处理
    const hashedPassword = await hashPassword(password);

    // 创建新用户（设置邮箱已验证）
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        emailVerified: true, // 邮箱已验证
      },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        emailVerified: true,
      },
    });

    // 成功后删除验证码
    await prisma.verificationCode.delete({
      where: {
        id: verificationRecord.id,
      },
    });

    return NextResponse.json(
      {
        message: "注册成功",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("注册错误:", error);
    return NextResponse.json({ error: "注册过程中发生错误" }, { status: 500 });
  }
}
