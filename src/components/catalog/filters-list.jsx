import React from "react";
import PropTypes from "prop-types";
import Filters from "./filters";

const FiltersList = (props) => {
  const {filters} = props;
  return <ul className="catalog__genres-list">
    {
      filters.map((filter) => <Filters key={filter} filter={filter} />)
    }
  </ul>;
};

FiltersList.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default FiltersList;
