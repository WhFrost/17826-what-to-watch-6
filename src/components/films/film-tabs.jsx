import React from "react";
import PropTypes from "prop-types";
import {FilmTab} from "../../const.js";

const FilmTabs = (props) => {
  const {selectedTab, handleTabSelect} = props;
  const tabNames = Object.values(FilmTab);

  return (
    <ul className="movie-nav__list">
      {tabNames.map((tab) => {
        return (
          <li
            className={`movie-nav__item ${selectedTab === tab ? `movie-nav__item--active` : ``}`}
            key={tab}>
            <span
              className="movie-nav__link"
              style={{cursor: `pointer`}}
              onClick={({target}) => {
                handleTabSelect(target.textContent);
              }}>
              {tab}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

FilmTabs.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
};

export default FilmTabs;
