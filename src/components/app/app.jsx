import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    HomePage,
    Studios,
    Instrument,
    Training,
    PageNotFound,
    Contacts
} from "../../components/pages";

import Header from "../layouts/header";
import Footer from "../layouts/footer";

import "./app.module.scss";
import "./app.scss";
import "../assets/styles/_reset.scss";
import "../assets/styles/_fonts.scss";

const App = () => {
    return (
        <Router>
            <Header />
                <Switch>
                    <Route
                        path="/"
                        component={ HomePage }
                        exact
                    />

                    <Route
                        path="/studios"
                        component={ Studios }
                    />

                    <Route
                        path="/instrument"
                        component={ Instrument }
                    />

                    <Route
                        path="/training"
                        component={ Training }
                    />

                    <Route 
                        path="/contacts"
                        component={ Contacts } 
                    />

                    <Route 
                        component={ PageNotFound } 
                    />
                </Switch>
            <Footer />
        </Router>
    );
};

export default App;
