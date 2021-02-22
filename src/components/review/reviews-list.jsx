import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./review-item";
import {PROPS_COMMENT} from "../../prop-validation";

const ReviewsList = (reviews) => {
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {
        reviews.map((review) => <ReviewItem key={review.id}
          id={review.id}
          name={review.name}
          comment={review.comment}
          date={review.date}
          rating={review.rating}
        />)
      };
    </div>
  </div>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(PROPS_COMMENT)).isRequired,
};

export default ReviewsList;
