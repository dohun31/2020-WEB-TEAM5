import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilm, faVideo } from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  useHistory,
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Login from "../LoginPage/Login";
import Home from "../Home/Home";
/*
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
*/

function LoginNB() {
  return (
    <nav className="navbar">
      <div className="main">
        <Link to={""} className="title">
          WapProject
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to={"/home"} className="home">
            dramas <FontAwesomeIcon icon={faVideo} />
          </Link>
        </li>
        <li>
          <Link to="/movies" className="home">
            movies <FontAwesomeIcon icon={faFilm} />
          </Link>
        </li>
      </ul>
      <ul className="logreg">
        <li>
          <Link to="/search" className="search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </li>
        <li>
          <Link to="/login" className="login">
            login
          </Link>
        </li>
        <li>
          <Link to="/register" className="register">
            register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LoginNB;
