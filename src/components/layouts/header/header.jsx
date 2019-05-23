import React, { Component } from 'react'
import { Link, NavLink  } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import Sidebar from '../sidebar';
import Login from '../../auth/login';
import Registration from '../../auth/registration';
import SelectLangeage from '../../language';
import { compose } from "../../../utils";
import UserLoggedIn from '../../small-components/user-loggedIn-info';

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

    const { t, userStatus } = this.props; 

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
                        <NavLink
                            to="/studios"
                            activeStyle={{ color: "#ff0034"}}
                        >
                            {t("header.studios")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/instrument"
                            activeStyle={{ color: "#ff0034"}}
                        >
                            {t("header.synthesizers")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/training"
                            activeStyle={{ color: "#ff0034"}}
                        >
                            {t("header.training")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/events"
                            activeStyle={{ color: "#ff0034"}}
                        >
                            {t("header.events")}
                        </NavLink>
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

            { userStatus ? 
                <UserLoggedIn />
                :
                <Sidebar
                    buttonName={t("header.login")}
                    titleStyles={style.header__loginBtn}
                    closeStyles={style.sideBar__close}
                    bodyStyle={sidebarBack}
                    img={closeImg}
                >

                    {loginBlock ? <Login changeLoginRegistr={this.setLoginRegistr} /> : <Registration changeLoginRegistr={this.setLoginRegistr} />}
                    
                </Sidebar>
            }

        </header>
    )
  }
}

const mapStateToProps = (state) => {
    const { loggedIn } = state.authentication;
    return { 
        userStatus: loggedIn
    };
};

export default compose(
    withTranslation(),
    connect(
        mapStateToProps,
    )
)(Header);