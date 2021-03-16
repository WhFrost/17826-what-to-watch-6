import React from "react";
import PropTypes from "prop-types";
import {Link, useHistory, useParams} from "react-router-dom";
import Header from "../main-page/header";
import Footer from "../main-page/footer";
import FilmsList from "../catalog/films-list";
import {PROPS_FILM, PROPS_COMMENT} from "../../prop-validation";
import FilmNav from "./film-nav";

const Film = (props) => {
  const {films, reviews} = props;
  const history = useHistory();
  const {id} = useParams();
  const currentFilm = films.find((film) => film.id === id);
  const {
    name,
    posterImage,
    backgroundImage,
    backgroundColor,
    genre,
    released
  } = currentFilm;

  return (
    <>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={() => history.push(`/player/${id}`)}
                >
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
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327"/>
            </div>

            <FilmNav film={currentFilm} reviews={reviews}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films}/>

        </section>
        <Footer />
      </div>
    </>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(PROPS_COMMENT)).isRequired,
};

export default Film;
