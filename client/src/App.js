import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/views/NavBar/NavBar";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Login from "./components/views/LoginPage/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";
import Information from "./components/views/Information/Information";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/information/:id" component={Information} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
