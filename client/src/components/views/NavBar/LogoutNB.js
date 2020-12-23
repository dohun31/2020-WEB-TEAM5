import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilm, faVideo } from '@fortawesome/free-solid-svg-icons'

function LogoutNB() {
  return (
    <nav className="navbar">
      <div className="main">
        <a href="/" className="title navbar-icon">
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
          <a href="/mypage" className="mypage">
            mypage
          </a>
        </li>
        <li>
          <a href="/api/user/logout" className="logout" >
            logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LogoutNB;
