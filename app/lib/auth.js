import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// JWT密钥，应该保存在环境变量中
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-should-be-in-env";

/**
 * 对密码进行哈希处理
 * @param {string} password - 需要哈希的密码
 * @returns {Promise<string>} - 哈希后的密码
 */
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * 验证密码
 * @param {string} password - 用户输入的密码
 * @param {string} hashedPassword - 数据库中存储的哈希密码
 * @returns {Promise<boolean>} - 密码是否匹配
 */
export async function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * 生成JWT令牌
 * @param {object} payload - 令牌中包含的数据
 * @returns {string} - 生成的JWT令牌
 */
export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

/**
 * 验证JWT令牌
 * @param {string} token - 需要验证的JWT令牌
 * @returns {object|null} - 解码后的令牌数据，验证失败则返回null
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * 从请求中获取并验证JWT令牌
 * @param {Request} request - Next.js请求对象
 * @returns {object|null} - 用户数据，验证失败则返回null
 */
export function getAuthUser(request) {
  try {
    // 从请求头部获取令牌
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return null;
    }

    const token = authHeader.split(" ")[1];
    return verifyToken(token);
  } catch (error) {
    return null;
  }
}
