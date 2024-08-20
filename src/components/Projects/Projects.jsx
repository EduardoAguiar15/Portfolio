import { StyledProject, StyledH1, StyledH1Image, StyledButton } from './Styled.js';
import DigitalFit from "../../assets/imgs/DigitalFit.jpg";
import RetroGames from "../../assets/imgs/RetroGames.jpg";
import CorkCap from "../../assets/imgs/CorkCap.jpg";
import CineHub from "../../assets/imgs/CineHub.jpg";
import ProjectsComponent from "../ProjectsComponent/ProjectsComponent.jsx";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import ButtonProjects from './ButtonProjects.jsx';
import Scroll from '../../assets/imgs/Scroll.png';
import Scroll2 from "../../assets/imgs/Scroll2.png";
import titleImg from "../../assets/imgs/title.svg"
import JavaAPI from "../../assets/imgs/JavaAPI.jpg"
import CidadeMundo from "../../assets/imgs/CidadesMundo.jpg"
import EstoqueAPI from "../../assets/imgs/EstoqueAPI.jpg"
import { useTranslation } from 'react-i18next';

function Projects() {

  const { t } = useTranslation();

  const title1 = t("title1");
  const title2 = t("title2");
  const title3 = t("title3");
  const title4 = t("title4");
  const title5 = t("title5");
  const title6 = t("title6");
  const title7 = t("title7");

  const description1 = t("description1");
  const description2 = t("description2");
  const description3 = t("description3");
  const description4 = t("description4");
  const description5 = t("description5");
  const description6 = t("description6");
  const description7 = t("description7");

  const seeLess = t("seeLess");
  const seeMore = t("seeMore");

  const digitalfitAlt = t("digitalfitAlt");
  const retrogamesAlt = t("retrogamesAlt");
  const corkcapAlt = t("corkcapAlt");
  const cinehubAlt = t("cinehubAlt");
  const socialnetworkAlt = t("socialnetworkAlt");
  const worldcityAlt = t("worldcityAlt");
  const inventoryapiAlt = t("inventoryapiAlt");


  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [animateClass, setAnimateClass] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [buttonImage, setButtonImage] = useState(Scroll);

  useEffect(() => {
    if (inView) {
      setAnimateClass('animate');
    } else {
      setAnimateClass('exit');
    }
  }, [inView]);

  const projects = [
    { title: title1, description: description1, link: "https://youtu.be/48TzurjH5wM", alt: digitalfitAlt },
    { title: title2, description: description2, repo: "https://github.com/EduardoAguiar15/DesenvolvimentoWeb-SERRATEC", link: "https://youtu.be/blBYIV9z9co", alt: retrogamesAlt },
    { title: title3, description: description3, repo: "https://github.com/EduardoAguiar15/Frontend-SERRATEC", link: "https://youtu.be/9J3Mn8lzWLQ", alt: corkcapAlt },
    { title: title4, description: description4, repo: "https://github.com/EduardoAguiar15/Frontend-SERRATEC", link: "https://youtube.com/shorts/nQdxQwsLDS0", alt: cinehubAlt },
    { title: title5, description: description5, repo: "https://github.com/EduardoAguiar15/Trabalho-Final-API-Restful", alt: socialnetworkAlt },
    { title: title6, description: description6, repo: "https://github.com/EduardoAguiar15/CidadeMundo", link: "https://www.youtube.com/watch?v=zyfliERBhMs", alt: worldcityAlt },
    { title: title7, description: description7, repo: "https://github.com/EduardoAguiar15/crud-produto-api", alt: inventoryapiAlt }
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  const handleButtonClick = () => {
    setShowMore(!showMore);
    setButtonImage(showMore ? Scroll : Scroll2);
  };

  return (
    <StyledProject id='projetos' className={animateClass} ref={ref}>
      <div className="projectsContent">
        <StyledH1 className={animateClass} ref={ref}>
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
          {t("projectsTitle")}
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
        </StyledH1>
        {visibleProjects.map((project, index) => (
          <ProjectsComponent
            key={index}
            image={
              index === 0
                ? DigitalFit
                : index === 1
                  ? RetroGames
                  : index === 2
                    ? CorkCap
                    : index === 3
                      ? CineHub
                      : index === 4
                        ? JavaAPI
                        : index === 5
                          ? CidadeMundo
                          : EstoqueAPI

            }
            titleProp={project.title}
            text={project.description}
            repo={project.repo}
            link={project.link}
            applyStyles={index % 2 !== 0}
            index={index}
            alt={project.alt}
          />
        ))}
        <StyledButton>
          <ButtonProjects onClick={handleButtonClick} word={showMore ? seeLess : seeMore}>
            <img src={buttonImage} alt="arrow" className="arrow" />
          </ButtonProjects>
        </StyledButton>
      </div>
    </StyledProject>
  );
}

export default Projects;
