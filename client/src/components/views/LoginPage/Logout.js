import "./Login.css";
import cookie from "react-cookies";
import cookieFunc from "../../../utils/Cookie";

function Logout() {
  if (cookieFunc()) {
    cookie.remove("id");
    window.location.reload();
  }
  return <div>logout!!</div>;
}

export default Logout;
