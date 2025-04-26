"use client";

import { createContext, useContext, useState, useEffect } from "react";

// 创建上下文
const AuthContext = createContext();

// 当前用户信息的默认状态
const defaultAuthState = {
  user: null,
  token: null,
  isLoading: true,
  isAuthenticated: false,
};

/**
 * 安全地访问 localStorage 的函数，避免服务器端渲染错误
 */
const safeLocalStorage = {
  getItem: (key) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },
  removeItem: (key) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },
};

/**
 * 认证上下文提供者组件
 */
export function AuthProvider({ children }) {
  // 用户认证状态
  const [auth, setAuth] = useState(defaultAuthState);

  // 登录函数
  const login = async (usernameOrEmail, password) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "登录失败");
      }

      // 存储令牌和用户信息
      safeLocalStorage.setItem("token", data.token);
      setAuth({
        user: data.user,
        token: data.token,
        isLoading: false,
        isAuthenticated: true,
      });

      return data;
    } catch (error) {
      throw error;
    }
  };

  // 注册函数
  const register = async (username, email, password, verificationCode) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, verificationCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "注册失败");
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  // 注销函数
  const logout = () => {
    safeLocalStorage.removeItem("token");
    setAuth({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  // 获取当前用户信息
  const fetchCurrentUser = async (token) => {
    try {
      const response = await fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("获取用户信息失败");
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error("获取用户信息出错:", error);
      return null;
    }
  };

  // 初始化时检查是否已登录
  useEffect(() => {
    async function initAuth() {
      const token = safeLocalStorage.getItem("token");

      if (!token) {
        setAuth({
          ...defaultAuthState,
          isLoading: false,
        });
        return;
      }

      try {
        // 验证令牌并获取用户信息
        const user = await fetchCurrentUser(token);

        if (user) {
          setAuth({
            user,
            token,
            isLoading: false,
            isAuthenticated: true,
          });
        } else {
          // 令牌无效或已过期
          safeLocalStorage.removeItem("token");
          setAuth({
            ...defaultAuthState,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error("初始化认证失败:", error);
        safeLocalStorage.removeItem("token");
        setAuth({
          ...defaultAuthState,
          isLoading: false,
        });
      }
    }

    initAuth();
  }, []);

  // 暴露的上下文值
  const value = {
    ...auth,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * 使用认证上下文的钩子
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth必须在AuthProvider内部使用");
  }
  return context;
}
