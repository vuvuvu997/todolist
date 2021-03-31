import * as types from './../constants/typeActions'
let initialState = { 
    name: '',
    status: -1
}

let myReducer = (state = initialState, action) =>{
    switch(action.type) {
        case types.FILTER_TASK:
            state.name = action.infoFilter.name;
            state.status = action.infoFilter.status;
            return state;
        
        default:
            return state
    }
}

export default myReducer;