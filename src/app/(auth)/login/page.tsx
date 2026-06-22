"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginForm } from "@/schemas/login";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { login } = useAuth();
  const email = watch("email");
  const password = watch("password");
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    setLoginError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 401) {
          setLoginError("이메일 또는 비밀번호가 올바르지 않습니다.");
        } else if (res.status === 400) {
          setLoginError("입력값을 확인해 주세요.");
        } else if (res.status === 403) {
          setLoginError("비활성화 또는 탈퇴된 계정입니다.");
        } else {
          setLoginError("로그인 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
        return;
      }

      const { data: responseData } = await res.json();
      login(responseData.accessToken);
      router.push("/members");
    } catch {
      setLoginError("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <main className="flex flex-col gap-3.5 w-full md:w-137.5 px-6 md:px-0">
      <p className="text-heading1 py-3 border-b mb-5">LOGIN</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
        <label className="flex flex-col">
          <input
            type="email"
            {...register("email")}
            className="border h-12 outline-none px-2"
            placeholder="이메일을 입력해주세요."
          />
          <p className="text-label2 text-red-500 py-1 min-h-6">
            {email.length > 0 && errors.email ? errors.email.message : " "}
          </p>
        </label>

        <label className="flex flex-col">
          <input
            type="password"
            {...register("password")}
            className="border h-12 outline-none px-2"
            placeholder="비밀번호를 입력해주세요."
          />
          <p className="text-label2 text-red-500 py-1 min-h-6">
            {password.length > 0 && errors.password
              ? errors.password.message
              : " "}
          </p>
        </label>

        {loginError && (
          <p className="text-label2 text-red-500">{loginError}</p>
        )}

        <button
          type="submit"
          className="border h-16 bg-black text-white cursor-pointer"
        >
          로그인 하기
        </button>
      </form>

      <Link
        href="/signup"
        className="text-center cursor-pointer underline text-gray-500"
      >
        아직 계정이 없나요?
        <br className="md:hidden" />
        회원 가입 하러 가기
      </Link>
    </main>
  );
}
