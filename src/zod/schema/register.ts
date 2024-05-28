import { z } from "zod";

export const registerSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type registerType = z.infer<typeof registerSchema>;
