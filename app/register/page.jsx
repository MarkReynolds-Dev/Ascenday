import RegisterForm from "@/app/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}

export const metadata = {
  title: "注册 - Ascenday",
  description: "注册Ascenday，开始管理您的待办任务和学习计划",
};
