import React from "react";
import PropTypes from "prop-types";
import Logo from "../main-page/logo";
import UserBlock from "../main-page/user-block";
import FilmsList from "../catalog/films-list";
import Footer from "../main-page/footer";
import {PROPS_FILM} from "../../prop-validation";
import {connect} from "react-redux";

const MyList = (props) => {
  const {films} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />

      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
});

MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
};

export {MyList};
export default connect(mapStateToProps, null)(MyList);
