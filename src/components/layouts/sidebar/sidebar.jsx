import React, { Component, Fragment } from 'react'
import { Drawer } from 'antd';
import ButtonClose from '../../small-components/button-close';

import './sidebar.css';

class Sidebar extends Component {
    state = { 
        visible: false,
        placement: 'right'
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <Fragment>
                <button
                    className={this.props.titleStyles}
                    onClick={this.showDrawer}>
                    {this.props.buttonName}
                </button>
                <Drawer
                    placement={this.state.placement}
                    closable={false}
                    width={'25vw'}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={this.props.bodyStyle}
                >

                    <ButtonClose
                        {...this.props}
                        onClose={this.onClose}
                    />
                    {this.props.children}
                </Drawer>
            </Fragment>
        );
    }
}

export default Sidebar;