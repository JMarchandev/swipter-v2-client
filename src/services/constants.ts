import { MatchType } from './types/Matche';
import { MessageType } from './types/Message';
import { UserType } from './types/User';
import cat1 from '../assets/images/messages/cat1.jpg'
import cat2 from '../assets/images/messages/cat2.jpg'
import cat3 from '../assets/images/messages/cat3.jpg'
import cat4 from '../assets/images/messages/cat4.jpg'
import cat5 from '../assets/images/messages/cat5.jpg'
import cat6 from '../assets/images/messages/cat6.jpg'
import cat7 from '../assets/images/messages/cat7.jpg'
import dog1 from '../assets/images/messages/dog1.jpg'
import dog10 from '../assets/images/messages/dog10.jpg'
import dog11 from '../assets/images/messages/dog11.jpg'
import dog12 from '../assets/images/messages/dog12.jpg'
import dog13 from '../assets/images/messages/dog13.jpg'
import dog2 from '../assets/images/messages/dog2.jpg'
import dog3 from '../assets/images/messages/dog3.jpg'
import dog4 from '../assets/images/messages/dog4.jpg'
import dog5 from '../assets/images/messages/dog5.jpg'
import dog6 from '../assets/images/messages/dog6.jpg'
import dog7 from '../assets/images/messages/dog7.jpg'
import dog8 from '../assets/images/messages/dog8.jpg'
import dog9 from '../assets/images/messages/dog9.jpg'
import man from "../assets/images/settings/man.jpg";

export const user: UserType = {
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
            age: 1
        },
        {
            name: "Mist",
            image: cat2,
            age: 2
        },
    ],
};

export const matches: MatchType[] = [
    {
        pet: {
            name: "name",
            age: 0,
            image: cat1,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: dog1,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: dog2,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: cat2,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: dog3,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: dog4,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: cat3,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: dog11,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: dog12,
        }
    },
    {
        pet: {
            name: "name",
            age: 0,
            image: dog13,
        }
    },
]

export const messages: MessageType[] = [
    {
        pet: {
            name: "Zhì",
            age: 2,
            image: dog5
        },
        lastMessage: {
            date: 1637934735000,
            seen: true,
            text: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. ",
        },
    },
    {
        pet: {
            name: "Maïly",
            age: 7,
            image: dog6
        },
        lastMessage: {
            date: 1656183765000,
            seen: false,
            text: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. ",
        },
    },
    {
        pet: {
            name: "Dafnée",
            age: 1,
            image: cat4
        },
        lastMessage: {
            date: 1654815999000,
            seen: false,
            text: "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. ",
        },
    },
    {
        pet: {
            name: "Lauréna",
            age: 9,
            image: dog7
        },
        lastMessage: {
            date: 1648663097000,
            seen: true,
            text: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. ",
        },
    },
    {
        pet: {
            name: "Marie-ève",
            age: 2,
            image: cat5
        },
        lastMessage: {
            date: 1656220398000,
            seen: true,
            text: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. ",
        },
    },
    {
        pet: {
            name: "Wá",
            age: 4,
            image: dog8
        },
        lastMessage: {
            date: 1660183294000,
            seen: true,
            text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
        },
    },
    {
        pet: {
            name: "Marie-françoise",
            age: 1,
            image: dog9
        },
        lastMessage: {
            date: 1640483785000,
            seen: false,
            text: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        },
    },
    {
        pet: {
            name: "Loïs",
            age: 10,
            image: cat6
        },
        lastMessage: {
            date: 1648565631000,
            seen: true,
            text: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        },
    },
    {
        pet: {
            name: "Océanne",
            age: 3,
            image: dog10
        },
        lastMessage: {
            date: 1648754845000,
            seen: false,
            text: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        },
    },
    {
        pet: {
            name: "Naëlle",
            age: 2,
            image: cat7
        },
        lastMessage: {
            date: 1652494789000,
            seen: true,
            text: "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        },
    }
]
