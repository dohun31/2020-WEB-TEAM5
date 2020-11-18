import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";

class Test extends Component {
  state = {
    movies: [],
  };
  getMovie = async () => {
    const Movies1 = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&with_networks=213&language=ko&page=1"
    );
    const Movies2 = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&with_networks=213&language=ko&page=2"
    );
    const Movie = [...Movies1.data.results, ...Movies2.data.results];
    this.setState({ movies: Movie });
  };
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="Netflixs">
        {movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              id={movie.id}
              year={movie.release_date}
              title={movie.name}
              summary={movie.overview}
              poster={movie.poster_path}
              state={this.state.mode}
            />
          );
        })}
      </div>
    );
  }
}

export default Test;
