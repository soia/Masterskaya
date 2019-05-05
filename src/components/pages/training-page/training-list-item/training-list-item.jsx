import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import style from "./training-list-item.module.scss";
import ButtonBook from '../../../small-components/button-book';

const StudiosListItem = ({ studio }) => {
    const { t } = useTranslation();

    const { number, description, img, cost } = studio;

    return (
        <Fragment>
            <img
                src={img}
                alt={number}
                className={style.img}
            />
            <p className={style.title}>
                {t("studio.title")} #{number}
            </p>
            <p className={style.description}>
                {description}
            </p>
            <p className={style.cost}>
                {cost} {t("cost.cost")}
            </p>
            <ButtonBook
                bookStyles={style.bookBtnBlack}
                title={t("booked.title")}
            />
        </Fragment>
    );
};

export default StudiosListItem;
