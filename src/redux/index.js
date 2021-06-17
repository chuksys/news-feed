import { combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import user from "./user"
import posts from "./posts"
import newPostsCount from "./newPostsCount"
import isLoading from "./loading"

const rootReducer = combineReducers({
    user,
    posts,
    newPostsCount,
    isLoading
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
    )
)
export default store
