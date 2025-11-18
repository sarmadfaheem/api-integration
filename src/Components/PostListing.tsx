import { useQuery } from "@tanstack/react-query";
import { getPost } from "./PostApi";
import PostCard from "./PostCard";

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
    alert("Something Went Wrong");
  }

  return (
    <>
      <div className="post-container flex flex-wrap gap-4">
        {isPostLoading
          ? "Loading"
          : fetchedPosts?.map((post) => <PostCard post={post} key={post.id} />)}
      </div>
    </>
  );
}

export default PostListing;
