import * as typesAction from './../constants/typesAction';
import * as messages from './../constants/messages';
let initialState = messages.WELCOME;

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAction.CHANGE_MESSAGE: 
            state = action.message;
            return state;
        default:
            return state
    }
}

export default myReducer;