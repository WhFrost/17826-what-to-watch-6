import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {FILMS} = props;
  return (

    <MainPage FILMS = {FILMS} />
  );
};

App.propTypes = {
  FILMS: PropTypes.array.isRequired,
};

export default App;
