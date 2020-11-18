import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      pwb: "",
      email: "",
      name: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const url = "api/user/register";
    axios
      .post(url, {
        email: this.state.email,
        id: this.state.id,
        pw: this.state.pw,
      })
      .then((res) => {
        if(res.data.success){
          alert('회원가입완료')
          this.props.history.push('/login')
        }else{
          console.log(res.data)
          alert('회원가입실패')
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  checkPwPwb = () => {
    if (this.state.pw === this.state.pwb) return "비밀번호가 일치합니다.";
    else return "삡";
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="EMAIL"
          onChange={this.handleValueChange}
        />
        <br />
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="NAME"
          onChange={this.handleValueChange}
        />
        <br />
        <input
          type="text"
          name="id"
          value={this.state.id}
          placeholder="ID"
          onChange={this.handleValueChange}
        />
        <br />
        <input
          type="password"
          name="pw"
          value={this.state.pw}
          placeholder="PW"
          onChange={this.handleValueChange}
        />
        <br />
        <input
          type="password"
          name="pwb"
          value={this.state.pwb}
          placeholder="PW 재입력"
          onChange={this.handleValueChange}
        />
        <div>{this.checkPwPwb()}</div>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Register;
