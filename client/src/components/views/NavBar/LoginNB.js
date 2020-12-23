import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilm, faVideo } from '@fortawesome/free-solid-svg-icons'

function LoginNB() {
  return (
    <nav className="navbar">
      <div className="main">
      <a href="/" className="title">
        WAP
      </a>
      </div>
      <ul className="menu">
        <li>
          <a href="/home" className="home">
            dramas <FontAwesomeIcon icon={faVideo} />
          </a>
        </li>
        <li >
          <a href="/movies" className="home">
            movies <FontAwesomeIcon icon={faFilm} />
          </a>
        </li>
      </ul>
      <ul className="logreg">
        <li>
          <a href="/search" className="search">
              <FontAwesomeIcon icon={faSearch} />
          </a>
        </li>
        <li>
          <a href="/login" className="login">
            login
          </a>
        </li>
        <li>
          <a href="/register" className="register">
            register
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LoginNB;
