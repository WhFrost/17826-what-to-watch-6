import React, {useState} from "react";
import PropTypes from "prop-types";
import GenresList from "./genres-list";
import FilmsList from "./films-list";
import LoadMoreButton from "./load-more-button";
import {PROPS_FILM} from "../../prop-validation";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {DEFAULT_GENRE} from "../../const";

const Catalog = (props) => {
  const {
    films,
    initQuantityFilmsToShow,
    incQuantityFilmsToShow,
    onChangeGenre
  } = props;

  const [quantityFilmsToShow, setQuentityFilmsToShow] = useState(initQuantityFilmsToShow);
  const [filteredFilmsByGenre, setFilterdFilmsByGenre] = useState(films);

  const handleLoadMoreFilmsClick = () => {
    setQuentityFilmsToShow(quantityFilmsToShow + incQuantityFilmsToShow);
  };

  const handleChangeGenre = (genre) => {
    onChangeGenre(genre);
    setFilterdFilmsByGenre(
        genre === DEFAULT_GENRE ? films : films.filter((film) => film.genre === genre)
    );
  };

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenresList handleChangeGenre={handleChangeGenre}/>

    <FilmsList
      filteredFilmsByGenre={filteredFilmsByGenre}
      quantityFilmsToShow={quantityFilmsToShow}
    />

    {
      filteredFilmsByGenre.length > quantityFilmsToShow &&
      <LoadMoreButton
        handleLoadMoreFilmsClick={handleLoadMoreFilmsClick}
      />
    }
  </section>;
};

const mapStateToProps = (state) => ({
  films: state.films,
  filteredFilmsByGenre: state.filteredFilmsByGenre,
  initQuantityFilmsToShow: state.initQuantityFilmsToShow,
  incQuantityFilmsToShow: state.incQuantityFilmsToShow,
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
  initQuantityFilmsToShow: PropTypes.number.isRequired,
  incQuantityFilmsToShow: PropTypes.number.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
