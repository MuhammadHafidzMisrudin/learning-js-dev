import React from "react";
import {v4 as uuidv4} from "uuid";

// functional component to display the details of the Recipe data.
const RecipeDetails = ({ingredients}) => {

    // pass ingredients as prop and use destructuring.
    // loop through the property of the ingredients array and grab the data from it.
    return ingredients.map((ingredient) => {
        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight: {ingredient.weight}</li>
            </ul>
        );
    });
};

export default RecipeDetails;