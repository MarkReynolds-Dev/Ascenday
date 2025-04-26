"use client";

import { useState, useEffect } from "react";
import TagList from "@/app/components/tags/TagList";

/**
 * 任务标签选择器组件
 * @param {Object} props
 * @param {Array} props.selectedTagIds 已选择的标签ID数组
 * @param {Function} props.onChange 标签选择变更回调
 */
export default function TaskTagSelector({ selectedTagIds = [], onChange }) {
  const [allTags, setAllTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 加载所有标签
  useEffect(() => {
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
        setAllTags(data);
      } catch (error) {
        console.error("获取标签错误:", error);
        setError(error.message || "加载标签失败，请稍后重试");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTags();
  }, []);

  // 处理标签选择
  const handleTagSelect = (tagId) => {
    let newSelectedTags;

    if (selectedTagIds.includes(tagId)) {
      // 取消选择
      newSelectedTags = selectedTagIds.filter((id) => id !== tagId);
    } else {
      // 添加选择
      newSelectedTags = [...selectedTagIds, tagId];
    }

    onChange(newSelectedTags);
  };

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-blue-600 border-r-transparent"></div>
        <p className="mt-2 text-sm text-gray-600">加载标签中...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-sm py-2">{error}</div>;
  }

  if (allTags.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500">您还没有创建任何标签</p>
        <button
          onClick={() => (window.location.href = "/tags")}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          去创建标签
        </button>
      </div>
    );
  }

  // 选择的标签（用于展示）
  const selectedTags = allTags.filter((tag) => selectedTagIds.includes(tag.id));

  return (
    <div className="space-y-4">
      {/* 已选标签展示 */}
      {selectedTags.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2">已选标签</h4>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center space-x-1 px-2 py-1 rounded-full text-sm"
                style={{ backgroundColor: tag.color, color: "#FFF" }}
              >
                <span>{tag.name}</span>
                <button
                  onClick={() => handleTagSelect(tag.id)}
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 所有标签列表 */}
      <div>
        <h4 className="text-sm font-medium mb-2">选择标签</h4>
        <TagList
          tags={allTags}
          onSelect={handleTagSelect}
          selectedTagIds={selectedTagIds}
          selectable={true}
        />
      </div>
    </div>
  );
}
