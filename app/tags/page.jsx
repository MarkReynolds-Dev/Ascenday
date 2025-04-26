"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/AuthContext";
import TagList from "@/app/components/tags/TagList";
import TagForm from "@/app/components/tags/TagForm";

export default function TagsPage() {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editTag, setEditTag] = useState(null);
  const [isCreatingTag, setIsCreatingTag] = useState(false);

  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // 加载标签数据
  const fetchTags = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/tags", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "获取标签列表失败");
      }

      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error("获取标签错误:", error);
      setError(error.message || "加载标签失败，请稍后重试");
    } finally {
      setIsLoading(false);
    }
  };

  // 初始化时加载标签
  useEffect(() => {
    if (isAuthenticated) {
      fetchTags();
    } else {
      // 未登录时重定向到登录页
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // 创建标签
  const handleCreateTag = async (data) => {
    try {
      const response = await fetch("/api/tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || "创建标签失败");
      }

      // 创建成功后刷新标签列表
      await fetchTags();
      setIsCreatingTag(false);
    } catch (error) {
      console.error("创建标签错误:", error);
      alert(error.message || "创建标签失败，请稍后重试");
    }
  };

  // 更新标签
  const handleUpdateTag = async (data) => {
    if (!editTag) return;

    try {
      const response = await fetch(`/api/tags/${editTag.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || "更新标签失败");
      }

      // 更新成功后刷新标签列表
      await fetchTags();
      setEditTag(null);
    } catch (error) {
      console.error("更新标签错误:", error);
      alert(error.message || "更新标签失败，请稍后重试");
    }
  };

  // 删除标签
  const handleDeleteTag = async (tagId) => {
    try {
      const response = await fetch(`/api/tags/${tagId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "删除标签失败");
      }

      // 删除成功后刷新标签列表
      await fetchTags();
    } catch (error) {
      console.error("删除标签错误:", error);
      alert(error.message || "删除标签失败，请稍后重试");
    }
  };

  if (!isAuthenticated) {
    return null; // 未登录时不渲染内容，等待重定向
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">标签管理</h1>
        {!isCreatingTag && !editTag && (
          <button
            onClick={() => setIsCreatingTag(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            创建新标签
          </button>
        )}
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {/* 标签表单（创建或编辑模式） */}
      {(isCreatingTag || editTag) && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editTag ? "编辑标签" : "创建新标签"}
          </h2>
          <TagForm
            defaultValues={editTag || {}}
            onSubmit={editTag ? handleUpdateTag : handleCreateTag}
            onCancel={() => {
              setIsCreatingTag(false);
              setEditTag(null);
            }}
            isEdit={!!editTag}
          />
        </div>
      )}

      {/* 加载状态 */}
      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">加载中...</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">我的标签</h2>
          <TagList tags={tags} onEdit={setEditTag} onDelete={handleDeleteTag} />
        </div>
      )}
    </div>
  );
}
