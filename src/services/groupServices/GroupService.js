import axios from "axios";

const axiosConnection = () =>
  axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/groups`,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

export const get = async () => {
  let groups = axiosConnection().get();
  return groups;
};

export const getById = async (id) => {
  let group = await axiosConnection().get(`/${id}`);
  return group;
};

export const deleteById = async (id) => {
  return await axiosConnection().delete(`/${id}`);
};

export const create = async (data) => {
  return await axiosConnection().post("/", data);
};
