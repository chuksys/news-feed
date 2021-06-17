import ACTIONS from "../actions"
import { increaseNewPostsCount } from "./newPostsCount"
import { showLoader, hideLoader } from "./loading"

const { 
    LOAD_POSTS,
    LIKE_POST,
    COMMENT_ON_POST } = ACTIONS


export const loadPosts = () => (dispatch, getState) => {
    dispatch(showLoader())

    const request = new Request("http://localhost:5000/postsMockData.json", {
          method: "GET", 
          headers: {
          "Content-Type": "application/json"
          }, 
          mode: "cors", 
          cache: "default"
        })
        
        fetch(request)
        .then(response => {
            if(response.ok) {
                return response;
            } else {
              throw Error(`${response.status} => ${response.statusText}`)  
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(hideLoader())
            //dispatch(increaseNewPostsCount(data.posts.length))
            if(data.posts.length !== getState().newPostsCount) {
                dispatch({
                    type: "LOAD_POSTS",
                    payload: data.posts
                })
            }
        })
        .catch(err => console.error(err))
    
    /* setTimeout(() => {
        dispatch(hideLoader())  
              dispatch({
                  type: LOAD_POSTS,
                  payload: posts
              })
    }, 3000) */
}

export const likePost = (postId) => (dispatch, getState) => {
    setTimeout(() => {  
        dispatch({
            type: LIKE_POST,
            payload: postId
        })
    }, 0)
}

export const commentOnPost = (postId, commentObjs, setComment) => (dispatch, getState) => {
    setComment("")
    setTimeout(() => {  
        dispatch({
            type: COMMENT_ON_POST,
            payload: {postId, commentObjs}
        })
    }, 0)
}


const postsReducer = (posts = [], action) => {
        switch(action.type) {
            case LOAD_POSTS : {
                return  [...posts, ...action.payload]
            }
            case LIKE_POST : {
                const updatedPosts = [...posts]
                const indexOfPostLiked 
                = posts.findIndex(post => post.id === action.payload)
            
                updatedPosts[indexOfPostLiked] = {
                    ...updatedPosts[indexOfPostLiked],
                    likesCount: updatedPosts[indexOfPostLiked].likesCount + 1 
                }

            return updatedPosts 
            }
            case COMMENT_ON_POST : {
                const updatedPosts = [...posts]
                const indexOfPostCommentedOn 
                = posts.findIndex(post => post.id === action.payload.postId)

                updatedPosts[indexOfPostCommentedOn] = {
                    ...updatedPosts[indexOfPostCommentedOn],
                    comments: [
                        ...updatedPosts[indexOfPostCommentedOn].comments,
                        action.payload.commentObjs.postCommentObj
                    ]
                }

                return updatedPosts
            }  
            default:
                return posts
        }
}

export default postsReducer