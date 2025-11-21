import type { Option } from "@/Users/components/services/types/options";
import { Autocomplete } from "@mui/material";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  options: Option[];
}

function RHFAutoComplete<T extends FieldValues>({ name, options }: Props<T>) {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, ref } }) => (
          <Autocomplete options={options} />
        )}
      />
    </div>
  );
}

export default RHFAutoComplete;
