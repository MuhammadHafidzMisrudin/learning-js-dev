import React from "react";

/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 02/06/2020
    Date last updated: 10/06/2020
*/

// functional component to display alert warning for invalid search input.
const Alert = ({warning}) => {

    // pass warning object as prop and use destructuring.
    return (
        <div className="alert">
            <h3>Alert Message: {warning}</h3>
        </div>
    );
};

export default Alert;