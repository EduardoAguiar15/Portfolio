import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'projetos', 'certificados', 'contato'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = null;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          const isInSection = scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;

          if (isInSection) {
            currentSection = section;
          }
        }
      });

      if (currentSection && currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  const handleLinkClick = (to) => {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
    });
  
    setTimeout(() => {
      setActiveLink(to);
      window.location.hash = to;
    }, 500);
  };
  
  return { activeLink, handleLinkClick };
};