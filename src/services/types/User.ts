import { PetType } from './Pet';
export type UserType = {
    id: number
    fullName: string
    age: number,
    description: string
    image: string,
    score: {
        friends: number,
        points: number,
    },
    pets: PetType[]
};

/**
 * Real user form API
 */
export type User = {
    id: number,
    firstName: string
    lastName: string
    description: string | null,
    email: string
    email_verified_at: boolean | null,
    created_at: string
    updated_at: string
}
