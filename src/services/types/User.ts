import { PetType } from './Pet';
export type UserType = {
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
