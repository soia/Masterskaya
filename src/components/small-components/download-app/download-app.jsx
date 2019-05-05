import React from "react";

import style from "./download-app.module.scss";

import appStore from "./images/appStore.svg";
import androidStore from "./images/androidStore.svg";

const DownloadApp = () => {

  return (
    <div className={style.downloadApp}>
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
  );
};

export default DownloadApp;