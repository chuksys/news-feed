export const posts = [
    {
        id: 1,
        title: "This is the title for post one",
        description: "This is the desc for post one",
        likesCount: 2,
        comments: [
            {
                id: 1,
                body: "comment 1",
                date: new Date()
            },
            {
                id: 2,
                body: "comment 2",
                date: new Date()
            }
        ]
    },
    {
        id: 2,
        title: "This is the title for post two",
        description: "This is the desc for post two",
        likesCount: 4,
        comments: [
            {
                id: 1,
                body: "comment 1",
                date: new Date()
            },
            {
                id: 2,
                body: "comment 2",
                date: new Date()
            }
        ]
    }
]