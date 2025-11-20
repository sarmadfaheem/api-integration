import { api } from "@/Components/PostApi";
import type { PostType } from "@/types/PostType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const deletePost = ({ id, page }: { id: string; page: number }) => {
  return api.delete(`/posts/${id}`);
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess(data, args) {
      toast.info("Post has been Deleted");
      queryClient.setQueryData(
        ["posts", args.page],
        (oldPosts: PostType[] | undefined) => {
          return oldPosts?.filter((post) => post.id !== args.id);
        }
      );
    },
  });
};
