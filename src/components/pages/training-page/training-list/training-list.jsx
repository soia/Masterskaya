import React, { Component } from "react";
import StudiosListItem from "../training-list-item";
import { connect } from "react-redux";
import Spinner from "../../../spinner";
import ErrorIndicator from '../../error-page/error-indicator';

import { withStoreService } from "../../../hoc";
import { fetchTraining } from "../../../../actions";
import { compose } from "../../../../utils";

import style from "./training-list.module.scss";

const StudioList = ({ studios }) => {
    return (
        <div className={style.contentPage}>
            {studios.map(studio => {
                return (
                    <div
                        className={style.contentPage__item}
                        key={studio.id}
                    >
                        <StudiosListItem studio={studio} />
                    </div>
                );
            })}
        </div>
    );
}

class StudiosListContainer extends Component {

    componentDidMount() {
        this.props.fetchTraining();
    }

    render() {
        const { studios, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <StudioList studios={studios} />;
    }
}

const mapStateToProps = ({ studios, loading, error }) => {
    return { studios, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchTraining: fetchTraining( storeService, dispatch )
    }
}

export default compose(
    withStoreService(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(StudiosListContainer);
