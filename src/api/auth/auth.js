import instance from "..";
import { storeToken } from "./storage";

const signup = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  storeToken(data.token);
  return data;
};

const signin = async (userInfo) => {
  const { data } = await instance.post("/auth/register", userInfo);
  storeToken(data.token);
  return data;
};

export { signin, signup };
