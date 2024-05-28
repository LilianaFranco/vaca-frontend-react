import axios from "axios";

const axiosConnection = () =>
  axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/users`,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

export const get = () => {
  let users = axiosConnection().get();
  return users;
};

export const getById = (id) => {
  let user = axiosConnection().get(`/${id}`);
  return user;
};

export const deleteById = (id) => {
  return axiosConnection().delete(`/${id}`);
};

export const create = (data) => {
  console.log("data enviada:", data);
  return axiosConnection().post("/", data);
};
