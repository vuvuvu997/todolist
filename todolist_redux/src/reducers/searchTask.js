import * as types from './../constants/typeActions'
let initialState = '';

let myReducer = (state = initialState, action) =>{
    switch(action.type) {
        case types.SEARCH_TASK:
            state = action.keyword;
            return state;
        
        default:
            return state
    }
}

export default myReducer;