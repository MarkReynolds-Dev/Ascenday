"use client";

import { useEffect, useRef, useState } from "react";
import { animate, createScope, createSpring } from "animejs";
import Link from "next/link";
import { useAuth } from "@/app/lib/AuthContext";

export default function HomePage() {
  const root = useRef(null);
  const scope = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!root.current) return;

    try {
      // 使用createScope创建动画作用域
      scope.current = createScope({ root: root.current }).add((scope) => {
        // 主标题动画
        animate(".title-char", {
          translateY: [-50, 0],
          opacity: [0, 1],
          delay: (el, i) => i * 120,
          duration: 1200,
          ease: "out(4)",
        });

        // 副标题动画
        animate(".subtitle", {
          translateY: [20, 0],
          opacity: [0, 1],
          delay: 800,
          duration: 1000,
          ease: "out(3)",
        });

        // 卡片动画
        animate(".card", {
          scale: [0.8, 1],
          opacity: [0, 1],
          delay: (el, i) => 1200 + i * 200,
          duration: 800,
          ease: createSpring({ stiffness: 200 }),
        });

        // 按钮动画
        animate(".cta-button", {
          translateY: [20, 0],
          opacity: [0, 1],
          delay: 1800,
          duration: 600,
          ease: "out(3)",
        });

        // 添加动画方法
        scope.add("pulseElement", (selector) => {
          animate(selector, {
            scale: [
              { value: 1, duration: 0 },
              { value: 1.05, duration: 250, ease: "out(3)" },
              {
                value: 1,
                duration: 250,
                ease: createSpring({ stiffness: 300 }),
              },
            ],
          });
        });
      });

      setIsAnimated(true);
    } catch (error) {
      console.error("动画初始化失败:", error);
    }

    // 清理动画
    return () => {
      if (scope.current) {
        try {
          scope.current.revert();
        } catch (error) {
          console.error("清理动画失败:", error);
        }
      }
    };
  }, []);

  // 处理卡片悬停效果
  const handleCardHover = (index) => {
    if (
      scope.current &&
      scope.current.methods &&
      scope.current.methods.pulseElement
    ) {
      try {
        scope.current.methods.pulseElement(`.card:nth-child(${index + 1})`);
      } catch (error) {
        console.error("卡片动画效果失败:", error);
      }
    }
  };

  // 将标题拆分为字符进行动画
  const titleChars = "欢迎使用Ascenday".split("").map((char, index) => (
    <span key={index} className="title-char inline-block opacity-0">
      {char}
    </span>
  ));

  return (
    <div
      ref={root}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            {titleChars}
          </h1>
          <p className="subtitle text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
            一个功能强大的任务和学习计划管理平台，帮助您提高效率、专注于目标实现
          </p>
        </div>

        {/* 卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "任务管理",
              description:
                "创建、组织和跟踪您的任务，使用标签和优先级功能让管理更加高效。",
              color: "bg-blue-500",
              link: "/tasks",
              icon: "✓",
            },
            {
              title: "标签系统",
              description:
                "使用自定义标签对任务进行分类，按照您的方式组织工作和学习内容。",
              color: "bg-purple-500",
              link: "/tags",
              icon: "🏷️",
            },
            {
              title: "学习计划",
              description:
                "制定详细的学习计划，设定目标和时间表，追踪您的学习进度。",
              color: "bg-green-500",
              link: "/plans",
              icon: "📚",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="card bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl opacity-0"
              onMouseEnter={() => handleCardHover(index)}
            >
              <div
                className={`${card.color} h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl mb-4`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <Link
                href={card.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                了解更多
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* 按钮区域 */}
        <div className="text-center">
          {isAuthenticated ? (
            <Link
              href="/tasks"
              className="cta-button inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg opacity-0"
            >
              开始使用
            </Link>
          ) : (
            <>
              <Link
                href="/register"
                className="cta-button inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg mr-4 opacity-0"
              >
                立即注册
              </Link>
              <Link
                href="/login"
                className="cta-button inline-block bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors opacity-0"
              >
                登录
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
