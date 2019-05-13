import React, { Component } from "react";
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import { compose } from "../../../utils";

import style from "./user-loggedIn-info";

export class UserLoggedIn extends Component {

    render() {

        return (
            <div className={style.userLoggedIn}>

            </div>
        )
    }
}


const mapStateToProps = ({ authentication: { user } }) => {
    return { user };
};

export default compose(
    withTranslation(),
    connect(
        mapStateToProps,
    )
)(UserLoggedIn);
