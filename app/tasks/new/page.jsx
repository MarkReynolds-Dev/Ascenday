"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/app/components/tasks/TaskForm";
import { useAuth } from "@/app/lib/AuthContext";

export default function NewTaskPage() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // 检查是否已登录
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // 创建任务
  const handleCreateTask = async (taskData) => {
    try {
      setError(null);

      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          ...taskData,
          dueDate: taskData.dueDate ? taskData.dueDate.toISOString() : null,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "创建任务失败");
      }

      const newTask = await response.json();
      // 创建成功后跳转到任务列表页
      router.push("/tasks");
      return newTask;
    } catch (error) {
      console.error("创建任务错误:", error);
      setError(error.message || "创建任务失败，请稍后重试");
      return null;
    }
  };

  // 取消创建
  const handleCancel = () => {
    router.push("/tasks");
  };

  if (!isAuthenticated) {
    return null; // 未登录时不渲染内容，等待重定向
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">创建新任务</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <TaskForm onSubmit={handleCreateTask} onCancel={handleCancel} />
      </div>
    </div>
  );
}
