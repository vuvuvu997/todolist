import {combineReducers} from 'redux';
import tasks from './task';
import isDisplayForm from './isDisplayForm';
import edittingTask from './editTask';
import filterInfo from './filterTask';
import searchTask from './searchTask';
import sortTask from './sortTask';

let myReducer = combineReducers({
    tasks,   //tasks:tasks
    isDisplayForm,
    edittingTask,
    filterInfo,
    searchTask,
    sortTask
});

export default myReducer;
