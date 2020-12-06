function LogoutNB() {
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
            로그인
          </a>
        </li>
        <li>
          <a href="/register" className="register">
            회원가입
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LogoutNB;
