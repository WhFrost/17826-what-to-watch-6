import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const GenresList = (props) => {
  const {genres, currentGenre, handleChangeGenre} = props;
  return <ul className="catalog__genres-list">
    {
      genres.map((genre) =>
        <li
          key={genre}
          className={`catalog__genres-item
          ${currentGenre === genre ? `catalog__genres-item--active` : ``}`}
        >
          <a href="#" className="catalog__genres-link"
            onClick={({target}) => handleChangeGenre(target.textContent)}
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

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  handleChangeGenre: PropTypes.func.isRequired
};

export {GenresList};
export default connect(mapStateToProps, null)(GenresList);
