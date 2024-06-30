import axios from "axios";

export const httpAxios = axios.create({
  baseURL: "https://realtime-finance-dashboard.vercel.app/",
  // baseURL:"http://localhost:8000"
});