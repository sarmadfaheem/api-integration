import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Users() {
  const UsersForm = useForm<{ email: string }>({
    mode: "all",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = UsersForm;

  const onSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="main-container">
      <div className="my-10 text-center space-x-15">
        <Link to="/" className="font-bold">
          Home
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <br />
        <input
          className="bg-white text-black px-2.5"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "The email is Required" },
            maxLength: { value: 10, message: "Too many characters" },
          })}
        />

        <p className="text-white">{errors.email?.message}</p>
      </form>
    </div>
  );
}

export default Users;
