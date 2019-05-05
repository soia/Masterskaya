import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ButtonBook from '../../small-components/button-book';
import TrainingList from './training-list';

import style from "./training-page.module.scss";

import mobile from "./images/mobile.svg";

const Training = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className={style.training}>
                <div className={style.training__leftSide}>

                    <h2
                        className={style.training__title}>
                        {t("training.title")}
                    </h2>

                    <p
                        className={style.training__description}>
                        {t("training.description")}
                    </p>

                    <ButtonBook
                        bookStyles={style.training__bookBtnRed}
                        title={t("more.title")}
                    />
                </div>

                <div className={style.training__leftSide}>
                    <img src={mobile} alt="mobile" />
                </div>
            </div>
            <TrainingList />
        </Fragment>
    );
};

export default Training;
