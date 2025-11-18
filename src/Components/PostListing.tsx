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
      <div className="post-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {isPostLoading
          ? "Loading"
          : fetchedPosts?.map((post) => <PostCard post={post} key={post.id} />)}
      </div>
    </>
  );
}

export default PostListing;
