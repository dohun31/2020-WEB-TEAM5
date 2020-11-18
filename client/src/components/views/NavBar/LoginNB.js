function LoginNB() {
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
          <a href="/mypage" className="login">
            마이페이지
          </a>
        </li>
        <li>
          <a href="/logout" className="register">
            로그아웃
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LoginNB;
