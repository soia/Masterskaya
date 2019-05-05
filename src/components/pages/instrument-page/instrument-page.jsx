import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ButtonBook from '../../small-components/button-book';
import MainBlock from '../../layouts/main-top-block';

import style from "./instrument-page.module.scss";

const Instrument = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <MainBlock
                title={t("synthesizer.title")}
                description={t("synthesizer.description")}
                titleStyle={style.title}
            >
                <ButtonBook
                    bookStyles={style.bookBtnRed}
                    title={t("booked.title")}
                />
            </MainBlock>
        </Fragment>
    );
};

export default Instrument;
