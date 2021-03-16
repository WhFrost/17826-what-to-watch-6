import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "./review-item";
import {PROPS_COMMENT} from "../../prop-validation";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews-col">
      {
        (reviews.length === 0 && <span style={{color: `#252525`}}>Add first review</span>) ||
        (reviews.map((review) => <ReviewItem key={review.id}
          review={review}
        />))
      }
    </div>);
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(PROPS_COMMENT)).isRequired,
};

export default ReviewsList;
