import React, { useState } from 'react'
import '../styles/style.css';

function ControleManutencao() {

    const [isVisible, setIsVisible] = useState(false);

    function handleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="base">
            <div className="title"><h1>Controle</h1> <h2>de Manutenção</h2></div>
            <div className="segundoMenu">
                <div className="menu"><img onClick={handleVisibility} src='https://i.imgur.com/Usat9zI.png'></img></div>

                <div className={isVisible ? "conteudo" : "conteudo invisible"}>
                    <button className="btnManutencao">Registrar Manutenção</button>
                    <button className="btnManutencao">Relatório de Manutenções</button>
                </div>
            </div>
        </div>
    )
}

export default ControleManutencao;