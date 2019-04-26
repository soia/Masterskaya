import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import Sidebar from '../sidebar';
import Login from '../../pages/login';
import Registration from '../../pages/registration';
import SelectLangeage from '../../change-language';

import logo from "./images/logo.png";
import search from "./images/search.svg";
import closeImg from './images/close.svg';

import style from "./header.module.scss";
import 'antd/dist/antd.css';

export class Header extends Component {

    state = {
        loginBlock: true
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit accsses');
    };

    setLoginRegistr = () => {
        this.setState((state) => {
            return {  loginBlock: !this.state.loginBlock };
        });
    }

  render() {

    const { t } = this.props;

    const loginBlock = this.state.loginBlock;

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

            <form onSubmit={this.handleSubmit}>
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

            <SelectLangeage />

            <Sidebar
                buttonName={t("header.login")}
                titleStyles={style.header__loginBtn}
                closeStyles={style.sideBar__close}
                bodyStyle={sidebarBack}
                img={closeImg}
            >

            {loginBlock ? <Login changeLoginRegistr={this.setLoginRegistr} /> : <Registration changeLoginRegistr={this.setLoginRegistr} />}
                
            </Sidebar>
        </header>
    )
  }
}

export default withTranslation()(Header);;