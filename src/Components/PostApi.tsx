import axios from "axios";
import type { PostType } from "../types/PostType";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = async () => {
  const response = await api.get<PostType[]>("/posts");
  return response.data;
};
