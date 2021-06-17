import ACTIONS from "../actions"
import { user } from "../mockData"

const { 
    LIKE_POST,
    COMMENT_ON_POST } = ACTIONS


const userReducer = (state = user, action) => {
    switch(action.type) {
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