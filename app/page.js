import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3xl font-bold mt-10 mb-6">欢迎使用 Ascenday</h1>
      <p className="text-lg text-gray-600 max-w-md">
        个人待办与学习计划跟踪系统
      </p>
    </div>
  );
}
