import React from "react";
import PropTypes from "prop-types";

const RatingStar = (props) => {
  const {rate} = props;
  return <>
    <input className="rating__input" id={`star-${rate}`} type="radio" name="rating" value={rate}/>
    <label className="rating__label" htmlFor={`star-${rate}`}>Rating {rate}</label>
  </>;
};

RatingStar.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default RatingStar;
