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

interface PostCardProps {
  post: PostType;
}
function PostCard({ post }: PostCardProps) {
  return (
    <>
      <div className="max-w-[335px] w-full h-[420px]!">
        <Card className="h-full justify-between">
          <CardHeader>
            <CardTitle>Fetching Post</CardTitle>
            <CardDescription>with Shadcn UI</CardDescription>
          </CardHeader>
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
          <CardFooter className="justify-end gap-x-3">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
      </div>
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
