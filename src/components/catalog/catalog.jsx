import React, {useState} from "react";
import PropTypes from "prop-types";
import GenresList from "./genres-list";
import FilmsList from "./films-list";
import LoadMoreButton from "./load-more-button";
import {PROPS_FILM} from "../../prop-validation";
import {connect} from "react-redux";

const Catalog = (props) => {
  const {
    films,
    initQuantityFilmsToShow,
    incQuantityFilmsToShow,
    handleChangeGenre
  } = props;

  const [quantityFilmsToShow, setQuentityFilmsToShow] = useState(initQuantityFilmsToShow);


  const handleLoadMoreFilmsClick = () => {
    setQuentityFilmsToShow(quantityFilmsToShow + incQuantityFilmsToShow);
  };

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenresList handleChangeGenre={handleChangeGenre}/>

    <FilmsList
      filteredFilmsByGenre={films}
      quantityFilmsToShow={quantityFilmsToShow}
    />

    {
      films.length > quantityFilmsToShow &&
      <LoadMoreButton
        handleLoadMoreFilmsClick={handleLoadMoreFilmsClick}
      />
    }
  </section>;
};

const mapStateToProps = (state) => ({
  initQuantityFilmsToShow: state.initQuantityFilmsToShow,
  incQuantityFilmsToShow: state.incQuantityFilmsToShow,
});

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
  initQuantityFilmsToShow: PropTypes.number.isRequired,
  incQuantityFilmsToShow: PropTypes.number.isRequired,
  handleChangeGenre: PropTypes.func.isRequired,
};

export {Catalog};
export default connect(mapStateToProps, null)(Catalog);
