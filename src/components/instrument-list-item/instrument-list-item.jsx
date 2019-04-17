import React, { Fragment } from "react";
import "./instrument-list-item.module.scss";

const InstrumentListItem = ({ instrument }) => {
  const { title, instrumentItem } = instrument;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{instrumentItem}</span>
    </Fragment>
  );
};

export default InstrumentListItem;
