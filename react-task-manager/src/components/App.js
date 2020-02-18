import React from 'react';
import TaskList from "./TaskList";
import TaskListContextProvider from "../context/TaskListContext"
import '../App.css';

const App = () => {
    return (
        // Wrap all components of entire app with the context provider.
        <TaskListContextProvider>
            <div>
                {/* Invoke TaskList component */}
                <TaskList />
            </div>
        </TaskListContextProvider>
    );
};

export default App;