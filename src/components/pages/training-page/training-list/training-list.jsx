import React, { Component } from "react";
import TrainingListItem from "../training-list-item";
import { connect } from "react-redux";
import Spinner from "../../../spinner";
import ErrorIndicator from '../../error-page/error-indicator';

import { withStoreService } from "../../../hoc";
import { fetchTraining } from "../../../../actions/content.actions";
import { compose } from "../../../../utils";

import style from "./training-list.module.scss";

const TrainingList = ({ dataItem }) => {
    return (
        <div className={style.contentPage}>
            {dataItem.map(training => {
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
        const { dataItem, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <TrainingList dataItem={dataItem} />;
    }
}

const mapStateToProps = ({ pagesList: { dataItem, loading, error }}) => {
    return { dataItem, loading, error };
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
