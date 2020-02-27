import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Initialise and create the context.
export const TaskListContext = createContext();

// Create a Task List Context Provider functional component.
const TaskListContextProvider = (props) => {

    // Use hook to declare a task “state variable” of an array as initial value.
    // Use array destructuring to set variable of tasks (array of objects) and function.
    // State function of setTasks is to update the data state.
    const [tasks, setTasks] = useState([
        { taskTitle: "Text and call Inma", id: 1 },
        { taskTitle: "Write code", id: 2 },
        { taskTitle: "Make dinner for Inma", id: 3 }
    ]);

    // This function to update the state and a new task item.
    // Add a new task item to the list when function is invoked.
    const addTask = (title) => {
        setTasks([...tasks, { taskTitle: title, id: uuidv4() }]);
    };

    return (
        // Create a context provider to share the state across all components.
        // Value property assigned contains the data from state (tasks) and functions.
        // Pass addTask function to the provider in order to use it in other components.
        // Props.children refers to all components which will be wrapped by the context provider. 
        <TaskListContext.Provider value={{ tasks, addTask }}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider; 