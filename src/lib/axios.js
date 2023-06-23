import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dews-server.000webhostapp.com/api",
});
