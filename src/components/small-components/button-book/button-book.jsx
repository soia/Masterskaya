import React from 'react';
import { useTranslation } from "react-i18next";

const ButtonBook = (props) => {

    const { t } = useTranslation();

    return (
        <button
            className={props.bookStyles}
            onClick={props.onbooked}
        >
            {t("booked.title")}
        </button>
    );
  };

export default ButtonBook;