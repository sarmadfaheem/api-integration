import { api } from "@/Components/PostApi";
import type { PostType } from "@/types/PostType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const createPost = async ({
  payload,
  page,
}: {
  payload: PostType;
  page: number;
}) => {
  const response = await api.post<PostType>("/posts", payload);
  return response.data;
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (data, args) => {
      toast.success("New Post is Created");
      console.log("🚀 ~ useCreatePost ~ data:", data);
      queryClient.setQueryData(["posts", args.page], (oldPosts: PostType[]) => {
        return [data, ...oldPosts];
      });
    },
  });
};
