import { USERS } from "./FakeUsersData";

export const POSTS=[
    {
        user:USERS[0].userName,
        likes:93865,
        caption:'The caption which should help me check how this shit renders.',
        profilePic:USERS[0].image,
        image:'https://preview.redd.it/mvafli95xxf81.jpg?width=640&crop=smart&auto=webp&s=da1b3d3c60c7e396a2d4723019693894c19312cf',
        comments:[
            {
                user:'Some User',
                comment:'Comment 1'
            }
        ]
    },
    {
        user:USERS[1].userName,
        likes:258904,
        caption:'Caption1',
        profilePic:USERS[1].image,
        image:'https://preview.redd.it/uem01pddyxf81.jpg?width=640&crop=smart&auto=webp&s=84c4f142808385fe168e3aeef1e52abc33ae05fe',
        comments:[
            {
                user:'Some User',
                comment:'Comment 1'
            },
            {
                user:'Some other User',
                comment:'A very big comment to check if things really do work correctly.'
            },
            {
                user:'Some other User',
                comment:'Comment3'
            },
        ]
    },{
        user:USERS[2].userName,
        likes:72159,
        caption:'Caption 3',
        profilePic:USERS[2].image,
        image:'https://preview.redd.it/v557huve1yf81.jpg?width=640&crop=smart&auto=webp&s=d6974a1ae14dae402fef8f3120d1bb679ab60d21',
        comments:[
            {
                user:'Some User',
                comment:'Comment 1'
            },
            {
                user:'Some other User',
                comment:'Comment2'
            },
            {
                user:'Some other User',
                comment:'Comment3'
            },
        ]
    },
    {
        user:USERS[2].userName,
        likes:356,
        caption:'Caption 4 and some more words to go with it',
        profilePic:USERS[2].image,
        image:'https://preview.redd.it/v557huve1yf81.jpg?width=640&crop=smart&auto=webp&s=d6974a1ae14dae402fef8f3120d1bb679ab60d21',
        comments:[
            // {
            //     user:'Some User',
            //     comment:'Comment 1'
            // },
            // {
            //     user:'Some other User',
            //     comment:'Comment2'
            // },
            // {
            //     user:'Some other User',
            //     comment:'Comment3'
            // },
        ]
    },
    
]
