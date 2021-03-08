import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {PROPS_FILM} from "../../prop-validation";

const FilmCardSmall = (props) => {
  const film = props;
  const {id, name, posterImage} = film;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

FilmCardSmall.propTypes = {
  film: PropTypes.shape(PROPS_FILM)
};

export default FilmCardSmall;
