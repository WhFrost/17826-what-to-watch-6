import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import Header from "../main-page/header";
import {PROPS_FILM} from "../../prop-validation";

const FilmCard = (props) => {
  const {film} = props;
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    backgroundColor,
    genre,
    released} = film;
  const history = useHistory();
  return (
    <section className="movie-card" style={{backgroundColor}}>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button"
                onClick={() => history.push(`/player/${id}`)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape(PROPS_FILM)
};

export default FilmCard;
