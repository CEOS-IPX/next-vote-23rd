import axios from "axios";
import { api } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { API_ENDPOINTS } from "@/constants/endpoint";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

type SignupRequest = {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
  part: string;
  team: string;
};

type SignupResponse = {
  success: boolean;
  data: {
    userId: number;
    username: string;
    name: string;
    part: string;
    team: string;
  } | null;
  error: {
    status: number;
    code: string;
    message: string;
  } | null;
};

type LoginRequest = {
  username: string;
  password: string;
};

type AuthResponse = {
  success: boolean;
  data: {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    user: {
      userId: number;
      username: string;
      name: string;
      part: string;
      team: string;
    };
  } | null;
  error: {
    status: number;
    code: string;
    message: string;
  } | null;
};

type ReissueResponse = {
  success: boolean;
  data: {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
  } | null;
  error: {
    status: number;
    code: string;
    message: string;
  } | null;
};

export async function signup(body: SignupRequest): Promise<SignupResponse> {
  const { data } = await api.post<SignupResponse>(
    API_ENDPOINTS.AUTH.SIGNUP,
    body,
  );
  return data;
}

export async function login(body: LoginRequest): Promise<AuthResponse> {
  const { data } = await axios.post(API_ENDPOINTS.AUTH.LOGIN, body, {
    withCredentials: true,
  });
  return data;
}

export async function reissue(): Promise<ReissueResponse> {
  const { data } = await axios.post(API_ENDPOINTS.AUTH.REISSUE, {}, {
    withCredentials: true,
  });
  return data;
}

export async function logout(): Promise<void> {
  const token = useAuthStore.getState().accessToken;
  await axios.post(API_ENDPOINTS.AUTH.LOGOUT, {}, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });
}
