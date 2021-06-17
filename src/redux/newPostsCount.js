import ACTIONS from "../actions"

const { INCREASE_NEW_POSTS_COUNT } = ACTIONS

export const pollPosts = () => (dispatch, getState) => {
    setTimeout(() => {
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

const getInitialPostsCount = () => {
    const request = new Request("http://localhost:5000/postsMockData.json", {
          method: "GET", 
          headers: {
          "Content-Type": "application/json"
          }, 
          mode: "cors", 
          cache: "default"
        })
        
        return fetch(request)
        .then(response => {
            if(response.ok) {
                return response;
            } else {
              throw Error(`${response.status} => ${response.statusText}`)  
            }
        })
        .then(response => response.json())
        .then(data => data.posts.length)
        .catch(err => console.error(err))
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