import React from "react";

import style from "./home-page.module.scss";

import hub from "./images/hub.svg";
import mobile from "./images/mobile.svg";
import appStore from "./images/appStore.svg";
import androidStore from "./images/androidStore.svg";

const HomePage = () => {
    return (
        <div className={style.homepage}>
            <div className={style.homepage__leftSide}>
                <div className={style.homepage__hub}>
                    <img src={hub} alt="hub" />
                    <h1>Hub</h1>
                </div>

                <p className={style.homepage__description}>Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet,
                    consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur 
                </p>

                <div className={style.homepage__socialLinks}>
                    <img src={appStore} alt="appStore" />
                    <img src={androidStore} alt="androidStore" />
                </div>

            </div>
            <div className={style.homepage__leftSide}>
                <img src={mobile} alt="mobile" />
            </div>
        </div>
    );
};

export default HomePage;
