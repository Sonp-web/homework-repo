import { type AxiosResponse } from "axios";
import { instance } from "./instance";

export type UserType = {
  email: string;
  password: string;
  name: string;
};
type RegisterResponceType = {
  access_token: string;
};

export const usersApi = {
  addUser(user: UserType) {
    return instance.post<
      RegisterResponceType,
      AxiosResponse<RegisterResponceType>,
      string
    >("auth/register", JSON.stringify(user));
  },
};
