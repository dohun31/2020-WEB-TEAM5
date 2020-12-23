import axios from "axios";
import Season from "./Season";
import React, { Component } from "react";
import Genre from "./Genre";
import Comment from "../Comment/Comment";
import "./Information.css";
import Movie2 from "../Home/Movie2";
import DramaInfo from "./DramaInfo";
import MovieInfo from "./MovieInfo";

class Information extends Component {
  state = {
    select: "",
    id: 0,
  };
  componentDidMount() {
    this.setState({
      select: this.props.match.params.select,
      id: this.props.match.params.id,
    });
  }

  render() {
    const { select, id } = this.state;
    if (select === "drama") {
      return <DramaInfo id={id} />;
    } else {
      return <MovieInfo id={id} />;
    }
  }
}

export default Information;
