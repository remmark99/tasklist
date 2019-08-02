import { combineReducers } from 'redux'

const tasklistReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    taskID: action.payload.taskID,
                    taskDescription: action.payload.taskDescription,
                    completed: false
                }
            ]
        case 'DELETE_TASK':
            return state.filter(task => task.taskID !== action.payload.taskID)
        case 'EDIT_TASK':
            return state.map(task => task.taskID === action.payload.taskID ? {...task, taskDescription: action.payload.taskDescription} : task)
        case 'TASK_COMPLETED':
            return state.map(task => task.taskID === action.payload.taskID ? {...task, completed: true} : task)
        default:
            return state;
    }
}

export default combineReducers({
    tasklist: tasklistReducer
})