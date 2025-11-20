import type { PostType } from "@/types/PostType";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { useUpdatePost } from "@/hooks/api/use-update-post";
import { useDeletePost } from "@/hooks/api/use-delete-post";

interface PostCardProps {
  post: PostType;
  page: number;
}
function PostCard({ post, page }: PostCardProps) {
  const { mutate: deletePost } = useDeletePost();

  const { mutate: updatePost } = useUpdatePost();

  return (
    <>
      <Card className="h-full justify-between bg-violet-200">
        <CardHeader>
          <CardTitle>Fetching Post</CardTitle>
          <CardDescription>with Shadcn UI</CardDescription>
        </CardHeader>
        <NavLink to={`/ind/${post.id}`}>
          <CardContent>
            <p>
              <strong>ID:</strong> {post.id}
            </p>
            <p>
              <strong>Title:</strong> {post.title}
            </p>
            <p>
              <strong>Body:</strong> {post.body}
            </p>
          </CardContent>
        </NavLink>
        <CardFooter className="justify-end gap-x-3">
          <Button
            onClick={() => {
              updatePost({ id: post.id, page });
            }}
          >
            Update
          </Button>
          <Button onClick={() => deletePost({ id: post.id, page })}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default PostCard;
{
  /* <div className="post-card">
        <p>ID: {post.id}</p>
        <p>TITLE: {post.title}</p>
        <p>Body: {post.body}</p>
      </div>
      <div className="buttons">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div> */
}
