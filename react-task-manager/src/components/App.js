import React from 'react';
import TaskList from "./TaskList";
import TaskListContextProvider from "../context/TaskListContext"
import '../App.css';

const App = () => {
    return (
        // Wrap all components of entire app with the context provider.
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        {/* Invoke TaskList component */}
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
};

export default App;