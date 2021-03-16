import React from "react";
import PropTypes from "prop-types";
import {PROPS_FILM} from "../../prop-validation";

const FilmDetails = (props) => {
  const {film} = props;
  const {director, starring, runtime, genre, released} = film;
  const stars = [];
  starring.forEach((star) => stars.push(star));
  const uniqStars = Array.from(new Set(stars));

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <div className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <ul className="movie-card__details-value" style={{margin: 0, padding: 0}}>
            {uniqStars.map((star) =>
              <li
                key={star}
                style={{listStyleType: `none`}}
              >{star}
              </li>)}
          </ul>
        </div>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runtime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.shape(PROPS_FILM)
};

export default FilmDetails;
