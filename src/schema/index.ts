import * as z from "zod";

export const RegisterSchmea = z.object({
  email: z.string().email({
    message: "Please Enter a valid email Address",
  }),
  name: z.string(),
  password: z.string(),
});

export const AddtaskSchmea = z.object({
  title: z.string(),
  description: z.string(),
  stage: z.string(),
  company_id: z.string().optional(),
  contact: z.string().optional(),
  due: z.string(),
  created_by_id: z.string(),
  assigned_to: z.array(z.string()),
});
