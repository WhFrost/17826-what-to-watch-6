import React, {useState} from "react";
import PropTypes from "prop-types";
import FilmCardSmall from "./film-card-small";
import {PROPS_FILM} from "../../prop-validation";
import {connect} from "react-redux";
import LoadMoreButton from "./load-more-button";

const FilmsList = (props) => {
  const {filteredFilmsByGenre, initQuantityFilmsToShow, incQuantityFilmsToShow} = props;
  const [quantityFilmsToShow, setQuentityFilmsToShow] = useState(initQuantityFilmsToShow);
  const handleLoadMoreFilmsClick = () => {
    setQuentityFilmsToShow(quantityFilmsToShow + incQuantityFilmsToShow);
  };
  return (
    <>
      <div className="catalog__movies-list">
        {
          filteredFilmsByGenre.slice(0, quantityFilmsToShow).map((film) => <FilmCardSmall key={film.id}
            film={film}
          />)
        }
      </div>
      {
        filteredFilmsByGenre.length > quantityFilmsToShow &&
        <LoadMoreButton
          handleLoadMoreFilmsClick={handleLoadMoreFilmsClick}
        />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  filteredFilmsByGenre: state.filteredFilmsByGenre,
  initQuantityFilmsToShow: state.initQuantityFilmsToShow,
  incQuantityFilmsToShow: state.incQuantityFilmsToShow
});

FilmsList.propTypes = {
  filteredFilmsByGenre: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
  initQuantityFilmsToShow: PropTypes.number.isRequired,
  incQuantityFilmsToShow: PropTypes.number.isRequired,
};

export {FilmsList};
export default connect(mapStateToProps, null)(FilmsList);
