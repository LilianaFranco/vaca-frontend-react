import axios from "axios";

export const UserInstance = axios.create({
  baseURL: "http://localhost:3001/Users",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "aplication json",
  },
});
