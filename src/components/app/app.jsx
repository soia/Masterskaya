import React, { Fragment } from "react";

import Router from "../../utils/router";
import Header from "../layouts/header";

import "./app.module.scss";

const App = () => {
    return (
        <Fragment>
            <Header />

            <Router />
        </Fragment>
    );
};

export default App;
