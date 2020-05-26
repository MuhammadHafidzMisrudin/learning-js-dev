import React from "react";
import RecipeDetails from "./RecipeDetails";

/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 20/05/2020
    Date last updated: 25/05/2020
*/

// functional component to display a Recipe data from request.
const Recipe = ({recipe}) => {

    // use destructuring to access the properties from recipe object.
    const {label, image, url, ingredients} = recipe.recipe;

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">URL link!</a>
            <button>Ingredients</button>
            <RecipeDetails ingredients={ingredients} />
        </div>
    );
};

export default Recipe;