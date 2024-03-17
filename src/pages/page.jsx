import React from "react";
import '../pages/Page.css'
import Infos from "../components/Infos/Infos";
import Aside from "../components/Aside/Aside";

const Page = () => {
    return (
        <div className="ticket-page">            
            <div className="left-side">
                <Aside />
            </div>
            <div className="right-side">
                <Infos />
            </div>
        </div>
    )
}

export default Page