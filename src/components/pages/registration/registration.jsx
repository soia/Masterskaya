import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Field from '../../small-components/field';
import style from './registration.module.scss';

class Registration extends Component {

    state = {
        username: "",
        password: "",
        repeatPassword: "",
        email: "",

        errors: {
            username: false,
            password: false,
            repeatPassword: false,
            email: false
        }
    };
    
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = (event) => {
        const { t } = this.props;
        event.preventDefault();
        const errors = {};
        if (this.state.username.length < 4) {
            errors.username = t('input.error', { count: 4});
        }

        if (this.state.password.length < 6) {
            errors.password = t('input.error', { count: '6'});
        }

        if (this.state.password !== this.state.repeatPassword) {
            errors.repeatPassword = t('repeatPassword.error');
        }

        if (!!this.state.email === false || this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
            errors.email = t('email.error');
        }

        if (Object.keys(errors).length > 0) {
            this.setState({
                errors: errors
            });
        } else {
            this.setState({
                errors: {}
            });
            console.log("Registration Submit Success");
        }
    };

    render() {
        const { t } = this.props;

        return (
            <div className="login">
                <h2
                    className={style.login__title}>
                    {t("registration.registration")}
                </h2>
                <form>
                    <Field
                        id="username"
                        type="text"
                        placeholder={t("username.title")}
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        error={this.state.errors.username}
                        inputStyle={style.login__input}
                    />

                    <Field
                        id="email"
                        type="email"
                        placeholder={t("email.title")}
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={this.state.errors.email}
                        inputStyle={style.login__input}
                    />      

                    <Field
                        id="password"
                        type="password"
                        placeholder={t("password.title")}
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.errors.password}
                        inputStyle={style.login__input}
                    />

                    <Field 
                        id="repeatPassword"
                        type="password"
                        placeholder={t("repeatPassword.title")}
                        name="repeatPassword"
                        value={this.state.repeatPassword}
                        onChange={this.onChange}
                        error={this.state.errors.repeatPassword}
                        inputStyle={style.login__input}
                    />

                    <div className={style.login__buttons}>

                        <button
                            onClick={this.onSubmit}
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

export default withTranslation()(Registration);