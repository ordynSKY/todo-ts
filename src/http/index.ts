import axios from "axios";
import { AuthResponse } from "../types/response/AuthResponse";
import { handleErrorUtil } from "../utils/handleErrorUtil/handleErrorUtil";

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_TODO_BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${localStorage.getItem("token")}`);

  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get<AuthResponse>(
          `${process.env.REACT_APP_API_BASE_URL}/refresh`,
          { withCredentials: true }
        );

        localStorage.setItem("token", response.data.token);

        return $api.request(originalRequest);
      } catch (error) {
        handleErrorUtil(error);
        console.log(error);

        window.location.replace("/");
      }
    }
    throw error;
  }
);

export default $api;
