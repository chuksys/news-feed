import React from "react"
import Comment from "../comment/Comment"

const Comments = (props) => {
    return (
        props.comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
        ))
    )  
}

export default Comments