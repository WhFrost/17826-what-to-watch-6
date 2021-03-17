import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const GenresList = (props) => {
  const {genres, currentGenre, onChangeGenre} = props;
  return <ul className="catalog__genres-list">
    {
      genres.map((genre) =>
        <li
          key={genre}
          className={`catalog__genres-item
          ${currentGenre === genre ? `catalog__genres-item--active` : ``}`}
        >
          <a href="#" className="catalog__genres-link"
            onClick={({target}) => onChangeGenre(target.textContent)}
          >
            {genre}
          </a>
        </li>
      )
    }
  </ul>;
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterFilmsByGenre(genre));
  },
});

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
