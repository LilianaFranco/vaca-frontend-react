import axios from "axios";

export const UserInstance = axios.create({
  baseURL: "http://localhost:3001/users",
  //   headers: {
  //     "Authorization barer": "ASDsadasd122312DXASDasd",
  //     "Content-Type": "aplication json",
  //   },
});
