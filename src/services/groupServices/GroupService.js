import { GroupInstance } from "src/services/groupServices/GroupsInstance";

export const get = async () => {
  let groups = GroupInstance.get();
  return groups;
};

export const getById = async (id) => {
  let group = await GroupInstance.get(`/${id}`);
  return group;
};

export const deleteById = async (id) => {
  return await GroupInstance.delete(`/${id}`);
};

export const create = async (data) => {
  return await GroupInstance.post("/", data);
};
