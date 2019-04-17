import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, Studios, Synthesizers, Training } from "../pages";

import "./app.module.scss";

const App = () => {
  return (
    <Switch>
        <Route
            path="/"
            component={HomePage}
            exact
        />

        <Route
            path="/studios"
            component={Studios}
        />

        <Route
            path="/synthesizers"
            component={Synthesizers}
        />

        <Route
            path="/training"
            component={Training}
        />
    </Switch>
  );
};

export default App;
