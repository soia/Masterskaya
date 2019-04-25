import React from 'react';
import { useTranslation } from "react-i18next";

import style from "./button-close.module.scss";

const ButtonClose = (props) => {

    const { t } = useTranslation();

    return (
        <button
            className={props.closeStyles}
            onClick={props.onClose}
        >
            <img
                src={props.img}
                alt="close"
                className={style.close__img}
            />
            {t("close.close")}
        </button>
    );
  };

export default ButtonClose;