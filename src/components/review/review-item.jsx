import React from "react";
import PropTypes from "prop-types";
import {PROPS_COMMENT} from "../../prop-validation";

const ReviewItem = (comment) => {
  const {name, commentText, date, rating} = comment;
  const currentCommentText = commentText.reduce((total, current) => total + ` ` + current);
  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{currentCommentText}</p>
      <footer className="review__details">
        <cite className="review__author">{name}</cite>
        <time className="review__date" dateTime={date}>{date}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{rating}</div>
  </div>;
};

ReviewItem.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.shape(PROPS_COMMENT)).isRequired,
};

export default ReviewItem;
