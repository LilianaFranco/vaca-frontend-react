import axios from "axios";

const axiosConnection = () =>
  axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/login`,
    //   headers: {
    //     "Authorization barer": "ASDsadasd122312DXASDasd",
    //     "Content-Type": "aplication json",
    //   },
  });

export const login = async (data) => {
  return axiosConnection().post("/", data);
};
