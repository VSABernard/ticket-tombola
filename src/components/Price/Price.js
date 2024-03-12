import React from "react";
import "./Price.css";

const Price = () => {
    return(
        <div className="List-price">
            <div className="First-price">
                <h3>1er prix : Un week-end familial au FUTUROSCOPE</h3>
                <h3>2ème prix : Tablette tactile LENOVO</h3>
                <h3>3ème prix : Montre connecté XIAOMI</h3>
            </div>
            <div className="Subt-price">
                <h4>Et de nombreux lots à gagner !</h4>
                <h4>Place Brest Karting, Zoo de Banféré, 3 Curés, Penn Ar Bed, Climb Up ...</h4>
            </div>
        </div>
    )
}

export default Price