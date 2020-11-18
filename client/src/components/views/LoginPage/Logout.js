import "./Login.css";
import cookie from "react-cookies";
import cookieFunc from "../../../utils/Cookie";

function Logout() {
  if (cookieFunc()) {
    cookie.remove("id");
    window.location.reload();
  }
  return "로그아웃되었습니다";
}

export default Logout;
