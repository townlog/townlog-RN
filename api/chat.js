import request from "./axios.js";

export const getRoomId = async (friendId) => {
  const response = await request.get(`/chat?friendId=${friendId}`);

  return response.data;
};

export const sendMessageWithCreation = async ({ friendId, payload }) => {
  const response = await request.post("/chat", {
    friendId,
    payload,
  });

  return response.data;
};

export const getMyRooms = async () => {
  const response = await request.get("/chat/rooms");

  return response.data;
};

export const seeRoom = async (roomId) => {
  const response = await request.get(`/chat/rooms/${roomId}`);

  return response.data;
};
