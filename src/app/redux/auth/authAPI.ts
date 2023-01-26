import { LoginRequest } from "../api/interfaces";
import axios, { AxiosResponse } from "axios";
export const LONGIN_URL = "api/auth/login";
export const LOGOUT_URL = "api/auth/logout";
export const WHO_AM_I = "api/who-am-i";

export const logIn = (loginRequest: LoginRequest): Promise<AxiosResponse<any>> => {
  return axios.post(LONGIN_URL, { loginRequest });
};

export const logOut = (): Promise<AxiosResponse<any>> => {
  return axios.post(LOGOUT_URL);
};
export const who_am_i = (): Promise<AxiosResponse<any>> => {
  return axios.get(WHO_AM_I);
};
