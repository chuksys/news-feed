import ACTIONS from "../actions"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { posts } from "../mockData"

const { 
    LOAD_POSTS,
    LIKE_POST,
    COMMENT_ON_POST,
    SHOW_LOADER, 
    HIDE_LOADER } = ACTIONS


export const loadPosts = () => (dispatch, getState) => {
    dispatch(showLoader())
    setTimeout(() => {
        dispatch(hideLoader())  
              dispatch({
                  type: LOAD_POSTS,
                  payload: posts
              })
    }, 3000)
}

export const likePost = (postId) => (dispatch, getState) => {
    setTimeout(() => {  
        dispatch({
            type: LIKE_POST,
            payload: postId
        })
    }, 0)
}

export const commentOnPost = (postId, comment) => (dispatch, getState) => {
    setTimeout(() => {  
        dispatch({
            type: COMMENT_ON_POST,
            payload: {postId, comment}
        })
    }, 0)
}


const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

const initialState = {
    posts: [],
    isLoading: false
}

const postsReducer = (state = initialState, action) => {
        switch(action.type) {
            case LOAD_POSTS : {
                return {
                    ...state,
                    posts: [...state.posts, ...action.payload],
                    isLoading: false
                }
            }
            case LIKE_POST : {
                const updatedPosts = [...state.posts]
                const indexOfPostLiked = state.posts.findIndex(post => post.id === action.payload)
                updatedPosts[indexOfPostLiked] = {
                    ...updatedPosts[indexOfPostLiked],
                    likesCount: updatedPosts[indexOfPostLiked].likesCount + 1 
                }

                return {
                    ...state,
                    posts: updatedPosts
                } 
            }
            case COMMENT_ON_POST : {
                const updatedPosts = [...state.posts]
                const indexOfPostCommentedOn = state.posts.findIndex(post => post.id === action.payload.postId)
                updatedPosts[indexOfPostCommentedOn] = {
                    ...updatedPosts[indexOfPostCommentedOn],
                    comments: [
                        ...updatedPosts[indexOfPostCommentedOn].comments,
                        action.payload.comment
                    ]
                }

                return {
                    ...state,
                    posts: updatedPosts
                } 
            }   
            case SHOW_LOADER :
                return {
                  ...state,
                  isLoading: true  
                }
            case HIDE_LOADER :
                return {
                    ...state,
                    isLoading: false
                }    
            default:
                return state 
        }
}

const store = createStore(postsReducer, composeWithDevTools(
    applyMiddleware(thunk)
)
)
export default store