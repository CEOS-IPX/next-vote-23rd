"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginForm } from "@/schemas/login";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";

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
      username: "",
      password: "",
    },
  });

  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);
  const username = watch("username");
  const password = watch("password");
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    setServerError("");
    setIsLoading(true);

    try {
      const res = await login({ username: data.username, password: data.password });
      setAuth(res.data!.accessToken, res.data!.user);
      router.push("/members");
    } catch (err: unknown) {
      if (err && typeof err === "object" && "response" in err) {
        const status = (err as { response: { status: number } }).response.status;
        if (status === 401) {
          setServerError("아이디 또는 비밀번호가 올바르지 않습니다.");
        } else {
          setServerError("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-3.5 w-full md:w-137.5 px-6 md:px-0">
      <p className="text-heading1 py-3 border-b mb-5">LOGIN</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
        <label className="flex flex-col">
          <input
            type="text"
            {...register("username")}
            className="border h-12 outline-none px-2"
            placeholder="아이디를 입력해주세요."
          />
          <p className="text-label2 text-red-500 py-1 min-h-6">
            {username.length > 0 && errors.username ? errors.username.message : " "}
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

        {serverError && (
          <p className="text-label2 text-red-500">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="border h-16 bg-black text-white cursor-pointer disabled:opacity-50"
        >
          {isLoading ? "로그인 중..." : "로그인 하기"}
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
