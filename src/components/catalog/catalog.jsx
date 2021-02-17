import React from "react";
import PropTypes from "prop-types";
import FilmsList from "./films-list";
import FiltersList from "./filters-list";

const Catalog = (props) => {
  const {filters, films} = props;
  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <FiltersList filters={filters} />
    <FilmsList films={films}/>
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>;
};

Catalog.propTypes = {
  filters: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
};

export default Catalog;
