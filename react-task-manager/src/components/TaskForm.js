import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

// Create a Task Form functional component.
// It includes an input field and button function.
// This is to add the data of tasks into task list and to clear tasks off.
const TaskForm = () => {

    // Use useContext hook to call the context.
    // Use destructuring to get access to addTask function.
    const { addTask } = useContext(TaskListContext);

    // Use useState hook to create a state to store the current value of the title of the task.
    // Use destructuring with 2 values; title state and setTitle function.
    const [curretTitle, setTitle] = useState('');

    // This function to grab the value from the input field.
    // Once typing event occurs, it stores value in the title state.
    const handleChange = (e) => {
        setTitle(e.target.value);
        console.log(curretTitle);
    };

    // This function to handle submit event.
    // Add the task item to the list by calling addTask function.
    // Task will be added to the list field when button is clicked.
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default action of submitting the form.
        addTask(curretTitle); // Add the task to the list.
    };

    return (
        <form onSubmit={handleSubmit} action="" className="form">
            <input onChange={handleChange} value={curretTitle} type="text" className="task-input" placeholder="Add Task..." required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button className="btn clear-btn">Clear</button>
            </div>
        </form>
    );
};

export default TaskForm;