import { LogInInstance } from "./loginInstance";

export const login = async (data) => {
  return LogInInstance.post("/", data);
};
