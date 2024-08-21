import React from 'react'
import { StyledNotFound } from "./Styled";
import exclamacao from "../../assets/imgs/exclamation.png"
import { useTranslation } from 'react-i18next';

const NotFound = () => {

    const { t } = useTranslation();

    return (
        <StyledNotFound>
            <div>
                <div>
                    <img src={exclamacao} alt={t("exclamation")} />
                </div>
                <h1>
                    404
                </h1>
                <h2>
                    {t("notFound")}
                </h2>
                <h3>
                    <a href="/">{t("notFoundLink")}</a>
                </h3>
            </div>
        </StyledNotFound>
    )
}

export default NotFound