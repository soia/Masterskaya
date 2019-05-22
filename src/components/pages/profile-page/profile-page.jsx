import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "../../../utils";

import style from "./profile-page.module.scss";

class Profile extends Component {

  render() {
    const { loggedIn } = this.props;

    if (loggedIn) {
      return (
        <Fragment>
          <h1 className={style.title}>
            Profile page coming soon!
          </h1>
        </Fragment>
      );
    }

    return <Redirect to="/" />;
  }
}

const mapStateToProps = state => {
  const { loggedIn } = state.authentication;

  return {
    loggedIn: loggedIn
  };
};

export default compose(
    connect(
        mapStateToProps,
    )
)(Profile);
