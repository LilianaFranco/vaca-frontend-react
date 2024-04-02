import axios from "axios";

export const GroupInstance = axios.create({
  baseURL: "http://localhost:3001/api/groups",
  //   headers: {
  //     "Authorization barer": "ASDsadasd122312DXASDasd",
  //     "Content-Type": "aplication json",
  //   },
});
