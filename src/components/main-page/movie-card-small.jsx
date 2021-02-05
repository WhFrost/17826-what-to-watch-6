import React from "react";
import PropTypes from "prop-types";

const MovieCardSmall = (props) => {
  const {name, poster} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={poster} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCardSmall.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieCardSmall;
