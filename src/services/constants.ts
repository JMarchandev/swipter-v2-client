import { ConversationType } from './types/Conversation';
import { MatchType } from './types/Matche';
import { PetType } from './types/Pet';
import { UserType } from './types/User';
import cat1 from '../assets/images/messages/cat1.jpg'
import cat2 from '../assets/images/messages/cat2.jpg'
// import cat3 from '../assets/images/messages/cat3.jpg'
// import cat4 from '../assets/images/messages/cat4.jpg'
// import cat5 from '../assets/images/messages/cat5.jpg'
// import cat6 from '../assets/images/messages/cat6.jpg'
// import cat7 from '../assets/images/messages/cat7.jpg'
// import dog1 from '../assets/images/messages/dog1.jpg'
// import dog10 from '../assets/images/messages/dog10.jpg'
// import dog11 from '../assets/images/messages/dog11.jpg'
// import dog12 from '../assets/images/messages/dog12.jpg'
// import dog13 from '../assets/images/messages/dog13.jpg'
// import dog2 from '../assets/images/messages/dog2.jpg'
// import dog3 from '../assets/images/messages/dog3.jpg'
// import dog4 from '../assets/images/messages/dog4.jpg'
import dog5 from '../assets/images/messages/dog5.jpg'
// import dog6 from '../assets/images/messages/dog6.jpg'
// import dog7 from '../assets/images/messages/dog7.jpg'
// import dog8 from '../assets/images/messages/dog8.jpg'
// import dog9 from '../assets/images/messages/dog9.jpg'
import man from "../assets/images/settings/man.jpg";
import playCat1 from '../assets/images/play/cat1.jpg'
import playCat2 from '../assets/images/play/cat2.jpg'
import playDog1 from '../assets/images/play/dog1.jpg'
import playDog2 from '../assets/images/play/dog2.jpg'
import playDog3 from '../assets/images/play/dog3.jpg'

export const user: UserType = {
    id: 100,
    fullName: "John Doe",
    age: 29,
    description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus id aspernatur dolorum dolore, blanditiis necessitatibus! Sunt id, beatae, consequuntur incidunt quibusdam nihil repellendus et veniam in sint illo dignissimos.",
    image: man,
    score: {
        friends: 60,
        points: 1000,
    },
    pets: [
        {
            name: "Felix",
            image: cat1,
            age: 1,
            ownerName: "Paul",
            description: "description",
            id: 1,
            ownerId: 100
        },
        {
            name: "Mist",
            image: cat2,
            age: 2,
            ownerName: "Paul",
            description: "description",
            id: 2,
            ownerId: 100
        },
    ],
};

export const matches: MatchType[] = [
    {
        pet: {
            name: "name",
            age: 0,
            image: cat1,
            description: "description",
            ownerName: "ownerName",
            id: 10,
            ownerId: 90
        }
    },
]

export const conversations: ConversationType[] = [
    {
        pet: {
            name: "Zhì",
            age: 2,
            image: dog5,
            description: "description",
            ownerName: "Paul",
            ownerId: 101,
            id: 1
        },
        id: 1,
        lastMessage: {
            date: 1637934735000,
            seen: false,
            text: "Nice !",
        },
        messages: [
            {
                content: "Hello ! How are you ?",
                authorId: 101, 
            },
            {
                content: "I'm fine ! you ?",
                authorId: 100, 
            },
            {
                content: "Nice !",
                authorId: 100, 
            },
            {
                content: "Top !",
                authorId: 101, 
            },
            {
                content: "Look my Dog ! ",
                authorId: 101, 
            },
            {
                content: "I saw !",
                authorId: 100, 
            },
            {
                content: "I love it !",
                authorId: 100, 
            },
        ]
    },
]

export const pets: PetType[] = [
    {
        age: 1,
        image: playCat1,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus id aspernatur dolorum dolore, blanditiis necessitatibus!",
        name: "Lolo",
        ownerName: "Guy",
        id: 1,
        ownerId: 0
    },
    {
        age: 1,
        image: playDog1,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus id aspernatur dolorum dolore, blanditiis necessitatibus!",
        name: "Lolo",
        ownerName: "Guy",
        id: 2,
        ownerId: 0
    },
    {
        age: 1,
        image: playCat2,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus id aspernatur dolorum dolore, blanditiis necessitatibus!",
        name: "Lolo",
        ownerName: "Guy",
        id: 3,
        ownerId: 0
    },
    {
        age: 1,
        image: playDog3,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus id aspernatur dolorum dolore, blanditiis necessitatibus!",
        name: "Lolo",
        ownerName: "Guy",
        id: 4,
        ownerId: 0
    },
    {
        age: 1,
        image: playDog2,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus id aspernatur dolorum dolore, blanditiis necessitatibus!",
        name: "Lolo",
        ownerName: "Guy",
        id: 5,
        ownerId: 0
    },
]