import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // generate unique id.

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

    // State to store editable tasks.
    // Use array destructuring to set the state of editItem to null.
    const [editItem, setEditItem] = useState(null); 

    // This function to update the state and a new task item.
    // Add a new task item to the list when the setTasks function gets invoked.
    // Assign id prop to random UUID via installed package.
    // UUID is to generate unique id for the object of a new task item.
    const addTask = (title) => {
        setTasks([...tasks, { taskTitle: title, id: uuidv4() }]);
    };

    // This function to update the current state and to delete the existing added task item in the list.
    const removeTask = (id) => {
        // The condition shows the filter method to keep the task item in the array or filter it out.
        // If the condition is true, the id of the current item is not equal to the target actual id.
        // Hence, the task item will be kept in the array.
        // Otherwise, if it is false, the current task will be filtered out.
        // Hence, it produces a new array with deleted task item.
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // This function to clear out all task items in the list.
    const clearList = () => {
        // Set it to an empty array. The state will be empty.
        setTasks([]);
    };

    // This function to find an item that is needed to update.
    // Pass a parameter of id.
    const findItem = (id) => {
        // Set an item to value that finds a target task item using its id.
        const item = tasks.find((task) => task.id === id);
        console.log(item);

        // Update the state and make the item editable.
        setEditItem(item);
        console.log("current editItem: ", editItem);
    };

    return (
        // Create a context provider to share the state across all components.
        // Value property assigned contains the data from state (tasks) and functions.
        // Pass functions (addTask, removeTask, clearList, findItem) to the provider in order to be used in other components.
        // Props.children refers to all components which will be wrapped by the context provider. 
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem }}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider; 