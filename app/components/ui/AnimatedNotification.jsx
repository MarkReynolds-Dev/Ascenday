"use client";

import { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";

/**
 * 动画通知组件
 * @param {Object} props - 组件属性
 * @param {string} props.message - 通知消息
 * @param {string} props.type - 通知类型 ('success' | 'error' | 'info')
 * @param {boolean} props.show - 是否显示通知
 * @param {function} props.onClose - 关闭通知的回调函数
 * @param {number} props.duration - 通知显示持续时间(毫秒)
 */
export default function AnimatedNotification({
  message,
  type = "success",
  show = false,
  onClose,
  duration = 3000,
}) {
  const notificationRef = useRef(null);
  const scopeRef = useRef(null);

  // 根据type决定通知的背景色
  const bgColorClass =
    {
      success: "bg-green-500",
      error: "bg-red-500",
      info: "bg-blue-500",
    }[type] || "bg-green-500";

  // 使用Anime.js创建动画
  useEffect(() => {
    if (show && notificationRef.current) {
      // 创建作用域以管理动画实例
      scopeRef.current = createScope({ root: notificationRef }).add((scope) => {
        // 入场动画
        animate(notificationRef.current, {
          translateY: ["-100%", "0%"],
          opacity: [0, 1],
          easing: "spring(1, 80, 10, 0)",
          duration: 800,
        });

        // 注册出场动画方法
        scope.add("hideNotification", () => {
          animate(notificationRef.current, {
            translateY: ["0%", "-110%"],
            opacity: [1, 0],
            easing: "easeOutExpo",
            duration: 600,
            complete: () => {
              if (onClose) onClose();
            },
          });
        });
      });

      // 设置自动关闭
      const timer = setTimeout(() => {
        if (scopeRef.current) {
          scopeRef.current.methods.hideNotification();
        }
      }, duration);

      return () => {
        clearTimeout(timer);
        if (scopeRef.current) {
          scopeRef.current.revert();
        }
      };
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      ref={notificationRef}
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-4 px-6 py-4 rounded-md shadow-lg ${bgColorClass} text-white font-medium flex items-center justify-between min-w-[300px] max-w-md opacity-0`}
      style={{ translateY: "-100%" }}
    >
      <div className="flex items-center">
        {type === "success" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        {type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        {type === "info" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <span>{message}</span>
      </div>
      <button
        onClick={() => scopeRef.current?.methods.hideNotification()}
        className="ml-4 text-white hover:text-gray-200 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
