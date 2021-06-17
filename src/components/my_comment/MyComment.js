import React from "react"

const MyComment = (props) => {

    const style = {
        border: "1px solid #E5E5E5",
        display: "flex",
        flexDirection: "column",
        width: "40%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 12
    }

    return(
        <div style={style}>
            <h1>{props.myComment.body}</h1>
            <p>{props.myComment.postTitle}</p>
            <p>{props.myComment.date.toString()}</p>
        </div>  
    )
}

export default MyComment