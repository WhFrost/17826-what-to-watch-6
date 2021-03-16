import React from "react";
import PropTypes from "prop-types";
import FilmsList from "./films-list";
import FiltersList from "./filters-list";
import {PROPS_FILM} from "../../prop-validation";

const Catalog = (props) => {
  const {films} = props;
  const genres = [];
  films.forEach((film) => genres.push(film.genre));
  const uniqGenres = Array.from(new Set(genres));
  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <FiltersList filters={uniqGenres} />
    <FilmsList films={films}/>
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>;
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
};

export default Catalog;
