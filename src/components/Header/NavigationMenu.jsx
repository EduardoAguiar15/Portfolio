import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Brasil from "../../assets/imgs/brasil.svg";
import Eua from "../../assets/imgs/eua.svg";
import { useTranslation } from 'react-i18next';
import { useAnimationContext } from '../Presentation/AnimationContext';

function NavigationMenu({ activeLink, handleLinkClick }) {
  const { t, i18n } = useTranslation();
  const { isAnimationDone } = useAnimationContext();

  const sections = ['inicio', 'sobre', 'projetos', 'certificados', 'contato'];

  const changeLanguage = (lng) => {
    if (isAnimationDone) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <ul>
      {sections.map((section) => (
        <li key={section}>
          <ScrollLink
            to={section}
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick(section)}
            className={activeLink === section ? 'active' : ''}
          >
            {t(section)}
          </ScrollLink>
        </li>
      ))}
      <li>
        <img
          src={Brasil}
          alt={t("flagBrazil")}
          onClick={() => changeLanguage('pt')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={Eua}
          alt={t("flagEua")}
          onClick={() => changeLanguage('en')}
          style={{ cursor: 'pointer' }}
        />
      </li>
    </ul>
  );
}

export default NavigationMenu;
