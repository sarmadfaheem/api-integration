import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { schema, type Schema } from "./services/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

function Users() {
  const UsersForm = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const {
    register,
    formState: { errors },
  } = UsersForm;

  return (
    <div className="main-container bg-white">
      <div className="my-10 text-center space-x-15">
        <Link to="/" className="text-black font-bold">
          Home
        </Link>
      </div>
      <div>
        <Stack sx={{ gap: 2 }}>
          <TextField
            {...register("name")}
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            {...register("email")}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Stack>
        <Autocomplete
          options={[
            { id: 1, label: "Texas" },
            { id: 2, label: "California" },
            { id: 3, label: "Los Angeles" },
          ]}
          renderInput={(params) => <TextField {...params} label="States" />}
        />
      </div>
    </div>
  );
}

export default Users;
