import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { likePost } from "../../redux/postsReducer"


const Post = (props) => {

    const dispatch = useDispatch()

    const handleLikeButtonClick = () => {
        dispatch(likePost(props.post.id))
    }

    const style = {
        border: "1px solid",
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 12
    }
    return(
        <div style={style}>
            <span>
                {props.post.likesCount}
            </span>
            <button onClick={handleLikeButtonClick}
                style={{width: 60, display: "flex", flexDirection: "row-reverse"}}>
                Like
            </button>
            <h1>{props.post.title}</h1>
            <p>{props.post.description}</p>

        </div>
    )
}

export default Post