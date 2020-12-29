import React, { Component } from "react";
import axios from "axios";
import Drama from "./Drama";
import "./Movie.css";

class Test extends Component {
  state = {
    dramas: [],
    page: 1,
  };

  getDrama = async (page) => {
    const Dramas = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&with_networks=213&language=ko&page=${page}`
    );
    const Drama = [...Dramas.data.results]; // ...Movies2.data.results
    this.setState({ dramas: Drama });
  };

  pvPage = async () => {
    if (this.state.page > 1) {
      await this.setState({ page: this.state.page - 1 });
      this.getDrama(this.state.page);
    }
  };
  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    this.getDrama(this.state.page);
  };

  componentDidMount() {
    this.getDrama();
  }

  render() {
    const { dramas, page } = this.state;
    return (
      <div className="Netflixs">
        {dramas.map((drama, index) => {
          return (
            <Drama
              key={index}
              id={drama.id}
              title={drama.name}
              poster={drama.poster_path}
            />
          );
        })}
        <div className="page-button">
          <button type="button" onClick={this.pvPage}>
            이전
          </button>
          <div>{page}</div>
          <button type="button" onClick={this.nextPage}>
            다음
          </button>
        </div>
      </div>
    );
  }
}

export default Test;
