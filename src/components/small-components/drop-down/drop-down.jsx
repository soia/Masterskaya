import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { withTranslation } from "react-i18next";
import { userActions } from '../../../actions/user.actions';
import { connect } from 'react-redux';
import { compose } from "../../../utils";

// import style from "./drop-down.scss";

class DropDown extends Component {

    logOut = () => {
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }

    render() {
        const { t } = this.props;
        const menu = (
            <Menu>
                <Menu.Item onClick={this.logOut} key="0">
                    {t("logout.title")}
                </Menu.Item>
            </Menu>
        );

        return (
            <Fragment>
                <Dropdown
                    overlay={menu}
                    placement="bottomCenter"
                    trigger={['click']}
                >
                    <span className="ant-dropdown-link">
                        <Icon type="down" />
                    </span>
                </Dropdown>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;

    return {
        userStatus: loggingIn 
    };
};

export default compose(
    withTranslation(),
    connect(
        mapStateToProps,
    )
)(DropDown);