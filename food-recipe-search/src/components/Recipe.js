import React from "react";
import RecipeDetails from "./RecipeDetails";

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