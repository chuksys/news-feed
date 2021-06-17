import ACTIONS from "../actions"
import { createGetRequestForPosts } from "./posts"

const { INCREASE_NEW_POSTS_COUNT } = ACTIONS

export const pollPosts = () => (dispatch, getState) => {
    setTimeout(() => {
        fetch(createGetRequestForPosts())
        .then(response => {
            if(response.ok) {
                dispatch(pollPosts())
                return response;
            } else {
              throw Error(`${response.status} => ${response.statusText}`)  
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.posts.length > getState().newPostsCount) {
                dispatch(increaseNewPostsCount(data.posts.length))
            }
        })
        .catch(err => console.error(err))
        
    }, 4000)
}

export const increaseNewPostsCount = (newCount) => {
    return {
        type: "INCREASE_NEW_POSTS_COUNT",
        payload: newCount
    }
}

const newPostsCount = (newPostsCount = 0, action) => {
    switch(action.type) {
        case INCREASE_NEW_POSTS_COUNT : {
            return action.payload
        }
        default:
            return newPostsCount
    }
}

export default newPostsCount