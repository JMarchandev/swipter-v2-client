import { PetType } from "./Pet"

export type MessageType = {
    pet: PetType
    lastMessage: {
        seen: boolean,
        text: string
        date: number,
    },
}