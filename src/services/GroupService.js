import { GroupInstance } from "./GroupsInstance.js";

export const get = () => {
  let groups = GroupInstance.get();
  return groups;
};

export const getById = (id) => {
  let group = GroupInstance.get(`/${id}`);
  return group;
};

export const deleteById = (id) => {
  return GroupInstance.delete(`/${id}`);
};

export const create = (data) => {
  return GroupInstance.post("/", data);
};
