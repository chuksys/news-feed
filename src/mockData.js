import {v4 as uuid} from "uuid"
const commentId1 = uuid()
const commentId2 = uuid()
const commentId3 = uuid()
const commentId4 = uuid()

export const user = {
    id: 1,
    likesCount: 0,
    commentsCount: 2,
    comments: [
        {
            commentId: commentId1,
            postId: 1,
            postTitle: "This is the title for post one",
            body: "comment 1",
            date: new Date()
        },
        {
            commentId: commentId3,
            postId: 2,
            postTitle: "This is the title for post two",
            body: "comment 1",
            date: new Date()
        },
    ]
}

export const posts = [
    {
        id: 1,
        uid: 2,
        title: "This is the title for post one",
        description: "This is the desc for post one",
        likesCount: 0,
        comments: [
            {
                id: commentId1,
                uid: 1,
                body: "comment 1",
                date: new Date()
            },
            {
                id: commentId2,
                uid: 2,
                body: "comment 2",
                date: new Date()
            }
        ]
    },
    {
        id: 2,
        uid: 1,
        title: "This is the title for post two",
        description: "This is the desc for post two",
        likesCount: 0,
        comments: [
            {
                id: commentId3,
                uid: 1,
                body: "comment 1",
                date: new Date()
            },
            {
                id: commentId4,
                uid: 2,
                body: "comment 2",
                date: new Date()
            }
        ]
    }
]