import React, { Component } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import InstrumentList from "../../instrument-list";

import "./home-page.module.scss";

const HomePage = () => {
  return (
    <div>
      <InstrumentList />
    </div>
  );
};

export default HomePage;
