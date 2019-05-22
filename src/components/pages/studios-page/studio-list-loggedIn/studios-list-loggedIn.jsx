import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { withRouter } from 'react-router-dom';
import Spinner from "../../../spinner";
import ErrorIndicator from '../../error-page/error-indicator';

import { withStoreService } from "../../../hoc";
import { fetchStudios } from "../../../../actions/content.actions";
import { compose } from "../../../../utils";

import style from "./studios-list-loggedIn.module.scss";

class StudioListLoggedIn extends Component {

    render() {
        const { t, dataItem, history, match } = this.props;
        console.log(history, match);

    return (
        <div className={style.listWrapper}>
            {dataItem.map(studio => {
                return (
                    <div
                        className={style.listWrapper__item}
                        key={studio.id}
                    >
                        {t("studio.title")} #{studio.number}
                    </div>
                );
            })}
        </div>
    );
    }
}

const StudioListWithRouter = compose(
    withTranslation(),
    withRouter
)(StudioListLoggedIn);

class StudiosListLoggedInContainer extends Component {

    componentDidMount() {
        this.props.fetchStudios();
    }

    render() {
        const { dataItem, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <StudioListWithRouter dataItem={dataItem} />;
    }
}

const mapStateToProps = (state) => {
    const { dataItem, loading, error } = state.updatepagesList;

    return {
        dataItem, loading, error 
    };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchStudios: fetchStudios( storeService, dispatch )
    }
}

export default compose(
    withStoreService(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    ), withRouter
)(StudiosListLoggedInContainer);
