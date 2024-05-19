import { LogInInstance } from "./loginInstance";

export const login = (data) => {
  return LogInInstance.post("/", data);
};
