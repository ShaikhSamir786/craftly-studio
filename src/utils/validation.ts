import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().trim().max(20, "Phone number is too long").optional().or(z.literal("")),
  company: z.string().trim().max(100, "Company name is too long").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message is too long"),
});
