import React from "react";
import PropTypes from "prop-types";
import FilmCardSmall from "./film-card-small";
import {PROPS_FILM} from "../../prop-validation";

const FilmsList = ({films}) => {
  return <div className="catalog__movies-list">
    {
      films.map((film) => <FilmCardSmall key={film.id}
        id={film.id}
        name={film.name}
        posterImage={film.posterImage}
        previewVideoLink={film.previewVideoLink}
        previewImage={film.previewImage}
      />)
    }
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired
};

export default FilmsList;
