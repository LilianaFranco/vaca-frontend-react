import axios from "axios";

export const GroupInstance = axios.create({
  baseURL: "http://localhost:3001/groups",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});
