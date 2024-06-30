import axios from "axios";

export const httpAxios = axios.create({
  baseURL: process.env.BASE_URL,
  // baseURL:"http://localhost:8000"
});