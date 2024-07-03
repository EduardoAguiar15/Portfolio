import React, { useState, useEffect } from 'react';
import { StyledHeader } from './Styled.js';
import { Link as ScrollLink, scroller } from 'react-scroll';

function Header() {
  const [activeLink, setActiveLink] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mim', 'projetos', 'certificacoes', 'contato'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'inicio';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (to) => {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
    });

    setTimeout(() => {
      setActiveLink(to);
      window.history.pushState(null, null, `#${to}`);
    }, 500);
  };

  return (
    <StyledHeader>
      <div className='menuCenter'>
        <div>
          <a href="/">Portfólio</a>
        </div>
        <nav>
          <ul>
            <li>
              <ScrollLink
                to="inicio"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('inicio')}
                className={activeLink === 'inicio' ? 'active' : ''}
              >
                Início
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="sobre-mim"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('sobre-mim')}
                className={activeLink === 'sobre-mim' ? 'active' : ''}
              >
                Sobre mim
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('projetos')}
                className={activeLink === 'projetos' ? 'active' : ''}
              >
                Projetos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="certificacoes"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('certificacoes')}
                className={activeLink === 'certificacoes' ? 'active' : ''}
              >
                Certificações
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contato"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('contato')}
                className={activeLink === 'contato' ? 'active' : ''}
              >
                Contato
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
}

export default Header;
