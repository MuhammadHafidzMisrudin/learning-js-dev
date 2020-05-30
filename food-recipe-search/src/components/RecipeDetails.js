import React from "react";
import {v4 as uuidv4} from "uuid";

/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 25/05/2020
    Date last updated: 30/05/2020
*/

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