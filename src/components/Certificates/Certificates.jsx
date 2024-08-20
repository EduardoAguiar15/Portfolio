import React, { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledList,
  StyledDescription,
  StyledTitle,
  StyledText,
  StyledImage,
  StyledIcons,
  StyledIconImg,
  StyledH1Image,
  StyledH1,
  StyledContent
} from './Styled';
import frontend from "../../assets/imgs/frontend.jpeg";
import react from "../../assets/imgs/Desenvolvimento-react1.jpg";
import software from "../../assets/imgs/Desenvolvimento-Web.jpg";
import qualidade from "../../assets/imgs/Qualidade.webp";
import Button from "../Button/Button";
import html from "../../assets/imgs/html5.png";
import cssIcon from "../../assets/imgs/CSS3.png";
import reactIcon from "../../assets/imgs/react.png";
import git from "../../assets/imgs/git.png";
import bootstrap from "../../assets/imgs/bootstrap.png";
import javascript from "../../assets/imgs/js.png";
import nodeJS from "../../assets/imgs/nodejs.png";
import javaIcon from "../../assets/imgs/javaIcon.png";
import postgresql from "../../assets/imgs/postgresql.png";
import typescript from "../../assets/imgs/typescript.png";
import reactNative from "../../assets/imgs/reactNative.svg";
import robot from "../../assets/imgs/robot.svg";
import serratec from "../../assets/pdfs/SERRATEC.pdf";
import IQS from "../../assets/pdfs/IQS.pdf";
import PosRio from "../../assets/pdfs/PosRio.pdf";
import Senai from "../../assets/pdfs/Senai.pdf";
import titleImg from "../../assets/imgs/title.svg";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';


const Certificates = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const { t } = useTranslation();

  const course1 = t("course1");
  const course2 = t("course2");
  const course3 = t("course3");
  const course4 = t("course4");
  const titleCourse1 = t("titleCourse1");
  const titleCourse2 = t("titleCourse2");
  const titleCourse3 = t("titleCourse3");
  const titleCourse4 = t("titleCourse4");
  const descriptionCourse1 = t("descriptionCourse1");
  const descriptionCourse2 = t("descriptionCourse2");
  const descriptionCourse3 = t("descriptionCourse3");
  const descriptionCourse4 = t("descriptionCourse4");
  const imgcourse1 = t("imgcourse1");
  const imgcourse2 = t("imgcourse2");
  const imgcourse3 = t("imgcourse3");
  const imgcourse4 = t("imgcourse4");


  const reactnativeicon = t("reactnativeicon");
  const javaicon = t("javaicon");
  const htmlicon = t("htmlicon");
  const cssicon = t("cssicon");
  const javascripticon = t("javascripticon");
  const typescripticon = t("typescripticon");
  const nodeicon = t("nodeicon");
  const bootstrapicon = t("bootstrapicon");
  const reacticon = t("reacticon");
  const giticon = t("giticon");
  const postgresicon = t("postgresicon");
  const roboticon = t("roboticon");

  const items = [
    {
      course: course1,
      title: titleCourse1,
      description: descriptionCourse1,
      img: software,
      pdf: serratec,
      imgAlt: imgcourse1,
      icons: [
        { src: reactNative, alt: reactnativeicon },
        { src: javaIcon, alt: javaicon },
        { src: html, alt: htmlicon },
        { src: cssIcon, alt: cssicon },
        { src: javascript, alt: javascripticon },
        { src: typescript, alt: typescripticon },
        { src: nodeJS, alt: nodeicon },
        { src: bootstrap, alt: bootstrapicon },
        { src: reactIcon, alt: reacticon },
        { src: git, alt: giticon },
        { src: postgresql, alt: postgresicon },
      ],
    },
    {
      course: course2,
      title: titleCourse2,
      description: descriptionCourse2,
      img: frontend,
      pdf: PosRio,
      imgAlt: imgcourse2,
      icons: [
        { src: html, alt: htmlicon },
        { src: cssIcon, alt: cssicon },
        { src: javascript, alt: javascripticon },
        { src: nodeJS, alt: nodeicon },
        { src: bootstrap, alt: bootstrapicon },
        { src: git, alt: giticon },
      ],
    },
    {
      course: course3,
      title: titleCourse3,
      description: descriptionCourse3,
      img: react,
      pdf: Senai,
      imgAlt: imgcourse3,
      icons: [
        { src: reactNative, alt: reactnativeicon },
        { src: javaIcon, alt: javaicon },
        { src: html, alt: htmlicon },
        { src: cssIcon, alt: cssicon },
        { src: javascript, alt: javascripticon },
        { src: typescript, alt: typescripticon },
        { src: nodeJS, alt: nodeicon },
        { src: bootstrap, alt: bootstrapicon },
        { src: reactIcon, alt: reacticon },
        { src: git, alt: giticon },
        { src: postgresql, alt: postgresicon },
      ],
    },
    {
      course: course4,
      title: titleCourse4,
      description: descriptionCourse4,
      img: qualidade,
      pdf: IQS,
      imgAlt: imgcourse4,
      icons: [
        { src: robot, alt: roboticon },
        { src: git, alt: giticon },
      ],
    },
  ];
  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const [animateClass, setAnimateClass] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.0,
  });

  useEffect(() => {
    if (inView) {
      setAnimateClass('animate');
    } else {
      setAnimateClass('exit');
    }
  }, [inView]);

  return (
    <StyledContainer id='certificados'>
      <div className="container">
        <StyledH1 className={animateClass} ref={ref}>
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
          {t("certificatesTitle")}
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
        </StyledH1>
        <StyledContent className={`content ${animateClass}`}>
          <StyledList>
            {items.map((item, index) => (
              <div key={index} className={`listItem ${selectedItem === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
                {item.course}
              </div>
            ))}
          </StyledList>
          {selectedItem !== null && (
            <StyledDescription className={inView ? 'visible' : 'hidden'} ref={ref}>
              <div className='text'>
                <StyledTitle>{items[selectedItem].title}</StyledTitle>
                <StyledText>{items[selectedItem].description}</StyledText>
                <StyledIcons>
                  {items[selectedItem].icons.map((icon, idx) => (
                    <div className="icons" key={idx}>
                      <StyledIconImg src={icon.src} alt={icon.alt} />
                    </div>
                  ))}
                </StyledIcons>

                {items[selectedItem].pdf && (
                  <Button word={t("buttonCourse")} link={items[selectedItem].pdf} />
                )}
              </div>
              {items[selectedItem].img && (
                <StyledImage src={items[selectedItem].img} alt={items[selectedItem].imgAlt} />
              )}
            </StyledDescription>
          )}
        </StyledContent>
      </div>
    </StyledContainer>
  );
};

export default Certificates;
