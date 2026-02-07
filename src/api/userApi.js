import axios from "axios";

const BASE_URL = "http://localhost:3001/users";

export const getAllUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(BASE_URL, userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
