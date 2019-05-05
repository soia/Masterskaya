import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import style from "./training-list-item.module.scss";
import ButtonBook from '../../../small-components/button-book';

const TrainingListItem = ({ training }) => {
    const { t } = useTranslation();

    const { number, description, img } = training;

    return (
        <Fragment>
            <img
                src={img}
                alt={number}
                className={style.img}
            />
            <p className={style.title}>
                {t("program.title")} #{number}
            </p>
            <p className={style.description}>
                {description}
            </p>
            <ButtonBook
                bookStyles={style.bookBtnBlack}
                title={t("more.title")}
            />
        </Fragment>
    );
};

export default TrainingListItem;
