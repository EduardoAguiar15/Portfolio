import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
  StyledCertificates,
  StyledH1,
  CarouselContainer,
  CertificatesClass,
  ContainerCertificates,
  CardContainer,
  StyledH1Image,
  NavButton,
} from './Styled';
import { useTranslation } from 'react-i18next';
import titleImg from '../../assets/imgs/title.svg';
import software from '../../assets/imgs/Desenvolvimento-Web.jpg';
import frontend from '../../assets/imgs/frontend.jpeg';
import react from '../../assets/imgs/Desenvolvimento-react1.jpg';
import qualidade from '../../assets/imgs/Qualidade.webp';
import ads from '../../assets/imgs/ADS.webp';
import api from '../../assets/imgs/Desenvolvimento-api.png';
import serratec from '../../assets/pdfs/SERRATEC.pdf';
import IQS from '../../assets/pdfs/IQS.pdf';
import PosRio from '../../assets/pdfs/PosRio.pdf';
import Senai from '../../assets/pdfs/Senai.pdf';
import ucam from '../../assets/pdfs/Ads.pdf';
import dio from '../../assets/pdfs/Spring-Framework.pdf';
import { useInView } from 'react-intersection-observer';
import CertificateCard from '../CertificateCard/CertificateCard.jsx';

const Certificates = () => {
  const { t } = useTranslation();
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [qtdVisivel, setQtdVisivel] = useState(3);
  const [larguraCard, setLarguraCard] = useState(0);
  const [deslocamento, setDeslocamento] = useState(0);

  const items = [
    {
      title: t('titleCourse1'),
      description: t('descriptionCourse1'),
      img: software,
      pdf: serratec,
      imgAlt: t("imgCourse1"),
    },
    {
      title: t('titleCourse2'),
      description: t('descriptionCourse2'),
      img: frontend,
      pdf: PosRio,
      imgAlt: t("imgCourse2"),
    },
    {
      title: t('titleCourse3'),
      description: t('descriptionCourse3'),
      img: react,
      pdf: Senai,
      imgAlt: t("imgCourse3"),
    },
    {
      title: t('titleCourse4'),
      description: t('descriptionCourse4'),
      img: qualidade,
      pdf: IQS,
      imgAlt: t("imgCourse4"),
    },
    {
      title: t('titleCourse5'),
      description: t('descriptionCourse5'),
      img: ads,
      pdf: ucam,
      imgAlt: t("imgCourse5"),
    },
    {
      title: t('titleCourse6'),
      description: t('descriptionCourse6'),
      img: api,
      pdf: dio,
      imgAlt: t("imgCourse6"),
    }
  ];

  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.0 });
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.0 });

  const layoutConfig = useMemo(() => [
    { maxWidth: 361, qtdVisivel: 1, larguraCard: 295, deslocamento: -299 },
    { maxWidth: 405, qtdVisivel: 1, larguraCard: 335, deslocamento: -328 },
    { maxWidth: 480, qtdVisivel: 1, larguraCard: 380, deslocamento: -370.4 },
    { maxWidth: 530, qtdVisivel: 1, larguraCard: 330, deslocamento: -295 },
    { maxWidth: 648, qtdVisivel: 1, larguraCard: 360, deslocamento: -341 },
    { maxWidth: 800, qtdVisivel: 1, larguraCard: 390, deslocamento: -350 },
    { maxWidth: 890, qtdVisivel: 1, larguraCard: 420, deslocamento: -381 },
    { maxWidth: 1030, qtdVisivel: 1, larguraCard: 465, deslocamento: -425 },
    { maxWidth: 1250, qtdVisivel: 3, larguraCard: 300 },
    { maxWidth: 1280, qtdVisivel: 3, larguraCard: 320 },
    { maxWidth: Infinity, qtdVisivel: 3, larguraCard: 330 },
  ], []);

  const total = items.length;

  const getLayoutConfig = useCallback((larguraAtual) => {
    return layoutConfig.find(c => larguraAtual <= c.maxWidth);
  }, [layoutConfig]);

  useEffect(() => {
    function calculateLayout() {
      const larguraAtual = window.innerWidth;
      const config = getLayoutConfig(larguraAtual);
      if (config) {
        setQtdVisivel(config.qtdVisivel);
        setLarguraCard(config.larguraCard);
        setDeslocamento(config.deslocamento);
      }
    }
    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, [getLayoutConfig]);

  useEffect(() => {
    if (qtdVisivel === 3) {
      setDeslocamento(-larguraCard);
    }
  }, [larguraCard, qtdVisivel]);

  const getVisibleItems = () => {
    const extended = [...items, ...items, ...items];
    const start = currentIndex + total;
    return extended.slice(start - 1, start + qtdVisivel + 1);
  };
  const visibleItems = getVisibleItems();

  const handleSlide = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const move = direction === 'next' ? -larguraCard * 2 : 0;
    setDeslocamento(move);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
      );

      const config = getLayoutConfig(window.innerWidth);
      setDeslocamento(config?.deslocamento ?? -larguraCard);

      setIsAnimating(false);
    }, 500);
  }, [isAnimating, larguraCard, total, getLayoutConfig]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide('next');
    }, 25000);

    return () => clearInterval(interval);
  }, [handleSlide]);

  return (
    <StyledCertificates id="certificados">
      <CertificatesClass>
        <StyledH1 ref={titleRef} className={titleInView ? 'animate' : 'exit'}>
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
          {t("certificatesTitle")}
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
        </StyledH1>
        <CarouselContainer ref={contentRef} className={contentInView ? 'animate' : 'exit'}>
          <NavButton className='prev' onClick={() => handleSlide('prev')}>❮</NavButton>
          <ContainerCertificates>
            <CardContainer
              ref={trackRef}
              style={{
                transform: `translateX(${deslocamento}px)`,
                width: `${larguraCard * (qtdVisivel === 1 ? 3 : 5)}px`,
                transition: isAnimating ? 'transform 0.5s ease' : 'none',
              }}
            >
              {visibleItems.map((item, index) => {
                const middle = Math.floor(visibleItems.length / 2);
                return (
                  <CertificateCard
                    key={index}
                    item={item}
                    isActive={index === middle}
                    refCard={(el) => (cardRefs.current[index] = el)}
                    buttonText={t("buttonCourse")}
                  />
                );
              })}
            </CardContainer>
          </ContainerCertificates>
          <NavButton className='next' onClick={() => handleSlide('next')}>❯</NavButton>
        </CarouselContainer>
      </CertificatesClass>
    </StyledCertificates >
  );
};
export default Certificates;
