import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { StyledHeader } from './Styled';
import { RiMenuFill } from "react-icons/ri";
import MenuMobile from './MenuMobile';
import Logo from "../../assets/imgs/logo.png";
import NavigationMenu from './NavigationMenu';
import { useActiveLink } from './useActiveLink';
import { useTranslation } from 'react-i18next';

function Header() {

  const { t } = useTranslation();

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { activeLink, handleLinkClick } = useActiveLink();

  const handleScrollTo = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
    });
    handleLinkClick(section);
  };

  return (
    <StyledHeader>
      <div className='menuCenter'>
        <div>
          <a href="/" className='logoHeader'>
            <img src={Logo} alt={t("logo")} className='logo' />
          </a>
        </div>
        <nav>
          <NavigationMenu
            activeLink={activeLink}
            handleLinkClick={handleScrollTo}
          />
        </nav>
        <RiMenuFill onClick={() => setMenuIsVisible(true)} className='mobile' />
      </div>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        activeLink={activeLink}
        handleLinkClick={handleScrollTo}
      />
    </StyledHeader>
  );
}

export default Header;
