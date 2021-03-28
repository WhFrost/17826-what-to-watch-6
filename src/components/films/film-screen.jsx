import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilm} from "../../store/api-actions";
import Film from "./film";
// import FilmsList from "../catalog/films-list";
import Loading from "../loading/loading";

const FilmScreen = (props) => {
  const {
    id,
    getFilm,
    isFilmLoaded
  } = props;
  console.log(id);

  useEffect(() => {
    if (!isFilmLoaded) {
      getFilm(id);
    }
  }, [isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Film />
      {/* <FilmsList /> */}
    </>
  );

};

const mapStateToProps = (state) => ({
  isFilmLoaded: state.isFilmLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getFilm(id) {
    dispatch(fetchFilm(id));
  },
});

FilmScreen.propTypes = {
  id: PropTypes.number.isRequired,
  getFilm: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired
};

export {FilmScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);
