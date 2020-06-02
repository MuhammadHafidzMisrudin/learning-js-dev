import React, {useState}  from "react";
import RecipeDetails from "./RecipeDetails";

/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 20/05/2020
    Date last updated: 31/05/2020
*/

// functional component to display a Recipe data from request.
const Recipe = ({recipe}) => {

    // state as a boolean for toggle.
    const [show, setShow] = useState(false);

    // pass recipe object as prop.
    // use destructuring to access the properties from recipe object.
    const {label, image, url, ingredients} = recipe.recipe;

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">URL link!</a>
            <button onClick={() => setShow(!show)}>Ingredients</button>

            {/* invoke Recipe Details component. */}
            {/* use conditional rendering check if show status is true then display recipe details. */}
            {show === true && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
};

export default Recipe;