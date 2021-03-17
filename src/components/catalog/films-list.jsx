import React from "react";
import PropTypes from "prop-types";
import FilmCardSmall from "./film-card-small";
import {PROPS_FILM} from "../../prop-validation";
import {connect} from "react-redux";

const FilmsList = (props) => {
  const {filteredFilmsByGenre} = props;
  return <div className="catalog__movies-list">
    {
      filteredFilmsByGenre.map((film) => <FilmCardSmall key={film.id}
        film={film}
      />)
    }
  </div>;
};

const mapStateToProps = (state) => ({
  filteredFilmsByGenre: state.filteredFilmsByGenre,
});

FilmsList.propTypes = {
  filteredFilmsByGenre: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
};

export {FilmsList};
export default connect(mapStateToProps, null)(FilmsList);
