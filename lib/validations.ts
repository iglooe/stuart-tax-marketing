import * as z from "zod"

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters long",
    })
    .max(50),
  lastName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters long",
    })
    .max(50),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long",
  }),
})

export const checkEmailSchema = z.object({
  email: contactFormSchema.shape.email,
})
