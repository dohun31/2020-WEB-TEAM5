import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import axios from "axios";

function MovieInfo({ id }) {
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState();
  const [genres, setGenre] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        setLoading(false);
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&language=ko-KR`
        );
        setInfo(res.data);
        setGenre(res.data.genres);
      } catch (e) {}
      setLoading(false);
    };
    fetchInfo();
  });

  const ImgSrc = "https://image.tmdb.org/t/p/w500" + info.backdrop_path;

  return (
    <div className="infobox">
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="information">
          <div className="drama">
            <div className="origin">
              <h1 id="title" className="title">
                {info.title}
              </h1>
              <h3 className="originalTitle">{info.original_title}</h3>
              <div>
                {genres.map((genre) => {
                  return <div>{genre.name}</div>;
                })}
              </div>
              <img
                id="titleimg"
                className="image"
                src={ImgSrc}
                alt="poster"
              ></img>
              <p className="date">{info.release_date}</p>
              <p className="summary">{info.overview}</p>
            </div>
          </div>
          <Comment className="comment" key={id} movieId={id}></Comment>
        </div>
      )}
    </div>
  );
}

export default MovieInfo;
