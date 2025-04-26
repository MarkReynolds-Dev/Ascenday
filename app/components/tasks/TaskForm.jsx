"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TaskTagSelector from "./TaskTagSelector";

// 任务表单验证模式
const taskSchema = z.object({
  title: z.string().min(1, "标题不能为空").max(100, "标题不能超过100个字符"),
  description: z
    .string()
    .max(500, "描述不能超过500个字符")
    .optional()
    .nullable(),
  status: z.enum(["pending", "in_progress", "completed", "cancelled"]),
  priority: z.enum(["low", "medium", "high"]),
  dueDate: z.date().optional().nullable(),
});

/**
 * 任务表单组件
 * @param {Object} props
 * @param {Object} props.defaultValues 默认值（用于编辑模式）
 * @param {Function} props.onSubmit 提交回调
 * @param {Function} props.onCancel 取消回调
 * @param {boolean} props.isEdit 是否处于编辑模式
 * @param {number} props.taskId 任务ID（编辑模式需要）
 */
export default function TaskForm({
  defaultValues = {
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: null,
  },
  onSubmit,
  onCancel,
  isEdit = false,
  taskId,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTagIds, setSelectedTagIds] = useState([]);

  // 如果是编辑模式，加载任务关联的标签
  useEffect(() => {
    if (isEdit && taskId) {
      fetchTaskTags();
    }
  }, [isEdit, taskId]);

  // 获取任务关联的标签
  const fetchTaskTags = async () => {
    try {
      const response = await fetch(`/api/tasks/${taskId}/tags`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const tags = await response.json();
        setSelectedTagIds(tags.map((tag) => tag.id));
      }
    } catch (error) {
      console.error("获取任务标签错误:", error);
    }
  };

  // 使用react-hook-form管理表单
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      ...defaultValues,
      dueDate: defaultValues.dueDate ? new Date(defaultValues.dueDate) : null,
    },
  });

  // 处理表单提交
  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      // 提交任务基本信息
      const taskResult = await onSubmit(data);

      // 如果标签有变化且有任务ID，更新标签关联
      if (taskResult && taskResult.id) {
        await updateTaskTags(taskResult.id);
      } else if (isEdit && taskId) {
        await updateTaskTags(taskId);
      }

      if (!isEdit) {
        reset(); // 只在创建模式下重置表单
        setSelectedTagIds([]);
      }
    } catch (error) {
      console.error("提交任务失败:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 更新任务标签
  const updateTaskTags = async (id) => {
    try {
      const response = await fetch(`/api/tasks/${id}/tags`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ tagIds: selectedTagIds }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "更新任务标签失败");
      }
    } catch (error) {
      console.error("更新任务标签错误:", error);
    }
  };

  // 处理标签选择变更
  const handleTagsChange = (tagIds) => {
    setSelectedTagIds(tagIds);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">标题</label>
        <input
          type="text"
          {...register("title")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="任务标题"
          disabled={isLoading}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">描述</label>
        <textarea
          {...register("description")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
          placeholder="任务描述（可选）"
          disabled={isLoading}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">状态</label>
          <select
            {...register("status")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            <option value="pending">待处理</option>
            <option value="in_progress">进行中</option>
            <option value="completed">已完成</option>
            <option value="cancelled">已取消</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">优先级</label>
          <select
            {...register("priority")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            <option value="low">低</option>
            <option value="medium">中</option>
            <option value="high">高</option>
          </select>
          {errors.priority && (
            <p className="mt-1 text-sm text-red-600">
              {errors.priority.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">截止日期</label>
          <input
            type="date"
            {...register("dueDate", {
              setValueAs: (value) => (value ? new Date(value) : null),
            })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          {errors.dueDate && (
            <p className="mt-1 text-sm text-red-600">
              {errors.dueDate.message}
            </p>
          )}
        </div>
      </div>

      {/* 标签选择器 */}
      <div>
        <label className="block text-sm font-medium mb-2">任务标签</label>
        <TaskTagSelector
          selectedTagIds={selectedTagIds}
          onChange={handleTagsChange}
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          disabled={isLoading}
        >
          取消
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "提交中..." : isEdit ? "保存修改" : "创建任务"}
        </button>
      </div>
    </form>
  );
}
