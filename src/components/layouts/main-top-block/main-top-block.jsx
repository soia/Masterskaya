import React from "react";

import style from "./main-top-block.module.scss";

import mobile from "./images/mobile.svg";

const MainBlock = (props) => {

    return (
        <div className={style.mainBlock}>
            <div className={style.mainBlock__leftSide}>
                <h1
                    className={props.titleStyle}>
                    {props.title}
                </h1>
                <p
                    className={style.mainBlock__description}>
                    {props.description}
                </p>
                {props.children}
            </div>
            <div className={style.mainBlock__rightSide}>
                <img src={mobile} alt="mobile" />
            </div>
        </div>
    );
};

export default MainBlock;
