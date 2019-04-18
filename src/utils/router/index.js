import React from "react";    
import { Route, Switch } from "react-router-dom";
import {
    HomePage,
    Studios,
    Synthesizers,
    Training,
    PageNotFound
} from "../../components/pages";

const Router = () => {
    return (
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
                path="/synthesizers"
                component={ Synthesizers }
            />
  
            <Route
                path="/training"
                component={ Training }
            />
  
            <Route 
                component={ PageNotFound } 
            />
      </Switch>
    );
};

export default Router;