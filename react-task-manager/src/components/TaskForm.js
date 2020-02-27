import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

// Create a Task Form functional component.
// It includes an input field and button function.
// This is to add the data of tasks into task list and to clear tasks off.
const TaskForm = () => {

    // Use useContext hook to call the context
    // Use destructuring to get access to addTask function.
    const { addTask } = useContext(TaskListContext);

    return (
        <form action="" className="form">
            <input type="text" className="task-input" placeholder="Add Task..." required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button className="btn clear-btn">Clear</button>
            </div>
        </form>
    );
};

export default TaskForm;