import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import FilmCard from "../films/film-card";
import Catalog from "../catalog/catalog";

const MainPage = (props) => {
  const {filters, films} = props;
  return (
    <>
      <FilmCard
        name={films[0].name}
        posterImage={films[0].posterImage}
        backgroundImage={films[0].backgroundImage}
        genre={films[0].genre}
        released={films[0].released}
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
  films: PropTypes.array.isRequired,
};

export default MainPage;
