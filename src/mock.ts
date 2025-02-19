export const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://avatars.githubusercontent.com/u/55879493?v=4",
            name : "Paulo Montefusco",
            role : "Developer Web",
        },
        content : [
            { type: 'paragraph', content: 'Fala galeraa 👋', },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
            { type: 'link', content: '👉 jane.design/doctorcare', },
        ],
        publishedAt: new Date('2025-02-18 22:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
            name : "Mayk Brito",
            role : "Educator @Rocketseat",
        },
        content : [
            { type: 'paragraph', content: 'Fala galeraa 👋', },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
            { type: 'link', content: '👉 jane.design/doctorcare', },
        ],
        publishedAt: new Date('2025-02-19 10:00:00'),
    },
]

export const comments = [
    {
        content: "Muito bom Devon, parabéns!! 👏👏"
    }
]