import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/lib/prisma";
import {
  sendVerificationEmail,
  generateVerificationCode,
} from "@/tools/qq_email_sender";

// 邮箱请求体验证模式
const emailSchema = z.object({
  email: z.string().email("请提供有效的电子邮箱地址"),
});

/**
 * 发送验证码API端点
 * @route POST /api/auth/send-verification-code
 */
export async function POST(request) {
  try {
    // 解析请求体
    const body = await request.json();

    // 验证请求数据
    const validation = emailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "电子邮箱格式无效" },
        { status: 400 }
      );
    }

    const { email } = validation.data;

    // 检查邮箱是否已被注册
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "该邮箱已被注册" },
        { status: 400 }
      );
    }

    // 生成6位验证码
    const verificationCode = generateVerificationCode(6);

    // 设置10分钟有效期
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // 检查是否已存在验证码记录，有则更新，无则创建
    await prisma.verificationCode.upsert({
      where: {
        email: email,
      },
      update: {
        code: verificationCode,
        expiresAt: expiresAt,
      },
      create: {
        email: email,
        code: verificationCode,
        expiresAt: expiresAt,
      },
    });

    // 发送验证码邮件
    const result = await sendVerificationEmail(email, verificationCode);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "发送验证码邮件失败" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "验证码已发送到您的邮箱，有效期为10分钟",
    });
  } catch (error) {
    console.error("发送验证码错误:", error);
    return NextResponse.json(
      { success: false, error: "发送验证码过程中发生错误" },
      { status: 500 }
    );
  }
}
