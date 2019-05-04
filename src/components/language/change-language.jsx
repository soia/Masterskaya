import React from 'react'
import { useTranslation } from "react-i18next";
import { Select } from 'antd';

import style from "./change-language.module.scss";
import "./antDesign.css";
import 'antd/dist/antd.css';

function SelectLangeage() {
    const currentLang = localStorage.getItem('i18nextLng');
    const Option = Select.Option;
    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
            <Select
                className={style.changeLanguage__select}
                defaultValue={currentLang || 'rus'}
                onChange={changeLanguage}
            >
                <Option value="rus">Рус</Option>
                <Option value="ukr">Укр</Option>
                <Option value="Eng">Eng</Option>
            </Select>
    );
}

export default SelectLangeage;