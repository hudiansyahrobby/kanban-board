import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DUMMY_AUTH_TOKEN}`,
  },
});
