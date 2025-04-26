"use client";

import Link from "next/link";
import { useAuth } from "@/app/lib/AuthContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  // 导航链接
  const navLinks = [
    { href: "/tasks", title: "任务管理" },
    { href: "/tags", title: "标签管理" },
    // 可根据需要添加更多导航链接
  ];

  // 判断链接是否激活
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 mr-8">
              Ascenday
            </Link>

            {/* 导航链接 */}
            {isAuthenticated && (
              <div className="hidden md:flex space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(link.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">欢迎，{user?.username}</span>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  退出登录
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  登录
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  注册
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
