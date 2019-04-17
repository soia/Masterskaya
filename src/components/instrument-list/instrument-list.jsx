import React, { Component } from "react";
import InstrumentListItem from "../instrument-list-item";
import { connect } from "react-redux";

import { withInstrumentstoreService } from "../hoc";
import { instrumentsLoaded } from "../../actions";
import { compose } from "../../utils";

import "./instrument-list.module.scss";

class InstrumentList extends Component {
  componentDidMount() {
    // 1. receive data
    const { instrumentstoreService } = this.props;
    const data = instrumentstoreService.getInstruments();

    // 2. dispacth action to store
    this.props.instrumentsLoaded(data);
  }

  render() {
    const { instruments } = this.props;
    return (
      <ul>
        {instruments.map(instrument => {
          return (
            <li key={instrument.id}>
              <InstrumentListItem instrument={instrument} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ instruments }) => {
  return { instruments };
};

const mapDispatchToProps = {
  instrumentsLoaded
};

export default compose(
  withInstrumentstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(InstrumentList);
