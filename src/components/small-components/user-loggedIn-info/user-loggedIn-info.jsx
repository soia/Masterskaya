import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { compose } from "../../../utils";
import DropDown from '../../small-components/drop-down';

import "./user-loggedIn-info.css";

export class UserLoggedIn extends Component {

    render() {
        const { user } = this.props;

        return (
            <div className="userNameWrapper">
                <NavLink
                    to="/profile"
                    activeStyle={{ color: "#ff0034"}}
                >
                    { user ? user.username : '' }
                </NavLink>
                
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
