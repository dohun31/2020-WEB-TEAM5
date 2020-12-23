import React from 'react'
import { Link } from "react-router-dom";
import "./Search.css"

function SearchResualt({ key, id, title, poster }) {
    const ImgSrc = "https://image.tmdb.org/t/p/w500" + poster;
    return (
      <div className="video">
        <h5 className="video-title">{title}</h5>
        <Link to={`information/${id}`}>
          <img className="video-image" src={ImgSrc} alt={title} title={title}></img>
        </Link>
      </div>
    );
}

export default SearchResualt