import { AxiosStatic } from "axios";
import MockAdapter from "axios-mock-adapter";
import mockAuth from "./auth/mockAuth";
import mockCustomer from "./customer/mockCustomer";

export function mockAxios(axios: AxiosStatic) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });
  mockAuth(mock);
  mockCustomer(mock);
  return mock;
}
