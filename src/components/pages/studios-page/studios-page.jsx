import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ButtonBook from '../../small-components/button-book';
import StudiosList from './studios-list';
import MainBlock from '../../layouts/main-top-block';

import style from "./studios-page.module.scss";

const Studios = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <MainBlock
                title={t("studios.title")}
                description={t("studios.description")}
                titleStyle={style.title}
            >
                <ButtonBook
                    bookStyles={style.bookBtnRed}
                    title={t("booked.title")}
                />
            </MainBlock>
            <StudiosList />
        </Fragment>
    );
};

export default Studios;
