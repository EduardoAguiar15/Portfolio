import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { StyledAbout } from './Styled.js';
import AboutImg from "../../assets/imgs/Eduardo.jpeg";
import Button from "../Button/Button.jsx";
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    if (inView) {
      setAnimateClass('animate');
    } else {
      setAnimateClass('exit');
    }
  }, [inView]);

  useEffect(() => {
    if (animateClass === 'exit') {
      const timeout = setTimeout(() => setAnimateClass(''), 700);
      return () => clearTimeout(timeout);
    }
  }, [animateClass]);

  return (
    <StyledAbout id='sobre'>
      <div className='conteinerAbout'>
        <div className={`contentAbout ${animateClass}`} ref={ref}>
          <div className="aboutMe">
            <img src={AboutImg} alt={t("eduardoAbout")} />
          </div>
          <div className='aboutText'>
            <h1 className='aboutMeTitle'>{t("aboutMeTitle")}</h1>
            <p>{t("aboutP1")}</p>
            <p>{t("aboutP2")}</p>
            <p>{t("aboutP3")}</p>
            <p>{t("aboutP4")}</p>
            <Button link="https://www.linkedin.com/in/eduaguiar1995/" word={t("moreInfo")} />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

export default AboutMe;
