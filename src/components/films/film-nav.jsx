import React, {useState} from "react";
import PropTypes from "prop-types";
import {PROPS_FILM, PROPS_COMMENT} from "../../prop-validation.js";
import FilmTabs from "../films/film-tabs";
import {FilmTab} from "../../const.js";
import FilmOverview from "../films/film-overview";
import FilmDetails from "../films/film-details";
import FilmReviews from "../films/film-reviews";

const FilmNav = (props) => {
  const {film, reviews} = props;
  const [selectedTab, setSelectedTab] = useState(FilmTab.OVERVIEW);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <FilmTabs
          selectedTab={selectedTab}
          handleTabSelect={handleTabSelect}
        />
      </nav>

      {
        (selectedTab === FilmTab.OVERVIEW && <FilmOverview film={film}/>) ||
        (selectedTab === FilmTab.DETAILS && <FilmDetails film={film}/>) ||
        (selectedTab === FilmTab.REVIEWS && <FilmReviews reviews={reviews}/>)
      }

    </div>
  );
};

FilmNav.propTypes = {
  film: PropTypes.shape(PROPS_FILM),
  reviews: PropTypes.arrayOf(PropTypes.shape(PROPS_COMMENT)).isRequired,
};

export default FilmNav;
