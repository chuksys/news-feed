import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "../../redux/postsReducer"
import Post from "../post/Post"


const Posts = () => {
    const state = useSelector(state => state)
    const { posts, isLoading } = state
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])
    

    const showIsLoading = () => {
        return isLoading ? <h2 style={{textAlign: "center"}}>Loading...</h2> : null
      }

    return(
        <>
            {showIsLoading()} 

             {React.useMemo(() => posts.map(post => (
              <Post 
              key={post.id}
              post={post}
              />
            )),[posts])}
        </> 
    )
}

export default Posts