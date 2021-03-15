import React from "react";
import PropTypes from "prop-types";
import {PROPS_COMMENT} from "../../prop-validation";
import {humanizeDate} from "../../common";

const ReviewItem = (props) => {
  const {review} = props;
  const {user, comment, date, rating} = review;
  const {name} = user;
  const currentCommentText = comment.reduce((total, current) => total + ` ` + current);
  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{currentCommentText}</p>
      <footer className="review__details">
        <cite className="review__author">{name}</cite>
        <time className="review__date" dateTime={humanizeDate(`MMMM DD, YYYY`, date)}>
          {humanizeDate(`MMMM DD, YYYY`, date)}
        </time>
      </footer>
    </blockquote>
    <div className="review__rating">{rating}</div>
  </div>;
};

ReviewItem.propTypes = {
  review: PropTypes.shape(PROPS_COMMENT).isRequired,
};

export default ReviewItem;
