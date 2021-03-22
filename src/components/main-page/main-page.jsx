import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import PromoFilm from "../films/promo-film";
import Catalog from "../catalog/catalog";
import Loading from "../loading/loading";
import {PROPS_FILM} from "../../prop-validation";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {fetchFilmsList, fetchPromoFilm} from "../../store/api-actions";
import {DEFAULT_GENRE} from "../../const";

const MainPage = (props) => {
  const {
    films,
    promoFilm,
    isDataLoaded,
    onLoadData,
    getGenres,
    onChangeGenre,
  } = props;

  const [filteredFilmsByGenre, setFilterdFilmsByGenre] = useState(films);

  const handleChangeGenre = (genre) => {
    onChangeGenre(genre);
    setFilterdFilmsByGenre(
        genre === DEFAULT_GENRE ? films : films.filter((film) => film.genre === genre)
    );
  };

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    } else {
      getGenres(films);
      setFilterdFilmsByGenre(films);
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (<Loading />);
  }

  return (
    <>
      <PromoFilm
        promoFilm = {promoFilm}
      />

      <div className="page-content">
        <Catalog
          films={filteredFilmsByGenre}
          handleChangeGenre={handleChangeGenre}
        />
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  promoFilm: state.promoFilm,
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmsList());
    dispatch(fetchPromoFilm());
  },
  getGenres(films) {
    dispatch(ActionCreator.getGenres(films));
  },
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

MainPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
  promoFilm: PropTypes.shape(PROPS_FILM),
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};


export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
