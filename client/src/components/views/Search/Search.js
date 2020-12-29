import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Movie2 from "../Home/Movie2";
import Drama from "../Home/Drama";
import axios from "axios";

import "./Search.css";

function Serach(props) {
  const [Search, setSearch] = useState("");
  const [Tag, setTag] = useState("tv");
  const [Infos, setInfos] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(Tag, Search);

    await axios
      .get(
        `https://api.themoviedb.org/3/search/${Tag}?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&language=ko-KR&query=${Search}&page=1&include_adult=false`
      )
      .then((value) => {
        console.log(value);
        return value.data.results;
      })
      .then((value) => {
        setInfos(value);
        console.log(value);
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleTag = (e) => {
    setTag(e.target.value);
  };

  return (
    <div>
      <form className="search-box" onSubmit={onSubmitHandler}>
        <input
          className="search-bar"
          required
          name="search"
          onChange={handleSearch}
        ></input>
        <select name="tag" onChange={handleTag}>
          <option value="tv">드라마</option>
          <option value="movie">영화</option>
          <option value="multi">영화,드리마</option>
        </select>
        <button>검색</button>
      </form>
      <div className="videos">
        {Infos &&
          Infos.map((info, index) => {
            if (Tag === "movie" && info.poster_path) {
              return (
                // key, id, title, poster
                <Movie2
                  key={info.id}
                  id={info.id}
                  title={info.title}
                  poster={info.poster_path}
                ></Movie2>
              );
            } else if (Tag === "tv" && info.poster_path) {
              return (
                <Drama
                  key={info.id}
                  id={info.id}
                  title={info.name}
                  poster={info.poster_path}
                ></Drama>
              );
            } else if (Tag === "multi" && info.poster_path) {
              if (info.media_type === "movie") {
                return (
                  <Movie2
                    key={info.id}
                    id={info.id}
                    title={info.title}
                    poster={info.poster_path}
                  ></Movie2>
                );
              }
              if (info.media_type === "tv" && info.poster_path) {
                return (
                  <Drama
                    key={info.id}
                    id={info.id}
                    title={info.name}
                    poster={info.poster_path}
                  ></Drama>
                );
              }
            }
          })}
      </div>
    </div>
  );
}

export default withRouter(Serach);
