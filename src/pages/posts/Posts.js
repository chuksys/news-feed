import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "../../redux/posts"
import Post from "../../components/post/Post"
import { pollPosts } from "../../redux/newPostsCount"


const Posts = () => {
    const state = useSelector(state => state)
    const { posts, isLoading } = state
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(pollPosts())
      }, [dispatch])

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])
    

    const showPosts = () => {
        return isLoading ? <h2 style={{textAlign: "center"}}>Loading...</h2> :
        posts.map(post => (
            <Post 
            key={post.id}
            post={post}
            />
          ))
    }

    return(
        <div style={{margin: 40}}>
            {showPosts()} 
        </div> 
    )
}

export default Posts