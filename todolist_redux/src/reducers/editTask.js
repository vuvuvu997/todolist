import * as types from './../constants/typeActions'
let initialState = { 
    id: '',
    name: '',
    status: true
}

let myReducer = (state = initialState, action) =>{
    switch(action.type) {
        case types.GET_UPDATE_TASK:
            state.id = action.task.id;
            state.name = action.task.name;
            state.status = action.task.status;
            return state;
        
        default:
            return state
    }
}

export default myReducer;