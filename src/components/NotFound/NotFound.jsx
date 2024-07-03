import React from 'react'
import { StyledNotFound } from "./Styled";
import exclamacao from "../../assets/imgs/exclamation.png"

const NotFound = () => {
    return (
        <StyledNotFound>
            <div>
                <div>
                    <img src={exclamacao} alt="exclamacao" />
                </div>
                <h1>
                    404
                </h1>
                <h2>
                    URL não encontrada
                </h2>
                <h3>
                    <a href="/">Clique aqui para voltar ao portfólio</a>
                </h3>
            </div>
        </StyledNotFound>
    )
}

export default NotFound