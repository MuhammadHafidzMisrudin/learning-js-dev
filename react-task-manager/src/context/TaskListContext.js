import React, { createContext, useState } from 'react';

// Initialise and create the context.
export const TaskListContext = createContext();

// Create a Task List Context Provider functional component.
const TaskListContextProvider = () => {

    // Use hook. It declares a task “state variable” of an array as initial value.
    // Use array destructuring to set variable (array of objects) and function.
    const [tasks, setTasks] = useState([
        { task: "Text and call Inma", id: 1 },
        { task: "Write code", id: 2 },
        { task: "Make dinner for Inma", id: 3 }
    ]);

    return (<div>Task List Context Provider</div>);
};

export default TaskListContextProvider; 