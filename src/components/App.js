import React from 'react'

import AddTask from './AddTask'
import Tasklist from './Tasklist'
import { addTask, deleteTask, editTask } from '../actions/index'

const App = () => {
    return (
        <div>
            <AddTask />
            <Tasklist />
        </div>
    );
}

export default App