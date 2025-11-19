import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchIndPost } from "./PostApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

function IndividualPost() {
  const { id } = useParams();

  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchIndPost(id),
  });

  return (
    <div className="main-container">
      <div className="my-10 text-center space-x-15">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/pc" className="font-bold">
          Go Back
        </Link>
      </div>
      <div>
        <Card className="h-full justify-between bg-violet-200">
          <CardHeader>
            <CardTitle>Fetching Post</CardTitle>
            <CardDescription>with Shadcn UI</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>ID:</strong> {post?.id}
            </p>

            <p>
              <strong>Title:</strong> {post?.title}
            </p>
            <p>
              <strong>Body:</strong> {post?.body}
            </p>
          </CardContent>
          <CardFooter className="justify-end gap-x-3">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default IndividualPost;
