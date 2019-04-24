import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Modal from 'react-awesome-modal';

import style from "./contacts-page.module.scss";

class Contacts extends Component {
    state = {
        visible : false
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        const { t } = this.props;

        return (
            <div className={style.contacts}>
                <h2
                    className={style.contacts__title}>
                    {t("contacts.contacts")}
                </h2>

                <div className={style.contacts__wrapper}>
                    <div className={style.contacts__wrapper_top}>
                        <div className={style.contacts__wrapper_row}>
                            <p className={style.contacts__wrapper_row__title}>
                                {t("contacts.location")}
                            </p>
                            <p className={style.contacts__wrapper_row__subTitle}>
                                {t("contacts.adress")}
                            </p>
                        </div>
                        <div className={style.contacts__wrapper_row}>
                            <p className={style.contacts__wrapper_row__title}>
                                {t("contacts.mail")}
                            </p>
                            <a href="mailto:partner.masterskaya@gmail.com"
                                className={style.contacts__wrapper_row__subTitleLink}>
                                partner.masterskaya@gmail.com
                            </a>
                        </div>
                        <div className={style.contacts__wrapper_row}>
                            <p className={style.contacts__wrapper_row__title}>
                                {t("contacts.sendDemo")}
                            </p>
                            <a href="mailto:demo.masterskaya@gmail.com"
                                className={style.contacts__wrapper_row__subTitleLink}>
                                demo.masterskaya@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className={style.contacts__wrapper_bottom}>
                        <div className={style.contacts__wrapper_row}>
                            <p className={style.contacts__wrapper_row__title}>
                                {t("contacts.maps")}
                            </p>
                            <p className={style.contacts__wrapper_row__btnMaps} onClick={() => this.openModal()} >
                                {t("contacts.open")}
                            </p>
                        </div>
                        <div className={style.contacts__wrapper_row}>
                            <p className={style.contacts__wrapper_row__title}>
                                {t("contacts.downloadApp")}
                            </p>
                            <a href="https://www.apple.com/itunes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style.contacts__wrapper_row__socialLink}>
                                Apple store
                            </a>
                        </div>
                        <div className={style.contacts__wrapper_row}>
                            <p className={style.contacts__wrapper_row__title}>
                                {t("contacts.downloadApp")}
                            </p>
                            <a href="https://play.google.com/store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style.contacts__wrapper_row__socialLink}>
                                Goole play
                            </a>
                        </div>
                    </div>
                </div>

                <Modal 
                    visible={this.state.visible}
                    width="75%"
                    height="75%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                <div className={style.contacts__modalWindow}>
                    <iframe 
                        className={style.contacts__modalWindow_iframe}
                        title="Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.96112769748!2d30.536361815730455!3d50.42319587947168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf13bbadfe93%3A0x6167d7c981665196!2z0YPQuy4g0JXQstCz0LXQvdC40Y8g0JrQvtC90L7QstCw0LvRjNGG0LAsIDQ00JAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1556114201117!5m2!1sru!2sua"
                        frameBorder="0" 
                        >
                    </iframe>
                    <span
                        className={style.contacts__modalWindow_close}
                        onClick={() => this.closeModal()}>
                            {t("contacts.close")}
                    </span>
                </div>
                    </Modal>
                </div>
        );
    }
}

export default withTranslation()(Contacts);