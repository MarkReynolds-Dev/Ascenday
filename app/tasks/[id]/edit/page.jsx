"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/app/components/tasks/TaskForm";
import { useAuth } from "@/app/lib/AuthContext";
import { use } from "react";

export default function EditTaskPage({ params }) {
  // 使用React.use解包params
  const resolvedParams = use(params);
  const taskId = resolvedParams.id;

  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // 检查是否已登录
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // 加载任务数据
  useEffect(() => {
    if (isAuthenticated && taskId) {
      fetchTask();
    }
  }, [isAuthenticated, taskId]);

  const fetchTask = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`/api/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "获取任务失败");
      }

      const taskData = await response.json();
      setTask(taskData);
    } catch (error) {
      console.error("获取任务错误:", error);
      setError(error.message || "加载任务失败，请稍后重试");
    } finally {
      setIsLoading(false);
    }
  };

  // 更新任务
  const handleUpdateTask = async (taskData) => {
    try {
      setError(null);

      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PUT",
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
        throw new Error(data.error || "更新任务失败");
      }

      const updatedTask = await response.json();
      // 更新成功后跳转到任务列表页
      router.push("/tasks");
      return updatedTask;
    } catch (error) {
      console.error("更新任务错误:", error);
      setError(error.message || "更新任务失败，请稍后重试");
      return null;
    }
  };

  // 取消编辑
  const handleCancel = () => {
    router.push("/tasks");
  };

  if (!isAuthenticated) {
    return null; // 未登录时不渲染内容，等待重定向
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">编辑任务</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">加载中...</p>
        </div>
      ) : task ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <TaskForm
            defaultValues={task}
            onSubmit={handleUpdateTask}
            onCancel={handleCancel}
            isEdit={true}
            taskId={taskId}
          />
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">任务不存在或已被删除</p>
          <button
            onClick={() => router.push("/tasks")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            返回任务列表
          </button>
        </div>
      )}
    </div>
  );
}
