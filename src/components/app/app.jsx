import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from "prop-types";

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
