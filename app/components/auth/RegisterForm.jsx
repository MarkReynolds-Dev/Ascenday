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
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const { register: registerUser } = useAuth();
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
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

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

      await registerUser(data.username, data.email, data.password);

      // 显示成功通知
      setNotification({
        show: true,
        message: `注册成功！用户 ${data.username} 已创建`,
        type: "success",
      });

      // 3秒后跳转到登录页
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      setError(error.message || "注册失败，请稍后重试");
      // 显示错误通知
      setNotification({
        show: true,
        message: error.message || "注册失败，请稍后重试",
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
      <h2 className="text-2xl font-bold mb-6 text-center">注册账号</h2>

      <AnimatedNotification
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, show: false })}
        duration={notification.type === "success" ? 3000 : 5000}
      />

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
            disabled={
              isLoading ||
              (notification.show && notification.type === "success")
            }
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
            disabled={
              isLoading ||
              (notification.show && notification.type === "success")
            }
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
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
            disabled={
              isLoading ||
              (notification.show && notification.type === "success")
            }
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
          disabled={
            isLoading || (notification.show && notification.type === "success")
          }
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
