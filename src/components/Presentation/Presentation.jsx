import React from 'react';
import { StyledHome } from './Styled.js';
import EduardoImg from '../../assets/imgs/fundo.png';
import Github from "../../assets/imgs/github.svg";
import Linkedin from "../../assets/imgs/linkedin.svg";
import Instagram from "../../assets/imgs/instagram.svg";
import Scroll from '../../assets/imgs/Scroll.png';
import { Link as ScrollLink } from 'react-scroll';
import Button from "../Button/Button.jsx";
import AnimationText from './AnimationText.jsx';
import { useTranslation } from 'react-i18next';
import Curriculum from "../../assets/pdfs/Curriculum.pdf"

function Presentation() {
  const { t } = useTranslation();

  const text = t("specialty");

  return (
    <StyledHome id='inicio'>
      <div className='main'>
        <div className='container'>
          <div className='presentation'>
            <h1 className='name'>{t("name")}</h1>
            <h2 className='specialty notranslate'>
              <AnimationText text={text} />
            </h2>
            <p className='text'>{t("text")}</p>
            <div className='myNetworks'>
              <a href="https://github.com/EduardoAguiar15" target="_blank" rel="noopener noreferrer">
                <div className='github'>
                  <img src={Github} alt={t("githubAlt")} className="social-icon" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/eduaguiar1995/" target="_blank" rel="noopener noreferrer">
                <div className='linkedin'>
                  <img src={Linkedin} alt={t("linkedinAlt")} className="social-icon" />
                </div>
              </a>
              <a href="https://www.instagram.com/eduardoaguiar_20/" target="_blank" rel="noopener noreferrer">
                <div className='instagram'>
                  <img src={Instagram} alt={t("instagramAlt")} className="social-icon" />
                </div>
              </a>
            </div>
            <Button word={t("download_cv")} link={Curriculum} width="30%" height="3rem" size="0.8rem" />
          </div>
          <div className='centralizerContent'>
            <div className='EduardoImg'>
              <img src={EduardoImg} alt={t("eduardoAlt")} />
            </div>
          </div>
        </div>
        <div className='scroll'>
          <ScrollLink
            className="Scroller notranslate"
            to="aboutMe"
            smooth={true}
            duration={500}
            offset={-115}
          >
            <p>{t("scroll_down")}</p>
            <img src={Scroll} alt={t("scrollDownImg")} />
          </ScrollLink>
        </div>
      </div>
    </StyledHome>
  );
}

export default Presentation;
