import axios from "axios";

// To do: El token no se regenera entre login y logout
// una posible solución puede ser implementar un interceptor y agregar los headers.
export const GroupInstance = axios.create({
  baseURL: "http://localhost:3001/groups",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});
