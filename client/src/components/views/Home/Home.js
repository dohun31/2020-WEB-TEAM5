import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";

class Test extends Component {
  state = {
    movies: [],
    page:1,
  };

  getMovie = async (page) => {
    const Movies = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&with_networks=213&language=ko&page=${page}`
    );
    const Movie = [...Movies.data.results]; // ...Movies2.data.results
    this.setState({ movies: Movie });
  };  

  pvPage = async () => {
    if(this.state.page > 1){
      await this.setState({page: this.state.page-1})
      this.getMovie(this.state.page);
    }
  }
  nextPage = async () => {
    console.log(this.state.page)
    await this.setState({page: this.state.page+1})
    console.log(this.state.page)
    this.getMovie(this.state.page);
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { movies, page, API} = this.state;
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
