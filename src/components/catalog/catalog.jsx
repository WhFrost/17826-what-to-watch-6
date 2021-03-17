import React from "react";
import FilmsList from "./films-list";
import GenresList from "./genres-list";

const Catalog = () => {
  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <GenresList />
    <FilmsList />
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>;
};

export default Catalog;
