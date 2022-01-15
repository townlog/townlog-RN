import request from "./axios.js";

export const login = async ({ loginId, loginPw }) => {
  const response = await request.post("/users/login", {
    loginId,
    loginPw,
  });

  return response.data;
};

export const register = async (info) => {
  const response = await request.post("/users/register", info);

  return response.data;
};
