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
    <div className="loginpage">
      <form className="form" onSubmit={onSubmitHandler}>
        <h1>LOGIN</h1>
        <label>Id</label>
        <input type="text" value={Id} onChange={onIdHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
