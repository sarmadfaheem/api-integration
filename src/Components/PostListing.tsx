import { useQuery } from "@tanstack/react-query";
import { getPost } from "./PostApi";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { Toaster } from "sonner";
import { useForm } from "react-hook-form";
import type { PostType } from "@/types/PostType";
import { useCreatePost } from "@/hooks/api/use-create-post";

function PostListing() {
  const [page, setPage] = useState(0);

  const { mutate: createPost } = useCreatePost();

  const {
    data: fetchedPosts,
    isLoading: isPostLoading,
    error: postError,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPost(page),
  });

  if (postError) {
    console.error("Something Went Wrong", postError);
  }

  const createPostFrom = useForm<PostType>();
  const { register, handleSubmit, reset } = createPostFrom;

  return (
    <>
      <title>Post Container</title>

      <div className="main-container">
        <Toaster position="top-center" />
        <div className="flex justify-around mt-5 mb-5">
          <div className="mt-4">
            <Link to="/" className="font-bold">
              Home
            </Link>
          </div>
          <div>
            <form
              className="flex justify-center items-end space-x-6"
              onSubmit={handleSubmit((data) => {
                console.log("🚀 ~ PostListing ~ data:", data);
                createPost({ payload: data, page });
                reset({ body: "", title: "" });
              })}
            >
              <div>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  className="bg-white text-black  my-1.5 "
                  type="text"
                  {...register("title")}
                />
              </div>
              <div>
                <label htmlFor="title">Body</label>
                <br />
                <input
                  className="bg-white text-black  my-1.5"
                  type="text"
                  {...register("body")}
                />
              </div>
              <input
                className="bg-white text-black font-bold px-2 p-0.5 rounded-md mb-1.5"
                type="submit"
              />
            </form>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <Button
              disabled={page === 0 ? true : false}
              onClick={() => setPage((prev) => prev - 8)}
            >
              Prev
            </Button>
            <p>{page / 8 + 1}</p>
            <Button onClick={() => setPage((prev) => prev + 8)}>Next</Button>
          </div>
        </div>
        <div className="post-container">
          {isPostLoading
            ? "Loading"
            : fetchedPosts?.map((post) => (
                <div key={post.id}>
                  <PostCard post={post} page={page} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default PostListing;
