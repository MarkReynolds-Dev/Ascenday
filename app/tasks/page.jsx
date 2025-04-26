"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TaskList from "@/app/components/tasks/TaskList";
import { useAuth } from "@/app/lib/AuthContext";
import { useRouter } from "next/navigation";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    search: "",
  });
  const [sorting, setSorting] = useState({
    field: "createdAt",
    order: "desc",
  });

  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // 加载任务数据
  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // 构建查询参数
      const queryParams = new URLSearchParams();
      if (filters.status) queryParams.append("status", filters.status);
      if (filters.priority) queryParams.append("priority", filters.priority);
      if (filters.search) queryParams.append("search", filters.search);

      const response = await fetch(`/api/tasks?${queryParams.toString()}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "获取任务列表失败");
      }

      let data = await response.json();

      // 前端排序
      data = sortTasks(data, sorting.field, sorting.order);

      setTasks(data);
    } catch (error) {
      console.error("获取任务错误:", error);
      setError(error.message || "加载任务失败，请稍后重试");
    } finally {
      setIsLoading(false);
    }
  };

  // 排序任务
  const sortTasks = (taskList, field, order) => {
    return [...taskList].sort((a, b) => {
      // 特殊处理空值
      if (field === "dueDate") {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return order === "asc" ? 1 : -1;
        if (!b.dueDate) return order === "asc" ? -1 : 1;
      }

      let valueA = a[field];
      let valueB = b[field];

      // 日期比较
      if (field === "dueDate" || field === "createdAt") {
        valueA = valueA ? new Date(valueA).getTime() : 0;
        valueB = valueB ? new Date(valueB).getTime() : 0;
      }

      // 优先级比较 (high > medium > low)
      if (field === "priority") {
        const priorityValue = { high: 3, medium: 2, low: 1 };
        valueA = priorityValue[valueA] || 0;
        valueB = priorityValue[valueB] || 0;
      }

      // 状态比较 (in_progress > pending > completed > cancelled)
      if (field === "status") {
        const statusValue = {
          in_progress: 4,
          pending: 3,
          completed: 2,
          cancelled: 1,
        };
        valueA = statusValue[valueA] || 0;
        valueB = statusValue[valueB] || 0;
      }

      // 升序或降序
      if (order === "asc") {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
    });
  };

  // 处理排序变更
  const handleSortChange = (field, order) => {
    setSorting({ field, order });
  };

  // 初始化时加载任务
  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();
    } else {
      // 未登录时重定向到登录页
      router.push("/login");
    }
  }, [isAuthenticated, filters, sorting, router]);

  // 处理删除任务
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "删除任务失败");
      }

      // 删除成功后更新任务列表
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("删除任务错误:", error);
      alert(error.message || "删除任务失败，请稍后重试");
    }
  };

  // 处理任务状态变更
  const handleStatusChange = async (taskId, newStatus) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "更新任务状态失败");
      }

      const updatedTask = await response.json();

      // 更新任务列表中的状态
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      console.error("更新任务状态错误:", error);
      alert(error.message || "更新任务状态失败，请稍后重试");
    }
  };

  // 处理筛选变更
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // 重置筛选器
  const resetFilters = () => {
    setFilters({
      status: "",
      priority: "",
      search: "",
    });
    setSorting({
      field: "createdAt",
      order: "desc",
    });
  };

  if (!isAuthenticated) {
    return null; // 未登录时不渲染内容，等待重定向
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">我的任务</h1>
        <Link
          href="/tasks/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          创建新任务
        </Link>
      </div>

      {/* 筛选器 */}
      <div className="bg-white p-4 mb-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">状态</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">所有状态</option>
              <option value="pending">待处理</option>
              <option value="in_progress">进行中</option>
              <option value="completed">已完成</option>
              <option value="cancelled">已取消</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">优先级</label>
            <select
              name="priority"
              value={filters.priority}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">所有优先级</option>
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">搜索</label>
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder="搜索任务标题或描述"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              重置筛选和排序
            </button>
          </div>
        </div>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {/* 加载状态 */}
      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">加载中...</p>
        </div>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
          sortField={sorting.field}
          sortOrder={sorting.order}
          onSortChange={handleSortChange}
        />
      )}
    </div>
  );
}
