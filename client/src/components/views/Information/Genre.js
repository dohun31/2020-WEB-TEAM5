import React from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD

function Genre({ key, id, name }) {
  return ( 
    <div>
      <li className="genre">{name}</li>
    </div>
  )
=======
import "./Information.css";

function Genre({ key, id, name }) {
  return (
    <div>
      <li className="genre">{name}</li>
    </div>
  );
>>>>>>> cf1b39c (moon)
}

Genre.propType = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Genre;
