import React from "react";

const Alert = ({warning}) => {
    return (
        <div className="alert">
            <h3>Alert Message: {warning}</h3>
        </div>
    );
};

export default Alert;