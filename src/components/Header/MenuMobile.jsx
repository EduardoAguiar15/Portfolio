import React from 'react';
import { IoClose } from "react-icons/io5";
import { Container } from './Styled';
import NavigationMenu from './NavigationMenu';

function MenuMobile({ menuIsVisible, setMenuIsVisible, activeLink, handleLinkClick, changeLanguage }) {
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <NavigationMenu
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
          changeLanguage={changeLanguage}
        />
      </nav>
    </Container>
  );
}

export default MenuMobile;
