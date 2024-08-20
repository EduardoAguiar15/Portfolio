import React from 'react'
import Whatsapp from "../../assets/imgs/whatsapp.png";
import { StyledWhats } from "./Styled";
import { useTranslation } from 'react-i18next';

function WhatsApp() {

  const { t } = useTranslation();

  return (

    <StyledWhats>
      <div className='Whats'>
        <a href="https://wa.me/5521968642963" target='blank'>
          <img src={Whatsapp} alt={t("whatsapp")} />
        </a>
      </div>
    </StyledWhats>
  )
}

export default WhatsApp