import React, {useState} from "react";
import Axios from "axios";
import {v4 as uuidv4} from "uuid";
import "./App.css";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 04/05/2020
    Date last updated: 08/06/2020
*/

const App = () => {

    // initialise a state (query) initially using hook.
    // a query state to be the data that should be updated.
    // setQuery should be the method to update the data state.
    const [query, setQuery] = useState("");

    //  initialise a state (recipes) initially using hook.
    // a recipes state to be the data that should be updated with array.
    // setRecipes should be the method to update the data state.
    const [recipes, setRecipes] = useState([]);

    // initialise a state (warning) initially using hook.
    // initial state is set to an empty string.
    const [warning, setWarning] = useState("");

    // application id.
    const APP_ID = "ba5830c4";

    // application keys.
    const APP_KEY = "77504f161b323b537d85da25b0e8f9ad";

    // url search recipe api.
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    // get data from the request via search api call.
    const getData = async () => {
        
        // check if the value of query state is not an empty string, hence call api.
        if (query !== "") {
            try {
                const result = await Axios.get(url);
                console.log("results-from-request: ", result); // debugger.
    
                // get access to recipes array and update the value of recipes in the state.
                // from json data => data.hits.recipe
                setRecipes(result.data.hits);
    
                // debugger.
                console.log("from-getdata-display-hits: ", result.data.hits);
            } catch (error) {
                console.log("error: ", error);
            }
        } else {
            // else, set the value of warning state to an error string.
            setWarning("Please Insert Input In The Seach Form.");
        }

        // set it to empty string to clear off input field.
        setQuery(""); 
    };

    // function to execute function getData for a request after submit the form.
    const onSubmit = (e) => {
        alert("Submitted!");
        e.preventDefault();
        getData(); // call api.
    };

    // an onChange event handler returns a synthetic event object which contains useful meta data 
    // such as the target input’s id, name, and current value.
    // to access the target input’s value => e.target.value.
    const onChange = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value); // to update the query state dynamically.
    };

    return (
        <div className="App">
            {/* heading. */}
            <h1>Food Recipe Search Engine</h1>

            {/* input form. */}
            <form className="search-form" action="" onSubmit={onSubmit}>

                {/* use conditional rendering. check if the warning value is not empty, hence display Alert component. */}
                {warning !== "" && <Alert warning={warning} />}

                <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query} />
                <input type="Submit" defaultValue="Search" />
            </form>

            {/* display the data results from the request on the page. */}
            <div className="recipes">
                {recipes !== [] &&
                    recipes.map((recipe) => {
                        // console.log(uuidv4());
                        console.log("from-render-display-recipe-props: ", recipe.recipe); // debugger.

                        // invoke Recipe component.
                        return (<Recipe key={uuidv4()} recipe={recipe} />);
                    })
                }
            </div>
        </div>
    );
};

export default App;