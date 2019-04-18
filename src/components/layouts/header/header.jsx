import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';

import style from './header.module.scss';

const Header = () => {
    return (
        <header>
            <Link to="/" className={style.logo} exact>
                <img src={logo} alt="logo" />
                <span>Masterskaya.</span>
            </Link>

            <ul>
                <Link to="/studios">
                    Студии
                </Link>
                <Link to="/synthesizers">
                    Синтезаторы
                </Link>
                <Link to="/training">
                    Обучение
                </Link>
            </ul>

        </header>
    )
}

export default Header;