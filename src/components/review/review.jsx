import React from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import Logo from "../main-page/logo";
import UserBlock from "../main-page/user-block";
import Rating from "./rating";

const AddReview = (props) => {
  const {rating, films} = props;
  const {id} = useParams();
  const currentFilm = films.find((film) => film.id === id);
  const {name, posterImage, backgroundImage, backgroundColor} = currentFilm;
  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">

          <Rating rating={rating} />

          <div className="add-review__text" style={{backgroundColor: `rgba(255, 255, 255, 0.25)`}}>
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.array.isRequired,
  rating: PropTypes.array.isRequired,
};

export default AddReview;
