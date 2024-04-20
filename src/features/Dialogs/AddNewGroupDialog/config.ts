import { z } from "zod";

export const newGroupValidation = z.object({
  title: z.string().min(1, "Field name is required"),
  description: z.string().min(1, "Field description is required"),
});

export type INewGroupInput = z.infer<typeof newGroupValidation>;
