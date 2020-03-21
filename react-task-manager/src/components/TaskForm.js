import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

// Create a Task Form functional component.
// It includes an input field and button function.
// This is to add the data of tasks into task list and to clear tasks off.
const TaskForm = () => {

    // Use useContext hook to call the context.
    // Use destructuring to get access to the state and functions from TaskListContext component.
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

    // Use useState hook to create a state to store the current value of the title of the task.
    // Use destructuring with 2 values; title state and setTitle function.
    // Set title to empty string for initial value.
    const [curretTitle, setTitle] = useState('');

    // This function to grab the value from the input field.
    // Once typing event occurs, it stores value in the current title state.
    const handleChange = (e) => {
        setTitle(e.target.value);
        console.log("log-from-handlechange: ", curretTitle);
    };

    // This function to handle submit event.
    // Add the task item to the list by calling addTask function.
    // Task will be added to the list field when button is clicked.
    const handleSubmit = (e) => {
        // Prevent the default action of submitting the form.
        e.preventDefault(); 

        // Check if editItem is equal to null or not.
        if (editItem === null) {
            // If true, invoke these functions.
            addTask(curretTitle); // Call addTask function to add a new task item to the list.
            setTitle(""); // Clear the input field after submitting the input form using button.
        } else {
            // If false, in the process of editing.
            // Call editTask function.
            editTask(curretTitle, editItem.id);
        }
    };

    // Rerender component once the piece of state is updated.
    useEffect(() => {
        // Check if the state of editItem is not null.
        if (editItem !== null) {
            // In the process of editing the existing task item.
            // Change the value of a title and set it as the title of editItem.
            setTitle(editItem.taskTitle);
            console.log("log-from-useeffect: ", editItem);
        } else {
            // Otherwise, if false, set the title to an empty string.
            setTitle("");
        }

        // Second argument, for to run this hook when the value of editItem is updated.
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} action="" className="form">
            <input onChange={handleChange} value={curretTitle} type="text" className="task-input" placeholder="Add Task..." required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem !== null ? "Edit/Save" : "Add Task"}
                </button>
                <button onClick={() => clearList()} className="btn clear-btn">Clear</button>
            </div>
        </form>
    );
};

export default TaskForm;