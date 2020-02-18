import React, { useContext } from 'react';
import { TaskListContext } from "../context/TaskListContext";

// Create a Task List functional component.
const TaskList = () => {

    // Use useContext hook to call the context.
    // Use destructuring to get access to tasks array from the state.
    const { tasks } = useContext(TaskListContext);

    return (
        <div>
            <ul className="list">
                {tasks.map((task) => {})}
            </ul>
        </div>
    );
};

export default TaskList;
