import React from "react";
import '../pages/Ticket.css'
import Infos from "../components/Infos/Infos";
import Aside from "../components/Aside/Aside";

const Ticket = ({ticketNumber}) => {
    return (
        <div className="ticket-page">            
            <div className="left-side">
                <Aside ticketNumber={ticketNumber}/>
            </div>
            <div className="right-side">
                <Infos ticketNumber={ticketNumber}/>
            </div>
        </div>
    )
}

export default Ticket 