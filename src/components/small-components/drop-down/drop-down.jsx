import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Trans  } from "react-i18next";

// import style from "./drop-down.scss";

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Trans i18nKey="logout.title" />
        </Menu.Item>
    </Menu>
);

class DropDown extends Component {

    render() {

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

export default DropDown;