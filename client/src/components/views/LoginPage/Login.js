import React, { Component } from "react";
import "./Login.css";
import axios, { post } from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
    };
  }

  handleValue = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/login";
    axios
      .post(url, { id: this.state.id, pw: this.state.pw })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="id"
          value={this.state.id}
          placeholder="아이디를 입력하세요"
          onChange={this.handleValue}
        />
        <br />
        <input
          type="password"
          name="pw"
          value={this.state.pw}
          placeholder="비밀번호를 입력하세요"
          onChange={this.handleValue}
        />
        <br />
        <button type="submit">login</button>
      </form>
    );
  }
}
export default Login;
