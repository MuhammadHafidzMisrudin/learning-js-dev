import React from 'react';

// Create a Task functional component.
// It display the list of Task item form.
const Task = ({task}) => {
    // Use destructuring using task to get access to the task item.
    // Or pass "props" as an argument. And add "props.task.taskTitle" as {props.task.taskTitle} in the element.
    return (
        <li className="list-item">
            <span>{task.taskTitle}</span>
            <div>
                <button className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>

                <button className="btn-edit task-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    );
};

export default Task;
