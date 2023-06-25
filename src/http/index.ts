import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_BASE_URL,
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
    if (error.response.status == 401) {
      try {
        const response = await axios.get<AuthResponse>(
          `${process.env.REACT_APP_API_BASE_URL}/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem("token", response.data.token);
        return $api.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
  }
);

export default $api;
