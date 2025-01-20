import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
    accept: "application/json",
  },
});
