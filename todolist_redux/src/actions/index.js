import * as types from './../constants/typeActions';
export const showListsAll = () => {
    return {
        type: types.SHOW_LISTS_ALL
    }
}

export const addTask = (task)=> {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const oppenForm = () => {
    return {
        type: types.OPPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}
//tra ve task can update
export const getUpdateTask = (task) => {
    return {
        type: types.GET_UPDATE_TASK,
        task
    }
}

export const updateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        task
    }
}

export const filterTask = (infoFilter) => {
    return {
        type: types.FILTER_TASK,
        infoFilter
    }
}

export const searchTask = (keyword)=> {
    return {
        type: types.SEARCH_TASK,
        keyword
    }
}

export const sortTask = (infoSort) => {
    return {
        type: types.SORT_TASK,
        infoSort
    }
}