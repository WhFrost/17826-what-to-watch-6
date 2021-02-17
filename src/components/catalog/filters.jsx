import React from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  const {filter} = props;
  return <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">{filter}</a>
  </li>;
};

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filters;
