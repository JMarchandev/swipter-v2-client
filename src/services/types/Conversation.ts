import { MessageType } from './Message';
import { PetType } from "./Pet"

export type ConversationType = {
    pet: PetType
    id: number
    lastMessage: {
        seen: boolean,
        text: string
        date: number,
    },
    messages: MessageType[]
}