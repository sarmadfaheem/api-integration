import { FormProvider, useForm } from "react-hook-form";
import Users from "./Users";
import { schema, type Schema } from "./services/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

function UserProvider() {
  const UsersForm = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...UsersForm}>
      <Users />
    </FormProvider>
  );
}

export default UserProvider;
