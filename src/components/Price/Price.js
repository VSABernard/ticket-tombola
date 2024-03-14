import React from "react";
import "./Price.css";

const Price = () => {
    return(
        <div className="List-price">
            <div className="First-price">
                <h4>1er prix : Un week-end familial au FUTUROSCOPE</h4>
                <h4>2ème prix : Tablette tactile LENOVO</h4>
                <h4>3ème prix : Montre connecté XIAOMI</h4>
            </div>
            <div className="Subt-price">
                <p>Et de nombreux lots à gagner !</p>
                <p>Place Brest Karting, Zoo de Banféré, 3 Curés, Penn Ar Bed, Climb Up ...</p>
            </div>
            <div className="Lottery-date">
                <p>TIRAGE AU SORT</p>
                <p>Le jour de la kermesse</p>
                <p>La liste des gagnants sera affichée à l’école et sur les réseaux sociaux</p>
                <p>Les lots seront à retirer avant le 30/06/2024 !</p>
                <p>ape.les-hauts-de-penfeld@laposte.net</p>
            </div>
            <div className="Buyer">
                <p>--Billet à conserver par l'acheteur--</p>
            </div>
        </div>
    )
}

export default Price