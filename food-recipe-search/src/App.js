import React from "react";
import Axios from "axios";
import "./App.css";

const App = () => {

    // application id.
    const APP_ID = "ba5830c4";

    // application keys.
    const APP_KEY = "77504f161b323b537d85da25b0e8f9ad";

    // url search recipe api.
    const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    // get data from the request via search api call.
    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result);
    };

    // function to execute a rfunction getData for a request after submit the form.
    const onSubmit = (e) => {
        alert("Submitted!");
        e.preventDefault();
        getData();
    };

    return (
        <div className="App">
            {/* heading */}
            <h1>Food Recipe Search Engine</h1>

            {/* input form */}
            <form className="search-form" action="" onSubmit={onSubmit}>
                <input type="text" placeholder="Search Food" autoComplete="off" />
                <input type="Submit" defaultValue="Search" />
            </form>
        </div>
    );
};

export default App;