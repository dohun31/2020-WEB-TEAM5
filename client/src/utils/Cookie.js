import cookie from "react-cookies";

function cookieFunc() {
  try {
    var a = cookie.load("id");
    if (a != undefined) {
      return true;
    }
  } catch (err) {
    return false;
  }
}

export default cookieFunc;
