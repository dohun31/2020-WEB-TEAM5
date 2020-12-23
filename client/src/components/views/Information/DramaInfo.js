import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Comment from "../Comment/Comment";
import Genre from "./Genre";
import Season from "./Season";

function DramaInfo({ id }) {
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState();
  const [genres, setGenre] = useState([]);
  const [seasons, setSeason] = useState([]);

  useEffect(() => {
    console.log(id);
    const fetchInfo = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&language=ko-KR`
        );
        setInfo(res.data);
        setGenre(res.data.genres);
        setSeason(res.data.seasons);
      } catch (e) {
        alert(e);
      }
      setLoading(false);
    };
    fetchInfo();
  }, []);

  const ImgSrc = "https://image.tmdb.org/t/p/w500" + info.backdrop_path;
  console.log(info);

  return (
    <div className="infobox">
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="information">
          <div className="drama">
            <div className="origin">
              <h1 id="title" className="title">
                {info.name}
              </h1>
              <h3 className="originalTitle">{info.original_name}</h3>
              <div>
                {genres.map((genre) => {
                  return (
                    <Genre key={genre.id} id={genre.id} name={genre.name} />
                  );
                })}
              </div>
              <img
                id="titleimg"
                className="image"
                src={ImgSrc}
                alt="poster"
              ></img>
              <p className="date">{info.first_air_date}</p>
              <p className="summary">{info.overview}</p>
            </div>
            <div className="seasons">
              {seasons.map((season, index) => {
                return (
                  <Season
                    key={index}
                    id={season.id}
                    date={season.air_date}
                    title={season.name}
                    count={season.episode_count}
                    overview={season.overview}
                    poster={season.poster_path}
                    number={season.season_number}
                  />
                );
              })}
            </div>
          </div>
          <Comment className="comment" key={id} movieId={id}></Comment>
        </div>
      )}
    </div>
  );
}

export default DramaInfo;
