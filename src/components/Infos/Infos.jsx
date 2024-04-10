import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import Header from "../Header/Header";
import Price from "../Price/Price";
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
                    <p class="badge">1 €</p>
                </div>                
            </div>            
            <Price ticketNumber={ticketNumber}/>
        </div>
    )
}

export default Infos