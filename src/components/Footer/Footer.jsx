import React from 'react'
import { StyledFooter } from "./Styled";
import setaCima from "../../assets/imgs/seta-para-cima.jpg"
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (
    <StyledFooter>
      <div>
        <p>Copyright © 2024 by Eduardo Aguiar | All Rights Reserved</p>
      </div>
      <ScrollLink
        to="inicio"
        smooth={true}
        duration={500}
      >
        <img src={setaCima} alt={t("upArrow")} />
      </ScrollLink>
    </StyledFooter>
  )
}

export default Footer