import React from "react";
import Number from "../Number/Number";
import "./Price.css";

const Price = () => {
    return(
        <div className="global-infos">
            <div className="price-infos">
                <div className="first-price">
                    <h4>1er prix : Un week-end pour 2 adultes et 2 enfants au FUTUROSCOPE</h4>
                    <h4>2ème prix : Une tablette tactile LENOVO</h4>
                    <h4>3ème prix : Une montre connectée XIAOMI</h4>
                </div>
                <div className="subt-price">
                    <p>Et de nombreux lots à gagner !</p>
                    <p>Place Brest Karting, Zoo de Banféré, 3 Curés, Penn Ar Bed, Climb Up ...</p>
                </div>
                <div className="lottery-date">
                    <p> <s className="lottery">TIRAGE AU SORT</s> : Le jour de la kermesse.</p>
                    <p>La liste des gagnants sera affichée à l’école et sur les réseaux sociaux.</p>
                    <p>Les lots seront à retirer <s className="date">avant le 30/06/2024</s> !</p>
                    <p>Contact : <s className="mail">ape.les-hauts-de-penfeld@laposte.net</s></p>
                </div>
                <div className="footer">
                    <p>-- Billet à conserver par l'acheteur --</p>
                </div>
            </div>
            <div className="ticket-number">
                <Number />
            </div>
        </div>
    )
}

export default Price