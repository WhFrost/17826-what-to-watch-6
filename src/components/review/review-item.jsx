import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  const {name, comment, date, rating} = props;
  const currentComment = comment.reduce((total, current) => total + ` ` + current);
  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{currentComment}</p>
      <footer className="review__details">
        <cite className="review__author">{name}</cite>
        <time className="review__date" dateTime={date}>{date}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{rating}</div>
  </div>;
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  rating: PropTypes.number.isRequired,
};
