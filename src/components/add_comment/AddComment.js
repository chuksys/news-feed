import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { commentOnPost } from "../../redux/posts"
import { v4 as uuid} from "uuid"

const AddComment = (props) => {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()

    const handleCommentSubmit = (event) => {
        if (event.key === "Enter") {
            const commentId = uuid()

            const postCommentObj = {id: commentId, body: comment, date: new Date()}
            const userCommentObj = {
                commentId,
                postTitle: props.postTitle, 
                postId: props.postId,
                body: comment,
                date: new Date()
            }
            const commentObjs = {postCommentObj, userCommentObj}

            dispatch(commentOnPost(props.postId, commentObjs, setComment))
        }
    }

    return (
        <>
            <textarea 
                placeholder="Add Comment Here"
                onKeyPress={handleCommentSubmit} 
                value={comment}
                onChange={event => setComment(event.target.value)}
            />
        </>
    )
}

export default AddComment