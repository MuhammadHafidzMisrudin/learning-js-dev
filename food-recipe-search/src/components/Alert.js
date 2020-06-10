import React from "react";

// functional component to display alert warning for invalid search input.
const Alert = ({warning}) => {

    // pass warning object as prop.
    return (
        <div className="alert">
            <h3>Alert Message: {warning}</h3>
        </div>
    );
};

export default Alert;