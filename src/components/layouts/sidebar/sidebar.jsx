import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import ButtonClose from '../../small-components/button-close';
import { compose } from "../../../utils";

import './sidebar.css';

class Sidebar extends Component {
    state = { 
        visible: false,
        placement: 'right'
    };

    onClose = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    componentDidUpdate() {
        const { loggingIn } = this.props;

        if (loggingIn) {
            // eslint-disable-next-line 
            this.state.visible = false;
        }

    }

    render() {
        return (
            <Fragment>
                <button
                    className={this.props.titleStyles}
                    onClick={this.onClose}>
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

const mapStateToProps = ({ authentication: { loggingIn }}) => {
    return { loggingIn };
};

export default compose(
    connect(
        mapStateToProps,
    )
)(Sidebar);