import z from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      error: "name is required",
    })
    .trim()
    .min(2, {
      error: "name length must be at least 2",
    })
    .max(15, {
      error: "name length must be lower then 15",
    }),
  email: z
    .string({
      error: "email is required",
    })
    .trim()
    .toLowerCase()
    .pipe(z.email("Invalid email address")),
  message: z
    .string({
      error: "message is required",
    })
    .trim()
    .min(2, {
      error: "message length must be at least 2",
    })
    .max(1000, {
      error: "message length must be lower then 1000",
    }),
});
