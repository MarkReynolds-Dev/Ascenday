"use client";

import { useState } from "react";

/**
 * 标签列表组件
 * @param {Object} props
 * @param {Array} props.tags 标签数组
 * @param {Function} props.onEdit 编辑标签回调
 * @param {Function} props.onDelete 删除标签回调
 * @param {Function} props.onSelect 选择标签回调（用于任务标签选择）
 * @param {Array} props.selectedTagIds 已选择的标签ID数组（用于任务标签选择）
 * @param {boolean} props.selectable 是否可选择
 */
export default function TagList({
  tags = [],
  onEdit,
  onDelete,
  onSelect,
  selectedTagIds = [],
  selectable = false,
}) {
  // 确认删除对话框状态
  const [deleteConfirm, setDeleteConfirm] = useState({
    show: false,
    tagId: null,
    tagName: "",
  });

  // 处理删除标签
  const handleDelete = (tagId) => {
    setDeleteConfirm({ show: false, tagId: null, tagName: "" });
    onDelete(tagId);
  };

  // 处理标签选择
  const handleTagSelect = (tagId) => {
    if (onSelect && selectable) {
      onSelect(tagId);
    }
  };

  // 判断标签是否已选择
  const isTagSelected = (tagId) => {
    return selectedTagIds.includes(tagId);
  };

  // 无标签时显示的内容
  if (tags.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">暂无标签</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* 删除确认对话框 */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">确认删除</h3>
            <p className="mb-6">
              您确定要删除标签 "
              <span className="font-semibold">{deleteConfirm.tagName}</span>"
              吗？此操作不可撤销，且会从所有关联的任务中移除该标签。
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() =>
                  setDeleteConfirm({ show: false, tagId: null, tagName: "" })
                }
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                取消
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.tagId)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                删除
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 标签列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className={`border rounded-lg overflow-hidden ${
              selectable
                ? "cursor-pointer hover:border-blue-500 transition-colors"
                : ""
            } ${
              isTagSelected(tag.id) && selectable
                ? "border-blue-500 bg-blue-50"
                : ""
            }`}
            onClick={selectable ? () => handleTagSelect(tag.id) : undefined}
          >
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: tag.color }}
                ></div>
                <span className="font-medium">{tag.name}</span>
              </div>
              {!selectable && (
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(tag);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    编辑
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteConfirm({
                        show: true,
                        tagId: tag.id,
                        tagName: tag.name,
                      });
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    删除
                  </button>
                </div>
              )}
              {selectable && isTagSelected(tag.id) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
