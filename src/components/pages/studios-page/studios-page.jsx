import React, { Fragment, Component } from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "../../../utils";
import ButtonBook from '../../small-components/button-book';
import StudiosList from './studios-list';
import StudioListLoggedIn from './studio-list-loggedIn';
import MainBlock from '../../layouts/main-top-block';

import style from "./studios-page.module.scss";

    class Studios extends Component {

        render() {
        const { t, loggedIn } = this.props;

        if (loggedIn) {
            return <StudioListLoggedIn />;
        }

        return (
            <Fragment>
                <MainBlock
                    title={t("studios.title")}
                    description={t("studios.description")}
                    titleStyle={style.title}
                >
                    <ButtonBook
                        bookStyles={style.bookBtnRed}
                        title={t("booked.title")}
                    />
                </MainBlock>
                <StudiosList />
            </Fragment>
        );
    }
};

const mapStateToProps = state => {
    const { loggedIn } = state.authentication;
  
    return {
        loggedIn: loggedIn
    };
};
  
export default compose(
    withTranslation(),
        connect(
        mapStateToProps,
    )
)(Studios);
