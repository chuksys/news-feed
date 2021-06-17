import React from "react"
import { useDispatch } from "react-redux"
import { likePost } from "../../redux/posts"
import AddComment from "../add_comment/AddComment"
import Comments from "../comments/Comments"

const Post = (props) => {

    const dispatch = useDispatch()

    const handleLikeButtonClick = () => {
        dispatch(likePost(props.post.id))
    }

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
            <span>
                {props.post.likesCount}
            </span>
            <button onClick={handleLikeButtonClick}
                style={{width: 60, display: "flex", flexDirection: "row-reverse"}}>
                Like
            </button>
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>

            <AddComment postId = {props.post.id} postTitle = {props.post.title}/>
            <Comments comments = {props.post.comments}/>

        </div>
    )
}

export default Post