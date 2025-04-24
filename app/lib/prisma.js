import { PrismaClient } from "@/app/generated/prisma";

// 防止开发环境中创建多个Prisma实例
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// 创建Prisma客户端的全局单例
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
