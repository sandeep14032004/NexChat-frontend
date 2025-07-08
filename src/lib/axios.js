import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nexchat-backend-ski0.onrender.com/",
  withCredentials: true,
});
