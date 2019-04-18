import React, { Component } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import InstrumentList from "../../instrument-list";

import "./home-page.module.scss";

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t("title")}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Welcome />
      <MyComponent />
      <div>{t("description.part2")}</div>
      <div>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
    </div>
  );
}

const HomePage = () => {
  return (
    <div>
      <InstrumentList />
      <Page />
    </div>
  );
};

export default HomePage;
