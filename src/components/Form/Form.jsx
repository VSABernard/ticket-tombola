import React from "react";
import Number from "../Number/Number";
import "./Form.css";

const Form = () => {
    return(
        <div className="form">
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
            <div className="form-number">
                <Number />
            </div>
            <div className="footer">
                <p>-- Billet à conserver par le vendeur --</p>
            </div>
        </div>
    )
}

export default Form