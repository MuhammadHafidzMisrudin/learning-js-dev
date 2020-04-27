// eslint-disable-next-line
import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; // generate unique id.

// Initialise and create the context.
export const TaskListContext = createContext();

// Create a Task List Context Provider functional component.
const TaskListContextProvider = (props) => {

    // Define an initial value of the state to be stored in the local storage browser.
    // Call getItem function to get data from local storage - pass in a param of collection (tasks).
    // If there is no data in local storage, then set the initial state as an empty array.
    // Parse data into JSON format.
    // const initialState = JSON.parse(localStorage.getItem('tasks') || []);
    // const initialState = JSON.parse(localStorage.getItem('tasks'));

    // Use hook to declare a task “state variable” of an array as initial value.
    // Set tasks state to initialState variable that is defined from local storage.
    // Use array destructuring to set variable of tasks (array of objects) and function.
    // State function of setTasks is to update the data (tasks state).
    // const [tasks, setTasks] = useState(initialState);
    const [tasks, setTasks] = useState([
        { taskTitle: "Text and call Inma", id: 1 },
        { taskTitle: "Make breakfast", id: 2 },
        { taskTitle: "Do assignment", id: 3 }
    ]);

    // Take effect after the render is committed to the screen.
    // Data will be saved in the local storage browser when re-rendered.
    useEffect(() => {
        // Use localStorage function to store values.
        // 1 param - name of collection/array in string.
        // 2 param - variable of collection/array which is converted into JSON format.
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Second argument, to run this hook when tasks array is updated.
    }, [tasks]);

    // State to store editable tasks.
    // Variable state of editItem is similar to the state to tasks.
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
    // Update the state, make it into state for editable item.
    // Pass a parameter of id.
    const findItem = (id) => {
        // Set an item to value that finds a target task item using its id.
        const item = tasks.find((task) => task.id === id);
        console.log("log-from-finditem-before-update: ", item);

        // Update the state and make the item editable.
        // The state of tasks is updated and it is made into the state of editItem
        setEditItem(item);
        console.log("log-from-finditem-after-update: ", item);
        console.log("log-from-finditem-new-state-edititem: ", editItem);
    };

    // Function for editing.
    // Pass parameters of properties of tasks object.
    const editTask = (title, id) => {
        // Use map to loop through the list.
        // Check if current task item with id is equal to target item with its id.
        // If return true, then returns a new object with new properties' values.
        // Otherwise, if false, returns the current task item.
        const newTasks = tasks.map((task) => {return task.id === id ? {taskTitle: title, id: id} : task});
        console.log("log-from-edittask-newtasks: ", newTasks);

        // Update the state with a new edited item.
        setTasks(newTasks);
        console.log("log-from-edittask-newtasks-after-edited: ", newTasks);
        console.log("log-from-edittask-tasks-after-edited: ", tasks);

        // Clear out input field after edit and reset editItem to null for a next new task item.
        setEditItem(null);
    };

    return (
        // Create a context provider to share the state across all components.
        // Value property assigned contains the data from state (tasks) and functions.
        // Pass functions (addTask, removeTask, clearList, findItem) to the provider in order to be used in other components.
        // Pass the state of editItem for access from other component.
        // Props.children refers to all components which will be wrapped by the context provider. 
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider; 