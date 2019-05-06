import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import style from "./instrument-list-item.module.scss";
import ButtonBook from '../../../small-components/button-book';

const InstrumentListItem = ({ instrument }) => {
    const { t } = useTranslation();

    const { description, img } = instrument;

    return (
        <Fragment>
            <div className={style.wrapperImg}>
                <img
                    src={img}
                    alt={instrument}
                    className={style.wrapperImg__img}
                />
            </div>
            <p className={style.description}>
                {description}
            </p>
            <ButtonBook
                bookStyles={style.bookBtnBlack}
                title={t("booked.title")}
            />
        </Fragment>
    );
};

export default InstrumentListItem;
