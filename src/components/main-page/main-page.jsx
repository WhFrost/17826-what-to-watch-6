import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import FilmCard from "../films/film-card";
import Catalog from "../catalog/catalog";
import {PROPS_FILM} from "../../prop-validation";

const MainPage = (props) => {
  const {films} = props;
  const FILM_INDEX = 0;
  const film = films[FILM_INDEX];
  return (
    <>
      <FilmCard
        film = {film}
      />
      <div className="page-content">
        <Catalog
          films = {films} />
        <Footer />
      </div>
    </>
  );
};

MainPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
};

export default MainPage;
