import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../types/response/AuthResponse";

const login = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return $api.post<AuthResponse>("/login", { email, password });
};

const registration = async (
  email: string,
  username: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return $api.post<AuthResponse>("/registration", {
    email,
    username,
    password,
  });
};

const logout = async (): Promise<void> => {
  return $api.get("/logout");
};

export { login, registration, logout };
