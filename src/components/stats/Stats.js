import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "../../redux/posts"

const Stats = () => {

    const state = useSelector(state => state)
    const { user, newPostsCount } = state
    const newPostsCountRef = useRef(newPostsCount)
    const reloadButtonRef = useRef(null)
    
    useEffect(() => {
        return newPostsCount > newPostsCountRef.current ? showReloadButton() : null
    }, [newPostsCount])

    const dispatch = useDispatch()

    const style = {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-evenly",
        padding: 24,
        backgroundColor: "skyblue"
    }

    const handleReload = () => {
        dispatch(loadPosts())
        hideReloadButton()
    }

    const showReloadButton = () => {
        reloadButtonRef.current.style.visibility = "visible"
    }

    const hideReloadButton = () => {
        reloadButtonRef.current.style.visibility = "hidden"
    }

    return (
        <div style={style}>
            <button
                style={{visibility: "hidden"}} 
                ref={reloadButtonRef} 
                onClick={handleReload}>Reload</button>
            <span><strong>Likes:</strong> {user.likesCount}</span>
            <span><strong>Comments:</strong> {user.commentsCount}</span>
        </div>
    )
}

export default Stats
