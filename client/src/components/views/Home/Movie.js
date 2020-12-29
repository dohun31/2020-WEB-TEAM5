import React, { Component } from "react";
import axios from "axios";
import Movie2 from "./Movie2";
import "./Movie.css";

class Test extends Component {
  state = {
    movies: [],
    page: 1,
  };

  getMovie = async (page) => {
    const Movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&language=ko-KR&page=${page}`
    );
    const Movie = [...Movies.data.results];
    this.setState({ movies: Movie });
    console.log(Movie);
  };

  pvPage = async () => {
    if (this.state.page > 1) {
      await this.setState({ page: this.state.page - 1 });
      this.getMovie(this.state.page);
    }
  };
  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    this.getMovie(this.state.page);
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { movies, page } = this.state;
    return (
      <div className="Netflixs">
        {movies.map((movie, index) => {
          return (
            <Movie2
              key={index}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
            />
          );
        })}
        <div className="page-button">
          <button onClick={this.pvPage}>이전</button>
          <div>{page}</div>
          <button onClick={this.nextPage}>다음</button>
        </div>
      </div>
    );
  }
}

export default Test;
