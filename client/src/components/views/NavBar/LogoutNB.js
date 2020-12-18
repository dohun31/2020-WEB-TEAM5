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
          <a href="/mypage" className="login mypage">
            mypage
          </a>
        </li>
        <li>
          <a href="/api/user/logout" className="register logout" >
            logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LogoutNB;
