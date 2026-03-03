import z from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      error: "name is required",
    })
    .min(2, {
      error: "name length must be at least 2",
    })
    .max(15, {
      error: "name length must be lower then 15",
    }),
  email: z.email({
    error: "email is required",
  }),
  message: z
    .string({
      error: "message is required",
    })
    .min(2, {
      error: "message length must be at least 2",
    })
    .max(1000, {
      error: "message length must be lower then 1000",
    }),
});
