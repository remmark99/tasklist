let taskID = 0;

export const addTask = taskDescription => {
    return {
        type: "ADD_TASK",
        payload: {
            taskID: taskID++,
            taskDescription
        }
    };
};

export const taskCompleted = taskID => {
    return {
        type: "TASK_COMPLETED",
        payload: {
            taskID
        }
    };
};

export const editTask = (taskID, newTaskDescription) => {
    return {
        type: "EDIT_TASK",
        payload: {
            taskID,
            taskDescription: newTaskDescription
        }
    };
};

export const deleteTask = taskID => {
    return {
        type: "DELETE_TASK",
        payload: {
            taskID
        }
    };
};