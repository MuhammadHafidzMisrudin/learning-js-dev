import React, {useState} from "react";
import Axios from "axios";
import "./App.css";

const App = () => {

    // initialise a state (query) initially using hook.
    // a query to be the data that should be updated.
    // setQuery should be the method to update the data state.
    const [query, setQuery] = useState("");

    const [recipes, setRecipes] = useState([]);

    // application id.
    const APP_ID = "ba5830c4";

    // application keys.
    const APP_KEY = "77504f161b323b537d85da25b0e8f9ad";

    // url search recipe api.
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    // get data from the request via search api call.
    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result); // debug.

        // set it to empty string to clear off input field.
        setQuery("");
    };

    // function to execute function getData for a request after submit the form.
    const onSubmit = (e) => {
        alert("Submitted!");
        e.preventDefault();
        getData(); // call api.
    };

    // an onChange event handler returns a Synthetic Event object which contains useful meta data 
    // such as the target input’s id, name, and current value.
    // to access the target input’s value => e.target.value.
    const onChange = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value); // to update the query state dynamically.
    };

    return (
        <div className="App">
            {/* heading */}
            <h1>Food Recipe Search Engine</h1>

            {/* input form */}
            <form className="search-form" action="" onSubmit={onSubmit}>
                <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query} />
                <input type="Submit" defaultValue="Search" />
            </form>
        </div>
    );
};

export default App;