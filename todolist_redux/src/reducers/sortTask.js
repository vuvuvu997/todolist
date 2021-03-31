import * as types from './../constants/typeActions'
let initialState = { 
    name: '',
    status: -1
}

let myReducer = (state = initialState, action) =>{
    switch(action.type) {
        case types.SORT_TASK:
            state = { 
                name: action.infoSort.by,
                status: action.infoSort.value
            }
            return state;
        
        default:
            return state
    }
}

export default myReducer;