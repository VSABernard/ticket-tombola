import React from "react";
import Number from "../Number/Number";
import "./Form.css";

const Form = ({ticketNumber}) => {
    return(
        <div className="form">
            <section className="form-infos">
                <div className="buyer">
                    <p className="title">-- L'acheteur --</p>
                    <p className="data">Nom, Prénom :</p>
                    <p className="data">Téléphone :</p>
                    <p className="data">E-mail :</p>
                </div>
                <div className="seller">
                    <p className="title">-- Le vendeur --</p>
                    <p className="data">Nom, Prénom de l'enfant:</p>
                    <p className="data">Classe :</p>
                </div>
            </section>    
            <section className="form-footer">
                <div className="form-number">
                    <Number ticketNumber={ticketNumber}/>
                </div>
                <div className="footer">
                    <p>-- Billet à conserver par le vendeur --</p>
                </div>
            </section>
        </div>
    )
}

export default Form