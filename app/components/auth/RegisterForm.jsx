"use client";

import { useState } from "react";
import { useAuth } from "@/app/lib/AuthContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { animate } from "animejs";

// 表单验证模式
const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "用户名至少需要3个字符")
      .max(50, "用户名不能超过50个字符"),
    email: z.string().email("请输入有效的电子邮箱"),
    password: z
      .string()
      .min(6, "密码至少需要6个字符")
      .max(100, "密码不能超过100个字符"),
    confirmPassword: z.string().min(1, "请确认密码"),
    verificationCode: z.string().length(6, "验证码必须是6位数字"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const { register: registerUser } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [countDown, setCountDown] = useState(0);
  const [codeSent, setCodeSent] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  // 使用react-hook-form管理表单
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      verificationCode: "",
    },
  });

  // 监听邮箱字段变化
  const emailValue = watch("email");

  // 处理发送验证码
  const handleSendVerificationCode = async () => {
    try {
      if (!emailValue || errors.email) {
        setError("请输入有效的电子邮箱");
        return;
      }

      setIsSendingCode(true);
      setError("");

      const response = await fetch("/api/auth/send-verification-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "发送验证码失败");
      }

      // 设置验证码已发送标志
      setCodeSent(true);

      // 设置倒计时
      setCountDown(60);
      const timer = setInterval(() => {
        setCountDown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      setError(error.message || "发送验证码失败");
    } finally {
      setIsSendingCode(false);
    }
  };

  // 提交注册表单
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");

      // 为每个输入框添加动画效果
      const formElements = document.querySelectorAll("input");
      animate(formElements, {
        translateX: [
          { value: -5, duration: 100 },
          { value: 5, duration: 100 },
          { value: -5, duration: 100 },
          { value: 5, duration: 100 },
          { value: 0, duration: 100 },
        ],
        easing: "easeInOutQuad",
      });

      // 注册用户，添加验证码
      await registerUser(
        data.username,
        data.email,
        data.password,
        data.verificationCode
      );

      // 设置注册成功标志
      setRegisterSuccess(true);

      // 1秒后跳转到登录页
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      setError(error.message || "注册失败，请稍后重试");

      // 添加错误抖动动画
      const form = document.querySelector("form");
      animate(form, {
        translateX: [
          { value: -10, duration: 100 },
          { value: 10, duration: 100 },
          { value: -10, duration: 100 },
          { value: 10, duration: 100 },
          { value: 0, duration: 100 },
        ],
        easing: "easeInOutQuad",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">注册账号</h2>

      {registerSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          注册成功！正在跳转到登录页面...
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium">
            用户名
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="w-full px-3 py-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isLoading || registerSuccess}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            电子邮箱
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-3 py-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isLoading || registerSuccess}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="verificationCode"
            className="block mb-2 text-sm font-medium"
          >
            验证码
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="verificationCode"
              {...register("verificationCode")}
              className="w-full px-3 py-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="6位数字验证码"
              maxLength={6}
              disabled={isLoading || registerSuccess}
            />
            <button
              type="button"
              onClick={handleSendVerificationCode}
              disabled={
                countDown > 0 ||
                isSendingCode ||
                !emailValue ||
                !!errors.email ||
                registerSuccess
              }
              className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 whitespace-nowrap min-w-24"
            >
              {countDown > 0
                ? `${countDown}秒后重试`
                : isSendingCode
                ? "发送中..."
                : "获取验证码"}
            </button>
          </div>
          {errors.verificationCode && (
            <p className="mt-1 text-sm text-red-600">
              {errors.verificationCode.message}
            </p>
          )}
          {codeSent && (
            <div className="mt-2 p-2 bg-blue-50 text-blue-700 rounded-md text-sm">
              验证码发送成功，有效期10分钟。如果没有收到，请检查垃圾邮件文件夹。
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            密码
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full px-3 py-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isLoading || registerSuccess}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium"
          >
            确认密码
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            className="w-full px-3 py-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isLoading || registerSuccess}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={isLoading || registerSuccess}
        >
          {isLoading ? "注册中..." : "注册"}
        </button>

        <p className="mt-4 text-sm text-center">
          已有账号?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline transition-colors"
          >
            去登录
          </a>
        </p>
      </form>
    </div>
  );
}
