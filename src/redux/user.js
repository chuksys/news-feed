import ACTIONS from "../actions"
import { user } from "../mockData"

const { FETCH_USER, LIKE_POST, COMMENT_ON_POST } = ACTIONS

export const createGetRequestForUser = () => {
    return new Request("http://localhost:5000/userMockData.json", {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }, 
        mode: "cors", 
        cache: "default"
    })
}


export const fetchUser = () => dispatch => {
        fetch(createGetRequestForUser())
        .then(response => {
            if(response.ok) {
                return response;
            } else {
              throw Error(`${response.status} => ${response.statusText}`)  
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: "FETCH_USER",
                payload: data.user
            })
            
        })
        .catch(err => console.error(err))
}

export const syncUserStats = () => (dispatch, getState) => {
    setTimeout(() => {
        //api call to update user stats in backend
        dispatch(syncUserStats())
    }, 60000)
}

export const syncUserComments = () => (dispatch, getState) => {
    setTimeout(() => {
        //api call to update user comments in backend
        dispatch(syncUserComments())
    }, 60000)
}


const userReducer = (state = user, action) => {
    switch(action.type) {
        /* case FETCH_USER : {
            return {
                ...state,
                ...action.payload
            }
        } */
        case LIKE_POST : {
            return {
                ...state,
                likesCount: state.likesCount + 1
            }
        }
        case COMMENT_ON_POST : {
            return {
                ...state,
                commentsCount: state.commentsCount + 1,
                comments: [...state.comments, action.payload.commentObjs.userCommentObj]
            }
        }
        default:
            return state
    }
}

export default userReducer