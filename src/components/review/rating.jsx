import React from "react";
import PropTypes from "prop-types";
import RatingStar from "./rating-star";

const Rating = (props) => {
  const {rating} = props;
  return <div className="rating">
    <div className="rating__stars">
      {
        rating.map((rate) => <RatingStar key={rate} rate={rate}/>)
      }
    </div>
  </div>;
};

Rating.propTypes = {
  rating: PropTypes.array.isRequired,
};

export default Rating;
