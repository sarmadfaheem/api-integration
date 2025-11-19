import { useQuery } from "@tanstack/react-query";
import { getPost } from "./PostApi";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

function PostListing() {
  const [page, setPage] = useState(0);

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

  return (
    <>
      <title>Post Container</title>

      <div className="main-container">
        <div className="mt-5 mb-5 text-center">
          <Link to="/" className="font-bold">
            Home
          </Link>
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
        <div className="flex justify-center items-center space-x-6 mt-3">
          <Button
            disabled={page === 0 ? true : false}
            onClick={() => setPage((prev) => prev - 8)}
          >
            Prev
          </Button>
          <p className="inline-block">{page / 8 + 1}</p>
          <Button onClick={() => setPage((prev) => prev + 8)}>Next</Button>
        </div>
      </div>
    </>
  );
}

export default PostListing;
