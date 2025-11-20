import { api } from "@/Components/PostApi";
import type { PostType } from "@/types/PostType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const updatePost = async ({ id, page }: { id: string; page: number }) => {
  const res = await api.patch<PostType>(`/posts/${id}`, {
    title: "I have Updated",
  });
  return res.data;
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: (data, args) => {
      toast.success("Post has been Updated");
      queryClient.setQueryData(
        ["posts", args.page],
        (oldPosts: PostType[] | undefined) => {
          return oldPosts?.map((post) => {
            return post.id === args.id
              ? {
                  ...post,
                  title: data.title,
                }
              : post;
          });
        }
      );
    },
  });
};
