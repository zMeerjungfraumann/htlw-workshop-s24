import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
    username: string({message: "username is required"}).min(3).max(40),
    email: string({message: "email is required"}).email("please give me a valid email"),
    password: string({message: "password is required"}).min(8).max(255)
});

export type CreateuserInput = TypeOf<typeof createUserSchema>;