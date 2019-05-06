import React, { Component } from "react";
import InstrumentListItem from "../instrument-list-item";
import { connect } from "react-redux";
import Spinner from "../../../spinner";
import ErrorIndicator from '../../error-page/error-indicator';

import { withStoreService } from "../../../hoc";
import { fetchSynthesizer } from "../../../../actions";
import { compose } from "../../../../utils";

import style from "./instrument-list.module.scss";

const InstrumentList = ({ dataItem }) => {
    return (
        <div className={style.contentPage}>
            {dataItem.map(instrument => {
                return (
                    <div
                        className={style.contentPage__item}
                        key={instrument.id}
                    >
                        <InstrumentListItem instrument={instrument} />
                    </div>
                );
            })}
        </div>
    );
}

class InstrumentListContainer extends Component {

    componentDidMount() {
        this.props.fetchSynthesizer();
    }

    render() {
        const { dataItem, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <InstrumentList dataItem={dataItem} />;
    }
}
const mapStateToProps = ({ pagesList: { dataItem, loading, error }}) => {
    return { dataItem, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchSynthesizer: fetchSynthesizer( storeService, dispatch )
    }
}

export default compose(
    withStoreService(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(InstrumentListContainer);
