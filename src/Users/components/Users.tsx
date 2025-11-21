import { Link } from "react-router-dom";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { type Schema } from "./services/types/schema";

import { useFormContext } from "react-hook-form";
import RHFAutoComplete from "@/Components/RHFAutoComplete";

function Users() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
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
        <RHFAutoComplete<Schema> name="states" />
      </div>
    </div>
  );
}

export default Users;
