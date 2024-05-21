import axios from "axios";

export const UserInstance = axios.create({
  baseURL: "http://localhost:3001/users",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});
