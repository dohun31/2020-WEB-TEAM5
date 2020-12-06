import React from "react";
import "./NavBar.css";
import cookie from "react-cookies";
import cookieFunc from "../../../utils/Cookie";
import LoginNB from "./LoginNB";
import LogoutNB from "./LogoutNB";

function Main() {
  // let a = "로그인";
  // let b = "회원가입";
  // let loginSuccess = new Boolean();
  // loginSuccess = false;

  // if (cookieFunc) {
  //   a = cookie.load("id");
  //   b = "logout";
  //   loginSuccess = true;
  // }

  // console.log(loginSuccess);
  // return <div>{loginSuccess ? <LoginNB /> : <LogoutNB />}</div>;
  return (
    <div>
      <LogoutNB />
    </div>
  );
}

export default Main;