import * as types from '../constants/typeActions';

let initialState = false; //close form

let myReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.TOGGLE_FORM: {
            return !state;
        }
        case types.CLOSE_FORM:
            state = false;
            return state;
        case types.OPPEN_FORM:
            state = true;
            return state;
        default:
            return state;
    }
}

export default myReducer;