import React from "react";
import PropTypes from "prop-types";
import FilmCardSmall from "./film-card-small";
import {PROPS_FILM} from "../../prop-validation";

const FilmsList = (props) => {
  const {filteredFilmsByGenre, quantityFilmsToShow} = props;
  return (
    <>
      <div className="catalog__movies-list">
        {
          filteredFilmsByGenre.slice(0, quantityFilmsToShow).map((film) => <FilmCardSmall key={film.id}
            film={film}
          />)
        }
      </div>

    </>
  );
};

FilmsList.propTypes = {
  filteredFilmsByGenre: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
  quantityFilmsToShow: PropTypes.number.isRequired
};

export default FilmsList;
