function LogoutNB() {
  return (
    <nav className="navbar">
      <a href="/" className="title">
        WapProject
      </a>
      <ul className="menu">
        <li>
          <a href="/home" className="home">
            Home
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
