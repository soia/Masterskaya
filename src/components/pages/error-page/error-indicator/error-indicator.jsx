import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

import errorLogo from "./images/error.jpg";

import styles from "./error-indicator.module.scss";

const ErrorIndicator = () => {
  const { t } = useTranslation();

  return (
    <Router>
        <div className={styles.errorWrapper}>
            <img
                src={errorLogo}
                alt="errorLogo"
            />
            <h2>{t("error.title")}</h2>
            <Link to="/"
                className={styles.errorWrapper__return}>
                {t("error.return")}
            </Link>
        </div>
    </Router>
  );
};

export default ErrorIndicator;
