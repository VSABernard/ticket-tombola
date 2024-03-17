import React from "react";
import Header from "../Header/Header";
import Price from "../Price/Price";
import "./Infos.css";

const Infos = () => {
    return(
        <div className="infos-page">
            <Header className='header-infos'/>
            <Price />
        </div>
    )
}

export default Infos