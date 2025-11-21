import { pattern } from "@/constants";
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is Required" }),
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .refine((email) => pattern.email.test(email), {
      message: "Email not Valid",
    }),
  states: z.array(z.string()).min(1).max(2),
});

export type Schema = z.infer<typeof schema>;