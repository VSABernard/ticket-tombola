import React from "react";
import "./Number.css"

const Number = ({ticketNumber}) => {
    return (
        <div className="number-ticket">
            <p>N°. {ticketNumber}</p>
        </div>
    )
}

export default Number