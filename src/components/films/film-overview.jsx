import React from "react";
import PropTypes from "prop-types";
import {PROPS_FILM} from "../../prop-validation";

const FilmOverview = (props) => {
  const {film} = props;
  const {rating, scoresCount, description, director, starring} = film;
  const currentDescription = description.reduce((total, current) => total + ` ` + current);
  const currentStarring = starring.reduce((total, current) => total + `, ` + current) + ` `;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{currentDescription}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {currentStarring}
      and other</strong></p>
      </div>
    </>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape(PROPS_FILM).isRequired,
};

export default FilmOverview;
