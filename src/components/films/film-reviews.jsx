import React from "react";
import PropTypes from "prop-types";
import {PROPS_COMMENT} from "../../prop-validation.js";
import ReviewsList from "../review/reviews-list.jsx";

const FilmReviews = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <ReviewsList reviews={reviews} />
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(PROPS_COMMENT)).isRequired,
};

export default FilmReviews;
