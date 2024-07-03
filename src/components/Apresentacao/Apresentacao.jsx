import React, { useEffect, useState } from 'react';
import { StyledHome } from './Styled.js';
import TextSpan from './TextSpan.jsx';
import EduardoImg from '../../assets/imgs/EduardoImg.png';
import Github from "../../assets/imgs/github.svg";
import Linkedin from "../../assets/imgs/linkedin.svg";
import Instagram from "../../assets/imgs/instagram.svg";
import Curriculo from "../../assets/imgs/cv.png";

function Apresentacao() {
  const texto = ["Eduardo Aguiar", "Desenvolvedor Fullstack"];
  const [textoExibir, setTextoExibir] = useState(["", ""]);

  useEffect(() => {
    const interval = 100;
    const totalLength = texto[0].length + texto[1].length;

    const typer = setInterval(() => {
      setTextoExibir(prev => {
        const [nome, especialidade] = prev;
        const nextIndex = nome.length + especialidade.length + 1;

        if (nextIndex <= texto[0].length) {
          const novoNome = texto[0].slice(0, nextIndex);
          return [novoNome, especialidade];
        } else {
          const relativeIndex = nextIndex - texto[0].length;
          const novaEspecialidade = texto[1].slice(0, relativeIndex);
          return [nome, novaEspecialidade];
        }
      });

      if (textoExibir[0].length + textoExibir[1].length >= totalLength) {
        clearInterval(typer);
      }
    }, interval);

    return () => clearInterval(typer);
  },);

  return (
    <StyledHome id='inicio'>
      <div className='principal'>
      <div className='container'>
      <div className='apresentacao'>
        <h1 className='nome'>
          {textoExibir[0].split("").map((letra, index) => (
            <TextSpan key={index}>
              {letra === " " ? "\u00A0" : letra}
            </TextSpan>
          ))}
        </h1>
        <h1 className='especialidade'>
          {textoExibir[1].split("").map((letra2, index2) => (
            <TextSpan key={index2}>
              {letra2 === " " ? "\u00A0" : letra2}
            </TextSpan>
          ))}
        </h1>
        <p>Sempre estou em busca de experiências e conhecimentos que possam agregar em minha trajetória pessoal e profissional. Sou uma pessoa com boas capacidades em comunicação e relacionamento interpessoal, sempre conectado com o mundo ao meu redor.</p>
        <div className='minhasRedes'>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <div className='github'>
              <img src={Github} alt="Github" className="social-icon" />
            </div>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className='linkedin'>
              <img src={Linkedin} alt="Linkedin" className="social-icon" />
            </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <div className='instagram'>
              <img src={Instagram} alt="Instagram" className="social-icon" />
            </div>
          </a>
        </div>
        <a href="www.Google.com" target="_blank" className='button'>Baixar CV 
        <img src={Curriculo} alt="Curriculo" className='CV'/></a>
      </div>
      <div className='Centralizer'>
        <div className='EduardoImg'>
          <img src={EduardoImg} alt="EduardoImg" />
        </div>
      </div>
      </div>

      </div>
    </StyledHome>
  );
}

export default Apresentacao;
