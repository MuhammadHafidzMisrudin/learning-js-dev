import React, { createContext, useState } from 'react';

// Initialise and create the context.
export const TaskListContext = createContext();

// Create a Task List Context Provider functional component.
const TaskListContextProvider = (props) => {

    // Use hook. It declares a task “state variable” of an array as initial value.
    // Use array destructuring to set variable (array of objects) and function.
    // State function of setTasks is to update the data state.
    const [tasks, setTasks] = useState([
        { task: "Text and call Inma", id: 1 },
        { task: "Write code", id: 2 },
        { task: "Make dinner for Inma", id: 3 }
    ]);

    return (
        // Create a context provider to share the state across all components.
        // Property of value contains the data from state (tasks).
        // Props.children refers to all components which will be wrapped by the context provider.
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider; 