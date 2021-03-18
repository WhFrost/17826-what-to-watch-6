import React from "react";
import GenresList from "./genres-list";
import FilmsList from "./films-list";

const Catalog = () => {
  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <GenresList />
    <FilmsList />
  </section>;
};

export default Catalog;
