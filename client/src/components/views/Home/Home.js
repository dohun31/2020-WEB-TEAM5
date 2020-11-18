import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";

class Test extends Component {
  state = {
    movies: [],
    page: 1
  };
  getMovie = async () => {
    const Movies1 = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&with_networks=213&language=ko&page=1"
    );
    const Movie = [...Movies1.data.results];
    this.setState({ movies: Movie });
  };

  nextMovie = async () => {
    let pageNumber = this.state.page;
    this.setState({page : this.state.page+1});
    pageNumber += 1;

    const moreMovies = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&with_networks=213&language=ko&page=${pageNumber}`
    ).then( values => values.data.results)
     .then( values => {
          this.setState({ movies: values });
     })
  }

  previousMovie = async () => {
    let pageNumber = this.state.page;
    this.setState({page : this.state.page-1});
    pageNumber -= 1;

    const previousMovies = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&with_networks=213&language=ko&page=${pageNumber}`
    ).then( values => values.data.results)
     .then( values => {
          this.setState({ movies: values });
     })
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { movies , page} = this.state;

    return (
      <div>
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
        <span class ="page-button">
            <button  onClick={this.previousMovie}>이전페이지</button>
            <button  onClick={this.nextMovie}>다음페이지</button> 
            <div class ="pagenum">{page}페이지/49페이지</div>
        </span>
      </div>
    );
  }
}

export default Test;
