import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Field from '../../small-components/field';
import style from './login.module.scss';

class Login extends Component {

    state = {
        username: "",
        password: "",
        errors: {
            username: false,
            password: false
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

        if (Object.keys(errors).length > 0) {
            this.setState({
                errors: errors
            });
        } else {
            this.setState({
                errors: {}
            });
            console.log("Login Submit Success");
        }
    };

    render() {
        const { t } = this.props;

        return (
            <div className="login">
                <h2
                    className={style.login__title}>
                    {t("login.title")}
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
                        id="password"
                        type="password"
                        placeholder={t("password.title")}
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.errors.password}
                        inputStyle={style.login__input}
                    />

                    <div className={style.login__buttons}>

                        <button
                            onClick={this.onSubmit}
                            className={style.login__buttons_submit}
                            type="submit"
                        >
                            {t("enter.name")}
                        </button>

                        <button
                            className={style.login__buttons_registr}
                            onClick={this.props.changeLoginRegistr}
                            type="button"
                        >
                            {t("registration.registration")}
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

export default withTranslation()(Login);