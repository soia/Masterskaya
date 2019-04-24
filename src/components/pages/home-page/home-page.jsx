import React from "react";
import { useTranslation } from "react-i18next";

import style from "./home-page.module.scss";

import mobile from "./images/mobile.svg";
import appStore from "./images/appStore.svg";
import androidStore from "./images/androidStore.svg";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.homepage}>
        <div className={style.homepage__leftSide}>

            <div
                className={style.homepage__hub}>
                <h1>MHub</h1>
            </div>

            <p
                className={style.homepage__description}>
                {t("homePage.description")}
            </p>

            <div className={style.homepage__socialLinks}>
                <a
                    href="https://www.apple.com/itunes/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={appStore} alt="appStore" />
                </a>
                <a
                    href="https://play.google.com/store/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={androidStore} alt="androidStore" />
                </a>
            </div>
        </div>

        <div className={style.homepage__leftSide}>
            <img src={mobile} alt="mobile" />
        </div>
    </div>
  );
};

export default HomePage;
