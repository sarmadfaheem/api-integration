import { useQuery } from "@tanstack/react-query";
import { getPost } from "./PostApi";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

function PostListing() {
  const {
    data: fetchedPosts,
    isLoading: isPostLoading,
    error: postError,
  } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });

  if (postError) {
    console.error("Something Went Wrong", postError);
  }

  return (
    <>
      <title>Post Container</title>

      <div className="max-w-11/12 mx-auto">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <div className="post-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {isPostLoading
            ? "Loading"
            : fetchedPosts?.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
        </div>
      </div>
    </>
  );
}

export default PostListing;
