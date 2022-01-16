import request from "./axios";

export const createBook = async (info) => {
  const response = await request.post("/furnitures/books", info);
  return response.data;
};

export const createMusic = async (info) => {
  const response = await request.post("/furnitures/musics", info);
  return response.data;
};

export const createTravel = async (info) => {
  const response = await request.post("/furnitures/travels", info);
  return response.data;
};

export const createPhoto = async (info) => {
  const response = await request.post("/furnitures/photos", info);
  return response.data;
};

export const getMyBooks = async () => {
  const response = await request.get("/furnitures/books");
  return response.data;
};

export const getMyMusics = async () => {
  const response = await request.get("/furnitures/musics");
  return response.data;
};

export const getMyTravels = async () => {
  const response = await request.get("/furnitures/travels");
  return response.data;
};

export const getMyPhotos = async () => {
  const response = await request.get("/furnitures/photos");
  return response.data;
};

export const getFriendBooks = async (userId) => {
  const response = await request.get(`/furnitures/books?userId=${userId}`);
  return response.data;
};

export const getFriendMusics = async (userId) => {
  const response = await request.get(`/furnitures/musics?userId=${userId}`);
  return response.data;
};

export const getFriendTravels = async (userId) => {
  const response = await request.get(`/furnitures/travels?userId=${userId}`);
  return response.data;
};

export const getFriendPhotos = async (userId) => {
  const response = await request.get(`/furnitures/photos?userId=${userId}`);
  return response.data;
};
