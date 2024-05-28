import axios from "axios";

export const LogInInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/login`,
  //   headers: {
  //     "Authorization barer": "ASDsadasd122312DXASDasd",
  //     "Content-Type": "aplication json",
  //   },
});
