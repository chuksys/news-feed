import ACTIONS from "../actions"

const { 
    SHOW_LOADER, 
    HIDE_LOADER } = ACTIONS

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}
    
export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}  


const loadingReducer = (state = false, action) => {
    switch(action.type){
        case SHOW_LOADER :
            return true  
        
        case HIDE_LOADER :
            return false
        default:
                return state     
    }
}

export default loadingReducer