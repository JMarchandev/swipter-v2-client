import { User } from "./User";

export type RegisterRequest = {
    firstName: string;
    lastName: string;
    password: string;
    email: string
}

export type LoginRequest = {
    email: string;
    password: string
}

export type AuthResponse = {
    token: string,
    user: User
}