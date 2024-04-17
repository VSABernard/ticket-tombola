import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import Header from "../Header/Header";
import Prize from "../Prize/Prize";
import "./Infos.css";

const Infos = ({ticketNumber}) => {
    return(
        <div className="infos-page">
            <div className="head">
                <div className='header-infos'>
                    <Header />
                </div>                
                <div className="span-badge">
                    <FontAwesomeIcon className="icon" icon={faCertificate} />
                    <p className="badge">1 €</p>
                </div>                
            </div>            
            <Prize ticketNumber={ticketNumber}/>
        </div>
    )
}

export default Infos