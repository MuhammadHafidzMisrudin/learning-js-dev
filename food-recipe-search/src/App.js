import React from "react";
import "./App.css";

const App = () => {

    // application id.
    const APP_ID = "ba5830c4";

    // application keys.
    const APP_KEY = "77504f161b323b537d85da25b0e8f9ad";

    // url search recipe api.
    // eslint-disable-next-line
    const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    return (
        <div className="App">
            <h1>Food Recipe Search Engine</h1>
        </div>
    );
};

export default App;