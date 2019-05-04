import React, { Fragment } from "react";
import "./studios-list-item.module.scss";

const StudiosListItem = ({ instrument }) => {
  const { title, instrumentItem } = instrument;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{instrumentItem}</span>
    </Fragment>
  );
};

export default StudiosListItem;
