import axios from "axios";
import type { PostType } from "../types/PostType";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = async () => {
  try {
    const response = await api.get<PostType[]>(`/posts?_start=0&_limit=8`);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export const fetchIndPost = async (id: string) => {
  try {
    const response = await api.get<PostType[]>(`/posts/${id}`);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.log("Something went wrong", error);
  }
};