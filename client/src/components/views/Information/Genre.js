import React from "react";
import PropTypes from "prop-types";

function Genre({ key, id, name }) {
  return <li className="genre">{name}</li>;
}

Genre.propType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Genre;
