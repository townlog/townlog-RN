import request from "./axios";

export const getMyFriends = async () => {
  const response = await request.get("/friends");
  return response.data;
};

export const SearchUser = async (nickname) => {
  const response = await request.post("/friends/search", { nickname });
  return response.data;
};

export const makeFriendRequest = async (friendId) => {
  const response = await request.post("/friends/requests", { friendId });
  return response.data;
};

export const getFriendRequest = async () => {
  const response = await request.get("/friends/requests");
  return response.data;
};

export const acceptFriendRequest = async (friendId, accept) => {
  const response = await request.post("/friends/accept", { friendId, accept });
  return response.data;
};
