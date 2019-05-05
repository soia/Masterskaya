import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import MainBlock from '../../layouts/main-top-block';
import DownloadApp from '../../small-components/download-app';

import style from "./home-page.module.scss";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>

        <MainBlock
            title="MHub"
            titleStyle={style.title}
            description={t("homePage.description")}
        >
        <DownloadApp />

        </MainBlock>
    </Fragment>
  );
};

export default HomePage;
