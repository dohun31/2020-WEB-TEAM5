import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/views/NavBar/NavBar";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Login from "./components/views/LoginPage/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";
import Information from "./components/views/Information/Information";
import Movie from "./components/views/Home/Movie";
import Auth from "./hoc/auth";
import axios from "axios";

function App() {
  const [auth, setauth] = useState(false);

  axios.get("/api/user/auth").then((value) => {
    if (value.data.user) {
      setauth(true);
    }
  });

  return (
    <div>
      <NavBar auth={auth} />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Auth(Home, false)} />
            <Route exact path="/movies" component={Movie} />
            <Route
              exact
              path="/information/:select/:id"
              component={Information}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
