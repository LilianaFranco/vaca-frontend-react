import axios from "axios";

export const LogInInstance = axios.create({
  baseURL: "http://localhost:3001/login",
  //   headers: {
  //     "Authorization barer": "ASDsadasd122312DXASDasd",
  //     "Content-Type": "aplication json",
  //   },
});
