import React, { Component } from "react";
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import { compose } from "../../../utils";
import DropDown from '../../small-components/drop-down';

import style from "./user-loggedIn-info";

export class UserLoggedIn extends Component {

    render() {
        const { user } = this.props;

        return (
            <div className={style.userLoggedIn}>
                { user ? user.username : '' }
                <DropDown />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state.authentication;

    return { 
      user: user
    };
};

export default compose(
    withTranslation(),
    connect(
        mapStateToProps,
    )
)(UserLoggedIn);
