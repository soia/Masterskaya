import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { message } from 'antd';
import { compose } from "../../../utils";
import { userActions } from '../../../actions';
import Field from '../../small-components/field';

import style from './registration.module.scss';
import "./antDesign.css";
import 'antd/dist/antd.css';

class Registration extends Component {

    state = {
        user: {
            username: "",
            password: "",
            repeatPassword: "",
            email: ""
        },

        errors: {
            username: false,
            password: false,
            repeatPassword: false,
            email: false
        }
    };
    
    onChange = event => {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { t, dispatch, errorMessage, error } = this.props;
        const { username, password, repeatPassword, email } = this.state.user;
        const { user } = this.state;
        const errors = {};
        
        if (username.length < 4) {
            errors.username = t('input.error', { count: 4});
        }

        if (password.length < 6) {
            errors.password = t('input.error', { count: '6'});
        }

        if (password !== repeatPassword) {
            errors.repeatPassword = t('repeatPassword.error');
        }

        if (!!email === false || email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
            errors.email = t('email.error');
        }

        if (Object.keys(errors).length > 0) {
            this.setState({
                errors: errors
            });
        }

        else {
            this.setState({
                errors: {},
            });

            if (user.username && user.password && user.repeatPassword && user.email) {
                dispatch(userActions.register(user));
            }
        }

        setTimeout(() => {
            if (error) {
                message.error(errorMessage, 2);
            } else {
                message.success(t('antMessage.SuccessRegistr'), 2);
                this.props.changeLoginRegistr();
            }
        }, 500);
    };

    render() {
        const { t } = this.props;
        const { username, password, repeatPassword, email } = this.state.user;
        
        return (
            <div className="login">
                <h2
                    className={style.login__title}>
                    {t("registration.registration")}
                </h2>
                <form onSubmit={this.onSubmit}>
                    <Field
                        id="username"
                        type="text"
                        placeholder={t("username.title")}
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        error={this.state.errors.username}
                        inputStyle={style.login__input}
                    />

                    <Field
                        id="email"
                        type="email"
                        placeholder={t("email.title")}
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        error={this.state.errors.email}
                        inputStyle={style.login__input}
                    />      

                    <Field
                        id="password"
                        type="password"
                        placeholder={t("password.title")}
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        error={this.state.errors.password}
                        inputStyle={style.login__input}
                    />

                    <Field 
                        id="repeatPassword"
                        type="password"
                        placeholder={t("repeatPassword.title")}
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={this.onChange}
                        error={this.state.errors.repeatPassword}
                        inputStyle={style.login__input}
                    />

                    <div className={style.login__buttons}>

                        <button
                            className={style.login__buttons_submit}
                            type="submit"
                        >
                            {t("registration.registration")}
                        </button>

                        <button
                            className={style.login__buttons_registr}
                            onClick={this.props.changeLoginRegistr}
                            type="button"
                        >
                            {t("login.title")}
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { error, message } = state.alert;
    return { 
        error: error,
        errorMessage: message
    };
};

export default compose(
    withTranslation(),
    connect(
        mapStateToProps,
    )
)(Registration);