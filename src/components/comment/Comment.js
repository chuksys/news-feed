import React from "react"

const Comment = (props) => {
    return (
        <>
            <p>{props.comment.body}</p>
            <span style={{color: "grey"}}>{props.comment.date.toString()}</span>
        </>
    )
}

export default Comment