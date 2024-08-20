import React, { useEffect, useState } from 'react';
import { StyledProjectCont } from './Styled.js';
import Button from "../Button/Button.jsx";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function ProjectsComponent({ image, titleProp, alt, text, repo, link, applyStyles, index }) {

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

  const directionClass = index % 2 === 0 ? 'left' : 'right';

  return (
    <StyledProjectCont className={`${animateClass} ${directionClass}`} ref={ref} applyStyles={applyStyles}>
      <div className="projectsConteiner">
        <div className={`projectsImg ${directionClass}`} ref={ref}>
          <img src={image} alt={alt} />
        </div>
        <div className={`projectsBtnText ${directionClass}`} ref={ref}>
          <div className='projectsText'>
            <h2>{titleProp}</h2>
            <p>{text}</p>
          </div>
          <div className='projectsBtn'>
            {repo && <Button link={repo} target='blank' word={t("repository")} />}
            {link && <Button link={link} target='blank' word={t("presentation")} />}
          </div>
        </div>
      </div>
    </StyledProjectCont>
  );
}

export default ProjectsComponent;
