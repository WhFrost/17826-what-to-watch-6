import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import FilmCard from "../films/film-card";
import Catalog from "../catalog/catalog";
import {PROPS_FILM} from "../../prop-validation";

const MainPage = (props) => {
  const {filters, films} = props;
  const FILM_INDEX = 0;
  return (
    <>
      <FilmCard
        films = {films}
        filmIndex = {FILM_INDEX}
      />
      <div className="page-content">
        <Catalog
          filters = {filters}
          films = {films} />
        <Footer />
      </div>
    </>
  );
};

MainPage.propTypes = {
  filters: PropTypes.array.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
};

export default MainPage;
