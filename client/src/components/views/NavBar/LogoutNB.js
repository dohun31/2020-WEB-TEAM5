import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilm, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
/*
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
*/

function LogoutNB() {
  return (
    <nav className="navbar">
      <div className="main">
        <Link to="/" className="title">
          WapProject
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/home" className="home">
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
          <Link to="/mypage" className="login mypage">
            mypage
          </Link>
        </li>
        <li>
          <a href="/api/user/logout" className="register logout">
            logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LogoutNB;
