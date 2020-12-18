import React, { Component, useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function Login(props) {
  const dispatch = useDispatch();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Id, Password);
    let body = {
      id: Id,
      pw: Password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.success) {
        props.history.push("/");
        window.location.reload();
      } else {
        alert("Error");
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
        <label>Id</label>
        <input type="text" value={Id} onChange={onIdHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: "",
//       pw: "",
//     };
//   }

//   handleValue = (e) => {
//     let nextState = {};
//     nextState[e.target.name] = e.target.value;
//     this.setState(nextState);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const url = "http://localhost:5000/api/login";
//     axios
//       .post(
//         url,
//         { id: this.state.id, pw: this.state.pw },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         window.location.reload();
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   render() {
//     if (cookieFunc) {
//       return <div>로그인 되었습니다.</div>;
//     } else {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="id"
//             value={this.state.id}
//             placeholder="아이디를 입력하세요"
//             onChange={this.handleValue}
//           />
//           <br />
//           <input
//             type="password"
//             name="pw"
//             value={this.state.pw}
//             placeholder="비밀번호를 입력하세요"
//             onChange={this.handleValue}
//           />
//           <br />
//           <button type="submit">login</button>
//         </form>
//       );
//     }
//   }
// }
// export default Login;
