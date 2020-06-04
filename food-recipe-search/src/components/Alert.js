import React from "react";

const Alert = ({alert}) => {
    return (
        <div className="alert">
            <h3>Alert Message: {alert}</h3>
        </div>
    );
};

export default Alert;