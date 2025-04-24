"use client";

import { useState } from "react";
import { useAuth } from "@/app/lib/AuthContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AnimatedNotification from "@/app/components/ui/AnimatedNotification";
import { animate } from "animejs";

// 表单验证模式
const loginSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(3, "用户名或邮箱至少需要3个字符")
    .max(100, "用户名或邮箱不能超过100个字符"),
  password: z
    .string()
    .min(6, "密码至少需要6个字符")
    .max(100, "密码不能超过100个字符"),
});

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [isLoading, setIsLoading] = useState(false);

  // 使用react-hook-form管理表单
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

  // 提交登录表单
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");

      // 为按钮添加动画效果
      const submitButton = document.querySelector('button[type="submit"]');
      animate(submitButton, {
        scale: [1, 0.95, 1],
        duration: 500,
        easing: "easeInOutQuad",
      });

      const response = await login(data.usernameOrEmail, data.password);

      // 显示成功通知
      setNotification({
        show: true,
        message: `登录成功！欢迎回来，${response.user.username}`,
        type: "success",
      });

      // 为整个表单添加成功动画
      const form = document.querySelector("form");
      animate(form, {
        opacity: [1, 0.8, 1],
        scale: [1, 1.02, 1],
        duration: 800,
        easing: "easeInOutQuad",
      });

      // 2秒后跳转到首页
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setError(error.message || "登录失败，请检查用户名/邮箱和密码");

      // 显示错误通知
      setNotification({
        show: true,
        message: error.message || "登录失败，请检查用户名/邮箱和密码",
        type: "error",
      });

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
      <h2 className="text-2xl font-bold mb-6 text-center">登录</h2>

      <AnimatedNotification
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, show: false })}
        duration={notification.type === "success" ? 2000 : 5000}
      />

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="usernameOrEmail"
            className="block mb-2 text-sm font-medium"
          >
            用户名或电子邮箱
          </label>
          <input
            type="text"
            id="usernameOrEmail"
            {...register("usernameOrEmail")}
            className="w-full px-3 py-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={
              isLoading ||
              (notification.show && notification.type === "success")
            }
          />
          {errors.usernameOrEmail && (
            <p className="mt-1 text-sm text-red-600">
              {errors.usernameOrEmail.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            密码
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full px-3 py-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={
              isLoading ||
              (notification.show && notification.type === "success")
            }
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={
            isLoading || (notification.show && notification.type === "success")
          }
        >
          {isLoading ? "登录中..." : "登录"}
        </button>

        <p className="mt-4 text-sm text-center">
          没有账号?{" "}
          <a
            href="/register"
            className="text-blue-600 hover:underline transition-colors"
          >
            去注册
          </a>
        </p>
      </form>
    </div>
  );
}
