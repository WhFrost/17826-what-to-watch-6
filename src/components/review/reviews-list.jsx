import React from "react";
import PropTypes from "prop-types";
import Review from "./review-item";

const ReviewsList = (props) => {
  const {reviews} = props;
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {
        reviews.map((review) => <Review key={review.id}
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
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
