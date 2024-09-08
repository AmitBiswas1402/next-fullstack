import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 charecters")
    .max(20, "Username must be atmost 20 charecters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can't contain special charecters")

export const signupSchema = z.object({
    username: usernameValidation,

    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
})