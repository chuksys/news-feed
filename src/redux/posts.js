import ACTIONS from "../actions"
import { showLoader, hideLoader } from "./loading"
import { increaseNewPostsCount } from "./newPostsCount"

const { 
    LOAD_POSTS,
    LIKE_POST,
    COMMENT_ON_POST } = ACTIONS

export const createGetRequestForPosts = () => {
    return new Request("http://localhost:5000/postsMockData.json", {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }, 
        mode: "cors", 
        cache: "default"
    })
}


export const loadPosts = () => (dispatch, getState) => {

        if(getState().newPostsCount !== 0 &&
        getState().newPostsCount === getState().posts.length) return

        dispatch(showLoader())

        fetch(createGetRequestForPosts())
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
            dispatch(increaseNewPostsCount(data.posts.length))
            dispatch({
                type: "LOAD_POSTS",
                payload: data.posts
            })
            
        })
        .catch(err => console.error(err))
}

export const likePost = postId => dispatch => { 
    //api call to update post in backend goes here 
    dispatch({
        type: LIKE_POST,
        payload: postId
    })
}

export const commentOnPost = (postId, commentObjs, setComment) => dispatch => {
    //api call to update post comment in backend goes here
    setComment("")
    dispatch({
        type: COMMENT_ON_POST,
        payload: {postId, commentObjs}
    })
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