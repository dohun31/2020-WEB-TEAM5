import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Drama({ key, id, title, poster }) {
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

Drama.propType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Drama;
