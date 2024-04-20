import { z } from "zod";

export const taskValidation = z.object({
  name: z.string().min(1, "Field name is required"),
  progress: z
    .string()
    .refine((val) => val, {
      message: "Field progress is required",
    })
    .refine(
      (val) => {
        const numberValue = parseInt(val);
        return numberValue <= 100 && numberValue >= 0;
      },
      {
        message: "Progress must be between 0 and 100",
      }
    ),
});

export type ITaskInput = z.infer<typeof taskValidation>;
