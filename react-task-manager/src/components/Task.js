import React, {useContext} from "react";
import { TaskListContext } from "../context/TaskListContext";

// Create a Task functional component.
// To display the list of Task item form.
const Task = ({task}) => {
    // Use destructuring using task to get access to the task item.
    // Or pass "props" as an argument or parameter. And add "props.task.taskTitle" as {props.task.taskTitle} in the element.
    
    // Use useContext hook to call the context.
    // Use destructuring to get access to functions from TaskListContext component.
    const { removeTask, findItem } = useContext(TaskListContext);
    
    return (
        <li className="list-item">
            <span>{task.taskTitle}</span>
            <div>
                <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>

                <button onClick={() => findItem(task.id)} className="btn-edit task-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    );
};

export default Task;
