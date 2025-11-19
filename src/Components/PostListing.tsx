import { useQuery } from "@tanstack/react-query";
import { getPost } from "./PostApi";
import PostCard from "./PostCard";
import { Link, NavLink } from "react-router-dom";

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

      <div className="main-container">
        <div className="my-10 text-center">
          <Link to="/" className="font-bold">
            Home
          </Link>
        </div>
        <div className="post-container">
          {isPostLoading
            ? "Loading"
            : fetchedPosts?.map((post) => (
                <NavLink to={`/ind/${post.id}`}>
                  <PostCard post={post} key={post.id} />
                </NavLink>
              ))}
        </div>
      </div>
    </>
  );
}

export default PostListing;
