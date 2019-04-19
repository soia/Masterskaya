import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select } from 'antd';

import logo from "./images/logo.svg";
import search from "./images/search.svg";

import style from "./header.module.scss";
import 'antd/dist/antd.css';

const Option = Select.Option;

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit accsses');
    };

    return (
        <header className={style.header}>

            <Link to="/" className={style.header__logo}>
                <img src={logo} alt="logo" />
                <span>Masterskaya.</span>
            </Link>

            <nav className={style.header__nav}>
                <ul>
                    <Link to="/studios">{t("header.studios")}</Link>
                    <Link to="/synthesizers">{t("header.synthesizers")}</Link>
                    <Link to="/training">{t("header.training")}</Link>
                </ul>
            </nav>
            
            <form action="/search" onSubmit={handleSubmit}>
                <div className={style.header__search}>
                    <label htmlFor="headerSearch">
                        <img src={search} alt="search" />
                    </label>
                    <input id="headerSearch" type="search" placeholder={t("header.search")} />
                </div>
            </form>

            <Select className={style.header__select} defaultValue="rus" onChange={changeLanguage}>
                <Option value="rus">Рус</Option>
                <Option value="ukr">Укр</Option>
                <Option value="Eng">Eng</Option>
            </Select>

            <button className={style.header__loginBtn}>{t("header.login")}</button>

        </header>
    );
};

export default Header;
