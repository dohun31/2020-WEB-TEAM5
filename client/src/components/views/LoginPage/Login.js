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
    const url = "/api/user/login";
    axios
      .post(url, { id: this.state.id, pw: this.state.pw })
      .then((res) => {
        console.log(res)
        if(res.data.success){
          alert('로그인 성공')
          this.props.history.push('/home')
        }else{
          alert('로그인 실패')
        }
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



