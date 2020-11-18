import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../../_actions/user_action";

function Register(props) {
  const dispatch = useDispatch();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPWHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Email, Id, Password);
    if (Password !== ConfirmPassword) {
      console.log("비번 다름");
      return "비번 다름!";
    } else {
      console.log("okay");
    }
    let body = {
      id: Id,
      pw: Password,
      email: Email,
    };
    console.log(body);

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
        alert("회원가입 실패");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Id</label>
        <input type="text" value={Id} onChange={onIdHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPWHandler}
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Register;

// import React from "react";

// import axios from "axios";

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: "",
//       pw: "",
//       pwb: "",
//       email: "",
//       name: "",
//     };
//   }

//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     const url = "http://localhost:5000/api/register";
//     axios
//       .post(url, {
//         email: this.state.email,
//         id: this.state.id,
//         pw: this.state.pw,
//       })
//       .then((res) => {})
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   handleValueChange = (e) => {
//     let nextState = {};
//     nextState[e.target.name] = e.target.value;
//     this.setState(nextState);
//   };

//   checkPwPwb = () => {
//     if (this.state.pw === this.state.pwb) return "비밀번호가 일치합니다.";
//     else return "삡";
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleFormSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={this.state.email}
//           placeholder="EMAIL"
//           onChange={this.handleValueChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           placeholder="NAME"
//           onChange={this.handleValueChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="id"
//           value={this.state.id}
//           placeholder="ID"
//           onChange={this.handleValueChange}
//         />
//         <br />
//         <input
//           type="password"
//           name="pw"
//           value={this.state.pw}
//           placeholder="PW"
//           onChange={this.handleValueChange}
//         />
//         <br />
//         <input
//           type="password"
//           name="pwb"
//           value={this.state.pwb}
//           placeholder="PW 재입력"
//           onChange={this.handleValueChange}
//         />
//         <div>{this.checkPwPwb()}</div>
//         <button type="submit">SUBMIT</button>
//       </form>
//     );
//   }
// }

// export default Register;
