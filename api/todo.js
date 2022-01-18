import request from "./axios";

export const getTodosbyDate = async (date, userId) => {
  const response = await request.get(`/todos?date=${date}`);
  return response.data;
};

export const createTodos = async (quest, date) => {
  const response = await request.post(`/todos`, {
    quest,
    date,
  });

  return response.data;
};

export const toggleTodo = async (todoId) => {
  const response = await request.post(`/todos/finish`, {
    todoId,
  });

  return response.data;
};
