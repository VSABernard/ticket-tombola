import React from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import "./Aside.css";

const Aside = ({ticketNumber}) => {
    return(
        <div className="aside-page">
            <Header className="aside-head"/>
            <Form ticketNumber={ticketNumber}/>
        </div>
    )
}

export default Aside