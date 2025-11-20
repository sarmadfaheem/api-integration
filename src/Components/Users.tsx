import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Users() {
  const { register } = useForm<{ email: string }>();

  return (
    <div className="main-container">
      <div className="my-10 text-center space-x-15">
        <Link to="/" className="font-bold">
          Home
        </Link>
      </div>
      <input type="text" {...register("email")} />
    </div>
  );
}

export default Users;
