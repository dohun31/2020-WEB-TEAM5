import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ key, id, /* year,*/ title, summary, poster, state }) {
  const ImgSrc = "https://image.tmdb.org/t/p/w500" + poster;
  return (
    <div className="Netflix">
      <h5 className="title">{title}</h5>
      <Link to={`information/${id}`}>
        <img className="image" src={ImgSrc} alt={title} title={title}></img>
      </Link>
    </div>
  );
}

Movie.propType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Movie;
