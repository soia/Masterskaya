import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ButtonBook from '../../small-components/button-book';
import StudiosList from './studios-list';

import style from "./studios-page.module.scss";

import mobile from "./images/mobile.svg";

const Studios = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className={style.studios}>
                <div className={style.studios__leftSide}>

                    <h2
                        className={style.studios__title}>
                        {t("studios.title")}
                    </h2>

                    <p
                        className={style.studios__description}>
                        {t("studios.description")}
                    </p>

                    <div className={style.studios__buttonBook}>
                        <ButtonBook bookStyles={style.studios__bookBtnRed} />
                    </div>
                </div>

                <div className={style.studios__leftSide}>
                    <img src={mobile} alt="mobile" />
                </div>
            </div>
            <StudiosList />
            <StudiosList />
            <StudiosList />
            <StudiosList />
            <StudiosList />
        </Fragment>
    );
};

export default Studios;
