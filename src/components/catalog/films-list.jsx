import React from "react";
import PropTypes from "prop-types";
import FilmCardSmall from "./film-card-small";

const FilmsList = (props) => {
  const {films} = props;
  return <div className="catalog__movies-list">
    {
      films.map((film) => <FilmCardSmall key={film.id} id={film.id} name={film.name} posterImage={film.posterImage}/>)
    }
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
