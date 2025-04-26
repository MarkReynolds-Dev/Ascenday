import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/lib/prisma";

// 验证码验证请求体模式
const verifyCodeSchema = z.object({
  email: z.string().email("请提供有效的电子邮箱地址"),
  code: z.string().length(6, "验证码应为6位数字"),
});

/**
 * 验证邮箱验证码API端点
 * @route POST /api/auth/verify-code
 */
export async function POST(request) {
  try {
    // 解析请求体
    const body = await request.json();

    // 验证请求数据
    const validation = verifyCodeSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "请求数据无效",
          details: validation.error.format(),
        },
        { status: 400 }
      );
    }

    const { email, code } = validation.data;

    // 从数据库获取验证码记录
    const verificationRecord = await prisma.verificationCode.findFirst({
      where: {
        email: email,
      },
    });

    // 验证码不存在
    if (!verificationRecord) {
      return NextResponse.json(
        { success: false, error: "验证码不存在或已过期，请重新获取" },
        { status: 400 }
      );
    }

    // 验证码已过期
    if (verificationRecord.expiresAt < new Date()) {
      // 删除过期验证码
      await prisma.verificationCode.delete({
        where: {
          id: verificationRecord.id,
        },
      });

      return NextResponse.json(
        { success: false, error: "验证码已过期，请重新获取" },
        { status: 400 }
      );
    }

    // 验证码不匹配
    if (verificationRecord.code !== code) {
      return NextResponse.json(
        { success: false, error: "验证码错误，请重新输入" },
        { status: 400 }
      );
    }

    // 验证成功，可以选择在此处删除验证码或在注册成功后删除
    // await prisma.verificationCode.delete({
    //   where: {
    //     id: verificationRecord.id,
    //   },
    // });

    return NextResponse.json({
      success: true,
      message: "验证码验证成功",
      verified: true,
    });
  } catch (error) {
    console.error("验证码验证错误:", error);
    return NextResponse.json(
      { success: false, error: "验证码验证过程中发生错误" },
      { status: 500 }
    );
  }
}
