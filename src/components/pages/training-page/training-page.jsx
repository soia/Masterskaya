import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ButtonBook from '../../small-components/button-book';
import TrainingList from './training-list';
import MainBlock from '../../layouts/main-top-block';

import style from "./training-page.module.scss";

const Training = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <MainBlock
                title={t("training.title")}
                description={t("training.description")}
                titleStyle={style.title}
            >
                <ButtonBook
                    bookStyles={style.bookBtnRed}
                    title={t("more.title")}
                />
            </MainBlock>
            <TrainingList />
        </Fragment>
    );
};

export default Training;
