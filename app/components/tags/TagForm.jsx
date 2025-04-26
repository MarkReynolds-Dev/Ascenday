"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 标签表单验证模式
const tagSchema = z.object({
  name: z
    .string()
    .min(1, "标签名称不能为空")
    .max(50, "标签名称不能超过50个字符"),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "颜色格式不正确"),
});

/**
 * 标签表单组件
 * @param {Object} props
 * @param {Object} props.defaultValues 默认值（用于编辑模式）
 * @param {Function} props.onSubmit 提交回调
 * @param {Function} props.onCancel 取消回调
 * @param {boolean} props.isEdit 是否处于编辑模式
 */
export default function TagForm({
  defaultValues = {
    name: "",
    color: "#3B82F6", // 默认蓝色
  },
  onSubmit,
  onCancel,
  isEdit = false,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // 使用react-hook-form管理表单
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(tagSchema),
    defaultValues,
  });

  // 监听颜色变化以实时预览
  const selectedColor = watch("color");

  // 处理表单提交
  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      await onSubmit(data);
      if (!isEdit) {
        reset(); // 只在创建模式下重置表单
      }
    } catch (error) {
      console.error("提交标签失败:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 预设颜色选项
  const presetColors = [
    "#EF4444", // 红色
    "#F97316", // 橙色
    "#F59E0B", // 琥珀色
    "#10B981", // 绿色
    "#3B82F6", // 蓝色
    "#6366F1", // 靛蓝色
    "#8B5CF6", // 紫色
    "#EC4899", // 粉红色
    "#6B7280", // 灰色
    "#000000", // 黑色
  ];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">标签名称</label>
        <input
          type="text"
          {...register("name")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="输入标签名称"
          disabled={isLoading}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">标签颜色</label>
        <div className="flex items-center space-x-2">
          <input
            type="color"
            {...register("color")}
            className="h-10 w-10 border-none"
            disabled={isLoading}
          />
          <input
            type="text"
            {...register("color")}
            className="w-24 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="#000000"
            disabled={isLoading}
          />
          <div
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: selectedColor }}
          ></div>
        </div>
        {errors.color && (
          <p className="mt-1 text-sm text-red-600">{errors.color.message}</p>
        )}
      </div>

      <div className="mt-2">
        <label className="block text-sm font-medium mb-1">预设颜色</label>
        <div className="flex flex-wrap gap-2">
          {presetColors.map((color) => (
            <button
              key={color}
              type="button"
              className={`w-8 h-8 rounded-full ${
                selectedColor === color
                  ? "ring-2 ring-offset-2 ring-gray-400"
                  : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => {
                const colorField = register("color").name;
                reset({ ...watch(), [colorField]: color });
              }}
            ></button>
          ))}
        </div>
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
          {isLoading ? "提交中..." : isEdit ? "保存修改" : "创建标签"}
        </button>
      </div>
    </form>
  );
}
