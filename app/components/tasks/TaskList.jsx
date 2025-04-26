"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/**
 * 任务列表组件
 * @param {Object} props
 * @param {Array} props.tasks 任务数组
 * @param {Function} props.onDelete 删除任务回调
 * @param {Function} props.onStatusChange 更改状态回调
 * @param {string} props.sortField 排序字段
 * @param {string} props.sortOrder 排序方向
 * @param {Function} props.onSortChange 排序变更回调
 */
export default function TaskList({
  tasks = [],
  onDelete,
  onStatusChange,
  sortField = "createdAt",
  sortOrder = "desc",
  onSortChange,
}) {
  // 状态映射
  const statusMap = {
    pending: { text: "待处理", color: "text-yellow-600 bg-yellow-100" },
    in_progress: { text: "进行中", color: "text-blue-600 bg-blue-100" },
    completed: { text: "已完成", color: "text-green-600 bg-green-100" },
    cancelled: { text: "已取消", color: "text-gray-600 bg-gray-100" },
  };

  // 优先级映射
  const priorityMap = {
    low: { text: "低", color: "text-gray-600" },
    medium: { text: "中", color: "text-yellow-600" },
    high: { text: "高", color: "text-red-600" },
  };

  // 确认删除对话框状态
  const [deleteConfirm, setDeleteConfirm] = useState({
    show: false,
    taskId: null,
  });

  // 任务标签缓存
  const [taskTags, setTaskTags] = useState({});

  // 加载任务的标签
  useEffect(() => {
    async function loadTaskTags() {
      for (const task of tasks) {
        if (!taskTags[task.id]) {
          try {
            const response = await fetch(`/api/tasks/${task.id}/tags`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            });

            if (response.ok) {
              const tags = await response.json();
              setTaskTags((prev) => ({
                ...prev,
                [task.id]: tags,
              }));
            }
          } catch (error) {
            console.error(`获取任务 ${task.id} 标签错误:`, error);
          }
        }
      }
    }

    loadTaskTags();
  }, [tasks]);

  // 处理删除任务
  const handleDelete = (taskId) => {
    setDeleteConfirm({ show: false, taskId: null });
    onDelete(taskId);
  };

  // 处理状态变更
  const handleStatusChange = (taskId, newStatus) => {
    onStatusChange(taskId, newStatus);
  };

  // 处理排序变更
  const handleSortChange = (field) => {
    if (!onSortChange) return;

    let newOrder = "asc";
    if (field === sortField && sortOrder === "asc") {
      newOrder = "desc";
    }

    onSortChange(field, newOrder);
  };

  // 排序箭头显示
  const getSortIcon = (field) => {
    if (field !== sortField) return null;

    return sortOrder === "asc" ? (
      <span className="ml-1">▲</span>
    ) : (
      <span className="ml-1">▼</span>
    );
  };

  // 无任务时显示的内容
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">暂无任务</p>
        <Link
          href="/tasks/new"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          创建新任务
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 删除确认对话框 */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">确认删除</h3>
            <p className="mb-6">您确定要删除这个任务吗？此操作不可撤销。</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setDeleteConfirm({ show: false, taskId: null })}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                取消
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.taskId)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                删除
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 排序控制 */}
      {onSortChange && (
        <div className="bg-gray-50 p-2 rounded-lg mb-4">
          <div className="flex items-center text-sm">
            <span className="mr-2">排序:</span>
            <button
              onClick={() => handleSortChange("createdAt")}
              className={`px-2 py-1 rounded ${
                sortField === "createdAt" ? "bg-blue-100 text-blue-800" : ""
              }`}
            >
              创建时间{getSortIcon("createdAt")}
            </button>
            <button
              onClick={() => handleSortChange("priority")}
              className={`px-2 py-1 rounded ml-2 ${
                sortField === "priority" ? "bg-blue-100 text-blue-800" : ""
              }`}
            >
              优先级{getSortIcon("priority")}
            </button>
            <button
              onClick={() => handleSortChange("dueDate")}
              className={`px-2 py-1 rounded ml-2 ${
                sortField === "dueDate" ? "bg-blue-100 text-blue-800" : ""
              }`}
            >
              截止日期{getSortIcon("dueDate")}
            </button>
            <button
              onClick={() => handleSortChange("status")}
              className={`px-2 py-1 rounded ml-2 ${
                sortField === "status" ? "bg-blue-100 text-blue-800" : ""
              }`}
            >
              状态{getSortIcon("status")}
            </button>
          </div>
        </div>
      )}

      {/* 任务列表 */}
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium">{task.title}</h3>
                <div className="flex space-x-2">
                  <Link
                    href={`/tasks/${task.id}/edit`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    编辑
                  </Link>
                  <button
                    onClick={() =>
                      setDeleteConfirm({ show: true, taskId: task.id })
                    }
                    className="text-red-600 hover:text-red-800"
                  >
                    删除
                  </button>
                </div>
              </div>

              {task.description && (
                <p className="text-gray-600 mt-2">{task.description}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusMap[task.status]?.color || "text-gray-600 bg-gray-100"
                  }`}
                >
                  {statusMap[task.status]?.text || task.status}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-100 ${
                    priorityMap[task.priority]?.color || "text-gray-600"
                  }`}
                >
                  优先级: {priorityMap[task.priority]?.text || task.priority}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-purple-600 bg-purple-100">
                  {formatDate(task.dueDate)}
                </span>
              </div>

              {/* 任务标签 */}
              {taskTags[task.id] && taskTags[task.id].length > 0 && (
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {taskTags[task.id].map((tag) => (
                      <span
                        key={tag.id}
                        className="px-2 py-1 rounded-full text-xs text-white"
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 状态变更下拉菜单 */}
              <div className="mt-4">
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                >
                  <option value="pending">设为待处理</option>
                  <option value="in_progress">设为进行中</option>
                  <option value="completed">设为已完成</option>
                  <option value="cancelled">设为已取消</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 格式化日期
  function formatDate(dateString) {
    if (!dateString) return "无截止日期";
    const date = new Date(dateString);
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
