import * as SecureStore from "expo-secure-store";

const JWT = "JWT";

export const saveJwt = async (value) => {
  await SecureStore.setItemAsync(JWT, value);
  console.log("Saved")
};

export const getJwt = async () => {
  return await SecureStore.getItemAsync(JWT);
};