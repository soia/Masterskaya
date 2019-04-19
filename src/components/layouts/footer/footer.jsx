import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import style from "./footer.module.scss";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={style.footer}>

            <Link to="/contacts" className={style.footer__contact}>
                {t("footer.contact")}
            </Link>

            <nav className={style.footer__socialLinks}>
                <ul>
                    <a href="https://www.instagram.com" rel="noopener noreferrer"  target="_blank">Instagram</a>
                    <a href="https://www.facebook.com/" rel="noopener noreferrer"  target="_blank">Facebook</a>
                    <a href="https://twitter.com/" rel="noopener noreferrer"  target="_blank">Twitter</a>
                </ul>
            </nav>
        
        </footer>
    );
};

export default Footer;
