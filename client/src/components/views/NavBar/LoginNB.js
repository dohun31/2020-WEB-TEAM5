function LoginNB() {
  return (
    <nav className="navbar">
      <div className="main">
      <a href="/" className="title">
          WapProject
        </a>
      </div>
      <ul className="menu">
        <li>
          <a href="/home" className="home">
            dramas 🍿
          </a>
        </li>
        <li >
          <a href="/movies" className="home">
            movies 🎥
          </a>
        </li>
      </ul>
      <ul className="logreg">
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
