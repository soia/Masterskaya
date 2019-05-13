import React, { Component } from "react";
import StudiosListItem from "../studios-list-item";
import { connect } from "react-redux";
import Spinner from "../../../spinner";
import ErrorIndicator from '../../error-page/error-indicator';

import { withStoreService } from "../../../hoc";
import { fetchStudios } from "../../../../actions/content.actions";
import { compose } from "../../../../utils";

import style from "./studios-list.module.scss";

const StudioList = ({ dataItem }) => {
    return (
        <div className={style.contentPage}>
            {dataItem.map(studio => {
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

        return <StudioList dataItem={dataItem} />;
    }
}
const mapStateToProps = ({ pagesList: { dataItem, loading, error }}) => {
    return { dataItem, loading, error };
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
    )
)(StudiosListContainer);
