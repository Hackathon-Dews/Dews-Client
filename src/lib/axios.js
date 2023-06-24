import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://flask-production-19e8.up.railway.app",
});
