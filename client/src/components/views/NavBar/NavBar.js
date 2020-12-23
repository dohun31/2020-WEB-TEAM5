import React from "react";
import "./NavBar.css";
import LoginNB from "./LoginNB";
import LogoutNB from "./LogoutNB";

function Main({auth}) {
  console.log('auth', auth)
  if(auth){
    return (
      <div>
        <LogoutNB />
      </div>
    );
  }
  return(
    <div>
      <LoginNB />
    </div>
  )

}

export default Main;