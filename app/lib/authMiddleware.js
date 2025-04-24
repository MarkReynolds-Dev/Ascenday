import { NextResponse } from "next/server";
import { getAuthUser } from "./auth";

/**
 * 身份验证中间件
 *
 * 验证请求中是否包含有效的JWT令牌
 * 若验证失败，返回401未授权响应
 *
 * @param {Request} request - Next.js请求对象
 * @returns {NextResponse|null} - 若验证失败则返回错误响应，否则返回null以继续处理请求
 */
export function authMiddleware(request) {
  const user = getAuthUser(request);

  if (!user) {
    return NextResponse.json(
      { error: "未授权访问，请先登录" },
      { status: 401 }
    );
  }

  // 将用户信息添加到请求属性中，供后续处理使用
  request.user = user;
  return null;
}

/**
 * API路由包装器
 *
 * 为API路由添加身份验证检查
 *
 * @param {Function} handler - API路由处理函数
 * @returns {Function} - 包装后的API路由处理函数
 */
export function withAuth(handler) {
  return async function (request, ...args) {
    const authResult = authMiddleware(request);

    if (authResult) {
      return authResult;
    }

    return handler(request, ...args);
  };
}
