// SobreMim.jsx
import React from 'react';
import { StyledAbout } from './Styled.js';
import SobreImg from "../../assets/imgs/Eduardo.jpeg";

function SobreMim() {
  return (
    <StyledAbout id='sobre-mim'>
      <div>
        <h1 className='aboutMeTitle'>Sobre Mim</h1>
        <div className='contentAbout'>
          <div className="sobre-mim">
            <img src={SobreImg} alt=""/>
          </div>
          <div className='aboutText'>
            <h2>
              Olá, muito prazer
            </h2>
            <h2>
              me chamo Carlos Eduardo Aguiar
            </h2>
            <p>Olá, eu sou o Eduardo, um desenvolvedor de software
              full stack apaixonado por tecnologia. Minha jornada na programação começou
              com um curso de desenvolvimento front-end essencial pela Cursos Pós Rio, onde
              pude desenvolver algumas habilidades, como: HTML, CSS, JavaScript e Bootstrap.
              Logo no começo do curso, pude perceber que tinha encontrado o meu objetivo de vida.
              Então, tratei logo de ingressar em um curso superior de Análise e Desenvolvimento
              de Sistemas pela Cândido Mendes, onde atualmente estou cursando o 4° período.
              Recentemente, concluí uma residência em Desenvolvimento de Software pelo SERRATEC, uma
              instituição muito bem conceituada na região serrana do RJ. Nesse programa, eu pude
              desenvolver algumas soft skills, como comunicação, trabalho em equipe, resolução
              de problemas e adaptabilidade. Além disso, eu pude aprender diversas tecnologias, como
              Node.js, React, React Native, TypeScript, Java, Spring Framework, SQL, versionamento de
              código etc. Meu objetivo é me tornar a cada dia um profissional melhor, mais competente
              e criativo, e sempre trazendo as melhores soluções com qualidade e inovação.</p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

export default SobreMim;
