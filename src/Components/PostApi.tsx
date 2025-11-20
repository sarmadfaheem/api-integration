import axios from "axios";
import type { PostType } from "../types/PostType";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = async (page: number) => {
  try {
    const response = await api.get<PostType[]>(
      `/posts?_start=${page}&_limit=8`
    );
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export const fetchIndPost = async (id: string | undefined) => {
  try {
    const response = await api.get<PostType>(`/posts/${id}`);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.log("Something went wrong", error);
  }
};


