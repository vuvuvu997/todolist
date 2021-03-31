import * as types from '../constants/typeActions';
var randomstring = require("randomstring");

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data? data: [];

let findIndex = (id, datas)=> {
    let result = -1;
    datas.forEach((task, index) => {
      if(task.id === id) {
        result = index;
      }
    });
    return result;
}

let myReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.SHOW_LISTS_ALL: {
            return state;
        }
        
        case types.ADD_TASK:
            let task = { 
                id: randomstring.generate(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(task);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        
        case types.UPDATE_TASK:
            console.log(action);
            let indexUpdate = findIndex(action.task.id, state);
            state[indexUpdate] = action.task;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; 

        case types.UPDATE_STATUS: 
            let index = findIndex(action.id, state);
            state[index].status = !state[index].status
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; 
        
        case types.DELETE_TASK:
            let indexDelete = findIndex(action.id, state);
            state.splice(indexDelete, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default:
            return state;
    }
}

export default myReducer;