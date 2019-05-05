import React, { Component } from "react";
import TrainingListItem from "../training-list-item";
import { connect } from "react-redux";
import Spinner from "../../../spinner";
import ErrorIndicator from '../../error-page/error-indicator';

import { withStoreService } from "../../../hoc";
import { fetchTraining } from "../../../../actions";
import { compose } from "../../../../utils";

import style from "./training-list.module.scss";

const TrainingList = ({ studios }) => {
    return (
        <div className={style.contentPage}>
            {studios.map(training => {
                return (
                    <div
                        className={style.contentPage__item}
                        key={training.id}
                    >
                        <TrainingListItem training={training} />
                    </div>
                );
            })}
        </div>
    );
}

class TrainingListContainer extends Component {

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

        return <TrainingList studios={studios} />;
    }
}

const mapStateToProps = ({ studioAndTrainingList: { studios, loading, error }}) => {
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
)(TrainingListContainer);
