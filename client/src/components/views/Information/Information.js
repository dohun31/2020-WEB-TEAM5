import axios from "axios";
import Season from "./Season";
import React, { Component } from "react";
import Genre from "./Genre";
import Comment from "../Comment/Comment";
import "./Information.css";

class Information extends Component {
  state = {
    id : 0,
    isLoading: true,
    Information: [],
    seasons: [],
    genres: []
  };

  getInfo = async (id) => {
    const Information = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&language=ko-KR`
    );
    this.setState({
      id:id,
      isLoading: false,
      Information: Information.data,
      seasons: Information.data.seasons,
      genres: Information.data.genres,
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getInfo(id);
  }

  render() {
    const { id, isLoading, Information, seasons, genres } = this.state;

    const ImgSrc =
      "https://image.tmdb.org/t/p/w500" + Information.backdrop_path;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="text">Loading...</span>
          </div>
        ): (
          <div className="information">
            <div className="origin">
              <h1 id="title" className="title">
                  {Information.name}
              </h1>
              <h3 className="originalTitle">{Information.original_name}</h3>
              <div>
                {genres.map((genre) => {
                    return <Genre key={genre.id} id={genre.id} name={genre.name} />;
                })}
              </div>
              <img id="titleimg" className="image" src={ImgSrc} alt="poster"></img>
              <p className="date">{Information.first_air_date}</p>
              <p className="summary">{Information.overview}</p>
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

            
            <Comment key={id} movieId = {id}></Comment>
            
          </div>
        )}
      </section>
    );
  }
}

export default Information;
