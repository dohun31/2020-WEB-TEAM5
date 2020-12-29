import React from "react";
import PropTypes from "prop-types";

function Season({ key, id, date, title, count, overview, poster, number }) {
  const ImgSrc = "https://image.tmdb.org/t/p/w500" + poster;
  if (!date) return <div className="season">시즌{number} 준비중...</div>;
  return (
    <div className="season">
      <h5 className="title">{title}</h5>
      <p className="date">{date}</p>
      <p className="epcount">episode: {count}개</p>
      {poster ? (
        <img className="image" src={ImgSrc} alt={title} title={title}></img>
      ) : (
        <br></br>
      )}
      <article id="show" className="overview">
        {overview}
      </article>
    </div>
  );
}

Season.propType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Season;
