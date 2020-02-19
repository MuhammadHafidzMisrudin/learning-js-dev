import React from 'react';
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskListContextProvider from "../context/TaskListContext"
import '../App.css';

const App = () => {
    return (
        // Wrap all components of entire app with the context provider.
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        {/* Invoke to render TaskForm component. */}
                        <TaskForm />

                        {/* Invoke the parent component to render TaskList component. */}
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
};

export default App;