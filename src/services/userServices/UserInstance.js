import axios from "axios";

export const UserInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/users`,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});
