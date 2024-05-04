import { UserInstance } from "./UserInstance";

export const get = () => {
  let users = UserInstance.get();
  return users;
};

export const getById = (id) => {
  let user = UserInstance.get(`/${id}`);
  return user;
};

export const deleteById = (id) => {
  return UserInstance.delete(`/${id}`);
};

export const create = (data) => {
  return UserInstance.post("/", data);
};
