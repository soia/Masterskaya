import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select } from 'antd';
import Sidebar from '../sidebar';
import Login from '../../pages/login';
import Registration from '../../pages/registration';

import logo from "./images/logo.png";
import search from "./images/search.svg";
import closeImg from './images/close.svg';

import style from "./header.module.scss";
import "./antDesign.css";
import 'antd/dist/antd.css';

function Header() {
    const currentLang = localStorage.getItem('i18nextLng');
    const Option = Select.Option;
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit accsses');
    };

    const sidebarBack = {
        backgroundColor: "#232323",
        height: "100vh"
    }

    return (
        <header className={style.header}>

            <Link to="/" className={style.header__logo}>
                <img
                    src={logo} 
                    alt="logo"
                />
                <span>Masterskaya.</span>
            </Link>

            <nav className={style.header__nav}>
                <ul>
                    <li>
                        <Link to="/studios">
                            {t("header.studios")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/synthesizers">
                            {t("header.synthesizers")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/training">
                            {t("header.training")}
                        </Link>
                    </li>
                </ul>
            </nav>

            <form onSubmit={handleSubmit}>
                <div className={style.header__search}>
                    <label htmlFor="headerSearch">
                        <img
                            src={search}
                            alt="search"
                        />
                    </label>
                    <input
                        id="headerSearch"
                        type="search"
                        placeholder={t("header.search")} 
                    />
                </div>
            </form>

            <Select
                className={style.header__select}
                defaultValue={currentLang || 'rus'}
                onChange={changeLanguage}
            >
                <Option value="rus">Рус</Option>
                <Option value="ukr">Укр</Option>
                <Option value="Eng">Eng</Option>
            </Select>

            <Sidebar
                buttonName={t("header.login")}
                titleStyles={style.header__loginBtn}
                closeStyles={style.sideBar__close}
                bodyStyle={sidebarBack}
                img={closeImg}
            >
                <Login />
                <Registration />
                
            </Sidebar>
        </header>
    );
}

export default Header;