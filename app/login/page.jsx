import LoginForm from "@/app/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

export const metadata = {
  title: "登录 - Ascenday",
  description: "登录Ascenday，管理您的待办任务和学习计划",
};
