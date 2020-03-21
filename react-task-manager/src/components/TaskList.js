import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

// Create a Task List functional component.
// Parent component for Task component.
// Invoke child component (Task) to render a list of Task items.
const TaskList = () => {

    // Use useContext hook to call the context.
    // Use destructuring to get access to tasks array from the state.
    const { tasks } = useContext(TaskListContext);

    return (
        <div>
            {/* Use conditional rendering with ternary operator to display list or no list */}
            {tasks.length > 0 ? (
                <ul className="list">
                {/* Mapping through the array of state. */}
                {tasks.map((task) => {
                    // Assign task property to task item component.
                    // Assign key property to id of task item component.
                    return <Task task={task} key={task.id} />;
                })}
            </ul>
            ) : (<div className="no-tasks">No Tasks Here</div>)}
        </div>
    );
};

export default TaskList;
